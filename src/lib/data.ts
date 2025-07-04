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
    slug: 'e-commerce-platform',
    title: 'E-commerce Platform',
    excerpt: 'A full-featured e-commerce website built with Next.js, Stripe for payments, and a custom CMS for product management. Designed for performance and scalability.',
    content: `This project was a comprehensive build of a modern e-commerce platform. The front-end was developed using Next.js for server-side rendering and static site generation, ensuring fast page loads and excellent SEO performance.
    
We integrated Stripe for secure and seamless payment processing, handling everything from credit card payments to subscription models.
    
The back-end includes a custom-built Content Management System (CMS) that allows administrators to easily manage products, categories, orders, and customer data. This was built using Node.js and a PostgreSQL database. The entire application is deployed on Vercel for continuous integration and delivery.`,
    author: 'Simon Maina Wanjiru',
    date: 'June 15, 2024',
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'website screenshot',
  },
  {
    id: '2',
    slug: 'task-management-app',
    title: 'Task Management App',
    excerpt: 'A collaborative task management application with a focus on real-time updates and an intuitive user experience, featuring drag-and-drop functionality.',
    content: `The goal of this project was to create a highly interactive and user-friendly task management tool, similar to Trello or Asana. The application is built as a Single Page Application (SPA) using React.
    
Key features include creating boards, lists, and cards, assigning tasks to users, and setting due dates. One of the main technical challenges was implementing a smooth and responsive drag-and-drop interface, which was achieved using the react-beautiful-dnd library.
    
For real-time collaboration, we used Firebase Realtime Database to ensure that any changes made by one user are instantly reflected for all other team members, without needing to refresh the page.`,
    author: 'Simon Maina Wanjiru',
    date: 'May 01, 2024',
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'dashboard interface',
  },
  {
    id: '3',
    slug: 'personal-portfolio-website',
    title: 'Personal Portfolio Website',
    excerpt: 'The very website you are on now. Built with Next.js, TypeScript, and Tailwind CSS to showcase my skills and projects in a clean and modern design.',
    content: `This portfolio is a project in itself, designed to be a living showcase of my capabilities. It's built from the ground up using the latest web technologies.
    
The stack includes:
- **Next.js:** For its hybrid static and server rendering, performance optimizations, and great developer experience.
- **React & TypeScript:** For building maintainable and type-safe UI components.
- **Tailwind CSS:** For a utility-first approach to styling that allows for rapid and custom design without leaving the HTML.
- **ShadCN UI:** For a set of accessible and reusable base components.
- **Vercel:** For seamless deployment and hosting.

The goal was to create a fast, accessible, and aesthetically pleasing site that effectively tells my professional story.`,
    author: 'Simon Maina Wanjiru',
    date: 'July 28, 2024',
    imageUrl: 'https://picsum.photos/id/1/600/400',
    dataAiHint: 'abstract code',
  },
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
