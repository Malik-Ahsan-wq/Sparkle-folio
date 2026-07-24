"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoRingRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<HTMLSpanElement[]>([]);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  const statuses = ["Initializing", "Loading", "Preparing", "Almost ready"];

  useEffect(() => {
    const tl = gsap.timeline({ paused: true, defaults: { force3D: true } });

    tl.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.6)" }
    )
    .to(
      logoRingRef.current,
      { scale: 0.3, opacity: 0.5, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .to(
      logoRingRef.current,
      { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
    .to(
      letterRefs.current,
      { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "power4.out", stagger: 0.06 },
      "-=0.4"
    )
    .to(
      taglineRef.current,
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.2"
    )
    .to(
      particlesRef.current,
      {
        y: (i) => -60 - i * 30,
        x: (i) => (i % 2 === 0 ? 40 + i * 10 : -40 - i * 10),
        opacity: 0,
        scale: 0,
        duration: 1.4,
        ease: "power2.out",
        stagger: 0.06,
      },
      "-=0.6"
    )
    .to(
      barRef.current,
      { scaleX: 1, duration: 2, ease: "power3.inOut", transformOrigin: "left center" },
      "-=0.4"
    );

    if (counterRef.current) {
      const obj = { val: 0 };
      tl.to(obj, {
        val: 100,
        duration: 2,
        ease: "power3.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(obj.val).toString().padStart(2, "0");
          }
          if (statusRef.current) {
            const idx = Math.min(Math.floor((obj.val / 100) * statuses.length), statuses.length - 1);
            statusRef.current.textContent = statuses[idx];
          }
        },
      }, "-=2");
    }

    tl.to(".loader-content", { y: -30, opacity: 0, duration: 0.6, ease: "power3.in" }, "+=0.3")
      .to(loaderRef.current, { opacity: 0, duration: 0.8, ease: "power3.inOut" }, "-=0.4")
      .set(loaderRef.current, { display: "none" });

    tl.play();

    return () => { tl.kill(); };
  }, []);

  const name = "AHSAN BASHIR";

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] select-none"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-indigo-600/8 blur-[120px] sm:blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] rounded-full bg-purple-600/6 blur-[80px] sm:blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="loader-content flex flex-col items-center relative">
        {/* Logo Mark */}
        <div ref={logoRef} className="relative mb-6 md:mb-10 opacity-0 scale-0">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <svg width="20" height="20" className="md:w-[28px] md:h-[28px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div ref={logoRingRef} className="absolute inset-0 w-10 h-10 md:w-14 md:h-14 rounded-2xl border border-indigo-400/40 scale-0" />
        </div>

        {/* Name */}
        <div ref={nameRef} className="flex items-center gap-1 md:gap-2 mb-4" style={{ fontFamily: "var(--font-syne)" }}>
          {name.split("").map((letter, i) => (
            <span
              key={i}
              ref={(el) => { if (el) letterRefs.current[i] = el; }}
              className="inline-block text-3xl sm:text-4xl md:text-7xl font-black text-white/90 tracking-tight opacity-0"
              style={{ transform: "translateY(60px) rotateX(-90deg)", perspective: "1000px", textShadow: "0 0 60px rgba(99,102,241,0.2)" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <div className="relative">
          <p
            ref={taglineRef}
            className="text-xs md:text-sm text-indigo-400/60 uppercase mb-10 opacity-0"
            style={{ fontFamily: "var(--font-mono)", transform: "translateY(20px)", letterSpacing: "0.3em" }}
          >
            Full-Stack &amp; Shopify Developer
          </p>

          {/* Particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              ref={(el) => { if (el) particlesRef.current[i] = el; }}
              className="absolute w-1 h-1 rounded-full bg-indigo-400/60"
              style={{
                top: "50%",
                left: i < 3 ? `${10 + i * 25}%` : `${10 + (i - 3) * 25}%`,
                marginTop: i < 3 ? "-20px" : "20px",
              }}
            />
          ))}
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 md:gap-4 w-48 sm:w-64 md:w-80">
          <div className="flex-1 h-[2px] bg-white/8 rounded-full overflow-hidden">
            <div ref={barRef} className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 rounded-full origin-left scale-x-0" />
          </div>
          <div ref={counterRef} className="text-sm font-mono text-indigo-400 tabular-nums w-8 text-right">00</div>
        </div>

        <div ref={statusRef} className="text-[10px] text-white/20 tracking-[0.2em] uppercase mt-4" style={{ fontFamily: "var(--font-mono)" }}>
          Initializing
        </div>
      </div>
    </div>
  );
}