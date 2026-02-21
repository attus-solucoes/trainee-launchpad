import { ChevronDown, Clock, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" aria-label="Início" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mesh-gradient">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/30 blur-[180px] animate-pulse-glow pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(270 20% 95%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-5 lg:px-8 text-center flex flex-col items-center pt-20 md:pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 backdrop-blur-sm mb-5 md:mb-8 animate-fade-up">
          <Clock size={14} className="text-accent" />
          <span className="text-xs font-dm font-medium text-muted-foreground">
            Inscrições abertas até 30 de março de 2026
          </span>
        </div>

        <h1
          className="font-sora font-extrabold text-gradient-hero leading-[1.1] mb-6 animate-fade-up"
          style={{ fontSize: "clamp(1.85rem, 8vw, 2.5rem)", animationDelay: "0.1s", animationFillMode: "both" }}
        >
          <span className="md:hidden">Construa o futuro da<br />tecnologia financeira</span>
          <span className="hidden md:inline" style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}>Construa o futuro da<br />tecnologia financeira</span>
        </h1>

        <p
          className="font-dm text-muted-foreground max-w-2xl text-sm md:text-lg leading-relaxed mb-7 md:mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          O Programa Trainee Nubank 2026 é a sua porta de entrada para transformar a vida de milhões de pessoas. 18 meses de desenvolvimento acelerado nas áreas que estão reinventando o mercado financeiro.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          <a
            href="#inscricao"
            data-track="cta-click"
            data-track-location="hero"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-dm font-semibold text-base hover:shadow-[0_0_25px_hsla(153,100%,50%,0.4)] transition-all glow-neon min-h-[44px]"
            aria-label="Quero me inscrever no Programa Trainee Nubank 2026"
          >
            Quero me inscrever
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#programa"
            data-track="cta-click"
            data-track-location="hero-secondary"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full border border-foreground/20 text-foreground font-dm font-medium text-base hover:border-foreground/40 transition-colors min-h-[44px]"
            aria-label="Conhecer o programa"
          >
            Conhecer o programa
          </a>
        </div>
      </div>

      <div className="absolute bottom-16 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-xs font-dm text-muted-foreground">Scroll</span>
        <ChevronDown size={20} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
