import { pt, projectsPt, experiencePt, educationPt } from "./pt";
import { en, projectsEn, experienceEn, educationEn } from "./en";
import type { Locale, Project } from "./site";

export const locales: Locale[] = ["pt", "en"];

export const dictionaries = {
  pt: { t: pt, projects: projectsPt, experience: experiencePt, education: educationPt },
  en: { t: en, projects: projectsEn, experience: experienceEn, education: educationEn },
} as const;

export function getDict(locale: string) {
  return dictionaries[(locale === "en" ? "en" : "pt") as Locale];
}

export function isLocale(value: string): value is Locale {
  return value === "pt" || value === "en";
}

export function findProject(locale: string, slug: string): Project | undefined {
  return getDict(locale).projects.find((p) => p.slug === slug);
}

export function nextProject(locale: string, slug: string): Project | undefined {
  const list = getDict(locale).projects;
  const i = list.findIndex((p) => p.slug === slug);
  if (i < 0) return undefined;
  return list[(i + 1) % list.length];
}

export type { Locale, Project };
