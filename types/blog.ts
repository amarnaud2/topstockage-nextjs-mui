export interface BlogPost {
  title: string;
  description: string;
  image: string;
  imageCopyright?: string;
  slug: string;
  category: string;
  datePublished: string;
  author: string;
  content?: string;
}

export interface BlogPostCardProps {
  post: Omit<BlogPost, 'content' | 'imageCopyright'>;
}
