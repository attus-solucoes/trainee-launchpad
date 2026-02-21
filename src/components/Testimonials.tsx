import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Marina Silva", role: "Product Manager, Nubank", class: "Trainee turma 2023", initials: "MS", quote: "O programa trainee mudou completamente minha visão sobre carreira. Em 18 meses, aprendi mais do que em anos de faculdade. Hoje lidero um time de produto que impacta 20 milhões de clientes." },
  { name: "Lucas Oliveira", role: "Data Scientist Sr., Nubank", class: "Trainee turma 2022", initials: "LO", quote: "Entrei sem saber nada de fintech e saí apaixonado. A mentoria executiva foi o diferencial — ter acesso direto a C-levels acelerou meu crescimento de forma absurda." },
  { name: "Camila Santos", role: "Engineering Lead, Nubank", class: "Trainee turma 2023", initials: "CS", quote: "O que mais me marcou foi o projeto de impacto. Meu time desenvolveu uma feature que hoje é usada por milhões de pessoas. Isso não tem preço." },
  { name: "Rafael Costa", role: "Strategy Analyst, Nubank", class: "Trainee turma 2024", initials: "RC", quote: "O processo seletivo já é uma experiência incrível. Você sente que eles realmente querem te conhecer, não te eliminar. E o programa entrega tudo que promete." },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fade, setFade] = useState(true);
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

  const changeTo = useCallback((idx: number) => {
    setFade(false);
    setTimeout(() => { setActive(idx); setFade(true); }, 150);
  }, []);

  const next = useCallback(() => changeTo((active + 1) % testimonials.length), [active, changeTo]);
  const prev = useCallback(() => changeTo((active - 1 + testimonials.length) % testimonials.length), [active, changeTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }, [prev, next]);

  const t = testimonials[active];

  return (
    <section id="depoimentos" className="py-16 md:py-24 lg:py-32" ref={ref} aria-labelledby="depoimentos-heading">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h2 id="depoimentos-heading" className={`font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Quem já viveu, recomenda
          </h2>
          <p className={`font-dm text-muted-foreground text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Conheça as histórias de quem passou pelo programa e hoje lidera transformações no Nubank.
          </p>
        </div>

        <div
          className={`relative max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onKeyDown={handleKeyDown}
          role="region"
          aria-label="Depoimentos de ex-trainees"
          aria-roledescription="carousel"
          tabIndex={0}
        >
          <div className={`glass-card rounded-2xl p-6 md:p-10 relative min-h-[280px] md:min-h-[320px] flex flex-col justify-between transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
            <span className="absolute top-4 left-6 font-sora text-[5rem] leading-none text-accent/15 select-none pointer-events-none" aria-hidden="true">"</span>
            <div className="relative z-10">
              <p className="font-dm text-base md:text-xl text-foreground leading-relaxed italic mb-6 pt-8">"{t.quote}"</p>
              <div className="w-full h-px bg-accent/20 mb-6" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-sora font-bold text-primary-foreground text-base md:text-lg flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
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

          {/* Navigation arrows — hidden on mobile, shown on md+ */}
          <button onClick={prev} data-track="testimonial-nav" data-track-direction="prev" className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full -left-4 w-12 h-12 rounded-full glass-card items-center justify-center text-foreground hover:shadow-[0_0_15px_hsla(153,100%,50%,0.3)] transition-shadow min-w-[44px] min-h-[44px]" aria-label="Depoimento anterior">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} data-track="testimonial-nav" data-track-direction="next" className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-full -right-4 w-12 h-12 rounded-full glass-card items-center justify-center text-foreground hover:shadow-[0_0_15px_hsla(153,100%,50%,0.3)] transition-shadow min-w-[44px] min-h-[44px]" aria-label="Próximo depoimento">
            <ChevronRight size={20} />
          </button>

          {/* Mobile: arrows + dots in a row; Desktop: dots only */}
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
            <button onClick={prev} className="md:hidden w-9 h-9 rounded-full glass-card flex items-center justify-center text-foreground min-w-[44px] min-h-[44px]" aria-label="Depoimento anterior">
              <ChevronLeft size={18} />
            </button>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => changeTo(i)} data-track="testimonial-dot" data-track-index={i} className="w-2.5 h-2.5 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label={`Depoimento ${i + 1}`}>
                <span className={`block rounded-full transition-all duration-300 ${i === active ? "bg-accent w-6 h-2.5" : "bg-muted-foreground/30 w-2.5 h-2.5"}`} />
              </button>
            ))}
            <button onClick={next} className="md:hidden w-9 h-9 rounded-full glass-card flex items-center justify-center text-foreground min-w-[44px] min-h-[44px]" aria-label="Próximo depoimento">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
