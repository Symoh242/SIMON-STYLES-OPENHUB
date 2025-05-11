
'use client';

import Image from 'next/image';
import type { Laptop } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LaptopCardProps {
  laptop: Laptop;
}

export function LaptopCard({ laptop }: LaptopCardProps) {
  const { toast } = useToast();

  const handleMpesaPayment = () => {
    // This is a placeholder for actual M-Pesa integration
    toast({
      title: "M-Pesa Payment Initiated (Demo)",
      description: `Proceed to pay KES ${laptop.dailyCharge.toLocaleString()}/day for ${laptop.brand} ${laptop.model}.`,
      variant: "default",
    });
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card group">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={laptop.imageUrl}
            alt={`${laptop.brand} ${laptop.model}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={laptop.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-1">{laptop.brand} {laptop.model}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-3">
          {laptop.specs.slice(0,2).join(' | ')}
        </CardDescription>
        <ul className="space-y-1 text-sm text-muted-foreground mb-4">
          {laptop.specs.map((spec, index) => (
            <li key={index} className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-primary shrink-0" /> {spec}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-6 pt-0 border-t mt-auto">
          <p className="text-2xl font-bold text-primary my-3">
            KES {laptop.dailyCharge.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">/ day</span>
          </p>
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" onClick={handleMpesaPayment}>
            <Tag className="mr-2 h-4 w-4" /> Lease with M-Pesa
          </Button>
          <p className="text-xs text-muted-foreground mt-2 text-center w-full">Hire purchase options available.</p>
      </CardFooter>
    </Card>
  );
}
