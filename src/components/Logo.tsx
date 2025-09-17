"use client";

import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center space-x-2">
      <ShieldCheck className="h-8 w-auto text-heimdall-primary-navy" />
      <span className="text-xl font-bold text-heimdall-primary-navy">Heimdall Strategy</span>
    </a>
  );
};

export default Logo;