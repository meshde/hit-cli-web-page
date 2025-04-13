import React, { useState } from 'react';
import Terminal from './Terminal';
import CodeBlock from './CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UsageExamplesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("basic");
  
  const tabContent = {
    basic: (
      <>
        <h3 className="text-xl font-semibold mb-4">Basic API Commands</h3>
        
        <div className="mb-6">
          <p className="text-gray-300 mb-2">Set up a simple API command in your config:</p>
          <CodeBlock 
            language="json"
            code={`{
  "commands": {
    "list-users": {
      "url": "https://your.api.com/users",
      "method": "GET"
    }
  }
}`}
          />
          <p className="text-gray-300 mt-4 mb-2">Then run the command:</p>
          <Terminal>
            <code className="text-sm sm:text-base">
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> list-users
              <br />
              <span className="text-[#9CA3AF]">[</span>
              <br />
              <span className="text-[#9CA3AF] ml-4">{"  {"} "id": 1, "name": "John Doe", "email": "john@example.com" {"}"},</span>
              <br />
              <span className="text-[#9CA3AF] ml-4">{"  {"} "id": 2, "name": "Jane Smith", "email": "jane@example.com" {"}"}</span>
              <br />
              <span className="text-[#9CA3AF]">]</span>
            </code>
          </Terminal>
        </div>
      </>
    ),
    params: (
      <>
        <h3 className="text-xl font-semibold mb-4">Route Parameters</h3>
        
        <div className="mb-6">
          <p className="text-gray-300 mb-2">Set up commands with route parameters:</p>
          <CodeBlock 
            language="json"
            code={`{
  "commands": {
    "get-user": {
      "url": "https://your.api.com/users/:userId",
      "method": "GET"
    }
  }
}`}
          />
          <p className="text-gray-300 mt-4 mb-2">Use with parameters:</p>
          <Terminal>
            <code className="text-sm sm:text-base">
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> get-user --user-id 47
              <br />
              <span className="text-[#9CA3AF]">{"{"} "id": 47, "name": "Alice Johnson", "email": "alice@example.com" {"}"}</span>
            </code>
          </Terminal>
        </div>
      </>
    ),
    envs: (
      <>
        <h3 className="text-xl font-semibold mb-4">Environment Variables</h3>
        
        <div className="mb-6">
          <p className="text-gray-300 mb-2">Define environments in your config:</p>
          <CodeBlock 
            language="json"
            code={`{
  "envs": {
    "prod": {
      "API_URL": "https://prod.api.com"
    },
    "dev": {
      "API_URL": "https://dev.api.com"
    }
  },
  "commands": {
    "list-users": {
      "url": "{{API_URL}}/users",
      "method": "GET"
    }
  }
}`}
          />
          <p className="text-gray-300 mt-4 mb-2">Switch between environments:</p>
          <Terminal>
            <code className="text-sm sm:text-base">
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">env</span> use dev
              <br />
              <span className="text-[#9CA3AF]">✓ Switched to dev environment</span>
              <br />
              <br />
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> list-users
              <br />
              <span className="text-[#9CA3AF]">// This now calls https://dev.api.com/users</span>
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
            Usage <span className="text-[#14B8A6]">Examples</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how hit makes your API workflows simpler with these common use cases.
          </p>
        </div>

        {/* Example Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="basic" value={activeTab} onValueChange={setActiveTab}>
            <div className="border-b border-gray-800 mb-6">
              <TabsList className="bg-transparent">
                <TabsTrigger 
                  value="basic"
                  className="data-[state=active]:border-[#14B8A6] data-[state=active]:text-[#14B8A6] data-[state=active]:border-b-2 border-b-2 border-transparent rounded-none bg-transparent"
                >
                  Basic Commands
                </TabsTrigger>
                <TabsTrigger 
                  value="params"
                  className="data-[state=active]:border-[#14B8A6] data-[state=active]:text-[#14B8A6] data-[state=active]:border-b-2 border-b-2 border-transparent rounded-none bg-transparent"
                >
                  Route Parameters
                </TabsTrigger>
                <TabsTrigger 
                  value="envs"
                  className="data-[state=active]:border-[#14B8A6] data-[state=active]:text-[#14B8A6] data-[state=active]:border-b-2 border-b-2 border-transparent rounded-none bg-transparent"
                >
                  Environments
                </TabsTrigger>
              </TabsList>
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
            </div>
          </Tabs>
        </div>

        <div className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800 mb-12">
          <h3 className="text-xl font-semibold mb-4">Inspecting Responses</h3>
          <p className="text-gray-300 mb-4">View full API responses including headers and status codes:</p>
          
          <Terminal>
            <code className="text-sm sm:text-base">
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> list-users
              <br />
              <span className="text-[#9CA3AF]">[...] // Response body</span>
              <br /><br />
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">last</span> view
              <br />
              <span className="text-[#9CA3AF]">Status: 200 OK</span>
              <br />
              <span className="text-[#9CA3AF]">Headers:</span>
              <br />
              <span className="text-[#9CA3AF] ml-4">content-type: application/json</span>
              <br />
              <span className="text-[#9CA3AF] ml-4">cache-control: max-age=0, private, must-revalidate</span>
              <br />
              <span className="text-[#9CA3AF]">Body:</span>
              <br />
              <span className="text-[#9CA3AF] ml-4">[...]</span>
            </code>
          </Terminal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Team Collaboration</h3>
            <p className="text-gray-300 mb-4">Share API configuration with your team via Git:</p>
            <Terminal>
              <code className="text-sm sm:text-base">
                <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">git</span> add .hit/
                <br />
                <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">git</span> commit -m "Add API config"
                <br />
                <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">git</span> push
              </code>
            </Terminal>
          </div>

          <div className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Authentication</h3>
            <p className="text-gray-300 mb-4">Add authentication to your requests:</p>
            <Terminal>
              <code className="text-sm sm:text-base">
                <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">env</span> set API_TOKEN "my-secret-token"
                <br />
                <span className="text-[#9CA3AF]">✓ Set API_TOKEN in current environment</span>
              </code>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageExamplesSection;
