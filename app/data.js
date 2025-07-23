import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "Next.js",
      "React.js",
      "Javascript",
      "Tailwind css",
      "HTML5/CSS3",
      "Git/Github",
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      "Bachelor's Degree in Software Engineering",
      "Frontend Development Bootcamp",
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    content: [
      "Meta Front-End Developer Certification",
      "Microsoft Certified: Azure Fundamentals",
    ],
  },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Responsive Design",
    description:
      "Creating modern, mobile-friendly, and responsive websites with pixel-perfect UI and smooth layouts.",
     Icon: DevicePhoneMobileIcon,
  },
  {
    id: 2,
    title: "Interactive Applications",
    description:
      "Component-driven SPA / SSR builds with state management, routing, forms, and animations.",
     Icon: CursorArrowRaysIcon,
  },
  {
    id: 3,
    title: "UI Integration with Backend",
    description:
      "Connecting UI with backend APIs, handling authentication, and optimizing performance for speed and SEO.",
    Icon: CloudArrowUpIcon,
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A React portfolio highlighting skills, projects, and experience with a dynamic design.",
    image: "/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://osamacodes-r93u9u0a0-muhammaddosamas-projects.vercel.app",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "An online store that allows users to browse, buy, and securely manage products or services.",
    image: "/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Admin Dashboard Application",
    description:
      "A control panel that provides insights, management tools, and analytics to oversee and optimize a system or application.",
    image: "/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Website",
    description:
      "An online platform for publishing and sharing articles, insights, and stories on various topics.",
    image: "/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://foodieland-f74ptfy24-muhammaddosamas-projects.vercel.app",
  },
  {
    id: 5,
    title: "Weather Application",
    description:
      "A weather app that provides real-time forecasts, temperature, and climate details for various locations.",
    image: "/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Social Media Website",
    description:
      "A social media platform that enables users to connect, share, and interact through posts, messages, and multimedia content.",
    image: "/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
