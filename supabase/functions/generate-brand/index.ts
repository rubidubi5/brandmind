
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { businessIdea, industry, brandTone } = await req.json();

    // Generate brand identity with GPT-4
    const brandResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
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
        model: 'gpt-image-1',
        prompt: `Professional logo design: ${brandIdentity.logoDescription}. Clean, modern, minimalist style. Vector-style illustration. High quality, brand identity design. White or transparent background.`,
        n: 1,
        size: '1024x1024',
        quality: 'high',
        background: 'transparent',
        output_format: 'png'
      }),
    });

    const logoData = await logoResponse.json();
    
    // Add the generated logo image to the brand identity
    brandIdentity.logoImage = logoData.data[0].b64_json ? 
      `data:image/png;base64,${logoData.data[0].b64_json}` : 
      logoData.data[0].url;

    return new Response(JSON.stringify(brandIdentity), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-brand function:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to generate brand identity', 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
