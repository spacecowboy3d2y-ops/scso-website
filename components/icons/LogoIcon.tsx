import React from 'react';

/**
 * Renders the official SVG logo for the Somaliland Cancer Support Organization.
 * This is a self-contained component that includes both the ribbon icon and the organization's full name.
 * @param {React.SVGProps<SVGSVGElement>} props - Standard SVG properties.
 */
export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Gradient definition for the ribbon icon */}
    <defs>
      <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    
    {/* Ribbon Icon */}
    <g transform="translate(5, 5) scale(1.1)">
      <path
        d="M 15,0
           C 10,12 10,12 15,25
           C 20,12 20,12 15,0
           L 10,0
           C 5,12 5,12 10,25
           L 10,50
           L 20,50
           L 20,25
           C 25,12 25,12 20,0
           L 15,0 Z"
        fill="url(#ribbonGradient)"
        transform="scale(0.9)"
      />
      <path
        d="M 15,0
           L 10,0
           C 5,12 5,12 10,25
           L 10,50
           L 20,50
           L 20,25
           C 25,12 25,12 20,0
           L 15,0 Z"
        fill="#8b5cf6"
        opacity="0.3"
        transform="scale(0.9)"
      />
    </g>
    
    {/* Organization Name Text */}
    <g transform="translate(45, 14)">
      <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="13" fill="#4c1d95" fontWeight="bold">Somaliland Cancer</text>
      <text x="0" y="18" fontFamily="Inter, sans-serif" fontSize="13" fill="#5b21b6" fontWeight="bold">Support Organization</text>
    </g>
  </svg>
);
