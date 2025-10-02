import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import BentoCard from "./BentoCard";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  date: string;
  treatment?: string;
}

const TestimonialCard = ({ name, text, rating, date, treatment }: TestimonialCardProps) => {
  return (
    <BentoCard className="h-full flex flex-col">
      {/* Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "text-yellow-400 fill-current" : "text-clinical-grey"
            )}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow">
        "{text}"
      </blockquote>

      {/* Author Info */}
      <div className="border-t border-border pt-4">
        <div className="font-medium text-foreground">{name}</div>
        {treatment && (
          <div className="text-sm text-muted-foreground">{treatment}</div>
        )}
        <div className="text-xs text-muted-foreground mt-1">{date}</div>
      </div>
    </BentoCard>
  );
};

export default TestimonialCard;