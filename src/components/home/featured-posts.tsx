
'use client';

import Link from 'next/link';
import { blogPostsData } from '@/lib/data';
import { PostCard } from '@/components/blog/post-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FeaturedPosts() {
  const featuredPosts = blogPostsData.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Latest Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Read the latest accounts and analyses from the ground.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
             <PostCard key={post.id} post={post} />
          ))}
        </div>
        {blogPostsData.length > 3 && (
          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/blog">
                View All Posts <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
