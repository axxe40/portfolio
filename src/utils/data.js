import {
  BookOpen,
  Briefcase,
  Cloud,
  Code2,
  Database,
  Mail,
  Server,
  Users,
} from "lucide-react";

import { LuBrain } from "react-icons/lu";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import Project_IMG1 from "../assets/images/trizzy.png";
import Project_IMG2 from "../assets/images/Linkin.png";
import Project_IMG3 from "../assets/images/solo-haven.png";
import Project_IMG4 from "../assets/images/your-guitar.png";
import Project_IMG5 from "../assets/images/foot-locka.png";
import Project_IMG6 from "../assets/images/web-design-alt.png";
import Project_IMG7 from "../assets/images/snikerin.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting responsive and modern web interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Next.js", level: 85, color: "bg-slate-400" },
      // { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "Vite", level: 90, color: "bg-orange-400" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Axios", level: 85, color: "bg-indigo-500" },
      { name: "HTML & CSS", level: 90, color: "bg-yellow-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building scalable and secure server-side systems",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-zinc-500" },
      { name: "Sequelize", level: 85, color: "bg-purple-600" },
      { name: "RESTful API", level: 92, color: "bg-orange-500" },
      { name: "JWT", level: 85, color: "bg-amber-600" },
      { name: "bcrypt.js", level: 82, color: "bg-pink-600" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Designing and managing data storage efficiently",
    skills: [
      { name: "PostgreSQL", level: 88, color: "bg-blue-700" },
      { name: "MongoDB", level: 85, color: "bg-green-600" },
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: Cloud,
    description: "Deploying, maintaining, and scaling applications",
    skills: [
      { name: "Firebase", level: 85, color: "bg-yellow-600" },
      { name: "AWS", level: 78, color: "bg-orange-600" },
      { name: "Vercel", level: 78, color: "bg-neutral-400" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 75, color: "bg-purple-500" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Vite",
  "Sequelize",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Axios",
  "JWT",
  "bcrypt.js",
  "Firebase",
  "AWS",
  "Git",
  "CI/CD",
];

export const STATS = [
  { number: "5+", label: "Projects Completed" },
  { number: "1+", label: "Years Experience" },
  { number: "15+", label: "Technologies Used" },
  // { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Trizzy",
    description:
      "A travel planning web app that provides AI based destination and itinerary recommendations with chat, Midtrans integration and Google APIs.",
    image: Project_IMG1,
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://rmt56-trizzy.web.app/",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "SoloHaven",
    description:
      "A web platform inspired by e-commerce, built with Next.js featuring infinite scroll, SEO metadata, and MongoDB integration",
    image: Project_IMG3,
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://solo-haven.vercel.app/",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Your Guitar",
    description:
      "An AI-driven e-commerce platform for guitar products with Google & GitHub OAuth, Gemini AI recommendations, and Redux state management.",
    image: Project_IMG4,
    tags: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Gemini AI"],
    liveUrl: "https://yourguitar.frenval.cloud/login",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Linkin",
    description:
      "A LinkedIn inspired mobile app built with React Native and GraphQL that supports user posts, likes, comments and follows.",
    image: Project_IMG2,
    tags: ["React Native", "GraphQL", "Node.js", "MongoDB"],
    liveUrl:
      "https://expo.dev/preview/update?message=Refactor%20httpLink&updateRuntimeVersion=1.0.0&createdAt=2025-02-19T11%3A02%3A22.415Z&slug=exp&projectId=797db08c-5e9f-41c8-961b-8d9209559bec&group=f620ca96-0c64-4cb6-ac15-08c7c80054b2",
    featured: false,
    category: "Mobile",
  },
  {
    id: 5,
    title: "FootLocka",
    description:
      "A Foot Locker-inspired e-commerce clone with both public and CMS interfaces for product management.",
    image: Project_IMG5,
    tags: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://footlocka.frenval.cloud/",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "ALT Web Prototype",
    description:
      "Designed the desktop web prototype of Aliansi Lintas Teknologi (ALT) using Figma. Created wireframes and detailed layouts for pages like Homepage, About, Services, Clients, Career, and Partners, including a CMS interface for content management.",
    image: Project_IMG6,
    tags: ["Figma"],
    liveUrl:
      "https://www.figma.com/proto/yefyotklqeRYw0y5f8mW5T/UI-design-ALT?node-id=3-149&t=BC3aJlNhnUYNEmdD-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A149&hide-ui=1",
    liveUrl2:
      "https://www.figma.com/proto/yefyotklqeRYw0y5f8mW5T/UI-design-ALT?node-id=249-17&t=AvSiKX8LacbsfhhA-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A149&hide-ui=1",
    featured: false,
    category: "Web Design",
  },
  {
    id: 7,
    title: "Snikerin Ecommerce",
    description:
      "An interactive and responsive sneaker e-commerce website built with HTML, CSS, and JavaScript, showcasing adaptive layouts and engaging visuals.",
    image: Project_IMG7,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl:
      "https://axxe40.github.io/responsive-website-view-Snikerin-ecommerce/",
    featured: false,
    category: "Responsive Web Design",
  },
];

export const Work_Experience = [
  {
    year: "May 2025 – Present",
    title: "freelance UI Designer",
    company: "Aliansi Lintas Teknologi",
    description:
      "Designed the web prototype for Aliansi Lintas Teknologi (ALT), creating wireframes and detailed layouts for public and internal CMS interfaces. Collaborated on the redesign to align with a new technology stack.",
    icon: Briefcase,
    color: "bg-purple-600",
  },
  {
    year: "Sept 2023 – Feb 2024",
    title: "Web Developer Intern",
    company: "BNI Finance",
    description:
      "Developed an internal portal system for front office and back office operations, including profile management, SOP access, news, and FAQs modules using modern web technologies.",
    icon: Code2,
    color: "bg-blue-600",
  },
];

export const Soft_Skills = [
  {
    icon: LuBrain,
    title: "Problem Solving",
    description:
      "Analytical and creative in finding efficient technical solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Works effectively in teams and communicates ideas clearly.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always eager to learn new technologies and improve skills.",
  },
];

export const Social_Links = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/axxe40",
    color: "hover:text-white",
    bgColor: "hover:bg-gray-700/70",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/valihf/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
];

export const Contact_Info = [
  {
    icon: Mail,
    label: "Email",
    value: "valih.frenato@gmail.com",
  },
];
