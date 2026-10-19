export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  category: string;
}

export interface SkillItem {
  name: string;
  description: string;
  level: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  badge: string;
  skills: SkillItem[];
}

export const PERSONAL_INFO = {
  name: "Ayesha Islam",
  role: "Full Stack Developer",
  status: "Available for full-time opportunities",
  profileImage: "/image.jpg",
  email: "anie3008@gmail.com",
  github: "https://github.com/anie3008",
  linkedin: "https://www.linkedin.com/in/ayesha-islam3008",
  location: "Dhaka, Bangladesh (Open to Remote Worldwide)",
  resumeUrl: "/resume.pdf",
  subheadline:
    "Passionate Full Stack Developer specializing in building clean, type-safe, and highly scalable web applications. Dedicated to continuous learning, robust problem-solving, and clean code architectures.",
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    badge: "Client-Side",
    skills: [
      {
        name: "JavaScript (ES6+)",
        description: "Modern asynchronous workflows, DOM APIs, event-loop mastery, and functional paradigms.",
        level: "Advanced",
        iconName: "Code2",
      },
      {
        name: "TypeScript",
        description: "Strict compile-time type safety, robust interfaces, generics, and developer tooling.",
        level: "Proficient",
        iconName: "FileCode2",
      },
      {
        name: "React",
        description: "Declarative component design, custom hooks, performant state, and lifecycle handling.",
        level: "Advanced",
        iconName: "Atom",
      },
      {
        name: "Next.js",
        description: "App Router, Server Components (RSC), SSR/SSG, Turbopack, and full-stack routing.",
        level: "Proficient",
        iconName: "Layers",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first design systems, responsive layouts, micro-animations, and dark mode.",
        level: "Advanced",
        iconName: "Palette",
      },
    ],
  },
  {
    title: "Backend & Database",
    badge: "Server-Side & Data",
    skills: [
      {
        name: "Node.js",
        description: "Scalable event-driven runtimes, RESTful API architecture, Express, and middleware design.",
        level: "Proficient",
        iconName: "Server",
      },
      {
        name: "MongoDB Atlas",
        description: "Cloud NoSQL clusters, flexible document schemas, aggregation pipelines, and Mongoose ORM.",
        level: "Proficient",
        iconName: "Database",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "kachaBazar",
    title: "kacha Bazar- E-Commerce Grocery Store",
    description:
      "An interactive one stop grocery solution website featuring Secure Authentication Pipeline, Granular Price Shift Analytics, and SEO & Semantic Accessibility Optimization.",
    tags: ["React", "Next.js", "MongoDB Atlas", "Tailwind CSS"],
    githubUrl: "https://github.com/anie3008/kacha-bazar-app",
    liveUrl: "https://kacha-bazar-app.vercel.app/",
    featured: true,
    category: "Frontend",
  },

  {
    id: "devStack",
    title: "DevStack - Build Your Ideal Development Stack",
    description:
      "DevStack - Curate and manage your tech project. It is very user friendly. You can use it any of your devices-phone, tab, or laptop.Three feature about my project is- 1.Sticky navbar. 2. Dynamic Tech selection which allow user to add or remove technologies from `Explore the technology section` in real time.3. Bulk reset - Remove all button clear the `Your Stack` only in one click.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", ],
    githubUrl: "https://github.com/anie3008/DevStack",
    liveUrl: "https://dev-stack-kappa-seven.vercel.app/",
    featured: true,
    category: "Frontend",
  },
  
  {
    id: "forgeFlow",
    title: "Forge-Flow - E-Commerce Storefront",
    description:
      "A daily work out companion, helping users to track their daily work out and maintain a healthy lifestyle. It features dynamic workout tracking, and personalized recommendations based on user activity.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/anie3008/Forge-Flow",
    liveUrl: "https://forge-flow-ten.vercel.app/",
    featured: false,
    category: "Frontend",
  },
  // {
  //   id: "atlasmetrics",
  //   title: "AtlasMetrics - Real-Time Analytics Dashboard",
  //   description:
  //     "Full-stack telemetry visualization dashboard querying MongoDB aggregation pipelines to present live system health indicators, user traffic metrics, and API latency.",
  //   tags: ["MongoDB Atlas", "Node.js", "Next.js", "TypeScript"],
  //   githubUrl: "https://github.com/anie3008",
  //   liveUrl: "https://atlasmetrics-live.vercel.app",
  //   featured: false,
  //   category: "Full Stack",
  // },
];

export const ABOUT_TEXT = `I am a Full Stack Web Developer driven by the challenge of turning complex problems into clean, scalable, and highly interactive digital experiences. My journey into development began with a deep curiosity about how the modern web functions, which quickly evolved into a dedicated pursuit of engineering robust applications. 
I specialize in building type-safe, responsive frontends using React, Next.js, and Tailwind CSS, while seamlessly connecting them to secure backend databases like MongoDB Atlas. As an entry-level professional, my core strength lies in my adaptability and rapid learning cycle. I treat every error as a debugging milestone and actively focus on architectural practices like writing modular components and clean version control workflows.
When I’m not writing code or optimization structures, I’m exploring new software patterns, contributing to developer ecosystems, and looking for opportunities to bring value to a forward-thinking engineering team.`;

