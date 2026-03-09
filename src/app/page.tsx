import dynamic from "next/dynamic";
import Link from "next/link";
import {
  BLOG_ENTRIES,
  FAQ_ITEMS,
  MAIN_ROUTES,
  PROJECT_HIGHLIGHTS,
  TESTIMONIALS,
  UPDATES,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "./home-data";
import { HomeHero } from "../components/home-hero";
import { VideoLab } from "../components/video-lab";

const VoiceLab = dynamic(() => import("../components/voice-lab").then((mod) => mod.VoiceLab), {
  ssr: false,
  loading: () => <section className="bg-slate-950 px-6 py-14 text-white"><div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8">Cargando laboratorio de voz...</div></section>,
});

const TtsCard = dynamic(() => import("../components/tts-card").then((mod) => mod.TtsCard), {
  ssr: false,
  loading: () => <section className="bg-gray-50 px-6 py-12"><div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-8">Cargando sintetizador de voz...</div></section>,
});

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HomeHero />

      <section className="bg-black px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-semibold">Sobre Mí</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg">Soy Roberto Berrendo Eguino (Robbe), desarrollador web especializado en React, Angular y Node.js. Aquí iré compartiendo avances de mis rutas de música, blog y proyectos.</p>
      </section>

      <section className="bg-gray-900 px-6 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-lime-400">Actualizaciones</p>
              <h2 className="text-3xl font-semibold">Lo último que estoy moviendo</h2>
            </div>
            <p className="max-w-xl text-gray-300">Minirresúmenes rápidos para saber en qué estoy trabajando esta semana.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">{UPDATES.map((update) => <article key={update.title} className="rounded-2xl border border-gray-800 bg-gray-950/70 p-5 shadow-sm"><p className="text-xs uppercase tracking-[0.15em] text-lime-400">{update.date}</p><h3 className="mt-2 text-lg font-semibold">{update.title}</h3><p className="mt-2 text-gray-300">{update.detail}</p></article>)}</div>
        </div>
      </section>

      <VideoLab />
      <VoiceLab />
      <TtsCard />

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center"><h2 className="text-3xl font-semibold text-black">Rutas principales</h2><p className="mt-4 text-lg text-gray-600">Explora mis espacios de música, publicaciones y proyectos activos con contenido en evolución.</p></div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">{MAIN_ROUTES.map((route) => <Link key={route.title} href={route.href} className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><h3 className="text-xl font-semibold text-black">{route.title}</h3><p className="mt-3 text-gray-600">{route.description}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lime-600">{route.cta}<span className="transition group-hover:translate-x-1">→</span></span></Link>)}</div>
      </section>

      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl text-center"><h2 className="text-3xl font-semibold">Proyectos destacados</h2><p className="mt-4 text-lg text-gray-300">Diseños inspirados en páginas web y apps conocidas, adaptados a tu marca y publicados con dominio propio.</p></div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">{PROJECT_HIGHLIGHTS.map((project) => <article key={project.title} className="rounded-2xl border border-gray-700 bg-gray-900/80 p-6 shadow-lg transition hover:-translate-y-1"><h3 className="text-xl font-bold">{project.title}</h3><p className="mt-3 text-gray-300">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-lime-500/40 bg-lime-500/10 px-3 py-1 text-xs font-semibold text-lime-300">{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]"><div><h2 className="text-3xl font-semibold text-black">Blog & Recursos</h2><p className="mt-4 text-lg text-gray-700">Comparto ideas sobre diseño, marketing digital y desarrollo web con resúmenes semanales.</p><div className="mt-8 space-y-6">{BLOG_ENTRIES.map((entry) => <article key={entry.title} className="rounded-xl border border-gray-200 p-5 shadow-sm transition hover:shadow-md"><p className="text-sm text-gray-500">{entry.date}</p><h3 className="mt-2 text-xl font-semibold text-black">{entry.title}</h3><p className="mt-2 text-gray-700">{entry.excerpt}</p></article>)}</div></div><div className="rounded-2xl bg-black p-6 text-white shadow-lg"><h3 className="text-2xl font-semibold">Conecta en redes</h3><p className="mt-3 text-gray-300">Sígueme para ver más proyectos, tips y procesos creativos.</p></div></div>
      </section>

      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-6xl"><div className="text-center"><h2 className="text-3xl font-semibold text-black">Testimonios y resultados</h2><p className="mt-4 text-gray-600">Casos tipo de clientes con foco en conversión y crecimiento real.</p></div><div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">{TESTIMONIALS.map((testimonial) => <article key={testimonial.client} className="min-w-[85%] snap-start rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:min-w-[60%] md:min-w-0"><p className="text-xs uppercase tracking-[0.2em] text-lime-600">{testimonial.client}</p><h3 className="mt-4 text-lg font-semibold text-black">Problema</h3><p className="mt-2 text-gray-700">{testimonial.problem}</p><h3 className="mt-4 text-lg font-semibold text-black">Solución</h3><p className="mt-2 text-gray-700">{testimonial.solution}</p><h3 className="mt-4 text-lg font-semibold text-black">Resultado</h3><p className="mt-2 font-semibold text-lime-700">{testimonial.result}</p></article>)}</div></div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-5xl"><div className="text-center"><h2 className="text-3xl font-semibold text-black">Preguntas frecuentes</h2><p className="mt-4 text-gray-600">Respuestas rápidas para que tengas claro cómo trabajamos y qué esperar.</p></div><div className="mt-10 grid gap-4">{FAQ_ITEMS.map((item) => <article key={item.question} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold text-black">{item.question}</h3><p className="mt-3 text-gray-700">{item.answer}</p></article>)}</div></div>
      </section>

      <section className="bg-black px-6 py-16 text-center text-white"><h2 className="text-3xl font-semibold">Contacto</h2><p className="mt-4">Contáctame sin compromiso.</p><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full bg-lime-500 px-6 py-3 font-bold text-black transition duration-300 hover:bg-lime-400">WhatsApp</a></section>
    </main>
  );
}
