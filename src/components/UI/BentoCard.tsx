import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  gradient?: boolean;
  hover?: boolean;
}

const BentoCard = ({ 
  children, 
  className, 
  size = "medium", 
  gradient = false,
  hover = true 
}: BentoCardProps) => {
  const sizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8"
  };

  return (
    <div
      className={cn(
        "card-clinical",
        sizeClasses[size],
        gradient && "bg-gradient-to-br from-clinical-creme to-clinical-grey",
        hover && "hover:scale-[1.01] transition-transform duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoCard;