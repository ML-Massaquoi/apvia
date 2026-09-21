"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ButtonSpinner } from "@/components/Spinner";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        router.push("/admin");
      } else {
        setError("Invalid password");
      }
    } catch {
      setError("Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#052e16] flex items-center justify-center mx-auto mb-4">
              <Image src="/Apvia_logo.jpeg" alt="APVIA" width={40} height={40} className="rounded-xl object-cover" />
            </div>
            <h1 className="text-xl font-bold text-[#1a1a1a]">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Enter password to continue</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
              className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-lg text-[#1a1a1a] placeholder-gray-400 text-sm focus:outline-none focus:border-[#052e16]/30"
              autoFocus
            />
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 bg-[#052e16] text-white rounded-lg font-semibold text-sm hover:bg-[#14532d] transition-colors disabled:opacity-50"
            >
              {loading ? <ButtonSpinner text="Logging in..." /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
