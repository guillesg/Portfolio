import { SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 py-10 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Info */}
        <div className="text-zinc-400">
          <p className="font-medium text-zinc-200">
            Guillermo Sosa
          </p>
          <p className="mt-1">
            Desarrollador web freelance
          </p>
          <p className="mt-2 text-xs">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Redes */}
        <div className="flex items-center gap-6 text-zinc-400">
          <a
            href="#"
            aria-label="Instagram"
            className="transition-colors hover:text-white"
          >
            <SiInstagram size={20} />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <SiLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
