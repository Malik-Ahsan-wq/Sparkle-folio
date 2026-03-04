"use client";

import React, {useRef } from "react";
import Link from "next/link";

import Image from "next/image";
import { ArrowUpRight, Sparkle, Download, Folder,Globe } from "lucide-react";
import {  FaLinkedin, FaFileContract } from "react-icons/fa";
import { MdEmail, } from "react-icons/md";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";


gsap.registerPlugin(ScrollTrigger);

const brands = [
  "Next js",
  "Tailwind css",
  "supabase",
  "monogdb ",
  "React js",
  "Express js",
  "Node js",
  "MERN Stack",
];

export default function HomePage() {
 
  const container = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  // Global animations (hero + sections)
  useGSAP(
    () => {
      // Hero name + sparkles
      gsap.from(".hero-name", {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.from(".hero-sparkle", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.25,
      });

      // Profile image reveal
      gsap.from(".profile-img-container", {
        scale: 0.92,
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".profile-img-container",
          start: "top 85%",
        },
      });

      // Summary card
      gsap.from(".summary-card", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".summary-card",
          start: "top 80%",
        },
      });

      // Experience & Education cards stagger
      gsap.from(".card-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".experience-education",
          start: "top 78%",
        },
      });

      // Bottom action cards
      gsap.from(".action-card", {
        y: 70,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".action-cards",
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  // Infinite marquee
  useGSAP(
    () => {
      if (!marqueeRef.current) return;

      const items = marqueeRef.current.querySelectorAll("span");
      const totalWidth = Array.from(items).reduce(
        (sum, el) => sum + el.offsetWidth + 64, // + gap-16 = 4rem = 64px
        0
      );

      gsap.to(marqueeRef.current, {
        x: -totalWidth / 2,
        duration: 35,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: marqueeRef }
  );
  
  return (
    <div
      ref={container}
   className="
  pt-24 md:pt-32 min-h-screen text-white font-sans bg-[#0F0F0F]
  bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
      linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
  bg-[size:40px_40px]
  "
>
      {/* Navigation – can be animated later if needed */}
  
<Navbar/>
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
          {/* Profile Image */}
          <div className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/5 profile-img-container">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-gray-700 to-gray-900">
              <Image
                src="/Gemini_Generated_Image_ke0v4eke0v4eke0v (1).png"
                alt="Ahsan Bashir"
                fill
                className="object-cover opacity-120 hover:opacity-90 transition-opacity duration-300"
                priority
              />
            </div>
          </div>

          {/* Self Summary */}
          <div className="md:col-span-2 flex flex-col justify-center gap-6">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Sparkle className="text-gray-500 hero-sparkle" size={32} />
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-center hero-name">
                Ahsan{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold hero-name">
                  Bashir
                </span>
              </h1>
              <Sparkle className="text-gray-500 hero-sparkle" size={32} />
            </div>
           <div className="bg-[#1A1A1A] rounded-3xl p-6 md:p-12 border border-white/5 relative overflow-hidden summary-card flex flex-col gap-6 md:gap-8">
      {/* Sparkle Icon */}
      <Sparkle
        className="absolute md:top-2 md:left-6 top-1 left-1 text-gray-700 animate-pulse"
        size={40}
      />

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
        Full Stack Developer
      </h2>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed max-w-xl">
        MERN + Next.js developer skilled in building dynamic, responsive, and scalable web applications with MongoDB, Supabase SQL, Express.js, React.js, and Node.js. Experienced in RESTful APIs, secure authentication, and clean UI with Tailwind CSS. Passionate about efficient, maintainable code and collaboration.
      </p>

      {/* Buttons */}
     <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
  {/* Resume Button - Primary with gradient & shine */}
  <a
    href="/Ahsan-resume-black-theme (1).pdf"
      download="Ahsan-Bashir-Resume.pdf" 
  
    rel="noopener noreferrer"
    className={`
      group relative inline-flex items-center justify-center gap-2
      overflow-hidden rounded-full px-7 py-3.5
      bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600
      text-white font-medium text-base
      shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40
      transition-all duration-300 ease-out
      hover:scale-[1.04] hover:shadow-xl
      active:scale-95
    `}
  >
    {/* Shine / gradient movement effect */}
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
    
    <Download size={18} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
    <span className="relative">Resume</span>
  </a>

  {/* Projects Button - Secondary with lift & border glow */}
  <a
    href="/works"
    className={`
      group relative inline-flex items-center justify-center gap-2
      overflow-hidden rounded-full px-7 py-3.5
      bg-gray-800/70 backdrop-blur-sm border border-gray-700/70
      text-gray-200 font-medium text-base
      shadow-md shadow-black/30
      transition-all duration-300 ease-out
      hover:bg-gray-700/80 hover:border-indigo-500/50 hover:text-white
      hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20
      active:translate-y-0 active:shadow-md
    `}
  >
    <Folder size={18} className="transition-transform duration-300 group-hover:scale-110 group-hover:text-indigo-400" />
    <span className="relative">Projects</span>
  </a>
</div>
    </div>
          </div>
        </div>

        {/* Experience & Education */}
   

        {/* Bottom Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 action-cards">
          <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 group flex flex-col justify-between action-card">
          <div className="flex gap-6 justify-center py-4">

  {/* GitHub */}
  <Link
    href="/contact"
    target="_blank"
    className="w-16 h-16 rounded-full bg-[#1F1F1F] border border-white/5 
               flex items-center justify-center 
               hover:bg-white/10 hover:scale-110 transition duration-300"
  >
    <FaFileContract size={24} className="text-blue-500" />
  </Link>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/m-ahsan-bashir/"
    target="_blank"
    className="w-16 h-16 rounded-full bg-[#1F1F1F] border border-white/5 
               flex items-center justify-center 
               hover:bg-white/10 hover:scale-110 transition duration-300"
  >
    <FaLinkedin size={24} className="text-blue-500" />
  </a>

  {/* Email */}
  <a
    href="ahsanmalikking57@gmail.com"
    className="w-16 h-16 rounded-full bg-[#1F1F1F] border border-white/5 
               flex items-center justify-center 
               hover:bg-white/10 hover:scale-110 transition duration-300"
  >
    <MdEmail size={24} className="text-blue-500" />
  </a>

  {/* WhatsApp */}
  <a
    href="public/Ahsan-resume-black-theme (1).pdf"
      download="public/Ahsan-resume-black-theme (1).pdf"
    className="w-16 h-16 rounded-full bg-[#1F1F1F] border border-white/5 
               flex items-center justify-center 
               hover:bg-white/10 hover:scale-110 transition duration-300"
  >
    <Globe size={24} className="text-blue-500" />
  </a>

</div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">Stay with me</p>
              <h2 className="text-xl font-semibold">Profiles</h2>
            </div>
            <ArrowUpRight className="ml-auto text-gray-700 group-hover:text-white transition" />
          </div>
          <div className="md:col-span-2 bg-[#1A1A1A] rounded-3xl p-10 border border-white/5 group flex flex-col justify-between relative overflow-hidden action-card">
<Link href="/contact">
            <Sparkle className="absolute top-6 left-6 text-gray-700" size={32} />
            <div className="mt-12">
              <h2 className="text-5xl font-bold leading-tight">
                Let's <br /> work <span className="text-blue-500">together.</span>
              </h2>
            </div>
            <ArrowUpRight className="ml-auto text-gray-700 group-hover:text-white transition" />
          </Link>
          </div>

          <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 group flex flex-col justify-between action-card">
            <div className="flex justify-center py-2 opacity-50">
              <Link href="/about">
            <img className="w-50" src="/image (26).jpg" alt="" />
            </Link>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">More about me</p>
              <h2 className="text-xl font-semibold">Credentials</h2>
            </div>
            <ArrowUpRight className="ml-auto text-gray-700 group-hover:text-white transition" />
          </div>
        </div>

        {/* Brand Name Slider – Infinite marquee */}
 <div className="w-full rounded-3xl overflow-hidden py-6 bg-[#1A1A1A] mb-16">
  <div className="relative flex overflow-hidden">
    <div
      ref={marqueeRef}
      className="flex whitespace-nowrap gap-12 text-sm md:text-base font-semibold text-gray-400"
    >
      {[...brands, ...brands, ...brands].map((brand, index) => (
        <span
          key={index}
          className="flex items-center flex-shrink-0 gap-2 hover:text-indigo-500 transition duration-300"
        >
          {/* Blue Dot */}
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
          {/* Brand Name */}
          {brand}
        </span>
      ))}
    </div>
  </div>
</div>
      </main>
     
      {/* Footer */}
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
  );
}