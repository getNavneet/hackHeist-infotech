import React, { useState, useRef, useEffect } from "react";
import { FaRobot } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help with your event questions?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Automatically scroll to the bottom of the messages list
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleToggle = () => setIsOpen(!isOpen);

  // --- Corrected handleSend function to prevent duplicate messages ---
  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newUserMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponseText = getBotResponse(input);
      const newBotMessage = { sender: "bot", text: botResponseText };
      setMessages((prev) => [...prev, newBotMessage]);
    }, 1000);

    setInput("");
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // --- Updated responses to be more relevant to an event platform ---
  const getBotResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("register")) {
      return "You can register for an event by clicking the 'Register Now' button on the event card!";
    } else if (lowerQuery.includes("location") || lowerQuery.includes("where")) {
      return "The location for each event is listed on its card. Check there for specific details.";
    } else if (lowerQuery.includes("schedule") || lowerQuery.includes("time")) {
      return "Event schedules and times are available on the event details page. Click on an event to learn more.";
    } else if (lowerQuery.includes("contact") || lowerQuery.includes("support")) {
      return "Please visit our 'Contact' section for support details and office hours.";
    } else {
      return "I'm not sure about that. Try asking about registration, location, or schedule, or visit the contact page for more help!";
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-80 h-[28rem] bg-black text-white p-4 rounded-2xl shadow-2xl border border-gray-800 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
                <FaRobot size={20} className="text-orange-500"/>
                <h3 className="font-bold text-lg">Event Assistant</h3>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto mb-3 pr-2 custom-scrollbar">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <span
                    className={`px-3 py-2 rounded-xl max-w-xs break-words ${
                      msg.sender === "user"
                        ? "bg-orange-600 text-white"
                        : "bg-gray-800"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a question..."
                className="flex-1 p-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
              />
              <button onClick={handleSend} className="bg-orange-600 p-3 rounded-full text-white hover:bg-orange-700 transition-colors">
                <IoMdSend size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={handleToggle}
        className="bg-orange-600 p-4 rounded-full shadow-lg text-white mt-4 hover:bg-orange-700 transition-transform hover:scale-110"
      >
        <FaRobot size={24} />
      </button>
    </div>
  );
};

export default ChatBot;