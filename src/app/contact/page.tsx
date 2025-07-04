
import { PageHeader } from '@/components/shared/page-header';
import { ContactForm } from '@/components/contact/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Me"
        description="Have a project in mind or want to connect? I'd love to hear from you. Fill out the form below or reach out via email."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <div className="p-8 bg-card rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-6">Contact Details</h3>
                <div className="space-y-6 text-muted-foreground">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <a href="mailto:simonwanjiru224@gmail.com" className="hover:text-primary transition-colors">simonwanjiru224@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p>0758673616</p>
                      <p>0100586619</p>
                    </div>
                  </div>
                   <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p>Revlon Professional Plaza</p>
                      <p>2nd Floor, Shop Number One</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
