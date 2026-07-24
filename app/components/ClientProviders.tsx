'use client';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplashCursor from './SplashCursor';
import Loader from './Loader';

function LenisGSAPBridge() {
  const lenis = useLenis();
  const initialized = useRef(false);

  useEffect(() => {
    if (!lenis || initialized.current) return;
    initialized.current = true;

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.lagSmoothing(1);
    };
  }, [lenis]);

  return null;
}

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
    });
  }, []);
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: true,
        touchInertiaExponent: 1.2,
      }}
    >
      <LenisGSAPBridge />
      <SplashCursor />
      <Loader />
      {children}
    </ReactLenis>
  ) as React.ReactElement;
}
