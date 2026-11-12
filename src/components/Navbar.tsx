"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trophy, Cpu, Mail, Menu, X, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/achievements", label: "Achievements", icon: Trophy },
    { href: "/projects", label: "Projects", icon: Cpu },
    { href: "/contact", label: "Contact Us", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222222] bg-[#050505]/85 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#0a0a0a] border border-[#39ff14]/40 group-hover:border-[#39ff14] transition-all">
            <span className="font-bold text-xl text-[#39ff14] font-[family-name:var(--font-rajdhani)]">
              N
            </span>
            <div className="absolute inset-0 rounded-full border border-[#39ff14]/30 scale-110 animate-pulse pointer-events-none" />
          </div>
          <span className="font-bold text-xl sm:text-2xl tracking-[0.2em] text-white font-[family-name:var(--font-rajdhani)] group-hover:text-[#39ff14] transition-colors">
            NAVAMESH
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wider uppercase transition-colors py-1 relative ${
                  isActive ? "text-[#39ff14]" : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#39ff14] shadow-[0_0_8px_#39ff14]" />
                )}
              </Link>
            );
          })}

          <Link
            href="/admin"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/10 text-[#39ff14] text-xs font-bold tracking-widest uppercase hover:bg-[#39ff14] hover:text-black transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Admin Portal
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg bg-[#111111] text-[#a1a1aa] hover:text-[#39ff14] border border-[#222222]"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#222222] bg-[#0a0a0a] px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-semibold tracking-wider uppercase py-2 flex items-center justify-between ${
                pathname === link.href ? "text-[#39ff14]" : "text-[#a1a1aa]"
              }`}
            >
              <span>{link.label}</span>
              {link.icon && <link.icon className="w-4 h-4 text-[#39ff14]" />}
            </Link>
          ))}
          <Link
            href="/admin"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center py-2.5 rounded-lg border border-[#39ff14]/30 bg-[#39ff14]/10 text-[#39ff14] text-xs font-bold tracking-widest uppercase"
          >
            Access Admin Portal
          </Link>
        </div>
      )}
    </header>
  );
}
