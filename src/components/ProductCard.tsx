import { Product } from "@/lib/products";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MessageCircle, Check } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isShaking, setIsShaking] = useState(false);
  const discount = Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100);

  const handleBuyNow = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      const message = encodeURIComponent(
        `Hello, I would like to purchase ${product.name} account priced at $${product.originalPrice}/$${product.salePrice} from Sreal shop.`
      );
      window.open(`https://www.facebook.com/tra.giang.771296?text=${message}`, "_blank");
    }, 500);
  };

  return (
    <div className="group relative bg-card rounded-lg border-2 border-border hover:border-accent transition-all duration-300 overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-2 animate-fade-up">
      {/* Discount Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge className="bg-accent text-accent-foreground font-bold text-sm px-3 py-1 animate-pulse-glow">
          -{discount}%
        </Badge>
      </div>

      <div className="p-6 space-y-4">
        {/* Icon */}
        <div className="text-6xl mb-4 group-hover:animate-float">{product.icon}</div>

        {/* Product Name */}
        <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed min-h-[3rem]">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="flex items-end gap-3 pt-4 border-t border-border">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </p>
            <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ${product.salePrice}
            </p>
          </div>
        </div>

        {/* Buy Button */}
        <Button
          onClick={handleBuyNow}
          className={`w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white font-semibold py-6 text-lg ${
            isShaking ? "animate-shake" : ""
          }`}
        >
          <MessageCircle className="mr-2" size={20} />
          Buy Now
        </Button>
      </div>
    </div>
  );
};
