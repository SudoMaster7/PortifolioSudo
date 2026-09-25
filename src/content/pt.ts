import type { Project } from "./site";

export const pt = {
  meta: {
    title: "Leonardo Brito — Desenvolvedor Full-Stack e Automação com IA",
    description:
      "Desenvolvedor full-stack no Rio de Janeiro. Sistemas web, apps e agentes de IA para WhatsApp com React, Next.js, Python e n8n.",
  },
  nav: {
    about: "Sobre",
    stack: "Stack",
    projects: "Projetos",
    experience: "Experiência",
    education: "Formação",
    contact: "Contato",
    resume: "Currículo",
    theme: "Alternar tema claro/escuro",
  },
  hero: {
    prompt: "leo@sudo:~$ whoami",
    name: "Leonardo Brito",
    subtitle:
      "Desenvolvedor full-stack que transforma processos em sistemas e atendimento em automação com IA.",
    stackLine: "React · Next.js · TypeScript · Python · n8n · Agentes de IA",
    ctaProjects: "Ver projetos",
    ctaResume: "Baixar currículo",
    ctaContact: "Falar comigo",
  },
  about: {
    title: "Sobre",
    paragraphs: [
      "Sou desenvolvedor full-stack, fundador da SUDO e técnico de redes. Construo sistemas web, aplicativos e agentes de IA para WhatsApp, cuidando de ponta a ponta: do levantamento de requisitos com o cliente à modelagem de dados, ao deploy e aos relatórios de resultado.",
      "Venho da infraestrutura: help desk, servidores Linux, pfSense e cabeamento estruturado. Por isso entendo o sistema desde o cabo até a interface. Estou concluindo Ciência da Computação (previsão 2027) e cursando Gestão Comercial, porque tecnologia boa é a que dá resultado para o negócio.",
    ],
    facts: [
      { value: "2023", label: "Em tecnologia desde" },
      { value: "EUA", label: "Cliente internacional" },
      { value: "Produção", label: "Agentes de IA em" },
      { value: "Avançado", label: "Inglês" },
    ],
  },
  stack: { title: "Stack", lead: "Ferramentas que uso em produção, não em tutorial." },
  projects: {
    title: "Projetos",
    lead: "Casos reais. Nomes de clientes omitidos onde não há autorização.",
    viewCase: "Ver o case",
    confidential: "Cliente sob confidencialidade",
    all: "Todos os projetos",
  },
  experience: { title: "Experiência" },
  education: { title: "Formação", certsTitle: "Certificações", verify: "Verificar" },
  contact: {
    title: "Vamos construir algo?",
    lead: "Estou aberto a vagas de desenvolvimento, projetos freelance e parcerias técnicas.",
    cross:
      "Tem um negócio e quer levar IA para o seu atendimento? Conheça a SUDO.",
    crossCta: "usesudo.com.br",
  },
  case: {
    back: "Voltar aos projetos",
    next: "Próximo projeto",
    stack: "Stack",
    status: "Status",
    year: "Ano",
    client: "Contexto",
  },
  footer: { rights: "Todos os direitos reservados.", built: "Feito com Next.js e hospedado na Vercel." },
};

export const experiencePt = [
  {
    period: "2025 — hoje",
    role: "Fundador · Desenvolvedor Full-Stack e Automação com IA",
    company: "SUDO — Soluções Digitais",
    bullets: [
      "Empresa própria de soluções digitais que integra desenvolvimento, IA e aquisição de clientes para pequenos e médios negócios.",
      "Atuação de ponta a ponta: levantamento de requisitos, modelagem de dados, desenvolvimento, deploy em VPS/Vercel e relatórios de resultado.",
      "Entregas em produção: agente de IA no WhatsApp, prontuário eletrônico mobile-first, sistema de logística e campanhas de tráfego pago.",
    ],
  },
  {
    period: "2025 — 2026",
    role: "Desenvolvedor de Software",
    company: "Fuzzy Lab",
    bullets: [
      "Plataforma de videochamada com recursos de IA: concepção, implementação, entrega e documentação.",
      "Back-end em Python/Django; front-end em HTML, Tailwind CSS e JavaScript com WebRTC.",
      "Docker, modelagem de dados em SQL, Git/GitHub em equipe e rituais ágeis.",
    ],
  },
  {
    period: "2025 — hoje",
    role: "Técnico de Informática — Especialista em Redes",
    company: "FUNDEC",
    bullets: [
      "Projeto e implantação de infraestrutura de rede: cabeamento estruturado, roteadores e switches em salas de aula e áreas administrativas.",
      "Administração de servidores de arquivos e de internet em Linux e pfSense.",
      "Suporte presencial e remoto, gestão de chamados e memorandos técnicos.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Professor de Informática",
    company: "FUNDEC",
    bullets: [
      "Aulas de hardware, sistemas operacionais (Windows, Linux, macOS), Pacote Office e uso de IA para produtividade.",
      "Oratória e comunicação didática, hoje aplicadas em reuniões e apresentações a clientes.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Suporte Técnico (Help Desk)",
    company: "Prefeitura de Duque de Caxias",
    bullets: [
      "Suporte de 1º e 2º nível em hardware e software; servidores Linux e pfSense.",
      "Manutenção preventiva e corretiva, crimpagem de cabos e manutenção de impressoras.",
    ],
  },
];

export const educationPt = [
  { course: "Bacharelado em Ciência da Computação", org: "Universidade Veiga de Almeida", period: "Previsão: 2027" },
  { course: "Gestão Comercial", org: "UNIASSELVI", period: "Em andamento" },
  { course: "Técnico em Informática", org: "SESI", period: "Concluído em 2025" },
];

export const projectsPt: Project[] = [
  {
    slug: "agente-ia-whatsapp",
    title: "Agente de atendimento com IA no WhatsApp",
    year: "2025",
    status: "Em produção",
    client: "Clínica pediátrica multiunidade",
    summary:
      "Persona virtual que entende texto e áudio, responde com os dados reais da clínica e reduz o volume de atendimento manual.",
    stack: ["n8n", "Evolution API", "PostgreSQL", "Groq (LLaMA 3.3 70B)", "Whisper", "VPS Linux", "Traefik/SSL"],
    featured: true,
    confidential: true,
    sections: [
      {
        title: "O desafio",
        body: [
          "A clínica recebia um volume alto de mensagens no WhatsApp em várias unidades. Perguntas repetidas (convênios, horários, endereços, preparo de exames) consumiam a recepção e as respostas fora do horário simplesmente não aconteciam.",
        ],
      },
      {
        title: "A solução",
        body: [
          "Um agente conversacional com persona própria, alimentado com os dados reais da clínica: unidades, especialidades, convênios aceitos e regras de agendamento.",
          "O agente entende mensagens de texto e de áudio — o áudio é transcrito com Whisper antes de entrar no fluxo, porque boa parte dos pacientes manda voz em vez de digitar.",
        ],
      },
      {
        title: "Arquitetura",
        body: [
          "Evolution API faz a ponte com o WhatsApp e entrega os eventos via webhook para o n8n, que orquestra o fluxo.",
          "O histórico de conversa e o contexto ficam em PostgreSQL, o que permite continuidade entre mensagens e auditoria depois.",
          "A inferência roda na Groq (LLaMA 3.3 70B) por custo e latência; Whisper cuida da transcrição de áudio.",
          "Tudo em VPS Linux atrás de Traefik com SSL automático, isolado em containers.",
        ],
      },
      {
        title: "Resultado",
        body: [
          "Atendimento de primeira linha 24/7, com triagem antes de chegar na recepção humana. Dados de pacientes ficam fora do prompt e as telas de demonstração têm informações sensíveis suprimidas.",
        ],
      },
      {
        title: "O que aprendi",
        body: [
          "Agente bom é agente com escopo fechado: quanto mais explícito o limite do que ele pode afirmar, menos alucinação e menos retrabalho humano.",
          "Transcrição de áudio não é detalhe — é o que faz o público real usar a ferramenta.",
        ],
      },
    ],
  },
  {
    slug: "prontuario-eletronico",
    title: "Prontuário eletrônico clínico",
    year: "2025",
    status: "Em produção",
    client: "Clínica pediátrica multiunidade",
    summary:
      "Sistema mobile-first com controle de acesso por perfil, evolução clínica em formato SOAP, ditado por voz e adequação à LGPD.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "RBAC"],
    featured: true,
    confidential: true,
    sections: [
      {
        title: "O desafio",
        body: [
          "O registro clínico acontecia no papel e em planilhas. Sem histórico consultável, cada atendimento começava do zero e informação circulava por canais inseguros.",
        ],
      },
      {
        title: "A solução",
        body: [
          "Prontuário mobile-first, pensado para ser usado com uma mão durante a consulta.",
          "Evolução clínica no formato SOAP (subjetivo, objetivo, avaliação, plano) e ditado por voz para o profissional não perder tempo digitando.",
          "Controle de acesso por perfil (RBAC): recepção, profissional e administração veem conjuntos diferentes de dados.",
        ],
      },
      {
        title: "Arquitetura",
        body: [
          "Supabase como banco e camada de autenticação, com políticas de acesso no próprio banco (row level security) em vez de apenas no front-end.",
          "Design system extraído da paleta do logo da clínica, então o sistema parece parte da marca e não uma ferramenta genérica.",
          "Decisões de LGPD registradas: minimização de dados, trilha de acesso e separação entre dado clínico e dado administrativo.",
        ],
      },
      {
        title: "O que aprendi",
        body: [
          "Em software de saúde, a regra de acesso pertence ao banco. Validação só no front-end é conveniência, não segurança.",
        ],
      },
    ],
  },
  {
    slug: "logistica-frota",
    title: "Sistema de logística e gestão de frota",
    year: "2025",
    status: "Em desenvolvimento (MVP)",
    client: "Distribuidora de embalagens com frota própria",
    summary:
      "Rastreamento de entregas, importação de NF, avisos automáticos por WhatsApp, comprovante de entrega e módulo de frota com mapa ao vivo.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "MapLibre", "Vercel"],
    featured: true,
    confidential: true,
    sections: [
      {
        title: "O desafio",
        body: [
          "A distribuidora não sabia onde estava cada entrega e o cliente final ligava para perguntar. A frota era controlada em papel: combustível, manutenção e jornada do motorista sem registro consultável.",
        ],
      },
      {
        title: "A solução",
        body: [
          "Rastreamento de entregas com status por etapa e comprovante de entrega registrado no celular do motorista.",
          "Importação de nota fiscal para criar as entregas sem digitação manual.",
          "Avisos automáticos por WhatsApp para o cliente final quando a entrega sai e quando chega.",
          "Módulo de frota: mapa ao vivo, controle de combustível, manutenção e jornada do motorista.",
        ],
      },
      {
        title: "Arquitetura",
        body: [
          "Levantamento técnico e modelagem de dados conduzidos antes da primeira linha de código — entregas, rotas, veículos, motoristas e eventos como entidades separadas.",
          "Supabase (PostgreSQL) para dados e autenticação; MapLibre para o mapa, sem dependência de licença proprietária.",
          "Front-end Next.js com shadcn/ui, deploy na Vercel.",
        ],
      },
      {
        title: "O que aprendi",
        body: [
          "O valor aqui estava na modelagem, não na tela. Acertar o modelo de domínio primeiro foi o que permitiu adicionar o módulo de frota sem reescrever o sistema.",
        ],
      },
    ],
  },
  {
    slug: "plataforma-videochamada-ia",
    title: "Plataforma de videochamada com IA",
    year: "2025 — 2026",
    status: "Entregue",
    client: "Fuzzy Lab",
    summary:
      "Plataforma de videochamada com recursos de IA, desenvolvida e mantida em equipe do conceito à documentação técnica.",
    stack: ["Python", "Django", "WebRTC", "Tailwind CSS", "JavaScript", "Docker", "SQL"],
    featured: true,
    sections: [
      {
        title: "A solução",
        body: [
          "Plataforma de videochamada em WebRTC com recursos de IA integrados, com participação em todo o ciclo: concepção, implementação, entrega e documentação.",
        ],
      },
      {
        title: "Arquitetura",
        body: [
          "Back-end em Python/Django, front-end em HTML, Tailwind CSS e JavaScript com WebRTC para a mídia em tempo real.",
          "Containers Docker, modelagem de dados em SQL e versionamento com Git/GitHub em equipe.",
          "Documentação técnica com diagramas de classe e modelo de domínio, usada pela própria equipe como referência.",
        ],
      },
      {
        title: "O que aprendi",
        body: [
          "WebRTC expõe rápido qualquer fraqueza de infraestrutura. Trabalhar em equipe com documentação viva foi o que manteve o projeto navegável.",
        ],
      },
    ],
  },
  {
    slug: "soumente",
    title: "Soumente",
    year: "2025",
    status: "Projeto próprio",
    client: null,
    summary:
      "App mobile de desenvolvimento pessoal com gamificação em três estágios: sementes, raízes e frutos.",
    stack: ["React Native", "Expo", "Supabase", "Zustand", "API Anthropic"],
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/SudoMaster7" }],
    sections: [
      {
        title: "A solução",
        body: [
          "Aplicativo de desenvolvimento pessoal onde o progresso do usuário é representado por uma metáfora de crescimento: sementes viram raízes, raízes viram frutos.",
          "Fluxo de autenticação e criação de conteúdo funcionais, com geração de conteúdo apoiada pela API da Anthropic.",
        ],
      },
      {
        title: "Arquitetura",
        body: [
          "React Native com Expo para rodar nas duas plataformas a partir de uma base.",
          "Supabase para autenticação e dados; Zustand para estado local, mantendo o app leve e previsível.",
        ],
      },
    ],
  },
  {
    slug: "video-ia-eua",
    title: "Série de vídeos com IA para marca nos EUA",
    year: "2025",
    status: "Entregue",
    client: "Marca de terapia IV em Chicago (via Upwork)",
    summary:
      "Reels cinematográficos, identidade visual e cortes por plataforma, com pipeline de produção 100% baseado em IA.",
    stack: ["Runway Gen-4", "ElevenLabs", "Suno", "CapCut"],
    featured: false,
    sections: [
      {
        title: "A solução",
        body: [
          "Série de Reels cinematográficos para uma marca de terapia intravenosa em Chicago, com identidade visual consistente e cortes ajustados por plataforma.",
        ],
      },
      {
        title: "Pipeline",
        body: [
          "Runway Gen-4 para a geração de cena, ElevenLabs para locução, Suno para trilha e CapCut para montagem e cortes.",
        ],
      },
      {
        title: "Resultado",
        body: [
          "Projeto conduzido integralmente em inglês, do briefing à entrega, com cliente internacional.",
        ],
      },
    ],
  },
  {
    slug: "app-seguranca-mulheres",
    title: "Aplicativo de segurança para mulheres",
    year: "2026",
    status: "Em desenvolvimento (TCC)",
    client: null,
    summary:
      "Botão de emergência que envia a geolocalização para uma central de verificação e registra áudio e imagem no momento do acionamento.",
    stack: ["React Native", "Expo", "Supabase", "Geolocalização"],
    featured: false,
    sections: [
      {
        title: "O desafio",
        body: [
          "Em situação de risco, a vítima não tem tempo de explicar onde está nem de provar o que aconteceu.",
        ],
      },
      {
        title: "A solução",
        body: [
          "Um acionamento único dispara a geolocalização para uma central de verificação e inicia o registro de áudio e imagem, criando evidência no momento do fato.",
        ],
      },
    ],
  },
  {
    slug: "meta-ads-performance",
    title: "Campanhas de Meta Ads com relatório de performance",
    year: "2025",
    status: "Entregue",
    client: "Spa na Tijuca (RJ) e bar em São Paulo",
    summary:
      "Campanhas de mensagem (Click-to-WhatsApp) com diagnóstico de linha de base e relatório periódico de resultado.",
    stack: ["Meta Ads", "Click-to-WhatsApp", "Landing pages", "Relatórios"],
    featured: false,
    sections: [
      {
        title: "O desafio",
        body: [
          "O spa vinha de testes com custo entre R$4,35 e R$7,41 por conversa. O bar impulsionava publicações sem segmentação, sem saber o retorno.",
        ],
      },
      {
        title: "A solução",
        body: [
          "Diagnóstico de linha de base antes de investir, troca de impulsionamento por campanha de mensagem e relatório periódico com custo por conversa.",
        ],
      },
      {
        title: "Resultado",
        body: [
          "Spa na Tijuca (RJ): 249 conversas no WhatsApp em 50 dias, com R$1.018 investidos — custo médio de R$4,09 por conversa.",
          "Bar em São Paulo: 167 conversas em 36 dias após a troca de impulsionamento por campanha de mensagem segmentada.",
        ],
      },
      {
        title: "O que aprendi",
        body: [
          "Sem linha de base, qualquer número parece bom. Medir antes é o que transforma anúncio em argumento.",
        ],
      },
    ],
  },
];
