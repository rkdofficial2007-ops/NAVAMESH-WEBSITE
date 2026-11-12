"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Zap, Cpu, Shield, ChevronRight } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/data";

export default function HomePage() {
  const journeyImages = [
    { src: "/assets/journey_1.jpeg", alt: "Team NAVAMESH Hackathon Presentation", label: "Hackathon Pitching" },
    { src: "/assets/journey_2.jpeg", alt: "Hardware Prototype Bench Testing", label: "Prototype Testing" },
    { src: "/assets/journey_3.jpeg", alt: "Intensive Team Strategy & Coding", label: "Strategy & Firmware" },
    { src: "/assets/journey_4.jpeg", alt: "Live Exhibition & Award Stage", label: "Grand Stage Execution" },
  ];

  return (
    <div className="flex flex-col gap-24 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-12 md:pt-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/10 text-[#39ff14] text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            <Zap className="w-3.5 h-3.5 animate-bounce" />
            <span>Innovation & Excellence</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase font-[family-name:var(--font-rajdhani)] mb-6">
            TEAM <span className="text-[#39ff14] neon-glow">NAVAMESH</span>
          </h1>

          {/* Mission Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl leading-relaxed mb-10">
            Pushing the boundaries of technology through relentless innovation. We build the future,
            one prototype at a time, conquering hackathons and redefining what's possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#39ff14] text-black font-bold text-sm tracking-wider uppercase hover:bg-[#32e012] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)] transition-all"
            >
              <Trophy className="w-4 h-4" />
              <span>Explore Achievements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] border border-[#222222] text-white font-bold text-sm tracking-wider uppercase hover:border-[#39ff14]/50 hover:bg-[#161616] transition-all"
            >
              <Cpu className="w-4 h-4 text-[#39ff14]" />
              <span>View Prototypes</span>
            </Link>
          </div>
        </div>

        {/* Official Team Photograph Card */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-[#222222] bg-[#0a0a0a] group hover:border-[#39ff14]/50 transition-all shadow-2xl">
            <div className="relative h-[320px] sm:h-[450px] md:h-[520px] w-full">
              <Image
                src="/assets/team_photo.jpeg"
                alt="Team NAVAMESH Core Members"
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            </div>

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#39ff14] uppercase">
                  Official Team Photograph
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-rajdhani)] text-white mt-1">
                  Team NAVAMESH at National Competition
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-[#39ff14]/30 text-xs font-mono text-[#39ff14]">
                <Shield className="w-3.5 h-3.5" />
                <span>SIH 2025 Grand Finalist Squad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Metric Counters */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { metric: "8+", label: "Podium Finishes", sub: "Hackathons & Summits" },
            { metric: "5+", label: "1st Place Trophies", sub: "Championship Wins" },
            { metric: "SIH '25", label: "Grand Finalist", sub: "National Elite" },
            { metric: "6+", label: "Hardware Prototypes", sub: "Robotics & CleanTech" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0a0a0a] border border-[#222222] hover:border-[#39ff14]/40 transition-all flex flex-col items-center text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#39ff14] font-[family-name:var(--font-rajdhani)] tracking-tight">
                {item.metric}
              </div>
              <div className="text-sm font-semibold text-white mt-1 uppercase tracking-wider">
                {item.label}
              </div>
              <div className="text-xs text-[#71717a] mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Showcase Highlights */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-4 border-b border-[#222222] gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#39ff14] uppercase">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-rajdhani)] text-white tracking-wide mt-1">
                TOP HONORS & VICTORIES
              </h2>
            </div>
            <Link
              href="/achievements"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#39ff14] hover:underline"
            >
              <span>View All 8 Recognitions</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.slice(0, 3).map((ach) => (
              <div
                key={ach.id}
                className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#222222] hover:border-[#39ff14]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/30">
                      {ach.position}
                    </span>
                    <span className="text-xs font-mono text-[#71717a]">{ach.year}</span>
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-rajdhani)] text-white group-hover:text-[#39ff14] transition-colors leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed mt-2.5 line-clamp-3">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between text-xs">
                  <span className="text-[#71717a]">{ach.category}</span>
                  <Link
                    href={`/achievements#cert-${ach.id}`}
                    className="text-[#39ff14] font-medium flex items-center gap-1 hover:underline"
                  >
                    Inspect Certificate <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "THE JOURNEY" Photo Bento Grid */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#39ff14] uppercase">
              Field Execution
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-[family-name:var(--font-rajdhani)] text-white tracking-wider mt-1">
              THE JOURNEY
            </h2>
            <p className="text-sm text-[#a1a1aa] max-w-xl mx-auto mt-2">
              From late-night circuit debugging to pitching in high-stakes auditoriums.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {journeyImages.map((img, i) => (
              <div
                key={i}
                className="group relative h-[320px] rounded-xl overflow-hidden border border-[#222222] bg-[#0a0a0a] hover:border-[#39ff14]/60 transition-all shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                <div className="absolute bottom-4 inset-x-4">
                  <div className="text-[11px] font-mono text-[#39ff14] uppercase">Phase 0{i + 1}</div>
                  <div className="text-sm font-bold text-white font-[family-name:var(--font-rajdhani)] mt-0.5">
                    {img.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hardware Innovations Teaser */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c0c0c] to-[#050505] border border-[#222222] relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#39ff14]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-mono tracking-widest text-[#39ff14] uppercase">
              Deep-Tech & Applied Research
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-rajdhani)] text-white tracking-wide mt-2 mb-4">
              BUILDING CUTTING-EDGE HARDWARE & EMBEDDED SYSTEMS
            </h2>
            <p className="text-sm text-[#a1a1aa] leading-relaxed mb-8">
              Explore our engineering projects: Sub-surface radar detection systems for disaster
              relief, multimode 6-DOF robotic arms, and biomimetic insect kinematics simulators.
            </p>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#39ff14] transition-colors"
            >
              <span>Explore All Technical Prototypes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
