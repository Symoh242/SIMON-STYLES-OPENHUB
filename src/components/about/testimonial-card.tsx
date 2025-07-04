
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Testimonial } from '@/lib/data';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-card/80 backdrop-blur-sm flex flex-col h-full">
      <CardContent className="pt-6 flex flex-col flex-grow">
        <blockquote className="text-lg text-foreground/90 italic flex-grow">
          "{testimonial.quote}"
        </blockquote>
        <div className="mt-4 flex items-center pt-4 border-t">
          <Avatar className="h-12 w-12 mr-4">
             <Image src={testimonial.imageUrl} alt={testimonial.name} width={48} height={48} className="rounded-full" data-ai-hint={testimonial.dataAiHint} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-primary">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
