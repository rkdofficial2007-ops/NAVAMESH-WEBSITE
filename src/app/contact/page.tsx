"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-5xl">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/10 text-[#39ff14] text-xs font-bold tracking-widest uppercase mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Connect & Collaborate</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-[family-name:var(--font-rajdhani)] text-white tracking-tight uppercase">
          CONTACT <span className="text-[#39ff14] neon-glow">TEAM NAVAMESH</span>
        </h1>
        <p className="text-base sm:text-lg text-[#a1a1aa] mt-4 leading-relaxed">
          Reach out for collaborations, hackathon sponsorships, technical inquiries, or to learn
          more about our hardware & software innovations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Info Column */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#222222]">
            <h3 className="text-lg font-bold font-[family-name:var(--font-rajdhani)] text-white mb-2 uppercase">
              Direct Communication
            </h3>
            <p className="text-xs text-[#a1a1aa] mb-6 leading-relaxed">
              We respond promptly to industry proposals, competition inquiries, and student hackathon mentorship requests.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:navameshofficial@gmail.com"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#39ff14]/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center text-[#39ff14] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#a1a1aa]">Official Email</div>
                  <div className="text-xs font-mono text-white group-hover:text-[#39ff14]">
                    navameshofficial@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://instagram.com/navamesh_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#39ff14]/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center text-[#39ff14] group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#a1a1aa]">Social Instagram</div>
                  <div className="text-xs font-mono text-white group-hover:text-[#39ff14]">
                    @navamesh_official
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-[#222222]">
            <div className="text-xs font-mono text-[#39ff14] uppercase mb-1">Status</div>
            <div className="text-sm font-semibold text-white">Accepting New Technical Challenges</div>
            <p className="text-xs text-[#71717a] mt-1">
              Currently preparing for upcoming national & international robotics and AI competitions.
            </p>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="md:col-span-7">
          <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#222222] shadow-xl">
            <h3 className="text-xl font-bold font-[family-name:var(--font-rajdhani)] text-white mb-6 uppercase">
              Send us a Message
            </h3>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-[#39ff14]/10 border border-[#39ff14]/40 flex items-center gap-3 text-sm text-[#39ff14]">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Message delivered successfully! Team NAVAMESH will get back to you soon.</span>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-sm text-red-400">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#a1a1aa] uppercase mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Aryan Sharma / Tech Lead"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#222222] text-white text-sm focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a1a1aa] uppercase mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#222222] text-white text-sm focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a1a1aa] uppercase mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  placeholder="Collaboration, Sponsorship, or Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#222222] text-white text-sm focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a1a1aa] uppercase mb-1.5">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your inquiry, project scope, or proposal..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#222222] text-white text-sm focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-xl bg-[#39ff14] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#32e012] shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Team</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
