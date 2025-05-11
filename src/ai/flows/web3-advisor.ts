
'use server';

/**
 * @fileOverview Provides AI-driven contextual recommendations on web3 technologies based on user queries.
 *
 * - web3Advisor - A function that takes a user query and returns web3 technology recommendations.
 * - Web3AdvisorInput - The input type for the web3Advisor function.
 * - Web3AdvisorOutput - The return type for the web3Advisor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const Web3AdvisorInputSchema = z.object({
  query: z
    .string()
    .describe('The user query about web3 technologies and services.'),
});
export type Web3AdvisorInput = z.infer<typeof Web3AdvisorInputSchema>;

const Web3AdvisorOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('AI-driven contextual recommendations based on the user query.'),
});
export type Web3AdvisorOutput = z.infer<typeof Web3AdvisorOutputSchema>;

export async function web3Advisor(input: Web3AdvisorInput): Promise<Web3AdvisorOutput> {
  return web3AdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'web3AdvisorPrompt',
  input: {schema: Web3AdvisorInputSchema},
  output: {schema: Web3AdvisorOutputSchema},
  prompt: `You are a Web3 advisor. Provide AI-driven contextual recommendations based on the following user query: {{{query}}}.`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ]
  } // Removed trailing comma here
});

const web3AdvisorFlow = ai.defineFlow(
  {
    name: 'web3AdvisorFlow',
    inputSchema: Web3AdvisorInputSchema,
    outputSchema: Web3AdvisorOutputSchema // Removed trailing comma here
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
