import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import AboutProgram from "@/components/AboutProgram";
import AboutNubank from "@/components/AboutNubank";
import Requirements from "@/components/Requirements";
import Benefits from "@/components/Benefits";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const Divider = () => <div className="section-divider" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <MetricsBar />
        <Divider />
        <AboutProgram />
        <Divider />
        <AboutNubank />
        <Divider />
        <Requirements />
        <Divider />
        <Benefits />
        <Divider />
        <ProcessTimeline />
        <Divider />
        <Testimonials />
        <Divider />
        <FAQ />
      </main>
    </div>
  );
};

export default Index;
