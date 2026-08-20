import type { Metadata } from 'next';
import BlogListing from './BlogListing';
import { blogPosts } from '@/data/blogData';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Austin Dental Health Blog & Advice | Dental Smiles',
  description:
    'Read the latest dental health tips, treatment guides, and expert oral hygiene advice from Dr. Divya Shetty and the Dental Smiles team in Austin, TX.',
  keywords: [
    'dental blog Austin',
    'oral health tips Austin',
    'dental care guides',
    'teeth whitening advice',
    'dental implants guide',
  ],
  alternates: {
    canonical: 'https://dental-smiles.vercel.app/blog',
  },
  openGraph: {
    title: 'Austin Dental Health Blog | Dental Smiles',
    description:
      'Expert dental health tips, treatment advice, and oral hygiene guides from Dental Smiles in Austin, TX.',
    url: 'https://dental-smiles.vercel.app/blog',
    type: 'website',
  },
};

const BlogPage = () => {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Blog', url: '/blog' }]} />
      <BlogListing posts={blogPosts} />
    </>
  );
};

export default BlogPage;
