
import React from 'react';
import { HeartPulse } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <HeartPulse className="h-6 w-6 text-health-blue" />
            <span className="font-bold text-xl">Health Clarity</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 hover:text-white">Terms</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-2">
            This symptom checker is for informational purposes only and is not a qualified medical opinion.
          </p>
          <p>
            If you are experiencing a medical emergency, call your local emergency number immediately.
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} Health Clarity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
