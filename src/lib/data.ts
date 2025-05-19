
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
    imageUrl: 'https://images.pexels.com/photos/12345/coding-setup.jpg', // Example Pexels URL
    dataAiHint: 'web development'
  },
  {
    id: 'system-dev',
    title: 'System Development',
    description: 'Building robust and scalable software systems for various platforms.',
    longDescription: 'We specialize in developing custom software systems, including enterprise applications, CRM solutions, and backend infrastructures. Our approach emphasizes reliability, security, and scalability, ensuring your systems can grow with your business. We work closely with you to understand your requirements and deliver tailored solutions that streamline operations and enhance productivity.',
    icon: Database,
    imageUrl: 'https://picsum.photos/seed/system_architecture_diagram/600/400',
    dataAiHint: 'system architecture'
  },
  {
    id: 'blockchain-dev',
    title: 'Blockchain Development',
    description: 'Innovative blockchain solutions for decentralized applications.',
    longDescription: 'Explore the potential of decentralized technology with our blockchain development services. We design and build custom blockchain solutions, smart contracts, and DApps across various platforms. Whether you are looking to integrate blockchain into your existing systems or build a new decentralized application, our experts can guide you through the process.',
    icon: Share2,
    imageUrl: 'https://picsum.photos/seed/blockchain_network_nodes/600/400',
    dataAiHint: 'blockchain nodes'
  },
  {
    id: 'web3-services',
    title: 'Web3 Services',
    description: 'Comprehensive services for the next generation of the internet.',
    longDescription: 'Navigate the evolving Web3 landscape with our expert services. We offer consultation, development, and integration for NFT marketplaces, DeFi platforms, DAOs, and more. Our team stays at the forefront of Web3 technologies to help you leverage decentralization, tokenization, and community-driven ecosystems for innovative business models.',
    icon: Code,
    imageUrl: 'https://picsum.photos/seed/web3_metaverse_abstract/600/400',
    dataAiHint: 'web3 metaverse'
  },
];

export const laptopsData: Laptop[] = [
  {
    id: 'laptop-1',
    brand: 'Dell',
    model: 'XPS 13',
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', '13.3" FHD Display'],
    dailyCharge: 1500,
    imageUrl: 'https://picsum.photos/seed/modern_laptop_desk/400/300',
    dataAiHint: 'modern laptop'
  },
  {
    id: 'laptop-2',
    brand: 'Apple',
    model: 'MacBook Pro 14"',
    specs: ['M3 Pro Chip', '18GB RAM', '512GB SSD', '14" Liquid Retina XDR'],
    dailyCharge: 2500,
    imageUrl: 'https://picsum.photos/seed/apple_macbook_pro_screen/400/300',
    dataAiHint: 'macbook pro'
  },
  {
    id: 'laptop-3',
    brand: 'Lenovo',
    model: 'ThinkPad X1 Carbon',
    specs: ['Intel Core i5', '16GB RAM', '1TB SSD', '14" WQHD Display'],
    dailyCharge: 1800,
    imageUrl: 'https://picsum.photos/seed/lenovo_thinkpad_keyboard/400/300',
    dataAiHint: 'thinkpad keyboard'
  },
  {
    id: 'laptop-4',
    brand: 'HP',
    model: 'Spectre x360',
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', '13.5" OLED Touch'],
    dailyCharge: 2000,
    imageUrl: 'https://picsum.photos/seed/hp_spectre_convertible/400/300',
    dataAiHint: 'hp spectre'
  },
];

export const directorsData: Director[] = [
  {
    id: 'director-1',
    name: 'Alice Wonderland',
    title: 'CEO & Lead Strategist',
    bio: 'Alice drives the vision of OpenSource Hub, leveraging her extensive experience in tech leadership and open-source advocacy to foster innovation and growth.',
    imageUrl: 'https://picsum.photos/seed/female_ceo_portrait_modern/300/300',
    dataAiHint: 'female ceo'
  },
  {
    id: 'director-2',
    name: 'Bob The Builder',
    title: 'CTO & Head of Engineering',
    bio: 'Bob leads our talented engineering teams, ensuring technical excellence and the adoption of cutting-edge technologies in all our projects.',
    imageUrl: 'https://picsum.photos/seed/male_cto_coding_background/300/300',
    dataAiHint: 'male cto'
  },
  {
    id: 'director-3',
    name: 'Carol Danvers',
    title: 'Head of Blockchain & Web3',
    bio: 'Carol is a pioneer in the blockchain space, guiding our Web3 initiatives and helping clients navigate the complexities of decentralized technologies.',
    imageUrl: 'https://picsum.photos/seed/female_blockchain_expert_tech/300/300',
    dataAiHint: 'blockchain expert'
  },
  {
    id: 'director-4',
    name: 'Dave Lister',
    title: 'Director of Operations',
    bio: 'Dave ensures smooth operations and project delivery, focusing on client satisfaction and efficient processes across the company.',
    imageUrl: 'https://picsum.photos/seed/male_operations_manager_office/300/300',
    dataAiHint: 'operations manager'
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    projectName: 'EcoFriendly Marketplace',
    description: 'OpenSource Hub developed a stunning e-commerce platform that boosted our sales by 40%. Their team was professional and highly skilled.',
    websiteUrl: '#',
    imageUrl: 'https://picsum.photos/seed/ecommerce_growth_chart_interface/500/350',
    dataAiHint: 'ecommerce interface'
  },
  {
    id: 'testimonial-2',
    projectName: 'Decentralized Finance App',
    description: 'Their expertise in blockchain technology was invaluable in creating our DeFi application. Highly recommended for Web3 projects.',
    websiteUrl: '#',
    imageUrl: 'https://picsum.photos/seed/defi_crypto_dashboard_dark/500/350',
    dataAiHint: 'defi dashboard'
  },
  {
    id: 'testimonial-3',
    projectName: 'Community Portal System',
    description: 'The custom system they built streamlined our community management. Excellent communication and on-time delivery.',
    websiteUrl: '#',
    imageUrl: 'https://picsum.photos/seed/online_community_collaboration_platform/500/350',
    dataAiHint: 'community platform'
  },
  {
    id: 'testimonial-4',
    projectName: 'AI Powered Analytics Tool',
    description: 'We are extremely pleased with the analytics tool developed by OpenSource Hub. It has provided us with critical insights for our business strategy.',
    websiteUrl: '#',
    imageUrl: 'https://picsum.photos/seed/ai_analytics_dashboard_graphs/500/350',
    dataAiHint: 'ai dashboard'
  },
];
