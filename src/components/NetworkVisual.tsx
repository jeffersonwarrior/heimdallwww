import { cn } from "@/lib/utils";

export const NetworkVisual = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              @keyframes float {
                0% { transform: translate(0, 0); }
                50% { transform: translate(5px, 10px); }
                100% { transform: translate(0, 0); }
              }
              .node-1 { animation: float 8s ease-in-out infinite; }
              .node-2 { animation: float 10s ease-in-out infinite reverse; }
              .node-3 { animation: float 7s ease-in-out infinite; }
              .node-4 { animation: float 9s ease-in-out infinite reverse; }
              .node-5 { animation: float 12s ease-in-out infinite; }
              .node-6 { animation: float 6s ease-in-out infinite reverse; }
            `}
          </style>
        </defs>
        {/* Lines */}
        <line x1="80" y1="100" x2="200" y2="50" stroke="hsl(var(--heimdall-accent-teal-hsl))" strokeWidth="1" />
        <line x1="80" y1="100" x2="150" y2="250" stroke="hsl(var(--heimdall-accent-teal-hsl))" strokeWidth="1" />
        <line x1="200" y1="50" x2="320" y2="120" stroke="hsl(var(--heimdall-accent-teal-hsl))" strokeWidth="1" />
        <line x1="200" y1="50" x2="250" y2="200" stroke="hsl(var(--heimdall-accent-teal-hsl))" strokeWidth="1" />
        <line x1="150" y1="250" x2="250" y2="200" stroke="hsl(var(--heimdall-accent-teal-hsl))" strokeWidth="1" />
        <line x1="150" y1="250" x2="220" y2="350" stroke="hsl(var(--heimdall-accent-teal-hsl))" strokeWidth="1" />
        <line x1="320" y1="120" x2="250" y2="200" stroke="hsl(var(--heimdall-accent-teal-hsl))" strokeWidth="1" />
        <line x1="320" y1="120" x2="380" y2="250" stroke="hsl(var(--heimdall-accent-teal-hsl))" strokeWidth="1" />
        <line x1="220" y1="350" x2="380" y2="250" stroke="hsl(var(--heimdall-accent-teal-hsl))" strokeWidth="1" />

        {/* Nodes */}
        <circle cx="80" cy="100" r="10" fill="hsl(var(--heimdall-primary-navy-hsl))" className="node-1" />
        <circle cx="200" cy="50" r="8" fill="hsl(var(--heimdall-primary-navy-hsl))" className="node-2" />
        <circle cx="150" cy="250" r="12" fill="hsl(var(--heimdall-primary-navy-hsl))" className="node-3" />
        <circle cx="320" cy="120" r="10" fill="hsl(var(--heimdall-primary-navy-hsl))" className="node-4" />
        <circle cx="250" cy="200" r="15" fill="hsl(var(--heimdall-primary-navy-hsl))" className="node-5" />
        <circle cx="220" cy="350" r="9" fill="hsl(var(--heimdall-primary-navy-hsl))" className="node-6" />
        <circle cx="380" cy="250" r="7" fill="hsl(var(--heimdall-primary-navy-hsl))" className="node-1" />
      </svg>
    </div>
  );
};