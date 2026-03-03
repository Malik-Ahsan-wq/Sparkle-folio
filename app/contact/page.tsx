"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Linkedin, UserCircle2, Sparkle, Send } from 'lucide-react';
import Navbar from '../components/Navbar';

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
        setStatus('Message sent successfully! ✨');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#0F0F0F] text-white p-4 md:p-8 lg:p-12 font-sans">
    

      <main data-aos="fade-up" className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Contact Info */}
        <div data-aos="fade-up" className="space-y-12">
          <section data-aos="fade-up">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Contact Info</h3>
            <div className="space-y-8">
              {/* Mail */}
              <div data-aos="fade-up" className="flex items-start gap-4">
                <div className="bg-[#1A1A1A] p-4 rounded-2xl border border-white/5">
                  <Mail className="text-gray-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Mail Us</p>
                  <p className="text-sm text-gray-300">ahsanmalikking57@gmail.com</p>
                  <p className="text-sm text-gray-300">ahsanmalikking57@gmail.com</p>
                </div>
              </div>

              {/* Contact */}
              <div data-aos="fade-up" className="flex items-start gap-4">
                <div className="bg-[#1A1A1A] p-4 rounded-2xl border border-white/5">
                  <Phone className="text-gray-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Contact Us</p>
                  <p className="text-sm text-gray-300">0327 6227156</p>
                </div>
              </div>

              {/* Location */}
              <div data-aos="fade-up" className="flex items-start gap-4">
                <div className="bg-[#1A1A1A] p-4 rounded-2xl border border-white/5">
                  <MapPin className="text-gray-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Location</p>
                  <p className="text-sm text-gray-300">Pakistan, Punjab</p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Info */}
          <section data-aos="fade-up">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Social Info</h3>
            <div data-aos="fade-up" className="flex gap-4">
              <a href="#" className="w-14 h-14 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/5 hover:bg-white hover:text-black transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/5 hover:bg-white hover:text-black transition">
                <UserCircle2 size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/5 hover:bg-white hover:text-black transition">
                <Linkedin size={24} />
              </a>
            </div>
          </section>
        </div>

        {/* Right Column: Contact Form */}
        <div data-aos="zoom-in" className="lg:col-span-2 bg-[#1A1A1A] rounded-3xl p-8 md:p-12 border border-white/5 relative">
          {/* Sparkle Accent */}
          <Sparkle className="absolute top-8 right-8 text-zinc-700" size={40} />

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Let&apos;s work <span className="text-blue-500">together.</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Name *" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#1F1F1F] border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition"
            />
            <input 
              type="email" 
              placeholder="Email *" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#1F1F1F] border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition"
            />
            <input 
              type="text" 
              placeholder="Your Subject *" 
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-[#1F1F1F] border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition"
            />
            <textarea 
              rows={5} 
              placeholder="Your Message *" 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#1F1F1F] border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition resize-none"
            ></textarea>
            
       

<button
  type="submit"
  disabled={loading}
  className={`cursor-pointer
    relative w-full flex items-center justify-center gap-2
    bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600
    text-white font-semibold py-4 rounded-xl
    shadow-lg shadow-indigo-500/20
    hover:scale-[1.03] hover:shadow-xl
    active:scale-95
    transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden
  `}
>
  {/* Animated Shine / Gradient */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-xl"></span>

  {/* Icon */}
  <Send className="relative text-white w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

  {/* Button Text */}
  <span className="relative">{loading ? 'Sending...' : 'Send Message'}</span>
</button>
            
            {status && (
              <p className={`text-center text-sm ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 text-center pb-12 border-t border-white/5 pt-12">
        <div className="text-xl font-bold uppercase tracking-tighter mb-8">AHSAN BASHIR</div>
        <div className="flex justify-center gap-8 text-gray-500 text-[10px] uppercase tracking-widest mb-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/works">Works</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="text-gray-600 text-[10px]">
          © All rights reserved by <span className="text-blue-500">Ahsan Bashir</span>
        </p>
      </footer>
    </div>
    </>
  );
};

export default ContactPage;
