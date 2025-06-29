
import { Sparkles } from "lucide-react";

export const LandingHero = () => {
  return (
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
  );
};
