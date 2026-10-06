'use client';

import React, { useRef, useEffect } from 'react';

interface DraggableMarqueeProps {
  children: React.ReactNode;
  speed?: number; // pixels per second for auto-scroll
  className?: string;
  trackClassName?: string;
}

export default function DraggableMarqueeContainer({
  children,
  speed = 35,
  className = '',
  trackClassName = '',
}: DraggableMarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const lastTimestampRef = useRef<number | null>(null);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    let animationId: number;

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }
      const elapsed = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const container = containerRef.current;
      const track = trackRef.current;

      // Auto-scroll ALWAYS runs unless user is actively clicking and dragging
      if (container && track && !isDraggingRef.current) {
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0) {
          scrollPosRef.current += speed * elapsed;

          // Infinite circular modulo wrap
          scrollPosRef.current = ((scrollPosRef.current % halfWidth) + halfWidth) % halfWidth;
          container.scrollLeft = scrollPosRef.current;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    hasDraggedRef.current = false;
    isDraggingRef.current = false;
    startXRef.current = e.clientX;
    startScrollLeftRef.current = container.scrollLeft;
    scrollPosRef.current = container.scrollLeft;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // CRITICAL: If no mouse button is currently held down (e.g. mouse hover), NEVER drag!
    if (e.buttons === 0) {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        hasDraggedRef.current = false;
        if (container.hasPointerCapture && container.hasPointerCapture(e.pointerId)) {
          try {
            container.releasePointerCapture(e.pointerId);
          } catch (_) {}
        }
        container.style.cursor = 'grab';
      }
      return;
    }

    const dx = e.clientX - startXRef.current;

    // Only initiate drag capture if mouse button is held AND user moved > 5px
    if (!hasDraggedRef.current && Math.abs(dx) > 5) {
      hasDraggedRef.current = true;
      isDraggingRef.current = true;
      if (container.setPointerCapture) {
        try {
          container.setPointerCapture(e.pointerId);
        } catch (_) {}
      }
      container.style.cursor = 'grabbing';
    }

    if (isDraggingRef.current) {
      const halfWidth = track.scrollWidth / 2;
      let targetScroll = startScrollLeftRef.current - dx;

      if (halfWidth > 0) {
        // Seamless modulo wrap for infinite circular dragging in both left and right directions
        targetScroll = ((targetScroll % halfWidth) + halfWidth) % halfWidth;
      }

      container.scrollLeft = targetScroll;
      scrollPosRef.current = targetScroll;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container) {
      if (container.hasPointerCapture && container.hasPointerCapture(e.pointerId)) {
        try {
          container.releasePointerCapture(e.pointerId);
        } catch (_) {}
      }
      container.style.cursor = 'grab';
      scrollPosRef.current = container.scrollLeft;
    }
    isDraggingRef.current = false;
    hasDraggedRef.current = false;
    lastTimestampRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto select-none touch-pan-y [scroll-behavior:auto] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div ref={trackRef} className={`flex w-max ${trackClassName}`}>
        {children}
      </div>
    </div>
  );
}
