
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Palette, Type, Lightbulb, Image, Copy } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Everything You Need to Build Your Brand</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a complete brand package that rivals expensive design agencies, powered by AI and delivered instantly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
            <CardHeader>
              <Type className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Brand Names</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Unique, memorable names that are domain-friendly and brandable for any industry
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
            <CardHeader>
              <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Smart Slogans</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Punchy, inspiring taglines that capture your brand's essence and mission
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
            <CardHeader>
              <Image className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-lg">AI-Generated Logos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Professional logo designs created with DALL-E, ready to download and use
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
            <CardHeader>
              <Palette className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Color Palettes</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Harmonious color schemes with hex codes and usage guidelines for consistent branding
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
            <CardHeader>
              <Type className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Font Pairings</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Carefully selected typography combinations that enhance readability and brand appeal
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
            <CardHeader>
              <Copy className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Easy Export</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Copy brand elements with one click and export everything in formats ready for immediate use
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
