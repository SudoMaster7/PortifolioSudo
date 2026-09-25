import Link from "next/link";
import type { Locale, Project } from "@/content";
import { Tag } from "./ui";
import { pub } from "@/lib/utils";

export default function ProjectCard({
  project,
  locale,
  labels,
}: {
  project: Project;
  locale: Locale;
  labels: { viewCase: string; confidential: string };
}) {
  const status = pub(project.status);
  const client = pub(project.client);

  return (
    <Link
      href={`/${locale}/projetos/${project.slug}`}
      className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-gold/50 hover:bg-surface-2"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="mono text-[11px] text-muted">{project.year}</span>
        {status ? (
          <span className="mono rounded-full border border-gold/30 px-2 py-0.5 text-[10px] text-gold">
            {status}
          </span>
        ) : null}
      </div>

      <h3 className="text-xl leading-snug text-ink transition-colors group-hover:text-gold-soft">
        {project.title}
      </h3>

      {client ? (
        <p className="mono mt-2 text-[11px] text-muted/80">
          {client}
          {project.confidential ? ` · ${labels.confidential}` : ""}
        </p>
      ) : null}

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
        {project.stack.length > 5 ? <Tag>+{project.stack.length - 5}</Tag> : null}
      </div>

      <span className="mono mt-6 text-[11px] text-gold opacity-0 transition-opacity group-hover:opacity-100">
        {labels.viewCase} →
      </span>
    </Link>
  );
}
