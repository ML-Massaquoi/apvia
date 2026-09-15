"use client";

import { useEffect, useState } from "react";

type Member = {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo_path: string;
  email: string;
  sort_order: number;
};

export default function AdminTeam() {
  const [members, setMembers] = useState<Member[]>([]);
  const [editing, setEditing] = useState<Member | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", bio: "", photo_path: "", email: "", sort_order: 0 });

  const load = () => {
    fetch("/api/admin/team").then((r) => r.json()).then((d) => setMembers(d.members));
  };
  useEffect(() => { load(); }, []);

  const openNew = () => {
    setEditing(null);
    setForm({ name: "", role: "", bio: "", photo_path: "", email: "", sort_order: members.length });
    setShowForm(true);
  };

  const openEdit = (m: Member) => {
    setEditing(m);
    setForm({ name: m.name, role: m.role, bio: m.bio, photo_path: m.photo_path, email: m.email, sort_order: m.sort_order });
    setShowForm(true);
  };

  const save = async () => {
    if (editing) {
      await fetch(`/api/admin/team/${editing.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } else {
      await fetch("/api/admin/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }
    setShowForm(false);
    load();
  };

  const remove = async (id: number) => {
    if (!confirm("Delete this team member?")) return;
    await fetch(`/api/admin/team/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-400">{members.length} members</p>
        <button onClick={openNew} className="px-4 py-2 bg-[#052e16] text-white rounded-lg text-xs font-medium hover:bg-[#14532d] transition-colors">
          + Add Member
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold text-[#1a1a1a]">{editing ? "Edit Member" : "Add Member"}</h3>
            {[
              { key: "name", label: "Name", placeholder: "Full name" },
              { key: "role", label: "Role", placeholder: "Job title" },
              { key: "email", label: "Email", placeholder: "email@apvia-sl.com" },
              { key: "photo_path", label: "Photo Path", placeholder: "/team/photo.jpg" },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-xs font-medium text-gray-500 mb-1">{f.label}</label>
                <input
                  value={form[f.key as keyof typeof form] as string}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  placeholder={f.placeholder}
                  className="w-full px-3 py-2 bg-[#f8f9fa] border border-gray-200 rounded-lg text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#052e16]/30"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Bio</label>
              <textarea
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 bg-[#f8f9fa] border border-gray-200 rounded-lg text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#052e16]/30 resize-none"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 text-gray-500 text-sm hover:bg-gray-100 rounded-lg transition-colors">Cancel</button>
              <button onClick={save} className="px-4 py-2 bg-[#052e16] text-white text-sm rounded-lg font-medium hover:bg-[#14532d] transition-colors">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((m) => (
          <div key={m.id} className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[#1a1a1a]">{m.name}</h3>
                <p className="text-xs text-gray-400">{m.role}</p>
              </div>
              <span className="text-[10px] text-gray-300">#{m.sort_order}</span>
            </div>
            <p className="text-xs text-gray-500 line-clamp-3">{m.bio || "No bio"}</p>
            <div className="flex gap-2">
              <button onClick={() => openEdit(m)} className="px-3 py-1.5 bg-[#f8f9fa] border border-gray-200 rounded-lg text-xs text-gray-500 hover:border-[#052e16]/30 transition-colors">Edit</button>
              <button onClick={() => remove(m.id)} className="px-3 py-1.5 bg-red-50 text-red-500 rounded-lg text-xs hover:bg-red-100 transition-colors">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
