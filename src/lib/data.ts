export const personalInfo = {
  name: "Samarth Sugandhi",
  role: "Full Stack Developer",
  tagline: "I build high-performance web applications and scalable systems.",
  intro:
    "A full-stack developer in my 6th semester at BEC (Information Science). I specialize in crafting real-world products—from AI-integrated platforms to robust financial tools—focusing on exceptional user experiences and clean architecture.",
  email: "samarthsugandhi04@gmail.com",
  github: "https://github.com/samarthsugandhi",
  linkedin: "https://linkedin.com/in/samarthsugandhi",
  education: "6th Semester Undergraduate, Information Science @ BEC",
};

export const projects = [
  {
    id: 1,
    name: "BEC Vortex",
    description:
      "A unified academic and digital fee management system featuring role-based architecture, AI-powered assistants, and real-time dashboards for students, faculty, and administrators.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AI Integrations"],
    github: "https://github.com/samarthsugandhi",
    live: "#",
    featured: true,
    gradient: "from-indigo-500/30 to-blue-500/10",
    accentColor: "#6366F1",
    category: "Full Stack",
    modalDetails: {
      problem:
        "Academic institutions often rely on fragmented systems for fee management, attendance tracking, and student requests, leading to inefficiencies and poor user experiences.",
      solution:
        "Developed a centralized, unified platform that integrates fee payments, academic resources, and intelligent AI assistants into one seamless dashboard.",
      features: [
        "Role-based access control (Student, Faculty, Admin)",
        "Integrated AI Assistant for instant academic queries",
        "Digital fee payment gateway with automated receipts",
        "Real-time analytics dashboard for administrators",
      ],
      impact:
        "Streamlined operational workflow for users, providing a single source of truth for academic and financial data, significantly reducing manual administrative overhead.",
    },
  },
  {
    id: 2,
    name: "Finova",
    description:
      "A sleek finance-focused web application for tracking and managing personal financial data, built with real-time charts, budget analytics, and investment insights.",
    tech: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/samarthsugandhi",
    live: "#",
    featured: false,
    gradient: "from-emerald-500/30 to-teal-500/10",
    accentColor: "#10B981",
    category: "Finance",
    modalDetails: {
      problem:
        "Many personal finance apps lack intuitive visualizations, making it difficult for users to quickly understand their spending habits and investment growth.",
      solution:
        "Created Finova, a highly visual, responsive dashboard that aggregates financial data into actionable, beautifully crafted charts and metrics.",
      features: [
        "Interactive spending and budget charts",
        "Real-time database sync via Firebase",
        "Custom goal tracking and investment insights",
        "Secure user authentication and data privacy",
      ],
      impact:
        "Delivered a premium user experience that simplifies complex financial data into easily digestible visual stories.",
    },
  },
  {
    id: 3,
    name: "BEC BillDesk",
    description:
      "Digital fee management system with multi-mode payments, admin control panels, automated receipts, and real-time payment tracking for educational institutions.",
    tech: ["Next.js", "MongoDB", "Express", "Razorpay"],
    github: "https://github.com/samarthsugandhi",
    live: "#",
    featured: false,
    gradient: "from-sky-500/30 to-blue-500/10",
    accentColor: "#38BDF8",
    category: "EdTech",
    modalDetails: {
      problem:
        "Manual fee collection processes are prone to errors, incredibly slow, and make tracking outstanding balances a logistical nightmare for administration.",
      solution:
        "Architected an end-to-end digital payment solution specifically tailored for educational ecosystems, handling everything from invoicing to receipt generation.",
      features: [
        "Multi-mode Razorpay gateway integration",
        "One-click automated secure receipt generation",
        "Comprehensive admin dashboard for granular tracking",
        "System alerts for pending and overdue payments",
      ],
      impact:
        "Digitized the entire fee flow, dramatically reducing discrepancies and drastically speeding up the reconciliation process.",
    },
  },
  {
    id: 4,
    name: "Event Platforms",
    description:
      "Built and deployed production event websites for Technophilia 3.0 and KALA TriVerse — complete with registrations, QR-based attendance, admin dashboards, and live leaderboards.",
    tech: ["Next.js", "Firebase", "TypeScript", "Framer Motion"],
    github: "https://github.com/samarthsugandhi",
    live: "#",
    featured: false,
    gradient: "from-orange-500/30 to-rose-500/10",
    accentColor: "#F97316",
    category: "Events",
    modalDetails: {
      problem:
        "Managing large-scale college events involves chaotic communication, difficult manual attendance, and fragmented team registrations.",
      solution:
        "Developed scalable, high-performance event platforms processing hundreds of real-time registrations, complete with built-in admin tooling.",
      features: [
        "Dynamic multi-step team registration flows",
        "QR-code based rapid event attendance scanning",
        "Live score leaderboards and real-time announcements",
        "Admin control panel with exportable CSV/PDF reports",
      ],
      impact:
        "Successfully handled end-to-end digital logistics for major college fests, providing a flawless user experience for both attendees and organizers.",
    },
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express", "REST API Design", "Microservices"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "Firebase / Firestore"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub Actions", "Vercel", "Docker"],
  },
];

export const achievements = [
  {
    id: 1,
    title: "1st Place — WAVE 3.0",
    subtitle: "National Level 24-Hour Hackathon",
    description:
      "Secured first place out of hundreds of participants by rapidly conceptualizing, building, and deploying a fully functional, highly polished product within a grueling 24-hour sprint.",
    icon: "🏆",
    color: "#F59E0B", // Amber
    year: "2024",
    highlight: true,
  },
  {
    id: 2,
    title: "1st Place — Project Contest",
    subtitle: "BEC Internal Competition",
    description:
      "Awarded first place at the college-level project contest for demonstrating technical depth, architectural scalability, and clear real-world impact.",
    icon: "🥇",
    color: "#6366F1", // Indigo
    year: "2024",
    highlight: false,
  },
];
