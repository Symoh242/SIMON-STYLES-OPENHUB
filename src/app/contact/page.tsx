
import { PageHeader } from '@/components/shared/page-header';
import { ContactForm } from '@/components/contact/contact-form';
import { NewsletterForm } from '@/components/contact/newsletter-form';
import { Web3AdvisorSection } from '@/components/contact/web3-advisor-section';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="We're here to help and answer any question you might have. We look forward to hearing from you!"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-semibold text-primary mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <div className="p-8 bg-card rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
                <div className="space-y-6 text-muted-foreground">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Our Office</h4>
                      <p>123 OpenSource Lane, Innovation City, OS 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p>info@simonstylesopenhub.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <NewsletterForm />
            </div>
          </div>
          <div className="mt-16">
            <Web3AdvisorSection />
          </div>
        </div>
      </section>
    </>
  );
}
