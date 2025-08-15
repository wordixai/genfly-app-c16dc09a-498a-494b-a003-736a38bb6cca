import { PopButton } from "./PopButton";

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-8">
            <div className="comic-bubble">
              <h2 className="font-display text-5xl md:text-7xl text-black leading-tight">
                BOOM!
                <br />
                <span className="text-pop-pink">Amazing</span>
                <br />
                Fashion!
              </h2>
            </div>
            
            <p className="font-comic text-xl text-white max-w-md">
              Discover the most incredible pop art inspired clothing and accessories that will make you stand out from the crowd!
            </p>
            
            <div className="flex gap-4">
              <PopButton variant="primary" size="lg">
                Shop Now!
              </PopButton>
              <PopButton variant="secondary" size="lg">
                View Collection
              </PopButton>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="pop-frame bg-white p-8">
              <img 
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=600&fit=crop" 
                alt="Pop Art Fashion"
                className="w-full h-96 object-cover border-3 border-black"
              />
              <div className="absolute -bottom-4 -right-4 bg-pop-yellow px-4 py-2 border-3 border-black rotate-12 font-display">
                NEW!
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-pop-pink border-3 border-black flex items-center justify-center font-display text-2xl wiggle">
              ★
            </div>
            <div className="absolute -bottom-8 left-8 w-12 h-12 bg-pop-blue border-3 border-black flex items-center justify-center font-display text-xl wiggle">
              ♡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}