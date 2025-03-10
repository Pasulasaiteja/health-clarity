
import { extractSymptomsFromMessage, findIllnessesBySymptoms, getGeneralHealthAdvice } from "@/data/illnessData";

// Generate a response based on user input
export function generateChatbotResponse(userMessage: string): string {
  // Extract any symptoms mentioned in the user message
  const extractedSymptoms = extractSymptomsFromMessage(userMessage);
  
  // Check if the message is a greeting
  if (isGreeting(userMessage)) {
    return "Hello! I'm your Health Clarity AI assistant. How can I help you with your health questions today?";
  }
  
  // Check if the message is a thank you
  if (isThankYou(userMessage)) {
    return "You're welcome! Remember, I'm here anytime you need health information. Is there anything else I can help with?";
  }
  
  // Check if the message is about the bot itself
  if (isAboutBot(userMessage)) {
    return "I'm Health Clarity AI, designed to provide general health information. I can help identify possible conditions based on symptoms and offer basic health advice. However, I'm not a replacement for professional medical care.";
  }
  
  // If symptoms are detected, provide information about possible illnesses
  if (extractedSymptoms.length > 0) {
    const possibleIllnesses = findIllnessesBySymptoms(extractedSymptoms);
    
    if (possibleIllnesses.length > 0) {
      let response = `I notice you mentioned ${extractedSymptoms.join(", ")}. `;
      
      if (possibleIllnesses.length === 1) {
        const illness = possibleIllnesses[0];
        response += `These symptoms can be associated with ${illness.name}. ${illness.description} `;
        response += `Other symptoms of ${illness.name} might include ${illness.symptoms.filter(s => !extractedSymptoms.includes(s)).join(", ")}.`;
      } else if (possibleIllnesses.length <= 3) {
        response += "These symptoms could be associated with several conditions, including ";
        response += possibleIllnesses.map(i => i.name).join(", ") + ". ";
        response += "Would you like more specific information about any of these conditions?";
      } else {
        response += "These symptoms could be associated with various conditions. ";
        response += "Can you provide any additional symptoms or information about when they started?";
      }
      
      // Add disclaimer
      response += " Remember, this information is not a diagnosis, and you should consult with a healthcare provider for proper evaluation.";
      
      return response;
    }
  }
  
  // If no symptoms are detected or no matching illnesses, provide general response
  if (userMessage.toLowerCase().includes("condition") || 
      userMessage.toLowerCase().includes("illness") || 
      userMessage.toLowerCase().includes("disease")) {
    return "I can provide information about various health conditions. Could you mention specific symptoms you're experiencing or a particular condition you'd like to learn about?";
  }
  
  // Check if asking for advice
  if (isAskingForAdvice(userMessage)) {
    const advice = getGeneralHealthAdvice();
    return advice[Math.floor(Math.random() * advice.length)];
  }
  
  // Check if emergency-related query
  if (isEmergencyQuery(userMessage)) {
    return "If you're experiencing a medical emergency such as severe chest pain, difficulty breathing, severe bleeding, or symptoms of stroke, please call emergency services immediately. Don't wait for online advice in emergency situations.";
  }
  
  // Default responses
  const defaultResponses = [
    "I understand you have a health concern. Could you tell me more about any specific symptoms you're experiencing?",
    "To help you better, I'd need more information about your symptoms. What specific health issues are you concerned about?",
    "I'm here to provide health information. Could you share more details about your health question or concerns?",
    "I'd like to help with your health question. Could you provide more specific details about what you're experiencing?"
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Helper functions to detect message intent
function isGreeting(message: string): boolean {
  const greetings = ["hello", "hi", "hey", "greetings", "howdy", "good morning", "good afternoon", "good evening"];
  return greetings.some(greeting => message.toLowerCase().includes(greeting));
}

function isThankYou(message: string): boolean {
  const thanks = ["thank", "thanks", "appreciate", "grateful"];
  return thanks.some(term => message.toLowerCase().includes(term));
}

function isAboutBot(message: string): boolean {
  const aboutBotTerms = ["who are you", "what are you", "what can you do", "how do you work", "tell me about yourself"];
  return aboutBotTerms.some(term => message.toLowerCase().includes(term));
}

function isAskingForAdvice(message: string): boolean {
  const adviceTerms = ["advice", "suggest", "recommendation", "tip", "help", "guide"];
  return adviceTerms.some(term => message.toLowerCase().includes(term));
}

function isEmergencyQuery(message: string): boolean {
  const emergencyTerms = ["emergency", "urgent", "severe pain", "can't breathe", "heart attack", "stroke"];
  return emergencyTerms.some(term => message.toLowerCase().includes(term));
}
