import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  datePublished: string;
  dateRetired?: string;
  author: string;
  keywords: string[];
  image: string;
  imageCopyright: string;
  canonical: string;
  content: string;
  category: string;
}

export const getBlogPost = cache(async (category: string, slug: string): Promise<BlogPost | null> => {
  try {
    const fullPath = path.join(contentDirectory, category, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      ...data,
      category,
      slug,
      content,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post: ${category}/${slug}`, error);
    return null;
  }
});

export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  const categories = ['nas', 'ssd', 'hdd'];
  const posts: BlogPost[] = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDirectory, category);
    if (!fs.existsSync(categoryPath)) continue;

    const files = fs.readdirSync(categoryPath);
    for (const file of files) {
      if (!file.endsWith('.mdx')) continue;

      const slug = file.replace(/\.mdx$/, '');
      const post = await getBlogPost(category, slug);
      if (post) posts.push(post);
    }
  }

  return posts.sort((a, b) => 
    new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
});

export const getPostsByCategory = cache(async (category: string): Promise<BlogPost[]> => {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.category === category);
});

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const [category, postSlug] = slug.split('/');
  const filePath = path.join(contentDirectory, category, `${postSlug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    ...data,
    slug,
    content,
    category,
  } as BlogPost;
}
