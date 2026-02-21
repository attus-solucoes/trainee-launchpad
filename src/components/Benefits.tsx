import { useEffect, useRef, useState } from "react";
import { DollarSign, Coffee, Heart, BookOpen, Home, Dumbbell } from "lucide-react";

const benefits = [
  { icon: <DollarSign size={26} />, title: "Salário competitivo", desc: "Remuneração acima da média de mercado para trainees" },
  { icon: <Coffee size={26} />, title: "Vale-refeição e alimentação", desc: "Benefícios flexíveis para o seu dia a dia" },
  { icon: <Heart size={26} />, title: "Plano de saúde e dental", desc: "Cobertura completa para você e dependentes" },
  { icon: <BookOpen size={26} />, title: "NuLanguage", desc: "Programa de idiomas com aulas subsidiadas" },
  { icon: <Home size={26} />, title: "Modelo híbrido", desc: "Flexibilidade para trabalhar de onde faz sentido" },
  { icon: <Dumbbell size={26} />, title: "Gympass / Wellhub", desc: "Acesso a academias e apps de bem-estar" },
];

const Benefits = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="beneficios" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2
          className={`font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          O que você vai encontrar aqui
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`glass-card rounded-2xl p-7 flex flex-col items-start gap-4 group hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_hsla(272,89%,43%,0.15)] transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-accent group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                {b.icon}
              </div>
              <h3 className="font-sora text-lg font-semibold text-foreground">{b.title}</h3>
              <p className="font-dm text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
