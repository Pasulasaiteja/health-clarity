
import React from 'react';
import { HeartPulse } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HeartPulse className="h-6 w-6 text-health-blue" />
          <h1 className="font-bold text-xl text-gray-800">Health Clarity</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#" className="text-gray-600 hover:text-health-blue">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-health-blue">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-health-blue">Resources</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
