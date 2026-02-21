import { useEffect, useRef, useState } from "react";
import { Edit3, Brain, Users, Presentation, Video, PartyPopper, Calendar } from "lucide-react";

const steps = [
  {
    side: "left" as const,
    title: "Inscrição",
    icon: <Edit3 size={22} />,
    desc: "Preencha o formulário e conte sua história. Sem currículo engessado — queremos conhecer quem você é.",
    tag: "Online",
    tagStyle: "bg-accent/15 text-accent",
    period: "Mar 2026",
  },
  {
    side: "right" as const,
    title: "Assessments Online",
    icon: <Brain size={22} />,
    desc: "Testes de perfil, raciocínio e fit cultural. Feitos no seu tempo, do seu jeito.",
    tag: "Online",
    tagStyle: "bg-accent/15 text-accent",
    period: "Abr 2026",
  },
  {
    side: "left" as const,
    title: "Desafio em Grupo",
    icon: <Users size={22} />,
    desc: "Resolva um case real do Nubank em equipe. Aqui avaliamos colaboração, não competição.",
    tag: "Online",
    tagStyle: "bg-accent/15 text-accent",
    period: "Mai 2026",
  },
  {
    side: "right" as const,
    title: "Painel com Liderança",
    icon: <Presentation size={22} />,
    desc: "Converse com líderes do Nubank. Uma troca genuína para os dois lados se conhecerem.",
    tag: "Presencial SP",
    tagStyle: "bg-primary/15 text-primary-foreground",
    period: "Jun 2026",
  },
  {
    side: "left" as const,
    title: "Entrevista Final",
    icon: <Video size={22} />,
    desc: "Bate-papo individual com gestores da área que você mais se identificou.",
    tag: "Híbrido",
    tagStyle: "bg-gradient-to-r from-primary/20 to-accent/20 text-foreground",
    period: "Jun 2026",
  },
  {
    side: "right" as const,
    title: "Bem-vindo(a)!",
    icon: <PartyPopper size={22} />,
    desc: "Início do programa com onboarding imersivo de 2 semanas.",
    tag: "Presencial SP",
    tagStyle: "bg-primary/15 text-primary-foreground",
    period: "Ago 2026",
  },
];

const ProcessTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll("[data-step]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.step);
            setVisibleSteps((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="etapas" className="py-16 md:py-24 lg:py-32" ref={ref} aria-labelledby="etapas-heading">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16 lg:mb-20">
          <h2
            id="etapas-heading"
            className={`font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${visibleSteps.size > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Como funciona o processo seletivo
          </h2>
          <p
            className={`font-dm text-muted-foreground text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${visibleSteps.size > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Um processo pensado para conhecer você de verdade. Transparente, inclusivo e 100% online nas primeiras fases.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central line */}
          <div
            className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5"
            style={{
              background: "linear-gradient(to bottom, hsl(var(--accent)), hsl(var(--primary)))",
              boxShadow: "0 0 10px hsla(153, 100%, 50%, 0.2)",
            }}
          />

          {steps.map((step, i) => {
            const isVisible = visibleSteps.has(i);
            const isLeft = step.side === "left";

            return (
              <div
                key={i}
                data-step={i}
                className={`relative flex items-start mb-8 last:mb-0 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Circle on timeline */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-accent bg-background flex items-center justify-center z-10">
                  <span className="font-sora font-bold text-sm text-foreground">{i + 1}</span>
                </div>

                {/* Connector + Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"} ${
                    isLeft
                      ? isVisible ? "md:translate-x-0" : "md:-translate-x-8"
                      : isVisible ? "md:translate-x-0" : "md:translate-x-8"
                  } ${isLeft ? "" : "md:ml-auto"}`}
                >
                  <div className="glass-card rounded-2xl p-6">
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="font-sora text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className={`font-dm text-muted-foreground text-sm leading-relaxed mb-4 ${isLeft ? "md:text-right" : ""}`}>
                      {step.desc}
                    </p>
                    <div className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${step.tagStyle}`}>
                        {step.tag}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} /> {step.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
