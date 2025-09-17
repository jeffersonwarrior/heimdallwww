"use client";

import React from 'react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <img
        src="/heimdall-logo.svg" // Updated to use the local SVG file
        alt="Heimdall Strategy Logo"
        className="h-8 w-auto"
      />
    </a>
  );
};

export default Logo;