"use client"

import { useState } from "react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

type FilterType = "real" | "demo";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<FilterType>("real");

  const filteredProjects = projects.filter(
    (project) => project.type === filter
  );

  return (
    <section className="py-24">
      <h1 className="text-4xl font-bold mb-6">Proyectos</h1>

      <p className="max-w-2xl text-zinc-400 mb-12">
        Una selección de proyectos reales y proyectos conceptuales desarrollados
        para distintos tipos de negocio.
      </p>

      {/* Filtro tipo iOS */}
      <div className="flex justify-center mb-16">
        <div className="relative inline-flex w-[260px] rounded-full bg-zinc-800 p-1">
          {/* Pill animado */}
          <span
            className={`absolute top-1 left-1 h-[calc(100%-8px)] w-1/2 rounded-full bg-white transition-transform duration-300 ${
              filter === "real" ? "translate-x-0" : "translate-x-full"
            }`}
          />

          <button
            onClick={() => setFilter("real")}
            className={`relative z-10 w-1/2 px-4 py-2 text-sm font-medium transition-colors ${
              filter === "real" ? "text-black" : "text-zinc-300"
            }`}
          >
            Clientes reales
          </button>

          <button
            onClick={() => setFilter("demo")}
            className={`relative z-10 w-1/2 px-4 py-2 text-sm font-medium transition-colors ${
              filter === "demo" ? "text-black" : "text-zinc-300"
            }`}
          >
            Proyectos demo
          </button>
        </div>
      </div>

      {/* Grid de proyectos */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) =>
          project.type === "real" ? (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-xl border border-zinc-800">
                {/* Vídeo */}
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                  {project.type === "real" && (
                    <span className="text-sm font-medium text-white opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-4">
                      Ver proyecto
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ) : (
            <motion.div
              key={project.id}
              className="block group"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-xl border border-zinc-800">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
