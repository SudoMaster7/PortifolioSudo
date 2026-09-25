# Portfólio — Leonardo Brito

Site de portfólio pessoal. Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, PT/EN, deploy na Vercel.

## Rodar

    npm install
    npm run dev      # http://localhost:3000 → redireciona para /pt

## Build e produção

    npm run build
    npm run start

## Estrutura

    src/app/[locale]/page.tsx                   home (todas as seções)
    src/app/[locale]/projetos/[slug]/page.tsx   case de cada projeto
    src/app/sitemap.ts · robots.ts              SEO
    src/content/pt.ts · en.ts                   TODO o texto do site
    src/content/site.ts                         contato, stack, certificações
    src/components/                             Header, Footer, ProjectCard, Reveal, TerminalPrompt
    public/curriculo.pdf                        currículo para download

## Editar conteúdo

Nenhum texto está dentro de componente. Para mudar qualquer coisa do site,
edite `src/content/pt.ts` (e o equivalente em `en.ts`).

Para adicionar um projeto: acrescente um objeto no array `projectsPt` **e** em
`projectsEn` com o mesmo `slug`. A página de case, o sitemap e a navegação
"próximo projeto" são gerados automaticamente.

`featured: true` coloca o projeto no grid principal; `false` manda para a
faixa secundária.

## Regra de publicação

Campo vazio, `null` ou com marcador provisório entre `[colchetes]`,
"a confirmar", "em breve" **não renderiza** — a linha some em vez de publicar
placeholder. A regra vive em `src/lib/utils.ts` (`isPublishable`).

Nunca coloque telefone de exemplo ou número arredondado no conteúdo.

## Deploy na Vercel

1. `git push` para um repositório no GitHub.
2. Importe o repositório na Vercel (detecta Next.js sozinho, sem configuração).
3. Defina a variável de ambiente `NEXT_PUBLIC_SITE_URL` com o domínio final
   (ex.: `https://leonardobrito.dev`) — ela alimenta o sitemap e o robots.txt.

## Pendências

- [ ] Registrar o domínio e apontar para a Vercel
- [ ] Foto profissional para o hero
- [ ] Prints / vídeos curtos de cada projeto (dados sensíveis borrados)
- [ ] Autorização dos clientes para citar nomes (hoje estão genéricos)
- [ ] Confirmar o que pode ser divulgado da Fuzzy Lab
- [ ] Link de verificação do certificado do LinkedIn Learning
- [ ] Imagem OG personalizada
