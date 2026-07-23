"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Sparkles, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const contactInfo = [
  { icon: Mail, label: "Mail Us", value: "mahsanraza3222@gmail.com", href: "mailto:mahsanraza3222@gmail.com" },
  { icon: Phone, label: "Call Us", value: "03276227156", href: "tel:+923276227156" },
  { icon: MapPin, label: "Location", value: "GM Abad, Faisalabad, Pakistan", href: null },
];

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/m-ahsan-bashir/" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/" },
  { icon: Mail, label: "Email", href: "mailto:mahsanraza3222@gmail.com" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-[68px] min-h-screen bg-[#080808] text-white p-4 md:p-8 lg:p-12 dot-grid">

        {/* Ambient blobs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-600/7 blur-[110px]" />
          <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-purple-600/6 blur-[100px]" />
        </div>

        <main className="max-w-6xl mx-auto">

          {/* Header */}
          <div data-aos="fade-up" className="flex items-center justify-center gap-4 mb-12">
            <Sparkles className="text-indigo-400/50" size={28} />
            <h1
              className="text-5xl md:text-7xl font-bold uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <Sparkles className="text-indigo-400/50" size={28} />
          </div>

          <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left: Info */}
            <div className="space-y-5">

              {/* Contact info cards */}
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="glass-card p-5 flex items-start gap-4 group hover:border-indigo-500/25 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                    <item.icon size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-1 font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Socials */}
              <div data-aos="fade-up" className="glass-card p-5">
                <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-4 font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
                  Social Profiles
                </p>
                <div className="flex gap-3">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-11 h-11 rounded-full bg-white/5 border border-white/8 flex items-center justify-center hover:bg-indigo-500/15 hover:border-indigo-500/30 hover:scale-110 transition-all duration-300"
                    >
                      <s.icon size={18} className="text-indigo-400" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability card */}
              <div data-aos="fade-up" className="glass-card p-5 glow-indigo noise-overlay relative overflow-hidden">
                <Sparkles className="absolute top-4 right-4 text-indigo-500/15" size={20} />
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
                    Available for work
                  </span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Open to full-time roles, freelance projects, and collaborations.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div data-aos="zoom-in" className="lg:col-span-2 glass-card p-8 md:p-10 relative overflow-hidden noise-overlay">
              <Sparkles className="absolute top-6 right-6 text-indigo-500/15" size={32} />

              <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Let&apos;s work{" "}
                <span className="gradient-text">together.</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-5 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/5 transition-all duration-200"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-5 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/5 transition-all duration-200"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject *"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-5 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/5 transition-all duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                />
                <textarea
                  rows={5}
                  placeholder="Your Message *"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-5 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/5 transition-all duration-200 resize-none"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-7 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Send size={16} className="relative group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative">{loading ? 'Sending...' : 'Send Message'}</span>
                </button>

                {status === 'success' && (
                  <p className="text-center text-sm text-emerald-400 font-medium">
                    ✨ Message sent successfully!
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-center text-sm text-red-400 font-medium">
                    Failed to send. Please try again.
                  </p>
                )}
              </form>
            </div>
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

export default ContactPage;
