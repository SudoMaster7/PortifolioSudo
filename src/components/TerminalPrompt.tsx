"use client";

import { useEffect, useState } from "react";

/** Prompt de terminal com digitação. Sem animação se prefers-reduced-motion. */
export default function TerminalPrompt({ text }: { text: string }) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      const raf = window.requestAnimationFrame(() => {
        setShown(text);
        setDone(true);
      });
      return () => window.cancelAnimationFrame(raf);
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(id);
        setDone(true);
      }
    }, 45);

    return () => window.clearInterval(id);
  }, [text]);

  return (
    <p className="mono min-h-[1.2em] text-xs text-gold sm:text-sm" aria-label={text}>
      <span aria-hidden>{shown}</span>
      <span
        aria-hidden
        className={cursorClass(done)}
      >
        .
      </span>
    </p>
  );
}

function cursorClass(done: boolean) {
  const base = "ml-0.5 inline-block w-2 bg-gold text-transparent";
  return done ? `${base} animate-pulse` : base;
}
