"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Works",        href: "/works" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-[9999]
          transition-all duration-500 ease-out
          ${scrolled
            ? "border-b border-white/[0.06] bg-[#080808]/85 backdrop-blur-2xl shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
            : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex h-[68px] items-center justify-between">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Ahsan Bashir — Home"
            >
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                <span
                  className="text-white text-xs font-black tracking-tight"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  AB
                </span>
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span
                  className="text-[13px] font-bold text-white tracking-wide"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Ahsan Bashir
                </span>
                <span
                  className="text-[10px] text-gray-500 tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Full-Stack · Shopify
                </span>
              </div>
            </Link>

            {/* ── Desktop Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative px-4 py-2 rounded-lg text-sm font-medium
                      transition-all duration-200 group
                      ${active
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                      }
                    `}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {/* hover / active bg pill */}
                    <span
                      className={`
                        absolute inset-0 rounded-lg transition-all duration-200
                        ${active
                          ? "bg-white/[0.07] border border-white/[0.08]"
                          : "bg-transparent group-hover:bg-white/[0.04]"
                        }
                      `}
                    />
                    <span className="relative">{link.label}</span>

                    {/* active bottom dot */}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── Right: availability + CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              {/* availability pill */}
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.03]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] text-gray-400 tracking-wide">Available</span>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="
                  group relative inline-flex items-center gap-2
                  px-5 py-2.5 rounded-full
                  bg-indigo-600 hover:bg-indigo-500
                  text-white text-sm font-semibold
                  shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40
                  transition-all duration-300 hover:scale-[1.03] active:scale-95
                  overflow-hidden
                "
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Let&apos;s Talk</span>
                <ArrowUpRight
                  size={14}
                  className="relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden relative z-50 w-10 h-10 rounded-xl
                flex items-center justify-center
                border border-white/[0.08] bg-white/[0.04]
                text-gray-300 hover:text-white hover:bg-white/[0.08]
                transition-all duration-200
              "
            >
              {isOpen
                ? <X size={18} />
                : <Menu size={18} />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`
          fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm
          transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
        aria-hidden
      />

      {/* ── Mobile drawer ── */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-[9999] w-[300px]
          bg-[#0c0c0c] border-l border-white/[0.07]
          flex flex-col
          transform transition-transform duration-300 ease-out md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* drawer header */}
        <div className="flex items-center justify-between px-6 h-[68px] border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-[11px] font-black" style={{ fontFamily: "var(--font-syne)" }}>AB</span>
            </div>
            <span className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
              Ahsan Bashir
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
          >
            <X size={16} />
          </button>
        </div>

        {/* drawer links */}
        <div className="flex flex-col gap-1 px-4 pt-6 flex-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center justify-between px-4 py-3.5 rounded-xl
                  text-sm font-medium transition-all duration-200
                  ${active
                    ? "bg-indigo-600/15 border border-indigo-500/25 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }
                `}
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <span>{link.label}</span>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
              </Link>
            );
          })}
        </div>

        {/* drawer footer */}
        <div className="px-4 pb-8 pt-4 border-t border-white/[0.06] space-y-3">
          {/* availability */}
          <div
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.02]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] text-gray-400 tracking-wide">Available for work</span>
          </div>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="
              flex items-center justify-center gap-2
              w-full py-3.5 rounded-xl
              bg-indigo-600 hover:bg-indigo-500
              text-white text-sm font-semibold
              shadow-lg shadow-indigo-600/20
              transition-all duration-200 active:scale-95
            "
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Let&apos;s Talk
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
}
