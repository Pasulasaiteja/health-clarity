
import React from 'react';
import { cn } from '@/lib/utils';

interface SeveritySelectorProps {
  selectedSeverity: number;
  onSeveritySelect: (severity: number) => void;
}

const SeveritySelector: React.FC<SeveritySelectorProps> = ({
  selectedSeverity,
  onSeveritySelect
}) => {
  const severityLevels = [
    { value: 1, label: 'Mild', description: 'Barely noticeable, not affecting daily activities' },
    { value: 2, label: 'Low', description: 'Noticeable but manageable, minimal impact on daily activities' },
    { value: 3, label: 'Moderate', description: 'Clear discomfort, somewhat affecting daily activities' },
    { value: 4, label: 'High', description: 'Significant discomfort, limiting daily activities' },
    { value: 5, label: 'Severe', description: 'Extreme discomfort, preventing normal activities' },
  ];

  const getColor = (level: number) => {
    if (level <= 2) return 'severity-mild';
    if (level <= 4) return 'severity-moderate';
    return 'severity-severe';
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-700">Symptom Severity</h3>
      <p className="text-sm text-gray-500">How severe are your symptoms overall?</p>
      
      <div className="space-y-3 pt-2">
        {severityLevels.map((level) => (
          <div 
            key={level.value}
            className={cn(
              "relative flex items-center p-3 rounded-md border cursor-pointer transition-all",
              selectedSeverity === level.value 
                ? `bg-${getColor(level.value)}/10 border-${getColor(level.value)}` 
                : "bg-white border-gray-200 hover:border-gray-300"
            )}
            onClick={() => onSeveritySelect(level.value)}
          >
            <div className="flex items-center gap-3">
              <div 
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
                  `bg-${getColor(level.value)}`
                )}
              >
                {level.value}
              </div>
              <div>
                <div className="font-medium">{level.label}</div>
                <div className="text-sm text-gray-500">{level.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeveritySelector;
