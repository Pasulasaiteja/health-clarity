
import React from 'react';
import { Check } from 'lucide-react';

// Body regions for symptom selection
const bodyRegions = [
  { id: 'head', label: 'Head & Face' },
  { id: 'chest', label: 'Chest & Heart' },
  { id: 'abdomen', label: 'Abdomen & Digestive' },
  { id: 'back', label: 'Back & Spine' },
  { id: 'limbs', label: 'Arms & Legs' },
  { id: 'skin', label: 'Skin & Hair' },
  { id: 'general', label: 'General & Systemic' },
  { id: 'mental', label: 'Mental & Cognitive' },
];

interface BodyRegionSelectorProps {
  selectedRegion: string;
  onRegionSelect: (region: string) => void;
}

const BodyRegionSelector: React.FC<BodyRegionSelectorProps> = ({
  selectedRegion,
  onRegionSelect
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-700">Select Body Region</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {bodyRegions.map((region) => (
          <button
            key={region.id}
            className={`relative h-24 rounded-md p-2 flex items-center justify-center text-center transition-all ${
              selectedRegion === region.id
                ? 'bg-health-blue text-white shadow-md'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-health-blue'
            }`}
            onClick={() => onRegionSelect(region.id)}
          >
            {selectedRegion === region.id && (
              <div className="absolute top-2 right-2">
                <Check size={16} />
              </div>
            )}
            <span className="font-medium">{region.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BodyRegionSelector;
