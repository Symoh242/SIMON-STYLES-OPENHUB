
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPostsData } from '@/lib/data';
import { PageHeader } from '@/components/shared/page-header';

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={post.title}
      >
        <div className="mt-4 flex justify-center items-center gap-4 text-muted-foreground">
            <span>By {post.author}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
        </div>
      </PageHeader>
      
      <article className="py-12 md:py-16 bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={post.dataAiHint}
                />
            </div>

            <div className="text-lg text-foreground/90 leading-relaxed space-y-6 whitespace-pre-wrap">
                {post.content}
            </div>
        </div>
      </article>
    </>
  );
}
