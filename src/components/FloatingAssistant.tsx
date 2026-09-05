"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowBubble(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  useEffect(() => {
    if (showBubble && !hasInteracted) {
      const hideTimer = setTimeout(() => {
        setShowBubble(false);
      }, 8000);
      return () => clearTimeout(hideTimer);
    }
  }, [showBubble, hasInteracted]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowBubble(false);
    setHasInteracted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat Panel */}
      {isOpen && (
        <div className="mb-3 sm:mb-4 w-[280px] sm:w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[#052e16] px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#14532d] flex items-center justify-center border-2 border-[#fbbf24]/30">
                    <Image src="/Apvia_logo.jpeg" alt="APVIA" width={28} height={28} className="rounded-full object-cover" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#052e16]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">APVIA Assistant</h4>
                  <p className="text-white/50 text-[10px]">Online now</p>
                </div>
              </div>
              <button onClick={handleClose} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3">
            {/* Bot Message */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-[#052e16] flex items-center justify-center shrink-0 mt-0.5">
                <Image src="/Apvia_logo.jpeg" alt="" width={16} height={16} className="rounded-full object-cover" />
              </div>
              <div className="bg-[#f8f9fa] rounded-xl rounded-tl-sm px-3 py-2 max-w-[220px] sm:max-w-[250px]">
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Welcome to <span className="font-semibold text-[#052e16]">APVIA Ltd</span>. We drive sustainable development across West Africa. How can we help you today?
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2 pt-1">
              <Link
                href="/contact"
                onClick={handleClose}
                className="flex items-center gap-2.5 w-full p-2.5 bg-[#052e16]/5 hover:bg-[#052e16]/10 rounded-xl transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#052e16] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-[#1a1a1a] group-hover:text-[#052e16]">Start a Conversation</p>
                  <p className="text-[10px] text-gray-400">Chat with our team</p>
                </div>
              </Link>

              <Link
                href="/services"
                onClick={handleClose}
                className="flex items-center gap-2.5 w-full p-2.5 bg-[#d97706]/5 hover:bg-[#d97706]/10 rounded-xl transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#d97706] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-[#1a1a1a] group-hover:text-[#d97706]">Explore Investments</p>
                  <p className="text-[10px] text-gray-400">View opportunities</p>
                </div>
              </Link>

              <Link
                href="/about"
                onClick={handleClose}
                className="flex items-center gap-2.5 w-full p-2.5 bg-[#14532d]/5 hover:bg-[#14532d]/10 rounded-xl transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#14532d] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-[#1a1a1a] group-hover:text-[#14532d]">About APVIA</p>
                  <p className="text-[10px] text-gray-400">Learn about us</p>
                </div>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center gap-3 text-[10px] text-gray-400">
                <a href="mailto:info@apvia-sl.com" className="flex items-center gap-1 hover:text-[#14532d] transition-colors">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@apvia-sl.com
                </a>
                <a href="tel:+23276923239" className="flex items-center gap-1 hover:text-[#14532d] transition-colors">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +232 76 92 32 39
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Greeting Bubble */}
      {showBubble && !isOpen && (
        <div className="mb-3 mr-1 sm:mr-0 sm:absolute sm:bottom-16 sm:right-0 w-[200px] sm:w-[220px] bg-white rounded-xl shadow-lg border border-gray-100 p-3 animate-in slide-in-from-bottom-2 fade-in duration-300">
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
            <button onClick={handleOpen} className="flex-1 text-[10px] font-semibold text-white bg-[#052e16] py-1.5 px-2 rounded-lg hover:bg-[#14532d] transition-colors">
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
          onClick={handleOpen}
          className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#052e16] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${showBubble ? "ring-4 ring-[#052e16]/20" : ""}`}
          aria-label="Open assistant"
        >
          <div className="relative">
            <svg className="w-6 h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {/* Notification dot */}
            {!hasInteracted && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#fbbf24] rounded-full border-2 border-[#052e16] animate-pulse" />
            )}
          </div>
        </button>
      )}
    </div>
  );
}
