import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import InstallationSection from '@/components/InstallationSection';
import UsageExamplesSection from '@/components/UsageExamplesSection';
import GetStartedSection from '@/components/GetStartedSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  // Highlight code blocks when component mounts
  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#111827] text-[#F9FAFB]">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InstallationSection />
        <UsageExamplesSection />
        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
