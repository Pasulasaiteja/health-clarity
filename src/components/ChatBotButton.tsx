
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatBotButton = () => {
  return (
    <Link to="/chatbot">
      <Button 
        className="fixed bottom-6 right-6 rounded-full size-14 p-0 shadow-lg bg-health-blue hover:bg-blue-700"
        aria-label="Chat with our AI assistant"
      >
        <MessageCircle className="size-6" />
      </Button>
    </Link>
  );
};

export default ChatBotButton;
