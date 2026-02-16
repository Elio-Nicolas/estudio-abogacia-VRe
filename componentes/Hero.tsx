import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-[#E8ECF0]">

      <div className="relative max-w-3xl text-center">

        {/* Logo más pequeño */}
        <div className="flex justify-center">
          <Image
            src="/LogoB.jpeg"
            alt="Logo Valentina Re"
            width={200}
            height={200}
            className="object-contain"
            priority
          />
        </div>

        {/* Nombre */}
        <h1 className="mt-8 text-5xl md:text-6xl font-bold text-[#1E2D4F] leading-tight">
          Valentina Re
        </h1>

        {/* Profesión */}
        <span className="block mt-4 uppercase tracking-[0.35em] text-sm text-[#C6A75E]">
          Abogada
        </span>

        {/* Frase principal */}
        <h2 className="mt-8 text-4xl md:text-5xl font-semibold text-[#1E2D4F] leading-tight font-times">
          Estrategia legal para decisiones importantes
        </h2>

        {/* Subtexto */}
        <p className="mt-8 text-[#2E3A59] text-lg leading-tigth font-times">
          Claridad, compromiso y solidez en la defensa de tus derechos
        </p>

        {/* Botón */}
        <div className="mt-12">
          <a
            href="#contacto"
            className="bg-[#1E2D4F] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Solicitar consulta
          </a>
        </div>
      </div>
    </section>
  );
}
