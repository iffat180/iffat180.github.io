import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    tailwind,
    nodejs,
    sql,
    git,
    figma,
    python,
    cad,
    levin,
    pbx,
    hbku,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/iffatmohd/",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
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
      name: "SQL",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Graduate Web Design Specialist",
      company_name: "Maxine Goodman Levin School of Urban Affairs, Cleveland State University	",
      icon: levin,
      iconBg: "#383E56",
      date: "Sept 2023 - Present",
      points: [
        "Redesigned and maintained college webpages using Drupal", "Assisted migration of Drupal 7 to Drupal 10, resolving bugs and improving performance by 30%", "Developed responsive websites for student  capstone projects using JavaScript frameworks", "Provided technical support for software, printing, and lab equipment",
      ],
    },
    {
      title: "Software Developer (Remote)",
      company_name: "PentaByteX",
      icon: pbx,
      iconBg: "#E6DEDD",
      date: "Mar 2022 - Jul 2023",
      points: [
        "Developed web applications using Node.js and React for seamless data flow and user interaction", "Created RESTful APIs to support complex data interactions, improving data retrieval by 40%", "Streamlined CI/CD pipelines with DevOps teams for smooth microservices deployment", "Utilized Git for version control across multiple projects, ensuring reliable tracking of code changes and rollbacks",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Hamad Bin Khalifa University (HBKU)",
      icon: hbku,
      iconBg: "#383E56",
      date: "Aug 2021 - Dec 2021",
      points: [
        "Built robust, scalable backend systems using Python with Flask, handling complex data processing, RESTful API creation, and delivering real-time data to the frontend", "Developed dynamic web applications using Java with Spring Boot for an interactive and seamless user experience", "Wrote comprehensive unit and integration tests to validate code quality and ensure software stability across multiple platforms", "Architected and optimized Postgres database structures for high-traffic applications, ensuring performance and scalability",
      ],
    },
    {
      title: "Mobile Developer Intern",
      company_name: "CADDesk",
      icon: cad,
      iconBg: "#E6DEDD",
      date: "Mar 2021 - May 2021",
      points: [
        "Developed a mobile app using React Native with advanced features like live location tracking and real-time updates", "Utilized Firebase for backend services including real-time database management, user authentication, and analytics", "Streamlined deployment processes to enhance workflow efficiency and product scalability", "Contributed to software architecture and design, ensuring scalability, performance, and security of applications",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };