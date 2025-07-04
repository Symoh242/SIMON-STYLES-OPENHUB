
import { HeroSection } from '@/components/home/hero-section';
import { FeaturedPosts } from '@/components/home/featured-posts';
import { TestimonialCard } from '@/components/about/testimonial-card';
import { testimonialsData } from '@/lib/data';

function TestimonialsSection() {
  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">What Others Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            References from colleagues and clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
             <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPosts />
      <TestimonialsSection />
    </>
  );
}
