"use client";

import { useState, useEffect } from "react";
import { Shield, Key, CheckCircle, LogOut, Lock, Database, Code, Server } from "lucide-react";

export default function AdminPage() {
  const [session, setSession] = useState<{ email: string; name: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("navameshofficial@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      if (data.authenticated) {
        setSession(data.user);
      } else {
        setSession(null);
      }
    } catch {
      setSession(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSession(data.user);
        setPassword("");
      } else {
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Network error while authenticating.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setSession(null);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="text-sm font-mono text-[#39ff14] animate-pulse">
          VERIFYING SECURE PROTOCOLS...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/10 text-[#39ff14] text-xs font-bold tracking-widest uppercase mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span>Restricted Admin Portal</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-[family-name:var(--font-rajdhani)] text-white uppercase">
          NAVAMESH <span className="text-[#39ff14] neon-glow">COMMAND CENTER</span>
        </h1>
        <p className="text-sm text-[#a1a1aa] mt-2">
          Secure SSR authenticated environment for team leadership, credential management, and portal configurations.
        </p>
      </div>

      {!session ? (
        /* Login Card */
        <div className="max-w-md mx-auto p-8 rounded-2xl bg-[#0a0a0a] border border-[#222222] shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-[#111111] border border-[#39ff14]/30 flex items-center justify-center text-[#39ff14] mx-auto mb-6">
            <Lock className="w-5 h-5" />
          </div>

          <h2 className="text-xl font-bold font-[family-name:var(--font-rajdhani)] text-white text-center uppercase mb-1">
            Sign In with Master Key
          </h2>
          <p className="text-xs text-[#71717a] text-center mb-6">
            Protected with server-side signed JWTs & HTTP-only cookies.
          </p>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-[#a1a1aa] uppercase mb-1.5">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#111111] border border-[#222222] text-white text-sm focus:outline-none focus:border-[#39ff14]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#a1a1aa] uppercase mb-1.5">
                Master Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#111111] border border-[#222222] text-white text-sm focus:outline-none focus:border-[#39ff14]"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-[#39ff14] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#32e012] shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Key className="w-4 h-4" />
              <span>{submitting ? "Authenticating..." : "Authorize Access"}</span>
            </button>
          </form>

          <div className="mt-6 p-3 rounded-lg bg-[#111111] border border-[#1f1f1f] text-[11px] text-[#71717a] text-center">
            Default test credential is configured in <code className="text-[#39ff14]">.env.local</code>
          </div>
        </div>
      ) : (
        /* Authenticated Dashboard */
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#39ff14]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#39ff14]/10 border border-[#39ff14]/30 flex items-center justify-center text-[#39ff14]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-[family-name:var(--font-rajdhani)]">
                  Welcome, {session.name}
                </h3>
                <div className="text-xs font-mono text-[#39ff14]">{session.email}</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111111] border border-[#222222] text-xs font-bold text-red-400 hover:border-red-500/50 hover:bg-red-500/10 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Revoke Session</span>
            </button>
          </div>

          {/* Security & Secrets Audit Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-[#0a0a0a] border border-[#222222]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#39ff14] mb-2">
                <Server className="w-4 h-4" />
                <span>API Keys Isolation</span>
              </div>
              <div className="text-sm font-bold text-white">100% Server Protected</div>
              <p className="text-xs text-[#71717a] mt-1">
                Zero client-side leak. Secrets are stored strictly in Vercel / SSR environment.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0a0a0a] border border-[#222222]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#39ff14] mb-2">
                <Lock className="w-4 h-4" />
                <span>Session Security</span>
              </div>
              <div className="text-sm font-bold text-white">HS256 Jose JWT</div>
              <p className="text-xs text-[#71717a] mt-1">
                Signed payload with HTTP-only, SameSite strict cookies.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0a0a0a] border border-[#222222]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#39ff14] mb-2">
                <Database className="w-4 h-4" />
                <span>Vercel Edge Ready</span>
              </div>
              <div className="text-sm font-bold text-white">Full Compatibility</div>
              <p className="text-xs text-[#71717a] mt-1">
                Next.js 15 App router with dynamic edge routing.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
