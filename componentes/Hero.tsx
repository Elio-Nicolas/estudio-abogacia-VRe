export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Glow decorativo */}
      <div className="absolute w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full top-[-200px] left-1/2 -translate-x-1/2" />

      <div className="relative max-w-3xl text-center">
        <span className="uppercase tracking-[0.3em] text-sm text-amber-400">
         Re Valentina Abogada y mas.. ⚖️
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
          Asesoramiento legal
          <span className="text-amber-400"> estratégico</span>
        </h1>

        <p className="mt-8 text-slate-300 text-lg leading-relaxed">
          Acompañamiento legal y compromiso en cada caso.
        </p>

        <div className="mt-10">
          <a
            href="#contacto"
            className="bg-amber-400 text-slate-900 px-8 py-4 rounded-lg font-semibold shadow-lg shadow-amber-500/20 hover:scale-105 transition"
          >
            Solicitar consulta
          </a>
        </div>
      </div>
    </section>
  );
}
