import React, { useState, useRef, useEffect } from 'react';
import Terminal from './Terminal';
import CodeBlock from './CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usageExamplesSection } from '../content';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const UsageExamplesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ canScrollLeft: false, canScrollRight: true });
  
  const handleScroll = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
      setScrollState({
        canScrollLeft: scrollLeft > 0,
        canScrollRight: scrollLeft < scrollWidth - clientWidth - 1
      });
    }
  };
  
  const scroll = (direction: 'left' | 'right') => {
    if (tabsContainerRef.current) {
      const scrollAmount = 200; // px to scroll
      const currentScroll = tabsContainerRef.current.scrollLeft;
      tabsContainerRef.current.scrollTo({
        left: direction === 'left' 
          ? currentScroll - scrollAmount 
          : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  // Add scroll event listener and check initial scroll state
  useEffect(() => {
    const tabsContainer = tabsContainerRef.current;
    if (tabsContainer) {
      tabsContainer.addEventListener('scroll', handleScroll);
      // Check initial scroll state
      handleScroll();
      
      return () => {
        tabsContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  const tabContent = {
    basic: (
      <>
        <h3 className="text-xl font-semibold mb-4">{usageExamplesSection.tabs.basic.description}</h3>
        
        <div className="mb-6">
          <p className="text-gray-300 mb-2">Set up a simple API command in your config:</p>
          <CodeBlock 
            language="json"
            code={usageExamplesSection.tabs.basic.configExample}
          />
          <p className="text-gray-300 mt-4 mb-2">Then run the command:</p>
          <Terminal>
            <code className="text-sm sm:text-base">
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> list-users
              <br />
              {usageExamplesSection.tabs.basic.output.map((line, idx) => (
                <span key={idx} className={`text-[#9CA3AF] ${line.startsWith('  ') ? 'ml-4' : ''}`}>
                  {line}<br />
                </span>
              ))}
            </code>
          </Terminal>
        </div>
      </>
    ),
    params: (
      <>
        <h3 className="text-xl font-semibold mb-4">{usageExamplesSection.tabs.params.description}</h3>
        
        <div className="mb-6">
          <p className="text-gray-300 mb-2">Set up commands with route parameters:</p>
          <CodeBlock 
            language="json"
            code={usageExamplesSection.tabs.params.configExample}
          />
          <p className="text-gray-300 mt-4 mb-2">Use with parameters:</p>
          <Terminal>
            <code className="text-sm sm:text-base">
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> get-user --user-id 47
              <br />
              {usageExamplesSection.tabs.params.output.map((line, idx) => (
                <span key={idx} className="text-[#9CA3AF]">{line}</span>
              ))}
            </code>
          </Terminal>
        </div>
      </>
    ),
    envs: (
      <>
        <h3 className="text-xl font-semibold mb-4">{usageExamplesSection.tabs.envs.description}</h3>
        
        <div className="mb-6">
          <p className="text-gray-300 mb-2">Define environments in your config:</p>
          <CodeBlock 
            language="json"
            code={usageExamplesSection.tabs.envs.configExample}
          />
          <p className="text-gray-300 mt-4 mb-2">Switch between environments:</p>
          <Terminal>
            <code className="text-sm sm:text-base">
              {usageExamplesSection.tabs.envs.commandExample.split('\n\n').map((cmd, idx) => (
                <div key={idx}>
                  <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">
                    {cmd.split(' ').slice(0, 1)}
                  </span> <span className="text-[#8B5CF6]">
                    {cmd.split(' ').slice(1, 2)}
                  </span> {cmd.split(' ').slice(2).join(' ')}
                  <br />
                  {idx < usageExamplesSection.tabs.envs.output.length && (
                    <span className="text-[#9CA3AF]">{usageExamplesSection.tabs.envs.output[idx]}<br /></span>
                  )}
                  {idx === 0 && <br />}
                </div>
              ))}
            </code>
          </Terminal>
        </div>
      </>
    ),
    auth: (
      <>
        <h3 className="text-xl font-semibold mb-4">{usageExamplesSection.tabs.auth.description}</h3>
        
        <div className="mb-6">
          <p className="text-gray-300 mb-2">Senstive environment variables can be set locally without having to commit the values to git and sharing with your team. </p>
          <p className="text-gray-300 mb-2">Configure commands with authentication headers:</p>
          <CodeBlock 
            language="json"
            code={usageExamplesSection.tabs.auth.configExample}
          />
          <p className="text-gray-300 mt-4 mb-2">Set your authentication token and make the request:</p>
          <Terminal>
            <code className="text-sm sm:text-base">
              {usageExamplesSection.tabs.auth.commandExample.split('\n\n').map((cmd, idx) => (
                <div key={idx}>
                  <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">
                    {cmd.split(' ').slice(0, 1)}
                  </span> <span className="text-[#8B5CF6]">
                    {cmd.split(' ').slice(1, 2)}
                  </span> {cmd.split(' ').slice(2).join(' ')}
                  <br />
                  {idx < usageExamplesSection.tabs.auth.output.length && (
                    <span className="text-[#9CA3AF]">{usageExamplesSection.tabs.auth.output[idx]}<br /></span>
                  )}
                  {idx === 0 && <br />}
                </div>
              ))}
            </code>
          </Terminal>
        </div>
      </>
    )
  };

  return (
    <section id="usage" className="py-20 bg-gradient-to-b from-[#111827] to-[#1E293B]/70 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#F9FAFB]">
            {usageExamplesSection.title.split(' ').slice(0, -1).join(' ')} <span className="text-[#14B8A6]">{usageExamplesSection.title.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {usageExamplesSection.subtitle}
          </p>
        </div>

        {/* Example Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="basic" value={activeTab} onValueChange={setActiveTab}>
            <div className="relative border-b border-gray-800 mb-6">
              {/* Left scroll button */}
              <button 
                onClick={() => scroll('left')} 
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#1E293B]/90 backdrop-blur-sm border border-gray-700 transition-opacity ${scrollState.canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <ChevronLeft className="w-5 h-5 text-[#14B8A6]" />
              </button>
              
              {/* Tabs container with horizontal scrolling */}
              <div 
                ref={tabsContainerRef} 
                className="overflow-x-auto pb-1 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <TabsList className="bg-transparent flex-nowrap min-w-max inline-flex w-full px-10">
                  {Object.entries(usageExamplesSection.tabs).map(([key, tab]) => (
                    <TabsTrigger 
                      key={key}
                      value={key}
                      className="data-[state=active]:border-[#14B8A6] data-[state=active]:text-[#14B8A6] data-[state=active]:border-b-2 border-b-2 border-transparent rounded-none bg-transparent whitespace-nowrap flex-shrink-0 px-4 py-2"
                    >
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {/* Right scroll button */}
              <button 
                onClick={() => scroll('right')} 
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#1E293B]/90 backdrop-blur-sm border border-gray-700 transition-opacity ${scrollState.canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <ChevronRight className="w-5 h-5 text-[#14B8A6]" />
              </button>
            </div>

            <div className="bg-[#1E293B]/70 rounded-lg p-4 sm:p-6 border border-gray-800">
              <TabsContent value="basic">
                {tabContent.basic}
              </TabsContent>
              <TabsContent value="params">
                {tabContent.params}
              </TabsContent>
              <TabsContent value="envs">
                {tabContent.envs}
              </TabsContent>
              <TabsContent value="auth">
                {tabContent.auth}
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800 mb-12">
          <h3 className="text-xl font-semibold mb-4">{usageExamplesSection.responsesSection.title}</h3>
          <p className="text-gray-300 mb-4">{usageExamplesSection.responsesSection.description}</p>
          
          <Terminal>
            <code className="text-sm sm:text-base">
              {usageExamplesSection.responsesSection.command.split('\n\n').map((cmd, cmdIdx) => (
                <div key={cmdIdx}>
                  <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">
                    {cmd.split(' ').slice(0, 1)}
                  </span> <span className="text-[#8B5CF6]">
                    {cmd.split(' ').slice(1, 2)}
                  </span> {cmd.split(' ').slice(2).join(' ')}
                  <br />
                  {cmdIdx === 0 && (
                    <div>
                      <span className="text-[#9CA3AF]">{usageExamplesSection.responsesSection.output[0]}</span>
                      <br /><br />
                    </div>
                  )}
                </div>
              ))}
              {usageExamplesSection.responsesSection.output.slice(1).map((line, idx) => (
                <div key={idx}>
                  <span className={`text-[#9CA3AF] ${line.startsWith('content-type') || line.startsWith('cache-control') ? 'ml-4' : ''}`}>
                    {line}
                  </span>
                  <br />
                </div>
              ))}
            </code>
          </Terminal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">{usageExamplesSection.teamSection.title}</h3>
            <p className="text-gray-300 mb-4">{usageExamplesSection.teamSection.description}</p>
            <Terminal>
              <code className="text-sm sm:text-base">
                {usageExamplesSection.teamSection.commands.map((cmd, idx) => (
                  <div key={idx}>
                    <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">
                      {cmd.split(' ').slice(0, 1)}
                    </span> {cmd.split(' ').slice(1).join(' ')}
                    <br />
                  </div>
                ))}
              </code>
            </Terminal>
          </div>

          <div className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">{usageExamplesSection.authSection.title}</h3>
            <p className="text-gray-300 mb-4">{usageExamplesSection.authSection.description}</p>
            <Terminal>
              <code className="text-sm sm:text-base">
                <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">
                  {usageExamplesSection.authSection.command.split(' ').slice(0, 1)}
                </span> <span className="text-[#8B5CF6]">
                  {usageExamplesSection.authSection.command.split(' ').slice(1, 2)}
                </span> {usageExamplesSection.authSection.command.split(' ').slice(2).join(' ')}
                <br />
                <span className="text-[#9CA3AF]">{usageExamplesSection.authSection.output[0]}</span>
              </code>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageExamplesSection;
