
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Startup Founder",
      content: "BrandMind helped me create a professional brand identity in minutes. The logo generated was exactly what I envisioned for my tech startup!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Designer",
      content: "As a designer, I was skeptical, but the AI-generated concepts are genuinely impressive. Great starting point for client work.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "E-commerce Owner",
      content: "Saved me thousands on branding costs. The color palette and fonts perfectly matched my boutique's aesthetic. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who've transformed their businesses with AI-powered branding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
