import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PopButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  bounce?: boolean;
  children: React.ReactNode;
}

export function PopButton({ 
  variant = 'primary', 
  size = 'md', 
  bounce = true, 
  className, 
  children, 
  ...props 
}: PopButtonProps) {
  const baseClasses = "font-display border-3 border-black transform transition-all duration-200 hover:scale-105 active:scale-95";
  
  const variantClasses = {
    primary: "bg-pop-pink text-black hover:bg-pop-purple shadow-[4px_4px_0px_black]",
    secondary: "bg-pop-yellow text-black hover:bg-pop-orange shadow-[4px_4px_0px_black]",
    accent: "bg-pop-blue text-white hover:bg-pop-green shadow-[4px_4px_0px_black]"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <Button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        bounce && "bounce-btn",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}