
import Image from 'next/image';
import Link from 'next/link';
import type { Testimonial } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card group">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={testimonial.imageUrl}
            alt={testimonial.projectName}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={testimonial.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2">{testimonial.projectName}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          "{testimonial.description}"
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
          <Link href={testimonial.websiteUrl} target="_blank" rel="noopener noreferrer">
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
