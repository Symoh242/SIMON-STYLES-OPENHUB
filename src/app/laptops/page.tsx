
import { PageHeader } from '@/components/shared/page-header';
import { laptopsData } from '@/lib/data';
import { LaptopCard } from '@/components/laptops/laptop-card';

export default function LaptopsPage() {
  return (
    <>
      <PageHeader
        title="Laptop Leasing & Hire Purchase"
        description="Get access to high-performance laptops on flexible daily leasing or hire purchase plans. Perfect for developers, designers, and businesses."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {laptopsData.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {laptopsData.map((laptop) => (
                <LaptopCard key={laptop.id} laptop={laptop} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No laptops currently available. Please check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
