'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const whatsappNumber = "634984021"; // Reemplaza con tu número en formato internacional sin +
  const whatsappMessage = "Hola, me gustaría obtener más información.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  const googleCalendarLink = "https://calendar.app.google/r3uhjT7JKmDBcBxh9"; // Reemplaza con tu enlace


  return (
    <>
      <Head>
        <title>Asesor Inmobiliario & Desarrollador Web</title>
        <meta name="description" content="Encuentra la propiedad ideal y digitaliza tu negocio con un experto en bienes raíces y desarrollo web." />

         {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content="Asesor Inmobiliario & Desarrollador Web" />
        <meta
          property="og:description"
          content="Encuentra la propiedad ideal y digitaliza tu negocio con un experto en bienes raíces y desarrollo web."
        />
        <meta property="og:image" content="https://tusitio.com/imagen-og.jpg" />
        <meta property="og:url" content="https://tusitio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asesor Inmobiliario & Desarrollador Web" />
        <meta
          name="twitter:description"
          content="Encuentra la propiedad ideal y digitaliza tu negocio con un experto en bienes raíces y desarrollo web."
        />
        <meta name="twitter:image" content="https://tusitio.com/imagen-og.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <header className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          {isClient && (
            <motion.h1 
              className="text-5xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Asesor Inmobiliario & Desarrollador Web
            </motion.h1>
          )}
          {isClient && (
            <motion.p 
              className="text-lg mt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Encuentra la propiedad ideal y digitaliza tu negocio
            </motion.p>
          )}
          {isClient && (
            <motion.a 
              href={googleCalendarLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Agendar una Consulta
            </motion.a>
          )}
        </header>

        {/* About Section */}
        <section className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-semibold">Sobre Mí</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Soy un apasionado por la tecnología y el sector inmobiliario, ayudando a clientes a encontrar su hogar ideal y a negocios a crecer en el mundo digital.
          </p>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 text-center bg-gray-200">
          <h2 className="text-3xl font-semibold">Servicios</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {isClient && (
              <motion.div 
                className="p-6 bg-white rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold">Asesoría Inmobiliaria</h3>
                <p className="mt-2">Compra, venta y alquiler de propiedades con asesoramiento profesional.</p>
              </motion.div>
            )}
            {isClient && (
              <motion.div 
                className="p-6 bg-white rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold">Desarrollo Web</h3>
                <p className="mt-2">Diseño y desarrollo de páginas web, e-commerce y soluciones personalizadas.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 text-center bg-white">
          <h2 className="text-3xl font-semibold">Contacto</h2>
          <p className="mt-4">Envíame un mensaje para más información.</p>
          {isClient && (
            <motion.a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              WhatsApp
            </motion.a>
          )}
        </section>
      </div>
    </>
  );
}
