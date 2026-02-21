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
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={20} />
    </button>
  );
};

export default ScrollToTop;
