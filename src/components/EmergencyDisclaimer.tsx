
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const EmergencyDisclaimer: React.FC = () => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-6 flex items-start gap-3">
      <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
      <div className="text-sm text-red-700">
        <p className="font-medium">Medical Emergency?</p>
        <p>If you're experiencing severe chest pain, difficulty breathing, severe bleeding, or other emergency symptoms, call emergency services immediately.</p>
      </div>
    </div>
  );
};

export default EmergencyDisclaimer;
