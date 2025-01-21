'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  style?: React.CSSProperties;
}

export default function BlogImage({ src, alt, fill, priority, style }: BlogImageProps) {
  const [error, setError] = useState(false);
  // Utilisation d'une image par défaut en ligne en attendant
  const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub24gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=';

  return (
    <Image
      src={error ? fallbackImage : src}
      alt={alt}
      fill={fill}
      priority={priority}
      style={style}
      onError={() => setError(true)}
    />
  );
}
