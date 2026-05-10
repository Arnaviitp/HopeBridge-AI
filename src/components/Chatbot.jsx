import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm the HopeBridge AI assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for your message! Our AI is processing your request. In the meantime, feel free to explore our active campaigns.", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen ? (
        <div className="chatbot-window glass">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <div className="chatbot-avatar">AI</div>
              <span>HopeBridge Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-bot">
              <X size={20} />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <form className="chatbot-input" onSubmit={handleSend}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button className="chatbot-toggle btn-primary" onClick={() => setIsOpen(true)}>
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
