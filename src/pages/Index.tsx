import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import AboutProgram from "@/components/AboutProgram";
import AboutNubank from "@/components/AboutNubank";
import Requirements from "@/components/Requirements";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <MetricsBar />
        <AboutProgram />
        <AboutNubank />
        <Requirements />
        <Benefits />
      </main>
    </div>
  );
};

export default Index;
