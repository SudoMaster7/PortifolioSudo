import { cx } from "@/lib/utils";

export function SectionTitle({
  index,
  title,
  lead,
  className,
}: {
  index: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cx("mb-10", className)}>
      <p className="mono mb-3 text-xs tracking-[0.2em] text-gold uppercase">{index}</p>
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-3 max-w-2xl text-muted">{lead}</p> : null}
      <div className="hairline mt-6" />
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="mono rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] text-muted">
      {children}
    </span>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cx("container-x scroll-mt-24 py-20 sm:py-28", className)}>
      {children}
    </section>
  );
}
