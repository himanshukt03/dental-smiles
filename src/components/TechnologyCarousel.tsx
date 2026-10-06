"use client";

import { useState, useEffect } from "react";
import BentoCard from "@/components/UI/BentoCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TechItem = {
  title: string;
  text: string;
  img: string;
};

const items: TechItem[] = [
  {
    title: "Intraoral Camera",
    text: "Our intraoral camera uses optical and laser scanning to create precise, vivid models of your teeth and gums. With the digital scan, no radiation or X-rays are required.",
    img: "/assets/technology/intraoral.jpg",
  },
  {
    title: "CEREC Technology",
    text: "CEREC allows us to scan, fabricate, and place a crown in a single appointment—saving you time with excellent esthetic results.",
    img: "/assets/technology/CEREC.jpg",
  },
  {
    title: "Laser Dentistry",
    text: "Laser dentistry offers precise, minimally invasive treatments for both hard and soft tissue procedures.",
    img: "/assets/technology/laser.jpg",
  },
  {
    title: "Digital X-rays",
    text: "Digital dental X-rays provide fast, accurate imaging while reducing radiation exposure.",
    img: "/assets/technology/bone.jpg",
  },
  {
    title: "3D Cone-Beam CT Scanner",
    text: "The 3D cone-beam CT scanner offers precise imaging for comprehensive diagnostics and improved treatment accuracy.",
    img: "/assets/technology/cone-beam.jpg",
  },
];

export default function TechnologyCarousel() {
  const [visible, setVisible] = useState(1);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateVisible = () => {
      if (typeof window === "undefined") {
        return;
      }
      const width = window.innerWidth;
      const nextVisible = width >= 1024 ? 3 : width >= 768 ? 2 : 1;
      setVisible(nextVisible);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, items.length - visible);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  function prev() {
    setIndex((i) => (i - 1 + (maxIndex + 1)) % (maxIndex + 1));
  }

  function next() {
    setIndex((i) => (i + 1) % (maxIndex + 1));
  }

  // Autoplay: advance every 4s unless paused
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % (maxIndex + 1));
    }, 4000);
    return () => clearInterval(t);
  }, [isPaused, maxIndex]);

  const itemWidth = 100 / visible;
  const translatePercent = -(index * itemWidth);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Carousel Cards Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translatePercent}%)` }}
        >
          {items.map((it) => (
            <div
              key={it.title}
              className="flex-shrink-0 px-2 sm:px-3"
              style={{ flex: `0 0 ${itemWidth}%` }}
            >
              <div className="p-2.5 sm:p-3 rounded-2xl border border-primary/15 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100">
                  <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-1.5 pt-3 space-y-1.5 flex-1">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground tracking-tight">{it.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-normal">{it.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Side Arrows */}
      <button
        aria-label="Previous"
        onClick={prev}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-10 lg:-translate-x-14 z-20 w-11 h-11 rounded-full bg-white/95 shadow-md items-center justify-center hover:bg-white border border-slate-200 ring-0 focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      <button
        aria-label="Next"
        onClick={next}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-10 lg:translate-x-14 z-20 w-11 h-11 rounded-full bg-white/95 shadow-md items-center justify-center hover:bg-white border border-slate-200 ring-0 focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Mobile Bottom Control Row (Arrows Down Below Cards) */}
      <div className="flex md:hidden items-center justify-center gap-3 pt-4">
        <button
          aria-label="Previous"
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-200 text-foreground active:scale-95 transition-transform cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-bold text-muted-foreground px-2">
          {index + 1} / {maxIndex + 1}
        </span>
        <button
          aria-label="Next"
          onClick={next}
          className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-200 text-foreground active:scale-95 transition-transform cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
