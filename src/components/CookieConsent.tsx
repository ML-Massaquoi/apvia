"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "apvia_cookie_consent";

function getStoredConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function storeConsent(prefs: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

async function sendConsentEmail(prefs: CookiePreferences) {
  try {
    await fetch("/api/cookie-consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...prefs,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      }),
    });
  } catch {
    // silent fail — consent still saved locally
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const existing = getStoredConsent();
    if (!existing) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const dismiss = () => {
    const all: CookiePreferences = { necessary: true, analytics: true, marketing: true };
    storeConsent(all);
    sendConsentEmail(all);
    setVisible(false);
    setShowPanel(false);
    document.body.style.overflow = "";
  };

  const rejectAll = () => {
    const minimal: CookiePreferences = { necessary: true, analytics: false, marketing: false };
    storeConsent(minimal);
    sendConsentEmail(minimal);
    setVisible(false);
    setShowPanel(false);
    document.body.style.overflow = "";
  };

  const saveCustom = () => {
    storeConsent(prefs);
    sendConsentEmail(prefs);
    setVisible(false);
    setShowPanel(false);
    document.body.style.overflow = "";
  };

  if (!visible) return null;

  return (
    <>
      {/* Full-Screen Dimming Overlay — blocks all site interaction */}
      <div
        className="fixed inset-0 bg-black/50 z-[90] backdrop-blur-[2px]"
        onClick={(e) => e.stopPropagation()}
        style={{ pointerEvents: "all" }}
      />

      {/* Settings Modal Overlay */}
      {showPanel && (
        <div className="fixed inset-0 bg-black/30 z-[100] backdrop-blur-sm" onClick={() => setShowPanel(false)} />
      )}

      {/* Settings Modal */}
      {showPanel && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] overflow-y-auto border border-gray-200">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#052e16] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="font-bold text-[#052e16] text-sm">Cookie Settings</span>
              </div>
              <button onClick={() => setShowPanel(false)} className="text-gray-400 hover:text-gray-600 p-1" aria-label="Close">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-5 py-4 space-y-3">
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Choose which cookies you allow. Necessary cookies are always enabled for the site to work.
              </p>

              {/* Necessary */}
              <div className="border border-gray-200 rounded-xl p-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
                    <span className="text-sm font-semibold text-[#052e16]">Necessary</span>
                    <span className="text-[9px] font-semibold bg-[#052e16] text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider">On</span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 mt-1.5 pl-3.5">Required for the website to function. Cannot be disabled.</p>
              </div>

              {/* Analytics */}
              <div className="border border-gray-200 rounded-xl p-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                    <span className="text-sm font-semibold text-[#052e16]">Analytics</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={prefs.analytics} onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })} className="sr-only peer" />
                    <div className="w-8 h-[18px] bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-[12px] after:w-[12px] after:transition-all peer-checked:bg-[#166534]"></div>
                  </label>
                </div>
                <p className="text-[11px] text-gray-400 mt-1.5 pl-3.5">Helps us understand how visitors use our site.</p>
              </div>

              {/* Marketing */}
              <div className="border border-gray-200 rounded-xl p-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                    <span className="text-sm font-semibold text-[#052e16]">Marketing</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={prefs.marketing} onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })} className="sr-only peer" />
                    <div className="w-8 h-[18px] bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-[12px] after:w-[12px] after:transition-all peer-checked:bg-[#166534]"></div>
                  </label>
                </div>
                <p className="text-[11px] text-gray-400 mt-1.5 pl-3.5">Used to show relevant ads on other sites.</p>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white border-t border-gray-100 px-5 py-3.5 flex gap-2.5 rounded-b-2xl">
              <button onClick={saveCustom} className="flex-1 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#052e16] font-semibold text-sm py-2.5 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Save
              </button>
              <button onClick={dismiss} className="flex-1 border-2 border-[#052e16] text-[#052e16] font-semibold text-sm py-2.5 rounded-lg hover:bg-[#052e16] hover:text-white transition-all">
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[95] animate-fadeInUp">
        <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgb(0,0,0,0.08)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  With cookies we can ensure you get the best experience on our website. These cookies may incorporate data transfers to third-party providers based in countries without an adequate level of data protection. By clicking &ldquo;Understood&rdquo;, you acknowledge the storage of cookies on your device to improve website navigation, analyze website usage, and assist in our marketing efforts. For further information, including the processing of data by third-party providers and the possibility of changing your preferences at any time, please see your settings under &ldquo;Select Cookies Settings&rdquo; and the following links:{" "}
                  <Link href="/privacy" className="text-[#14532d] font-semibold underline hover:text-[#d97706] transition-colors">
                    Cookie Notice
                  </Link>
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setShowPanel(true)}
                  className="px-5 py-2.5 border-2 border-[#052e16] text-[#052e16] font-semibold text-sm rounded-lg hover:bg-[#052e16] hover:text-white transition-all whitespace-nowrap"
                >
                  Select Cookies Settings
                </button>
                <button
                  onClick={dismiss}
                  className="px-5 py-2.5 bg-[#052e16] text-white font-semibold text-sm rounded-lg hover:bg-[#14532d] transition-all whitespace-nowrap"
                >
                  Understood
                </button>
                <button
                  onClick={dismiss}
                  className="text-gray-400 hover:text-gray-600 p-1 ml-1"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
