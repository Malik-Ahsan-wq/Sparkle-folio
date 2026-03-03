import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkle } from 'lucide-react';
import Navbar from '../components/Navbar';

const about = () => {
  return (
    <>
  <Navbar/>
    <div className="min-h-screen bg-[#0F0F0F] text-white p-4 md:p-8 lg:p-12 font-sans">

      <main className="max-w-6xl mx-auto">
        {/* Top Section: Photo and Self-Summary */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Profile Image Card */}
        

          {/* Self-Summary Content */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-center gap-4 mb-8">
               <Sparkle className="text-gray-500" size={32} />
               <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
             <span className='bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold hero-name'>Self</span>   Summary
               </h1>
               <Sparkle className="text-gray-500" size={32} />
            </div>

            <div data-aos="zoom-in" className="bg-[#1A1A1A] rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
              <Sparkle className="absolute top-6 left-6 text-gray-700" size={40} />
              <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 inline-block">Ahsan <span className='bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold hero-name'>Bashir</span></h2>
                <p className="text-gray-400 leading-relaxed max-w-xl">
                  I' am Next.js developer skilled in building dynamic, responsive, and scalable web applications with MongoDB, Supabase SQL, Express.js, React.js, and Node.js. Experienced in RESTful APIs, secure authentication, and clean UI with Tailwind CSS. Passionate about efficient, maintainable code and collaboration.
                </p>
              </div>
            </div>
          </div>
            <div className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/5">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-gray-700 to-gray-900">
                <Image src="/Gemini_Generated_Image_b4hj9mb4hj9mb4hj.png" alt="Ahsan" fill className="object-cover " /> *
            </div>
          </div>
        </div>

        {/* Middle Section: Experience and Education */}
       <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  {/* Experience Card */}
  <div
    data-aos="fade-up"
    className="bg-[#1A1A1A] rounded-3xl p-6 md:p-8 border border-white/5 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
  >
    <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-semibold">
      Experience
    </h3>

    <div className="space-y-6">
      <div>
        <p className="text-gray-500 text-sm mb-1">2024 - 2025</p>
        <h4 className="text-lg font-bold text-white">Front End Developer, ESCASA</h4>
        <p className="text-gray-400 text-xs">Built and maintained web apps with React, Next.js.</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm mb-1">2023 - 2024</p>
        <h4 className="text-lg font-bold text-white">Front End Developer, Websolave</h4>
        <p className="text-gray-400 text-xs">Developed full‑stack features and optimized performance.</p>
      </div>
    </div>
  </div>

  {/* Education Card */}
  <div
    data-aos="fade-up"
    className="bg-[#1A1A1A] rounded-3xl p-6 md:p-8 border border-white/5 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
  >
    <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-semibold">
      Education
    </h3>

    <div className="space-y-6">
      <div>
        <p className="text-gray-500 text-sm mb-1">2021 - 2022</p>
        <h4 className="text-lg font-bold text-white">ICS with Computer Diploma</h4>
        <p className="text-gray-400 text-xs">VTI College</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm mb-1">2020 - 2021</p>
        <h4 className="text-lg font-bold text-white">Mechanical Diploma</h4>
        <p className="text-gray-400 text-xs">Punjab</p>
      </div>
    </div>
  </div>
</div>

        {/* Bottom Section: Grid Action Cards */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Profiles */}
          <div data-aos="fade-up" className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 group flex flex-col justify-between">
            <div className="flex gap-4 justify-center py-4">
               <div className="w-16 h-16 rounded-full bg-[#1F1F1F] border border-white/5" />
               <div className="w-16 h-16 rounded-full bg-[#1F1F1F] border border-white/5" />
            </div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">Stay with me</p>
              <h2 className="text-xl font-semibold">Profiles</h2>
            </div>
            <ArrowUpRight className="ml-auto text-gray-700 group-hover:text-white transition" />
          </div>

          {/* Work Together (Wide) */}
          <div data-aos="fade-up" className="md:col-span-2 bg-[#1A1A1A] rounded-3xl p-10 border border-white/5 group flex flex-col justify-between relative overflow-hidden">
            <Sparkle className="absolute top-6 left-6 text-gray-700" size={32} />
            <div className="mt-12">
                <h2 className="text-5xl font-bold leading-tight">
                Let&apos;s <br /> work <span className="text-blue-500">together.</span>
              </h2>
            </div>
            <ArrowUpRight className="ml-auto text-gray-700 group-hover:text-white transition" />
          </div>

          {/* Credentials */}
          <div data-aos="fade-up" className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 group flex flex-col justify-between">
            <div className="flex justify-center py-6 opacity-30">
               <span className="text-5xl italic font-serif">Ahsan </span>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">More about me</p>
              <h2 className="text-xl font-semibold">Credentials</h2>
            </div>
            <ArrowUpRight className="ml-auto text-gray-700 group-hover:text-white transition" />
          </div>
        </div>
      </main>

      {/* Footer (Shared Component) */}
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

export default about;
