import "./globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Inter } from "next/font/google";


export const metadata = {
  title: {
    default: "Guillermo Sosa | Desarrollo Web Freelance",
    template: "%s | Guillermo Sosa",
  },
  description:
    "Diseño y desarrollo web a medida para negocios y emprendedores.",
};


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <header className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800 min-h-full antialised font-sans">
          <Navbar />
        </header>

        <main className="max-w-7xl mx-auto px-6">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}