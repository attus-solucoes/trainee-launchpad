import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <MetricsBar />
        {/* Placeholder sections for anchor links */}
        <section id="programa" className="min-h-[50vh] container mx-auto px-4 py-24">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground text-center">O Programa</h2>
          <p className="font-dm text-muted-foreground text-center mt-4 max-w-xl mx-auto">Em breve, mais detalhes sobre o Programa Trainee Nubank 2026.</p>
        </section>
      </main>
    </div>
  );
};

export default Index;
