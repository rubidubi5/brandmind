
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Zap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About BrandMind</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe every great business starts with a powerful brand. BrandMind combines cutting-edge AI 
            with proven branding principles to help entrepreneurs, startups, and creatives build memorable 
            brand identities that resonate with their audience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl">For Entrepreneurs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Built specifically for founders, solo entrepreneurs, and creative professionals who need 
                professional branding without the agency price tag.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl">AI-Powered Precision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our advanced AI analyzes your business concept and generates brand identities that 
                align with your industry, audience, and vision.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Instant Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get complete brand packages in seconds, not weeks. Names, logos, colors, fonts, 
                and slogans - everything you need to launch with confidence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
