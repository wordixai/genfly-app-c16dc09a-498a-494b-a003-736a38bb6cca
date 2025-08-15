import { PopButton } from "./PopButton";
import { ShoppingCart, Search, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="relative z-10 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="wiggle">
            <h1 className="font-display text-4xl text-white pop-text-shadow">
              POPShop!
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="font-comic text-lg text-white hover:text-pop-yellow transition-colors">
              Home
            </a>
            <a href="#" className="font-comic text-lg text-white hover:text-pop-yellow transition-colors">
              Shop
            </a>
            <a href="#" className="font-comic text-lg text-white hover:text-pop-yellow transition-colors">
              About
            </a>
            <a href="#" className="font-comic text-lg text-white hover:text-pop-yellow transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            <PopButton variant="accent" size="sm" bounce={false}>
              <Search className="w-4 h-4" />
            </PopButton>
            
            <PopButton variant="secondary" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 bg-pop-pink text-black text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-black font-bold">
                3
              </span>
            </PopButton>
            
            <PopButton variant="primary" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </PopButton>
          </div>
        </div>
      </div>
    </header>
  );
}