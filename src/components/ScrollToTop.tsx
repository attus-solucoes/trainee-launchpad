import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg opacity-70 hover:opacity-100 md:opacity-100 ${
        visible ? "scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={20} />
    </button>
  );
};

export default ScrollToTop;
