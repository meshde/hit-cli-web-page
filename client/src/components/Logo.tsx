import React from 'react';
import { Link } from 'wouter';
import logoImage from '../assets/hit-logo.jpeg';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <img 
          src={logoImage} 
          alt="Hit CLI Logo" 
          className="h-9 rounded"
        />
      </div>
    </Link>
  );
};

export default Logo;