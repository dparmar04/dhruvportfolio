import { Code } from "@phosphor-icons/react";

export const resume = {
  name: "Dhruv Parmar",
  roles: ["Full Stack Developer", "AI Engineer", "Frontend Developer", "UI/UX Designer"],
  objective:
    "Full Stack Engineer specializing in developing scalable web and AI applications with expertise in React, Node.js, and MongoDB. Demonstrated success in leading frontend projects and building agentic AI systems using LangChain, LangGraph, and RAG pipelines.",
  heroSub:
    "Full Stack Engineer building scalable web and AI applications. Ships agentic AI systems from zero to production.",
  skills: {
    Languages: { items: ["Python", "C++"], tier: 1 },
    Frontend: { items: ["JavaScript", "TypeScript", "React.js", "R3F", "Next.js", "Tailwind CSS", "GSAP"], tier: 1 },
    AI: { items: ["LangChain", "LangGraph", "RAG", "Vector Embeddings", "Guardrails", "LLM Evals", "Gemini", "Deepseek"], tier: 1 },
    Backend: { items: ["Node.js", "Express.js", "RESTful APIs"], tier: 2 },
    "Auth & DB": { items: ["Clerk", "JWT", "MongoDB"], tier: 2 },
    DevOps: { items: ["Git", "GitHub", "Vercel"], tier: 3 },
  },
  experience: [
    {
      company: "Healdoc.ai",
      role: "Frontend Developer",
      period: "Aug 2024 - Feb 2025",
      points: [
        "Led the transformation of an outdated static site into a high-performance modern web platform using React.js",
        "Managed complete redesign of Healdoc.ai to a React application, significantly improving maintainability and scalability",
      ],
    },
    {
      company: "Sensys Technology",
      role: "UI/UX Designer & Developer",
      period: "July 2024 - Oct 2025",
      points: [
        "Enhanced interface clarity and workflow efficiency by revamping key modules of the HRM Thread platform",
        "Enhanced UI with HTML, CSS, jQuery, and Tailwind CSS",
      ],
    },
    {
      company: "Engaze",
      role: "UI/UX Designer",
      period: "Dec 2023 - Jan 2024",
      points: [
        "Focused on user-centric interaction patterns, designed an accessible chat interface in Figma",
      ],
    },
  ],
  projects: [
    {
      title: "VibeContent",
      tag: "AI SaaS",
      description:
        "AI SaaS that scrapes a creator's last 30+ Instagram posts, extracts voice/tone/niche signals, and generates personalized reel scripts across 17 languages. Shipped to real users, 0 to production solo.",
      tech: ["Next.js", "MongoDB", "Gemini", "JWT"],
      link: "https://vibecontent.site",
      img: "/vibecontent.png",
    },
    {
      title: "Support AI",
      tag: "AI Tool",
      description:
        "Automated support ticket assignment using AI skill-matching. Integrated Gemini for instant AI-generated troubleshooting steps with role-based workflow.",
      tech: ["Next.js", "Gemini", "MongoDB", "Clerk"],
      link: "https://smart-support-ticket.vercel.app/",
      img: "/support-ai.png",
    },
    {
      title: "Social Media App",
      tag: "Full Stack",
      description:
        "Feature-rich social media app with real-time post feeds, likes, comments, and protected user routes using Next.js App Router and Clerk authentication.",
      tech: ["Next.js", "Clerk", "NeonDB", "TypeScript"],
      link: "https://app-socially.vercel.app/",
      img: "/socially.png",
    },
  ],
  contact: {
    email: "dhruvparmardp29@gmail.com",
    phone: "+91 9004192909",
    location: "Borivali, Mumbai",
    github: "https://github.com/dparmar04",
    linkedin: "https://linkedin.com/in/dparmar04",
  },
  achievement:
    "Received a Letter of Appreciation from IIT Bombay for designing and developing a professional website for the Heavy Structure Lab of the Civil Engineering Department.",
};

export const skillLogos = [
  { node: <Code size={28} weight="duotone" />, ariaLabel: "Languages" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>React</span>, ariaLabel: "React" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>Next.js</span>, ariaLabel: "Next.js" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>TypeScript</span>, ariaLabel: "TypeScript" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>Node.js</span>, ariaLabel: "Node.js" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>Python</span>, ariaLabel: "Python" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>LangChain</span>, ariaLabel: "LangChain" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>MongoDB</span>, ariaLabel: "MongoDB" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>Tailwind</span>, ariaLabel: "Tailwind CSS" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>Gemini</span>, ariaLabel: "Gemini" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>GSAP</span>, ariaLabel: "GSAP" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>R3F</span>, ariaLabel: "React Three Fiber" },
];
