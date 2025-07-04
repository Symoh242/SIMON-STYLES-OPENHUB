
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
  liveUrl?: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: '4',
    slug: 'beedeee-website',
    title: 'BeeDeee E-commerce Site',
    excerpt: 'Developed a comprehensive e-commerce platform for BeeDeee, focusing on a streamlined user experience and robust product management capabilities.',
    content: 'This project involved building a custom e-commerce solution for BeeDeee. The site features a clean design, intuitive navigation, and a secure checkout process. I implemented a custom backend that allows for easy management of products, orders, and customer data, ensuring the client has full control over their online store.',
    author: 'Simon Maina Wanjiru',
    date: 'March 10, 2024',
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'ecommerce platform',
    liveUrl: 'https://beedeee.co.ke/',
  },
  {
    id: '5',
    slug: 'lee-gifts-and-flowers',
    title: 'Lee Gifts and Flowers',
    excerpt: 'A beautiful e-commerce website for a gift and flower shop, designed to provide a seamless shopping experience for customers looking for the perfect floral arrangements and gifts.',
    content: 'This project involved creating a full-featured e-commerce site for Lee Gifts and Flowers. The site is built with a focus on visual appeal and user experience, allowing customers to easily browse and purchase flowers, bouquets, and other gift items. Key features include a product catalog, secure checkout process, and an admin panel for managing inventory and orders. The technology stack was chosen to ensure a responsive and mobile-friendly design, catering to customers on any device.',
    author: 'Simon Maina Wanjiru',
    date: 'April 20, 2024',
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'flowers ecommerce',
    liveUrl: 'https://leegiftsandflowers.co.ke/',
  },
  {
    id: '6',
    slug: 'prime-ink-technologies',
    title: 'Prime Ink Technologies',
    excerpt: 'Developed a corporate website for Prime Ink Technologies, focusing on showcasing their services and establishing a strong online presence.',
    content: 'Developed a professional corporate website for Prime Ink Technologies. The site is built to be fast, responsive, and SEO-friendly, providing a solid platform for the company to present its services and attract new clients. The design is clean and modern, reflecting the company\'s brand identity.',
    author: 'Simon Maina Wanjiru',
    date: 'February 15, 2024',
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'corporate website',
    liveUrl: 'https://primeinktechnologies.co.ke/',
  },
  {
    id: '7',
    slug: 'simon-websites-showcase',
    title: 'Simon\'s Websites Showcase',
    excerpt: 'A personal project to demonstrate various web development techniques and design styles in a single, accessible showcase application.',
    content: 'This project is a personal showcase designed to demonstrate a variety of web development skills. It features multiple mini-sites, each with a different design and purpose, all integrated into one larger application. It serves as a living resume and a playground for experimenting with new technologies.',
    author: 'Simon Maina Wanjiru',
    date: 'January 20, 2024',
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'web design grid',
    liveUrl: 'https://simon-websites.vercel.app/',
  },
  {
    id: '8',
    slug: 'ilorie-consultancy',
    title: 'Ilorie Consultancy',
    excerpt: 'A professional consultancy website, designed to be clean, informative, and to build client trust through a polished user experience.',
    content: 'Created a sleek and professional website for Ilorie Consultancy. The site is designed to build trust and authority in their field. It features a clear layout, easy navigation, and provides essential information to potential clients in a concise and effective manner. The focus was on a minimal design that puts the content first.',
    author: 'Simon Maina Wanjiru',
    date: 'December 05, 2023',
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'business meeting',
    liveUrl: 'https://ilorie-consult.vercel.app/',
  }
];

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  imageUrl: string;
  dataAiHint: string;
}

export const testimonialsData: Testimonial[] = [
    {
        id: '1',
        name: 'Jane Doe',
        title: 'Project Manager, Tech Solutions Inc.',
        quote: 'Simon is an exceptional developer with a keen eye for detail. He was instrumental in the success of our e-commerce platform, delivering high-quality code on time. His problem-solving skills are top-notch.',
        imageUrl: 'https://picsum.photos/id/1/100/100',
        dataAiHint: 'professional woman',
    },
    {
        id: '2',
        name: 'John Smith',
        title: 'Lead Designer, Creative Agency',
        quote: 'Working with Simon is a pleasure. He is not only technically proficient but also has a great sense of design and user experience. He brings ideas to life beautifully and efficiently.',
        imageUrl: 'https://picsum.photos/id/1/100/100',
        dataAiHint: 'man portrait',
    },
    {
        id: '3',
        name: 'Emily White',
        title: 'CEO, Startup Hub',
        quote: 'We hired Simon to build our MVP, and he exceeded all our expectations. His ability to quickly understand our vision and translate it into a functional product was remarkable. Highly recommended!',
        imageUrl: 'https://picsum.photos/id/1/100/100',
        dataAiHint: 'business woman',
    },
];
