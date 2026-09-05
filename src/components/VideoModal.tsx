"use client";

import { useRef, useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  videoSrc: string;
  facts: { label: string; value: string }[];
}

export default function VideoModal({ isOpen, onClose, title, description, videoSrc, facts }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#f59e0b] rounded-t-2xl" />

        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative aspect-video bg-black rounded-t-2xl overflow-hidden">
          <video
            ref={videoRef}
            controls
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">{description}</p>

          {facts.length > 0 && (
            <div className="bg-[#f8f9fa] rounded-xl p-4 sm:p-5 mb-5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Investment Metrics</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg sm:text-xl font-bold text-[#14532d]">{fact.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#052e16] text-white rounded-lg font-semibold text-sm hover:bg-[#14532d] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Invest Now
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
