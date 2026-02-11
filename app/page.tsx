import Hero from "@/componentes/Hero";
import Services from "@/componentes/Services";
import About from "@/componentes/About";
import Contact from "@/componentes/Contact";

export default function Home() {
  return (
    <>
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main> 
    </>
  );
}
