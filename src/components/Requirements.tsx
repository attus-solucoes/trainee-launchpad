import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin, Globe, Plane } from "lucide-react";

const reqs = [
  { icon: <GraduationCap size={24} />, text: "Formação entre dez/2024 e dez/2026" },
  { icon: <MapPin size={24} />, text: "Disponibilidade para São Paulo (híbrido)" },
  { icon: <Globe size={24} />, text: "Inglês intermediário ou avançado" },
  { icon: <Plane size={24} />, text: "Mobilidade para viagens pontuais" },
];

const Requirements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="requisitos" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className={`font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Quem estamos buscando
          </h2>
          <p
            className={`font-dm text-muted-foreground text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Buscamos pessoas diversas, curiosas e com vontade de transformar. Não importa sua faculdade ou curso — importa quem você é.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto">
          {reqs.map((r, i) => (
            <div
              key={r.text}
              className={`glass-card rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center text-accent flex-shrink-0">
                {r.icon}
              </div>
              <span className="font-dm text-foreground text-sm md:text-base">{r.text}</span>
            </div>
          ))}
        </div>

        {/* Callout banner */}
        <div
          className={`mt-12 max-w-3xl mx-auto rounded-2xl p-6 md:p-8 border border-accent/10 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            background: "linear-gradient(135deg, hsla(272,89%,43%,0.08) 0%, hsla(153,100%,50%,0.06) 100%)",
          }}
        >
          <p className="font-dm text-foreground text-center text-sm md:text-base leading-relaxed">
            💡 Não exigimos experiência anterior. Valorizamos sua história, suas ideias e seu potencial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
