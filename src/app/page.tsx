import HomeClient from "@/components/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollador Web Freelance en España | Guillermo Sosa",
  description:
    "Diseño y desarrollo web a medida para negocios y emprendedores.",
  openGraph: {
    images: ["/og/home.png"],
  },
};

export default function Page() {
  return <HomeClient />;
}
