
import React from 'react';
import { Check, PlusCircle } from 'lucide-react';

// Common symptoms by body region
const symptomsByRegion: Record<string, string[]> = {
  'head': ['Headache', 'Dizziness', 'Blurred vision', 'Ear pain', 'Sinus pain', 'Facial swelling'],
  'chest': ['Chest pain', 'Shortness of breath', 'Cough', 'Heart palpitations', 'Wheezing'],
  'abdomen': ['Abdominal pain', 'Nausea', 'Vomiting', 'Diarrhea', 'Constipation', 'Bloating'],
  'back': ['Lower back pain', 'Upper back pain', 'Stiffness', 'Spine pain', 'Muscle spasms'],
  'limbs': ['Joint pain', 'Muscle pain', 'Swelling', 'Weakness', 'Numbness', 'Tingling'],
  'skin': ['Rash', 'Itching', 'Hives', 'Skin discoloration', 'Excessive sweating', 'Hair loss'],
  'general': ['Fever', 'Fatigue', 'Weight loss', 'Weight gain', 'Night sweats', 'Weakness'],
  'mental': ['Anxiety', 'Depression', 'Memory problems', 'Confusion', 'Sleep problems', 'Mood changes'],
};

interface SymptomSelectorProps {
  bodyRegion: string;
  selectedSymptoms: string[];
  onSymptomSelect: (symptom: string) => void;
  onCustomSymptomAdd: (symptom: string) => void;
}

const SymptomSelector: React.FC<SymptomSelectorProps> = ({
  bodyRegion,
  selectedSymptoms,
  onSymptomSelect,
  onCustomSymptomAdd
}) => {
  const [customSymptom, setCustomSymptom] = React.useState('');

  const handleAddCustomSymptom = () => {
    if (customSymptom.trim() !== '') {
      onCustomSymptomAdd(customSymptom.trim());
      setCustomSymptom('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddCustomSymptom();
    }
  };

  const availableSymptoms = bodyRegion ? symptomsByRegion[bodyRegion] || [] : [];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-700">Select Symptoms</h3>
      
      {/* Show symptoms for selected body region */}
      {bodyRegion && (
        <div className="grid grid-cols-2 gap-2">
          {availableSymptoms.map((symptom) => (
            <button
              key={symptom}
              className={`p-3 rounded-md text-left transition ${
                selectedSymptoms.includes(symptom)
                  ? 'bg-health-blue text-white'
                  : 'bg-white border border-gray-200 hover:border-health-blue'
              }`}
              onClick={() => onSymptomSelect(symptom)}
            >
              <div className="flex items-center">
                {selectedSymptoms.includes(symptom) && (
                  <Check size={16} className="mr-2 shrink-0" />
                )}
                <span>{symptom}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Custom symptom input */}
      <div className="pt-2">
        <p className="text-sm text-gray-500 mb-2">Don't see your symptom? Add it here:</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={customSymptom}
            onChange={(e) => setCustomSymptom(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter symptom"
            className="health-input"
          />
          <button
            className="health-button-primary flex items-center gap-1"
            onClick={handleAddCustomSymptom}
            disabled={customSymptom.trim() === ''}
          >
            <PlusCircle size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Selected symptoms */}
      {selectedSymptoms.length > 0 && (
        <div className="pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Your Selected Symptoms:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map((symptom) => (
              <div 
                key={symptom} 
                className="bg-health-light-blue text-health-blue px-3 py-1 rounded-full text-sm"
              >
                {symptom}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SymptomSelector;
