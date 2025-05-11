
'use client';

import Link from 'next/link';
import { servicesData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ServicesOverview() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const displayedServices = servicesData.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Core Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Driving innovation with a comprehensive suite of development services.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {displayedServices.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ease-in-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: mounted ? `${index * 100}ms` : '0ms' }}
            >
              <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader className="items-center text-center pt-8">
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 inline-block">
                    <service.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardDescription className="px-6 pb-6 text-center flex-grow">
                  {service.description}
                </CardDescription>
                <CardFooter className="justify-center pb-8">
                  <Button variant="link" asChild className="text-primary hover:text-accent">
                    <Link href={`/services#${service.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        {servicesData.length > 4 && (
          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
