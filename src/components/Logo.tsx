"use client";

import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/heimdall-logo.svg" alt="Heimdall Strategy" className="h-8 w-8" />
      <span className="text-xl font-bold text-heimdall-primary-navy">Heimdall Strategy</span>
      <span className="text-sm text-heimdall-text-subtle">
        The Modern ERP for Political Campaigns
      </span>
    </div>
  );
};

export default Logo;
