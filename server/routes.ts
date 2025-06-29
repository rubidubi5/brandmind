import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Brand generation API endpoint
  app.post("/api/generate-brand", async (req, res) => {
    try {
      const { businessIdea, industry, brandTone } = req.body;

      if (!businessIdea?.trim()) {
        return res.status(400).json({ error: "Business idea is required" });
      }

      const openAIApiKey = process.env.OPENAI_API_KEY;
      if (!openAIApiKey) {
        return res.status(500).json({ error: "OpenAI API key not configured" });
      }

      // Generate brand identity with GPT-4
      const brandResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: `You are BrandMind, an expert creative AI assistant specializing in brand identity creation. You help solo founders, startups, and creatives develop premium brand identities that feel like they came from a top design agency.

Your output should be creative, elegant, playful, and empowering. Always follow modern branding principles and ensure everything feels professional and premium.

Return your response as a valid JSON object with this exact structure:
{
  "brandName": "string - short, memorable, domain-friendly name",
  "slogan": "string - punchy, inspiring tagline under 8 words",
  "logoDescription": "string - detailed visual concept for logo design including style, colors, and symbolism",
  "colorPalette": [
    {
      "name": "string - descriptive color name",
      "hex": "string - hex code with #",
      "description": "string - how this color supports the brand"
    }
  ],
  "fontPair": {
    "header": "string - font name for headlines",
    "body": "string - font name for body text"
  }
}

Provide exactly 5 colors in the palette: primary, secondary, background, text, and accent colors that work harmoniously together.`
            },
            {
              role: 'user',
              content: `Create a complete brand identity for this business:
Business Idea: ${businessIdea}
Industry: ${industry || 'General'}
Brand Tone: ${brandTone || 'Professional'}

Generate a unique brand name, inspiring slogan, detailed logo concept, harmonious 5-color palette, and matching font pair.`
            }
          ],
          temperature: 0.8,
          max_tokens: 1500,
        }),
      });

      if (!brandResponse.ok) {
        const errorData = await brandResponse.text();
        console.error('OpenAI API error:', errorData);
        return res.status(500).json({ error: 'Failed to generate brand identity' });
      }

      const brandData = await brandResponse.json();
      const brandIdentity = JSON.parse(brandData.choices[0].message.content);

      // Generate logo image with DALL-E
      const logoResponse = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: `Professional logo design: ${brandIdentity.logoDescription}. Clean, modern, minimalist style. Vector-style illustration. High quality, brand identity design. White or transparent background.`,
          n: 1,
          size: '1024x1024',
          quality: 'hd',
          response_format: 'url'
        }),
      });

      if (logoResponse.ok) {
        const logoData = await logoResponse.json();
        brandIdentity.logoImage = logoData.data[0].url;
      } else {
        console.warn('Failed to generate logo image, continuing without it');
      }

      res.json(brandIdentity);
    } catch (error) {
      console.error('Error in generate-brand endpoint:', error);
      res.status(500).json({ 
        error: 'Failed to generate brand identity', 
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
