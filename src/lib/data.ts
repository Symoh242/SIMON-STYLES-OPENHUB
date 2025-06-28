
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  dataAiHint: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: '1',
    slug: 'the-cost-of-silence',
    title: 'The Cost of Silence: A Nation in Waiting',
    excerpt: 'In the heart of our vibrant nation, a quiet unease simmers. The promises of a brighter future feel distant as everyday citizens grapple with economic hardship and a palpable sense of injustice...',
    content: `In the heart of our vibrant nation, a quiet unease simmers. The promises of a brighter future feel distant as everyday citizens grapple with economic hardship and a palpable sense of injustice. This is not just a story of politics; it's a story of people. It's the story of the market vendor whose prices are dictated by forces beyond her control, the student who dreams of a job that may not exist, and the parent who fears for their child's safety.\n\nWe are told to be patient, to trust the process. But patience wears thin when the cost of living climbs daily, while accountability remains a foreign concept to those in power. Intimidation, both subtle and overt, has become a tool to quell dissent. Questions are met with threats, and criticism is branded as treason.\n\nThis blog is a space for those stories to be told. It is a testament to the resilience of the Kenyan spirit and a call to reclaim the narrative. We must speak up, not out of malice, but out of a profound love for our country and a desire to see it heal and prosper for all, not just a select few.`,
    author: 'A Concerned Citizen',
    date: 'July 26, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'kenya flag',
  },
  {
    id: '2',
    slug: 'a-generation-betrayed',
    title: 'A Generation Betrayed: The Youth Cry Out',
    excerpt: 'They called us the "digital generation," the future leaders. Yet, we find ourselves at a crossroads, armed with education but stripped of opportunity. The system has failed us, and our voices are rising...',
    content: `They called us the "digital generation," the future leaders. Yet, we find ourselves at a crossroads, armed with education but stripped of opportunity. The system has failed us, and our voices are rising from the streets of Nairobi to the smallest villages.\n\nThe recent protests are not a sign of chaos, but a symptom of a deep-seated betrayal. We marched for our future, for a fair chance, for an end to the corruption that suffocates our potential. In return, we were met with force, with tear gas, and with bullets. Our pleas for dialogue were answered with violence.\n\nThis is the reality for the youth in Kenya today. We are not hooligans; we are patriots. We are not idle; we are fighting for the very soul of our nation. Let this be a record of our struggle, a reminder that the spirit of a generation cannot be silenced.`,
    author: 'Youth for Kenya',
    date: 'July 24, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'protest crowd',
  },
  {
    id: '3',
    slug: 'what-is-the-finance-bill',
    title: 'Explainer: What is the Finance Bill and Why Does It Matter?',
    excerpt: 'The term "Finance Bill" is on everyone\'s lips, but what does it actually mean for the average Kenyan? Here\'s a simple breakdown of its impact on your wallet and your rights.',
    content: `The term "Finance Bill" is on everyone's lips, but what does it actually mean for the average Kenyan? It can seem complex, but its effects are simple and direct.\n\nIn essence, the Finance Bill is the government's plan to raise money. It outlines new taxes and changes to existing ones. The recent bill proposed taxes on basic necessities – from bread to mobile money transfers – placing a heavy burden on citizens who are already struggling.\n\nWhy the outrage? Because it felt like a punishment, not a plan. It increased the cost of living without a clear vision for how the money would be used to benefit the people. It represented a disconnect between the government and the governed. Understanding the Finance Bill is the first step to demanding fiscal responsibility and a government that serves its people.`,
    author: 'Economic Justice Network',
    date: 'July 22, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'money kenya',
  },
];
