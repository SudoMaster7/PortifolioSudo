"use client";

import { useEffect, useState } from "react";

/** Prompt de terminal com digitação. Sem animação se prefers-reduced-motion. */
export default function TerminalPrompt({ text }: { text: string }) {
  const [shown, setShown] = useState(text);
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setShown("");
    setDone(false);
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
    <p className="mono text-xs text-gold sm:text-sm" aria-label={text}>
      <span aria-hidden>{shown}</span>
      <span
        aria-hidden
        className={done ? "ml-0.5 inline-block w-2 animate-pulse bg-gold text-transparent" : "ml-0.5 inline-block w-2 bg-gold text-transparent"}
      >
        .
      </span>
    </p>
  );
}
