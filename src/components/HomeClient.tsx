"use client"

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <motion.section
        className="py-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
          Diseño y desarrollo web para negocios que quieren crecer
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
          Diseño y desarrollo soluciones digitales a medida, pensadas para convertir visitas en clientes y crecer contigo a largo plazo.
        </p>

        <div className="mt-10 flex gap-6 items-center">
          {/* CTA principal */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-zinc-200 hover:scale-[1.02]"
          >
            Hablemos de tu proyecto
          </a>

          {/* CTA secundario */}
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 text-zinc-300 font-medium transition-all duration-200 hover:text-white hover:gap-3"
          >
            Ver trabajos
            <span className="text-lg">→</span>
          </a>
        </div>
      </motion.section>

      {/* TECNOLOGÍAS */}
      <section className="py-16">
        <p className="text-sm text-zinc-500 mb-6">
          Tecnologías con las que trabajo
        </p>

        <div className="flex flex-wrap items-center gap-8 text-zinc-400">
          <SiReact size={28} />
          <SiNextdotjs size={28} />
          <SiTypescript size={28} />
          <SiTailwindcss size={28} />
          <SiNodedotjs size={28} />
          <SiPostgresql size={28} />
        </div>
        <p className="text-sm text-zinc-500 mb-6 py-5">
          Herramientas modernas, probadas y pensadas para escalar.
        </p>
      </section>

      {/* TIPOS DE PROYECTOS */}
      <section className="py-24 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-12">
          Tipos de proyectos que realizo
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group border border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-0.5">
              Landing Page
            </h3>
            <p className="text-zinc-400">
              Página única enfocada en conversión, ideal para campañas,
              servicios concretos o validación de ideas.
            </p>
          </div>

          <div className="group border border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-0.5">
              Web profesional multipágina
            </h3>
            <p className="text-zinc-400">
              Web corporativa para empresas y profesionales que necesitan
              presentar servicios, equipo y generar confianza.
            </p>
          </div>

          <div className="group border border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-0.5">
              Ecommerce / Aplicación web
            </h3>
            <p className="text-zinc-400">
              Tiendas online o aplicaciones web a medida, con panel de
              administración y funcionalidades avanzadas.
            </p>
          </div>

          <div className="group border border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-0.5">
              Aplicaciones móviles
            </h3>
            <p className="text-zinc-400">
              Apps móviles para iOS y Android orientadas a producto, negocio o
              automatización de procesos.
            </p>
          </div>

          <div className="group border border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-0.5">
              Aplicaciones de escritorio
            </h3>
            <p className="text-zinc-400">
              Software de escritorio multiplataforma con Electron, ideal para
              herramientas internas o productos SaaS.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
