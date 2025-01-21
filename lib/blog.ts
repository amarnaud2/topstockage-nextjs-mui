import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
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
};

export async function getAllPosts(): Promise<BlogPost[]> {
  const categories = ['nas', 'ssd', 'hdd'];
  const posts: BlogPost[] = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDirectory, category);
    if (!fs.existsSync(categoryPath)) continue;

    const files = fs.readdirSync(categoryPath);
    const categoryPosts = files
      .filter(file => file.endsWith('.mdx'))
      .map(file => {
        const filePath = path.join(categoryPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        const slug = `${category}/${path.basename(file, '.mdx')}`;
        
        return {
          ...data,
          slug,
          content,
          category,
        } as BlogPost;
      });

    posts.push(...categoryPosts);
  }

  return posts.sort((a, b) => 
    new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.category === category);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
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
