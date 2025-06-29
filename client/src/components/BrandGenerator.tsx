
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Sparkles, Loader2 } from "lucide-react";

interface BrandGeneratorProps {
  businessIdea: string;
  setBusinessIdea: (value: string) => void;
  industry: string;
  setIndustry: (value: string) => void;
  brandTone: string;
  setBrandTone: (value: string) => void;
  isGenerating: boolean;
  onGenerate: () => void;
}

export const BrandGenerator = ({
  businessIdea,
  setBusinessIdea,
  industry,
  setIndustry,
  brandTone,
  setBrandTone,
  isGenerating,
  onGenerate
}: BrandGeneratorProps) => {
  return (
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">
          Describe Your Business Idea
        </CardTitle>
        <p className="text-gray-600">
          Tell us about your vision, and we'll craft your complete brand identity
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="business-idea" className="text-sm font-medium text-gray-700">
            Business Idea or Keywords *
          </Label>
          <Textarea
            id="business-idea"
            placeholder="e.g., sustainable fashion marketplace for millennials, AI-powered fitness coaching app, artisanal coffee roasting business..."
            value={businessIdea}
            onChange={(e) => setBusinessIdea(e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
              Industry
            </Label>
            <Select value={industry} onValueChange={setIndustry}>
              <SelectTrigger>
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="retail">Retail & E-commerce</SelectItem>
                <SelectItem value="food">Food & Beverage</SelectItem>
                <SelectItem value="fashion">Fashion & Beauty</SelectItem>
                <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                <SelectItem value="real-estate">Real Estate</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="creative">Creative Services</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="brand-tone" className="text-sm font-medium text-gray-700">
              Brand Personality
            </Label>
            <Select value={brandTone} onValueChange={setBrandTone}>
              <SelectTrigger>
                <SelectValue placeholder="Choose your brand tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional & Corporate</SelectItem>
                <SelectItem value="fun">Fun & Playful</SelectItem>
                <SelectItem value="minimalist">Clean & Minimalist</SelectItem>
                <SelectItem value="luxury">Premium & Luxury</SelectItem>
                <SelectItem value="friendly">Friendly & Approachable</SelectItem>
                <SelectItem value="bold">Bold & Edgy</SelectItem>
                <SelectItem value="innovative">Innovative & Techy</SelectItem>
                <SelectItem value="elegant">Elegant & Sophisticated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          onClick={onGenerate}
          disabled={!businessIdea.trim() || isGenerating}
          className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Crafting Your Brand...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Generate My Brand Identity
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
