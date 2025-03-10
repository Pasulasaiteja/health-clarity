
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BodyRegionSelector from '@/components/BodyRegionSelector';
import SymptomSelector from '@/components/SymptomSelector';
import SeveritySelector from '@/components/SeveritySelector';
import CheckerResults from '@/components/CheckerResults';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowRight, ClipboardCheck, HeartPulse, ShieldAlert } from 'lucide-react';

const Index = () => {
  const [step, setStep] = useState(1);
  const [bodyRegion, setBodyRegion] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [severity, setSeverity] = useState(1);

  const handleSymptomSelect = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom) 
        : [...prev, symptom]
    );
  };

  const handleCustomSymptomAdd = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(prev => [...prev, symptom]);
      toast({
        title: "Symptom added",
        description: `"${symptom}" has been added to your symptoms.`,
      });
    }
  };

  const handleNextStep = () => {
    if (step === 1 && !bodyRegion) {
      toast({
        title: "Please select a body region",
        description: "Select a region to continue to symptom selection.",
        variant: "destructive",
      });
      return;
    }

    if (step === 2 && selectedSymptoms.length === 0) {
      toast({
        title: "No symptoms selected",
        description: "Please select at least one symptom to continue.",
        variant: "destructive",
      });
      return;
    }

    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const resetForm = () => {
    setStep(1);
    setBodyRegion('');
    setSelectedSymptoms([]);
    setSeverity(1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <BodyRegionSelector selectedRegion={bodyRegion} onRegionSelect={setBodyRegion} />;
      case 2:
        return (
          <SymptomSelector
            bodyRegion={bodyRegion}
            selectedSymptoms={selectedSymptoms}
            onSymptomSelect={handleSymptomSelect}
            onCustomSymptomAdd={handleCustomSymptomAdd}
          />
        );
      case 3:
        return <SeveritySelector selectedSeverity={severity} onSeveritySelect={setSeverity} />;
      case 4:
        return (
          <CheckerResults
            symptoms={selectedSymptoms}
            severity={severity}
            onReset={resetForm}
          />
        );
      default:
        return null;
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3, 4].map((stepNumber) => (
          <React.Fragment key={stepNumber}>
            <div 
              className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                stepNumber === step
                  ? 'border-health-blue bg-health-blue text-white'
                  : stepNumber < step
                  ? 'border-health-blue bg-health-blue/10 text-health-blue'
                  : 'border-gray-300 bg-white text-gray-400'
              }`}
            >
              {stepNumber}
            </div>
            {stepNumber < 4 && (
              <div 
                className={`w-16 h-0.5 ${
                  stepNumber < step ? 'bg-health-blue' : 'bg-gray-300'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section for step 1 */}
        {step === 1 && (
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
        )}
        
        <div className="container mx-auto px-4 py-8">
          {step === 4 ? null : renderStepIndicator()}
          
          {step < 4 && (
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
          )}
          
          <div className="max-w-3xl mx-auto">
            <div className="health-card">
              {/* Disclaimer for medical emergencies */}
              {step < 4 && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-6 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="text-sm text-red-700">
                    <p className="font-medium">Medical Emergency?</p>
                    <p>If you're experiencing severe chest pain, difficulty breathing, severe bleeding, or other emergency symptoms, call emergency services immediately.</p>
                  </div>
                </div>
              )}
              
              {renderStepContent()}
              
              {step < 4 && (
                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <Button variant="outline" onClick={handlePrevStep}>
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  <Button onClick={handleNextStep} className="bg-health-blue text-white hover:bg-blue-700">
                    {step === 3 ? 'See Results' : 'Continue'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
