"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "lb-theme";
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

/** Fonte de verdade: a classe aplicada no <html> pelo script anti-flash. */
function getTheme(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

/** No servidor não há DOM: assume o padrão escuro e corrige na hidratação. */
function getServerTheme(): Theme {
  return "dark";
}

function setTheme(next: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", next === "light");
  root.classList.toggle("dark", next === "dark");
  root.style.colorScheme = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* modo privativo: mantém só na sessão */
  }
  listeners.forEach((cb) => cb());
}

export default function ThemeToggle({ label }: { label: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="flex h-7 w-7 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-gold hover:text-gold"
    >
      <span aria-hidden className="mono text-[11px] leading-none">
        {theme === "dark" ? "☾" : "☀"}
      </span>
    </button>
  );
}
