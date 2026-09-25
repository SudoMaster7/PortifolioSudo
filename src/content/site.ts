/**
 * _nota: REGRA DE PUBLICAÇÃO
 * Campo vazio, null ou com marcador provisório entre [colchetes] NÃO renderiza —
 * a linha/seção correspondente desaparece. Ver src/lib/utils.ts (isPublishable).
 * Nunca deixe "a confirmar", "em breve" ou telefone de exemplo aqui.
 */

export type Locale = "pt" | "en";

export type CaseSection = { title: string; body: string[] };

export type Project = {
  slug: string;
  title: string;
  year: string;
  status: string | null;
  client: string | null;
  summary: string;
  stack: string[];
  featured: boolean;
  confidential?: boolean;
  links?: { label: string; href: string }[];
  sections: CaseSection[];
};

export const contact = {
  email: "moraesleonardobrito@gmail.com",
  phoneLabel: "(21) 99587-1999",
  whatsapp: "https://wa.me/5521995871999",
  linkedin: "https://www.linkedin.com/in/leonardo-brito-133645262/",
  github: "https://github.com/SudoMaster7",
  location: "Duque de Caxias, RJ — Brasil",
  sudo: "https://usesudo.com.br",
};

export const stackGroups = [
  {
    area: { pt: "Front-end", en: "Front-end" },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    area: { pt: "Back-end e dados", en: "Back-end & data" },
    items: ["Python (Django)", "SQL", "PostgreSQL", "Supabase", "APIs REST", "Webhooks", "Power BI"],
  },
  {
    area: { pt: "Mobile", en: "Mobile" },
    items: ["React Native", "Expo", "Zustand"],
  },
  {
    area: { pt: "IA e automação", en: "AI & automation" },
    items: ["n8n", "Evolution API", "OpenAI", "Anthropic", "Groq (LLaMA, Whisper)", "Prompt engineering"],
  },
  {
    area: { pt: "Infra e DevOps", en: "Infra & DevOps" },
    items: ["Docker", "VPS Linux", "Traefik/SSL", "Vercel", "Git/GitHub", "pfSense", "WebRTC"],
  },
  {
    area: { pt: "Mídia e marketing", en: "Media & marketing" },
    items: ["Meta Ads", "Runway", "ElevenLabs", "Suno", "CapCut"],
  },
];

export const certifications = [
  { name: "IA Generativa: A Evolução da Busca Online Inteligente", org: "LinkedIn Learning", date: "set/2025", verify: null, weight: 0 },
  { name: "Princípios de Desenvolvimento Ágil de Software", org: "ITA (Coursera)", date: "mai/2025", verify: "https://coursera.org/verify/5QAF49N3XNNO", weight: 2 },
  { name: "TypeScript in React: Get Started", org: "Coursera Project Network", date: "abr/2025", verify: "https://coursera.org/verify/8L44CHJC6BBC", weight: 0 },
  { name: "Web3 and Blockchain Fundamentals", org: "INSEAD (Coursera)", date: "abr/2025", verify: "https://coursera.org/verify/CVDQP7WP63DF", weight: 2 },
  { name: "Getting Started with Git and GitHub", org: "IBM (Coursera)", date: "abr/2025", verify: "https://coursera.org/verify/B67R6YJRQBNH", weight: 1 },
  { name: "Introduction to HTML, CSS & JavaScript", org: "IBM (Coursera)", date: "abr/2025", verify: "https://coursera.org/verify/4JIVDW7G6NZ9", weight: 1 },
  { name: "Introduction to Cloud Computing", org: "IBM (Coursera)", date: "mar/2025", verify: "https://coursera.org/verify/FRVUTZUL1N5E", weight: 1 },
  { name: "Write your first C# code · String formatting in C#", org: "Microsoft Learn", date: "jan/2025", verify: null, weight: 0 },
  { name: "Get started building with Power BI", org: "Microsoft Learn", date: "dez/2024", verify: null, weight: 0 },
  { name: "Redes de Computadores (50h)", org: "Prime Cursos", date: "fev/2025", verify: null, weight: 0 },
  { name: "Técnico em Informática (40h) · Informática Avançada (20h)", org: "Prime Cursos", date: "fev/2025", verify: null, weight: 0 },
];
