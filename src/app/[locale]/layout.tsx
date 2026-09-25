import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDict, isLocale, locales } from "@/content";
import { contact } from "@/content/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { t } = getDict(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { "pt-BR": "/pt", en: "/en" },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { t } = getDict(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leonardo Moraes Oliveira de Brito",
    alternateName: "Leonardo Brito",
    jobTitle: locale === "pt" ? "Desenvolvedor Full-Stack" : "Full-Stack Developer",
    email: `mailto:${contact.email}`,
    url: contact.linkedin,
    address: { "@type": "PostalAddress", addressLocality: "Duque de Caxias", addressRegion: "RJ", addressCountry: "BR" },
    sameAs: [contact.github, contact.linkedin],
    knowsLanguage: ["pt-BR", "en", "es"],
    knowsAbout: ["React", "Next.js", "TypeScript", "Python", "Django", "n8n", "PostgreSQL", "Docker", "Linux"],
  };

  return (
    <>
      <Header locale={locale} nav={t.nav} />
      <main className="pt-16">{children}</main>
      <Footer locale={locale} rights={t.footer.rights} built={t.footer.built} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
