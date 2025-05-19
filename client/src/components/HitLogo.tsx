import React from 'react';

const HitLogo: React.FC<{ className?: string }> = ({ className = 'h-9' }) => {
  return (
    <svg 
      width="240" 
      height="240" 
      viewBox="0 0 240 240" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="120" cy="120" r="120" fill="#14B8A6" />
      <path d="M77 65h30v110H77z" fill="white" />
      <path d="M77 120h86v30H77z" fill="white" />
      <path d="M133 65h30v110h-30z" fill="white" />
    </svg>
  );
};

export default HitLogo;