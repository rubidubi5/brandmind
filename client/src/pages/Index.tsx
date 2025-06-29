
import { useState } from "react";
import { BrandGenerator } from "@/components/BrandGenerator";
import { BrandResult } from "@/components/BrandResult";
import { LandingHero } from "@/components/LandingHero";
import { AboutSection } from "@/components/AboutSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface BrandIdentity {
  brandName: string;
  slogan: string;
  logoDescription: string;
  logoImage?: string;
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
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-brand', {
        body: {
          businessIdea,
          industry,
          brandTone
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        toast.error('Failed to generate brand identity. Please try again.');
        return;
      }

      setBrandResult(data);
      toast.success('Brand identity generated successfully!');
    } catch (error) {
      console.error('Error generating brand:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsGenerating(false);
    }
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
