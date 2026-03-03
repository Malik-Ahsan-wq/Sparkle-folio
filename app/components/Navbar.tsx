"use client";

import Link from "next/link";
import { Menu, X,Sparkle, Folder } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#0F0F0F] text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-6 md:p-8">
    <div className="relative inline-block">
      {/* Letter A */}
      <Link href="/" className="text-2xl md:text-xl font-extrabold tracking-tight uppercase text-white">
      <span className="text-2xl md:text-xl font-extrabold tracking-tight uppercase text-white">
        A
      </span>
      </Link>

      {/* Sparkles */}
      <Sparkle className="absolute -top-2 -left-2 text-indigo-400 w-5 h-5 animate-spin-slow" />
      <Sparkle className="absolute -bottom-2 -right-2 text-pink-400 w-3 h-3 animate-bounce-slow" />
      <Sparkle className="absolute top-0 right-1 text-purple-400 w-2 h-2 animate-pulse" />
    </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-400 text-sm">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/works" className="hover:text-white transition">
            Works
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
    href="/contact"
    className={`
      group relative inline-flex items-center justify-center gap-2
      overflow-hidden rounded-full px-7 py-3.5
      bg-gray-800/70 backdrop-blur-sm border border-gray-700/70
      text-gray-200 font-medium text-base
      shadow-md shadow-black/30
      transition-all duration-300 ease-out
      hover:bg-gray-700/80 hover:border-indigo-500/50 hover:text-white
      hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20
      active:translate-y-0 active:shadow-md
    `}
  >
   
    <span className="relative">Let's Talk</span>
  </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <X size={28} className="text-white transition-transform duration-300" />
            ) : (
              <Menu size={28} className="text-white transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#1A1A1A] border-t border-white/5 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <Link
            href="/"
            className="hover:text-indigo-500 transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-indigo-500 transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/works"
            className="hover:text-indigo-500 transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            Works
          </Link>
          <Link
            href="/contact"
            className="hover:text-indigo-500 transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <button
            className="bg-[#1F1F1F] px-6 py-2 rounded-full text-sm font-medium border border-white/5 hover:bg-white hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Let's talk
          </button>
        </div>
      </div>
    </nav>
  );
}