import { PopButton } from "./PopButton";
import { Card } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="pop-frame bg-white">
      <Card className="border-0 shadow-none bg-transparent">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover border-3 border-black"
          />
          {product.tag && (
            <div className="absolute -top-2 -right-2 price-sticker font-display text-sm">
              {product.tag}
            </div>
          )}
        </div>
        
        <div className="p-4 space-y-3">
          <h3 className="font-display text-xl text-black pop-text-shadow">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-pop-pink font-display">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg line-through text-gray-500 font-comic">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          <div className="flex gap-2 pt-2">
            <PopButton variant="primary" size="sm" className="flex-1">
              Add to Cart
            </PopButton>
            <PopButton variant="secondary" size="sm">
              ♡
            </PopButton>
          </div>
        </div>
      </Card>
    </div>
  );
}