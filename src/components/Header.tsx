"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cx } from "@/lib/utils";
import type { Locale } from "@/content";

type NavLabels = {
  about: string;
  stack: string;
  projects: string;
  experience: string;
  education: string;
  contact: string;
  resume: string;
};

const SECTIONS = ["about", "stack", "projects", "experience", "education", "contact"] as const;

export default function Header({ locale, nav }: { locale: Locale; nav: NavLabels }) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const isHome = pathname === `/${locale}`;
  const other: Locale = locale === "pt" ? "en" : "pt";
  const otherHref = pathname.replace(`/${locale}`, `/${other}`) || `/${other}`;

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome, pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const link = (id: string, label: string) => (
    <Link
      key={id}
      href={isHome ? `#${id}` : `/${locale}#${id}`}
      onClick={() => setOpen(false)}
      className={cx(
        "mono text-xs tracking-wide transition-colors hover:text-ink",
        active === id ? "text-gold" : "text-muted",
      )}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="mono text-sm text-ink">
          leo<span className="text-gold">@</span>sudo
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {link("about", nav.about)}
          {link("stack", nav.stack)}
          {link("projects", nav.projects)}
          {link("experience", nav.experience)}
          {link("education", nav.education)}
          {link("contact", nav.contact)}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={otherHref}
            className="mono rounded-md border border-line px-2.5 py-1 text-[11px] text-muted transition-colors hover:border-gold hover:text-gold"
            aria-label={locale === "pt" ? "Switch to English" : "Mudar para português"}
          >
            {locale === "pt" ? "EN" : "PT"}
          </Link>

          <a
            href="/curriculo.pdf"
            className="mono hidden rounded-md bg-gold px-3 py-1.5 text-[11px] font-medium text-bg transition-opacity hover:opacity-90 sm:inline-block"
          >
            {nav.resume}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted md:hidden"
          >
            <span className="mono text-xs">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-bg md:hidden">
          <nav className="container-x flex flex-col gap-4 py-5">
            {link("about", nav.about)}
            {link("stack", nav.stack)}
            {link("projects", nav.projects)}
            {link("experience", nav.experience)}
            {link("education", nav.education)}
            {link("contact", nav.contact)}
            <a href="/curriculo.pdf" className="mono text-xs text-gold">
              {nav.resume}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
