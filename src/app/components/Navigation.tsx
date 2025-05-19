"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#tentang", label: "Tentang" },
  { href: "#proses", label: "Asal Usul" },
  { href: "#informasi", label: "Informasi Padi" },
  { href: "#peta", label: "Peta Kesehatan" },
  { href: "#kontak", label: "Kontak" },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white px-4 md:px-6 py-3 md:py-4 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto relative flex justify-between items-center">
        {/* Logo kiri */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logo-pojok.png"
            alt="AGRITS Logo"
            width={40}
            height={40}
            className="rounded-md w-20 md:w-24 h-12 object-contain"
          />
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex gap-4 bg-white/10 border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm mx-auto md:ml-[15%]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 items-start bg-black/80 p-4 rounded-xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-white text-lg hover:text-yellow-400"
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
