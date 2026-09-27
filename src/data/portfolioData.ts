export interface FocusArea {
  id: string;
  title: string;
  description: string;
  iconName: 'Brain' | 'Code2' | 'Layout' | 'Lightbulb';
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  description: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  summary: string;
  liveDemoUrl: string;
  repoUrl: string | null;
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
  confirmedTech: string[];
  techToVerifyNotice: string;
  keyHighlights: string[];
}

export interface OtherProject {
  id: string;
  title: string;
  status: string;
  summary: string;
  note: string;
  tags?: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
}

export interface JourneyMilestone {
  period: string;
  title: string;
  institution: string;
  location: string;
  status: string;
  description: string;
  highlightBadge?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    specialization: string;
    college: string;
    location: string;
    expectedGraduation: string;
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string | null; // Set to string path (e.g. "/resume.pdf") when available
    headline: string;
    subheadline: string;
    statusBadge: string;
    avatar: string;
  };
  about: {
    lead: string;
    paragraphs: string[];
    values: {
      title: string;
      desc: string;
    }[];
  };
  focusAreas: FocusArea[];
  skillCategories: SkillCategory[];
  featuredProject: FeaturedProject;
  otherProjects: OtherProject[];
  journey: JourneyMilestone[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Shaik Subhani",
    role: "Final-Year B.Tech Student",
    specialization: "Artificial Intelligence & Machine Learning",
    college: "Geethanjali Institute of Science and Technology",
    location: "Andhra Pradesh, India",
    expectedGraduation: "2027",
    email: "shaikakthar527@gmail.com",
    github: "https://github.com/shaiksubhani7670-lgtm",
    linkedin: "https://www.linkedin.com/in/shaik-subhani-60a725390/",
    resumeUrl: null, // "I will add my PDF later. Do not invent a resume link; show the resume button only when a resume file is available."
    headline: "I’m Shaik Subhani — building practical solutions with AI and software.",
    subheadline: "Final-year B.Tech AI & ML student focused on computer vision, Python architectures, and practical web systems that solve real everyday problems.",
    statusBadge: "Available for Projects & Collaborative Roles",
    avatar: "/profile.jpg"
  },
  about: {
    lead: "An engineering student passionate about applying artificial intelligence into reliable, human-centric software.",
    paragraphs: [
      "I am currently in my final year of B.Tech in Artificial Intelligence and Machine Learning at Geethanjali Institute of Science and Technology in Andhra Pradesh, India (Graduating in 2027).",
      "Rather than treating machine learning as purely theoretical math on paper, I am driven by the craft of turning concepts into accessible web applications. I focus on developing clean Python backends with Flask, responsive interfaces, and integrating computer vision models to address common pain points.",
      "My philosophy centers on continuous hands-on experimentation, disciplined problem-solving, and writing readable, maintainable code that delivers clear utility."
    ],
    values: [
      {
        title: "Hands-on Practicality",
        desc: "Prioritizing software that actually works and serves real users over abstract complexity."
      },
      {
        title: "Clean Fundamentals",
        desc: "Solid grounding in core algorithms, structured databases, and semantic, accessible web standards."
      },
      {
        title: "Continuous Growth",
        desc: "Constantly expanding knowledge across AI vision pipelines and modern full-stack development."
      }
    ]
  },
  focusAreas: [
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Exploring computer vision, feature representation, and similarity matching for targeted, real-world utility.",
      iconName: "Brain",
      tags: ["Computer Vision", "Visual Feature Comparison", "Image Analysis"]
    },
    {
      id: "python-dev",
      title: "Python Development",
      description: "Developing structured micro-backends, lightweight REST services, and database-backed applications with Flask and SQLite.",
      iconName: "Code2",
      tags: ["Flask", "REST APIs", "SQLite", "Python Scripting"]
    },
    {
      id: "web-dev",
      title: "Web Development",
      description: "Crafting fast, responsive, and accessible user interfaces built on semantic HTML, modern CSS, and JavaScript.",
      iconName: "Layout",
      tags: ["Modern JavaScript", "Semantic HTML5", "Responsive CSS", "Component Architecture"]
    },
    {
      id: "problem-solving",
      title: "Practical Problem Solving",
      description: "Identifying real-world bottlenecks — such as misplaced campus belongings — and transforming them into functional tools.",
      iconName: "Lightbulb",
      tags: ["Workflow Optimization", "Prototyping", "User-Centric Design"]
    }
  ],
  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript"],
      description: "Core languages used for backend logic, computational scripting, and interactive client experiences."
    },
    {
      category: "Web & Frontend",
      skills: ["HTML5", "CSS3", "Responsive Layouts", "Modern DOM"],
      description: "Foundational web technologies ensuring accessibility, cross-device responsiveness, and clean semantics."
    },
    {
      category: "Backend & Databases",
      skills: ["Flask", "SQLite", "REST API Development"],
      description: "Lightweight, reliable server-side architecture and structured relational data management."
    },
    {
      category: "Applied Domains & Concepts",
      skills: ["Computer Vision Fundamentals", "Image Comparison", "Data Modeling", "Git & GitHub"],
      description: "Core technical concepts and version control practices applied across academic and independent projects."
    }
  ],
  featuredProject: {
    id: "findit-campus",
    title: "FindIt Campus",
    badge: "Featured AI Application",
    tagline: "AI-Powered Lost & Found Platform for Educational Campuses",
    summary: "A practical campus platform engineered to streamline the recovery of misplaced items. It allows students and staff to submit lost or found notices and facilitates discovery through automated image comparison.",
    liveDemoUrl: "https://findit-campus-pi.vercel.app/",
    repoUrl: null, // No repo link provided; kept null to avoid inventing links
    workflow: [
      {
        step: "01",
        title: "Report an Item",
        description: "User submits detailed notice with campus location, category, description, and contact info."
      },
      {
        step: "02",
        title: "Upload Image",
        description: "Visual evidence is uploaded, validated, and prepared for automated image inspection."
      },
      {
        step: "03",
        title: "Compare Visual Features",
        description: "Visual features from reported images are evaluated to calculate similarity with existing inventory."
      },
      {
        step: "04",
        title: "Display Matches",
        description: "System ranks candidate matches to expedite reunification between owners and their items."
      }
    ],
    confirmedTech: ["Python", "Flask", "JavaScript", "HTML", "CSS", "SQLite"],
    techToVerifyNotice: "Exploratory / Under Verification: Image embedding & indexing pipelines (BLIP, Google SigLIP, FAISS) for enhanced similarity matching.",
    keyHighlights: [
      "Streamlined reporting workflow tailored for college campus ecosystems",
      "Image-driven verification to reduce false claims and ambiguous descriptions",
      "Lightweight database storage powered by SQLite and Flask endpoints",
      "Clean, accessible web interface accessible on student mobile devices"
    ]
  },
  otherProjects: [
    {
      id: "ai-smart-college-assistant",
      title: "AI Smart College Assistant",
      status: "In Development",
      summary: "An intelligent digital assistant designed to help college students navigate academic announcements, timetables, and campus administrative guidelines.",
      note: "Details coming soon",
      tags: ["AI Assistant", "NLP Concepts", "Campus Tech"]
    },
    {
      id: "character-counter",
      title: "Character Counter",
      status: "Under Refinement",
      summary: "A focused, responsive text analysis utility for instant character, word, sentence, and readability metrics calculation.",
      note: "Details coming soon",
      tags: ["JavaScript", "DOM Manipulation", "Tooling"]
    },
    {
      id: "online-course-management-system",
      title: "Online Course Management System",
      status: "In Planning",
      summary: "A structured educational portal prototype for managing course modules, student enrollments, and academic materials.",
      note: "Details coming soon",
      tags: ["Full Stack", "Database Design", "Web Architecture"]
    }
  ],
  journey: [
    {
      period: "2023 — 2027 (Expected)",
      title: "Bachelor of Technology — Artificial Intelligence & Machine Learning",
      institution: "Geethanjali Institute of Science and Technology",
      location: "Andhra Pradesh, India",
      status: "Final-Year Student",
      highlightBadge: "Current Education",
      description: "Immersed in coursework covering Artificial Intelligence, Machine Learning algorithms, Data Structures, Database Systems, and Applied Python Programming. Working on real-world projects such as FindIt Campus to solve immediate collegiate challenges."
    }
  ]
};
