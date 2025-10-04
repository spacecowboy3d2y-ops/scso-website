import React from 'react';

/**
 * A decorative watermark component featuring the SCSO ribbon icon.
 * It's designed to be used as a subtle background element on various pages.
 * @param {object} props - The component props.
 * @param {string} [props.className] - Optional additional class names for positioning and styling.
 */
export const RibbonWatermark: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`absolute inset-0 flex items-center justify-center -z-10 overflow-hidden ${className}`}>
             <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-scso-purple-100" // Using a lighter color for subtlety
                preserveAspectRatio="xMidYMid slice"
            >
                <path
                    d="M 50,10
                       C 40,30 40,30 50,50
                       C 60,30 60,30 50,10
                       L 45,10
                       C 35,30 35,30 45,50
                       L 45,90
                       L 55,90
                       L 55,50
                       C 65,30 65,30 55,10
                       L 50,10 Z"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
}