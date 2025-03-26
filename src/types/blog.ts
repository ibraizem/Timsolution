
export interface BlogParagraph {
  type: 'heading' | 'paragraph' | 'list' | 'quote' | 'image';
  content?: string;
  items?: string[];
  author?: string;
  title?: string;
  src?: string;
  alt?: string;
  caption?: string;
}

export interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  content: BlogParagraph[];
}
