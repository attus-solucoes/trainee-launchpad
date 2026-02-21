import { Instagram, Linkedin, Youtube, Mail, Phone, HelpCircle } from "lucide-react";

const programLinks = [
  { label: "Sobre", href: "#programa" },
  { label: "Etapas", href: "#etapas" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
];

const nubankLinks = [
  { label: "Site oficial", href: "#" },
  { label: "Carreiras", href: "#" },
  { label: "Blog", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const socials = [
  { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
  { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
  { icon: <Youtube size={18} />, href: "#", label: "YouTube" },
];

const Footer = () => (
  <footer className="bg-[hsl(270,100%,2%)] pt-16 pb-8 md:pt-20">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
        {/* Col 1 — Brand */}
        <div>
          <span className="font-sora text-xl font-bold text-foreground">eureca<span className="text-accent">.</span></span>
          <p className="font-dm text-sm text-muted-foreground mt-3 max-w-[250px] leading-relaxed">
            Conectamos jovens talentos às melhores oportunidades do mercado.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent hover:shadow-[0_0_12px_hsla(153,100%,50%,0.2)] transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — O Programa */}
        <div>
          <h4 className="font-sora font-semibold text-sm text-foreground uppercase tracking-wider mb-4">O Programa</h4>
          <ul className="space-y-2">
            {programLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="font-dm text-sm text-muted-foreground hover:text-accent transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Nubank */}
        <div>
          <h4 className="font-sora font-semibold text-sm text-foreground uppercase tracking-wider mb-4">Nubank</h4>
          <ul className="space-y-2">
            {nubankLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="font-dm text-sm text-muted-foreground hover:text-accent transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contato */}
        <div>
          <h4 className="font-sora font-semibold text-sm text-foreground uppercase tracking-wider mb-4">Contato</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-muted-foreground" />
              <a href="mailto:trainee@eureca.me" className="font-dm text-sm text-muted-foreground hover:text-accent transition-colors">trainee@eureca.me</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-muted-foreground" />
              <a href="#" className="font-dm text-sm text-muted-foreground hover:text-accent transition-colors">(11) 99999-9999</a>
            </li>
            <li className="flex items-center gap-2">
              <HelpCircle size={14} className="text-muted-foreground" />
              <a href="#" className="font-dm text-sm text-muted-foreground hover:text-accent transition-colors">Central de ajuda</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-center">
        <span className="font-dm text-xs text-muted-foreground">© 2026 Eureca. Todos os direitos reservados.</span>
        <span className="font-dm text-xs text-muted-foreground">Feito com 💜 para quem quer mudar o mundo</span>
      </div>
    </div>
  </footer>
);

export default Footer;
