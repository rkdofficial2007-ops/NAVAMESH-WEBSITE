"use client";

import { useState } from "react";
import { ACHIEVEMENTS, Achievement } from "@/lib/data";
import { Trophy, FileText, Download, ExternalLink, Filter, Calendar, Award } from "lucide-react";

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeCert, setActiveCert] = useState<Achievement | null>(null);

  const categories = ["All", "National Level", "Ideathon", "Robotics & AI", "FinTech", "Startup Pitch"];

  const filteredAchievements = selectedCategory === "All"
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter((item) => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-6xl">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/10 text-[#39ff14] text-xs font-bold tracking-widest uppercase mb-4">
          <Trophy className="w-3.5 h-3.5" />
          <span>Verified Accreditations</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-[family-name:var(--font-rajdhani)] text-white tracking-tight uppercase">
          OUR <span className="text-[#39ff14] neon-glow">ACHIEVEMENTS</span>
        </h1>
        <p className="text-base sm:text-lg text-[#a1a1aa] mt-4 leading-relaxed">
          A track record of relentless innovation, high-pressure problem solving, and podium finishes.
          Every recognition below is backed by official institutional certificates.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        <Filter className="w-4 h-4 text-[#a1a1aa] mr-1 shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shrink-0 ${
              selectedCategory === cat
                ? "bg-[#39ff14] text-black shadow-[0_0_15px_rgba(57,255,20,0.4)]"
                : "bg-[#111111] text-[#a1a1aa] border border-[#222222] hover:border-[#39ff14]/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAchievements.map((item) => (
          <div
            key={item.id}
            id={`cert-${item.id}`}
            className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#222222] hover:border-[#39ff14]/50 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/30">
                  {item.position}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#71717a]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.year}</span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="text-xs font-mono text-[#39ff14]/80 tracking-wider uppercase mb-1">
                {item.category}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-rajdhani)] text-white group-hover:text-[#39ff14] transition-colors leading-snug">
                {item.title}
              </h2>

              <p className="text-sm text-[#a1a1aa] leading-relaxed mt-3">
                {item.description}
              </p>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
              <span className="text-xs font-mono text-[#71717a]">
                Certificate Page #{item.pageNumber}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveCert(item)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111111] border border-[#222222] text-xs font-bold text-white hover:border-[#39ff14] hover:text-[#39ff14] transition-all"
                >
                  <FileText className="w-3.5 h-3.5 text-[#39ff14]" />
                  <span>Preview Cert</span>
                </button>
                <a
                  href={`/assets/SIH-certificates.pdf#page=${item.pageNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-[#111111] border border-[#222222] text-[#a1a1aa] hover:text-[#39ff14] transition-colors"
                  title="Open Certificate in New Tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Direct PDF Download Bar */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0e0e0e] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold font-[family-name:var(--font-rajdhani)] text-white">
            OFFICIAL VERIFIED CERTIFICATE DOSSIER
          </h3>
          <p className="text-xs text-[#a1a1aa] mt-1">
            Download the complete 8-page unified PDF document containing all national final and winner certificates.
          </p>
        </div>
        <a
          href="/assets/SIH-certificates.pdf"
          download="Team_NAVAMESH_Certificates.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#39ff14] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#32e012] shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Dossier (718 KB)</span>
        </a>
      </div>

      {/* Interactive Modal Viewer */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-[#222222] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#222222] flex items-center justify-between bg-[#111111]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#39ff14]/10 border border-[#39ff14]/30 flex items-center justify-center text-[#39ff14]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-[family-name:var(--font-rajdhani)]">
                    {activeCert.title}
                  </h4>
                  <div className="text-[11px] font-mono text-[#39ff14]">
                    Page {activeCert.pageNumber} of 8 • {activeCert.position} ({activeCert.year})
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="px-3 py-1 rounded-lg bg-[#1a1a1a] text-[#a1a1aa] hover:text-white text-xs font-mono"
              >
                CLOSE [ESC]
              </button>
            </div>

            {/* Modal Body: Embedded PDF Canvas */}
            <div className="flex-1 w-full bg-[#141414] min-h-[500px] flex items-center justify-center relative p-2">
              <iframe
                src={`/assets/SIH-certificates.pdf#page=${activeCert.pageNumber}&view=FitH`}
                className="w-full h-[600px] rounded-lg border-0"
                title="Certificate Viewer"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-[#222222] bg-[#0c0c0c] flex items-center justify-between">
              <span className="text-xs text-[#a1a1aa]">{activeCert.category}</span>
              <a
                href="/assets/SIH-certificates.pdf"
                target="_blank"
                className="text-xs text-[#39ff14] hover:underline flex items-center gap-1 font-mono"
              >
                Open Full Screen PDF <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
