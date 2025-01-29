import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import type { CompileOptions } from '@mdx-js/mdx';

const mdxConfig: CompileOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeRaw, rehypeStringify],
  providerImportSource: "@mdx-js/react",
};

export default mdxConfig;
