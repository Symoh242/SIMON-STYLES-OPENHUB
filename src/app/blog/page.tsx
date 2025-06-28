
import { PageHeader } from '@/components/shared/page-header';
import { blogPostsData } from '@/lib/data';
import { PostCard } from '@/components/blog/post-card';

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="The People's Blog"
        description="Stories, news, and unfiltered truths from across Kenya. A platform for the voices that need to be heard."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {blogPostsData.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPostsData.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No posts yet. Please check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
