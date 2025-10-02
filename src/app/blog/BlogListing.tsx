'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BentoCard from '@/components/UI/BentoCard';

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
};

interface BlogListingProps {
  posts: BlogPost[];
}

const BlogListing = ({ posts }: BlogListingProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(posts.map((post) => post.category)));
    return ['all', ...uniqueCategories];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  const featuredPost = useMemo(() => {
    return posts.find(
      (post) => post.featured && (selectedCategory === 'all' || post.category === selectedCategory),
    );
  }, [posts, selectedCategory]);

  const remainingPosts = useMemo(() => {
    return filteredPosts.filter((post) => post.id !== featuredPost?.id);
  }, [filteredPosts, featuredPost]);

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-clinical-creme to-clinical-grey">
        <div className="container-clinical text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Dental Health Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay informed about oral health, dental treatments, and tips for maintaining a beautiful, healthy smile with expert advice from our dental team.
          </p>
        </div>
      </section>

      <section className="py-8 bg-background border-b border-border">
        <div className="container-clinical">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="pl-10 rounded-bento"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-bento text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-clinical-grey text-muted-foreground hover:bg-clinical-creme'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="section-padding bg-background">
          <div className="container-clinical">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
              Featured Article
            </h2>
            <BentoCard className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-bento text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button asChild className="btn-primary">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="bg-clinical-grey rounded-bento h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📖</div>
                    <p>Featured Article Image</p>
                  </div>
                </div>
              </div>
            </BentoCard>
          </div>
        </section>
      )}

      <section className="section-padding bg-clinical-creme">
        <div className="container-clinical">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-foreground">Recent Articles</h2>
            <span className="text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <BentoCard className="p-12 text-center">
              <div className="text-muted-foreground">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No articles found</h3>
                <p>Try adjusting your search terms or category filter.</p>
              </div>
            </BentoCard>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <BentoCard key={post.id} className="group hover:border-primary/50 transition-colors">
                  <Link href={`/blog/${post.slug}`} className="block p-6">
                    <div className="bg-clinical-grey rounded-bento h-48 mb-6 flex items-center justify-center group-hover:bg-clinical-creme transition-colors">
                      <div className="text-center text-muted-foreground">
                        <div className="text-3xl mb-2">📰</div>
                        <p className="text-sm">Article Image</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-bento text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:text-primary transition-colors" />
                    </div>
                  </Link>
                </BentoCard>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-clinical text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Stay Updated on Oral Health
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest dental health tips, treatment updates, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground text-primary rounded-bento flex-1"
            />
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogListing;
