"use client"

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiElectron,
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">
          Sobre mí
        </h1>

        <p className="text-zinc-400 text-lg mb-6">
          Soy Guillermo Sosa, desarrollador web especializado en crear
          soluciones digitales a medida para negocios y emprendedores.
        </p>

        <p className="text-zinc-400">
          Trabajo proyectos de forma personalizada, cuidando tanto el
          diseño como la parte técnica, con el objetivo de crear productos
          digitales sólidos, escalables y orientados a resultados.
        </p>
      </section>

      {/* Enfoque */}
      <section className="py-24 border-t border-zinc-800 max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">
          Mi forma de trabajar
        </h2>

        <p className="text-zinc-400 mb-4">
          No me limito a “hacer una web”. Analizo cada proyecto para
          entender qué necesita el negocio y proponer la mejor solución
          técnica posible.
        </p>

        <p className="text-zinc-400">
          Me involucro en cada fase del proceso: desde la idea inicial,
          pasando por el diseño y desarrollo, hasta el despliegue y
          mantenimiento del proyecto.
        </p>
      </section>

      {/* Tecnologías */}
      <section className="py-24 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-10">
          Tecnologías con las que trabajo
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 text-zinc-400">
          {/* Frontend */}
          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiHtml5 size={32} />
            <span className="text-sm">HTML</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiCss3 size={32} />
            <span className="text-sm">CSS</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiJavascript size={32} />
            <span className="text-sm">JavaScript</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiTypescript size={32} />
            <span className="text-sm">TypeScript</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiReact size={32} />
            <span className="text-sm">React</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiNextdotjs size={32} />
            <span className="text-sm">Next.js</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiTailwindcss size={32} />
            <span className="text-sm">Tailwind</span>
          </div>

          {/* Backend / Desktop */}
          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiNodedotjs size={32} />
            <span className="text-sm">Node.js</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiElectron size={32} />
            <span className="text-sm">Electron</span>
          </div>

          {/* Bases de datos */}
          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiMysql size={32} />
            <span className="text-sm">MySQL</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiPostgresql size={32} />
            <span className="text-sm">PostgreSQL</span>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white transition">
            <SiMongodb size={32} />
            <span className="text-sm">MongoDB</span>
          </div>
        </div>
      </section>
    </>
  );
}
