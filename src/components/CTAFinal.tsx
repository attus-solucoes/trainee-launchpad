import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

const TARGET_DATE = new Date("2026-03-30T23:59:59-03:00").getTime();

function getTimeLeft() {
  const diff = TARGET_DATE - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const CTAFinal = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = document.getElementById("inscricao");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const units = timeLeft
    ? [
        { value: timeLeft.days, label: "Dias" },
        { value: timeLeft.hours, label: "Horas" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Seg" },
      ]
    : [];

  return (
    <section
      id="inscricao"
      aria-labelledby="cta-heading"
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, hsla(272, 89%, 43%, 0.5) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 85% 30%, hsla(153, 100%, 50%, 0.12) 0%, transparent 60%), hsl(var(--background))",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)" }} />

      <div className="container mx-auto px-5 lg:px-8 text-center relative z-10">
        <h2 id="cta-heading" className={`font-sora text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Sua carreira extraordinária começa com um clique
        </h2>
        <p className={`font-dm text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          As inscrições estão abertas até 30 de março de 2026. Não deixe para depois o que pode transformar seu futuro agora.
        </p>

        <div className={`flex items-center justify-center gap-3 md:gap-4 mb-12 flex-wrap transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} aria-live="polite">
          {timeLeft ? (
            units.map((u) => (
              <div key={u.label} className="glass-card rounded-xl min-w-[72px] md:min-w-[80px] py-4 px-3 text-center">
                <span className="font-sora text-3xl md:text-4xl font-bold text-foreground block">{String(u.value).padStart(2, "0")}</span>
                <span className="font-dm text-xs text-muted-foreground uppercase tracking-wider">{u.label}</span>
              </div>
            ))
          ) : (
            <p className="font-sora text-xl font-semibold text-muted-foreground">Inscrições encerradas</p>
          )}
        </div>

        <div className={`transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="#"
            data-track="cta-click"
            data-track-location="cta-final"
            onClick={() => trackEvent('cta_click', { location: 'cta_final' })}
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-accent text-accent-foreground font-sora font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_hsla(153,100%,50%,0.5)] transition-all duration-300 min-h-[44px]"
          >
            Fazer minha inscrição
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <p className={`font-dm text-sm text-muted-foreground mt-8 transition-all duration-700 delay-[400ms] ${inView ? "opacity-100" : "opacity-0"}`}>
          Processo seletivo operado por <span className="font-semibold">eureca.</span> • 100% gratuito • Vagas limitadas
        </p>
      </div>
    </section>
  );
};

export default CTAFinal;
