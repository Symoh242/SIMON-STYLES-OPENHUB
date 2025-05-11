
import { PageHeader } from '@/components/shared/page-header';
import { servicesData } from '@/lib/data';
import { ServiceDetailCard } from '@/components/services/service-detail-card';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="We offer a wide range of development services to bring your ideas to life. Explore our expertise in various cutting-edge technologies."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {servicesData.map((service) => (
              <ServiceDetailCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
