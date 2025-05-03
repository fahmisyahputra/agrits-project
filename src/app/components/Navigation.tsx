"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#tentang", label: "tentang" },
  { href: "#proses", label: "proses" },
  { href: "#informasi", label: "informasi" },
  { href: "#peta", label: "peta" },
  { href: "#kontak", label: "kontak" },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto relative flex justify-end items-center">
        {/* Mobile Button - Top Left */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex gap-4 bg-white/10 border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-museo px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 items-start bg-black/80 p-4 rounded-xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white font-museo text-lg hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navigation;
