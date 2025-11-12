import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 opacity-20">
        <img src={heroBanner} alt="Hero Banner" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Buy AI Accounts
            </span>
            <br />
            <span className="text-foreground">at the best market prices</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Authentic ChatGPT, Gemini, Colab accounts with discounts up to{" "}
            <span className="text-accent font-bold">75%</span>. Trusted - Fast - Guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={() => navigate("/products")}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white font-semibold text-lg px-8 py-6"
            >
              View Products
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
            >
              Contact Now
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground mt-1">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30 days</div>
              <div className="text-sm text-muted-foreground mt-1">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
