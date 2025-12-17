import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { OriginStorySection } from "@/components/OriginStorySection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { TechTrustSection } from "@/components/TechTrustSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { PromoBanner } from "@/components/PromoBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <PromoBanner />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <UseCasesSection />
        <OriginStorySection />
        <PricingSection />
        <FAQSection />
        <TechTrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
