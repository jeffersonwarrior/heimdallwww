import React from "react";
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  rating?: number; // Optional rating out of 5
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, rating }) => {
  return (
    <Card className="flex flex-col h-full bg-heimdall-bg-light border-heimdall-primary-navy/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        {rating && (
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
              />
            ))}
          </div>
        )}
        <CardDescription className="text-lg leading-relaxed text-heimdall-text-body italic">
          "{quote}"
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 mt-auto">
        <p className="font-semibold text-heimdall-text-primary">{author}</p>
        <p className="text-sm text-heimdall-text-subtle">{title}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;