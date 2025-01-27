'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface BlogImageProps extends Omit<ImageProps, 'width' | 'height'> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  description?: string; // Description longue pour l'accessibilité
}

export default function BlogImage({
  src,
  alt,
  fill = false,
  priority = false,
  className,
  description,
  ...props
}: BlogImageProps) {
  const [error, setError] = useState(false);
  const fallbackImage = '/images/placeholder.svg'; // Image de fallback accessible
  const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

  // Configuration par défaut pour les images
  const defaultProps = {
    quality: 85,
    formats: ['webp'],
    sizes: fill
      ? '(max-width: 600px) 100vw, (max-width: 900px) 90vw, 1200px'
      : '(max-width: 600px) 100vw, (max-width: 900px) 800px, 1200px',
    style: {
      ...props.style,
      maxWidth: '100%',
      height: fill ? '100%' : 'auto',
    },
  };

  const imageComponent = (
    <div 
      role="img" 
      aria-label={alt}
      {...(description && { 'aria-describedby': `desc-${src}` })}
    >
      <Image
        src={error ? fallbackImage : src}
        alt={alt}
        {...(fill ? {
          fill: true,
          sizes: defaultProps.sizes,
          style: {
            ...defaultProps.style,
            objectFit: 'cover',
          },
        } : {
          width: 1200,
          height: 675,
        })}
        {...defaultProps}
        {...props}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onError={() => setError(true)}
        loading={priority ? 'eager' : 'lazy'}
        className={className}
      />
      {description && (
        <p 
          id={`desc-${src}`} 
          className="sr-only"
        >
          {description}
        </p>
      )}
    </div>
  );

  return imageComponent;
}
