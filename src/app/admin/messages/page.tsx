"use client";

import { useEffect, useState } from "react";

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  source: string;
  status: string;
  created_at: string;
};

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [total, setTotal] = useState(0);
  const [unread, setUnread] = useState(0);
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState<Message | null>(null);

  const load = () => {
    const params = new URLSearchParams();
    if (filter) params.set("source", filter);
    fetch(`/api/admin/messages?${params}`)
      .then((r) => r.json())
      .then((d) => { setMessages(d.messages); setTotal(d.total); setUnread(d.unread); });
  };

  useEffect(() => { load(); }, [filter]);

  const markRead = async (id: number) => {
    await fetch(`/api/admin/messages/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "read" }),
    });
    load();
  };

  const deleteMsg = async (id: number) => {
    if (!confirm("Delete this message?")) return;
    await fetch("/api/admin/messages", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setSelected(null);
    load();
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex gap-2">
          {["", "contact", "chat"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === s ? "bg-[#052e16] text-white" : "bg-white border border-gray-200 text-gray-500 hover:border-[#052e16]/30"
              }`}
            >
              {s === "" ? "All" : s === "contact" ? "Contact Form" : "Chat"}
            </button>
          ))}
        </div>
        <div className="ml-auto text-xs text-gray-400">
          {total} total · {unread} unread
        </div>
      </div>

      <div className="flex gap-4 min-h-[500px]">
        {/* List */}
        <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${selected ? "hidden lg:block lg:w-[380px]" : "w-full"} shrink-0`}>
          <div className="divide-y divide-gray-50 max-h-[600px] overflow-y-auto">
            {messages.length === 0 && (
              <p className="px-5 py-12 text-gray-400 text-sm text-center">No messages found</p>
            )}
            {messages.map((m) => (
              <button
                key={m.id}
                onClick={() => { setSelected(m); markRead(m.id); }}
                className={`w-full text-left px-5 py-3 hover:bg-[#f8f9fa] transition-colors ${selected?.id === m.id ? "bg-[#f8f9fa]" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${m.status === "new" ? "bg-red-400" : "bg-gray-200"}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-[#1a1a1a] truncate">{m.name}</p>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                        m.source === "chat" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"
                      }`}>{m.source}</span>
                    </div>
                    <p className="text-xs text-gray-400 truncate">{m.subject || m.message.substring(0, 60)}</p>
                    <p className="text-[10px] text-gray-300 mt-0.5">{new Date(m.created_at).toLocaleString()}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detail */}
        {selected ? (
          <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a]">{selected.name}</h3>
                <p className="text-sm text-gray-400">{selected.email}</p>
              </div>
              <button onClick={() => setSelected(null)} className="lg:hidden w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex gap-4">
                <span className="text-gray-400 w-20 shrink-0">Subject:</span>
                <span className="text-[#1a1a1a]">{selected.subject || "—"}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-400 w-20 shrink-0">Source:</span>
                <span className="text-[#1a1a1a]">{selected.source}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-400 w-20 shrink-0">Date:</span>
                <span className="text-[#1a1a1a]">{new Date(selected.created_at).toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-gray-400 mb-2">Message:</p>
                <p className="text-[#1a1a1a] whitespace-pre-wrap leading-relaxed">{selected.message}</p>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <a href={`mailto:${selected.email}?subject=Re: ${selected.subject}`} className="px-4 py-2 bg-[#052e16] text-white rounded-lg text-xs font-medium hover:bg-[#14532d] transition-colors">
                Reply via Email
              </a>
              <button onClick={() => deleteMsg(selected.id)} className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100 transition-colors">
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex flex-1 items-center justify-center bg-white rounded-xl border border-gray-200">
            <p className="text-gray-300 text-sm">Select a message to view</p>
          </div>
        )}
      </div>
    </div>
  );
}
