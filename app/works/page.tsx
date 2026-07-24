import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';

const projects = [
  {
    title: 'tools.websolave.com',
    url: 'https://tools.websolave.com',
    tag: 'Full-Stack · AI Tools Platform',
    desc: 'AI-SEO Analyzer, AI-Bio Builder, and AI-QR Code Generator. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'AI'],
    span: 'md:col-span-8',
    aspect: 'aspect-[16/6]',
    accent: 'from-indigo-600/20 to-purple-600/10',
  },
  {
    title: 'fetchply.com',
    url: 'https://fetchply.com',
    tag: 'Full-Stack · Real-Time Platform',
    desc: 'Real-time chatting, WhatsApp, Slack, WooCommerce, Instagram & Shopify integrations, chatbot, and business automation. BullMQ, Redis, Cron Jobs.',
    stack: ['Next.js', 'BullMQ', 'Redis', 'Shopify API'],
    span: 'md:col-span-4',
    aspect: 'aspect-[4/3]',
    accent: 'from-blue-600/20 to-cyan-600/10',
  },
  {
    title: 'livetawk.com',
    url: 'https://livetawk.com',
    tag: 'Full-Stack · Live Chat System',
    desc: 'Professional full-stack live chat system for real-time customer support and communication.',
    stack: ['Next.js', 'Node.js', 'WebSockets'],
    span: 'md:col-span-4',
    aspect: 'aspect-[4/3]',
    accent: 'from-emerald-600/15 to-teal-600/10',
  },
  {
    title: 'toolv.io',
    url: 'https://toolv.io',
    tag: 'Full-Stack · Social Media Tools',
    desc: 'All social media app integrations — perfectly working downloaders, boosters, and more.',
    stack: ['Next.js', 'TypeScript', 'APIs'],
    span: 'md:col-span-4',
    aspect: 'aspect-[4/3]',
    accent: 'from-orange-600/15 to-rose-600/10',
  },
  {
    title: 'Cartify — Online Store',
    url: '#',
    tag: 'Full-Stack · E-Commerce',
    desc: 'Professional e-commerce store with Next.js, TypeScript, Tailwind CSS, and Supabase.',
    stack: ['Next.js', 'Supabase', 'Tailwind CSS'],
    span: 'md:col-span-4',
    aspect: 'aspect-[4/3]',
    accent: 'from-violet-600/15 to-purple-600/10',
  },
  {
    title: 'brutallbill.com',
    url: 'https://brutallbill.com',
    tag: 'Full-Stack · Invoice Generator',
    desc: 'Professional invoice generator — always free, no cost. Seamless invoice creation and management.',
    stack: ['Next.js', 'TypeScript', 'PDF Generation'],
    span: 'md:col-span-8',
    aspect: 'aspect-[16/6]',
    accent: 'from-yellow-600/15 to-amber-600/10',
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[68px] md:mt-15 min-h-screen bg-[#080808] text-white p-4 md:p-8 lg:p-12 dot-grid">

        {/* Ambient blobs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-600/7 blur-[110px]" />
          <div className="absolute bottom-[15%] right-[-5%] w-[350px] h-[350px] rounded-full bg-purple-600/6 blur-[100px]" />
        </div>

        <main className="max-w-6xl mx-auto">

          <div data-aos="zoom-in" className="flex items-center justify-center gap-4 mb-12">
            <Sparkles className="text-indigo-400/50 animate-pulse" size={28} />
            <h1
              className="text-5xl md:text-7xl font-bold uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="gradient-text">Working</span> Projects
            </h1>
            <Sparkles className="text-indigo-400/50 animate-pulse" size={28} />
          </div>

          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {projects.map((p, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className={`${p.span} glass-card p-6 group flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300`}
              >
                {/* Preview area */}
                <div className={`relative ${p.aspect} rounded-2xl overflow-hidden mb-5 bg-gradient-to-br ${p.accent} border border-white/5 flex items-center justify-center`}>
                  <div className="text-center px-4">
                    <p
                      className="text-xl md:text-2xl font-bold text-white/20 tracking-tight select-none"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {p.title}
                    </p>
                  </div>
                  {/* Live badge */}
                  {p.url !== '#' && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1.5 glass-card-strong px-2.5 py-1 text-[10px] font-semibold text-emerald-400" style={{ fontFamily: "var(--font-mono)" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-end gap-4">
                  <div className="flex-1 min-w-0">
                    <span className="tag mb-2 inline-flex">{p.tag}</span>
                    <h2
                      className="text-lg font-bold mb-2 mt-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {p.title}
                    </h2>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-gray-400" style={{ fontFamily: "var(--font-mono)" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={p.url}
                    target={p.url !== '#' ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-indigo-500/15 group-hover:border-indigo-500/30 transition-all duration-300"
                  >
                    <ExternalLink size={15} className="text-gray-600 group-hover:text-indigo-400 transition-colors" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="border-t border-white/5 mt-16 py-10 text-center">
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

export default ProjectsPage;
