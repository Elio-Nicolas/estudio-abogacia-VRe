import { playfair,cormorant,baskerville } from "@/lib/fonts";

export default function About() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`mt-8 text-4xl md:text-5xl font-semibold text-[#1E2D4F] leading-tight ${playfair.className}`}>
          Asesoramiento legal claro y personalizado
        </h2>

        <p className={`mt-8 text-[#2E3A59] text-lg leading-relaxed ${playfair.className}`}>
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
