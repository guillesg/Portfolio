import PortfolioClient from "@/components/PortfolioClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Guillermo Sosa",
  description:
    "Portfolio de proyectos reales y conceptuales.",
  openGraph: {
    images: ["/og/home.png"],
  },
};

export default function Page() {
  return <PortfolioClient />;
}
