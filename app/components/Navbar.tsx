"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-[9999] w-full border-b border-white/5 bg-[#0F0F0F] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/favicon.svg"
              alt="Logo"
              className="h-8 w-8 sm:h-9 sm:w-9"
              width={36}
              height={36}
            />
            {/* Optional: add text logo if you want */}
            {/* <span className="text-lg font-semibold tracking-tight">YourName</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-7 text-sm font-medium text-gray-400">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className={`
                relative inline-flex items-center justify-center gap-2
                rounded-full px-6 py-2.5 text-sm font-medium
                bg-gradient-to-b from-gray-800 to-gray-900
                border border-gray-700/60 text-gray-200
                shadow-md shadow-black/20
                transition-all duration-300 ease-out
                hover:border-indigo-500/40 hover:text-white hover:shadow-indigo-500/10 hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0F0F]
                active:translate-y-0
              `}
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md p-1"
          >
            {isOpen ? (
              <X className="h-7 w-7 transition-transform duration-300" />
            ) : (
              <Menu className="h-7 w-7 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`
          md:hidden fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-xs bg-black border-l border-white/5
          transform transition-transform duration-400 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/5 px-6">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-gray-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full p-1"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col px-6 py-10 gap-6 text-lg bg-black font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300  hover:text-white transition-colors focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className={`
              mt-4 inline-flex justify-center rounded-full px-8 py-3.5 text-base font-medium
              bg-gradient-to-b from-indigo-600/90 to-indigo-700
              text-white shadow-lg shadow-indigo-500/20
              transition-all duration-300
              hover:from-indigo-500 hover:to-indigo-600 hover:shadow-indigo-500/30 hover:-translate-y-0.5
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]
              active:translate-y-0
            `}
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}