import type { Metadata } from "next";
import Link from "next/link";
import { AdSenseBlock } from "../../components/adsense-block";
import { LAB_PREVIEWS, PROJECT_PREVIEWS, SOCIAL_LINKS } from "../home-data";
import { ProjectsExtras } from "../../components/projects-extras";
import { buildMetadata } from "../../lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Proyectos y Labs IA",
  description:
    "Demos, referencias, clones y laboratorios de voz, vídeo y TTS para enseñar producto, ejecución técnica y pruebas reales.",
  path: "/proyectos",
  keywords: ["proyectos web", "labs IA", "xemos", "demos y experimentos"],
});

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Proyectos y Labs IA</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          Demos, referencias y experimentos que enseñan cómo trabajo.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
          Aquí están las piezas de exploración, producto y prueba técnica. Sirven para enseñar criterio,
          ejecución y capacidad de iteración sin convertir la página principal en un escaparate caótico.
        </p>

        <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PROJECT_PREVIEWS.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.8rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-6 shadow-[0_26px_70px_rgba(3,8,20,0.24)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6b34a]">{project.status}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/66">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/62"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <AdSenseBlock slot="7413946655" variant="project" className="mt-8" />

        <section className="mt-14 grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <article className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4dd4ff]">XEMOS</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Proyecto IoT con premio y repo público.</h2>
            <p className="mt-4 text-base leading-8 text-white/68">
              XEMOS es la pieza que mejor resume la capa física de Robbe360: sensores, lectura de
              entorno, hardware, app complementaria y una ejecucion que fue reconocida en II Teleco
              Games.
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm leading-7 text-white/66">
                La base técnica compartida en LinkedIn incluye ESP32, sensores de temperatura y humedad,
                pantalla OLED, batería, app en Ionic Angular y una lógica pensada para monitorización y
                ajuste remoto.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SOCIAL_LINKS.xemos}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(63,102,255,0.34)] transition hover:scale-[1.02]"
              >
                Abrir repo de XEMOS
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
              >
                Ver respaldo en LinkedIn
              </a>
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4dd4ff]">Labs IA</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Pruebas de vídeo, voz y TTS en un mismo espacio.</h2>
            <div className="mt-6 grid gap-4">
              {LAB_PREVIEWS.map((lab) => (
                <div key={lab.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{lab.title}</h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#f6b34a]">
                      {lab.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/66">{lab.description}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <AdSenseBlock slot="7413946655" variant="project" className="mt-8" />

        <ProjectsExtras instagramUrl={SOCIAL_LINKS.instagram} />

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
          >
            Volver al inicio
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
          >
            Ver blog
          </Link>
          <Link
            href="/musica"
            className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
          >
            Ver musica
          </Link>
        </div>
      </div>
    </main>
  );
}
