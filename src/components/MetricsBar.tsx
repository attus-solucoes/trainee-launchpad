import { useEffect, useRef, useState } from "react";
import { Users, Globe, Zap, Briefcase } from "lucide-react";

interface Metric {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const metrics: Metric[] = [
  { icon: <Users size={22} />, value: 100, suffix: "M+", label: "Clientes Nubank" },
  { icon: <Globe size={22} />, value: 30, suffix: "+", label: "Países de atuação" },
  { icon: <Zap size={22} />, value: 18, suffix: " meses", label: "De programa intensivo" },
  { icon: <Briefcase size={22} />, value: 50, suffix: "+", label: "Vagas disponíveis" },
];

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

const MetricItem = ({ metric, inView, delay }: { metric: Metric; inView: boolean; delay: number }) => {
  const count = useCountUp(metric.value, inView);

  return (
    <div
      className="flex flex-col items-center gap-2 px-6 py-4 animate-fade-up"
      style={{ animationDelay: `${delay}s`, animationFillMode: "both" }}
    >
      <div className="text-accent mb-1">{metric.icon}</div>
      <span className="font-sora text-3xl md:text-4xl font-bold text-foreground">
        {metric.prefix}
        {count}
        {metric.suffix}
      </span>
      <span className="font-dm text-sm text-muted-foreground text-center">{metric.label}</span>
    </div>
  );
};

const MetricsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 -mt-12 md:-mt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="glass-card rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            {metrics.map((metric, i) => (
              <MetricItem key={metric.label} metric={metric} inView={inView} delay={0.1 * i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
