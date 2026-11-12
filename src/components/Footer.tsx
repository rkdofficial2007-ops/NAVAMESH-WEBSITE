import Link from "next/link";
import { Mail, ArrowUpRight, Award } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-[#0a0a0a] mt-24 py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#111111] border border-[#39ff14]/40 text-[#39ff14] font-bold text-lg font-[family-name:var(--font-rajdhani)]">
                N
              </div>
              <span className="font-bold text-xl tracking-[0.2em] text-white font-[family-name:var(--font-rajdhani)]">
                TEAM NAVAMESH
              </span>
            </div>
            <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-sm mb-4">
              Pushing the boundaries of technology through relentless innovation. Conquering
              national hackathons and pioneering deep-tech prototypes.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#39ff14]">
              <Award className="w-4 h-4" />
              <span>Smart India Hackathon 2025 Grand Finalist</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold tracking-widest text-white uppercase mb-4 font-[family-name:var(--font-rajdhani)]">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#a1a1aa]">
              <li>
                <Link href="/" className="hover:text-[#39ff14] transition-colors">
                  Home Portfolio
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-[#39ff14] transition-colors">
                  Hall of Achievements
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#39ff14] transition-colors">
                  Innovations & Hardware
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#39ff14] transition-colors">
                  Collaborate / Contact Us
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#39ff14] transition-colors">
                  Team Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Actions */}
          <div>
            <h3 className="text-sm font-bold tracking-widest text-[#39ff14] uppercase mb-4 font-[family-name:var(--font-rajdhani)]">
              Connect With Us
            </h3>
            <p className="text-xs text-[#a1a1aa] mb-4">
              Open for sponsorships, engineering collaborations, and research partnerships.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:navameshofficial@gmail.com"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-[#111111] border border-[#222222] hover:border-[#39ff14]/50 group transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#161616] flex items-center justify-center text-[#39ff14] group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-xs text-[#a1a1aa]">Email Inquiries</div>
                  <div className="text-xs font-mono text-white truncate group-hover:text-[#39ff14]">
                    navameshofficial@gmail.com
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#39ff14]" />
              </a>

              <a
                href="https://instagram.com/navamesh_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-[#111111] border border-[#222222] hover:border-[#39ff14]/50 group transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#161616] flex items-center justify-center text-[#39ff14] group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-xs text-[#a1a1aa]">Follow Updates</div>
                  <div className="text-xs font-mono text-white truncate group-hover:text-[#39ff14]">
                    @navamesh_official
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#39ff14]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717a] gap-4">
          <p>© 2026 Team NAVAMESH. All rights reserved.</p>
          <div className="flex items-center gap-1 font-mono text-[11px] text-[#39ff14]/70">
            <span>READY FOR DEPLOYMENT • SECURE SSR APIS • FULL STACK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
