
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Loader2 } from 'lucide-react';

const newsletterFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

export function NewsletterForm() {
  const { toast } = useToast();
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(data: NewsletterFormValues) {
    // Simulate newsletter subscription
    console.log('Newsletter subscription:', data);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: 'Subscribed!',
      description: 'Thank you for subscribing to our newsletter.',
    });
    form.reset();
  }

  return (
    <div className="mt-12 p-8 bg-secondary/50 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-primary mb-4">Stay Updated</h3>
      <p className="text-muted-foreground mb-6">
        Subscribe to our newsletter to get the latest news, updates, and special offers.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} className="bg-background"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
             {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                Subscribe <Mail className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
