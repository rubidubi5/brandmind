
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Sparkles, Download, Rocket } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Describe Your Vision",
      description: "Tell us about your business idea, industry, and desired brand personality in just a few words.",
      color: "text-purple-600"
    },
    {
      icon: Sparkles,
      title: "AI Magic Happens",
      description: "Our AI analyzes your input and generates a complete brand identity using advanced algorithms.",
      color: "text-blue-600"
    },
    {
      icon: Download,
      title: "Get Your Brand Package",
      description: "Receive your brand name, logo concept, color palette, fonts, and slogan instantly.",
      color: "text-green-600"
    },
    {
      icon: Rocket,
      title: "Launch & Grow",
      description: "Use your new brand identity to build your business with confidence and professional appeal.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From idea to brand identity in four simple steps. Our streamlined process 
            makes professional branding accessible to everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md border-2 border-gray-100">
                      <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                    </div>
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${step.color}`} />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
