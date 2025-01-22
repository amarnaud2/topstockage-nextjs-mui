import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import type { MDXOptions } from '@mdx-js/loader';

const mdxConfig: MDXOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeRaw, rehypeStringify],
  providerImportSource: "@mdx-js/react",
};

export default mdxConfig;
