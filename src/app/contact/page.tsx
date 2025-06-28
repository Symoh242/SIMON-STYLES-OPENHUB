
import { PageHeader } from '@/components/shared/page-header';
import { ContactForm } from '@/components/contact/contact-form';
import { ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Share Your Story"
        description="Your voice is powerful. If you have a story, an experience, or evidence to share, please use the form below. Your identity can remain anonymous if you choose."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <div className="p-8 bg-card rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-6">Our Commitment</h3>
                <div className="space-y-6 text-muted-foreground">
                  <div className="flex items-start">
                    <ShieldCheck className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Anonymity & Security</h4>
                      <p>We take your privacy seriously. You do not need to provide your real name or email. We recommend using secure and anonymous email services if you wish to be contacted.</p>
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
