import Image from "next/image";
import Link from "next/link";
import {
  buildWhatsappLink,
  CAREER_ENTRIES,
  CASE_STUDIES,
  CREDENTIALS,
  GOOGLE_CALENDAR_LINK,
  HERO_SIGNALS,
  MAIN_ROUTES,
  PRODUCT_SEED,
  RECOMMENDATIONS,
  SERVICE_PACKS,
  SKILL_CLUSTERS,
  SKILL_METRICS,
  SOCIAL_LINKS,
  WHATSAPP_MESSAGE,
} from "./home-data";
import { HomeCareerTabs } from "../components/home-career-tabs";
import { HomeCodeReveal } from "../components/home-code-reveal";
import { SkillRadar } from "../components/skill-radar";

const whatsappLink = buildWhatsappLink(WHATSAPP_MESSAGE);

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
              <a href="#servicios" className="rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-white">
                Servicios
              </a>
              <a href="#matriz" className="rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-white">
                Matriz
              </a>
              <a href="#trayectoria" className="rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-white">
                Trayectoria
              </a>
              <a href="#casos" className="rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-white">
                Casos
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
                Desarrollo web, automatización ligera y producto digital con ejecución real.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
                Soy Roberto Berrendo Eguino. Trabajo para que una web explique mejor un negocio, una automatización quite
                tareas repetitivas y un prototipo sirva para validar producto sin perder meses en teoría.
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
                <Link
                  href="/proyectos"
                  className="inline-flex items-center rounded-full border border-[#f6b34a]/20 bg-[#1a1420] px-6 py-3 text-sm font-semibold text-[#ffd597] transition hover:bg-[#241928]"
                >
                  Ver casos y demos
                </Link>
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
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#4dd4ff]">Marca técnica</p>
                  <p className="mt-3 text-base leading-8 text-white/72">
                    La identidad visual acompaña al producto, pero no lo sustituye. El valor está en construir con
                    claridad, contraste y una forma de trabajar que no se rompe cuando toca entregar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <div className="flex max-w-4xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Servicios y packs</p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white">
            Qué vendo exactamente, cuánto cuesta y para quién encaja.
          </h2>
          <p className="text-base leading-8 text-white/68">
            Trabajo con formatos cerrados para salir antes, reducir ruido y dejar claro qué problema se está resolviendo.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {SERVICE_PACKS.map((pack) => (
            <article
              key={pack.title}
              className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4dd4ff]">Pack cerrado</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{pack.title}</h3>
                </div>
                <span className="rounded-full border border-[#f6b34a]/20 bg-[#1a1420] px-4 py-2 text-sm font-semibold text-[#ffd597]">
                  {pack.price}
                </span>
              </div>

              <div className="mt-6 space-y-5 text-sm leading-7 text-white/68">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Qué resuelve</p>
                  <p className="mt-2">{pack.solves}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Qué incluye</p>
                  <ul className="mt-2 space-y-2">
                    {pack.includes.map((item) => (
                      <li key={item} className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Para quién encaja</p>
                  <p className="mt-2">{pack.fit}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={buildWhatsappLink(pack.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(63,102,255,0.34)] transition hover:scale-[1.02]"
                >
                  {pack.ctaLabel}
                </a>
                <Link
                  href={pack.proofHref}
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
                >
                  {pack.proofLabel}
                </Link>
              </div>
            </article>
          ))}
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

      <section id="casos" className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
        <div className="flex max-w-4xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Casos de negocio</p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white">
            Problema, enfoque y salida útil antes que la ficha técnica.
          </h2>
          <p className="text-base leading-8 text-white/68">
            Estos casos enseñan cómo aterrizo una necesidad: más claridad comercial, mejor captación o una prueba fuerte
            de ejecución técnica cuando el sistema sale del navegador.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {CASE_STUDIES.map((caseStudy) => (
            <article
              key={caseStudy.title}
              className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f6b34a]">{caseStudy.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{caseStudy.title}</h3>

              <div className="mt-6 space-y-5 text-sm leading-7 text-white/68">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Problema</p>
                  <p className="mt-2">{caseStudy.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Solución</p>
                  <p className="mt-2">{caseStudy.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Resultado esperado</p>
                  <p className="mt-2">{caseStudy.expectedResult}</p>
                </div>
              </div>

              {caseStudy.proofHref.startsWith("/") ? (
                <Link
                  href={caseStudy.proofHref}
                  className="mt-6 inline-flex text-sm font-semibold text-[#4dd4ff] transition hover:text-white"
                >
                  {caseStudy.proofLabel}
                </Link>
              ) : (
                <a
                  href={caseStudy.proofHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex text-sm font-semibold text-[#4dd4ff] transition hover:text-white"
                >
                  {caseStudy.proofLabel}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="codigo" className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <HomeCodeReveal />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">{PRODUCT_SEED.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">{PRODUCT_SEED.name}</h2>
              <p className="mt-4 text-xl leading-8 text-white/80">{PRODUCT_SEED.headline}</p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/68">{PRODUCT_SEED.description}</p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Qué incluye la validación</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/68">
                {PRODUCT_SEED.features.map((feature) => (
                  <li key={feature} className="rounded-[1rem] border border-white/10 bg-[#081526] px-4 py-3">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={buildWhatsappLink(PRODUCT_SEED.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(63,102,255,0.34)] transition hover:scale-[1.02]"
                >
                  {PRODUCT_SEED.ctaLabel}
                </a>
                <Link
                  href={PRODUCT_SEED.proofHref}
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
                >
                  {PRODUCT_SEED.proofLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-7 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Ecosistema Robbe360</p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white">
              Blog, capa creativa y proyectos conectados sin mezclar funciones.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-white/68">
              Cada ruta cumple una función distinta: reforzar autoridad, enseñar trabajo técnico o sostener la parte
              humana de la marca sin romper el foco comercial de la home.
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
