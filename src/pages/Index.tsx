import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        {/* Featured Products Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Featured Products
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium AI accounts at the best prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Why Choose Sreal?
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 animate-fade-up">
                <div className="text-6xl">🛡️</div>
                <h3 className="text-2xl font-bold">Top Trusted</h3>
                <p className="text-muted-foreground">
                  Guaranteed authentic accounts with 30-day replacement warranty
                </p>
              </div>

              <div className="text-center space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-6xl">⚡</div>
                <h3 className="text-2xl font-bold">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Receive your account immediately after payment, 24/7 support
                </p>
              </div>

              <div className="text-center space-y-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-6xl">💰</div>
                <h3 className="text-2xl font-bold">Best Prices</h3>
                <p className="text-muted-foreground">
                  Up to 75% discount, save on your AI costs
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
