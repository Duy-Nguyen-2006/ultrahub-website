export interface Product {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  icon: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus",
    description: "Access ChatGPT-4 with faster speeds and priority during peak hours",
    originalPrice: 19.99,
    salePrice: 4.99,
    icon: "🤖",
    features: [
      "ChatGPT-4 access",
      "Faster response times",
      "Priority during peak hours",
      "30-day warranty"
    ]
  },
  {
    id: "chatgpt-pro",
    name: "ChatGPT Pro",
    description: "Premium Pro package with GPT-4, optimized speed and exclusive features",
    originalPrice: 39.99,
    salePrice: 9.99,
    icon: "⚡",
    features: [
      "All Plus features",
      "Optimal speed",
      "Higher limits",
      "30-day warranty"
    ]
  },
  {
    id: "gemini-pro",
    name: "Gemini Pro",
    description: "Google's AI with powerful multimodal processing capabilities",
    originalPrice: 17.99,
    salePrice: 4.49,
    icon: "💎",
    features: [
      "Gemini Pro AI",
      "Text & image processing",
      "Google Workspace integration",
      "30-day warranty"
    ]
  },
  {
    id: "gemini-ultra",
    name: "Gemini Ultra",
    description: "The most advanced version of Gemini with superior performance",
    originalPrice: 27.99,
    salePrice: 6.99,
    icon: "💠",
    features: [
      "Gemini Ultra AI",
      "Highest performance",
      "Complex processing",
      "30-day warranty"
    ]
  },
  {
    id: "colab-pro",
    name: "Colab Pro",
    description: "Upgrade Google Colab with powerful GPU for machine learning",
    originalPrice: 9.99,
    salePrice: 2.49,
    icon: "🔬",
    features: [
      "Enhanced GPU/TPU",
      "Longer runtime",
      "Higher RAM",
      "30-day warranty"
    ]
  },
  {
    id: "colab-pro-plus",
    name: "Colab Pro+",
    description: "Colab's premium package with maximum resources",
    originalPrice: 24.99,
    salePrice: 6.49,
    icon: "🚀",
    features: [
      "Premium GPU/TPU",
      "Unlimited runtime",
      "Maximum RAM",
      "30-day warranty"
    ]
  },
  {
    id: "super-grok",
    name: "Super Grok",
    description: "X (Twitter) AI with unique analysis and interaction capabilities",
    originalPrice: 29.99,
    salePrice: 7.49,
    icon: "🎯",
    features: [
      "Exclusive Grok AI",
      "Real-time analysis",
      "X platform integration",
      "30-day warranty"
    ]
  }
];
