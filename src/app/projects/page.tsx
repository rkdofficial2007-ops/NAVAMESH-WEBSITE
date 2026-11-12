import { FEATURED_PROJECTS } from "@/lib/data";
import { Cpu, Terminal, Radio, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-6xl">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/10 text-[#39ff14] text-xs font-bold tracking-widest uppercase mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Applied R&D & Prototypes</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-[family-name:var(--font-rajdhani)] text-white tracking-tight uppercase">
          ENGINEERING <span className="text-[#39ff14] neon-glow">PROTOTYPES</span>
        </h1>
        <p className="text-base sm:text-lg text-[#a1a1aa] mt-4 leading-relaxed">
          Deep-tech hardware and software architectures conceived, engineered, and demonstrated
          before national evaluators, venture capital judges, and defense tech leaders.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURED_PROJECTS.map((proj, idx) => (
          <div
            key={proj.id}
            className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#222222] hover:border-[#39ff14]/60 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#39ff14]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#39ff14] tracking-widest uppercase">
                  PROTOTYPE #{idx + 1}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#1a1a1a] text-[#a1a1aa] border border-[#262626]">
                  {proj.stats}
                </span>
              </div>

              <h2 className="text-2xl font-bold font-[family-name:var(--font-rajdhani)] text-white group-hover:text-[#39ff14] transition-colors mb-1">
                {proj.title}
              </h2>

              <div className="text-xs text-[#a1a1aa] font-medium mb-4">
                {proj.subtitle}
              </div>

              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                {proj.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#111111] border border-[#222222] text-[#d4d4d8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
              <span className="text-xs font-mono text-[#71717a] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#39ff14]" />
                <span>Working Field Prototype</span>
              </span>
              <Link
                href="/contact"
                className="text-xs font-bold text-[#39ff14] flex items-center gap-1 hover:underline uppercase tracking-wider"
              >
                Inquire Specs <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Open Collaboration CTA */}
      <div className="mt-16 p-8 rounded-3xl bg-[#0d0d0d] border border-[#222222] text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold font-[family-name:var(--font-rajdhani)] text-white mb-2">
          HAVE A COMPLEX ENGINEERING CHALLENGE?
        </h3>
        <p className="text-sm text-[#a1a1aa] max-w-xl mx-auto mb-6">
          Team NAVAMESH excels in high-pressure prototype delivery, sensor fusion, inverse
          kinematics, and end-to-end full stack architecture.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#39ff14] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#32e012] transition-colors"
        >
          <span>Initiate Technical Discussion</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
