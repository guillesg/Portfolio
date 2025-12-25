"use client"

import { motion } from "framer-motion";
import { SiWhatsapp, SiInstagram, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <motion.section
        className="py-24 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hablemos de tu proyecto
        </h1>

        <p className="text-zinc-400 text-lg">
          Cuéntame qué necesitas y vemos juntos la mejor forma
          de llevarlo a cabo.
        </p>
      </motion.section>

      {/* CONTACTO DIRECTO */}
      <section className="py-24 border-t border-zinc-800">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-5xl">
          
          {/* Email */}
          <a
            href="mailto:guillesosa0@gmail.com"
            className="group border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1"
          >
            <HiOutlineMail
              size={32}
              className="text-zinc-400 transition-colors group-hover:text-white"
            />
            <span className="text-sm font-medium text-zinc-300">
              Email
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/34674845135"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1"
          >
            <SiWhatsapp
              size={32}
              className="text-zinc-400 transition-colors group-hover:text-white"
            />
            <span className="text-sm font-medium text-zinc-300">
              WhatsApp
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/guillesg12/"
            className="group border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1"
          >
            <SiInstagram
              size={32}
              className="text-zinc-400 transition-colors group-hover:text-white"
            />
            <span className="text-sm font-medium text-zinc-300">
              Instagram
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/guillermo-sosa-gil-576195121/"
            className="group border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1"
          >
            <SiLinkedin
              size={32}
              className="text-zinc-400 transition-colors group-hover:text-white"
            />
            <span className="text-sm font-medium text-zinc-300">
              LinkedIn
            </span>
          </a>
        </div>
      </section>

      {/* FORMULARIO → WHATSAPP */}
      <section className="py-24 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">
          Cuéntame tu idea
        </h2>

        <p className="max-w-2xl text-zinc-400 mb-12">
          Escribe un breve mensaje y se abrirá WhatsApp para
          que podamos hablar directamente.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const message = encodeURIComponent(
              "Hola Guillermo, tengo un proyecto y me gustaría comentártelo."
            );

            window.open(
              `https://wa.me/34674845135?text=${message}`,
              "_blank"
            );
          }}
          className="max-w-xl space-y-6"
        >
          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Mensaje
            </label>
            <textarea
              required
              rows={4}
              className="w-full rounded-lg bg-zinc-900 border border-zinc-800 p-4 text-zinc-100 focus:outline-none focus:border-zinc-600"
              placeholder="Cuéntame brevemente qué necesitas..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-zinc-200 hover:scale-[1.02]"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </section>
    </>
  );
}