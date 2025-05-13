import React, { useEffect } from 'react';
import { Github } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Terminal from '../components/Terminal';
import CodeBlock from '../components/CodeBlock';

// Custom styles for code elements
const codeStyle = {
  backgroundColor: '#1a2033',
  padding: '0.2rem 0.4rem',
  borderRadius: '0.25rem',
  fontFamily: 'monospace',
  fontSize: '0.875rem',
  color: '#14B8A6',
  whiteSpace: 'nowrap',
};

const Documentation: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Apply styles to all code elements
    const codeElements = document.querySelectorAll('code');
    codeElements.forEach(el => {
      Object.assign(el.style, codeStyle);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#111827] text-[#F9FAFB]">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Table of Contents Sidebar */}
          <div className="md:w-1/4 lg:w-1/5">
            <div className="sticky top-24 bg-[#1E293B] rounded-lg p-5 shadow-lg">
              <h3 className="text-xl font-bold text-[#14B8A6] mb-4">Table of Contents</h3>
              <nav className="space-y-1">
                <a href="#introduction" className="block py-2 px-3 text-gray-300 hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors">Introduction</a>
                <a href="#installation" className="block py-2 px-3 text-gray-300 hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors">Installation</a>
                <a href="#getting-started" className="block py-2 px-3 text-gray-300 hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors">Getting Started</a>
                <a href="#usage" className="block py-2 px-3 font-medium text-gray-300 hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors">Usage</a>
                <div className="pl-4 space-y-1 mt-1 border-l border-[#374151]">
                  <a href="#route-params" className="block py-1.5 px-3 text-sm text-gray-400 hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors">Route Parameters</a>
                  <a href="#environment-variables" className="block py-1.5 px-3 text-sm text-gray-400 hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors">Environment Variables</a>
                  <a href="#ephemeral-environment-variables" className="block py-1.5 px-3 text-sm text-gray-400 hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors">Ephemeral Environment Variables</a>
                  <a href="#request-headers" className="block py-1.5 px-3 text-sm text-gray-400 hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors">Request Headers</a>
                  <a href="#nested-subcommands" className="block py-1.5 px-3 text-sm text-gray-400 hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors">Nested Sub-Commands</a>
                  <a href="#inspecting-response" className="block py-1.5 px-3 text-sm text-gray-400 hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors">Inspecting the Response</a>
                  <a href="#postscripts" className="block py-1.5 px-3 text-sm text-gray-400 hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors">Postscripts</a>
                </div>
              </nav>
              <div className="mt-6 pt-4 border-t border-[#374151]">
                <a href="/" className="flex items-center text-[#14B8A6] hover:text-[#6EE7B7] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </a>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4 lg:w-4/5 prose prose-invert prose-lg max-w-3xl">
              <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#14B8A6] to-purple-500 text-transparent bg-clip-text">Hit CLI Documentation</h1>
              <p className="mt-4 text-xl text-gray-300">Everything you need to know to use the Hit CLI effectively</p>
              <div className="mt-8 flex justify-center">
                <a 
                  href="https://github.com/meshde/hit-cli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-[#1E293B] rounded-md text-gray-300 hover:bg-[#2D3748] transition-colors"
                >
                  <Github className="mr-2 h-5 w-5" />
                  <span>View on GitHub</span>
                </a>
              </div>
          </div>

          <section id="introduction">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mt-16 mb-6">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                <code>hit</code> is a productivity-focused command-line API client that converts individual API endpoints into command-line commands. It enables fast-moving engineering teams to easily share and standardize API interactions.
              </p>
          </section>

          <section id="installation">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mt-16 mb-6">Installation</h2>
              
              <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">macOS</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <code>hit</code> can be installed using Homebrew:
              </p>
              <Terminal>
                <p>brew tap meshde/hit</p>
                <p>brew install hit</p>
              </Terminal>

              <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Linux</h3>
              <p className="text-gray-300 leading-relaxed">
                Support coming soon!
              </p>

              <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Windows</h3>
              <p className="text-gray-300 leading-relaxed">
                Support coming soon!
              </p>
          </section>

          <section id="getting-started">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mt-16 mb-6">Getting Started</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <code>hit</code> works based on the config present in the current working directory. Specifically, the <code>.hit/config.json</code> file present in the current working directory. You can either build your config from scratch or generate one based on a swagger file.
              </p>

              <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">BYOC (Build Your Own Config)</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Running <code>hit</code> in any directory would set up a basic hit config file. Follow the instructions and examples under the Usage section below to add in your commands.
              </p>

              <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Swagger Import</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have a swagger file or any other OpenAPI spec file documenting the API endpoints on your system, then you can generate hit config to work with those endpoints by running:
              </p>
              <Terminal>
                <p>hit import &lt;path to swagger file&gt;</p>
              </Terminal>
              <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                This command will generate the corresponding <code>.hit/config.json</code> file in the current working directory.
              </p>
          </section>

          <section id="usage">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mt-16 mb-6">Usage</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <code>hit</code> works based on the config present in the current working directory. Specifically, the <code>.hit/config.json</code> file present in the current working directory. The contents of the config define what commands are available to run.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For example, if the config looks something like:
              </p>
              
              <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"https://your.api.com/users\",\n" +
"        \"method\": \"GET\"\n" +
"    }\n" +
"  }\n" +
"}"} />

              <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                Then this API call can be made like so:
              </p>

              <Terminal>
                <p>hit run list-users</p>
              </Terminal>

              <div className="p-4 bg-[#1E293B] rounded-md mt-6 mb-6">
                <p className="text-gray-300 font-medium">
                  <span className="text-[#14B8A6] font-bold mr-2">Tip:</span> 
                  The <code>.hit/</code> directory is meant to be added to git and can be shared by developers in a team.
                </p>
              </div>
          </section>

          <section id="route-params">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mt-16 mb-6">Route Parameters</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                API endpoint routes often include variables. For example, an endpoint to retrieve a single user would include the id of the user to be retrieved in the route. <code>hit</code> lets you define these variables in your configuration.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Variables can be denoted by prefixing them with colon <code>:</code>. If the URL in the config has <code>:userId</code>, then <code>userId</code> would be a variable.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For example, the route to retrieve a user can be added to our previous config like so:
              </p>

              <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"https://your.api.com/users\",\n" +
"        \"method\": \"GET\"\n" +
"    },\n" +
"    \"get-user\": {\n" +
"        \"url\": \"https://your.api.com/users/:userId\",\n" +
"        \"method\": \"GET\"\n" +
"    }\n" +
"  }\n" +
"}"} />

              <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                And this can be invoked as follows to retrieve user with id <code>47</code>:
              </p>

              <Terminal>
                <p>hit run get-user --user-id 47</p>
              </Terminal>

              <p className="text-gray-300 leading-relaxed mt-6 mb-4">
                Something similar can be done if the user id were to be passed in the query params instead of route params:
              </p>

              <CodeBlock language="json" code={
"\"get-user\": {\n" +
"    \"url\": \"https://your.api.com/users?id=:userId\",\n" +
"    \"method\": \"GET\"\n" +
"}"} />

              <Terminal>
                <p>hit run get-user --user-id 47</p>
              </Terminal>
          </section>

          <section id="environment-variables">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mt-16 mb-6">Environment Variables</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Most software development setups have multiple environments where their APIs are deployed (production, staging, development, etc.). <code>hit</code> has the ability to define and use a set of variables that can have different values based on the currently active environment.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Environment variables can be used in the config by enclosing them in double curly braces (<code>&#123;&#123;</code> <code>&#125;&#125;</code>) and can be defined in the config under the top level field <code>envs</code>.
              </p>

              <CodeBlock language="json" code={
"{\n" +
"  \"envs\": {\n" +
"    \"prod\": {\n" +
"      \"API_URL\": \"https://prod.api.com\"\n" +
"    },\n" +
"    \"dev\": {\n" +
"      \"API_URL\": \"https://dev.api.com\"\n" +
"    }\n" +
"  },\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"{{API_URL}}/users\",\n" +
"        \"method\": \"GET\"\n" +
"    },\n" +
"    \"get-user\": {\n" +
"        \"url\": \"{{API_URL}}/users/:userId\",\n" +
"        \"method\": \"GET\"\n" +
"    }\n" +
"  }\n" +
"}"} />

              <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                An environment can be activated by running the command:
              </p>

              <Terminal>
                <p>hit env use &lt;env_name&gt;</p>
              </Terminal>

              <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                In the above example config, if the <code>prod</code> env is activated then all <code>run</code> commands using <code>&#123;&#123;API_URL&#125;&#125;</code> would use <code>https://prod.api.com</code> as the value for the variable.
              </p>

              <div className="p-4 bg-[#1E293B] rounded-md mt-6 mb-6">
                <p className="text-gray-300 font-medium">
                  <span className="text-[#14B8A6] font-bold mr-2">Note:</span> 
                  The config file is meant to be committed to git and shared in a development team. The values for the environment variables would then also be automatically shared.
                </p>
              </div>
          </section>

          <section id="ephemeral-environment-variables">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mt-16 mb-6">Ephemeral Environment Variables</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Environment variables discussed above are good for nearly-static variables that don't change often and would be good to share in the team. But there might be variables in a workflow that are meant to be kept secret.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Good examples of such variables are access tokens and API keys. For such variables, <code>hit</code> has support for "Ephemeral Environment Variables" or <code>ephenv</code>s.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <code>ephenv</code>s can be set from the <code>hit</code> CLI directly as opposed to in the config. <code>hit</code> stores these values in app settings on the local machine, so these values don't show up in the config and are not shareable.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Here's an example of setting an API key:
              </p>

              <Terminal>
                <p>hit ephenv set API_KEY secret_value_abcd_123</p>
              </Terminal>

              <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                Such variables can then be used in the config similar to how environment variables are used by enclosing in double curly braces. For example:
              </p>

              <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"{{API_URL}}/users?api_key={{API_KEY}}\",\n" +
"        \"method\": \"GET\"\n" +
"    }\n" +
"  }\n" +
"}"} />
          </section>

          <section id="request-headers">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mt-16 mb-6">Request Headers</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <code>hit</code> config allows you to provide the request headers that would need to be sent with each API call. The value of each header supports all kinds of variables:
              </p>
              <ol className="list-decimal pl-6 text-gray-300 leading-relaxed mb-4 space-y-2">
                <li>Variables representing command-line options that start with <code>:</code> (see section on Route Parameters).</li>
                <li>Environment variables enclosed in double curly braces.</li>
                <li>Ephemeral environment variables enclosed in double curly braces.</li>
              </ol>
              <p className="text-gray-300 leading-relaxed mb-4">
                For example, with the config:
              </p>

              <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"{{API_URL}}/users\",\n" +
"        \"method\": \"GET\",\n" +
"        \"headers\": {\n" +
"          \"X-Authorization-Key\": \"{{API_KEY}}\",\n" +
"          \"Origin\": \"{{API_URL}}\",\n" +
"          \"X-Request-Id\": \":customRequestId\"\n" +
"        }\n" +
"    }\n" +
"  }\n" +
"}"} />

              <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                The headers used when invoking command <code>list-users</code> would:
              </p>
              <ol className="list-decimal pl-6 text-gray-300 leading-relaxed mb-4 space-y-2">
                <li>Expect a command-line option <code>--custom-request-id</code> for the value of the header <code>X-Request-Id</code>.</li>
                <li>Use the value of <code>&#123;&#123;API_URL&#125;&#125;</code> from the active environment.</li>
                <li>Use the value of <code>&#123;&#123;API_KEY&#125;&#125;</code> from what was set in the app settings using the <code>hit ephenv set</code> command.</li>
              </ol>
          </section>

          <section id="nested-subcommands">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mt-16 mb-6">Nested Sub-Commands</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As the number of API endpoints increase, our list of commands would also increase and it might get cluttered. To add structure to the config file, <code>hit</code> config supports organizing commands into nested sub-commands.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                What this means is that instead of having to maintain commands like <code>get-user</code>, <code>list-users</code>, <code>delete-user</code>, <code>create-user</code>, we can organize the config to have a high level <code>users</code> command with the corresponding sub-commands as <code>get</code>, <code>list</code>, <code>delete</code>, <code>create</code>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The config supports arbitrary level of nesting. For example, with a config like:
              </p>

              <CodeBlock language="json" code={
"{\n" +
"  \"envs\": {\n" +
"    \"prod\": {\n" +
"      \"API_URL\": \"https://prod.api.com\"\n" +
"    },\n" +
"    \"dev\": {\n" +
"      \"API_URL\": \"https://dev.api.com\"\n" +
"    }\n" +
"  },\n" +
"  \"commands\": {\n" +
"    \"users\": {\n" +
"      \"list\": {\n" +
"          \"url\": \"{{API_URL}}/users\",\n" +
"          \"method\": \"GET\"\n" +
"      },\n" +
"      \"get\": {\n" +
"          \"url\": \"{{API_URL}}/users/:userId\",\n" +
"          \"method\": \"GET\"\n" +
"      }\n" +
"    }\n" +
"  }\n" +
"}"} />

              <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                The available commands would be:
              </p>

              <Terminal>
                <p>hit run users list</p>
                <p>hit run users get --user-id 47</p>
              </Terminal>
          </section>

          <section id="inspecting-response">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mt-16 mb-6">Inspecting the Response of an API Call</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Normally, running a command would simply output the body of the response of the API call being made. If you would like to inspect the entire response including the status code and response headers, this can be done by running the command:
              </p>

              <Terminal>
                <p>hit last view</p>
              </Terminal>
          </section>

          <section id="postscripts">
              <h2 className="text-3xl font-bold text-[#F9FAFB] mt-16 mb-6">Postscripts</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Postscripts allow you to run any script using the response of a particular API call. The script can be in any language/runtime that is supported on your machine. This can be useful if you want to perform any kind of action using the response of an API call.
              </p>
              
              <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Common Use Cases</h3>
              
              <ul className="list-disc pl-6 text-gray-300 leading-relaxed mb-4 space-y-3">
                <li>
                  <span className="text-[#14B8A6] font-medium">Authentication token storage:</span> Store an API token obtained from an authentication endpoint. Using postscripts, the token in the response can be stored in the ephenv for other commands to use in authentication headers.
                </li>
                <li>
                  <span className="text-[#14B8A6] font-medium">Response formatting:</span> Format the response of a particular command in a specific way. For example, an endpoint returns an array of objects and you want to display it in tabular format.
                </li>
                <li>
                  <span className="text-[#14B8A6] font-medium">Command chaining:</span> Chain multiple commands together. From the response of command A, extract the necessary fields that command B needs as input and invoke command B.
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Configuring Postscripts</h3>
              <ol className="list-decimal pl-6 text-gray-300 leading-relaxed mb-4 space-y-3">
                <li>
                  All postscripts can be defined under the <code>postscripts</code> directory under the <code>.hit</code> directory. For example, if you have a script named <code>store_token.sh</code>, this would be at the path <code>.hit/postscripts/store_token.sh</code>
                </li>
                <li>
                  Which postscript to invoke after a particular command can be configured in the <code>postscript</code> field in that particular command's config. The <code>postscript</code> field has the following sub-fields:
                  <ul className="list-disc pl-6 mt-2 mb-2 space-y-1">
                    <li><code>command</code>: This field specifies the run-time needed to invoke the script. This could be <code>bash</code> or <code>python</code> or <code>node</code> and so on.</li>
                    <li><code>file</code>: This is the name of the file relative to the <code>postscripts</code> directory that needs to be invoked.</li>
                  </ul>
                </li>
              </ol>

              <p className="text-gray-300 leading-relaxed mb-4">
                For example, with a config like so:
              </p>

              <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"login\": {\n" +
"      \"url\": \"https://authenticate.com/login\",\n" +
"      \"method\": \"POST\",\n" +
"      \"body\": {\n" +
"        \"user\": \":user\",\n" +
"        \"pass\": \":pass\"\n" +
"      },\n" +
"      \"postscript\": {\n" +
"        \"command\": \"bash\",\n" +
"        \"file\": \"set_token.sh\"\n" +
"      }\n" +
"    }\n" +
"  }\n" +
"}"} />

              <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                And a postscript file <code>postscripts/set_token.sh</code> with contents like:
              </p>

              <CodeBlock language="bash" code={
"hit ephenv set API_TOKEN $(cat $HIT_RESPONSE_PATH)"} />

              <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                Assuming the response of the login call would just be the API token as a string, running <code>hit run login --user username --password abcd1234</code> would fetch the token from the API endpoint and store it in the ephenv <code>API_TOKEN</code> for the rest of the hit commands to be able to use.
              </p>
          </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;