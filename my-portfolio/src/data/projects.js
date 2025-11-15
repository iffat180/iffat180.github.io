import car from "../assets/projects/carental.jpg";
import cocktail from "../assets/projects/cocktail.png";
import ai from "../assets/projects/ai-platform.png";
import hollow from "../assets/projects/hollow.jpg";

export const projects = [
  {
    name: "Hollow - Safety Equipment Store",
    desc: "An e-commerce website where users can browse products, add them to cart, and checkout using Stripe payment integration",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Stripe",
      "Railway",
      "Vercel",
    ],
    link: "https://hollow-ecommerce-store.vercel.app/",
    img: hollow,
  },
  {
    name: "AI-Powered App - Creaters Platform",
    desc: "A full-stack AI creators platform where users can generate posts with AI, edit images, follow others, engage with posts, and view personalized stats",
    stack: [
      "React 19",
      "Next.js 15",
      "Tailwind",
      "Convex",
      "Clerk Auth",
      "React Quill",
      "ImageKit (AI media DAM)",
      "Shadcn UI",
    ],
    link: "https://ai-creaters-platform.vercel.app/",
    img: ai,
  },
  {
    name: "Cocktail Menu App - Frontend",
    desc: "Cocktail menu app bulit on React with interactive GSAP-powered animations",
    stack: ["React", "GSAP", "Tailwind CSS"],
    link: "https://cocktail-app-frontend-azure.vercel.app/",
    img: cocktail,
  },
  {
    name: "Car Marketplace",
    desc: "List, browse, and rent cars for sale.",
    stack: ["React", "Node", "MongoDB"],
    link: "https://car-rental-nu-rouge.vercel.app",
    img: car,
  },
];
