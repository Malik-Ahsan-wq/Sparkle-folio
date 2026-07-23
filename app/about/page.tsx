import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, BadgeCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Ahsan Bashir | Full-Stack & Shopify Developer",
  description: "Learn about Ahsan Bashir, a Full-Stack & Shopify Developer with 2+ years of experience in MERN Stack, Next.js, Shopify Development.",
  openGraph: {
    title: "About Ahsan Bashir | Full-Stack & Shopify Developer",
    description: "Full-Stack & Shopify Developer specializing in MERN Stack, Next.js, and Shopify Development with 2+ years of professional experience.",
    url: "https://ahsanbashir.com/about",
  },
};

const skills = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
  "Express.js", "MongoDB", "Supabase SQL", "Drizzle ORM", "Zod",
  "BullMQ", "Redis", "JWT", "OAuth 2.0", "NextAuth", "Firebase Auth",
  "Supabase Auth", "Shopify", "Liquid", "Canva", "Vercel", "GitHub CI/CD",
  "REST APIs", "POSTMAN", "GSAP", "Bootstrap",
];

const experience = [
  {
    period: "03/2026 – Present",
    location: "USA, Florida, Lakeland",
    role: "Full-Stack Developer",
    company: "Inferasoft IT Company",
    points: [
      "Developed & customized web apps and PWAs for clients.",
      "Integrated Paddle, Careem.io and other payment methods.",
      "Optimized eCommerce stores for performance & SEO.",
      "Managed deployment, store launch, and post-launch support.",
      "Created marketing assets using Canva.",
    ],
  },
  {
    period: "11/2025 – 03/2026",
    location: "GM Abad, Faisalabad",
    role: "Full-Stack & Shopify Developer",
    company: "websolave IT Company",
    points: [
      "Built full-stack apps using MongoDB, Supabase, Express.js, React.js, Node.js.",
      "Developed & customized Shopify stores, integrated payment gateways & shipping.",
      "Implemented JWT, OAuth, BullMQ job queues, Redis, Cron Jobs, Atomic Locks.",
      "Optimized DB queries reducing response time by 20%.",
      "Deployed via Vercel & Netlify with CI/CD pipelines.",
    ],
  },
  {
    period: "2024 – 2025",
    location: "Canal Road, Faisalabad",
    role: "Front-End Developer",
    company: "ESCASA IT Company",
    points: [
      "Developed responsive frontend apps using React.js & Next.js.",
      "Built modern UI with Tailwind CSS & Bootstrap.",
      "Integrated frontend with backend APIs.",
      "Managed Vercel deployments and build optimizations.",
    ],
  },
  {
    period: "2025 – Present",
    location: "Freelance",
    role: "Shopify & Canva Developer",
    company: "Freelance / Projects",
    points: [
      "Developed & customized Shopify stores and themes.",
      "Built custom sections, product pages, and collection layouts.",
      "Integrated payment gateways & shipping methods.",
      "Optimized for SEO & performance.",
      "Created marketing banners, posters, and visual assets using Canva.",
    ],
  },
];

const education = [
  { period: "2023 – 2024", degree: "Computer Diploma", school: "Chishti College, Faisalabad" },
  { period: "2023 – 2024", degree: "Web Development Course", school: "Websolave Company, Faisalabad" },
  { period: "2021 – 2022", degree: "Mechanical Diploma", school: "VTI College" },
  { period: "2020 – 2021", degree: "ICS (Computer Science)", school: "Abu Anees College, Faisalabad" },
];

const about = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[68px] min-h-screen bg-[#080808] text-white p-4 md:p-8 lg:p-12 dot-grid">

        {/* Ambient blobs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-purple-600/7 blur-[110px]" />
          <div className="absolute bottom-[20%] left-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-600/6 blur-[100px]" />
        </div>

        <main className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <div data-aos="fade-up" className="flex items-center justify-center gap-4 mb-12">
            <Sparkles className="text-indigo-400/50" size={28} />
            <h1
              className="text-5xl md:text-7xl font-bold uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="gradient-text">About</span> Me
            </h1>
            <Sparkles className="text-indigo-400/50" size={28} />
          </div>

          {/* ── Top: Photo + Summary ── */}
          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">

            {/* Photo */}
            <div className="glass-card p-5 gradient-border">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-950">
                <Image src="/Gemini_Generated_Image_b4hj9mb4hj9mb4hj.png" alt="Ahsan Bashir" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="glass-card-strong px-3 py-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-gray-300 font-medium" style={{ fontFamily: "var(--font-mono)" }}>
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="md:col-span-2 glass-card p-8 md:p-10 relative overflow-hidden noise-overlay">
              <Sparkles className="absolute top-5 left-5 text-indigo-500/15" size={32} />
              <div className="relative z-10">
                <span className="tag mb-4 inline-flex">Full-Stack &amp; Shopify Developer · 2+ Years</span>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 mt-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Ahsan <span className="gradient-text">Bashir</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">
                  A versatile Full-Stack & Shopify Developer with <strong className="text-white">2+ years</strong> of professional experience
                  specializing in MERN Stack, Next.js, Shopify Development, and Canva Design. Proficient in MongoDB,
                  Supabase SQL, Express.js, React.js, Node.js, Shopify, and experienced in RESTful APIs, secure
                  authentication systems, responsive UI/UX, deployment, and e-commerce optimization. I excel in
                  collaborative, Agile environments delivering clean, efficient code and visually appealing designs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["MERN Stack", "Next.js", "Shopify", "TypeScript", "Supabase", "BullMQ"].map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Experience ── */}
          <div data-aos="fade-up" className="mb-8">
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500 inline-block" />
              Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="glass-card p-6 md:p-7 group hover:border-indigo-500/25 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="tag mb-2 inline-flex">{exp.period}</span>
                      <h3
                        className="text-base font-bold text-white mt-1"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-indigo-400 text-xs font-medium mt-0.5">{exp.company}</p>
                      <p className="text-gray-600 text-[10px] mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>{exp.location}</p>
                    </div>
                    <ArrowUpRight className="text-gray-700 group-hover:text-indigo-400 transition-colors flex-shrink-0 mt-1" size={16} />
                  </div>
                  <ul className="space-y-1.5 mt-4">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-xs leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-indigo-500/60 mt-1.5 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Education ── */}
          <div data-aos="fade-up" className="mb-8">
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-purple-500 to-indigo-500 inline-block" />
              Education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                  className="glass-card p-5 group hover:border-indigo-500/25 transition-all duration-300"
                >
                  <BadgeCheck className="text-indigo-400/60 mb-3 group-hover:text-indigo-400 transition-colors" size={20} />
                  <p className="text-gray-600 text-[10px] mb-1" style={{ fontFamily: "var(--font-mono)" }}>{edu.period}</p>
                  <h3 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "var(--font-syne)" }}>{edu.degree}</h3>
                  <p className="text-gray-500 text-xs">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Skills ── */}
          <div data-aos="fade-up" className="mb-8">
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-500 to-indigo-500 inline-block" />
              Tech Stack
            </h2>
            <div className="glass-card p-6 md:p-8">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag hover:bg-indigo-500/20 hover:border-indigo-400/40 hover:text-indigo-300 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom CTA Cards ── */}
          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="glass-card p-7 group flex flex-col justify-between hover:border-indigo-500/25 transition-all duration-300">
              <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)" }}>Stay connected</p>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-syne)" }}>Profiles</h3>
              <ArrowUpRight className="mt-4 text-gray-700 group-hover:text-indigo-400 transition-colors" size={18} />
            </div>

            <div className="glass-card p-8 group flex flex-col justify-between relative overflow-hidden glow-indigo noise-overlay hover:border-indigo-500/30 transition-all duration-300">
              <Sparkles className="absolute top-5 left-5 text-indigo-500/15" size={24} />
              <div className="mt-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3" style={{ fontFamily: "var(--font-syne)" }}>
                  My <span className="gradient-text">Stack.</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Next.js · TypeScript · MERN · Supabase · Shopify · BullMQ · Redis
                </p>
              </div>
              <ArrowUpRight className="mt-6 text-gray-700 group-hover:text-indigo-400 transition-colors" size={18} />
            </div>

            <div className="glass-card p-7 group flex flex-col justify-between hover:border-indigo-500/25 transition-all duration-300">
              <BadgeCheck className="text-indigo-400/50 group-hover:text-indigo-400 transition-colors" size={32} />
              <div>
                <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)" }}>More about me</p>
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-syne)" }}>Credentials</h3>
              </div>
              <ArrowUpRight className="mt-4 text-gray-700 group-hover:text-indigo-400 transition-colors" size={18} />
            </div>
          </div>
        </main>

        <footer className="border-t border-white/5 mt-8 py-10 text-center">
          <div className="text-lg font-bold uppercase tracking-widest mb-5 gradient-text" style={{ fontFamily: "var(--font-syne)" }}>
            AHSAN BASHIR
          </div>
          <nav className="flex flex-wrap justify-center gap-8 text-gray-600 text-[11px] uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
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
    </>
  );
};

export default about;
