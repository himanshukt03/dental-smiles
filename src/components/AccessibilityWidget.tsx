'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const STORAGE_KEY = 'dental-smiles-a11y-prefs';

interface A11yPrefs {
  fontSize: number;
  highContrast: boolean;
  dyslexiaFont: boolean;
  highlightLinks: boolean;
  pauseAnimations: boolean;
}

const DEFAULT_PREFS: A11yPrefs = {
  fontSize: 100,
  highContrast: false,
  dyslexiaFont: false,
  highlightLinks: false,
  pauseAnimations: false,
};

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(DEFAULT_PREFS);
  const [mounted, setMounted] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Load saved preferences on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<A11yPrefs>;
        setPrefs((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // Ignore storage read error
    }
    setMounted(true);
  }, []);

  // Persist preferences to localStorage
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // Ignore storage write error
    }
  }, [prefs, mounted]);

  // Apply DOM effects
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;

    // Font size
    html.style.fontSize = `${prefs.fontSize}%`;

    // Toggle CSS classes
    html.classList.toggle('a11y-high-contrast', prefs.highContrast);
    html.classList.toggle('a11y-dyslexia-font', prefs.dyslexiaFont);
    html.classList.toggle('a11y-highlight-links', prefs.highlightLinks);
    html.classList.toggle('a11y-pause-animations', prefs.pauseAnimations);

    return () => {
      html.style.fontSize = '';
      html.classList.remove(
        'a11y-high-contrast',
        'a11y-dyslexia-font',
        'a11y-highlight-links',
        'a11y-pause-animations'
      );
    };
  }, [prefs, mounted]);

  // Close on Escape key and return focus to trigger
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        setAnnouncement('Accessibility menu closed');
        setTimeout(() => triggerRef.current?.focus(), 50);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [isOpen]);

  // Focus trap inside panel & initial focus
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const panel = panelRef.current;
    const focusableSelector =
      'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = panel.querySelectorAll<HTMLElement>(focusableSelector);
    if (focusableElements.length === 0) return;

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    // Focus close button initially
    closeBtnRef.current?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    panel.addEventListener('keydown', handleTab);
    return () => panel.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  const updatePref = useCallback(
    <K extends keyof A11yPrefs>(key: K, value: A11yPrefs[K], label: string) => {
      setPrefs((prev) => ({ ...prev, [key]: value }));
      setAnnouncement(`${label} ${value ? 'enabled' : 'disabled'}`);
    },
    []
  );

  const adjustFontSize = useCallback((delta: number) => {
    setPrefs((prev) => {
      const newSize = Math.min(200, Math.max(80, prev.fontSize + delta));
      setAnnouncement(`Font size changed to ${newSize} percent`);
      return { ...prev, fontSize: newSize };
    });
  }, []);

  const resetAll = useCallback(() => {
    setPrefs(DEFAULT_PREFS);
    setAnnouncement('All accessibility settings have been reset to default');
  }, []);

  const hasActivePrefs =
    prefs.fontSize !== 100 ||
    prefs.highContrast ||
    prefs.dyslexiaFont ||
    prefs.highlightLinks ||
    prefs.pauseAnimations;

  if (!mounted) return null;

  return (
    <>
      {/* Live Region for Screen Reader Announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>

      {/* Floating Trigger Button (Reliable touch & click across all mobile & desktop screens) */}
      <button
        ref={triggerRef}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => {
            const next = !prev;
            setAnnouncement(next ? 'Accessibility settings dialog opened. Press Escape to close.' : 'Accessibility menu closed');
            return next;
          });
        }}
        aria-label={isOpen ? 'Close accessibility menu' : 'Open accessibility menu (ADA & WCAG controls)'}
        aria-expanded={isOpen}
        aria-controls="a11y-panel"
        aria-haspopup="dialog"
        className="fixed bottom-5 left-5 md:bottom-4 md:left-4 lg:bottom-4 lg:left-4 xl:bottom-5 xl:left-5 z-[999999] flex h-12 w-12 items-center justify-center rounded-full bg-[#333333] text-white shadow-xl ring-2 ring-white/30 transition-all duration-300 hover:scale-105 hover:bg-[#222222] hover:shadow-2xl active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background touch-manipulation cursor-pointer select-none"
      >
        {/* Wheelchair / Accessibility Icon (crisp golden ratio spacing) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="h-6 w-6"
          aria-hidden="true"
        >
          {/* Head */}
          <circle cx="48" cy="27" r="7.5" fill="#ffffff" />
          {/* Arm */}
          <path d="M48 45 h15" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
          {/* Spine, Seat, Leg, Foot */}
          <path d="M48 37 v18 h17 l10 18" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          {/* Wheel (arc) */}
          <path d="M39 52.5 a 19 19 0 1 0 20 20" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
        </svg>

        {/* Active indicator badge */}
        {hasActivePrefs && (
          <span
            className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-emerald-500 shadow-xs"
            aria-hidden="true"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          </span>
        )}
      </button>

      {/* Accessibility Settings Panel Dialog */}
      {isOpen && (
        <div
          ref={panelRef}
          id="a11y-panel"
          role="dialog"
          aria-labelledby="a11y-title"
          aria-describedby="a11y-desc"
          aria-modal="true"
          className="fixed bottom-18 left-5 md:bottom-18 md:left-4 lg:bottom-18 lg:left-4 xl:bottom-20 xl:left-5 z-[999999] w-[275px] sm:w-[295px] md:w-[305px] xl:w-[320px] max-w-[calc(100vw-36px)] overflow-hidden rounded-2xl border border-stone-300/80 bg-card shadow-2xl animate-in slide-in-from-bottom-3 fade-in duration-200 select-none"
        >
          {/* Screen Reader Description */}
          <p id="a11y-desc" className="sr-only">
            Accessibility settings panel for ADA and WCAG 2.1 AA compliance. Use Tab to move between controls, Space or Enter to toggle options, and Escape to close.
          </p>

          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-200 bg-clinical-creme px-3.5 py-2.5 sm:px-4 sm:py-3 xl:px-4.5 xl:py-3.5">
            <div className="flex items-center gap-2 xl:gap-2.5">
              <div className="flex h-6.5 w-6.5 xl:h-7.5 xl:w-7.5 items-center justify-center rounded-md bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="h-4 w-4 xl:h-4.5 xl:w-4.5"
                  aria-hidden="true"
                >
                  <circle cx="48" cy="27" r="7.5" fill="currentColor" />
                  <path d="M48 45 h15" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                  <path d="M48 37 v18 h17 l10 18" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M39 52.5 a 19 19 0 1 0 20 20" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </div>
              <h2 id="a11y-title" className="font-heading text-xs sm:text-[13px] xl:text-sm font-bold text-foreground">
                Accessibility Settings
              </h2>
            </div>

            <button
              ref={closeBtnRef}
              onClick={() => {
                setIsOpen(false);
                setAnnouncement('Accessibility menu closed');
                triggerRef.current?.focus();
              }}
              aria-label="Close accessibility menu (Escape)"
              className="flex h-6.5 w-6.5 xl:h-7.5 xl:w-7.5 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-stone-200/80 hover:text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 xl:h-4 xl:w-4"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Unified Divided List (Thin hairline lines separating sections) */}
          <div className="divide-y divide-stone-200/80">
            {/* Font Size Row */}
            <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 xl:px-4.5 xl:py-3 bg-stone-50/30">
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 xl:gap-2">
                  <span className="flex h-5 w-5 xl:h-6 xl:w-6 items-center justify-center rounded bg-stone-200 text-stone-700 font-bold text-[11px] xl:text-xs">
                    T
                  </span>
                  <span id="font-size-label" className="text-xs sm:text-[13px] xl:text-sm font-semibold text-foreground">
                    Font Size
                  </span>
                </div>
                <span
                  className="rounded bg-primary/10 px-1.5 py-0.5 xl:px-2 xl:py-0.5 text-[10px] xl:text-xs font-bold text-primary"
                  aria-live="polite"
                >
                  {prefs.fontSize}%
                </span>
              </div>

              <div className="flex items-center gap-2 pt-0.5">
                <button
                  onClick={() => adjustFontSize(-10)}
                  disabled={prefs.fontSize <= 80}
                  aria-label={`Decrease font size by 10 percent. Currently ${prefs.fontSize} percent`}
                  className="flex h-6.5 w-8 sm:h-7 sm:w-9 xl:h-8 xl:w-10 items-center justify-center rounded border border-stone-300 bg-card text-xs xl:text-sm font-bold text-foreground transition-all hover:border-primary hover:bg-primary/5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  A<span className="text-[11px] xl:text-xs leading-none ml-0.5">−</span>
                </button>

                {/* Progress bar */}
                <div
                  className="relative h-1.5 xl:h-2 flex-1 overflow-hidden rounded-full bg-stone-200"
                  role="progressbar"
                  aria-labelledby="font-size-label"
                  aria-valuemin={80}
                  aria-valuemax={200}
                  aria-valuenow={prefs.fontSize}
                  aria-valuetext={`${prefs.fontSize} percent font size`}
                >
                  <div
                    data-a11y-progress-fill
                    className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all duration-200"
                    style={{ width: `${((prefs.fontSize - 80) / 120) * 100}%` }}
                  />
                </div>

                <button
                  onClick={() => adjustFontSize(10)}
                  disabled={prefs.fontSize >= 200}
                  aria-label={`Increase font size by 10 percent. Currently ${prefs.fontSize} percent`}
                  className="flex h-6.5 w-8 sm:h-7 sm:w-9 xl:h-8 xl:w-10 items-center justify-center rounded border border-stone-300 bg-card text-xs xl:text-sm font-bold text-foreground transition-all hover:border-primary hover:bg-primary/5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  A<span className="text-[11px] xl:text-xs leading-none ml-0.5">+</span>
                </button>
              </div>
            </div>

            {/* Toggle Features List */}
            <ToggleRow
              id="high-contrast"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 xl:h-4 xl:w-4" aria-hidden="true">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              }
              label="High Contrast"
              srDescription="Dark high-contrast color scheme for enhanced text legibility"
              active={prefs.highContrast}
              onToggle={() => updatePref('highContrast', !prefs.highContrast, 'High contrast mode')}
            />

            <ToggleRow
              id="dyslexia-font"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 xl:h-4 xl:w-4" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              }
              label="Dyslexia-Friendly Font"
              srDescription="Specialized OpenDyslexic typeface for easier reading"
              active={prefs.dyslexiaFont}
              onToggle={() => updatePref('dyslexiaFont', !prefs.dyslexiaFont, 'Dyslexia-friendly font')}
            />

            <ToggleRow
              id="highlight-links"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 xl:h-4 xl:w-4" aria-hidden="true">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              }
              label="Highlight Links"
              srDescription="Underline and high-contrast outline on all interactive links"
              active={prefs.highlightLinks}
              onToggle={() => updatePref('highlightLinks', !prefs.highlightLinks, 'Highlight links')}
            />

            <ToggleRow
              id="pause-animations"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 xl:h-4 xl:w-4" aria-hidden="true">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              }
              label="Pause Animations"
              srDescription="Stop all motion, sliding carousels, and transitions"
              active={prefs.pauseAnimations}
              onToggle={() => updatePref('pauseAnimations', !prefs.pauseAnimations, 'Pause animations')}
            />

            {/* Reset All Button */}
            {hasActivePrefs && (
              <button
                onClick={resetAll}
                className="flex w-full items-center justify-center gap-1.5 px-3.5 py-2 sm:py-2.5 xl:py-3 text-xs sm:text-[13px] xl:text-sm font-semibold text-rose-700 bg-rose-50/60 transition-colors hover:bg-rose-100 hover:text-rose-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-inset"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3 xl:h-3.5 xl:w-3.5"
                  aria-hidden="true"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                Reset All Settings
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/* ── Accessible Toggle Row with Responsive Scaling ── */

interface ToggleRowProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  srDescription: string;
  active: boolean;
  onToggle: () => void;
}

function ToggleRow({ id, icon, label, srDescription, active, onToggle }: ToggleRowProps) {
  return (
    <button
      id={`btn-${id}`}
      onClick={onToggle}
      role="switch"
      aria-checked={active}
      aria-labelledby={`label-${id}`}
      aria-describedby={`desc-${id}`}
      className={`group flex w-full items-center justify-between gap-2 px-3.5 py-2 sm:py-2.5 xl:px-4.5 xl:py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset ${
        active
          ? 'bg-primary/[0.04]'
          : 'hover:bg-stone-50/80'
      }`}
    >
      {/* Icon + Label */}
      <div className="flex items-center gap-2 xl:gap-2.5 min-w-0 flex-1">
        <div
          className={`flex h-6.5 w-6.5 xl:h-7.5 xl:w-7.5 shrink-0 items-center justify-center rounded-md transition-colors ${
            active
              ? 'bg-primary/10 text-primary'
              : 'bg-stone-100 text-stone-600 group-hover:bg-stone-200/80'
          }`}
        >
          {icon}
        </div>

        <span
          id={`label-${id}`}
          className={`text-xs sm:text-[13px] xl:text-sm truncate transition-colors ${
            active ? 'font-bold text-primary' : 'font-semibold text-foreground'
          }`}
        >
          {label}
        </span>

        {/* Screen Reader Only Description */}
        <span id={`desc-${id}`} className="sr-only">
          {srDescription}
        </span>
      </div>

      {/* Responsive Compact Switch Pill with Glide Thumb */}
      <div
        data-a11y-switch-track
        data-active={active ? "true" : "false"}
        className={`relative inline-flex h-4.5 w-8 xl:h-5.5 xl:w-10 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
          active ? 'bg-primary' : 'bg-stone-300 group-hover:bg-stone-400/80'
        }`}
        aria-hidden="true"
      >
        <span
          data-a11y-switch-thumb
          className={`pointer-events-none inline-block h-3.5 w-3.5 xl:h-4.5 xl:w-4.5 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out my-0.5 ${
            active ? 'translate-x-4 xl:translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </div>
    </button>
  );
}
