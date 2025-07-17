'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const whatsappNumber = "634984021";
  const whatsappMessage = "Hola, me gustaría obtener más información.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const googleCalendarLink = "https://calendar.app.google/r3uhjT7JKmDBcBxh9";

  return (
    <div className="min-h-screen w-full font-sans">

      {/* Hero Section */}
      <header className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-black via-gray-9 00 to-lime-500 text-white">
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
