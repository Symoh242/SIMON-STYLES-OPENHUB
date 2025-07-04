
import { PageHeader } from '@/components/shared/page-header';
import { blogPostsData } from '@/lib/data';
import { PostCard } from '@/components/blog/post-card';

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="My Projects"
        description="A collection of my work, from client projects to personal experiments. Each project represents a challenge I was excited to solve."
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
              <p className="text-xl text-muted-foreground">No projects yet. Please check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
