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
    }
  }, []);

  const acceptAll = () => {
    const all: CookiePreferences = { necessary: true, analytics: true, marketing: true };
    storeConsent(all);
    sendConsentEmail(all);
    setVisible(false);
    setShowPanel(false);
  };

  const rejectAll = () => {
    const minimal: CookiePreferences = { necessary: true, analytics: false, marketing: false };
    storeConsent(minimal);
    sendConsentEmail(minimal);
    setVisible(false);
    setShowPanel(false);
  };

  const saveCustom = () => {
    storeConsent(prefs);
    sendConsentEmail(prefs);
    setVisible(false);
    setShowPanel(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Settings Modal Overlay */}
      {showPanel && (
        <div className="fixed inset-0 bg-black/40 z-[90] backdrop-blur-sm" onClick={() => setShowPanel(false)} />
      )}

      {/* Settings Modal */}
      {showPanel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
              <button onClick={acceptAll} className="flex-1 border-2 border-[#052e16] text-[#052e16] font-semibold text-sm py-2.5 rounded-lg hover:bg-[#052e16] hover:text-white transition-all">
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom-Left Cookie Card */}
      <div className="fixed bottom-4 left-4 z-[80] w-[340px] animate-fadeInUp">
        <div className="bg-white rounded-xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#052e16] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-[#052e16] mb-1">We value your privacy</p>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  We use cookies to enhance your experience.{" "}
                  <Link href="/privacy" className="text-[#14532d] underline hover:text-[#d97706] transition-colors">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-t border-gray-100">
            <button onClick={rejectAll} className="flex-1 text-[11px] font-semibold text-gray-400 hover:text-[#052e16] hover:bg-gray-50 py-2.5 transition-colors">
              Reject
            </button>
            <div className="w-px bg-gray-100" />
            <button onClick={() => setShowPanel(true)} className="flex-1 text-[11px] font-semibold text-[#14532d] hover:text-[#d97706] hover:bg-green-50 py-2.5 transition-colors">
              Customize
            </button>
            <div className="w-px bg-gray-100" />
            <button onClick={acceptAll} className="flex-1 text-[11px] font-semibold text-white bg-[#052e16] hover:bg-[#14532d] py-2.5 transition-colors">
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
