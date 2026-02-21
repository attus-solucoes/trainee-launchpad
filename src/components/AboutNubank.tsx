import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import NuLogo from "./NuLogo";

const values = [
  "Pensamos e agimos como donos",
  "Construímos times fortes e diversos",
  "Perseguimos a eficiência inteligente",
  "Colocamos o cliente no centro de tudo",
];

const AboutNubank = () => {
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
    <section id="nubank" className="py-16 md:py-24 lg:py-32" ref={ref} aria-labelledby="nubank-heading">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {/* Heading with NuLogo */}
            <div
              className={`flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 mb-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <NuLogo size="sm" className="md:hidden" />
              <NuLogo size="md" className="hidden md:inline-flex" />
              <h2
                id="nubank-heading"
                className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center md:text-left"
              >
                Conheça o Nubank
              </h2>
            </div>
            <p
              className={`font-dm text-muted-foreground text-base md:text-lg leading-relaxed mb-8 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Nascemos em 2013 com a missão de combater a complexidade do sistema financeiro e devolver o controle da vida financeira para as pessoas. Hoje, somos a maior plataforma de serviços financeiros digitais do mundo, com mais de 100 milhões de clientes em Brasil, México e Colômbia.
            </p>
            <ul className="space-y-4">
              {values.map((v, i) => (
                <li
                  key={v}
                  className={`flex items-center gap-3 font-dm text-foreground transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-accent" />
                  </div>
                  {v}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual card — CSS-only "app" mockup — hidden on mobile */}
          <div
            className={`hidden md:flex justify-center transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative w-[280px] h-[480px] rounded-[2.5rem] bg-gradient-to-b from-primary/80 to-secondary overflow-hidden border border-border/40 shadow-[0_0_60px_hsla(272,89%,43%,0.25)] animate-float">
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 pt-5 pb-3">
                <span className="text-[10px] font-dm text-primary-foreground/60">09:41</span>
                <div className="w-16 h-5 rounded-full bg-primary-foreground/10" />
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-primary-foreground/20" />
                  <div className="w-3 h-3 rounded-full bg-primary-foreground/20" />
                </div>
              </div>

              {/* Card balance */}
              <div className="mx-5 mt-4 p-4 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
                <span className="text-[10px] font-dm text-primary-foreground/50 uppercase tracking-wider">Conta</span>
                <div className="font-sora text-2xl font-bold text-primary-foreground mt-1">R$ ••••</div>
              </div>

              {/* Quick actions row */}
              <div className="flex gap-3 mx-5 mt-5">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="flex-1 h-14 rounded-xl bg-primary-foreground/8 border border-primary-foreground/5 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-accent/30" />
                  </div>
                ))}
              </div>

              {/* List items */}
              <div className="mx-5 mt-6 space-y-3">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary-foreground/10" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2.5 rounded bg-primary-foreground/15 w-3/4" />
                      <div className="h-2 rounded bg-primary-foreground/8 w-1/2" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom nav */}
              <div className="absolute bottom-0 inset-x-0 h-16 border-t border-primary-foreground/10 flex items-center justify-around px-6">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className={`w-5 h-5 rounded-full ${n === 1 ? "bg-accent/50" : "bg-primary-foreground/15"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNubank;
