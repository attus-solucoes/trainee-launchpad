import { useEffect, useRef, useState, useCallback } from "react";
import { Shuffle, Users, Rocket } from "lucide-react";

const cards = [
  {
    icon: <Shuffle size={28} />,
    title: "Rotação de Áreas",
    desc: "Passe por diferentes áreas estratégicas do Nubank durante 18 meses, desenvolvendo uma visão completa do negócio.",
  },
  {
    icon: <Users size={28} />,
    title: "Mentoria Executiva",
    desc: "Tenha acompanhamento direto de líderes seniores que vão acelerar seu desenvolvimento profissional.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Projeto de Impacto",
    desc: "Lidere um projeto real com impacto direto na vida de milhões de clientes Nubank.",
  },
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

const AboutProgram = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const tilt = useTilt();

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
    <section id="programa" className="py-16 md:py-24 lg:py-32" ref={ref} aria-labelledby="programa-heading">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h2
            id="programa-heading"
            className={`font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Um programa feito para quem quer liderar
          </h2>
          <p
            className={`font-dm text-muted-foreground text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            O Trainee Nubank 2026 combina imersão prática, mentoria de alto nível e autonomia para você construir uma carreira extraordinária desde o primeiro dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`glass-card rounded-2xl p-5 md:p-8 flex flex-col items-start gap-4 hover:border-primary/40 hover:shadow-[0_0_30px_hsla(272,89%,43%,0.15)] transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${150 + i * 100}ms`, willChange: "transform" }}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                {card.icon}
              </div>
              <h3 className="font-sora text-xl font-semibold text-foreground">{card.title}</h3>
              <p className="font-dm text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProgram;
