'use client';

import { DefaultSeo } from 'next-seo';
import seoConfig from '@/app/seo.config';

export default function ClientSeo() {
  return <DefaultSeo {...seoConfig} />;
}
