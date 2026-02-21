import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "O Programa", href: "#programa" },
  { label: "Nubank", href: "#nubank" },
  { label: "Etapas", href: "#etapas" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="font-sora text-xl font-bold tracking-tight text-foreground">
          eureca<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-dm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-dm font-semibold text-sm hover:opacity-90 transition-opacity glow-neon"
        >
          Inscreva-se
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
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
              className="font-sora text-2xl font-semibold text-foreground hover:text-accent transition-colors"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center px-8 py-3 rounded-full bg-accent text-accent-foreground font-dm font-semibold text-base glow-neon"
          >
            Inscreva-se
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
