"use client";

import Link from "next/link";
import { Menu, X, Home, User, Folder, MessageSquare, Mail } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Works", href: "/works", icon: Folder },
  { label: "Testimonials", href: "/testimonials", icon: MessageSquare },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
   
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
            <div className="flex items-center gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative"
                  >
                    <div
                      className={`
                        p-2.5 rounded-lg transition-all duration-300
                        ${isActive 
                          ? 'text-white bg-white/10' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }
                      `}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>

           
            {/* <Link
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
            </Link> */}
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

        <div className="flex flex-col px-6 py-10 gap-4 bg-black">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300
                  ${isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={22} />
                <span className="text-base font-medium">{item.label}</span>
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`
    group relative inline-flex items-center justify-center gap-2
    overflow-hidden rounded-full px-7 py-3.5
    bg-gradient-to-r from-blue-600-to-cyan-500
    text-white font-medium text-base
    shadow-lg shadow-blue-700 hover:shadow-blue-500/40
    transition-all duration-300 ease-out
    hover:scale-[1.04] hover:shadow-xl
    active:scale-95
  `}
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
}