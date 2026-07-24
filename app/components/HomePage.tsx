"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Download, Folder, Mail, Code, ShoppingBag, Palette, Globe, Star, Quote } from "lucide-react";
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

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "GSAP / Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "MongoDB / Supabase", level: 88 },
      { name: "Shopify", level: 85 },
      { name: "Redis / BullMQ", level: 80 },
    ],
  },
];

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    desc: "MERN Stack, Next.js, TypeScript — building scalable, high-performance web applications from frontend to backend.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    desc: "Custom Shopify stores, theme development, Liquid templating, payment gateway & shipping integrations.",
  },
  {
    icon: Palette,
    title: "UI/UX & Canva Design",
    desc: "Modern, responsive interfaces and marketing assets — banners, posters, and visual branding with Canva.",
  },
  {
    icon: Globe,
    title: "API & Integrations",
    desc: "RESTful APIs, OAuth, JWT, payment gateways (Paddle, Careem.io), BullMQ queues, Redis caching.",
  },
];

const featuredProjects = [
  {
    title: "tools.websolave.com",
    url: "https://tools.websolave.com",
    tag: "AI Tools Platform",
    desc: "AI-SEO Analyzer, AI-Bio Builder, and AI-QR Code Generator.",
    stack: ["Next.js", "TypeScript", "Supabase", "AI"],
    accent: "from-indigo-600/20 to-purple-600/10",
  },
  {
    title: "fetchply.com",
    url: "https://fetchply.com",
    tag: "Real-Time Platform",
    desc: "Real-time chatting, WhatsApp, Slack, WooCommerce & Shopify integrations.",
    stack: ["Next.js", "BullMQ", "Redis", "Shopify API"],
    accent: "from-blue-600/20 to-cyan-600/10",
  },
  {
    title: "livetawk.com",
    url: "https://livetawk.com",
    tag: "Live Chat System",
    desc: "Professional full-stack live chat system for real-time customer support.",
    stack: ["Next.js", "Node.js", "WebSockets"],
    accent: "from-emerald-600/15 to-teal-600/10",
  },
  {
    title: "brutalbill.com",
    url: "https://brutalbill.com",
    tag: "Invoice Generator",
    desc: "Professional invoice generator — always free, no cost. Seamless invoice management.",
    stack: ["Next.js", "TypeScript", "PDF Gen"],
    accent: "from-yellow-600/15 to-amber-600/10",
  },
];

const miniTestimonials = [
  {
    name: "Sarah Ahmed",
    role: "Product Manager, TechNova",
    text: "Ahsan completely transformed our digital presence. His attention to detail and performance optimizations far exceeded expectations.",
    rating: 5,
  },
  {
    name: "Omar Khalid",
    role: "CEO, GrowEasy Analytics",
    text: "Clean code, excellent communication, delivery ahead of schedule. One of the most seamless development partnerships we have experienced.",
    rating: 5,
  },
  {
    name: "Ayesha Malik",
    role: "Marketing Director, Bloom Cosmetics",
    text: "47% uplift in conversions in the first month. The e-commerce experience is stunning across all devices — top-tier work.",
    rating: 5,
  },
];

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const rafId = useRef(0);

  useGSAP(
    () => {
      gsap.defaults({ force3D: true });

      // ── Hero: multi-dimensional entrance ──
      const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
      heroTl
        .from(".hero-name", {
          y: 120, opacity: 0, rotateX: -60, duration: 1.6, stagger: 0.15,
          transformOrigin: "top center", ease: "power4.out",
        })
        .from(".hero-sparkle", {
          scale: 0, opacity: 0, rotation: -180, duration: 1.2,
          ease: "elastic.out(1, 0.5)", stagger: 0.2,
        }, "-=0.8")
        .from(".hero-tag", {
          y: 40, opacity: 0, scale: 0.9, duration: 1, ease: "back.out(1.7)",
        }, "-=0.5")
        .from(".hero-subtitle", {
          y: 50, opacity: 0, duration: 1.2,
          ease: "power4.out",
        }, "-=0.5")
        .from(".hero-desc", {
          y: 30, opacity: 0, scale: 0.97, duration: 0.9,
          ease: "power3.out",
        }, "-=0.4")
        .from(".hero-btn", {
          y: 30, opacity: 0, scale: 0.95, duration: 0.7,
          stagger: 0.08, ease: "back.out(1.4)",
        }, "-=0.3");

      // ── Hero idle micro-animations ──
      gsap.to(".hero-sparkle", {
        scale: 1.15, opacity: 0.3, duration: 2,
        ease: "sine.inOut", yoyo: true, repeat: -1, stagger: 0.4,
      });
      gsap.to(".hero-name", {
        y: -4, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, stagger: 0.2,
      });

      // ── Profile image: clip-path circle reveal + parallax ──
      gsap.from(".profile-img-container", {
        scale: 0.85, opacity: 0, duration: 1.8, ease: "power4.out",
        scrollTrigger: {
          trigger: ".profile-img-container", start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(".profile-img-container", {
        y: -30, ease: "none",
        scrollTrigger: {
          trigger: ".profile-img-container", start: "top bottom", end: "bottom top",
          scrub: 1.5,
        },
      });

      // ── Summary card: staggered layers ──
      gsap.from(".summary-card", {
        y: 80, opacity: 0, scale: 0.96, duration: 1.5, ease: "power4.out",
        scrollTrigger: {
          trigger: ".summary-card", start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      // ── Stats: counter + card stagger ──
      const statEls = gsap.utils.toArray<HTMLElement>(".stat-item");
      statEls.forEach((el, i) => {
        const valueEl = el.querySelector(".stat-value");
        gsap.fromTo(el,
          { y: 50, opacity: 0, scale: 0.92 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.4)",
            scrollTrigger: { trigger: el, start: "top 88%" },
            delay: i * 0.12,
            onStart: () => {
              if (!valueEl) return;
              const finalText = valueEl.textContent || "";
              const num = parseFloat(finalText);
              if (isNaN(num)) {
                valueEl.textContent = finalText;
                return;
              }
              const suffix = finalText.replace(/[\d.]/g, "");
              const end = num;
              const counter = { val: 0 };
              gsap.to(counter, {
                val: end,
                duration: 2,
                ease: "power3.inOut",
                onUpdate: () => {
                  valueEl.textContent = Number.isInteger(end)
                    ? Math.floor(counter.val) + suffix
                    : counter.val.toFixed(1) + suffix;
                },
              });
            },
          }
        );
      });

      // ── Skills: bar fill + stagger ──
      const skillItems = gsap.utils.toArray<HTMLElement>(".skill-item");
      skillItems.forEach((item, i) => {
        const bar = item.querySelector<HTMLElement>(".skill-bar");
        const percentEl = item.querySelector<HTMLElement>(".skill-percent");
        const target = parseInt(percentEl?.getAttribute("data-target") || "0");

        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0, duration: 0.7, ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: ".skills-grid", start: "top 78%" },
            onStart: () => {
              if (!bar) return;
              gsap.to(bar, {
                width: `${target}%`,
                duration: 1.4,
                ease: "power3.inOut",
                delay: 0.2,
              });
              if (!percentEl) return;
              const obj = { val: 0 };
              gsap.to(obj, {
                val: target,
                duration: 1.6,
                ease: "power3.inOut",
                delay: 0.2,
                onUpdate: () => {
                  percentEl.textContent = `${Math.floor(obj.val)}%`;
                },
              });
            },
          }
        );
      });

      gsap.from(".skill-category", {
        y: 50, opacity: 0, scale: 0.95, duration: 1.1, ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".skills-grid", start: "top 82%" },
      });

      gsap.utils.toArray<HTMLElement>(".skill-category").forEach((card) => {
        gsap.to(card, {
          y: -3, duration: 3 + Math.random() * 2,
          ease: "sine.inOut", yoyo: true, repeat: -1, delay: Math.random() * 2,
        });
      });

      // ── Section header: bar morph + title reveal ──
      gsap.utils.toArray<HTMLElement>(".section-bar").forEach((bar) => {
        gsap.from(bar, {
          scaleX: 0, duration: 1, ease: "power4.out",
          transformOrigin: "left center",
          scrollTrigger: { trigger: bar, start: "top 88%" },
        });
        gsap.to(bar, {
          opacity: 0.4, duration: 1.2, ease: "sine.inOut", yoyo: true, repeat: -1,
        });
      });
      gsap.utils.toArray<HTMLElement>(".section-title").forEach((title) => {
        gsap.from(title, {
          y: 50, opacity: 0, duration: 1.1, ease: "power4.out",
          scrollTrigger: { trigger: title, start: "top 82%" },
        });
      });

      // ── Services: alternating directional stagger + icon float ──
      gsap.from(".service-card", {
        y: 80, opacity: 0, scale: 0.93, duration: 1.2,
        ease: "power4.out", stagger: { each: 0.15, from: "start" },
        scrollTrigger: { trigger: ".services-grid", start: "top 78%" },
      });
      gsap.from(".service-icon", {
        scale: 0, opacity: 0, rotation: -90, duration: 1,
        ease: "back.out(2)", stagger: 0.18,
        scrollTrigger: { trigger: ".services-grid", start: "top 73%" },
      });
      gsap.utils.toArray<HTMLElement>(".service-icon").forEach((icon) => {
        gsap.to(icon, {
          y: -4, duration: 2.5 + Math.random() * 1.5,
          ease: "sine.inOut", yoyo: true, repeat: -1,
        });
      });

      // ── Projects: stagger with rotation + preview Ken Burns ──
      gsap.from(".project-card", {
        y: 70, opacity: 0, rotationX: -10, duration: 1.2,
        ease: "power4.out", stagger: { each: 0.13, from: "start" },
        transformOrigin: "top center",
        scrollTrigger: { trigger: ".projects-grid", start: "top 78%" },
      });
      gsap.from(".project-preview", {
        scale: 0.88, opacity: 0, duration: 1.2, ease: "power4.out",
        stagger: 0.13,
        scrollTrigger: { trigger: ".projects-grid", start: "top 73%" },
      });

      // ── Testimonials: quote draw + star ripple ──
      gsap.from(".testimonial-card", {
        y: 70, opacity: 0, scale: 0.94, duration: 1.2,
        ease: "power4.out", stagger: 0.13,
        scrollTrigger: { trigger: ".testimonials-grid", start: "top 78%" },
      });
      gsap.from(".testimonial-star", {
        scale: 0, opacity: 0, rotation: -180, duration: 0.6,
        ease: "back.out(2)", stagger: 0.05,
        scrollTrigger: { trigger: ".testimonials-grid", start: "top 73%" },
      });
      gsap.from(".testimonial-quote", {
        scaleX: 0, opacity: 0, duration: 0.7, ease: "power4.out",
        transformOrigin: "left center", stagger: 0.18,
        scrollTrigger: { trigger: ".testimonials-grid", start: "top 73%" },
      });

      // ── Action cards: staggered from different directions ──
      gsap.utils.toArray<HTMLElement>(".action-card").forEach((card, i) => {
        gsap.from(card, {
          y: 80, opacity: 0, scale: 0.92, duration: 1.2,
          ease: "power4.out", delay: i * 0.1,
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });

      // ── CTA: scale + glow surge ──
      gsap.from(".cta-section", {
        scale: 0.9, opacity: 0, duration: 1.6, ease: "power4.out",
        scrollTrigger: { trigger: ".cta-section", start: "top 82%" },
      });
      gsap.from(".cta-heading", {
        y: 60, opacity: 0, scale: 0.96, duration: 1.3, ease: "power4.out",
        scrollTrigger: { trigger: ".cta-section", start: "top 78%" },
      });
      gsap.from(".cta-desc", {
        y: 30, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".cta-section", start: "top 78%" },
      });
      gsap.from(".cta-btn", {
        y: 25, opacity: 0, scale: 0.95, duration: 0.8, ease: "back.out(1.4)",
        stagger: 0.1,
        scrollTrigger: { trigger: ".cta-section", start: "top 78%" },
      });

      // ── Footer ──
      gsap.from(".footer-content", {
        y: 50, opacity: 0, duration: 1.3, ease: "power4.out",
        scrollTrigger: { trigger: ".footer-content", start: "top 88%" },
      });

      // ── Ambient blobs: parallax on scroll + mouse tracking ──
      if (blob1Ref.current) {
        gsap.to(blob1Ref.current, {
          y: 80, x: 40, duration: 8, ease: "sine.inOut", repeat: -1, yoyo: true,
        });
        gsap.to(blob1Ref.current, {
          y: -60, ease: "none",
          scrollTrigger: {
            trigger: blob1Ref.current, start: "top bottom", end: "bottom top",
            scrub: 2,
          },
        });
      }
      if (blob2Ref.current) {
        gsap.to(blob2Ref.current, {
          y: -50, x: -30, duration: 10, ease: "sine.inOut", repeat: -1, yoyo: true,
        });
        gsap.to(blob2Ref.current, {
          y: 40, ease: "none",
          scrollTrigger: {
            trigger: blob2Ref.current, start: "top bottom", end: "bottom top",
            scrub: 2,
          },
        });
      }

      // ── Mouse-follow parallax on hero (optimized) ──
      if (heroRef.current) {
        const heroEl = heroRef.current;
        const quickNameX = gsap.quickTo(".hero-name", "x", { duration: 1.2, ease: "power2.out" });
        const quickNameY = gsap.quickTo(".hero-name", "y", { duration: 1.2, ease: "power2.out" });
        const quickSparkX = gsap.quickTo(".hero-sparkle", "x", { duration: 1.5, ease: "power2.out" });
        const quickSparkY = gsap.quickTo(".hero-sparkle", "y", { duration: 1.5, ease: "power2.out" });
        const handleMouse = (e: MouseEvent) => {
          const rect = heroEl.getBoundingClientRect();
          mouseX.current = (e.clientX - rect.left) / rect.width - 0.5;
          mouseY.current = (e.clientY - rect.top) / rect.height - 0.5;
          if (!rafId.current) {
            rafId.current = requestAnimationFrame(() => {
              quickNameX(mouseX.current * 20);
              quickNameY(mouseY.current * 10);
              quickSparkX(mouseX.current * 30);
              quickSparkY(mouseY.current * 15);
              rafId.current = 0;
            });
          }
        };
        heroEl.addEventListener("mousemove", handleMouse);
        return () => {
          heroEl.removeEventListener("mousemove", handleMouse);
          cancelAnimationFrame(rafId.current);
        };
      }
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
    <div ref={container} className="pt-[68px] min-h-screen md:mt-20 mt-10 text-white bg-[#080808] dot-grid">
      <Navbar />

      {/* Ambient glow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div ref={blob1Ref} className="ambient-blob-1 absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[120px]" />
        <div ref={blob2Ref} className="ambient-blob-2 absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-600/6 blur-[100px]" />
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* ── Hero Grid ── */}
        <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-start">

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
          <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <Sparkles className="text-indigo-400/60 hero-sparkle hidden sm:block" size={22} />
              <h1
                className="text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter text-center hero-name"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Ahsan{" "}
                <span className="gradient-text hero-name">Bashir</span>
              </h1>
              <Sparkles className="text-indigo-400/60 hero-sparkle hidden sm:block" size={22} />
            </div>

            <div className="glass-card p-5 md:p-10 relative overflow-hidden summary-card noise-overlay">
              <Sparkles className="absolute top-5 left-5 text-indigo-500/20" size={28} />

              <div className="relative z-10 flex flex-col gap-4 md:gap-5">
                <div>
                  <span className="tag mb-3 inline-flex hero-tag">Full-Stack &amp; Shopify Developer</span>
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 hero-subtitle"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Building{" "}
                    <span className="gradient-text">scalable</span>{" "}
                    web experiences
                  </h2>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xl hero-desc">
                  A versatile Full-Stack Developer with <strong className="text-white">2+ years</strong> of professional experience
                  specializing in MERN Stack, Next.js, Shopify Development, and Canva Design. Skilled in building
                  modern, high-performance web applications and e-commerce solutions.
                </p>

                <div className="flex flex-wrap gap-3 mt-2 hero-btn">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16 stats-row">
          {stats.map((s, i) => (
            <div key={i} className="glass-card p-4 md:p-5 text-center stat-item">
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 stat-value"
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

        {/* ── Skills Section ── */}
        <div className="my-16 skills-section">
          <div className="flex items-center gap-2 md:gap-3 mb-10">
            <span className="w-1 h-7 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-500 inline-block section-bar" />
            <h2
              className="text-xl md:text-3xl font-bold section-title"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Tech <span className="gradient-text">Stack</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 skills-grid">
            {skillCategories.map((cat, ci) => (
              <div key={ci} className="glass-card p-5 md:p-8 skill-category">
                <h3
                  className="text-xs md:text-sm font-bold uppercase tracking-widest text-indigo-400/80 mb-5 md:mb-7 skill-cat-title"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {cat.title}
                </h3>
                <div className="flex flex-col gap-4 md:gap-5">
                  {cat.skills.map((skill, si) => (
                    <div key={si} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-300 skill-name">{skill.name}</span>
                        <span
                          className="text-xs font-mono text-indigo-400 tabular-nums skill-percent"
                          data-target={skill.level}
                        >
                          0%
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 skill-bar"
                          style={{ width: "0%", backgroundSize: "200% 100%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Services Section ── */}
        <div className="my-16">
          <div className="flex items-center gap-2 md:gap-3 mb-8">
            <span className="w-1 h-7 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500 inline-block section-bar" />
            <h2
              className="text-xl md:text-3xl font-bold section-title"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              What <span className="gradient-text">I Do</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 services-grid">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="glass-card p-5 md:p-7 group service-card hover:border-indigo-500/25 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-indigo-500/20 transition-colors service-icon">
                    <Icon size={20} className="text-indigo-400" />
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Featured Projects ── */}
        <div className="my-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="w-1 h-7 rounded-full bg-gradient-to-b from-blue-500 to-indigo-500 inline-block section-bar" />
              <h2
                className="text-xl md:text-3xl font-bold section-title"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <Link
              href="/works"
              className="hidden sm:inline-flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors group"
            >
              View all
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 projects-grid">
            {featuredProjects.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 group project-card hover:border-indigo-500/25 transition-all duration-300"
              >
                <div className={`aspect-video rounded-xl overflow-hidden mb-4 bg-gradient-to-br ${p.accent} border border-white/5 flex items-center justify-center project-preview`}>
                  <p
                    className="text-lg md:text-xl font-bold text-white/20 tracking-tight select-none"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {p.title}
                  </p>
                </div>
                <span className="tag mb-2 inline-flex">{p.tag}</span>
                <h3
                  className="text-base font-bold mt-1 mb-1.5"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-gray-400"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div className="my-16">
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
            <span className="w-1 h-7 rounded-full bg-gradient-to-b from-purple-500 to-indigo-500 inline-block section-bar" />
            <h2
              className="text-xl md:text-3xl font-bold section-title"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              What Clients <span className="gradient-text">Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 testimonials-grid">
            {miniTestimonials.map((t, i) => (
              <div
                key={i}
                className="glass-card p-6 md:p-7 group testimonial-card hover:border-indigo-500/25 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-indigo-500 text-indigo-500 testimonial-star" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-indigo-600/15 mb-3 testimonial-quote" />
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-[10px] text-gray-500" style={{ fontFamily: "var(--font-mono)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors group"
            >
              Read all testimonials
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ── Action Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-16 action-cards">

          {/* Profiles */}
          <div className="glass-card p-5 md:p-7 group flex flex-col justify-between action-card">
            <div className="flex gap-2 md:gap-4 justify-center py-4">
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
          <div className="md:col-span-2 glass-card p-6 md:p-10 group flex flex-col justify-between relative overflow-hidden action-card glow-indigo noise-overlay">
            <Link href="/contact" className="flex flex-col h-full">
              <Sparkles className="absolute top-6 left-6 text-indigo-500/20" size={24} />
              <div className="mt-6 md:mt-10 flex-1">
                <h2
                  className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
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
          <div className="glass-card p-5 md:p-7 group flex flex-col justify-between action-card">
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
        <div className="glass-card overflow-hidden py-5 my-16">
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

        {/* ── CTA Banner ── */}
        <div className="glass-card p-6 md:p-14 relative overflow-hidden my-16 cta-section glow-indigo noise-overlay text-center">
          <Sparkles className="absolute top-6 left-6 text-indigo-500/15" size={28} />
          <div className="relative z-10">
            <h2
              className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 cta-heading"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Ready to build something{" "}
              <span className="gradient-text">great?</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-6 md:mb-8 cta-desc">
              Whether it is a full-stack application, Shopify store, or a brand identity — let&apos;s turn your idea into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="cta-btn group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Get in Touch</span>
                <ArrowUpRight size={15} className="relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/works"
                className="cta-btn group inline-flex items-center gap-2 rounded-full px-7 py-3.5 border border-white/10 hover:border-indigo-500/40 text-gray-300 hover:text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:bg-white/5 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-8 py-8 md:py-10 text-center footer-content">
        <div
          className="text-base md:text-lg font-bold uppercase tracking-widest mb-5 gradient-text"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          AHSAN BASHIR
        </div>
        <nav className="flex justify-center gap-4 md:gap-8 text-[10px] md:text-[11px] text-gray-600 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
          {["/", "/about", "/works", "/contact", "/testimonials"].map((href, i) => (
            <Link key={i} href={href} className="hover:text-white transition-colors">
              {href === "/" ? "Home" : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
            </Link>
          ))}
        </nav>
        <p className="mt-5 text-gray-700 text-[10px]" style={{ fontFamily: "var(--font-mono)" }}>
          &copy; {new Date().getFullYear()} Ahsan Bashir. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
