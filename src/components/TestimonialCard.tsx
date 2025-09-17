import React from 'react';
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatarSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, avatarSrc }) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="flex flex-col justify-between h-full p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0 text-lg text-heimdall-text-body leading-relaxed mb-6 flex-grow">
        &ldquo;{quote}&rdquo;
      </CardContent>
      <CardHeader className="flex flex-row items-center p-0 pt-4 border-t border-gray-100">
        <Avatar className="h-12 w-12 mr-4">
          {avatarSrc ? (
            <AvatarImage src={avatarSrc} alt={`@${author}`} />
          ) : (
            <AvatarFallback className="bg-heimdall-accent-teal text-white text-lg font-semibold">
              {getInitials(author)}
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <p className="font-semibold text-heimdall-text-primary text-base">{author}</p>
          <CardDescription className="text-sm text-heimdall-text-subtle">{title}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TestimonialCard;