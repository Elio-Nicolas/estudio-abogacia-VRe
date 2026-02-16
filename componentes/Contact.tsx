import { playfair,cormorant,baskerville } from "@/lib/fonts";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-28 px-6 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full bottom-[-200px] right-[-200px]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className={`mt-8 text-3xl md:text-4xl font-semibold text-[#E8ECF0] leading-tight text-center ${playfair.className}`}>
          Contacto
        </h2>

        <p className={`mt-8 text-[#E8ECF0] text-lg leading-relaxed ${playfair.className}`}>
          Coordina tu consulta, y recibí asesoramiento legal eficiente.
        </p>

        <div className="mt-10 space-y-4 text-lg">
          <p> abg.valentinare@gmail.com.ar</p>
            <p> Villa Mercedes, San Luis</p>
        </div>

        <a
          href="https://wa.me/5492657315396"
          target="_blank"
          className="inline-block mt-12 bg-amber-400 text-slate-900 px-10 py-4 rounded-lg font-semibold shadow-lg shadow-amber-500/20 hover:scale-105 transition"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  );
}
