// src/data/projects.ts

export type ProjectType = "real" | "demo";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  video: string;
  url?: string; // solo para proyectos reales
}

export const projects: Project[] = [
  {
    id: "cliente-1",
    title: "Ópticos Domínguez Romero",
    description: "Web Ópticos Domínguez Romero.",
    type: "real",
    video: "/videos/video-optica.mp4",
    url: "#", // cambia por la real
  },
  {
    id: "cliente-2",
    title: "Ondina Surf",
    description: "Web para Ondina Surf & skate Shop.",
    type: "real",
    video: "/videos/video-ondina.mp4",
    url: "http://ondina-surf.com/", // cambia por la real
  },

  {
    id: "demo1",
    title: "Landing básica",
    description: "Landing page hecha con HTML, CSS Y JS.",
    type: "demo",
    video: "/videos/demo-1.mp4",
  },
];
