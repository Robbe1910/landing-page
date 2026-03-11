import Image from "next/image";
import Link from "next/link";
import {
  CAREER_ENTRIES,
  CREDENTIALS,
  GOOGLE_CALENDAR_LINK,
  HERO_SIGNALS,
  MAIN_ROUTES,
  PROJECT_PREVIEWS,
  RECOMMENDATIONS,
  SKILL_CLUSTERS,
  SKILL_METRICS,
  SOCIAL_LINKS,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "./home-data";
import { HomeCareerTabs } from "../components/home-career-tabs";
import { HomeCodeReveal } from "../components/home-code-reveal";
import { SkillRadar } from "../components/skill-radar";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(63,102,255,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(45,212,255,0.18),transparent_30%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-18 pt-6 sm:px-8 lg:px-10">
          <nav className="flex flex-col gap-5 rounded-full border border-white/10 bg-[rgba(8,18,38,0.82)] px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <Image src="/logo.png" alt="Logo Robbe360" fill className="object-contain p-1.5" priority />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-white/45">Robbe360</p>
                <p className="text-lg font-semibold text-white">Precisión digital sin máscaras</p>
              </div>
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white/72">
              <a href="#matriz" className="rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-white">
                Matriz
              </a>
              <a href="#trayectoria" className="rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-white">
                Trayectoria
              </a>
              <a href="#codigo" className="rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-white">
                Código 888
              </a>
              <Link href="/proyectos" className="rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-white">
                Proyectos
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] px-5 py-2 text-white shadow-[0_12px_26px_rgba(63,102,255,0.26)] transition hover:scale-[1.02]"
              >
                WhatsApp
              </a>
            </div>
          </nav>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
            <div>
              <p className="inline-flex items-center rounded-full border border-[#4dd4ff]/25 bg-[#081526] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#4dd4ff]">
                Fullstack · IoT · Web con criterio
              </p>
              <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Desarrollo de producto digital con mirada técnica, identidad propia y ejecución real.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
                Soy Roberto Berrendo Eguino. Construyo webs, interfaces y sistemas conectados con foco en velocidad,
                claridad y funcionamiento real. Robbe360 vive justo ahí: entre frontend fino, backend útil e IoT con
                sentido.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(63,102,255,0.28)] transition hover:scale-[1.02]"
                >
                  Escribirme por WhatsApp
                </a>
                <a
                  href={GOOGLE_CALENDAR_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
                >
                  Agendar una consulta
                </a>
                <a
                  href={SOCIAL_LINKS.xemos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-[#f6b34a]/20 bg-[#1a1420] px-6 py-3 text-sm font-semibold text-[#ffd597] transition hover:bg-[#241928]"
                >
                  Ver repo de XEMOS
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {HERO_SIGNALS.map((signal) => (
                  <article
                    key={signal.label}
                    className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,18,38,0.82)] p-5 shadow-[0_24px_60px_rgba(3,8,20,0.22)]"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">{signal.label}</p>
                    <h2 className="mt-3 text-xl font-semibold text-white">{signal.value}</h2>
                    <p className="mt-3 text-sm leading-7 text-white/64">{signal.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] blur-xl" />
              <div className="relative rounded-[2.5rem] border border-white/10 bg-[rgba(6,12,26,0.78)] p-4 shadow-[0_38px_110px_rgba(3,8,20,0.34)] sm:p-6">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(63,102,255,0.22),rgba(6,12,26,0.92))]">
                  <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:52px_52px]" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,212,255,0.18),transparent_46%)]" />
                  <div className="relative aspect-[16/11]">
                    <div className="absolute left-5 top-5 z-10 rounded-full border border-[#4dd4ff]/20 bg-[#081526]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4dd4ff] backdrop-blur">
                      Wolf 888
                    </div>
                    <Image
                      src="/wolf888-clean.webp"
                      alt="Lobo cyber con estética tecnológica y el sello 888"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-contain px-3 py-4 drop-shadow-[0_0_42px_rgba(77,212,255,0.36)] sm:px-4 sm:py-5"
                    />
                  </div>
                </div>
                <div className="mt-2 rounded-[1.5rem] border border-white/10 bg-[#081526] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#4dd4ff]">Modo Robbe360</p>
                  <p className="mt-3 text-base leading-8 text-white/72">
                    El lobo suma identidad, pero el trabajo se sostiene en otra cosa: precisión, lectura del contexto,
                    ejecución bajo presión y una forma de construir donde la técnica no va separada del criterio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="matriz" className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">La matriz tecnológica</p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white">Frontend, backend, datos e IoT sin vender humo.</h2>
          <p className="text-base leading-8 text-white/68">
            Una lectura clara del stack y de dónde aporta valor: interfaz, lógica, datos y hardware puestos al servicio
            de piezas reales.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SkillRadar metrics={SKILL_METRICS} />

          <div className="grid gap-5">
            {SKILL_CLUSTERS.map((cluster) => (
              <article
                key={cluster.title}
                className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#f6b34a]">{cluster.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{cluster.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/68">{cluster.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trayectoria" className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Cronología de resiliencia</p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white">Del hardware base al producto fullstack.</h2>
          <p className="text-base leading-8 text-white/68">
            Esta parte sustituye el CV plano por una lectura más honesta del recorrido: prácticas, proyecto IoT, etapas
            técnicas duras y la capa humana que sostiene la ejecución.
          </p>
        </div>

        <div className="mt-10">
          <HomeCareerTabs entries={CAREER_ENTRIES} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4dd4ff]">Credibilidad con pruebas</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Premio, repositorio y señales públicas.</h2>
            <div className="mt-6 grid gap-4">
              {CREDENTIALS.map((credential) => (
                <article
                  key={credential.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6b34a]">{credential.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{credential.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{credential.description}</p>
                  {credential.href ? (
                    <a
                      href={credential.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-[#4dd4ff] transition hover:text-white"
                    >
                      {credential.cta}
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4dd4ff]">Recomendaciones recibidas</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Lo que otros destacaron al trabajar conmigo.</h2>
            <div className="mt-6 grid gap-4">
              {RECOMMENDATIONS.map((recommendation) => (
                <article
                  key={recommendation.name}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{recommendation.name}</h3>
                      <p className="text-sm text-white/56">{recommendation.role}</p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                      {recommendation.context}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/68">{recommendation.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Builds en ruta</p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white">Proyectos que ya están alimentando la marca.</h2>
          <p className="text-base leading-8 text-white/68">
            Aquí no hay promesas abstractas. Hay piezas concretas que sirven para afinar UI, estudiar patrones y
            demostrar ejecución.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PROJECT_PREVIEWS.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.8rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-6 shadow-[0_26px_70px_rgba(3,8,20,0.24)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6b34a]">{project.status}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
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
        </div>
      </section>

      <section id="codigo" className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <HomeCodeReveal />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)] sm:p-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Rutas activas</p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white">Blog, creatividad y proyectos conectados en un mismo ecosistema.</h2>
            <p className="max-w-3xl text-base leading-8 text-white/68">
              Cada ruta cumple una función distinta: enseñar proceso, mostrar trabajo técnico o enseñar la capa creativa
              que acompaña a la marca.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {MAIN_ROUTES.map((route) => (
              <Link
                key={route.title}
                href={route.href}
                className="group rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#4dd4ff]/30 hover:bg-white/[0.05]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f6b34a]">{route.note}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{route.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/66">{route.description}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-[#4dd4ff] transition group-hover:text-white">
                  {route.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(140deg,rgba(8,18,38,0.96),rgba(14,24,48,0.94))] p-8 shadow-[0_40px_120px_rgba(3,8,20,0.34)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Contacto</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white">
            Si buscas una web o un sistema digital con criterio, escríbeme con contexto y lo aterrizamos.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/68">
            Trabajo mejor cuando hay un objetivo claro: captar clientes, enseñar mejor un producto, automatizar una
            parte del negocio o construir una identidad que no parezca la plantilla de siempre.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(63,102,255,0.28)] transition hover:scale-[1.02]"
            >
              Abrir WhatsApp
            </a>
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
            >
              Reservar hueco
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/56 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-white">Robbe360</p>
            <p className="mt-1">2026 Roberto Berrendo Eguino. Precisión digital, sin máscaras.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              Instagram
            </a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              TikTok
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              GitHub
            </a>
            <Link href="/privacidad" className="transition hover:text-white">
              Política de privacidad
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
