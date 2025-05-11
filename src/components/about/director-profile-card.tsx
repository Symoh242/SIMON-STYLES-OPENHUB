
import Image from 'next/image';
import type { Director } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface DirectorProfileCardProps {
  director: Director;
}

export function DirectorProfileCard({ director }: DirectorProfileCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg text-center bg-card group h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={director.imageUrl}
            alt={director.name}
            layout="fill"
            objectFit="cover"
            className="grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
            data-ai-hint={director.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <CardTitle className="text-xl font-semibold text-primary">{director.name}</CardTitle>
        <p className="text-sm text-accent font-medium mb-2">{director.title}</p>
        <CardDescription className="text-sm text-muted-foreground flex-grow">
          {director.bio}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
