"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

export default function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to APVIA Ltd. We drive sustainable development across West Africa. How can we help you today?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || sending) return;

    const userMsg: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });
      const data = await res.json();
      const botMsg: Message = {
        id: Date.now() + 1,
        text: data.reply || "Thank you for your message. Our team will get back to you shortly. For urgent inquiries, email info@apvia-sl.com or call 232 73 88 66 22.",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: "Sorry, something went wrong. Please email info@apvia-sl.com or call 232 73 88 66 22.",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="hidden sm:block fixed bottom-4 right-4 z-50">
      {/* Chat Panel */}
      {isOpen && (
        <div className="mb-3 sm:mb-4 w-[300px] sm:w-[340px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-[#052e16] px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-[#14532d] flex items-center justify-center border-2 border-[#fbbf24]/30">
                    <Image src="/Apvia_logo.jpeg" alt="APVIA" width={28} height={28} className="rounded-full object-cover" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#052e16]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">APVIA Assistant</h4>
                  <p className="text-white/50 text-[10px]">Online now</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[300px] overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "items-start gap-2"}`}>
                {msg.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-[#052e16] flex items-center justify-center shrink-0 mt-0.5">
                    <Image src="/Apvia_logo.jpeg" alt="" width={16} height={16} className="rounded-full object-cover" />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-xl px-3 py-2 ${
                  msg.sender === "user"
                    ? "bg-[#052e16] text-white rounded-br-sm"
                    : "bg-[#f8f9fa] text-gray-700 rounded-tl-sm"
                }`}>
                  <p className="text-xs sm:text-sm leading-relaxed">{msg.text}</p>
                  <p className={`text-[9px] mt-1 ${msg.sender === "user" ? "text-white/50" : "text-gray-400"}`}>{msg.time}</p>
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#052e16] flex items-center justify-center shrink-0 mt-0.5">
                  <Image src="/Apvia_logo.jpeg" alt="" width={16} height={16} className="rounded-full object-cover" />
                </div>
                <div className="bg-[#f8f9fa] rounded-xl rounded-tl-sm px-3 py-2">
                  <p className="text-xs text-gray-400 animate-pulse">Typing...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 p-3">
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-[#f8f9fa] border border-gray-200 rounded-lg text-xs sm:text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#052e16]/30"
              />
              <button
                type="submit"
                disabled={!input.trim() || sending}
                className="w-9 h-9 rounded-lg bg-[#052e16] flex items-center justify-center text-[#fbbf24] hover:bg-[#14532d] transition-colors disabled:opacity-40"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            <p className="text-[9px] text-gray-300 text-center mt-1.5">Messages go to info@apvia-sl.com</p>
          </div>
        </div>
      )}

      {/* Greeting Bubble */}
      {showBubble && !isOpen && (
        <div className="mb-3 mr-1 sm:mr-0 sm:absolute sm:bottom-16 sm:right-0 w-[200px] sm:w-[220px] bg-white rounded-xl shadow-lg border border-gray-100 p-3">
          <button onClick={() => setShowBubble(false)} className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg className="w-2.5 h-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 rounded-full bg-[#052e16] flex items-center justify-center shrink-0">
              <Image src="/Apvia_logo.jpeg" alt="" width={18} height={18} className="rounded-full object-cover" />
            </div>
            <div>
              <p className="text-[#1a1a1a] text-xs font-medium leading-relaxed">
                Welcome! 👋 Ready to explore investment opportunities in Sierra Leone?
              </p>
            </div>
          </div>
          <div className="mt-2 flex gap-1.5">
            <button onClick={() => { setIsOpen(true); setShowBubble(false); }} className="flex-1 text-[10px] font-semibold text-white bg-[#052e16] py-1.5 px-2 rounded-lg hover:bg-[#14532d] transition-colors">
              Chat Now
            </button>
            <button onClick={() => setShowBubble(false)} className="flex-1 text-[10px] font-semibold text-gray-500 bg-gray-100 py-1.5 px-2 rounded-lg hover:bg-gray-200 transition-colors">
              Later
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => { setIsOpen(true); setShowBubble(false); }}
          className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#052e16] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${showBubble ? "ring-4 ring-[#052e16]/20" : ""}`}
          aria-label="Open assistant"
        >
          <div className="relative">
            <svg className="w-6 h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {!isOpen && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#fbbf24] rounded-full border-2 border-[#052e16]" />
            )}
          </div>
        </button>
      )}
    </div>
  );
}
