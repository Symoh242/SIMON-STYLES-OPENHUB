
import type { LucideIcon } from 'lucide-react';
import { Code, Database, Share2, Globe } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  imageUrl?: string;
  dataAiHint?: string;
}

export interface Laptop {
  id: string;
  brand: string;
  model: string;
  specs: string[];
  dailyCharge: number;
  imageUrl: string;
  dataAiHint: string;
}

export interface Director {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  dataAiHint: string;
}

export interface Testimonial {
  id:string;
  projectName: string;
  description: string;
  websiteUrl: string;
  imageUrl: string;
  dataAiHint: string;
}

export const servicesData: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Crafting modern, responsive websites tailored to your needs.',
    longDescription: 'Our web development services focus on creating high-performance, feature-rich, and visually stunning websites. We utilize the latest technologies and frameworks to ensure your online presence is robust, scalable, and user-friendly. From e-commerce platforms to corporate websites, we deliver solutions that drive engagement and achieve business goals.',
    icon: Globe,
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'alejandro laptop'
  },
  {
    id: 'system-dev',
    title: 'System Development',
    description: 'Building robust and scalable software systems for various platforms.',
    longDescription: 'We specialize in developing custom software systems, including enterprise applications, CRM solutions, and backend infrastructures. Our approach emphasizes reliability, security, and scalability, ensuring your systems can grow with your business. We work closely with you to understand your requirements and deliver tailored solutions that streamline operations and enhance productivity.',
    icon: Database,
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'alejandro laptop'
  },
  {
    id: 'blockchain-dev',
    title: 'Blockchain Development',
    description: 'Innovative blockchain solutions for decentralized applications.',
    longDescription: 'Explore the potential of decentralized technology with our blockchain development services. We design and build custom blockchain solutions, smart contracts, and DApps across various platforms. Whether you are looking to integrate blockchain into your existing systems or build a new decentralized application, our experts can guide you through the process.',
    icon: Share2,
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'alejandro laptop'
  },
  {
    id: 'web3-services',
    title: 'Web3 Services',
    description: 'Comprehensive services for the next generation of the internet.',
    longDescription: 'Navigate the evolving Web3 landscape with our expert services. We offer consultation, development, and integration for NFT marketplaces, DeFi platforms, DAOs, and more. Our team stays at the forefront of Web3 technologies to help you leverage decentralization, tokenization, and community-driven ecosystems for innovative business models.',
    icon: Code,
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'alejandro laptop'
  },
];

export const laptopsData: Laptop[] = [
  {
    id: 'laptop-1',
    brand: 'Dell',
    model: 'XPS 13',
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', '13.3" FHD Display'],
    dailyCharge: 1500,
    imageUrl: 'https://picsum.photos/id/1/400/300',
    dataAiHint: 'alejandro laptop'
  },
  {
    id: 'laptop-2',
    brand: 'Apple',
    model: 'MacBook Pro 14"',
    specs: ['M3 Pro Chip', '18GB RAM', '512GB SSD', '14" Liquid Retina XDR'],
    dailyCharge: 2500,
    imageUrl: 'https://picsum.photos/id/1/400/300',
    dataAiHint: 'alejandro laptop'
  },
  {
    id: 'laptop-3',
    brand: 'Lenovo',
    model: 'ThinkPad X1 Carbon',
    specs: ['Intel Core i5', '16GB RAM', '1TB SSD', '14" WQHD Display'],
    dailyCharge: 1800,
    imageUrl: 'https://picsum.photos/id/1/400/300',
    dataAiHint: 'alejandro laptop'
  },
  {
    id: 'laptop-4',
    brand: 'HP',
    model: 'Spectre x360',
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', '13.5" OLED Touch'],
    dailyCharge: 2000,
    imageUrl: 'https://picsum.photos/id/1/400/300',
    dataAiHint: 'alejandro laptop'
  },
];

export const directorsData: Director[] = [
  {
    id: 'director-1',
    name: 'Simon Maina Wanjiru',
    title: 'CEO and Founder',
    bio: 'Simon leads Simon Styles Hub with a vision for innovation and excellence, drawing on extensive experience in technology and leadership.',
    imageUrl: 'https://picsum.photos/id/1/300/300',
    dataAiHint: 'alejandro laptop'
  },
  {
    id: 'director-2',
    name: 'Mathew Ndeto',
    title: 'Lead Engineer Developer',
    bio: 'Mathew spearheads our engineering efforts, ensuring the development of robust and cutting-edge solutions.',
    imageUrl: 'https://picsum.photos/id/1/300/300',
    dataAiHint: 'alejandro laptop'
  },
  {
    id: 'director-3',
    name: 'Anthony Waweru',
    title: 'System Analyst',
    bio: 'Anthony provides critical insights through system analysis, optimizing processes and technology for Simon Styles Hub.',
    imageUrl: 'https://picsum.photos/id/1/300/300',
    dataAiHint: 'alejandro laptop'
  },
  {
    id: 'director-4',
    name: 'Esther Nyambura',
    title: 'Lead Developer',
    bio: 'Esther plays a key role in our development team, contributing to the creation of high-quality software solutions.',
    imageUrl: 'https://picsum.photos/id/1/300/300',
    dataAiHint: 'alejandro laptop'
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    projectName: 'EcoFriendly Marketplace',
    description: 'Simon Styles Hub developed a stunning e-commerce platform that boosted our sales by 40%. Their team was professional and highly skilled.',
    websiteUrl: '#',
    imageUrl: 'https://picsum.photos/id/1/500/350',
    dataAiHint: 'alejandro project'
  },
  {
    id: 'testimonial-2',
    projectName: 'Decentralized Finance App',
    description: 'Their expertise in blockchain technology was invaluable in creating our DeFi application. Highly recommended for Web3 projects.',
    websiteUrl: '#',
    imageUrl: 'https://picsum.photos/id/1/500/350',
    dataAiHint: 'alejandro project'
  },
  {
    id: 'testimonial-3',
    projectName: 'Community Portal System',
    description: 'The custom system they built streamlined our community management. Excellent communication and on-time delivery.',
    websiteUrl: '#',
    imageUrl: 'https://picsum.photos/id/1/500/350',
    dataAiHint: 'alejandro project'
  },
  {
    id: 'testimonial-4',
    projectName: 'AI Powered Analytics Tool',
    description: 'We are extremely pleased with the analytics tool developed by Simon Styles Hub. It has provided us with critical insights for our business strategy.',
    websiteUrl: '#',
    imageUrl: 'https://picsum.photos/id/1/500/350',
    dataAiHint: 'alejandro project'
  },
];

