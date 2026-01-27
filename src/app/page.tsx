'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const whatsappNumber = "609881656";
  const whatsappMessage = "Hola, me gustaría obtener más información.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const googleCalendarLink = "https://calendar.app.google/r3uhjT7JKmDBcBxh9";
  const projectHighlights = [
    {
      title: "Landing para gimnasio",
      description:
        "Experiencia dinámica con horarios, clases y formulario de inscripción integrado.",
      tags: ["Diseño web", "Conversión", "Responsive"],
    },
    {
      title: "App de reservas gastronómicas",
      description:
        "Pantallas tipo Uber Eats con filtros, menú visual y reservas en tiempo real.",
      tags: ["UI/UX", "Apps conocidas", "Prototipo"],
    },
    {
      title: "E-commerce de moda",
      description:
        "Catálogo visual, checkout simple y automatizaciones para redes sociales.",
      tags: ["Tienda online", "Branding", "Automatización"],
    },
  ];

  const blogEntries = [
    {
      title: "Cómo diseño experiencias web memorables",
      excerpt:
        "Un vistazo a mis procesos para combinar estética, velocidad y resultados.",
      date: "Marzo 2024",
    },
    {
      title: "Inspiración en apps conocidas",
      excerpt:
        "Qué podemos aprender de interfaces como Airbnb o Notion para proyectos locales.",
      date: "Febrero 2024",
    },
    {
      title: "Tips rápidos para tu landing",
      excerpt:
        "Tres cambios que mejoran la conversión sin tocar el presupuesto.",
      date: "Enero 2024",
    },
  ];

  return (
    <div className="min-h-screen w-full font-sans">

      {/* Hero Section */}
      <header className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-black via-gray-900 to-lime-500 text-white">
        {isClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-4"
          >
            {/* Contenedor responsive para el logo */}
            <div className="relative w-32 h-32 md:w-44 md:h-44">
              <Image
                src="/logo.png"
                alt="Logo Robbe"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        )}

        {isClient && (
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold drop-shadow-xl"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            Desarrollador Web
          </motion.h1>
        )}

        {isClient && (
          <motion.p
            className="text-lg mt-4 max-w-xl"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Digitaliza tu negocio fácilmente
          </motion.p>
        )}

        {isClient && (
          <motion.a
            href={googleCalendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-full shadow-lg hover:bg-lime-400 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Agendar una Consulta
          </motion.a>
        )}
      </header>

      {/* Sobre mí */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-semibold">Sobre Mí</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Soy Roberto Berrendo Eguino (Robbe), desarrollador web especializado en React, Angular y Node.js. 
        </p>
        <a
          href="https://www.linkedin.com/in/roberto-berrendo-eguino-475b36171/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-lime-500 text-black font-bold rounded-full hover:bg-lime-400 transition duration-300"
        >
          Visita mi LinkedIn
        </a>
      </section>

      {/* Servicios */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-black">Servicios</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-6">
          <motion.div
            className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl border-l-4 border-l-lime-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-black">Desarrollo Web</h3>
            <p className="mt-2 text-gray-700">
              Páginas web, tiendas online y aplicaciones personalizadas para tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Proyectos Destacados</h2>
          <p className="mt-4 text-lg text-gray-300">
            Diseños inspirados en páginas web y apps conocidas, adaptados a tu marca.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {projectHighlights.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -6 }}
              className="bg-gray-900/80 border border-gray-700 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-3 text-gray-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-lime-500/10 text-lime-300 border border-lime-500/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Blog & Social */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <h2 className="text-3xl font-semibold text-black">Blog & Recursos</h2>
            <p className="mt-4 text-lg text-gray-700">
              Comparto ideas sobre diseño, marketing digital y desarrollo web.
            </p>
            <div className="mt-8 space-y-6">
              {blogEntries.map((entry) => (
                <article
                  key={entry.title}
                  className="rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
                >
                  <p className="text-sm text-gray-500">{entry.date}</p>
                  <h3 className="text-xl font-semibold text-black mt-2">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{entry.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="bg-black text-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold">Conecta en redes</h3>
            <p className="mt-3 text-gray-300">
              Sígueme para ver más proyectos, tips y procesos creativos.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-full bg-white text-black px-5 py-3 font-semibold hover:bg-lime-400 transition"
              >
                TikTok
                <span className="text-sm">Ver videos</span>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-full bg-white text-black px-5 py-3 font-semibold hover:bg-lime-400 transition"
              >
                Instagram
                <span className="text-sm">Galería</span>
              </a>
              <a
                href="mailto:contacto@robbe.dev"
                className="flex items-center justify-between rounded-full border border-lime-400 text-lime-300 px-5 py-3 font-semibold hover:bg-lime-400/10 transition"
              >
                Escribe por email
                <span className="text-sm">contacto@robbe.dev</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-semibold">Contacto</h2>
        <p className="mt-4">Contáctame sin compromiso.</p>
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6 
            inline-block 
            px-6 
            py-3 
            bg-lime-500 
            text-black 
            font-bold 
            rounded-full 
            hover:bg-lime-400 
            transition 
            duration-300
          "
          whileHover={{ scale: 1.05 }}
        >
          WhatsApp
        </motion.a>
      </section>
    </div>
  );
}
