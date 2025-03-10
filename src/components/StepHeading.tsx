
import React from 'react';

interface StepHeadingProps {
  step: number;
}

const StepHeading: React.FC<StepHeadingProps> = ({ step }) => {
  return (
    <div className="max-w-3xl mx-auto mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {step === 1 && "Let's start with location"}
        {step === 2 && "Tell us about your symptoms"}
        {step === 3 && "Rate your symptom severity"}
      </h2>
      <p className="text-gray-600">
        {step === 1 && "Select the body region where you're experiencing symptoms."}
        {step === 2 && "Select all symptoms you're experiencing in the selected region."}
        {step === 3 && "How severe are your symptoms overall?"}
      </p>
    </div>
  );
};

export default StepHeading;
