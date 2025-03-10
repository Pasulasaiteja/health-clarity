
interface Illness {
  name: string;
  symptoms: string[];
  description?: string;
  severity?: 'mild' | 'moderate' | 'severe';
}

export const illnesses: Illness[] = [
  {
    name: "Common Cold",
    symptoms: ["Runny nose", "Sneezing", "Sore throat", "Mild fever", "Cough"],
    description: "A viral infection of the upper respiratory tract that is usually harmless.",
    severity: "mild"
  },
  {
    name: "Flu (Influenza)",
    symptoms: ["High fever", "Chills", "Body aches", "Fatigue", "Cough", "Sore throat"],
    description: "A contagious respiratory illness caused by influenza viruses.",
    severity: "moderate"
  },
  {
    name: "Ear Infections",
    symptoms: ["Ear pain", "Fever", "Trouble hearing", "Irritability"],
    description: "Infection affecting the middle ear, often caused by bacteria or viruses.",
    severity: "moderate"
  },
  {
    name: "Hand, Foot, and Mouth Disease (HFMD)",
    symptoms: ["Fever", "Mouth sores", "Skin rash on hands/feet"],
    description: "A common viral infection affecting primarily children.",
    severity: "mild"
  },
  {
    name: "Chickenpox",
    symptoms: ["Itchy red spots", "Blisters", "Fever", "Fatigue"],
    description: "A highly contagious viral infection causing an itchy rash with fluid-filled blisters.",
    severity: "moderate"
  },
  {
    name: "Measles",
    symptoms: ["High fever", "Cough", "Runny nose", "Red rash", "Watery eyes"],
    description: "A highly contagious viral disease that can be serious or even fatal for small children.",
    severity: "severe"
  },
  {
    name: "Mumps",
    symptoms: ["Swollen salivary glands", "Fever", "Headache", "Muscle aches"],
    description: "A viral infection that primarily affects saliva-producing glands.",
    severity: "moderate"
  },
  {
    name: "Diarrhea",
    symptoms: ["Loose watery stools", "Abdominal cramps", "Dehydration"],
    description: "A condition characterized by loose, watery stools and can be caused by various factors.",
    severity: "mild"
  },
  {
    name: "Tonsillitis",
    symptoms: ["Sore throat", "Difficulty swallowing", "Fever", "Swollen tonsils"],
    description: "Inflammation of the tonsils, typically caused by viral or bacterial infection.",
    severity: "moderate"
  },
  {
    name: "Bronchiolitis",
    symptoms: ["Wheezing", "Cough", "Difficulty breathing", "Fever"],
    description: "A common lung infection in infants and young children caused by a virus.",
    severity: "moderate"
  },
  {
    name: "Asthma",
    symptoms: ["Wheezing", "Shortness of breath", "Coughing", "Chest tightness"],
    description: "A condition in which airways narrow and swell, producing extra mucus.",
    severity: "moderate"
  },
  {
    name: "Strep Throat",
    symptoms: ["Severe sore throat", "Fever", "Swollen lymph nodes", "White patches on tonsils"],
    description: "A bacterial infection that can cause a sore throat and fever.",
    severity: "moderate"
  },
  {
    name: "Allergies",
    symptoms: ["Sneezing", "Runny nose", "Itchy eyes", "Skin rash", "Breathing issues"],
    description: "An immune system response to a substance that's not typically harmful.",
    severity: "mild"
  },
  {
    name: "Sinusitis",
    symptoms: ["Facial pain", "Nasal congestion", "Headache", "Thick nasal mucus"],
    description: "Inflammation of the sinuses, often due to infection.",
    severity: "mild"
  },
  {
    name: "Migraine",
    symptoms: ["Severe headache", "Nausea", "Light sensitivity", "Sound sensitivity"],
    description: "A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.",
    severity: "moderate"
  },
  {
    name: "Appendicitis",
    symptoms: ["Sudden severe abdominal pain", "Fever", "Nausea", "Vomiting"],
    description: "Inflammation of the appendix that can quickly become a medical emergency.",
    severity: "severe"
  },
  {
    name: "Mononucleosis (Mono)",
    symptoms: ["Extreme fatigue", "Swollen lymph nodes", "Sore throat", "Fever"],
    description: "A viral infection causing fever, sore throat, and swollen lymph glands.",
    severity: "moderate"
  },
  {
    name: "Skin Infections",
    symptoms: ["Redness", "Swelling", "Pus-filled bumps", "Itching", "Pain"],
    description: "Various infections affecting the skin caused by bacteria, viruses, or fungi.",
    severity: "moderate"
  },
  {
    name: "Obesity",
    symptoms: ["Weight gain", "Difficulty in physical activity", "Increased risk of diabetes", "Increased risk of hypertension"],
    description: "A medical condition characterized by excessive body fat that increases health risks.",
    severity: "moderate"
  },
  {
    name: "Gastroenteritis (Stomach Flu)",
    symptoms: ["Nausea", "Vomiting", "Diarrhea", "Stomach cramps", "Fever"],
    description: "Inflammation of the stomach and intestines, typically caused by a virus or bacteria.",
    severity: "moderate"
  },
  {
    name: "Anxiety",
    symptoms: ["Excessive worry", "Restlessness", "Rapid heartbeat", "Difficulty sleeping"],
    description: "A mental health disorder characterized by feelings of worry or fear that are strong enough to interfere with daily activities.",
    severity: "moderate"
  },
  {
    name: "Depression",
    symptoms: ["Persistent sadness", "Fatigue", "Loss of interest", "Sleep issues"],
    description: "A mood disorder causing a persistent feeling of sadness and loss of interest.",
    severity: "moderate"
  },
  {
    name: "ADHD",
    symptoms: ["Inattention", "Hyperactivity", "Impulsiveness", "Trouble focusing"],
    description: "A chronic condition including attention difficulty, hyperactivity, and impulsiveness.",
    severity: "moderate"
  },
  {
    name: "Urinary Tract Infection (UTI)",
    symptoms: ["Painful urination", "Frequent urge to urinate", "Lower abdominal pain"],
    description: "An infection in any part of the urinary system, including kidneys, bladder, ureters, and urethra.",
    severity: "moderate"
  },
  {
    name: "Sexually Transmitted Infections (STIs)",
    symptoms: ["Genital sores", "Itching", "Discharge", "Pain during urination"],
    description: "Infections that are passed from one person to another through sexual contact.",
    severity: "moderate"
  },
  {
    name: "Polycystic Ovary Syndrome (PCOS)",
    symptoms: ["Irregular periods", "Acne", "Weight gain", "Excessive hair growth"],
    description: "A hormonal disorder common among women of reproductive age.",
    severity: "moderate"
  },
  {
    name: "GERD (Acid Reflux)",
    symptoms: ["Heartburn", "Regurgitation", "Chest pain", "Difficulty swallowing"],
    description: "A digestive disorder that affects the ring of muscle between the esophagus and stomach.",
    severity: "mild"
  },
  {
    name: "Hypertension (High Blood Pressure)",
    symptoms: ["Headaches", "Dizziness", "Often no symptoms"],
    description: "A common condition in which the long-term force of the blood against the artery walls is high enough to cause health problems.",
    severity: "moderate"
  },
  {
    name: "Diabetes (Type 1 & Type 2)",
    symptoms: ["Frequent urination", "Extreme thirst", "Fatigue", "Unexplained weight loss"],
    description: "A group of diseases that result in too much sugar in the blood (high blood glucose).",
    severity: "moderate"
  },
  {
    name: "Autoimmune Diseases",
    symptoms: ["Joint pain", "Fatigue", "Skin rashes", "Organ inflammation"],
    description: "Conditions in which your immune system mistakenly attacks your body, including diseases like Lupus and Rheumatoid Arthritis.",
    severity: "moderate"
  }
];

// Function to search for illnesses based on symptoms
export function findIllnessesBySymptoms(userSymptoms: string[]): Illness[] {
  // Normalize user symptoms (to lowercase for case-insensitive matching)
  const normalizedUserSymptoms = userSymptoms.map(s => s.toLowerCase());
  
  // Map to store illnesses and their matching symptom count
  const illnessMatches: { illness: Illness; matchCount: number }[] = [];
  
  // Check each illness for matching symptoms
  illnesses.forEach(illness => {
    // Normalize illness symptoms
    const normalizedIllnessSymptoms = illness.symptoms.map(s => s.toLowerCase());
    
    // Count how many of the user's symptoms match this illness
    let matchCount = 0;
    
    normalizedUserSymptoms.forEach(userSymptom => {
      if (normalizedIllnessSymptoms.some(illnessSymptom => 
        illnessSymptom.includes(userSymptom) || userSymptom.includes(illnessSymptom)
      )) {
        matchCount++;
      }
    });
    
    // If at least two symptoms match or all symptoms match for illnesses with fewer symptoms
    if (matchCount >= 2 || (matchCount > 0 && matchCount >= normalizedUserSymptoms.length)) {
      illnessMatches.push({ illness, matchCount });
    }
  });
  
  // Sort by number of matching symptoms (most matches first)
  illnessMatches.sort((a, b) => b.matchCount - a.matchCount);
  
  // Return just the illnesses in order of relevance
  return illnessMatches.map(match => match.illness);
}

// Function to extract symptoms from user message
export function extractSymptomsFromMessage(message: string): string[] {
  // Create a flat array of all symptoms from all illnesses
  const allSymptoms = illnesses.flatMap(illness => illness.symptoms);
  
  // Remove duplicates
  const uniqueSymptoms = [...new Set(allSymptoms)];
  
  // Convert message to lowercase for case-insensitive matching
  const lowerCaseMessage = message.toLowerCase();
  
  // Find symptoms mentioned in the message with better partial matching
  const foundSymptoms: string[] = [];
  
  uniqueSymptoms.forEach(symptom => {
    const normalizedSymptom = symptom.toLowerCase();
    
    // Check for exact matches
    if (lowerCaseMessage.includes(normalizedSymptom)) {
      foundSymptoms.push(symptom);
      return;
    }
    
    // Check for common variations
    const wordVariations = normalizedSymptom.split(" ");
    if (wordVariations.length > 1) {
      // For multi-word symptoms, check if most words are present
      const matchingWords = wordVariations.filter(word => 
        word.length > 3 && lowerCaseMessage.includes(word)
      );
      
      if (matchingWords.length >= Math.ceil(wordVariations.length / 2)) {
        foundSymptoms.push(symptom);
      }
    }
  });
  
  return foundSymptoms;
}

// Function to get general health advice
export function getGeneralHealthAdvice(): string[] {
  return [
    "Remember to stay hydrated by drinking plenty of water throughout the day.",
    "Regular physical activity can help improve your overall health and mood.",
    "Aim for 7-9 hours of quality sleep each night to support your immune system.",
    "Eating a balanced diet rich in fruits and vegetables provides essential nutrients.",
    "Regular handwashing is one of the best ways to prevent the spread of infections.",
    "Managing stress through activities like meditation or deep breathing can improve your health.",
    "Regular check-ups with healthcare providers can help catch issues early.",
    "Limit alcohol consumption and avoid tobacco products for better health.",
    "Stay up to date with recommended vaccinations to prevent serious illnesses.",
    "If your symptoms persist or worsen, it's important to consult with a healthcare professional."
  ];
}
