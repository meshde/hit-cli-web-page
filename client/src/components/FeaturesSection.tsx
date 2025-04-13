import React from 'react';
import { 
  Zap, 
  PaintBucket, 
  Terminal as TerminalIcon, 
  MonitorSmartphone, 
  Shield, 
  Package 
} from 'lucide-react';
import { features } from '@/lib/features';

const FeatureCard: React.FC<typeof features[0]> = ({ icon, title, description }) => {
  const IconComponent = (() => {
    switch(icon) {
      case 'Zap': return Zap;
      case 'PaintBucket': return PaintBucket;
      case 'Terminal': return TerminalIcon;
      case 'MonitorSmartphone': return MonitorSmartphone;
      case 'Shield': return Shield;
      case 'Package': return Package;
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
            Why developers <span className="text-[#14B8A6]">love hit</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Designed by developers for developers, hit eliminates repetitive tasks and streamlines your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
