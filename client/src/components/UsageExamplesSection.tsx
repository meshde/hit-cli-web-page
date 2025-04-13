import React, { useState } from 'react';
import Terminal from './Terminal';
import CodeBlock from './CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UsageExamplesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("project");
  
  const tabContent = {
    project: (
      <>
        <h3 className="text-xl font-semibold mb-4">Project Initialization & Management</h3>
        
        <div className="mb-6">
          <p className="text-gray-300 mb-2">Initialize a new project with templates:</p>
          <Terminal className="mb-4">
            <code className="text-sm sm:text-base">
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">init</span> my-project --template react
              <br />
              <span className="text-[#9CA3AF]">✓ Created new React project: my-project</span>
              <br />
              <span className="text-[#9CA3AF]">✓ Installed dependencies</span>
              <br />
              <span className="text-[#9CA3AF]">✓ Set up Git repository</span>
            </code>
          </Terminal>
        </div>
        
        <div>
          <p className="text-gray-300 mb-2">Run project tasks:</p>
          <Terminal>
            <code className="text-sm sm:text-base">
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> dev
              <br />
              <span className="text-[#9CA3AF]">✓ Starting development server...</span>
              <br />
              <span className="text-[#9CA3AF]">✓ Server running at http://localhost:3000</span>
            </code>
          </Terminal>
        </div>
      </>
    ),
    git: (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-12 h-12 text-gray-500 mb-4 flex items-center justify-center">
          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <p className="text-gray-400 text-center">Git workflow commands would go here.</p>
        <p className="text-gray-500 text-sm text-center mt-2">Simplified Git commands for common workflows.</p>
      </div>
    ),
    build: (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-12 h-12 text-gray-500 mb-4 flex items-center justify-center">
          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <p className="text-gray-400 text-center">Build and deploy commands would go here.</p>
        <p className="text-gray-500 text-sm text-center mt-2">Streamlined deployment to various platforms.</p>
      </div>
    )
  };

  return (
    <section id="usage" className="py-20 bg-gradient-to-b from-[#111827] to-[#1E293B]/70 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#F9FAFB]">
            Usage <span className="text-[#14B8A6]">Examples</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how hit can transform your development workflow with these common use cases.
          </p>
        </div>

        {/* Example Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="project" value={activeTab} onValueChange={setActiveTab}>
            <div className="border-b border-gray-800 mb-6">
              <TabsList className="bg-transparent">
                <TabsTrigger 
                  value="project"
                  className="data-[state=active]:border-[#14B8A6] data-[state=active]:text-[#14B8A6] data-[state=active]:border-b-2 border-b-2 border-transparent rounded-none bg-transparent"
                >
                  Project Management
                </TabsTrigger>
                <TabsTrigger 
                  value="git"
                  className="data-[state=active]:border-[#14B8A6] data-[state=active]:text-[#14B8A6] data-[state=active]:border-b-2 border-b-2 border-transparent rounded-none bg-transparent"
                >
                  Git Workflows
                </TabsTrigger>
                <TabsTrigger 
                  value="build"
                  className="data-[state=active]:border-[#14B8A6] data-[state=active]:text-[#14B8A6] data-[state=active]:border-b-2 border-b-2 border-transparent rounded-none bg-transparent"
                >
                  Build & Deploy
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="bg-[#1E293B]/70 rounded-lg p-4 sm:p-6 border border-gray-800">
              <TabsContent value="project">
                {tabContent.project}
              </TabsContent>
              <TabsContent value="git">
                {tabContent.git}
              </TabsContent>
              <TabsContent value="build">
                {tabContent.build}
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800 mb-12">
          <h3 className="text-xl font-semibold mb-4">Create Custom Commands</h3>
          <p className="text-gray-300 mb-4">Define your own shortcut commands in a configuration file:</p>
          
          <div className="mb-6">
            <CodeBlock 
              language="javascript"
              code={`// .hitrc.js

module.exports = {
  commands: {
    "deploy": "npm run build && aws s3 sync dist/ s3://my-bucket",
    "refresh": "git pull && npm install && npm run build",
    "cleanup": "find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +"
  }
}`}
            />
          </div>
          
          <p className="text-gray-300 mb-2">Then use your custom commands:</p>
          <Terminal>
            <code className="text-sm sm:text-base">
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">deploy</span>
              <br />
              <span className="text-[#9CA3AF]">✓ Running custom command: deploy</span>
              <br />
              <span className="text-[#9CA3AF]">✓ Build completed successfully</span>
              <br />
              <span className="text-[#9CA3AF]">✓ Deployed to S3</span>
            </code>
          </Terminal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Quick Project Stats</h3>
            <Terminal>
              <code className="text-sm sm:text-base">
                <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">stats</span>
                <br />
                <span className="text-[#9CA3AF]">Project Statistics:</span>
                <br />
                <span className="text-[#9CA3AF]">- Lines of code: 12,435</span>
                <br />
                <span className="text-[#9CA3AF]">- Files: 86</span>
                <br />
                <span className="text-[#9CA3AF]">- Commits: 214</span>
                <br />
                <span className="text-[#9CA3AF]">- Contributors: 5</span>
              </code>
            </Terminal>
          </div>

          <div className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Multi-Repository Operations</h3>
            <Terminal>
              <code className="text-sm sm:text-base">
                <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">foreach</span> "git pull"
                <br />
                <span className="text-[#9CA3AF]">Running command in all repositories:</span>
                <br />
                <span className="text-[#9CA3AF]">✓ frontend: Already up to date</span>
                <br />
                <span className="text-[#9CA3AF]">✓ backend: Pulled 2 files</span>
                <br />
                <span className="text-[#9CA3AF]">✓ docs: Pulled 5 files</span>
              </code>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageExamplesSection;
