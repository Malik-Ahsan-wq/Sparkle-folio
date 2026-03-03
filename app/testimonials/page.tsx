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
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    rating: 5,
    text: "Working with Ahsan transformed our digital presence. The attention to detail, modern aesthetics, and performance optimizations exceeded our expectations.",
    service: "Full Website Redesign + Next.js Development",
  },
  {
    name: "Omar Khalid",
    role: "Founder & CEO",
    company: "GrowEasy Analytics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    rating: 5,
    text: "One of the smoothest development experiences we've had. Delivered clean code, great communication, and launched ahead of schedule.",
    service: "SaaS Dashboard + Authentication System",
  },
  {
    name: "Ayesha Malik",
    role: "Marketing Director",
    company: "Bloom Cosmetics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
    rating: 5,
    text: "The new e-commerce site looks stunning on every device and converted 47% better in the first month. Highly recommend!",
    service: "Next.js E-commerce + Shopify Integration",
  },
  {
    name: "Zain Raza",
    role: "CTO",
    company: "Pulse Technologies",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    rating: 5,
    text: "Professional, responsive, and deeply understands both design and engineering. Exactly what a growing startup needs.",
    service: "Branding + Web Application",
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
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <Navbar/>
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,_theme(colors.indigo.900/0.12),transparent_25%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,_theme(colors.purple.900/0.08),transparent_35%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Trusted by ambitious teams
          </h2>
          <p className="mt-5 text-lg text-gray-400">
            Don't just take our word for it — hear what our clients say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative rounded-2xl bg-gradient-to-b from-gray-900/80 to-gray-950/80 p-8 shadow-xl shadow-black/40 backdrop-blur-sm border border-gray-800/60 transition-all duration-500 hover:border-indigo-500/30 hover:shadow-indigo-500/10"
            >
              {/* Quote icon */}
              <Quote className="absolute -left-1 -top-4 h-12 w-12 text-indigo-500/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-indigo-400 text-indigo-400"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-200 text-lg leading-relaxed mb-8">
                "{testimonial.text}"
              </blockquote>

              {/* Service tag */}
              <div className="mb-6 inline-block rounded-full bg-indigo-950/60 px-4 py-1.5 text-sm font-medium text-indigo-300 border border-indigo-500/20">
                {testimonial.service}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-indigo-500/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust signal / CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400">
            Ready to build something exceptional?
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-base font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Start a Project
          </a>
        </div>
      </div>
      
    </section>
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
    </>
  );
}