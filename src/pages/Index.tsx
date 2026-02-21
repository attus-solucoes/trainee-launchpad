import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import AboutProgram from "@/components/AboutProgram";
import AboutNubank from "@/components/AboutNubank";
import Requirements from "@/components/Requirements";
import Benefits from "@/components/Benefits";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Divider = () => <div className="section-divider" />;
const ScrollDepth = ({ depth }: { depth: string }) => (
  <div className="h-0 overflow-hidden" data-track="scroll-depth" data-track-depth={depth} aria-hidden="true" />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to content */}
      <a
        href="#programa"
        className="sr-only focus:not-sr-only focus:fixed focus:top-1 focus:left-1 focus:z-[9999] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded focus:font-dm focus:font-semibold"
      >
        Pular para o conteúdo principal
      </a>

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <MetricsBar />
        <Divider />
        <AboutProgram />
        <Divider />
        <AboutNubank />
        <ScrollDepth depth="25" />
        <Divider />
        <Requirements />
        <Divider />
        <Benefits />
        <ScrollDepth depth="50" />
        <Divider />
        <ProcessTimeline />
        <Divider />
        <Testimonials />
        <ScrollDepth depth="75" />
        <Divider />
        <FAQ />
        <ScrollDepth depth="100" />
        <CTAFinal />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
