import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

const navLinks = [
  { label: "O Programa", href: "#programa", item: "programa" },
  { label: "Nubank", href: "#nubank", item: "nubank" },
  { label: "Etapas", href: "#etapas", item: "etapas" },
  { label: "Benefícios", href: "#beneficios", item: "beneficios" },
  { label: "Depoimentos", href: "#depoimentos", item: "depoimentos" },
  { label: "FAQ", href: "#faq", item: "faq" },
];

const sectionIds = navLinks.map((l) => l.item);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
          let best = "";
          let bestRatio = 0;
          visibleSections.forEach((ratio, sid) => {
            if (ratio > bestRatio) { best = sid; bestRatio = ratio; }
          });
          setActiveSection(best);
        },
        { threshold: [0, 0.25, 0.5], rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      aria-label="Navegação principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a href="#" className="font-sora text-xl font-bold tracking-tight text-foreground">
          eureca<span className="text-accent">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-track="nav-click"
              data-track-item={link.item}
              className={`text-sm font-dm transition-colors duration-200 ${
                activeSection === link.item ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#inscricao"
          data-track="cta-click"
          data-track-location="navbar"
          onClick={() => trackEvent('cta_click', { location: 'navbar' })}
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-dm font-semibold text-sm hover:opacity-90 hover:shadow-[0_0_20px_hsla(153,100%,50%,0.4)] transition-all glow-neon"
        >
          Inscreva-se
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div
          className={`relative z-50 flex flex-col items-center justify-center h-full gap-8 transition-transform duration-500 ${
            mobileOpen ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              data-track="nav-click"
              data-track-item={link.item}
              className={`font-sora text-2xl font-semibold transition-colors ${
                activeSection === link.item ? "text-accent" : "text-foreground hover:text-accent"
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inscricao"
            onClick={() => { trackEvent('cta_click', { location: 'navbar' }); setMobileOpen(false); }}
            data-track="cta-click"
            data-track-location="navbar-mobile"
            className="mt-4 inline-flex items-center px-8 py-3 rounded-full bg-accent text-accent-foreground font-dm font-semibold text-base glow-neon min-h-[44px]"
          >
            Inscreva-se
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
