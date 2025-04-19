import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import InstallationSection from '@/components/InstallationSection';
import UsageExamplesSection from '@/components/UsageExamplesSection';
import ComparisonSection from '@/components/ComparisonSection';
import GetStartedSection from '@/components/GetStartedSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  // Highlight code blocks when component mounts
  useEffect(() => {
    // Access Prism from the global window object
    // Using this approach to avoid TypeScript errors with the injected Prism library
    if (typeof window !== 'undefined' && 'Prism' in window) {
      (window as any).Prism.highlightAll();
    }
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#111827] text-[#F9FAFB]">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InstallationSection />
        <UsageExamplesSection />
        <ComparisonSection />
        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
