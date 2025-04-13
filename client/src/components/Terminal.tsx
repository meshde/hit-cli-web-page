import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ children, className }) => {
  return (
    <div className={cn("rounded-lg bg-[#1E293B] p-4 font-mono border border-[#2D3748]", className)}>
      <div className="flex mb-3">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56] mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
      </div>
      <div className="text-sm sm:text-base">
        {children}
      </div>
    </div>
  );
};

export default Terminal;
