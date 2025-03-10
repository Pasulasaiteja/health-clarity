
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CheckerNavigationProps {
  step: number;
  onNext: () => void;
  onBack: () => void;
}

const CheckerNavigation: React.FC<CheckerNavigationProps> = ({ step, onNext, onBack }) => {
  return (
    <div className="flex justify-between mt-8">
      {step > 1 ? (
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
      ) : (
        <div></div>
      )}
      <Button onClick={onNext} className="bg-health-blue text-white hover:bg-blue-700">
        {step === 3 ? 'See Results' : 'Continue'}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default CheckerNavigation;
