
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Simon Maina Wanjiru
            </h1>
            <p className="mt-6 text-2xl font-semibold text-primary">
              Full-Stack Developer & Tech Enthusiast
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground sm:max-w-md lg:max-w-none">
              I build modern, responsive, and scalable web applications. Explore my work and get in touch to collaborate on your next project.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/blog">
                  View Projects <Code className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className={`relative transition-all duration-1000 ease-out delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Image
              src="https://picsum.photos/id/1/600/400"
              alt="Developer working on a laptop"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl object-cover mx-auto"
              data-ai-hint="developer coding"
              priority
            />
             <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full filter blur-2xl animate-pulse opacity-50  md:block hidden"></div>
             <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl animate-pulse opacity-50 delay-500 md:block hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
