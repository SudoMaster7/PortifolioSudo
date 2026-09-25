/** Marcadores provisórios: nada com esses padrões vai ao ar. */
const PROVISIONAL = [
  /\[.*\]/, // [preencher], [link], [em produção / finalizando]
  /a confirmar/i,
  /em breve/i,
  /preencher/i,
  /^-+$/,
  /^—$/,
];

/**
 * Regra do projeto: campo vazio ou provisório NÃO renderiza.
 * Ver src/content/site.ts (_nota).
 */
export function isPublishable(value?: string | null): value is string {
  if (!value) return false;
  const v = value.trim();
  if (!v) return false;
  return !PROVISIONAL.some((re) => re.test(v));
}

export function pub<T extends string | null | undefined>(value: T): string | null {
  return isPublishable(value) ? value.trim() : null;
}

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
