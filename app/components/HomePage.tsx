"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Download, Folder, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  "Next.js", "Tailwind CSS", "Supabase", "MongoDB", "React.js",
  "Express.js", "Node.js", "MERN Stack", "Shopify", "TypeScript",
  "BullMQ", "Redis", "Drizzle ORM", "Zod", "NextAuth", "Firebase Auth",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "6+", label: "Live Projects" },
  { value: "3", label: "Companies" },
  { value: "100%", label: "Client Focus" },
];

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-name", { y: 80, opacity: 0, duration: 1.4, ease: "power3.out", stagger: 0.2 });
      gsap.from(".hero-sparkle", { scale: 0, opacity: 0, duration: 1, ease: "back.out(1.7)", stagger: 0.25 });
      gsap.from(".profile-img-container", {
        scale: 0.92, opacity: 0, duration: 1.6, ease: "power3.out",
        scrollTrigger: { trigger: ".profile-img-container", start: "top 85%" },
      });
      gsap.from(".summary-card", {
        y: 60, opacity: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".summary-card", start: "top 80%" },
      });
      gsap.from(".stat-item", {
        y: 30, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ".stats-row", start: "top 85%" },
      });
      gsap.from(".action-card", {
        y: 70, opacity: 0, duration: 1.1, ease: "power3.out", stagger: 0.2,
        scrollTrigger: { trigger: ".action-cards", start: "top 80%" },
      });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      if (!marqueeRef.current) return;
      const items = marqueeRef.current.querySelectorAll("span");
      const totalWidth = Array.from(items).reduce((sum, el) => sum + el.offsetWidth + 48, 0);
      gsap.to(marqueeRef.current, { x: -totalWidth / 2, duration: 40, ease: "none", repeat: -1 });
    },
    { scope: marqueeRef }
  );

  return (
    <div ref={container} className="pt-[68px] min-h-screen text-white bg-[#080808] dot-grid">
      <Navbar />

      {/* Ambient glow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-600/6 blur-[100px]" />
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* ── Hero Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">

          {/* Profile Image */}
          <div className="glass-card p-5 profile-img-container gradient-border">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-950">
              <Image
                src="/Gemini_Generated_Image_ke0v4eke0v4eke0v (1).png"
                alt="Ahsan Bashir"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay badge */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="glass-card-strong px-3 py-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-gray-300 font-medium" style={{ fontFamily: "var(--font-mono)" }}>
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="flex items-center justify-center gap-4">
              <Sparkles className="text-indigo-400/60 hero-sparkle" size={28} />
              <h1
                className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-center hero-name"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Ahsan{" "}
                <span className="gradient-text hero-name">Bashir</span>
              </h1>
              <Sparkles className="text-indigo-400/60 hero-sparkle" size={28} />
            </div>

            <div className="glass-card p-6 md:p-10 relative overflow-hidden summary-card noise-overlay">
              <Sparkles className="absolute top-5 left-5 text-indigo-500/20" size={36} />

              <div className="relative z-10 flex flex-col gap-5">
                <div>
                  <span className="tag mb-3 inline-flex">Full-Stack &amp; Shopify Developer</span>
                  <h2
                    className="text-3xl md:text-4xl font-bold mt-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Building{" "}
                    <span className="gradient-text">scalable</span>{" "}
                    web experiences
                  </h2>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xl">
                  A versatile Full-Stack Developer with <strong className="text-white">2+ years</strong> of professional experience
                  specializing in MERN Stack, Next.js, Shopify Development, and Canva Design. Skilled in building
                  modern, high-performance web applications and e-commerce solutions.
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href="/Ahsan.Dev.pdf"
                    download
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <Download size={15} />
                    <span className="relative">Download CV</span>
                  </a>

                  <a
                    href="/works"
                    className="group inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/10 hover:border-indigo-500/40 text-gray-300 hover:text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:bg-white/5 active:scale-95"
                  >
                    <Folder size={15} />
                    <span>View Projects</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/10 hover:border-indigo-500/40 text-gray-300 hover:text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:bg-white/5 active:scale-95"
                  >
                    <Mail size={15} />
                    <span>Hire Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 stats-row">
          {stats.map((s, i) => (
            <div key={i} className="glass-card p-5 text-center stat-item">
              <div
                className="text-3xl md:text-4xl font-bold gradient-text mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {s.value}
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Action Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 action-cards">

          {/* Profiles */}
          <div className="glass-card p-7 group flex flex-col justify-between action-card">
            <div className="flex gap-4 justify-center py-4">
              {[
                { href: "/contact", icon: <MdEmail size={22} className="text-indigo-400" /> },
                { href: "https://www.linkedin.com/in/m-ahsan-bashir/", icon: <FaLinkedin size={22} className="text-indigo-400" />, external: true },
                { href: "https://github.com/", icon: <FaGithub size={22} className="text-indigo-400" />, external: true },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/8 flex items-center justify-center hover:bg-indigo-500/15 hover:border-indigo-500/30 hover:scale-110 transition-all duration-300 pulse-ring"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div>
              <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-mono)" }}>Stay connected</p>
              <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-syne)" }}>Profiles</h3>
            </div>
            <ArrowUpRight className="ml-auto text-gray-700 group-hover:text-indigo-400 transition-colors" size={18} />
          </div>

          {/* CTA */}
          <div className="md:col-span-2 glass-card p-10 group flex flex-col justify-between relative overflow-hidden action-card glow-indigo noise-overlay">
            <Link href="/contact" className="flex flex-col h-full">
              <Sparkles className="absolute top-6 left-6 text-indigo-500/20" size={28} />
              <div className="mt-10 flex-1">
                <h2
                  className="text-4xl md:text-5xl font-bold leading-tight mb-4"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Let&apos;s work{" "}
                  <span className="gradient-text">together.</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  Have a project in mind? I build fast, scalable, and modern web applications.
                  From idea to deployment — clean code, performance, great UX.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-indigo-400 text-sm font-semibold group-hover:gap-3 transition-all">
                <span>Start a project</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Credentials */}
          <div className="glass-card p-7 group flex flex-col justify-between action-card">
            <div className="flex justify-center py-4 opacity-60 group-hover:opacity-90 transition-opacity">
              <Link href="/about">
                <img className="w-40 rounded-xl" src="/Gemini_Generated_Image_albe2galbe2galbe.png" alt="credentials" />
              </Link>
            </div>
            <div>
              <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-mono)" }}>More about me</p>
              <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-syne)" }}>Credentials</h3>
            </div>
            <ArrowUpRight className="ml-auto text-gray-700 group-hover:text-indigo-400 transition-colors" size={18} />
          </div>
        </div>

        {/* ── Tech Marquee ── */}
        <div className="glass-card overflow-hidden py-5 mb-16">
          <div className="relative flex overflow-hidden">
            <div
              ref={marqueeRef}
              className="flex whitespace-nowrap gap-12 text-sm font-medium text-gray-500"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {[...brands, ...brands, ...brands].map((brand, i) => (
                <span
                  key={i}
                  className="flex items-center flex-shrink-0 gap-2 hover:text-indigo-400 transition-colors duration-300 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/70 inline-block" />
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-8 py-10 text-center">
        <div
          className="text-lg font-bold uppercase tracking-widest mb-5 gradient-text"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          AHSAN BASHIR
        </div>
        <nav className="flex justify-center gap-8 text-gray-600 text-[11px] uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
          {["/", "/about", "/works", "/contact", "/testimonials"].map((href, i) => (
            <Link key={i} href={href} className="hover:text-white transition-colors">
              {href === "/" ? "Home" : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
            </Link>
          ))}
        </nav>
        <p className="mt-5 text-gray-700 text-[10px]" style={{ fontFamily: "var(--font-mono)" }}>
          © {new Date().getFullYear()} Ahsan Bashir. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
