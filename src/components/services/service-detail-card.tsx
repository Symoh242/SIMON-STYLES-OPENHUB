
import Image from 'next/image';
import type { Service } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceDetailCardProps {
  service: Service;
}

export function ServiceDetailCard({ service }: ServiceDetailCardProps) {
  return (
    <Card id={service.id} className="overflow-hidden shadow-lg w-full bg-card h-full flex flex-col">
      <CardHeader className="p-0">
        {service.imageUrl && (
          <div className="relative h-64 w-full">
            <Image
              src={service.imageUrl}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={service.dataAiHint}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 shrink-0">
            <service.icon className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-semibold text-primary">{service.title}</CardTitle>
        </div>
        <p className="text-muted-foreground leading-relaxed flex-grow">
          {service.longDescription}
        </p>
      </CardContent>
    </Card>
  );
}
