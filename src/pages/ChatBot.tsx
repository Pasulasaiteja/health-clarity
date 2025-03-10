
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your health assistant. How can I help you today? You can ask me about your symptoms, health concerns, or general health information.",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (in a real app, you would call an API)
    setTimeout(() => {
      let response = '';
      
      // Simple pattern matching for demo purposes
      if (input.toLowerCase().includes('headache')) {
        response = "Headaches can be caused by various factors including stress, dehydration, lack of sleep, or eye strain. For mild headaches, rest, hydration, and over-the-counter pain relievers may help. If headaches are severe or persistent, you should consult with a healthcare provider.";
      } else if (input.toLowerCase().includes('fever')) {
        response = "Fever is often a sign that your body is fighting an infection. Rest, hydration, and over-the-counter fever reducers can help manage symptoms. If fever is high (over 103°F/39.4°C for adults) or persists for more than three days, consider seeking medical attention.";
      } else if (input.toLowerCase().includes('cough') || input.toLowerCase().includes('cold')) {
        response = "Coughs and colds are usually caused by viral infections. Rest, hydration, and over-the-counter cold medicines can help manage symptoms. If symptoms worsen or last longer than a week, you may want to consult a healthcare provider.";
      } else {
        response = "I understand you're concerned about your health. While I can provide general information, for personalized medical advice, it's best to consult with a healthcare professional. Would you like to use our symptom checker tool to get more specific guidance?";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-4 flex flex-col h-[calc(100vh-200px)] max-w-2xl">
          <div className="flex items-center mb-4">
            <Link to="/" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Bot className="h-6 w-6 text-health-blue" />
              Health Assistant
            </h1>
          </div>
          
          <div className="health-card flex-grow overflow-y-auto mb-4 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-3",
                      message.role === "user"
                        ? "bg-health-blue text-white"
                        : "bg-gray-100 text-gray-800"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.role === "assistant" ? (
                        <Bot className="h-4 w-4" />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                      <span className="font-medium">
                        {message.role === "user" ? "You" : "Health Assistant"}
                      </span>
                    </div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <span className="font-medium">Health Assistant</span>
                    </div>
                    <div className="flex space-x-1 mt-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your health question..."
              className="health-input flex-grow"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-health-blue text-white hover:bg-blue-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              This AI assistant provides general health information only. 
              For medical emergencies, please call emergency services immediately.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatBot;
