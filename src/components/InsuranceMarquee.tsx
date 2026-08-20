'use client';

import Image from 'next/image';

export type InsuranceItem = {
  name: string;
  logo?: string;
};

export const insuranceProvidersList: InsuranceItem[] = [
  { name: 'Delta Dental', logo: '/assets/logos/delta-dental.svg' },
  { name: 'Cigna', logo: '/assets/logos/cigna.svg' },
  { name: 'Aetna', logo: '/assets/logos/aetna.svg' },
  { name: 'MetLife', logo: '/assets/logos/metlife.svg' },
  { name: 'Blue Cross Blue Shield', logo: '/assets/logos/blue-cross.svg' },
  { name: 'Principal', logo: '/assets/logos/principal.svg' },
  { name: 'Sun Life', logo: '/assets/logos/sunlife.png' },
  { name: 'Connection Dental', logo: '/assets/logos/Connection-Dental.jpg' },
  { name: 'Humana', logo: '/assets/logos/Humana.png' },
  { name: 'Guardian', logo: '/assets/logos/guardian.svg' },
  { name: 'United Concordia', logo: '/assets/logos/united-concordia.png' },
  { name: 'Ameritas', logo: '/assets/logos/ameritas.png' },
  { name: 'Lincoln Financial', logo: '/assets/logos/lincoln-financial.svg' },
];

interface InsuranceMarqueeProps {
  theme?: 'maroon' | 'light';
  speed?: number; // duration in seconds
  className?: string;
}

export default function InsuranceMarquee({
  theme = 'light',
  speed = 30,
  className = '',
}: InsuranceMarqueeProps) {
  const isMaroon = theme === 'maroon';

  return (
    <div className={`relative overflow-hidden w-full select-none py-2 ${className}`}>
      {/* Edge gradient masks */}
      <div
        className={`pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-24 z-10 bg-gradient-to-r ${
          isMaroon ? 'from-[#741234] to-transparent' : 'from-background to-transparent'
        }`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-24 z-10 bg-gradient-to-l ${
          isMaroon ? 'from-[#741234] to-transparent' : 'from-background to-transparent'
        }`}
      />

      <style>{`
        @keyframes marqueeLoop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-loop {
          animation: marqueeLoop ${speed}s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex w-max animate-marquee-loop">
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
          {insuranceProvidersList.map((company, index) => (
            <div
              key={`track1-${index}`}
              className={`flex-shrink-0 rounded-xl px-5 py-2.5 min-w-[150px] sm:min-w-[170px] h-14 flex items-center justify-center transition-transform duration-300 hover:scale-105 shadow-sm border ${
                isMaroon
                  ? 'bg-white/95 border-white/20 text-foreground'
                  : 'bg-white border-primary/15 text-foreground hover:border-primary/40'
              }`}
            >
              {company.logo ? (
                <div className="relative w-full h-8 flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={130}
                    height={32}
                    className="max-h-8 w-auto object-contain"
                  />
                </div>
              ) : (
                <span className="text-xs sm:text-sm font-semibold text-foreground/90 tracking-tight text-center">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Track 2 - Exact duplicate with identical width & padding */}
        <div
          className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6"
          aria-hidden="true"
        >
          {insuranceProvidersList.map((company, index) => (
            <div
              key={`track2-${index}`}
              className={`flex-shrink-0 rounded-xl px-5 py-2.5 min-w-[150px] sm:min-w-[170px] h-14 flex items-center justify-center transition-transform duration-300 hover:scale-105 shadow-sm border ${
                isMaroon
                  ? 'bg-white/95 border-white/20 text-foreground'
                  : 'bg-white border-primary/15 text-foreground hover:border-primary/40'
              }`}
            >
              {company.logo ? (
                <div className="relative w-full h-8 flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={130}
                    height={32}
                    className="max-h-8 w-auto object-contain"
                  />
                </div>
              ) : (
                <span className="text-xs sm:text-sm font-semibold text-foreground/90 tracking-tight text-center">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
