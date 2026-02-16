import Image from "next/image";
import { playfair } from "@/lib/fonts";

export default function About() {
  return (
    <section className="py-28 px-6 bg-[#1E2D4F]">
      <div className="max-w-4xl mx-auto text-center">

        {/* Imagen */}
        <div className="flex justify-center">
          <Image
            src="/foto_valen.jpeg"
            alt="Valentina Re"
            width={220}
            height={220}
            className="rounded-full object-cover shadow-xl"
          />
        </div>

        {/* Título */}
        <h2 className={`mt-10 text-4xl md:text-5xl font-semibold text-[#E8ECF0] leading-tight ${playfair.className}`}>
          Asesoramiento legal claro y personalizado
        </h2>

        {/* Texto */}
        <p className={`mt-8 text-[#E8ECF0] text-lg leading-relaxed ${playfair.className}`}>
          Servicios jurídicos integrales orientados a la prevención 
          y resolución eficaz de conflictos. Cada caso es abordado 
          con análisis riguroso, planificación estratégica y defensa 
          activa de derechos e intereses, garantizando compromiso 
          profesional, confidencialidad y trato directo en cada etapa 
          del proceso.
        </p>

      </div>
    </section>
  );
}
