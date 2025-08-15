import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { PopButton } from "@/components/PopButton";

const featuredProducts = [
  {
    id: 1,
    name: "Pop Art T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    tag: "SALE!"
  },
  {
    id: 2,
    name: "Comic Strip Hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    tag: "HOT!"
  },
  {
    id: 3,
    name: "Retro Sneakers",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    tag: "NEW!"
  },
  {
    id: 4,
    name: "Pop Art Backpack",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Comic Style Cap",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    tag: "COOL!"
  },
  {
    id: 6,
    name: "Art Print Dress",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    tag: "SALE!"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="comic-bubble inline-block mb-8">
              <h2 className="font-display text-4xl md:text-6xl text-black">
                Featured Products
              </h2>
            </div>
            <p className="font-comic text-xl text-white max-w-2xl mx-auto">
              Check out our most popular pop art inspired items that everyone's talking about!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <PopButton variant="primary" size="lg">
              View All Products
            </PopButton>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="pop-frame bg-white text-center">
            <div className="space-y-6">
              <h3 className="font-display text-3xl md:text-4xl text-black pop-text-shadow">
                Join the Pop Art Revolution!
              </h3>
              <p className="font-comic text-lg text-gray-700 max-w-2xl mx-auto">
                Get exclusive access to new collections, special discounts, and behind-the-scenes content from our pop art designers!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email..."
                  className="flex-1 px-4 py-3 border-3 border-black font-comic text-lg focus:outline-none focus:ring-2 focus:ring-pop-pink"
                />
                <PopButton variant="primary" size="md" bounce={false}>
                  Subscribe!
                </PopButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display text-2xl text-white mb-4">POPShop!</h4>
              <p className="font-comic text-white/80">
                The ultimate destination for pop art fashion and accessories.
              </p>
            </div>
            
            <div>
              <h5 className="font-display text-lg text-white mb-3">Shop</h5>
              <ul className="space-y-2 font-comic text-white/80">
                <li><a href="#" className="hover:text-pop-yellow transition-colors">T-Shirts</a></li>
                <li><a href="#" className="hover:text-pop-yellow transition-colors">Hoodies</a></li>
                <li><a href="#" className="hover:text-pop-yellow transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-pop-yellow transition-colors">Sale</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-display text-lg text-white mb-3">Support</h5>
              <ul className="space-y-2 font-comic text-white/80">
                <li><a href="#" className="hover:text-pop-yellow transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-pop-yellow transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-pop-yellow transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-pop-yellow transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-display text-lg text-white mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <PopButton variant="accent" size="sm" bounce={false}>
                  FB
                </PopButton>
                <PopButton variant="secondary" size="sm" bounce={false}>
                  IG
                </PopButton>
                <PopButton variant="primary" size="sm" bounce={false}>
                  TW
                </PopButton>
              </div>
            </div>
          </div>
          
          <div className="border-t-3 border-white/20 pt-8 text-center">
            <p className="font-comic text-white/60">
              © 2024 POPShop! All rights reserved. Made with ♡ and lots of colors!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;