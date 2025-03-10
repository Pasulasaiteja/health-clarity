import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, ExternalLink, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Condition {
  name: string;
  likelihood: string;
  severity: 'mild' | 'moderate' | 'severe';
  description: string;
}

interface Recommendation {
  type: 'self-care' | 'doctor' | 'emergency';
  title: string;
  description: string;
}

interface CheckerResultsProps {
  symptoms: string[];
  severity: number;
  onReset: () => void;
}

const CheckerResults: React.FC<CheckerResultsProps> = ({
  symptoms,
  severity,
  onReset
}) => {
  // This would normally come from an API or more sophisticated algorithm
  // For demo purposes, we're generating sample conditions based on symptoms and severity
  const conditions: Condition[] = React.useMemo(() => {
    // Very simplified logic for demonstration
    let possibleConditions: Condition[] = [];
    
    // Add some sample conditions based on symptoms
    if (symptoms.includes('Headache')) {
      possibleConditions.push({
        name: 'Tension Headache',
        likelihood: 'Likely',
        severity: 'mild',
        description: 'Common headache with mild to moderate pain, often described as feeling like a tight band around the head.'
      });
      
      if (severity > 3) {
        possibleConditions.push({
          name: 'Migraine',
          likelihood: 'Possible',
          severity: 'moderate',
          description: 'Recurring headache, moderate to severe, often with nausea and sensitivity to light and sound.'
        });
      }
      
      if (severity > 4) {
        possibleConditions.push({
          name: 'Meningitis',
          likelihood: 'Low',
          severity: 'severe',
          description: 'Inflammation of the membranes surrounding the brain and spinal cord. Requires immediate medical attention.'
        });
      }
    }

    if (symptoms.includes('Fever')) {
      possibleConditions.push({
        name: 'Common Cold',
        likelihood: 'Likely',
        severity: 'mild',
        description: 'Viral infection causing sore throat, runny nose, congestion, and cough.'
      });
      
      possibleConditions.push({
        name: 'Influenza',
        likelihood: 'Possible',
        severity: 'moderate',
        description: 'Viral infection with fever, body aches, fatigue, and respiratory symptoms.'
      });
    }

    if (symptoms.includes('Chest pain')) {
      possibleConditions.push({
        name: 'Anxiety',
        likelihood: 'Possible',
        severity: 'mild',
        description: 'May cause chest tightness, rapid heartbeat, and shortness of breath.'
      });
      
      if (severity > 3) {
        possibleConditions.push({
          name: 'Angina',
          likelihood: 'Possible',
          severity: 'moderate',
          description: 'Reduced blood flow to the heart muscle causing chest pain or discomfort.'
        });
        
        possibleConditions.push({
          name: 'Heart Attack',
          likelihood: 'Consider',
          severity: 'severe',
          description: 'Medical emergency caused by blocked blood flow to the heart. Seek immediate medical attention.'
        });
      }
    }

    if (symptoms.includes('Abdominal pain')) {
      possibleConditions.push({
        name: 'Indigestion',
        likelihood: 'Likely',
        severity: 'mild',
        description: 'Discomfort in the upper abdomen, often after eating.'
      });
      
      if (severity > 2) {
        possibleConditions.push({
          name: 'Gastritis',
          likelihood: 'Possible',
          severity: 'moderate',
          description: 'Inflammation of the stomach lining causing pain, nausea, and vomiting.'
        });
      }
      
      if (severity > 4) {
        possibleConditions.push({
          name: 'Appendicitis',
          likelihood: 'Consider',
          severity: 'severe',
          description: 'Inflammation of the appendix, usually causing pain in the lower right abdomen.'
        });
      }
    }
    
    // If we don't have any specific conditions, add a generic one
    if (possibleConditions.length === 0) {
      possibleConditions.push({
        name: 'Non-specific symptoms',
        likelihood: 'Unknown',
        severity: severity > 3 ? 'moderate' : 'mild',
        description: 'Your symptoms could be related to various conditions. Consider monitoring your symptoms and consulting with a healthcare provider if they persist or worsen.'
      });
    }
    
    return possibleConditions;
  }, [symptoms, severity]);

  // Generate recommendations based on severity and conditions
  const recommendations: Recommendation[] = React.useMemo(() => {
    const result: Recommendation[] = [];
    
    const hasSevereCondition = conditions.some(c => c.severity === 'severe');
    const hasModerateCondition = conditions.some(c => c.severity === 'moderate');
    
    if (hasSevereCondition || severity > 4) {
      result.push({
        type: 'emergency',
        title: 'Seek immediate medical attention',
        description: 'Your symptoms indicate a potentially serious condition that requires prompt medical evaluation. Consider visiting an emergency room or calling emergency services.'
      });
    } else if (hasModerateCondition || severity > 2) {
      result.push({
        type: 'doctor',
        title: 'Consult with a healthcare provider',
        description: 'Your symptoms suggest you should speak with a doctor. Schedule an appointment with your primary care provider within the next few days.'
      });
    } else {
      result.push({
        type: 'self-care',
        title: 'Self-care may be appropriate',
        description: "Your symptoms appear to be mild. Rest, hydration, and over-the-counter medications may help. Monitor your symptoms and seek medical care if they worsen or don't improve within a few days."
      });
    }
    
    return result;
  }, [conditions, severity]);

  const getRecommendationIcon = (type: Recommendation['type']) => {
    switch (type) {
      case 'emergency':
        return <AlertCircle className="h-6 w-6 text-red-500" />;
      case 'doctor':
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case 'self-care':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
    }
  };

  const getSeverityBadge = (severity: Condition['severity']) => {
    switch (severity) {
      case 'mild':
        return <span className="health-badge-mild">Mild</span>;
      case 'moderate':
        return <span className="health-badge-moderate">Moderate</span>;
      case 'severe':
        return <span className="health-badge-severe">Severe</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Analysis Results</h2>
        <Button variant="outline" onClick={onReset}>Start Over</Button>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start gap-3">
        <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
        <div className="text-sm text-blue-700">
          <p className="font-medium">Important Disclaimer</p>
          <p>This symptom checker provides general information only and is not a substitute for professional medical advice. Always consult with a healthcare provider for medical concerns.</p>
        </div>
      </div>
      
      {/* Possible conditions */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-700">Possible Conditions</h3>
        <div className="grid gap-3">
          {conditions.map((condition, index) => (
            <div key={index} className="health-card">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-800">{condition.name}</h4>
                  <div className="flex items-center gap-2 mt-1 mb-2">
                    {getSeverityBadge(condition.severity)}
                    <span className="text-sm text-gray-500">{condition.likelihood}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">{condition.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recommendations */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-700">Recommendations</h3>
        <div className="grid gap-3">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="health-card">
              <div className="flex gap-3">
                {getRecommendationIcon(recommendation.type)}
                <div>
                  <h4 className="font-medium text-gray-800">{recommendation.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{recommendation.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Further resources */}
      <div className="health-card mt-4">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Additional Resources</h3>
        <ul className="space-y-2">
          <li>
            <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer" className="text-health-blue hover:underline flex items-center gap-1">
              <span>Centers for Disease Control and Prevention</span>
              <ExternalLink size={14} />
            </a>
          </li>
          <li>
            <a href="https://www.mayoclinic.org/" target="_blank" rel="noopener noreferrer" className="text-health-blue hover:underline flex items-center gap-1">
              <span>Mayo Clinic - Health Information</span>
              <ExternalLink size={14} />
            </a>
          </li>
          <li>
            <a href="https://medlineplus.gov/" target="_blank" rel="noopener noreferrer" className="text-health-blue hover:underline flex items-center gap-1">
              <span>MedlinePlus - Health Information</span>
              <ExternalLink size={14} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckerResults;
