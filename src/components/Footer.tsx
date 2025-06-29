
import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-purple-400" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              BrandMind
            </h3>
          </div>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Empowering entrepreneurs with AI-powered brand identities. 
            Transform your vision into a memorable brand.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">
              © 2024 BrandMind. All rights reserved. Built with ❤️ for creators and entrepreneurs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
