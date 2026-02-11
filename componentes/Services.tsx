const services = [
  "Derecho Civil",
  "Derecho Laboral",
  "Derecho de Familia",
  "Asesoramiento Empresarial",
];

export default function Services() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Áreas de práctica
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur border border-slate-700 hover:border-amber-400/50 transition shadow-xl"
            >
              <p className="text-xl font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
