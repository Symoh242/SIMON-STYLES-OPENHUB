
'use client';

import { useState } from 'react';
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
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { web3Advisor, type Web3AdvisorOutput } from '@/ai/flows/web3-advisor';

const advisorSchema = z.object({
  query: z.string().min(10, { message: 'Query must be at least 10 characters.' }),
});
type AdvisorFormValues = z.infer<typeof advisorSchema>;

export function Web3AdvisorSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Web3AdvisorOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<AdvisorFormValues>({
    resolver: zodResolver(advisorSchema),
    defaultValues: { query: '' },
  });

  async function onSubmit(data: AdvisorFormValues) {
    setIsLoading(true);
    setRecommendation(null);
    setError(null);
    try {
      const result = await web3Advisor({ query: data.query });
      setRecommendation(result);
    } catch (err) {
      console.error('Error fetching Web3 advice:', err);
      setError('Failed to get advice. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="mt-12 shadow-lg bg-card">
      <CardHeader>
        <div className="flex items-center mb-2">
          <Wand2 className="h-8 w-8 mr-3 text-primary" />
          <CardTitle className="text-2xl font-semibold text-primary">AI Web3 Advisor</CardTitle>
        </div>
        <CardDescription>
          Have questions about Web3 technologies or services? Ask our AI advisor for contextual recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Web3 Query</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., What are the best Layer 2 solutions for scalability? or How can I integrate NFTs into my existing platform?"
                      className="min-h-[100px] bg-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Getting Advice...
                </>
              ) : (
                <>
                  Ask AI Advisor <Wand2 className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>

        {error && (
          <div className="mt-6 p-4 bg-destructive/10 text-destructive rounded-md border border-destructive/30">
            <p>{error}</p>
          </div>
        )}

        {recommendation && recommendation.recommendations && (
          <div className="mt-8 p-6 bg-secondary/50 rounded-lg border">
            <h4 className="text-lg font-semibold text-foreground mb-2">AI Recommendation:</h4>
            <p className="text-muted-foreground whitespace-pre-wrap">{recommendation.recommendations}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
