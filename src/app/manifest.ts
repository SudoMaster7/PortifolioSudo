import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Leonardo Brito — Desenvolvedor Full-Stack",
    short_name: "Leonardo Brito",
    description:
      "Portfólio de Leonardo Brito: sistemas web, apps e agentes de IA para WhatsApp.",
    start_url: "/pt",
    display: "standalone",
    background_color: "#0e0f12",
    theme_color: "#0e0f12",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
