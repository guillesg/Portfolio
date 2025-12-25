import ContactClient from "@/components/ContactClient"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Guillermo Sosa – Desarrollo Web Freelance",
  description:
    "Contacta conmigo para hablar sobre tu proyecto web o aplicación. Respuesta directa por WhatsApp o email.",
  openGraph: {
    title: "Contacto – Guillermo Sosa",
    description:
      "Hablemos sobre tu proyecto web o aplicación. Contacto directo y personalizado.",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Contacto – Guillermo Sosa",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function Page() {
  return <ContactClient />
}