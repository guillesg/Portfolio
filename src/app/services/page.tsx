import ServiceClient from "@/components/ServiceClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios desarrollo web | Guillermo Sosa",
  description:
    "Servicios de Diseño y desarrollo web a medida para negocios y emprendedores.",
  openGraph: {
    images: ["/og/home.png"],
  },
};

export default function Page() {
  return <ServiceClient />;
}
