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
  const visible = 3;
  const maxIndex = Math.max(0, items.length - visible);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  const translatePercent = -(index * (100 / visible));

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-12 lg:-translate-x-20 z-20 w-11 h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white border border-slate-200 ring-0 focus:outline-none focus:ring-2 focus:ring-slate-300"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-12 lg:translate-x-20 z-20 w-11 h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white border border-slate-200 ring-0 focus:outline-none focus:ring-2 focus:ring-slate-300"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translatePercent}%)` }}
        >
          {items.map((it, i) => (
            <div key={it.title} className="flex-shrink-0 w-[33.3333%] px-3">
              <BentoCard className="p-8 h-full">
                <div className="h-56 rounded-bento overflow-hidden mb-4">
                  <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-heading mb-2">{it.title}</h3>
                <p className="text-base text-muted-foreground">{it.text}</p>
              </BentoCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
