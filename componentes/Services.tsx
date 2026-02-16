"use client";
import { useState } from "react";

interface Service {
  title: string;
  items: string[];
}

const services: Service[] = [
  {
    title: "DERECHO CIVIL",
    items: [
      "Posesión Veinteañal",
      "Sucesiones",
      "Cobro Judicial y Extrajudicial de Alquileres",
      "Ejecuciones",
      "Cobros Judicial y Extrajudicial de Deudas",
      "Incumplimiento Contractual",
      "Redacción y Revisión de Contratos",
      "Daños y Perjuicios",
      "Accidentes de Tránsito",
    ],
  },
  {
    title: "DERECHO LABORAL",
    items: [
      "Despidos",
      "Trabajo no Registrado",
      "Accidentes Laborales",
      "Indemnizaciones",
    ],
  },
  {
    title: "DERECHO DE FAMILIA",
    items: [
      "Divorcio",
      "Alimentos",
      "Régimen de Comunicación",
      "Impedimento de Contacto",
      "Cuidado Personal",
      "Acuerdos Extrajudiciales",
    ],
  },
  {
    title: "PERSONAS JURÍDICAS",
    items: [
      "Inscripción y Registro de Asociaciones y Fundaciones",
      "Gestión y Coordinación Interinstitucional",
      "Asesoría Legal Integral",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Áreas de práctica
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-8 relative">
          {services.map((service, index: number) => (
            <div key={service.title} className="relative">
              <div
                onClick={() => toggleCard(index)}
                className="cursor-pointer p-8 rounded-2xl bg-slate-800/60 backdrop-blur border border-slate-700 hover:border-amber-400/50 transition shadow-xl"
              >
                <p className="text-xl font-medium tracking-wide">
                  {service.title}
                </p>
              </div>

              {active === index && (
                <div className="absolute left-0 top-full mt-4 w-full z-50 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6">
                  <ul className="space-y-3 text-slate-300">
                    {service.items.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
