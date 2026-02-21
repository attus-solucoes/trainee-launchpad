import { ChevronDown, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mesh-gradient">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/30 blur-[180px] animate-pulse-glow pointer-events-none" />
      
      {/* Dots grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(270 20% 95%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center flex flex-col items-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 backdrop-blur-sm mb-8 animate-fade-up">
          <Clock size={14} className="text-accent" />
          <span className="text-xs font-dm font-medium text-muted-foreground">
            Inscrições abertas até 30 de março de 2026
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-sora font-extrabold text-gradient-hero leading-[1.1] mb-6 animate-fade-up"
          style={{
            fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
            animationDelay: "0.1s",
            animationFillMode: "both",
          }}
        >
          Construa o futuro da
          <br />
          tecnologia financeira
        </h1>

        {/* Subheadline */}
        <p
          className="font-dm text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          O Programa Trainee Nubank 2026 é a sua porta de entrada para transformar a vida de milhões de pessoas. 18 meses de desenvolvimento acelerado nas áreas que estão reinventando o mercado financeiro.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-dm font-semibold text-base hover:opacity-90 transition-opacity glow-neon"
            aria-label="Quero me inscrever no Programa Trainee Nubank 2026"
          >
            Quero me inscrever
          </a>
          <a
            href="#programa"
            className="inline-flex items-center px-8 py-3.5 rounded-full border border-foreground/20 text-foreground font-dm font-medium text-base hover:border-foreground/40 transition-colors"
            aria-label="Conhecer o programa"
          >
            Conhecer o programa
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-xs font-dm text-muted-foreground">Scroll</span>
        <ChevronDown size={20} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
