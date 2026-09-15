"use client";

import { useEffect, useState } from "react";

export default function AdminSettings() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings").then((r) => r.json()).then((d) => setSettings(d.settings));
  }, []);

  const save = async () => {
    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const fields = [
    { key: "company_name", label: "Company Name" },
    { key: "phone", label: "Phone" },
    { key: "email", label: "General Email" },
    { key: "compliance_email", label: "Compliance Email" },
    { key: "address", label: "Address" },
    { key: "linkedin", label: "LinkedIn URL" },
    { key: "facebook", label: "Facebook URL" },
    { key: "instagram", label: "Instagram URL" },
    { key: "twitter", label: "Twitter/X URL" },
  ];

  return (
    <div className="max-w-2xl space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h2 className="text-sm font-semibold text-[#1a1a1a]">Company Information</h2>
        {fields.map((f) => (
          <div key={f.key}>
            <label className="block text-xs font-medium text-gray-500 mb-1">{f.label}</label>
            <input
              value={settings[f.key] || ""}
              onChange={(e) => setSettings({ ...settings, [f.key]: e.target.value })}
              className="w-full px-3 py-2 bg-[#f8f9fa] border border-gray-200 rounded-lg text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#052e16]/30"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button onClick={save} className="px-6 py-2.5 bg-[#052e16] text-white rounded-lg text-sm font-medium hover:bg-[#14532d] transition-colors">
          Save Settings
        </button>
        {saved && <span className="text-green-600 text-sm font-medium">Saved!</span>}
      </div>
    </div>
  );
}
