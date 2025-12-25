import AboutClient from "@/components/AboutClient"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí | Guillermo Sosa – Desarrollador Web Freelance",
  description:
    "Soy Guillermo Sosa, desarrollador web freelance especializado en crear soluciones digitales a medida para negocios.",
  openGraph: {
    title: "Sobre mí – Guillermo Sosa",
    description:
      "Desarrollador web freelance especializado en soluciones digitales a medida.",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Guillermo Sosa – Desarrollador Web Freelance",
      },
    ],
    locale: "es_ES",
    type: "profile",
  },
};

export default function Page() {
  return <AboutClient />
}
