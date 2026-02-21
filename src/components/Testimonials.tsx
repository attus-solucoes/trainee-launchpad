import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Marina Silva",
    role: "Product Manager, Nubank",
    class: "Trainee turma 2023",
    initials: "MS",
    quote:
      "O programa trainee mudou completamente minha visão sobre carreira. Em 18 meses, aprendi mais do que em anos de faculdade. Hoje lidero um time de produto que impacta 20 milhões de clientes.",
  },
  {
    name: "Lucas Oliveira",
    role: "Data Scientist Sr., Nubank",
    class: "Trainee turma 2022",
    initials: "LO",
    quote:
      "Entrei sem saber nada de fintech e saí apaixonado. A mentoria executiva foi o diferencial — ter acesso direto a C-levels acelerou meu crescimento de forma absurda.",
  },
  {
    name: "Camila Santos",
    role: "Engineering Lead, Nubank",
    class: "Trainee turma 2023",
    initials: "CS",
    quote:
      "O que mais me marcou foi o projeto de impacto. Meu time desenvolveu uma feature que hoje é usada por milhões de pessoas. Isso não tem preço.",
  },
  {
    name: "Rafael Costa",
    role: "Strategy Analyst, Nubank",
    class: "Trainee turma 2024",
    initials: "RC",
    quote:
      "O processo seletivo já é uma experiência incrível. Você sente que eles realmente querem te conhecer, não te eliminar. E o programa entrega tudo que promete.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

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

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <section id="depoimentos" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className={`font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Quem já viveu, recomenda
          </h2>
          <p
            className={`font-dm text-muted-foreground text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Conheça as histórias de quem passou pelo programa e hoje lidera transformações no Nubank.
          </p>
        </div>

        <div
          className={`relative max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="glass-card rounded-2xl p-8 md:p-10 relative min-h-[320px] flex flex-col justify-between">
            {/* Decorative quote */}
            <span className="absolute top-4 left-6 font-sora text-[5rem] leading-none text-accent/15 select-none pointer-events-none">
              "
            </span>

            <div className="relative z-10">
              <p className="font-dm text-lg md:text-xl text-foreground leading-relaxed italic mb-6 pt-8">
                "{t.quote}"
              </p>

              <div className="w-full h-px bg-accent/20 mb-6" />

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-sora font-bold text-primary-foreground text-lg flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-sora font-bold text-foreground">{t.name}</p>
                  <p className="font-dm text-sm text-accent">{t.role}</p>
                  <p className="font-dm text-xs text-muted-foreground">{t.class}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full md:-left-4 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:shadow-[0_0_15px_hsla(153,100%,50%,0.3)] transition-shadow"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full md:-right-4 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:shadow-[0_0_15px_hsla(153,100%,50%,0.3)] transition-shadow"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === active ? "bg-accent w-6" : "bg-muted-foreground/30"}`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
