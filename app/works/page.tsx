import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkle } from 'lucide-react';
import Navbar from '../components/Navbar';

const projects = [
  {
    title: 'tools.websolave.com',
    url: 'https://tools.websolave.com',
    tag: 'Full-Stack · AI Tools Platform',
    desc: 'Professional full-stack project featuring AI-SEO Analyzer, AI-Bio Builder, and AI-QR Code Generator. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.',
    span: 'md:col-span-8',
    aspect: 'aspect-[16/7]',
  },
  {
    title: 'fetchply.com',
    url: 'https://fetchply.com',
    tag: 'Full-Stack · Real-Time Chat & Integrations',
    desc: 'Professional platform with real-time chatting, WhatsApp, Slack, WooCommerce, Instagram & Shopify integrations, real-time chatbot, and business automation. Uses BullMQ, Redis, and Cron Jobs.',
    span: 'md:col-span-4',
    aspect: 'aspect-square',
  },
  {
    title: 'livetawk.com',
    url: 'https://livetawk.com',
    tag: 'Full-Stack · Live Chat System',
    desc: 'Professional full-stack live chat system built with the latest technologies for real-time communication and customer support.',
    span: 'md:col-span-4',
    aspect: 'aspect-square',
  },
  {
    title: 'toolv.io',
    url: 'https://toolv.io',
    tag: 'Full-Stack · Social Media Tools',
    desc: 'Full-stack project with all social media app integrations — perfectly working downloaders, boosters, and more.',
    span: 'md:col-span-4',
    aspect: 'aspect-square',
  },
  {
    title: 'Cartify — Online Store',
    url: '#',
    tag: 'Full-Stack · E-Commerce',
    desc: 'Professional e-commerce store built with the latest technologies including Next.js, TypeScript, Tailwind CSS, and Supabase.',
    span: 'md:col-span-4',
    aspect: 'aspect-square',
  },
  {
    title: 'brutallbill.com',
    url: 'https://brutallbill.com',
    tag: 'Full-Stack · Invoice Generator',
    desc: 'Professional invoice generator — always free, no cost. Built with the latest technologies for seamless invoice creation and management.',
    span: 'md:col-span-8',
    aspect: 'aspect-[16/7]',
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 md:mt-15 min-h-screen bg-[#0F0F0F] text-white p-4 md:p-8 lg:p-12 font-sans">
        <main className="max-w-6xl mx-auto">
          <div data-aos="zoom-in" className="flex items-center justify-center gap-4 mb-12">
            <Sparkle className="text-gray-500 animate-pulse" size={32} />
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Working</span> Projects
            </h1>
            <Sparkle className="text-gray-500 animate-pulse" size={32} />
          </div>

          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                data-aos="fade-up"
                className={`${p.span} bg-[#1A1A1A] rounded-3xl p-6 border border-white/5 group flex flex-col justify-between hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-900/10 transition-all duration-300`}
              >
                <div className={`relative ${p.aspect} rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center`}>
                  <span className="text-2xl md:text-3xl font-bold text-gray-600 tracking-tight select-none">
                    {p.title}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">{p.tag}</p>
                    <h2 className="text-xl font-semibold mb-1">{p.title}</h2>
                    <p className="text-gray-400 text-xs max-w-md leading-relaxed">{p.desc}</p>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 flex-shrink-0"
                  >
                    <ArrowUpRight className="text-gray-700 group-hover:text-white transition" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="mt-24 text-center pb-12">
          <div className="text-xl font-bold uppercase tracking-tighter mb-8 opacity-80">AHSAN BASHIR</div>
          <div className="flex justify-center gap-8 text-gray-500 text-[10px] uppercase tracking-widest">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/works">Works</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProjectsPage;
