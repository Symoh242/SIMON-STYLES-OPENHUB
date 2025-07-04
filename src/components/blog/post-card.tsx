import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const primaryLink = post.liveUrl || `/blog/${post.slug}`;
  const isExternal = !!post.liveUrl;

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card group">
      <CardHeader className="p-0">
        <Link 
          href={primaryLink}
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noopener noreferrer' : ''}
          className="block relative aspect-video w-full overflow-hidden"
        >
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={post.dataAiHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2">
          <Link 
            href={primaryLink}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : ''} 
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto flex justify-between items-center text-sm text-muted-foreground">
        <div>
          <p className="font-semibold text-foreground">{post.author}</p>
          <p>{post.date}</p>
        </div>
        <div className="flex items-center shrink-0 space-x-2">
            {post.liveUrl && (
                <Button asChild variant="outline" size="sm">
                    <Link href={post.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Site <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            )}
            <Button asChild variant="link" className="text-primary">
                <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
