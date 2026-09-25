import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findProject, getDict, isLocale, locales, nextProject } from "@/content";
import { Tag } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { pub } from "@/lib/utils";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDict(locale).projects.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = findProject(locale, slug);
  if (!project) return {};

  return {
    title: `${project.title} — Leonardo Brito`,
    description: project.summary,
    alternates: { canonical: `/${locale}/projetos/${slug}` },
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const project = findProject(locale, slug);
  if (!project) notFound();

  const { t } = getDict(locale);
  const next = nextProject(locale, slug);
  const status = pub(project.status);
  const client = pub(project.client);

  return (
    <article className="container-x py-16 sm:py-24">
      <Link href={`/${locale}#projects`} className="mono text-xs text-muted hover:text-gold">
        ← {t.case.back}
      </Link>

      <Reveal>
        <h1 className="mt-8 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>
      </Reveal>

      <Reveal delay={100}>
        <dl className="mt-10 grid gap-5 border-y border-line py-6 sm:grid-cols-3">
          <div>
            <dt className="mono text-[10px] tracking-wider text-muted uppercase">{t.case.year}</dt>
            <dd className="mono mt-1.5 text-sm text-ink">{project.year}</dd>
          </div>
          {status ? (
            <div>
              <dt className="mono text-[10px] tracking-wider text-muted uppercase">{t.case.status}</dt>
              <dd className="mono mt-1.5 text-sm text-gold">{status}</dd>
            </div>
          ) : null}
          {client ? (
            <div>
              <dt className="mono text-[10px] tracking-wider text-muted uppercase">{t.case.client}</dt>
              <dd className="mono mt-1.5 text-sm text-ink">
                {client}
                {project.confidential ? ` · ${t.projects.confidential}` : ""}
              </dd>
            </div>
          ) : null}
        </dl>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 max-w-3xl space-y-12">
        {project.sections.map((section, i) => (
          <Reveal key={section.title} delay={i * 60}>
            <section>
              <h2 className="mono text-xs tracking-[0.18em] text-gold uppercase">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, k) => (
                  <p key={k} className="leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      {project.links?.length ? (
        <div className="mt-12 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="mono rounded-md border border-line px-4 py-2 text-xs transition-colors hover:border-gold hover:text-gold"
            >
              {l.label} →
            </a>
          ))}
        </div>
      ) : null}

      <div className="hairline my-14" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href={`/${locale}#contact`} className="mono text-xs text-muted hover:text-gold">
          {t.nav.contact}
        </Link>
        {next ? (
          <Link
            href={`/${locale}/projetos/${next.slug}`}
            className="mono text-xs text-gold hover:underline"
          >
            {t.case.next}: {next.title} →
          </Link>
        ) : null}
      </div>
    </article>
  );
}
