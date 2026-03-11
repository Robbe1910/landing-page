import type { Metadata } from "next";
import Link from "next/link";
import { AdSenseBlock } from "../../components/adsense-block";
import { ProjectsExtras } from "../../components/projects-extras";
import {
  buildWhatsappLink,
  LAB_PREVIEWS,
  PRODUCT_SEED,
  PROJECT_REFERENCES,
  SOCIAL_LINKS,
} from "../home-data";
import { buildMetadata } from "../../lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Proyectos y Labs IA",
  description:
    "Casos, prototipos y laboratorios de producto para negocio local, automatización ligera e interfaces web con criterio técnico.",
  path: "/proyectos",
  keywords: [
    "proyectos web",
    "casos de negocio local",
    "automatización IA ligera",
    "labs IA",
    "prototipos digitales",
  ],
});

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Proyectos y Labs IA</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          Casos, referencias y laboratorios para enseñar cómo convierto criterio en producto.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
          Esta ruta está pensada para enseñar trabajo útil: primero referencias que un cliente puede entender rápido y
          después laboratorios donde pruebo vídeo, voz y TTS sin contaminar la home comercial.
        </p>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,18,38,0.94),rgba(12,26,52,0.9))] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4dd4ff]">{PRODUCT_SEED.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">{PRODUCT_SEED.name}</h2>
              <p className="mt-4 text-xl leading-8 text-white/82">{PRODUCT_SEED.headline}</p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/68">{PRODUCT_SEED.description}</p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Base de la validación</p>
              <div className="mt-4 grid gap-3">
                {PRODUCT_SEED.features.map((feature) => (
                  <div key={feature} className="rounded-[1rem] border border-white/10 bg-[#081526] px-4 py-3 text-sm text-white/74">
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={buildWhatsappLink(PRODUCT_SEED.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(63,102,255,0.34)] transition hover:scale-[1.02]"
                >
                  {PRODUCT_SEED.ctaLabel}
                </a>
                <Link
                  href={PRODUCT_SEED.proofHref}
                  className="inline-flex rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
                >
                  {PRODUCT_SEED.proofLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">Referencias útiles para cliente</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Problema, enfoque y salida útil.</h2>
            </div>
            <span className="rounded-full border border-[#4dd4ff]/20 bg-[#081526] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4dd4ff]">
              Casos y pruebas de producto
            </span>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {PROJECT_REFERENCES.map((project) => (
              <article
                key={project.title}
                className="rounded-[1.8rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-6 shadow-[0_26px_70px_rgba(3,8,20,0.24)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6b34a]">{project.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{project.title}</h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-white/66">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Problema</p>
                    <p className="mt-2">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Enfoque</p>
                    <p className="mt-2">{project.approach}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Salida útil</p>
                    <p className="mt-2">{project.outcome}</p>
                  </div>
                </div>

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

                <Link
                  href={project.href}
                  className="mt-6 inline-flex text-sm font-semibold text-[#4dd4ff] transition hover:text-white"
                >
                  {project.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <AdSenseBlock slot="7413946655" variant="project" className="mt-8" />

        <section className="mt-14 grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <article className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4dd4ff]">XEMOS</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Prueba de ejecución técnica fuera del navegador.</h2>
            <p className="mt-4 text-base leading-8 text-white/68">
              XEMOS resume una parte importante de mi perfil: sensores, lectura de entorno, hardware, app complementaria
              y una ejecución reconocida en II Teleco Games.
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm leading-7 text-white/66">
                La base técnica compartida en LinkedIn incluye ESP32, sensores de temperatura y humedad, pantalla OLED,
                batería, app en Ionic Angular y una lógica pensada para monitorización y ajuste remoto.
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
            <h2 className="mt-3 text-3xl font-semibold text-white">Laboratorios para validar interfaces y flujos nuevos.</h2>
            <p className="mt-4 text-base leading-8 text-white/68">
              Aquí dejo las pruebas de vídeo, voz y TTS. No son la oferta principal, pero sí enseñan investigación,
              criterio técnico y capacidad de iterar producto rápido.
            </p>
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
            Ver música
          </Link>
        </div>
      </div>
    </main>
  );
}
