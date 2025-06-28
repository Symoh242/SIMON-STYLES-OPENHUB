
import { PageHeader } from '@/components/shared/page-header';
import Image from 'next/image';
import { Heart, Mic } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About This Space"
        description="This platform was born out of a necessity to speak truth, to document our stories, and to create a record for the world to see."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                 <Image
                    src="https://placehold.co/600/600.png"
                    alt="Map of Kenya"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="kenya map"
                  />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are a collective of ordinary Kenyans who believe in the power of truth and the right to be heard. In times of uncertainty and intimidation, silence is not an option. Our mission is to provide a safe and uncensored platform for citizens to share their experiences, observations, and hopes for a better Kenya.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                This is a space free from political affiliation and corporate interest. It is funded by the people, for the people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Principles</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                        <Mic className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">Unfiltered Voices</h3>
                    <p className="text-lg text-muted-foreground">We believe every story matters. We publish firsthand accounts and analyses from citizens on the ground, without censorship.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground mb-4">
                        <Heart className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">For Kenya, With Love</h3>
                    <p className="text-lg text-muted-foreground">Our work is driven by a deep love for our country and its people. We advocate for peace, justice, and accountability.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
