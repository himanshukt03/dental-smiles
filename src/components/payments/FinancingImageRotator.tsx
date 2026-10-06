'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const SLIDES = [
  {
    src: '/assets/care-credit-card-1.jpg',
    alt: 'CareCredit Healthcare Credit Card accepted at Dental Smiles',
  },
  {
    src: '/assets/sunbit-financing.jpg',
    alt: 'Sunbit Flexible Dental Financing accepted at Dental Smiles',
  },
];

export default function FinancingImageRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Performance: Only cycle timer when the component is actually in the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Performance: Pause rotation when tab is hidden or paused or offscreen
  useEffect(() => {
    if (isPaused || !isInView) return;

    let isDocumentVisible = typeof document !== 'undefined' ? !document.hidden : true;

    const handleVisibilityChange = () => {
      isDocumentVisible = typeof document !== 'undefined' ? !document.hidden : true;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const timer = setInterval(() => {
      if (isDocumentVisible) {
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPaused, isInView]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] mx-auto lg:mx-0 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Photo frame with exact natural aspect ratio fitting the graphic */}
      <div className="relative aspect-[938/567] w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out transform-gpu will-change-[opacity] ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 480px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </div>
          );
        })}
      </div>

      {/* Subtle indicator dots placed below the frame to never obstruct card content */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
              idx === currentIndex
                ? 'w-6 bg-primary shadow-xs'
                : 'w-1.5 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Switch to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
