import Link from "next/link";
import { contact } from "@/content/site";
import type { Locale } from "@/content";

export default function Footer({ locale, rights, built }: { locale: Locale; rights: string; built: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mono text-xs text-muted">
            © {year} Leonardo Brito · {rights}
          </p>
          <p className="mono mt-1 text-[11px] text-muted/70">{built}</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={contact.github} target="_blank" rel="noreferrer" className="mono text-xs text-muted hover:text-gold">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="mono text-xs text-muted hover:text-gold">
            LinkedIn
          </a>
          <Link href={`/${locale}`} className="mono text-xs text-muted hover:text-gold">
            {locale === "pt" ? "Início" : "Top"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
