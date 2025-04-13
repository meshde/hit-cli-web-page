import React from 'react';
import { 
  Zap, 
  GitBranch, 
  Terminal as TerminalIcon, 
  Share2, 
  Lock, 
  History 
} from 'lucide-react';
import { featuresSection } from '../content';

const FeatureCard: React.FC<typeof featuresSection.features[0]> = ({ icon, title, description }) => {
  const IconComponent = (() => {
    switch(icon) {
      case 'Zap': return Zap;
      case 'GitBranch': return GitBranch;
      case 'Terminal': return TerminalIcon;
      case 'Share2': return Share2;
      case 'Lock': return Lock;
      case 'History': return History;
      default: return Zap;
    }
  })();

  return (
    <div className="bg-[#1E293B]/60 rounded-lg p-6 border border-gray-800 hover:border-[#14B8A6]/40 transition">
      <div className="w-12 h-12 flex items-center justify-center bg-[#14B8A6]/10 rounded-md mb-4">
        <IconComponent className="w-6 h-6 text-[#14B8A6]" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#111827] to-[#1E293B]/70 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#F9FAFB]">
            {featuresSection.title.split(' ').slice(0, -1).join(' ')} <span className="text-[#14B8A6]">{featuresSection.title.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {featuresSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresSection.features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
