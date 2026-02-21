import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter experiência profissional para participar?",
    a: "Não! O programa é desenhado para pessoas em início de carreira. Valorizamos sua história, curiosidade e potencial de crescimento, não seu currículo.",
  },
  {
    q: "Quais cursos de graduação são aceitos?",
    a: "Todos! Não restringimos por área de formação. Temos trainees de engenharia, humanas, exatas, biológicas e tudo mais. Diversidade de pensamento é o que nos fortalece.",
  },
  {
    q: "O processo seletivo é 100% online?",
    a: "As primeiras fases (inscrição, assessments e desafio em grupo) são 100% online. O painel com liderança é presencial em São Paulo, e a entrevista final pode ser híbrida.",
  },
  {
    q: "Qual é a remuneração do programa?",
    a: "Oferecemos um pacote competitivo acima da média de mercado para programas trainee, incluindo salário, benefícios flexíveis, plano de saúde, vale-refeição e muito mais.",
  },
  {
    q: "Preciso morar em São Paulo?",
    a: "O modelo de trabalho é híbrido. Você precisará ter disponibilidade para estar presencialmente em São Paulo alguns dias por semana, mas oferecemos flexibilidade.",
  },
  {
    q: "Como é o dia a dia de um trainee no Nubank?",
    a: "Você passará por rotações em diferentes áreas estratégicas, terá um mentor executivo, participará de workshops exclusivos e liderará um projeto de impacto real. Cada dia é diferente.",
  },
  {
    q: "Posso me inscrever se ainda não me formei?",
    a: "Sim! Aceitamos pessoas com formação prevista entre dezembro de 2024 e dezembro de 2026.",
  },
  {
    q: "Quando saem os resultados de cada etapa?",
    a: "Nos comprometemos a dar retorno em até 15 dias úteis após cada etapa. Transparência e respeito pelo seu tempo são prioridades para nós.",
  },
];

const FAQ = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

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
    <section id="faq" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className={`font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Perguntas frequentes
          </h2>
          <p
            className={`font-dm text-muted-foreground text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Tudo que você precisa saber antes de se inscrever.
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border hover:bg-primary/5 transition-colors"
              >
                <AccordionTrigger className="font-sora font-medium text-foreground text-base md:text-lg py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-dm text-muted-foreground text-sm md:text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
