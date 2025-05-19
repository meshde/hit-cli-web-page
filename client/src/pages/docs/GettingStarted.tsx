import React, { useEffect } from 'react';
import DocumentationLayout from '../../components/DocumentationLayout';
import Terminal from '../../components/Terminal';

const GettingStarted: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <DocumentationLayout title="Getting Started">
      <section>
        <p className="text-gray-300 leading-relaxed mb-4">
          <code>hit</code> works based on the config present in the current working directory. Specifically, the <code>.hit/config.json</code> file present in the current working directory. You can either build your config from scratch or generate one based on a swagger file.
        </p>

        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">BYOC (Build Your Own Config)</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Running <code>hit</code> in any directory would set up a basic hit config file. Follow the instructions and examples under the Usage section to add in your commands.
        </p>

        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Swagger Import</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          If you have a swagger file or any other OpenAPI spec file documenting the API endpoints on your system, then you can generate hit config to work with those endpoints by running:
        </p>
        <Terminal>
          <code className="text-sm sm:text-base">
            <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">import</span> &lt;path to swagger file&gt;
          </code>
        </Terminal>
        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          This command will generate the corresponding <code>.hit/config.json</code> file in the current working directory.
        </p>
        
        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Tip:</span> 
            The <code>.hit/</code> directory is meant to be added to git and can be shared by developers in a team.
          </p>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default GettingStarted;