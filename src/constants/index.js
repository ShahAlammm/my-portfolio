import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  nextjs,
  // git,
  figma,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";




const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Next.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js",
    // company_name: "Starbucks",
    icon: reactjs,
    iconBg: "#383E56",
    date: "My favorite one",
    points: [
      "Developed a dynamic e-commerce platform using React.js, featuring a modularized architecture with reusable components. Implemented smooth user interactions and real-time updates, enhancing the overall user experience.",
      "Demonstrated expertise in React's component-based architecture, breaking down complex UIs into manageable, reusable components. Leveraged component lifecycle methods and hooks for efficient state management, resulting in a scalable and maintainable codebase.",
    ],
  },
  {
    title: "Tailwind CSS",
    // company_name: "Tesla",
    icon: tailwind,
    iconBg: "#E6DEDD",
    date: "Mostly I use it",
    points: [
      "Employed Tailwind CSS to swiftly implement a responsive resume layout, leveraging its utility-first approach for efficient design.",
      "Ensured code consistency and maintainability by utilizing Tailwind's predefined utility classes, promoting a unified design language throughout the project.",
    ],
  },
  {
    title: "MongoDB",
    // company_name: "Shopify",
    icon: mongodb,
    iconBg: "#383E56",
    date: "Backend that I know",
    points: [
      "Proficient in MongoDB for seamless data management. Implemented robust database structures and optimized queries to enhance performance in web applications.",
      "Designed and implemented scalable MongoDB databases, ensuring efficient handling of data growth. Utilized MongoDB's flexible schema to adapt to evolving project requirements.",
    ],
  },
  {
    title: "Next.js",
    // company_name: "Meta",
    icon: nextjs,
    iconBg: "#E6DEDD",
    date: "Now I exploring it",
    points: [
      "Explored Next.js to implement server-side rendering, enhancing application performance and SEO. Leveraged the framework's capabilities to create fast-loading, dynamic React applications.",
      "Developed seamless client-side navigation with Next.js routing. Integrated APIs effortlessly, capitalizing on the framework's built-in features for streamlined data fetching and serverless functions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Express Delivery",
    description:
      "Web-based platform that allows users to search, book, and manage parcel from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ShahAlammm/parcel-management-app",
    source_live_link: "https://parcel-management-app-c9005.web.app/",
  },
  {
    name: "Event Management",
    description:
      "Web application that enables users to search for event openings, view estimated price ranges for positions, and locate available center based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ShahAlammm/event-management?tab=readme-ov-file",
    source_live_link: "https://teeny-tiny-desire.surge.sh/",
  },
  {
    name: "Brand Shop",
    description:
      "A shop website where some one can bay his devises. Enjoy there wonder full moment and experience there uses. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ShahAlammm/brand-shop-client?tab=readme-ov-file",
    source_live_link: "https://brash-muscle.surge.sh/",
  },
];

export { services, technologies, experiences, testimonials, projects };
