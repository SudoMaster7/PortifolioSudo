import { notFound } from "next/navigation";
import { getDict, isLocale } from "@/content";
import { contact, stackGroups, certifications } from "@/content/site";
import { Section, SectionTitle, Tag } from "@/components/ui";
import Reveal from "@/components/Reveal";
import TerminalPrompt from "@/components/TerminalPrompt";
import ProjectCard from "@/components/ProjectCard";
import { pub } from "@/lib/utils";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { t, projects, experience, education } = getDict(locale);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const highlighted = [...certifications].sort((a, b) => b.weight - a.weight);

  return (
    <>
      {/* HERO */}
      <section className="gold-glow relative overflow-hidden">
        <div className="container-x flex min-h-[78vh] flex-col justify-center py-20">
          <Reveal>
            <TerminalPrompt text={t.hero.prompt} />
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-7xl">{t.hero.name}</h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mono mt-6 text-xs text-muted/80 sm:text-sm">{t.hero.stackLine}</p>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="mono rounded-md bg-gold px-5 py-2.5 text-xs font-medium text-bg transition-opacity hover:opacity-90"
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href="/curriculo.pdf"
                className="mono rounded-md border border-line px-5 py-2.5 text-xs text-ink transition-colors hover:border-gold hover:text-gold"
              >
                {t.hero.ctaResume}
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mono rounded-md border border-line px-5 py-2.5 text-xs text-ink transition-colors hover:border-gold hover:text-gold"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <p className="mono mt-12 text-[11px] text-muted/60">{contact.location}</p>
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <Section id="about">
        <SectionTitle index="01 — whoami" title={t.about.title} />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 self-start">
            {t.about.facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 70}>
                <div className="rounded-xl border border-line bg-surface p-5">
                  <p className="mono text-[10px] tracking-wider text-muted uppercase">{f.label}</p>
                  <p className="mt-2 font-display text-2xl text-gold">{f.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* STACK */}
      <Section id="stack">
        <SectionTitle index="02 — stack" title={t.stack.title} lead={t.stack.lead} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((g, i) => (
            <Reveal key={g.area[locale]} delay={i * 60}>
              <div className="h-full rounded-xl border border-line bg-surface p-5">
                <h3 className="mono mb-4 text-[11px] tracking-wider text-gold uppercase">
                  {g.area[locale]}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROJETOS */}
      <Section id="projects">
        <SectionTitle index="03 — projects" title={t.projects.title} lead={t.projects.lead} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <ProjectCard
                project={p}
                locale={locale}
                labels={{ viewCase: t.projects.viewCase, confidential: t.projects.confidential }}
              />
            </Reveal>
          ))}
        </div>

        {others.length ? (
          <>
            <div className="hairline my-12" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <ProjectCard
                    project={p}
                    locale={locale}
                    labels={{ viewCase: t.projects.viewCase, confidential: t.projects.confidential }}
                  />
                </Reveal>
              ))}
            </div>
          </>
        ) : null}
      </Section>

      {/* EXPERIÊNCIA */}
      <Section id="experience">
        <SectionTitle index="04 — experience" title={t.experience.title} />
        <ol className="relative border-l border-line pl-6 sm:pl-8">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${job.period}`} delay={i * 70} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border border-gold bg-bg sm:-left-[39px]" />
              <p className="mono text-[11px] text-gold">{job.period}</p>
              <h3 className="mt-2 text-xl leading-snug">{job.role}</h3>
              <p className="mono mt-1 text-xs text-muted">{job.company}</p>
              <ul className="mt-3 space-y-2">
                {job.bullets.map((b, k) => (
                  <li key={k} className="text-sm leading-relaxed text-muted">
                    <span className="mr-2 text-gold/60">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* FORMAÇÃO */}
      <Section id="education">
        <SectionTitle index="05 — education" title={t.education.title} />
        <div className="grid gap-4 sm:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.course} delay={i * 70}>
              <div className="h-full rounded-xl border border-line bg-surface p-5">
                <h3 className="text-lg leading-snug">{e.course}</h3>
                <p className="mt-2 text-sm text-muted">{e.org}</p>
                <p className="mono mt-3 text-[11px] text-gold">{e.period}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <h3 className="mono mt-14 mb-6 text-[11px] tracking-wider text-gold uppercase">
          {t.education.certsTitle}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {highlighted.map((c, i) => {
            const verify = pub(c.verify);
            return (
              <Reveal key={c.name} delay={Math.min(i * 40, 240)}>
                <div
                  className={
                    c.weight >= 2
                      ? "flex h-full flex-col justify-between rounded-lg border border-gold/40 bg-surface p-4"
                      : "flex h-full flex-col justify-between rounded-lg border border-line bg-surface p-4"
                  }
                >
                  <div>
                    <p className="text-sm leading-snug text-ink">{c.name}</p>
                    <p className="mono mt-2 text-[11px] text-muted">
                      {c.org} · {c.date}
                    </p>
                  </div>
                  {verify ? (
                    <a
                      href={verify}
                      target="_blank"
                      rel="noreferrer"
                      className="mono mt-3 self-start text-[11px] text-gold hover:underline"
                    >
                      {t.education.verify} →
                    </a>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* CONTATO */}
      <Section id="contact">
        <div className="gold-glow rounded-2xl border border-line bg-surface p-8 sm:p-12">
          <Reveal>
            <p className="mono mb-4 text-xs text-gold">leo@sudo:~$ contact --open</p>
            <h2 className="text-3xl sm:text-4xl">{t.contact.title}</h2>
            <p className="mt-4 max-w-xl text-muted">{t.contact.lead}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mono rounded-md bg-gold px-5 py-2.5 text-xs font-medium text-bg transition-opacity hover:opacity-90"
              >
                WhatsApp · {contact.phoneLabel}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="mono rounded-md border border-line px-5 py-2.5 text-xs transition-colors hover:border-gold hover:text-gold"
              >
                {contact.email}
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mono rounded-md border border-line px-5 py-2.5 text-xs transition-colors hover:border-gold hover:text-gold"
              >
                LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="mono rounded-md border border-line px-5 py-2.5 text-xs transition-colors hover:border-gold hover:text-gold"
              >
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="hairline my-8" />
            <p className="text-sm text-muted">
              {t.contact.cross}{" "}
              <a
                href={contact.sudo}
                target="_blank"
                rel="noreferrer"
                className="mono text-gold hover:underline"
              >
                {t.contact.crossCta} →
              </a>
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
