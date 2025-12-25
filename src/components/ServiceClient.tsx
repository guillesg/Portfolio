"use client"

import { motion } from "framer-motion";

export default function ServicesPage() {
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
          Servicios de desarrollo web y aplicaciones
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
          Desarrollo soluciones digitales a medida, pensadas para resolver
          problemas reales de negocio y generar resultados.
        </p>
      </motion.section>

      {/* SERVICIO BASE */}
      <section className="py-24 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-12">
          Qué incluye cualquier proyecto
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Diseño UI/UX orientado a negocio",
            "Desarrollo web a medida",
            "Diseño responsive",
            "Optimización de rendimiento",
            "SEO técnico básico",
            "Buenas prácticas y escalabilidad",
          ].map((item) => (
            <div
              key={item}
              className="border border-zinc-800 rounded-xl p-6 text-zinc-300 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS ADICIONALES */}
      <section className="py-24 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">
          Servicios adicionales
        </h2>

        <p className="max-w-2xl text-zinc-400 mb-12">
          Servicios opcionales que se añaden según las necesidades reales
          del proyecto para maximizar resultados.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "SEO avanzado",
              text: "Optimización de contenido y estructura para mejorar posicionamiento y tráfico.",
            },
            {
              title: "Branding e identidad visual",
              text: "Definición de colores, tipografías y estilo visual coherente.",
            },
            {
              title: "Diseño de logotipo",
              text: "Creación de logotipo profesional cuando no existe identidad previa.",
            },
            {
              title: "Fotografía profesional",
              text: "Sesiones para locales, productos o equipo.",
            },
            {
              title: "Creación de contenido",
              text: "Textos optimizados para comunicar valor y convertir.",
            },
            {
              title: "Mantenimiento y soporte",
              text: "Soporte técnico, mejoras y actualizaciones continuas.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="group border border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-0.5">
                {service.title}
              </h3>
              <p className="text-zinc-400">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TIPOS DE PROYECTO */}
      <section className="py-24 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-12">
          Tipos de proyecto
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Landing Page",
              text: "Proyecto enfocado a conversión y campañas específicas.",
            },
            {
              title: "Web profesional multipágina",
              text: "Web corporativa completa para empresas y profesionales.",
            },
            {
              title: "Ecommerce / Aplicación web",
              text: "Tiendas online o apps web con funcionalidades avanzadas.",
            },
            {
              title: "Aplicaciones móviles",
              text: "Apps móviles para iOS y Android orientadas a producto.",
            },
            {
              title: "Aplicaciones de escritorio",
              text: "Software multiplataforma con Electron.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="border border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-zinc-400">
                {project.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 border-t border-zinc-800 text-center">
        <h2 className="text-3xl font-bold mb-6">
          ¿Tienes un proyecto en mente?
        </h2>

        <p className="max-w-2xl mx-auto text-zinc-400 mb-10">
          Cuéntame tu idea y te prepararé una propuesta clara,
          realista y adaptada a tus objetivos.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-zinc-200 hover:scale-[1.02]"
        >
          Contactar
        </a>
      </section>
    </>
  );
}
