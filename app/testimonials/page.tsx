"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  service: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Ahmed",
    role: "Product Manager",
    company: "TechNova Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Ahsan completely transformed our outdated digital presence into a modern, high-performing platform. His meticulous attention to detail, sleek aesthetics, and performance optimizations far exceeded our expectations.",
    service: "Full Website Redesign & Next.js Development",
  },
  {
    name: "Omar Khalid",
    role: "Founder & CEO",
    company: "GrowEasy Analytics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    text: "One of the most seamless development partnerships we've experienced. Clean, well-structured code, excellent communication, and delivery ahead of schedule — highly recommended.",
    service: "SaaS Dashboard & Authentication System",
  },
  {
    name: "Ayesha Malik",
    role: "Marketing Director",
    company: "Bloom Cosmetics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    text: "The new e-commerce experience is stunning across devices and delivered a 47% uplift in conversions within the first month. Ahsan’s work is top-tier.",
    service: "Next.js E-commerce & Shopify Integration",
  },
  {
    name: "Zain Raza",
    role: "CTO",
    company: "Pulse Technologies",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Professional, responsive, and equally strong in design and engineering. Precisely the partner a fast-growing startup needs to scale confidently.",
    service: "Brand Identity & Web Application",
  },
  {
    name: "Malik Sharma",
    role: "CTO",
    company: "Hasth Technologies",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Outstanding professionalism and technical depth. Ahsan delivered pixel-perfect design with robust, scalable code — exactly what we needed.",
    service: "Branding & Full-Stack Web Application",
  },
  {
    name: "Raza Khan",
    role: "Product Manager",
    company: "Prefixes Technologies",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Exceptional design sensibility combined with deep engineering knowledge. The final product is both beautiful and performant — a rare combination.",
    service: "UI/UX Overhaul & Next.js Platform",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.12,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <section
        ref={sectionRef}
        className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950"
      >
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,theme(colors.indigo.950/0.4),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,theme(colors.purple.950/0.3),transparent_45%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Trusted by <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">forward-thinking</span> teams
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed">
              Real results from real clients — hear what it’s like to work together.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="mt-16 md:mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group relative rounded-2xl bg-gradient-to-b from-gray-900/70 to-gray-950/70 p-8 shadow-2xl shadow-black/30 border border-gray-800/50 transition-all duration-400 hover:border-indigo-600/40 hover:shadow-indigo-900/20 backdrop-blur-sm"
              >
                <Quote className="absolute -left-2 -top-5 h-16 w-16 text-indigo-600/10" />

                {/* Rating */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-indigo-500 text-indigo-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-200 text-lg leading-relaxed mb-8 font-light">
                  “{testimonial.text}”
                </blockquote>

                {/* Service */}
                <div className="mb-7 inline-block rounded-full bg-indigo-950/50 px-5 py-2 text-sm font-medium text-indigo-300 border border-indigo-600/20">
                  {testimonial.service}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-indigo-600/30 shadow-md">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} - ${testimonial.company}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 lg:mt-28 text-center pb-10">
          
          <a
  href="/Ahsan.Dev.pdf"
  download="/Ahsan.Dev.pdf"
  rel="noopener noreferrer"
  className={`
    group relative inline-flex items-center justify-center gap-2
    overflow-hidden rounded-full px-7 py-3.5
    bg-gradient-to-r from-blue-600-to-cyan-500
    text-white font-medium text-base
    shadow-lg shadow-blue-700 hover:shadow-blue-500/40
    transition-all duration-300 ease-out
    hover:scale-[1.04] hover:shadow-xl
    active:scale-95
  `}
>
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>

  Let's Start  Projects
</a>
          </div>
        </div>
          {/* Footer */}
       <footer className="mt-24 text-center pb-12">
        <div className="text-xl font-bold uppercase tracking-tighter text-white mb-8 opacity-80">AHSAN BASHIR</div>
        <div className="flex justify-center gap-8 text-gray-500 text-[10px] uppercase tracking-widest">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/works">Works</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
      </section>

    
    </>
  );
}