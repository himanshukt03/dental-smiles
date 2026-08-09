import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowLeft, Tag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogBySlug, getAllBlogSlugs } from "@/data/blogData";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogBySlug(slug);

    if (!post) {
        return {
            title: "Blog Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    // Get "Latest Articles" for Sidebar (excluding current)
    const latestPosts = blogPosts
        .filter((p) => p.id !== post.id)
        .slice(0, 4);

    // Get unique categories for Sidebar
    const categories = Array.from(new Set(blogPosts.map(p => p.category)));

    return (
        <div className="min-h-screen bg-background font-sans">
            {/* Top Navigation Bar */}
            <div className="bg-clinical-creme border-b border-border py-4">
                <div className="container-clinical">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm font-sans font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Articles
                    </Link>
                </div>
            </div>

            <div className="container-clinical py-12">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Main Content Column */}
                    <article className="lg:col-span-8">
                        {/* 1. Image First */}
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* 2. Title & Meta */}
                        <div className="mb-10">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 font-sans">
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium inline-flex items-center gap-1.5">
                                    <Tag className="w-3 h-3" />
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.date).toLocaleDateString("en-US")}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                </span>
                            </div>

                            <h1 className="blog-main-title text-foreground mb-6">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-3 pb-8 border-b border-border">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <User className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm font-sans">{post.author}</p>
                                    <p className="text-muted-foreground text-xs font-sans">Dental Professional</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Content - Using blog-prose for consistent Inter font */}
                        <div className="blog-prose prose prose-lg max-w-none">
                            {post.content.split("\n\n").map((paragraph, index) => {
                                // Handle headers
                                if (paragraph.startsWith("## ")) {
                                    return (
                                        <h2 key={index} className="text-2xl mt-10 mb-6 text-foreground">
                                            {paragraph.replace("## ", "")}
                                        </h2>
                                    );
                                }
                                if (paragraph.startsWith("### ")) {
                                    // Handle h3 heading - may have paragraph text after single newline
                                    const lines = paragraph.split("\n");
                                    const heading = lines[0].replace("### ", "");
                                    const remainingText = lines.slice(1).join("\n").trim();

                                    return (
                                        <React.Fragment key={index}>
                                            <h3 className="text-xl mt-8 mb-4 text-foreground">
                                                {heading}
                                            </h3>
                                            {remainingText && (
                                                <p className="mb-6" dangerouslySetInnerHTML={{
                                                    __html: remainingText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                                                }} />
                                            )}
                                        </React.Fragment>
                                    );
                                }
                                // Handle bullet lists
                                if (paragraph.startsWith("- ") || paragraph.includes("\n- ")) {
                                    // Split by newline+hyphen, then clean up each item
                                    const items = paragraph
                                        .split(/\n- /)
                                        .map(item => item.replace(/^- /, '').trim())
                                        .filter(Boolean);
                                    return (
                                        <ul key={index} className="space-y-3 my-6">
                                            {items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                }
                                // Handle numbered lists
                                if (/^\d+\.\s/.test(paragraph)) {
                                    // Split by newline+number, then clean up each item
                                    const items = paragraph
                                        .split(/\n\d+\.\s/)
                                        .map(item => item.replace(/^\d+\.\s/, '').trim())
                                        .filter(Boolean);
                                    return (
                                        <ol key={index} className="list-decimal pl-6 space-y-3 my-6 marker:text-primary marker:font-semibold">
                                            {items.map((item, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                                            ))}
                                        </ol>
                                    );
                                }
                                // Regular paragraphs
                                return (
                                    <p
                                        key={index}
                                        className="mb-6"
                                        dangerouslySetInnerHTML={{
                                            __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                                        }}
                                    />
                                );
                            })}
                        </div>

                        {/* Article CTA */}
                        <div className="mt-16 p-8 bg-clinical-creme rounded-2xl border border-border text-center">
                            <h3 className="text-2xl font-sans font-bold text-foreground mb-4">
                                Book Your Visit Today
                            </h3>
                            <p className="text-muted-foreground mb-8 max-w-lg mx-auto font-sans">
                                Prioritize your smile! Schedule an appointment with Dr. Divya Shetty at Dental Smiles in Austin, TX.
                            </p>
                            <Button asChild className="btn-primary" size="lg">
                                <Link href="/contact">Schedule Appointment</Link>
                            </Button>
                        </div>
                    </article>

                    {/* Sidebar Column */}
                    <aside className="lg:col-span-4 space-y-10">
                        {/* Latest Articles Widget */}
                        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
                            <h3 className="blog-sidebar-header text-foreground mb-6 pb-2 border-b border-border">
                                Latest Articles
                            </h3>
                            <div className="space-y-5">
                                {latestPosts.map((latest) => (
                                    <Link key={latest.id} href={`/blog/${latest.slug}`} className="group flex gap-3 items-start">
                                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                                            <Image
                                                src={latest.image}
                                                alt={latest.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="blog-sidebar-title text-foreground group-hover:text-primary transition-colors line-clamp-3 mb-1">
                                                {latest.title}
                                            </h4>
                                            <p className="blog-sidebar-date">
                                                {new Date(latest.date).toLocaleDateString("en-US")}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <Button variant="outline" className="w-full mt-6 font-sans text-xs" asChild>
                                <Link href="/blog">View All Articles</Link>
                            </Button>
                        </div>

                        {/* Categories Widget */}
                        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
                            <h3 className="blog-sidebar-header text-foreground mb-6 pb-2 border-b border-border">
                                Categories
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <Link
                                        key={cat}
                                        href={`/blog?category=${cat}`} // Note: This query param handling would need implementation in Listing
                                        className="text-xs font-medium font-sans bg-clinical-creme hover:bg-primary/10 hover:text-primary text-muted-foreground px-3 py-1.5 rounded-full transition-colors"
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Office Widget */}
                        <div className="bg-primary text-primary-foreground rounded-2xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-12 -mt-12 blur-3xl"></div>
                            <h3 className="text-xl font-sans font-bold mb-3 relative z-10">Dental Smiles</h3>
                            <p className="text-sm opacity-90 mb-6 relative z-10 leading-relaxed font-sans">
                                Family & Cosmetic Dentistry in Austin, TX. We are here to serve you with compassionate care.
                            </p>
                            <div className="space-y-3 relative z-10 text-sm font-medium font-sans">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <span>Monday/Wednesday: 8 AM - 1 PM, Tuesday/Thursday: 7 AM - 3 PM, Friday: 7 AM - 1 PM</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <span>Dr. Divya Shetty</span>
                                </div>
                            </div>
                            <Button variant="secondary" className="w-full mt-6 bg-white text-primary hover:bg-white/90 font-sans text-xs" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
