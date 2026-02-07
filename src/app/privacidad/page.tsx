import Link from "next/link";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-600">
          Política de privacidad
        </p>
        <h1 className="mt-4 text-4xl font-bold text-black">
          Política de privacidad 2026
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Responsable: Roberto Berrendo Eguino. Esta página sirve como referencia
          para el tratamiento de datos en la web y se irá completando con los
          detalles legales correspondientes.
        </p>
        <div className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-gray-700">
          <p>
            • Datos recogidos: correo electrónico y mensajes enviados a través de
            formularios o canales de contacto.
          </p>
          <p>
            • Finalidad: responder consultas y compartir información sobre
            proyectos y novedades.
          </p>
          <p>
            • Derechos: acceso, rectificación y eliminación mediante solicitud
            directa.
          </p>
        </div>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-lime-400 hover:text-lime-600"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
