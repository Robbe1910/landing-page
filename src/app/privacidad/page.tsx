import Link from "next/link";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-600">Política de privacidad</p>
        <h1 className="mt-4 text-4xl font-bold text-black">Política de privacidad 2026</h1>
        <p className="mt-4 text-lg text-gray-600">
          Responsable: Roberto Berrendo Eguino. Esta página resume cómo se tratan los datos en robbe360.com
          y se actualizará ante cualquier cambio legal o de procesos internos.
        </p>
        <div className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-gray-700">
          <p>• Datos recogidos: email y mensajes enviados por formularios, WhatsApp o redes sociales.</p>
          <p>• Finalidad: responder consultas, enviar propuestas y compartir información de proyectos o novedades.</p>
          <p>• Conservación: solo mientras haya relación activa o interés legítimo; después se eliminan de forma segura.</p>
          <p>• Derechos: acceso, rectificación y eliminación solicitándolo a robertoberrendo@gmail.com.</p>
          <p>• Infraestructura: hosting y analítica con proveedores compatibles con RGPD.</p>
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
