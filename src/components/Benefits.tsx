import { useEffect, useRef, useState, useCallback } from "react";
import { DollarSign, Coffee, Heart, BookOpen, Home, Dumbbell } from "lucide-react";

const benefits = [
  { icon: <DollarSign size={26} />, title: "Salário competitivo", desc: "Remuneração acima da média de mercado para trainees" },
  { icon: <Coffee size={26} />, title: "Vale-refeição e alimentação", desc: "Benefícios flexíveis para o seu dia a dia" },
  { icon: <Heart size={26} />, title: "Plano de saúde e dental", desc: "Cobertura completa para você e dependentes" },
  { icon: <BookOpen size={26} />, title: "NuLanguage", desc: "Programa de idiomas com aulas subsidiadas" },
  { icon: <Home size={26} />, title: "Modelo híbrido", desc: "Flexibilidade para trabalhar de onde faz sentido" },
  { icon: <Dumbbell size={26} />, title: "Gympass / Wellhub", desc: "Acesso a academias e apps de bem-estar" },
];

function useTilt() {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  }, []);

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  }, []);

  return { onMouseMove, onMouseLeave };
}

const Benefits = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const tilt = useTilt();

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
    <section id="beneficios" className="py-16 md:py-24 lg:py-32" ref={ref} aria-labelledby="beneficios-heading">
      <div className="container mx-auto px-5 lg:px-8">
        <h2
          id="beneficios-heading"
          className={`font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-8 md:mb-12 lg:mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          O que você vai encontrar aqui
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`glass-card rounded-2xl p-4 md:p-7 flex flex-col items-start gap-3 md:gap-4 group hover:border-primary/40 hover:shadow-[0_0_30px_hsla(272,89%,43%,0.15)] transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${100 + i * 80}ms`, willChange: "transform" }}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_hsla(153,100%,50%,0.4)] transition-all duration-300">
                {b.icon}
              </div>
              <h3 className="font-sora text-sm md:text-lg font-semibold text-foreground">{b.title}</h3>
              <p className="font-dm text-muted-foreground text-xs md:text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
