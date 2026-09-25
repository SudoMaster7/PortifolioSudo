import type { Project } from "./site";

export const en = {
  meta: {
    title: "Leonardo Brito — Full-Stack Developer & AI Automation",
    description:
      "Full-stack developer based in Rio de Janeiro. Web systems, apps and WhatsApp AI agents with React, Next.js, Python and n8n.",
  },
  nav: {
    about: "About",
    stack: "Stack",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    prompt: "leo@sudo:~$ whoami",
    name: "Leonardo Brito",
    subtitle:
      "Full-stack developer turning business processes into systems and customer support into AI automation.",
    stackLine: "React · Next.js · TypeScript · Python · n8n · AI agents",
    ctaProjects: "View projects",
    ctaResume: "Download resume",
    ctaContact: "Get in touch",
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm a full-stack developer, founder of SUDO and a network technician. I build web systems, mobile apps and WhatsApp AI agents end to end: requirements gathering with the client, data modeling, deployment and performance reporting.",
      "I come from infrastructure: help desk, Linux servers, pfSense and structured cabling. That's why I understand a system from the cable up to the interface. I'm finishing my Computer Science degree (expected 2027) and studying Business Management, because good technology is the kind that produces business results.",
    ],
    facts: [
      { value: "2023", label: "In tech since" },
      { value: "USA", label: "International client" },
      { value: "Production", label: "AI agents in" },
      { value: "Advanced", label: "English" },
    ],
  },
  stack: { title: "Stack", lead: "Tools I run in production, not in tutorials." },
  projects: {
    title: "Projects",
    lead: "Real work. Client names omitted where there is no authorization.",
    viewCase: "Read the case study",
    confidential: "Client under NDA",
    all: "All projects",
  },
  experience: { title: "Experience" },
  education: { title: "Education", certsTitle: "Certifications", verify: "Verify" },
  contact: {
    title: "Let's build something?",
    lead: "Open to developer roles, freelance projects and technical partnerships.",
    cross: "Running a business and want AI in your customer support? Meet SUDO.",
    crossCta: "usesudo.com.br",
  },
  case: {
    back: "Back to projects",
    next: "Next project",
    stack: "Stack",
    status: "Status",
    year: "Year",
    client: "Context",
  },
  footer: { rights: "All rights reserved.", built: "Built with Next.js, hosted on Vercel." },
};

export const experienceEn = [
  {
    period: "2025 — present",
    role: "Founder · Full-Stack Developer & AI Automation",
    company: "SUDO — Digital Solutions",
    bullets: [
      "My own digital solutions company, combining development, AI and customer acquisition for small and mid-sized businesses.",
      "End-to-end delivery: requirements, data modeling, development, deployment on VPS/Vercel and performance reporting.",
      "Shipped to production: a WhatsApp AI agent, a mobile-first electronic health record, a logistics system and paid media campaigns.",
    ],
  },
  {
    period: "2025 — 2026",
    role: "Software Developer",
    company: "Fuzzy Lab",
    bullets: [
      "Built and maintained an AI-enabled video call platform across the full cycle: concept, implementation, delivery and documentation.",
      "Python/Django back-end; HTML, Tailwind CSS and JavaScript front-end with WebRTC.",
      "Docker containers, SQL data modeling, Git/GitHub in a team and agile rituals.",
    ],
  },
  {
    period: "2025 — present",
    role: "IT Technician — Network Specialist",
    company: "FUNDEC",
    bullets: [
      "Designed and deployed network infrastructure: structured cabling, routers and switches across classrooms and administrative areas.",
      "Administered Linux file and internet servers with pfSense.",
      "On-site and remote user support, ticket management and technical memos.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "IT Instructor",
    company: "FUNDEC",
    bullets: [
      "Taught hardware, operating systems (Windows, Linux, macOS), Office and the use of AI tools for productivity.",
      "Developed public speaking and teaching skills now applied in client meetings and presentations.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Technical Support (Help Desk)",
    company: "Duque de Caxias City Hall",
    bullets: [
      "Level 1 and 2 hardware and software support; Linux servers and pfSense.",
      "Preventive and corrective maintenance, network cable crimping and printer servicing.",
    ],
  },
];

export const educationEn = [
  { course: "B.Sc. in Computer Science", org: "Universidade Veiga de Almeida", period: "Expected: 2027" },
  { course: "Business Management", org: "UNIASSELVI", period: "In progress" },
  { course: "Technical Degree in IT", org: "SESI", period: "Completed 2025" },
];

export const projectsEn: Project[] = [
  {
    slug: "agente-ia-whatsapp",
    title: "WhatsApp AI support agent",
    year: "2025",
    status: "In production",
    client: "Multi-site pediatric clinic",
    summary:
      "A virtual persona that understands text and voice, answers with the clinic's real data and cuts manual support volume.",
    stack: ["n8n", "Evolution API", "PostgreSQL", "Groq (LLaMA 3.3 70B)", "Whisper", "Linux VPS", "Traefik/SSL"],
    featured: true,
    confidential: true,
    sections: [
      {
        title: "The challenge",
        body: [
          "The clinic received a high volume of WhatsApp messages across several locations. Repeated questions (insurance, hours, addresses, exam preparation) consumed the front desk, and after-hours messages simply went unanswered.",
        ],
      },
      {
        title: "The solution",
        body: [
          "A conversational agent with its own persona, grounded in the clinic's real data: locations, specialties, accepted insurance plans and scheduling rules.",
          "It handles both text and voice messages — audio is transcribed with Whisper before entering the flow, because a large share of patients send voice notes instead of typing.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "Evolution API bridges WhatsApp and pushes events by webhook into n8n, which orchestrates the flow.",
          "Conversation history and context live in PostgreSQL, enabling continuity between messages and later auditing.",
          "Inference runs on Groq (LLaMA 3.3 70B) for cost and latency; Whisper handles audio transcription.",
          "Everything runs on a Linux VPS behind Traefik with automatic SSL, isolated in containers.",
        ],
      },
      {
        title: "Result",
        body: [
          "24/7 first-line support with triage before reaching a human. Patient data stays out of the prompt, and demo screens have sensitive information removed.",
        ],
      },
      {
        title: "What I learned",
        body: [
          "A good agent is a scoped agent: the more explicit its limits, the less hallucination and the less human rework.",
          "Audio transcription isn't a detail — it's what makes real users adopt the tool.",
        ],
      },
    ],
  },
  {
    slug: "prontuario-eletronico",
    title: "Electronic health record",
    year: "2025",
    status: "In production",
    client: "Multi-site pediatric clinic",
    summary:
      "Mobile-first system with role-based access control, SOAP clinical notes, voice dictation and LGPD (Brazilian GDPR) compliance.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "RBAC"],
    featured: true,
    confidential: true,
    sections: [
      {
        title: "The challenge",
        body: [
          "Clinical records lived on paper and in spreadsheets. With no searchable history, every appointment started from zero and information travelled through insecure channels.",
        ],
      },
      {
        title: "The solution",
        body: [
          "A mobile-first record, designed to be used one-handed during an appointment.",
          "SOAP clinical notes (subjective, objective, assessment, plan) and voice dictation so practitioners don't lose time typing.",
          "Role-based access control: front desk, practitioner and management each see a different data set.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "Supabase as database and auth layer, with access policies enforced in the database itself (row level security) rather than only in the front-end.",
          "A design system derived from the clinic's logo palette, so the product feels like part of the brand instead of a generic tool.",
          "Documented privacy decisions: data minimization, access trail and separation of clinical from administrative data.",
        ],
      },
      {
        title: "What I learned",
        body: [
          "In healthcare software, access rules belong in the database. Front-end validation is convenience, not security.",
        ],
      },
    ],
  },
  {
    slug: "logistica-frota",
    title: "Logistics and fleet management system",
    year: "2025",
    status: "In development (MVP)",
    client: "Packaging distributor with its own fleet",
    summary:
      "Delivery tracking, invoice import, automatic WhatsApp notifications, proof of delivery and a fleet module with a live map.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "MapLibre", "Vercel"],
    featured: true,
    confidential: true,
    sections: [
      {
        title: "The challenge",
        body: [
          "The distributor didn't know where each delivery was, and end customers called to ask. The fleet was tracked on paper: fuel, maintenance and driver hours with no searchable record.",
        ],
      },
      {
        title: "The solution",
        body: [
          "Delivery tracking with per-stage status and proof of delivery captured on the driver's phone.",
          "Invoice import to create deliveries without manual data entry.",
          "Automatic WhatsApp notifications to the end customer on dispatch and on arrival.",
          "Fleet module: live map, fuel control, maintenance and driver hours.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "Technical discovery and data modeling ran before the first line of code — deliveries, routes, vehicles, drivers and events as separate entities.",
          "Supabase (PostgreSQL) for data and auth; MapLibre for mapping, with no proprietary licence dependency.",
          "Next.js front-end with shadcn/ui, deployed on Vercel.",
        ],
      },
      {
        title: "What I learned",
        body: [
          "The value here was in the modeling, not the screens. Getting the domain model right first is what let the fleet module land without a rewrite.",
        ],
      },
    ],
  },
  {
    slug: "plataforma-videochamada-ia",
    title: "AI-enabled video call platform",
    year: "2025 — 2026",
    status: "Delivered",
    client: "Fuzzy Lab",
    summary:
      "A WebRTC video call platform with AI features, built and maintained in a team from concept to technical documentation.",
    stack: ["Python", "Django", "WebRTC", "Tailwind CSS", "JavaScript", "Docker", "SQL"],
    featured: true,
    sections: [
      {
        title: "The solution",
        body: [
          "A WebRTC video call platform with integrated AI features, with involvement across the whole cycle: concept, implementation, delivery and documentation.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "Python/Django back-end, HTML, Tailwind CSS and JavaScript front-end with WebRTC for real-time media.",
          "Docker containers, SQL data modeling and Git/GitHub in a team.",
          "Technical documentation with class diagrams and a domain model, used by the team as reference.",
        ],
      },
      {
        title: "What I learned",
        body: [
          "WebRTC exposes every infrastructure weakness fast. Living documentation is what kept the project navigable.",
        ],
      },
    ],
  },
  {
    slug: "soumente",
    title: "Soumente",
    year: "2025",
    status: "Personal project",
    client: null,
    summary:
      "A personal-development mobile app with gamification in three stages: seeds, roots and fruit.",
    stack: ["React Native", "Expo", "Supabase", "Zustand", "Anthropic API"],
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/SudoMaster7" }],
    sections: [
      {
        title: "The solution",
        body: [
          "A personal-development app where progress is represented by a growth metaphor: seeds become roots, roots become fruit.",
          "Working authentication and content creation flows, with content generation supported by the Anthropic API.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "React Native with Expo to ship both platforms from one codebase.",
          "Supabase for auth and data; Zustand for local state, keeping the app light and predictable.",
        ],
      },
    ],
  },
  {
    slug: "video-ia-eua",
    title: "AI video series for a US brand",
    year: "2025",
    status: "Delivered",
    client: "IV therapy brand in Chicago (via Upwork)",
    summary:
      "Cinematic Reels, visual identity and per-platform cuts, with a fully AI-based production pipeline.",
    stack: ["Runway Gen-4", "ElevenLabs", "Suno", "CapCut"],
    featured: false,
    sections: [
      {
        title: "The solution",
        body: [
          "A series of cinematic Reels for an intravenous therapy brand in Chicago, with a consistent visual identity and per-platform cuts.",
        ],
      },
      {
        title: "Pipeline",
        body: [
          "Runway Gen-4 for scene generation, ElevenLabs for voiceover, Suno for the soundtrack and CapCut for editing.",
        ],
      },
      {
        title: "Result",
        body: ["The project ran entirely in English, from briefing to delivery, with an international client."],
      },
    ],
  },
  {
    slug: "app-seguranca-mulheres",
    title: "Personal safety app for women",
    year: "2026",
    status: "In development (final thesis)",
    client: null,
    summary:
      "An emergency button that sends geolocation to a verification centre and records audio and images at the moment of activation.",
    stack: ["React Native", "Expo", "Supabase", "Geolocation"],
    featured: false,
    sections: [
      {
        title: "The challenge",
        body: ["In a moment of risk, the victim has no time to explain where she is or to prove what happened."],
      },
      {
        title: "The solution",
        body: [
          "A single tap sends geolocation to a verification centre and starts recording audio and images, creating evidence as the event happens.",
        ],
      },
    ],
  },
  {
    slug: "meta-ads-performance",
    title: "Meta Ads campaigns with performance reporting",
    year: "2025",
    status: "Delivered",
    client: "Spa in Tijuca (Rio) and a bar in São Paulo",
    summary:
      "Click-to-WhatsApp message campaigns with baseline diagnosis and recurring performance reports.",
    stack: ["Meta Ads", "Click-to-WhatsApp", "Landing pages", "Reporting"],
    featured: false,
    sections: [
      {
        title: "The challenge",
        body: [
          "The spa came from tests costing between R$4.35 and R$7.41 per conversation. The bar boosted posts with no targeting and no idea of the return.",
        ],
      },
      {
        title: "The solution",
        body: [
          "A baseline diagnosis before spending, replacing boosted posts with message campaigns, and recurring reports on cost per conversation.",
        ],
      },
      {
        title: "Result",
        body: [
          "Spa in Tijuca (Rio): 249 WhatsApp conversations in 50 days on R$1,018 spend — R$4.09 average per conversation.",
          "Bar in São Paulo: 167 conversations in 36 days after switching from boosted posts to targeted message campaigns.",
        ],
      },
      {
        title: "What I learned",
        body: ["Without a baseline, any number looks good. Measuring first is what turns an ad into an argument."],
      },
    ],
  },
];
