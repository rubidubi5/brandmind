
import { useState } from "react";
import { BrandGenerator } from "@/components/BrandGenerator";
import { BrandResult } from "@/components/BrandResult";
import { LandingHero } from "@/components/LandingHero";
import { AboutSection } from "@/components/AboutSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

export interface BrandIdentity {
  brandName: string;
  slogan: string;
  logoDescription: string;
  logoImage?: string; // For DALL-E generated logos
  colorPalette: {
    name: string;
    hex: string;
    description: string;
  }[];
  fontPair: {
    header: string;
    body: string;
  };
}

const Index = () => {
  const [businessIdea, setBusinessIdea] = useState("");
  const [industry, setIndustry] = useState("");
  const [brandTone, setBrandTone] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [brandResult, setBrandResult] = useState<BrandIdentity | null>(null);

  const handleGenerate = async () => {
    if (!businessIdea.trim()) return;
    
    setIsGenerating(true);
    
    // TODO: Replace with actual OpenAI API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockResult: BrandIdentity = {
      brandName: "Sparkforge",
      slogan: "Ignite. Create. Thrive.",
      logoDescription: "A minimalist geometric spark transforming into abstract forge flames. Clean angular lines with subtle gradient effects, representing innovation and the forging of ideas into reality.",
      colorPalette: [
        { name: "Electric Blue", hex: "#2563EB", description: "Primary - Innovation & Trust" },
        { name: "Vibrant Orange", hex: "#F97316", description: "Secondary - Energy & Creativity" },
        { name: "Warm White", hex: "#FEFEFE", description: "Background - Clean & Modern" },
        { name: "Charcoal Gray", hex: "#374151", description: "Text - Professional" },
        { name: "Soft Lavender", hex: "#E0E7FF", description: "Accent - Playful Elegance" }
      ],
      fontPair: {
        header: "Inter Bold",
        body: "Inter Regular"
      }
    };
    
    setBrandResult(mockResult);
    setIsGenerating(false);
  };

  const resetForm = () => {
    setBrandResult(null);
    setBusinessIdea("");
    setIndustry("");
    setBrandTone("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <LandingHero />
      
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {!brandResult ? (
            <BrandGenerator
              businessIdea={businessIdea}
              setBusinessIdea={setBusinessIdea}
              industry={industry}
              setIndustry={setIndustry}
              brandTone={brandTone}
              setBrandTone={setBrandTone}
              isGenerating={isGenerating}
              onGenerate={handleGenerate}
            />
          ) : (
            <BrandResult 
              brandResult={brandResult} 
              onGenerateNew={resetForm}
            />
          )}
        </div>
      </div>

      {!brandResult && (
        <>
          <AboutSection />
          <HowItWorksSection />
          <FeaturesSection />
          <TestimonialsSection />
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
