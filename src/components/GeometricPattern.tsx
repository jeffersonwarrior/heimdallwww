import React from "react";
import { cn } from "@/lib/utils";

interface GeometricPatternProps {
  className?: string;
}

const GeometricPattern: React.FC<GeometricPatternProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="geometric-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1"
              fill="hsl(var(--heimdall-accent-teal-hsl))"
              opacity="0.05"
            />
            <circle
              cx="20"
              cy="20"
              r="1"
              fill="hsl(var(--heimdall-accent-teal-hsl))"
              opacity="0.05"
            />
            <circle
              cx="38"
              cy="38"
              r="1"
              fill="hsl(var(--heimdall-accent-teal-hsl))"
              opacity="0.05"
            />
            <line
              x1="0"
              y1="0"
              x2="40"
              y2="40"
              stroke="hsl(var(--heimdall-accent-teal-hsl))"
              strokeWidth="0.5"
              opacity="0.02"
            />
            <line
              x1="40"
              y1="0"
              x2="0"
              y2="40"
              stroke="hsl(var(--heimdall-accent-teal-hsl))"
              strokeWidth="0.5"
              opacity="0.02"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-heimdall-primary-navy/90 to-heimdall-primary-navy/80"></div>
    </div>
  );
};

export default GeometricPattern;
