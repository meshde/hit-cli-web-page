import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className="rounded-md bg-[#1A202C] overflow-hidden shadow-lg">
      <div className="px-4 py-2 bg-[#1E293B] border-b border-gray-700 flex items-center">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{language}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed max-h-[500px]">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;