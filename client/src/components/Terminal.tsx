import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ children, className }) => {
  return (
    <div className={cn("terminal rounded-lg bg-[#1E293B] p-3 sm:p-4 font-mono border border-[#2D3748] overflow-hidden", className)}>
      <div className="flex mb-3">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] mr-2"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] mr-2"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]"></div>
      </div>
      <div className="text-sm sm:text-base overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export default Terminal;
