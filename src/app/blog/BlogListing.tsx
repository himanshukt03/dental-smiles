'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Search, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BlogPost } from '@/data/blogData';

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

  // Filter posts based on search and selected category
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

  // Identify Featured Post (First one that matches criteria, or the explicit featured one)
  const featuredPost = useMemo(() => {
    return filteredPosts.find((post) => post.featured) || filteredPosts[0];
  }, [filteredPosts]);

  // Identify "Trending" or "Recent" Side List (Next 4 posts)
  const sidebarPosts = useMemo(() => {
    if (!featuredPost) return [];
    return filteredPosts.filter((p) => p.id !== featuredPost.id).slice(0, 4);
  }, [filteredPosts, featuredPost]);

  // Identify Remaining Posts for Bottom Grid
  const gridPosts = useMemo(() => {
    if (!featuredPost) return [];
    const sidebarIds = new Set(sidebarPosts.map((p) => p.id));
    return filteredPosts.filter(
      (p) => p.id !== featuredPost.id && !sidebarIds.has(p.id)
    );
  }, [filteredPosts, featuredPost, sidebarPosts]);

  const isEmpty = filteredPosts.length === 0;

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header / Intro */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-clinical-creme to-clinical-grey">
        <div className="container-clinical text-center">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4 leading-tight">
            Dental Health Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-sans">
            Expert advice, tips, and updates from the Dental Smiles team to help you keep your smile healthy and bright.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 rounded-full border-primary/20 bg-white/80 backdrop-blur focus:bg-white transition-all shadow-sm font-sans"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50 bg-background/95">
        <div className="container-clinical px-8 md:px-16 lg:px-24">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border font-sans ${selectedCategory === category
                  ? 'bg-primary text-primary-foreground border-primary shadow-md'
                  : 'bg-white text-muted-foreground border-border hover:border-primary/50 hover:bg-clinical-creme'
                  }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-clinical">
          {isEmpty ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-sans font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground font-sans">Try adjusting your search or category.</p>
              <Button
                variant="link"
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="mt-4 font-sans"
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="space-y-12">

              {/* Featured + Sidebar Layout */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Featured Post (Left) */}
                {featuredPost && (
                  <div className="lg:col-span-8">
                    <Link href={`/blog/${featuredPost.slug}`} className="group block h-full">
                      <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary uppercase tracking-wider shadow-sm font-sans">
                            Featured
                          </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col flex-1">
                          <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-3 font-sans">
                            <span className="flex items-center gap-1 bg-primary/5 text-primary px-2 py-1 rounded-md">
                              <Tag className="w-3 h-3" />
                              {featuredPost.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(featuredPost.date).toLocaleDateString('en-US')}
                            </span>
                          </div>

                          <h2 className="blog-featured-title text-foreground mb-3 group-hover:text-primary transition-colors">
                            {featuredPost.title}
                          </h2>
                          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 flex-1 line-clamp-3 font-sans">
                            {featuredPost.excerpt}
                          </p>

                          <div className="flex items-center gap-3 mt-auto">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <User className="w-4 h-4" />
                            </div>
                            <div className="text-sm font-sans">
                              <p className="font-semibold text-foreground leading-none">{featuredPost.author}</p>
                            </div>
                            <div className="ml-auto inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform font-sans text-sm">
                              Read Article <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}

                {/* Sidebar (Right) - Recent/Trending */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <h3 className="blog-sidebar-header text-foreground">Latest Articles</h3>
                    <Link href="#" className="text-[9px] text-primary hover:underline font-sans">View All</Link>
                  </div>

                  <div className="flex flex-col gap-5">
                    {sidebarPosts.map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-3 items-start">
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          {/* Lower font size and line spacing as requested */}
                          <h4 className="blog-sidebar-title text-foreground group-hover:text-primary transition-colors line-clamp-3">
                            {post.title}
                          </h4>
                          <span className="blog-sidebar-date">
                            {new Date(post.date).toLocaleDateString('en-US')}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Decorative Card */}
                  <div className="mt-4 bg-primary text-primary-foreground p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8 blur-xl"></div>
                    <div className="relative z-10">
                      <h4 className="text-base font-sans font-semibold mb-2">Need a Checkup?</h4>
                      <p className="text-primary-foreground/90 text-xs mb-3 font-sans leading-relaxed">
                        Schedule your visit today and keep your smile healthy!
                      </p>
                      <Button variant="secondary" size="sm" asChild className="w-full bg-white text-primary hover:bg-white/90 font-sans text-xs h-8">
                        <Link href="/contact">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Grid (Remaining Posts) */}
              {gridPosts.length > 0 && (
                <div>
                  <h3 className="text-lg font-sans font-bold text-foreground mb-6">More Articles</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gridPosts.map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                        {/* Reduced Image Height as requested */}
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="bg-white/90 backdrop-blur text-foreground text-[10px] font-bold px-2 py-1 rounded-md shadow-sm font-sans uppercase tracking-wide">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="blog-card-meta flex items-center gap-2 text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString("en-US")}</span>
                            <span className="w-1 h-1 bg-border rounded-full"></span>
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>

                          <h4 className="blog-card-title text-foreground mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-muted-foreground text-xs line-clamp-2 mb-4 font-sans leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground font-sans font-bold">DS</div>
                              <span className="blog-card-meta text-muted-foreground">Dental Smiles</span>
                            </div>
                            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogListing;
