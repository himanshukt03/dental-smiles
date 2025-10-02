import BlogListing, { type BlogPost } from './BlogListing';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'importance-of-regular-dental-checkups',
    title: 'The Importance of Regular Dental Checkups',
    excerpt:
      'Discover why routine dental visits are crucial for maintaining optimal oral health and preventing serious dental issues before they become expensive problems.',
    author: 'Dr. Sarah Smith',
    date: '2024-01-15',
    category: 'Preventive Care',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    slug: 'teeth-whitening-options-guide',
    title: 'Professional vs. At-Home Teeth Whitening: A Complete Guide',
    excerpt:
      'Explore the different teeth whitening options available, from professional treatments to at-home solutions, and find the best approach for your needs.',
    author: 'Dr. Michael Johnson',
    date: '2024-01-10',
    category: 'Cosmetic Dentistry',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 3,
    slug: 'dental-anxiety-management-tips',
    title: 'Overcoming Dental Anxiety: Tips and Techniques',
    excerpt:
      'Learn practical strategies to manage dental anxiety and fear, including relaxation techniques and sedation options available at our practice.',
    author: 'Dr. Sarah Smith',
    date: '2024-01-05',
    category: 'Patient Care',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 4,
    slug: 'oral-health-during-pregnancy',
    title: 'Maintaining Oral Health During Pregnancy',
    excerpt:
      'Important information for expectant mothers about dental care during pregnancy, including safe treatments and preventive measures.',
    author: 'Dr. Michael Johnson',
    date: '2023-12-28',
    category: 'General Health',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 5,
    slug: 'dental-implants-vs-dentures',
    title: 'Dental Implants vs. Dentures: Making the Right Choice',
    excerpt:
      'Compare dental implants and dentures to understand which tooth replacement option is best for your lifestyle and oral health needs.',
    author: 'Dr. Sarah Smith',
    date: '2023-12-20',
    category: 'Restorative Dentistry',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 6,
    slug: 'children-dental-care-guide',
    title: "A Parent's Guide to Children's Dental Care",
    excerpt:
      "Essential tips for parents on maintaining their children's oral health, from first teeth to teenage years, including when to start dental visits.",
    author: 'Dr. Michael Johnson',
    date: '2023-12-15',
    category: 'Pediatric Dentistry',
    readTime: '6 min read',
    featured: true,
  },
];

export const metadata = {
  title: 'Dental Health Blog',
  description:
    'Read the latest dental health tips, treatment guides, and patient care advice from the Dental Smiles team.',
};

const BlogPage = () => {
  return <BlogListing posts={blogPosts} />;
};

export default BlogPage;
