/**
 * Website Content
 * 
 * This file contains all the text content for the landing page.
 * Edit this file to change text across the website without having to modify component files.
 */

// Hero Section Content
export const heroSection = {
  title: "API commands at your fingertips",
  subtitle: "A productivity-focused command-line API client for engineering teams that transforms repetitive API operations into shared command-line commands.",
  primaryButton: "Get Started",
  secondaryButton: "View Examples",
  docsButton: "Documentation",
  terminalExamples: [
    { command: "hit run list-users", 
      output: [
        "[",
        "  { \"id\": 1, \"name\": \"John Doe\", \"email\": \"john@example.com\" },",
        "  { \"id\": 2, \"name\": \"Jane Smith\", \"email\": \"jane@example.com\" }",
        "]"
      ]
    },
    { command: "hit run get-user --user-id 1", 
      output: ["{ \"id\": 1, \"name\": \"John Doe\", \"email\": \"john@example.com\" }"]
    },
    { command: "hit env use dev", 
      output: ["✓ Switched to dev environment"]
    }
  ]
};

// Features Section Content
export const featuresSection = {
  title: "Why engineering teams love hit",
  subtitle: "Designed for fast-moving software teams, hit replaces ad-hoc curl commands with shareable, documented API operations.",
  features: [
    {
      icon: 'Zap',
      title: 'API Commands',
      description: 'Transform complex API calls into simple team-wide command-line commands that anyone can use.'
    },
    {
      icon: 'GitBranch',
      title: 'Environment Variables',
      description: 'Easily switch between different environments (production, development, staging) with a single command.'
    },
    {
      icon: 'Terminal',
      title: 'Route Parameters',
      description: 'Use route params and query params directly from the command line without modifying config files.'
    },
    {
      icon: 'Share2',
      title: 'Team Sharing',
      description: 'Stop sharing curl commands in Slack! Encode API know-how in versioned config files that the whole team can use.'
    },
    {
      icon: 'Lock',
      title: 'Authentication Support',
      description: 'Handle authentication tokens and credentials securely across different environments.'
    },
    {
      icon: 'History',
      title: 'Response Inspection',
      description: 'Inspect full API responses including headers and status codes with the "hit last view" command.'
    }
  ]
};

// Installation Section Content
export const installationSection = {
  title: "Quick Installation",
  subtitle: "Get up and running in seconds with these simple installation methods.",
  macOsOption: {
    title: "macOS with Homebrew",
    commands: [
      "brew tap meshde/hit",
      "brew install hit"
    ],
    description: "The recommended installation method for macOS users with the Homebrew package manager."
  },
  comingSoon: {
    title: "Coming Soon",
    linux: {
      title: "Linux Support",
      description: "Linux installation support is coming soon. We're working on providing binaries and package manager integration."
    },
    windows: {
      title: "Windows Support",
      description: "Windows installation support is coming soon. We're working on providing executables and package manager integration."
    }
  },
  verifyInstallation: {
    text: "After installation, verify that hit is installed correctly:",
    command: "hit --version",
    output: "hit v1.0.0"
  }
};

// Usage Examples Section Content
export const usageExamplesSection = {
  title: "Usage Examples",
  subtitle: "See how hit reduces time spent on repetitive support operations and simplifies API workflows for your entire team.",
  tabs: {
    basic: {
      title: "Basic Commands",
      description: "Basic API Commands",
      configExample: `{
  "commands": {
    "list-users": {
      "url": "https://your.api.com/users",
      "method": "GET"
    }
  }
}`,
      commandExample: "hit run list-users",
      output: [
        "[",
        "  { \"id\": 1, \"name\": \"John Doe\", \"email\": \"john@example.com\" },",
        "  { \"id\": 2, \"name\": \"Jane Smith\", \"email\": \"jane@example.com\" }",
        "]"
      ]
    },
    params: {
      title: "Route Parameters",
      description: "Route Parameters",
      configExample: `{
  "commands": {
    "get-user": {
      "url": "https://your.api.com/users/:userId",
      "method": "GET"
    }
  }
}`,
      commandExample: "hit run get-user --user-id 47",
      output: ["{ \"id\": 47, \"name\": \"Alice Johnson\", \"email\": \"alice@example.com\" }"]
    },
    envs: {
      title: "Environments",
      description: "Environment Variables",
      configExample: `{
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
}`,
      commandExample: "hit env use dev\n\nhit run list-users",
      output: ["✓ Switched to dev environment", "// This now calls https://dev.api.com/users"]
    },
    auth: {
      title: "Sensitive Variables",
      description: "Sensitive Environment Variables",
      configExample: `{
  "commands": {
    "get-profile": {
      "url": "https://your.api.com/profile",
      "method": "GET",
      "headers": {
        "Authorization": "Bearer {{API_TOKEN}}"
      }
    }
  }
}`,
      commandExample: "hit ephenv set API_TOKEN \"my-secret-token\"\n\nhit run get-profile",
      output: ["✓ Set API_TOKEN in current environment", "{ \"id\": 123, \"name\": \"John Doe\", \"email\": \"john@example.com\", \"role\": \"admin\" }"]
    }
  },
  responsesSection: {
    title: "Inspecting Responses",
    description: "View full API responses including headers and status codes:",
    command: "hit run list-users\n\nhit last view",
    output: [
      "[...] // Response body",
      "Status: 200 OK",
      "Headers:",
      "content-type: application/json",
      "cache-control: max-age=0, private, must-revalidate",
      "Body:",
      "[...]"
    ]
  },
  teamSection: {
    title: "Team Collaboration",
    description: "Encode API know-how in version-controlled config files instead of sharing curl commands in Slack:",
    commands: [
      "git add .hit/",
      "git commit -m \"Add admin endpoints to hit config\"",
      "git push"
    ]
  },
  authSection: {
    title: "Authentication",
    description: "Add authentication to your requests:",
    command: "hit ephenv set API_TOKEN \"my-secret-token\"",
    output: ["✓ Set API_TOKEN in current environment"]
  }
};

// Get Started Section Content
export const getStartedSection = {
  title: "Ready to streamline your team's API operations?",
  subtitle: "Join fast-moving engineering teams who have reduced support time and democratized API access with hit. Configure once, share with your team, and use everywhere.",
  primaryButton: {
    text: "Install Now",
    link: "#installation"
  },
  secondaryButton: {
    text: "GitHub Repository",
    link: "https://github.com/meshde/hit-cli"
  }
};

// Footer Content
export const footerSection = {
  description: "A team-focused command-line API client that transforms admin endpoints into shareable, documented commands - no more copy-pasting curl commands in Slack.",
  socialLinks: {
    github: "https://github.com/meshde/hit-cli",
    twitter: "https://twitter.com/meshde"
  },
  quickLinks: [
    { text: "Features", link: "#features" },
    { text: "Installation", link: "#installation" },
    { text: "Usage Examples", link: "#usage" },
    { text: "Documentation", link: "/docs" }
  ],
  resources: [
    { text: "GitHub Repository", link: "https://github.com/meshde/hit-cli" },
    { text: "Release Notes", link: "https://github.com/meshde/hit-cli/releases" },
    { text: "Report Issues", link: "https://github.com/meshde/hit-cli/issues" }
  ],
  copyright: `© ${new Date().getFullYear()} hit CLI. All rights reserved.`
};

// Comparison Section Content
export const comparisonSection = {
  title: "Hit vs Postman",
  subtitle: "Why engineering teams prefer hit over Postman for API operations",
  advantages: [
    {
      title: "No Subscription Costs",
      description: "Unlimited collaborators to manage hit in your project without having to pay for any per-seat subscription.",
      icon: "DollarSign"
    },
    {
      title: "Version Controlled",
      description: "Hit is completely driven from a JSON config file that's committed to your project's git repo, allowing team sharing and peer-reviewed changes.",
      icon: "GitMerge"
    },
    {
      title: "Command-line Integration",
      description: "Combine hit commands with the plethora of command-line tools you already use in your workflow, from jq to bash scripts.",
      icon: "Terminal"
    },
    {
      title: "Post-processing Freedom",
      description: "Write post-response scripts in any language or tool installed on your machine, not just the one supported by the API client.",
      icon: "Code"
    }
  ],
  examples: [
    {
      title: "Format JSON as Tables",
      command: "hit run list-users | jq -r '.[] | [.id, .name, .email] | @tsv' | column -t",
      description: "Pipe JSON responses to jq to convert them into readable tabular format."
    },
    {
      title: "Batch Processing",
      command: "for id in 1 2 3 4 5; do hit run get-user --user-id $id; done",
      description: "Easily invoke endpoints in a loop with different parameters using simple bash scripts."
    },
    {
      title: "History Navigation",
      command: "ctrl+r",
      description: "Use your shell's reverse search to quickly find and re-run previous hit commands."
    }
  ]
};

// Header Content
export const headerSection = {
  navLinks: [
    { text: "Features", link: "#features" },
    { text: "Installation", link: "#installation" },
    { text: "Usage", link: "#usage" },
    { text: "Comparison", link: "#comparison" },
    { text: "Documentation", link: "/docs" }
  ],
  githubLink: "https://github.com/meshde/hit-cli"
};