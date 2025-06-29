
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Palette, Type, Lightbulb } from "lucide-react";
import { BrandGenerator } from "@/components/BrandGenerator";
import { BrandResult } from "@/components/BrandResult";

export interface BrandIdentity {
  brandName: string;
  slogan: string;
  logoDescription: string;
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
    
    // Simulate AI generation with a realistic delay
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              BrandMind
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your business idea into a complete brand identity in seconds. 
            Powered by AI creativity, designed for founders and creators.
          </p>
        </div>
      </header>

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
              onGenerateNew={() => {
                setBrandResult(null);
                setBusinessIdea("");
                setIndustry("");
                setBrandTone("");
              }}
            />
          )}
        </div>

        {/* Features Section */}
        {!brandResult && (
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Everything You Need to Build Your Brand
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Type className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Brand Names</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Unique, memorable names that are domain-friendly and brandable
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Smart Slogans</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Punchy, inspiring taglines that capture your brand's essence
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Sparkles className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Logo Concepts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Professional logo descriptions with style guides and concepts
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Palette className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Color Palettes</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Harmonious color schemes with hex codes and usage guidelines
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
