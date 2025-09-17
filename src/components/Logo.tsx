"use client";

import React from 'react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <img
        src="https://static.wixstatic.com/media/edf5ac_fbd61cdd8106430baaa6de27e6cd9aa6~mv2.png/v1/crop/x_272,y_304,w_1251,h_592/fill/w_470,h_222,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Heimdall%20(1).png" // Updated to use the provided external PNG URL
        alt="Heimdall Strategy Logo"
        className="h-8 w-auto"
      />
    </a>
  );
};

export default Logo;