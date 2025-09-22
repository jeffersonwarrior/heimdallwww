import { Smartphone, Laptop, Mic, Landmark } from "lucide-react";
import React from "react";

const IconNode = ({
  icon: Icon,
  delay,
  label,
}: {
  icon: React.ElementType;
  delay: number;
  label: string;
}) => (
  <div
    className="flex flex-col items-center gap-2 animate-slide-in-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="bg-card p-4 rounded-full shadow-lg border border-border">
      <Icon className="h-8 w-8 text-heimdall-accent-teal" />
    </div>
    <span className="text-xs text-heimdall-text-subtle text-center">{label}</span>
  </div>
);

const Connector = ({ delay }: { delay: number }) => (
  <div
    className="flex-1 h-0.5 bg-heimdall-primary-navy/50 animate-slide-in-fade-in"
    style={{ animationDelay: `${delay}ms`, transform: "translateY(-1.5rem)" }}
  ></div>
);

const CampaignFlow = () => {
  return (
    <div className="flex items-center justify-center w-full mb-12">
      <div className="flex items-center w-full max-w-4xl">
        <IconNode icon={Smartphone} delay={0} label="Voter Outreach" />
        <Connector delay={200} />
        <IconNode icon={Laptop} delay={400} label="Campaign Staff" />
        <Connector delay={600} />
        <IconNode icon={Mic} delay={800} label="Candidate" />
        <Connector delay={1000} />
        <div
          className="flex flex-col items-center gap-2 animate-slide-in-fade-in"
          style={{ animationDelay: `1200ms` }}
        >
          <div className="bg-card p-4 rounded-full shadow-lg border border-border flex items-center justify-center h-20 w-20">
            <Landmark className="h-8 w-8 text-heimdall-accent-teal" />
          </div>
          <span className="text-xs text-heimdall-text-subtle text-center">Fundraising</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignFlow;
