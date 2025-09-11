// src/data/cv.js
export const cv = {
  basics: {
    name: "Iffat Mohamed Ayub",
    label: "Full-Stack Developer (MERN)",
    email: "iffat180@gmail.com",
    github: "https://github.com/iffat180",
    linkedin: "https://www.linkedin.com/in/iffatmohd",
    summary:
      "Full-stack developer focused on React, Node.js, Express, Tailwind CSS, and MongoDB. I enjoy clean UI, simple REST APIs, and shipping features end-to-end.",
  },

  work: [
    {
      title: "Graduate Web Design Specialist",
      org: "Cleveland State University",
      period: "Sep 2023 — May 2025",
      bullets: [
        "Redesigned and maintained college webpages in Drupal, improving accessibility and UI",
        "Supported Drupal 7 to 10 upgrade, fixing bugs and increasing performance by 30%",
        "Built responsive capstone project websites with JavaScript frameworks to boost engagement",
      ],
    },
  ],

  education: [
    {
      degree: "M.Sc. in Software Engineering",
      school: "Cleveland State University",
      period: "2025",
      notes: [
        "Focus: full-stack engineering, web systems, software architecture",
      ],
    },
    {
      degree: "B.Tech in Computer Science",
      school: "Amity University",
      period: "2022",
    },
  ],

  projects: [
    {
      name: "Car Marketplace",
      link: "https://car-rental-nu-rouge.vercel.app",
      desc: "Buy/sell listings, saved searches, chat, image upload, and auth.",
      tech: ["Vite", "React", "Node", "MongoDB"],
    }
  ],

  skills: {
    programming: ["JavaScript", "TypeScript", "Python", "SQL"],
    frontend: ["React", "Vite", "Tailwind CSS"],
    backend: ["Node.js", "Express", "REST APIs", "JWT", "Mongoose"],
    db: ["MongoDB", "PostgreSQL (basic)"],
    tools: ["Git/GitHub", "VS Code", "Blender"],
  },
};
