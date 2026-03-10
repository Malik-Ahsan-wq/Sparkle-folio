import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkle ,User, Code, BadgeCheck, Sparkles} from 'lucide-react';
import Navbar from '../components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Ahsan Bashir | Full Stack MERN Developer",
  description: "Learn about Ahsan Bashir, a Full Stack Developer with 1.5+ years of experience in MERN Stack, Next.js, Shopify Development. Specialized in building scalable web applications with MongoDB, Express.js, React.js, Node.js, and TypeScript.",
  openGraph: {
    title: "About Ahsan Bashir | Full Stack MERN Developer",
    description: "Full Stack Developer specializing in MERN Stack, Next.js, and Shopify Development with 1.5+ years of professional experience.",
    url: "https://ahsanbashir.com/about",
  },
};

const about = () => {
  return (
    <>
  <Navbar/>
    <div className="pt-24 md:mt-15 min-h-screen bg-[#0F0F0F] text-white p-4 md:p-8 lg:p-12 font-sans">

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
                  A versatile Full-Stack Developer with 1.5+ Years of professional experience specializing in MERN Stack, Next.js, Shopify Development, and Canva Design. Proficient in MongoDB, Supabase SQL, Express.js, React.js, Node.js, Shopify, and experienced in RESTful APIs, secure authentication systems, responsive UI/UX, deployment, and e-commerce optimization.
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
         <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> Experience
    </h3>

    <div className="space-y-6">
      <div>
        <p className="text-gray-500 text-sm mb-1">2024 - 2025</p>
        <h4 className="text-lg font-bold text-white">Full-Stack Developer, websolave IT Company</h4>
        <p className="text-gray-400 text-xs">Built full-stack applications using MERN Stack, integrated RESTful APIs, implemented secure authentication with JWT and OAuth, optimized database queries reducing response time by 20%.</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm mb-1">2023 - 2024</p>
        <h4 className="text-lg font-bold text-white">Front End Developer, ESCASA IT Company</h4>
        <p className="text-gray-400 text-xs">Developed responsive frontend applications using React.js and Next.js, built modern UI components with Tailwind CSS and Bootstrap, improved application performance and scalability.</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm mb-1">2025 - Present</p>
        <h4 className="text-lg font-bold text-white">Shopify & Canva Developer (Freelance)</h4>
        <p className="text-gray-400 text-xs">Developed and customized Shopify stores, built custom sections and product pages, integrated payment gateways, optimized for SEO and performance, created marketing assets using Canva.</p>
      </div>
    </div>
  </div>

  {/* Education Card */}
  <div
    data-aos="fade-up"
    className="bg-[#1A1A1A] rounded-3xl p-6 md:p-8 border border-white/5 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
  >
    <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-semibold">
         <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> Education
    </h3>

    <div className="space-y-6">
      <div>
        <p className="text-gray-500 text-sm mb-1">2021 - 2022</p>
        <h4 className="text-lg font-bold text-white">Mechanical Diploma</h4>
        <p className="text-gray-400 text-xs">VTI College</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm mb-1">2020 - 2021</p>
        <h4 className="text-lg font-bold text-white">ICS with Computer Diploma</h4>
        <p className="text-gray-400 text-xs">Abu Anees College, Faisalabad</p>
      </div>
    </div>
  </div>
</div>

        {/* Bottom Section: Grid Action Cards */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 px-5 sm:px-8 md:px-10 lg:px-12 py-8 md:py-12 max-w-7xl mx-auto">
      {/* Profiles Card - smaller side card */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="md:col-span-3 group relative bg-gradient-to-br from-[#1A1A1A] to-[#111111] rounded-3xl p-6 md:p-8 border border-white/8 overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-400 ease-out cursor-pointer flex flex-col justify-between"
      >
        <div className="flex items-center justify-center gap-5 py-6 md:py-8 opacity-80 group-hover:opacity-100 transition-opacity">
          <User className="w-14 h-14 md:w-16 md:h-16 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
          <User className="w-14 h-14 md:w-16 md:h-16 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
        </div>

        <div className="space-y-2">
          <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-medium">
            Stay with me
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Profiles
          </h3>
        </div>

        <ArrowUpRight className="absolute bottom-6 right-6 w-6 h-6 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </div>

      {/* My Stack - main wide card */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="md:col-span-6 group relative bg-gradient-to-br from-[#1A1A1A] via-[#0f172a] to-[#1A1A1A] rounded-3xl p-8 md:p-10 lg:p-12 border border-white/8 overflow-hidden hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/20 transition-all duration-400 ease-out cursor-pointer flex flex-col"
      >
        <div className="absolute top-6 left-6 md:top-8 md:left-8 opacity-40 group-hover:opacity-70 transition-opacity">
          <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-blue-400/70" />
        </div>

        <div className="mt-10 md:mt-16 lg:mt-20 space-y-5 md:space-y-6 flex-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            My <span className="text-blue-500">Stack.</span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-6xl">
            I specialize in building fast, scalable, and accessible web applications using
            {" "}
            <strong className="text-white">Next.js</strong>,{" "}
            <strong className="text-white">Tailwind CSS</strong>,{" "}
            <strong className="text-white">TypeScript</strong>, and modern JavaScript.
            Full-stack experience with the{" "}
            <strong className="text-blue-400">MERN stack</strong>,{" "}
            <strong className="text-blue-400">Supabase</strong>, secure authentication
            (<strong>NextAuth</strong>, <strong>Supabase Auth</strong>, OAuth), clean architecture,
            performance optimization, and contemporary UI/UX principles.
          </p>
        </div>

        <ArrowUpRight className="absolute bottom-8 right-8 w-7 h-7 text-gray-500 group-hover:text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
      </div>

      {/* Credentials Card - smaller side card */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="md:col-span-3 group relative bg-gradient-to-br from-[#1A1A1A] to-[#111111] rounded-3xl p-6 md:p-8 border border-white/8 overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-400 ease-out cursor-pointer flex flex-col justify-between"
      >
        <div className="flex justify-center py-8 md:py-10 opacity-70 group-hover:opacity-100 transition-opacity">
          <BadgeCheck className="w-16 h-16 md:w-20 md:h-20 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
        </div>

        <div className="space-y-2">
          <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-medium">
            More about me
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Credentials
          </h3>
        </div>

        <ArrowUpRight className="absolute bottom-6 right-6 w-6 h-6 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </div>
    </div>
      </main>

      {/* Footer (Shared Component) */}
     <footer className="mt-24 text-center pb-12 bg-[#0F0F0F] text-white">
  {/* Footer Name / Brand */}
  <div className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-6 opacity-80">
    AHSAN BASHIR
  </div>

  {/* Navigation Links */}
  <nav aria-label="Footer Navigation">
    <ul className="flex flex-wrap justify-center gap-8 text-gray-400 text-xs md:text-sm uppercase tracking-widest">
      <li>
        <Link 
          href="/" 
          className="hover:text-white transition-colors duration-200"
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          href="/about" 
          className="hover:text-white transition-colors duration-200"
        >
          About
        </Link>
      </li>
      <li>
        <Link 
          href="/works" 
          className="hover:text-white transition-colors duration-200"
        >
          Works
        </Link>
      </li>
      <li>
        <Link 
          href="/contact" 
          className="hover:text-white transition-colors duration-200"
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>

  {/* Optional: Copyright */}
  <p className="mt-6 text-gray-500 text-[10px] md:text-xs">
    &copy; {new Date().getFullYear()} AHSAN BASHIR. All rights reserved.
  </p>
</footer>
    </div>
    </>
  );
};

export default about;
