
import { PageHeader } from '@/components/shared/page-header';
import Image from 'next/image';
import { Code, Rocket, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Me"
        description="I'm a passionate Full-Stack Developer dedicated to building innovative and user-friendly web solutions."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                 <Image
                    src="https://picsum.photos/id/1/600/600"
                    alt="Simon Maina Wanjiru"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="developer portrait"
                  />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Simon Maina Wanjiru
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hello! I'm a creative and detail-oriented developer with a strong foundation in modern web technologies like Next.js, React, and Tailwind CSS. My journey in tech is driven by a desire to solve complex problems and craft seamless digital experiences.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                From designing responsive user interfaces to architecting robust back-end systems, I enjoy every aspect of the development process. I'm a lifelong learner, always eager to explore new tools and techniques to enhance my craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">My Philosophy</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                        <Code className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">Clean Code</h3>
                    <p className="text-lg text-muted-foreground">I believe in writing clean, efficient, and maintainable code that stands the test of time.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground mb-4">
                        <Target className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">User-Centric</h3>
                    <p className="text-lg text-muted-foreground">My focus is always on the end-user, ensuring an intuitive and engaging experience.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/80 text-primary-foreground mb-4">
                        <Rocket className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">Continuous Growth</h3>
                    <p className="text-lg text-muted-foreground">I am committed to continuous learning and staying ahead of industry trends.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
