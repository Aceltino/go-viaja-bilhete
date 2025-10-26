import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PopularRoutes } from "@/components/PopularRoutes";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <PopularRoutes />
        <HowItWorks />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
