"use client";

import React from 'react';

const Logo = () => {
  const imageUrl = "https://assets-global.website-files.com/65f712111111111111111111/65f712111111111111111111_Heimdall%20Strategy%20Logo.svg";
  return (
    <a href="/" className="flex items-center">
      <img src={imageUrl} alt="Heimdall Strategy Logo" className="h-8 w-auto" />
    </a>
  );
};

export default Logo;