import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkle, Server, Globe, Box, CreditCard  } from 'lucide-react';
import Navbar from '../components/Navbar';

const ProjectsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#0F0F0F] text-white p-4 md:p-8 lg:p-12 font-sans">
      {/* Navigation */}
 

      <main className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div data-aos="zoom-in" className="flex items-center justify-center gap-4 mb-12">
          <Sparkle className="text-gray-500 animate-pulse" size={32} />
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
           <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">All</span> Projects
          </h1>
          <Sparkle className="text-gray-500 animate-pulse" size={32} />
        </div>

        {/* Projects Grid */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. Men Wrist - Tall Card */}
          <div data-aos="fade-up" className="md:col-span-4 bg-[#1A1A1A] rounded-3xl p-6 border border-white/5 group flex flex-col justify-between h-full">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-zinc-800">
                <Image src="/image (22).jpg" alt="Men Wrist" fill className="object-cover group-hover:scale-105 transition duration-500" /> 
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Watch Collection</p>
                <h2 className="text-xl font-semibold">Men Wrist</h2>
              </div>
              <ArrowUpRight className="text-gray-700 group-hover:text-white transition" />
            </div>
          </div>

          {/* Right Column Group (spanning 8 cols) */}
          <div data-aos="fade-up" className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 2. Rohtas Restaurant */}
            <div data-aos="fade-up" className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/5 group flex flex-col justify-between">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-zinc-800">
                  <Image src="/f8ba3fe71ae54cbebe7d2a536f70486d.jpg" alt="Rohtas" fill className="object-cover group-hover:scale-105 transition" /> 
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Online Food Delivery</p>
                  <h2 className="text-xl font-semibold">Rohtas Restaurant</h2>
                </div>
                <ArrowUpRight className="text-gray-700 group-hover:text-white transition" />
              </div>
            </div>

            {/* 3. Wine Shop */}
            <div data-aos="fade-up" className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/5 group flex flex-col justify-between">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-zinc-800">
                  <Image src="/low-angle-shot-features-rear-black-luxury-supercar-highlighting-its-glowing-orange-tail-lights-wet-sleek-bodywork-415623059.webp" alt="Wine" fill className="object-cover group-hover:scale-105 transition" /> 
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Branding</p>
                  <h2 className="text-xl font-semibold">Wine Shop</h2>
                </div>
                <ArrowUpRight className="text-gray-700 group-hover:text-white transition" />
              </div>
            </div>
          </div>

          {/* 4. Shopify - Large Square Card */}
          <div data-aos="fade-up" className="md:col-span-4 bg-[#1A1A1A] rounded-3xl p-6 border border-white/5 group flex flex-col justify-between">
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-zinc-800">
                <Image src="/ff3ed1c6-1c53-4f19-95b2-973cd97b682c.jpg" alt="Shopify" fill className="object-cover" /> 
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">E-Commer Store</p>
                <h2 className="text-xl font-semibold">Shopify</h2>
              </div>
              <ArrowUpRight className="text-gray-700 group-hover:text-white transition" />
            </div>
          </div>

          {/* Middle Row Small Cards */}
          <div data-aos="fade-up" className="md:col-span-4 bg-[#1A1A1A] rounded-3xl p-6 border border-white/5 group flex flex-col justify-between">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-zinc-800">
                <Image src="/c065154d-523b-4854-a9e6-57f66b75ba43.jpg" alt="Zis Travels" fill className="object-cover" />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Travel Agency</p>
                <h2 className="text-xl font-semibold">Zis Travels</h2>
              </div>
              <ArrowUpRight className="text-gray-700 group-hover:text-white transition" />
            </div>
          </div>

          <div data-aos="fade-up" className="md:col-span-4 grid grid-rows-2 gap-6">
      <div
      data-aos="fade-up"
      className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/5 group flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/10 transition"
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">
            Domain & Hosting
          </p>
          <h2 className="text-xl font-semibold">Buy Domain</h2>
        </div>
        <ArrowUpRight className="text-gray-700 group-hover:text-white transition" />
      </div>

      {/* Hosting Providers Icons (Lucide) */}
      <div className="flex items-center gap-6 mt-4 justify-start">
        <div className="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition">
          <Server size={28} />
          <span className="text-[10px] mt-1">Hostinger</span>
        </div>

        <div className="flex flex-col items-center text-gray-400 hover:text-green-500 transition">
          <Globe size={28} />
          <span className="text-[10px] mt-1">GoDaddy</span>
        </div>

        <div className="flex flex-col items-center text-gray-400 hover:text-purple-500 transition">
          <Box size={28} />
          <span className="text-[10px] mt-1">Namecheap</span>
        </div>
      </div>
    </div>
           <div
      data-aos="fade-up"
      className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/5 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <CreditCard size={28} className="text-indigo-500" />
          <div>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">
              International Cards
            </p>
            <h2 className="text-xl font-semibold text-white">Wise Card</h2>
          </div>
        </div>

        <ArrowUpRight className="text-gray-700 group-hover:text-white transition" />
      </div>

      {/* Optional Gradient Underline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
          </div>

        </div>
      </main>

      {/* Shared Footer */}
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
