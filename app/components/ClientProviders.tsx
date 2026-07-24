'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SplashCursor from './SplashCursor';
import Loader from './Loader';

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
    <>
      <SplashCursor />
      <Loader />
      {children}
    </>
  ) as React.ReactElement;
}
