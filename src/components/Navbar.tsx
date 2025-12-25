"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-6 px-6">
      {/* Nombre / Logo */}
      <div className="text-xl font-semibold tracking-tight">
        <Link href="/">Guillermo Sosa</Link>
      </div>

      {/* Links desktop */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-8 text-zinc-300">
          <li>
            <Link href="/" className="hover:text-white transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-white transition">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-white transition">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white transition">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      {/* Botón hamburguesa */}
      <button
        className="md:hidden relative z-50 w-8 h-8"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span
          className={`absolute left-0 top-1/2 h-0.5 w-8 bg-white transition-transform ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 h-0.5 w-8 bg-white transition-opacity ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 h-0.5 w-8 bg-white transition-transform ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>

      {/* Menú mobile */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-zinc-950 border-t border-zinc-800 md:hidden">
          <ul className="flex flex-col gap-6 p-6 text-zinc-300">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setOpen(false)}>
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)}>
                Sobre mí
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
