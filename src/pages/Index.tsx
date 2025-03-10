
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BodyRegionSelector from '@/components/BodyRegionSelector';
import SymptomSelector from '@/components/SymptomSelector';
import SeveritySelector from '@/components/SeveritySelector';
import CheckerResults from '@/components/CheckerResults';
import HeroSection from '@/components/HeroSection';
import StepIndicator from '@/components/StepIndicator';
import EmergencyDisclaimer from '@/components/EmergencyDisclaimer';
import CheckerNavigation from '@/components/CheckerNavigation';
import StepHeading from '@/components/StepHeading';
import ChatBotButton from '@/components/ChatBotButton';

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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section for step 1 */}
        {step === 1 && <HeroSection />}
        
        <div className="container mx-auto px-4 py-8">
          {step === 4 ? null : <StepIndicator currentStep={step} />}
          
          {step < 4 && <StepHeading step={step} />}
          
          <div className="max-w-3xl mx-auto">
            <div className="health-card">
              {/* Disclaimer for medical emergencies */}
              {step < 4 && <EmergencyDisclaimer />}
              
              {renderStepContent()}
              
              {step < 4 && (
                <CheckerNavigation 
                  step={step} 
                  onNext={handleNextStep} 
                  onBack={handlePrevStep} 
                />
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* ChatBot Button */}
      <ChatBotButton />
    </div>
  );
};

export default Index;
