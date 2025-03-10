
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((stepNumber) => (
        <React.Fragment key={stepNumber}>
          <div 
            className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 ${
              stepNumber === currentStep
                ? 'border-health-blue bg-health-blue text-white'
                : stepNumber < currentStep
                ? 'border-health-blue bg-health-blue/10 text-health-blue'
                : 'border-gray-300 bg-white text-gray-400'
            }`}
          >
            {stepNumber}
          </div>
          {stepNumber < 4 && (
            <div 
              className={`w-16 h-0.5 ${
                stepNumber < currentStep ? 'bg-health-blue' : 'bg-gray-300'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
