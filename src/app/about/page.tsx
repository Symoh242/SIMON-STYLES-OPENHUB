
import { PageHeader } from '@/components/shared/page-header';
import { directorsData, testimonialsData } from '@/lib/data';
import { DirectorProfileCard } from '@/components/about/director-profile-card';
import { TestimonialCard } from '@/components/about/testimonial-card';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About OpenSource Hub"
        description="Learn about our mission, our commitment to open source, and the talented team behind our success."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our Open-Source Philosophy
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At OpenSource Hub, we are passionate advocates for the power of open-source technology. We believe that collaboration, transparency, and community-driven development are key to building innovative and impactful solutions.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our commitment extends beyond just using open-source tools; we actively contribute to the community, share our knowledge, and foster an environment where open principles thrive. This approach allows us to deliver robust, flexible, and cost-effective services to our clients.
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                 <Image
                    src="https://picsum.photos/seed/code_community/600/400"
                    alt="Open Source Collaboration"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="code community"
                  />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Meet Our Leadership</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The driving force behind OpenSource Hub's innovation and success.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {directorsData.map((director) => (
              <DirectorProfileCard key={director.id} director={director} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Success Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how we've helped businesses like yours achieve their goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

