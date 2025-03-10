
import React from 'react';
import { ClipboardCheck, ShieldAlert, HeartPulse } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-health-blue to-blue-700 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Understand Your Health Symptoms
        </h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Identify potential health conditions and get personalized recommendations based on your symptoms.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5" />
            <span>Simple guided process</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5" />
            <span>Personalized insights</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5" />
            <span>Evidence-based results</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
