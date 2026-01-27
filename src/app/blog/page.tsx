import BlogListing from './BlogListing';
import { blogPosts } from '@/data/blogData';

export const metadata = {
  title: 'Dental Health Blog',
  description:
    'Read the latest dental health tips, treatment guides, and patient care advice from the Dental Smiles team in Austin, TX.',
  keywords: [
    'dental blog Austin',
    'oral health tips',
    'dental care advice',
    'teeth whitening tips',
    'dental implants info',
  ],
  openGraph: {
    title: 'Dental Health Blog | Dental Smiles',
    description:
      'Read the latest dental health tips, treatment guides, and patient care advice from the Dental Smiles team.',
  },
};


const BlogPage = () => {
  return <BlogListing posts={blogPosts} />;
};

export default BlogPage;
