'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Phone,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import InsuranceMarquee from '@/components/InsuranceMarquee';
import drDivyaImage from '@/assets/team/dr-divya-shetty.webp';

type InsuranceCompany = {
  name: string;
  logo?: string;
};

type Testimonial = {
  name: string;
  review: string;
  rating: number;
  link: string;
};

type Service = {
  name: string;
  description: string;
};

const insuranceCompanies: InsuranceCompany[] = [
  { name: 'Aetna', logo: '/assets/logos/aetna.svg' },
  { name: 'Delta Dental', logo: '/assets/logos/delta-dental.svg' },
  { name: 'MetLife', logo: '/assets/logos/metlife.svg' },
  { name: 'Principal', logo: '/assets/logos/principal.svg' },
  { name: 'Sun Life', logo: '/assets/logos/sunlife.png' },
  { name: 'Blue Cross Blue Shield', logo: '/assets/logos/blue-cross.svg' },
  { name: 'Cigna', logo: '/assets/logos/cigna.svg' },
];

const testimonials: Testimonial[] = [
  {
    name: 'Bob Rubel',
    review:
      "Wonderful dental office. Great dentist and superb staff. Been going there for years. I'm an 80-year-old male. Highly recommend. I have my teeth cleaned quarterly because I have delicate dentures. Outstanding dental policy, also. Extremely pleased.",
    rating: 5,
    link: 'https://maps.app.goo.gl/1C47AjJTLLSWnNLx6',
  },
  {
    name: 'Gabriel Fine',
    review:
      'Very kind staff and a well-run office. I always felt like they had my best interests in mind, never money, and the team are super nice! Would definitely recommend for reliable, transparent, and friendly dental care',
    rating: 5,
    link: 'https://maps.app.goo.gl/sj6mn4PdJ7Kiz3X38',
  },
  {
    name: 'Felice Trirogoff',
    review:
      "I will always recommend Dr. Shetty and her team as a dentist. All of them truly prioritize their patients comfort and dental care. Dr. Shetty takes the time to explain your diagnosis and plan next steps if it’s needed. If you’re looking for a dentist that listens and has your best interest in mind, visit Dental Smiles.",
    rating: 5,
    link: 'https://maps.app.goo.gl/5R13vBhTp3uJ4hAC6',
  },
  {
    name: 'Luke Hebert',
    review:
      "My wife & have been using Dental Smiles for a while now after having some pretty 'meh' dentist experiences elsewhere. Dental Smiles is the best. The dentist is calm, knowledgeable, efficient, and doesn't try to push unnecessary dental procedures like aesthetics-only invisiline. Their hygienists have all been super friendly & competent. Hiiiighly recommend Dental Smiles",
    rating: 5,
    link: 'https://maps.app.goo.gl/FhfXBjtVZ5BWnzm18',
  },
  {
    name: 'Abhra Biswas',
    review:
      'Great office, was able to get great service quickly, they were thorough and offered helpful tips to further optimize flossing. Thanks!',
    rating: 5,
    link: 'https://maps.app.goo.gl/nkBFHXaYvjsWzuXp6',
  },
  {
    name: 'Dan Matthews',
    review:
      "I've been very impressed all around with Dental Smiles. Dr. Okulist has a great chair-side manner and is very knowledgeable and friendly. The staff is absolutely incredible: helpful, cheerful and were very patient while I worked out some insurance shenanigans. I've already recommended them to my friends. Thanks y'all!",
    rating: 5,
    link: 'https://maps.app.goo.gl/LhD1y4Wx8VoY2HwB8',
  },
];

const testimonialLoops = ['first', 'second'] as const;

const TESTIMONIAL_PREVIEW_LENGTH = 170;

const truncateReview = (text: string) =>
  text.length > TESTIMONIAL_PREVIEW_LENGTH
    ? `${text.slice(0, TESTIMONIAL_PREVIEW_LENGTH).trimEnd()}…`
    : text;

const services: Service[] = [
  { name: 'General Dentistry', description: 'Routine cleanings & checkups' },
  { name: 'Cosmetic Dentistry', description: 'Whitening & veneers' },
  { name: 'Restorative Care', description: 'Crowns, fillings & implants' },
  { name: 'Emergency Care', description: 'Same-day urgent treatment' },
];

const DraggableCarousel = ({
  children,
  trackClassName,
}: {
  children: React.ReactNode;
  trackClassName: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return;
    }

    isDraggingRef.current = true;
    setIsPaused(true);
    startXRef.current = event.clientX;
    startScrollLeftRef.current = containerRef.current.scrollLeft;
    containerRef.current.setPointerCapture(event.pointerId);
    containerRef.current.style.cursor = 'grabbing';
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !containerRef.current) {
      return;
    }

    const distance = event.clientX - startXRef.current;
    containerRef.current.scrollLeft = startScrollLeftRef.current - distance;
  };

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return;
    }

    isDraggingRef.current = false;
    setIsPaused(false);
    if (containerRef.current.hasPointerCapture(event.pointerId)) {
      containerRef.current.releasePointerCapture(event.pointerId);
    }
    containerRef.current.style.cursor = 'grab';
  };

  return (
    <div
      ref={containerRef}
      className="cursor-grab overflow-x-auto select-none touch-pan-y [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onPointerLeave={stopDragging}
    >
      <style>{`
        @keyframes autoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          animation: autoScroll 40s linear infinite;
        }
        .carousel-track.is-paused {
          animation-play-state: paused;
        }
      `}</style>
      <div ref={trackRef} className={`${trackClassName} carousel-track ${isPaused ? 'is-paused' : ''}`}>
        {children}
      </div>
    </div>
  );
};

const ScribbleUnderline = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 200 24"
    preserveAspectRatio="none"
    className={`pointer-events-none absolute -bottom-3 left-0 h-3 w-full ${className}`}
    aria-hidden="true"
  >
    <path
      d="M4 14 C 32 4, 62 22, 92 14 C 122 6, 152 22, 196 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      opacity="0.75"
    />
  </svg>
);

const MobileHero = () => (
  <section className="relative overflow-hidden md:hidden bg-gradient-to-b from-white via-clinical-bg/30 to-white pt-2 pb-8">
    <style>{`
      @keyframes heroFadeUp {
        0% { opacity: 0; transform: translateY(24px) scale(0.97); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes heroZoomIn {
        0% { opacity: 0; transform: scale(0.94); }
        100% { opacity: 1; transform: scale(1); }
      }
      .animate-hero-up { animation: heroFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) both; }
      .animate-hero-zoom { animation: heroZoomIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
      .delay-100 { animation-delay: 0.12s; }
      .delay-200 { animation-delay: 0.24s; }
      .delay-300 { animation-delay: 0.36s; }
      .delay-400 { animation-delay: 0.48s; }
      .delay-500 { animation-delay: 0.6s; }
    `}</style>

    <div className="px-5 sm:px-6 space-y-5">
      {/* 1. Title — Top, left-aligned, large and bold like Lume Dental */}
      <div className="space-y-3 animate-hero-up delay-100">
        <h1 className="font-sans font-extrabold text-foreground leading-[1.08] tracking-tight text-[2.25rem] sm:text-[2.6rem]">
          Where Families Can{' '}
          <span className="relative inline-block text-primary">
            Smile Confidently
            <ScribbleUnderline className="text-primary" />
          </span>
        </h1>
        <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed">
          Providing quality dental care for patients of all ages in Austin, TX
        </p>
      </div>

      {/* 2. Hero Image — Full-width rounded, no overlay card on mobile */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg animate-hero-zoom delay-200">
        <div className="aspect-[4/3]">
          <img
            src="/assets/dental-office-hero.webp"
            alt="Modern dental office with comfortable patient chair and advanced equipment in Austin, TX"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. CTA Buttons */}
      <div className="flex flex-col gap-2.5 animate-hero-up delay-400">
        <Link href="/contact#request-appointment">
          <Button size="lg" className="btn-primary w-full h-12 text-sm font-semibold">
            <Calendar className="w-4.5 h-4.5 mr-2" />
            Book Appointment
          </Button>
        </Link>
        <Button
          variant="outline"
          size="lg"
          className="w-full h-12 border border-primary/20 bg-white hover:bg-primary/5 transition-colors shadow-none text-sm font-medium"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Phone className="w-4.5 h-4.5 mr-2" />
          512.467.9955
        </Button>
      </div>

      {/* 4. Stats Row */}
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/60 animate-hero-up delay-500">
        <div className="text-center">
          <div className="text-xl font-bold text-primary">20+</div>
          <div className="text-[11px] text-muted-foreground font-medium">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-primary">5000+</div>
          <div className="text-[11px] text-muted-foreground font-medium">Happy Patients</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
          </div>
          <div className="text-[11px] text-muted-foreground font-medium">4.9-Star Reviews</div>
        </div>
      </div>
    </div>
  </section>
);

const DesktopHero = () => (
  <section className="relative hidden overflow-hidden md:flex md:items-center lg:min-h-[calc(100vh-80px)] bg-gradient-to-br from-clinical-bg via-clinical-bg to-clinical-grey">
    <style>{`
      @keyframes heroFadeUp {
        0% { opacity: 0; transform: translateY(28px) scale(0.97); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes heroFadeRight {
        0% { opacity: 0; transform: translateX(36px) scale(0.97); }
        100% { opacity: 1; transform: translateX(0) scale(1); }
      }
      @keyframes heroZoomIn {
        0% { opacity: 0; transform: scale(0.93); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes heroFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-14px) rotate(1deg); }
      }
      @keyframes heroFloatDelayed {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-18px) rotate(-1deg); }
      }
      @keyframes heroBreathe {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }
      .animate-hero-up { animation: heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
      .animate-hero-right { animation: heroFadeRight 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
      .animate-hero-zoom { animation: heroZoomIn 0.95s cubic-bezier(0.16, 1, 0.3, 1) both; }
      .animate-float { animation: heroFloat 7s ease-in-out infinite; }
      .animate-float-delayed { animation: heroFloatDelayed 9s ease-in-out infinite 1.5s; }
      .animate-breathe { animation: heroBreathe 5s ease-in-out infinite; }
      .delay-100 { animation-delay: 0.12s; }
      .delay-200 { animation-delay: 0.24s; }
      .delay-300 { animation-delay: 0.36s; }
      .delay-400 { animation-delay: 0.48s; }
      .delay-500 { animation-delay: 0.6s; }
    `}</style>
    <svg
      viewBox="0 0 260 260"
      className="pointer-events-none absolute left-[-80px] top-20 h-48 w-48 md:h-64 md:w-64 text-primary/35 animate-float animate-breathe"
      aria-hidden="true"
    >
      <path d="M24 132c0-60 48-108 108-108 46 0 86 28 102 68 18 46-2 104-46 136-52 38-132 8-154-56-6-18-10-26-10-40z" fill="currentColor" />
    </svg>
    <svg
      viewBox="0 0 300 300"
      className="pointer-events-none absolute right-[-120px] bottom-[-100px] h-64 w-64 md:h-80 md:w-80 text-primary/20 animate-float-delayed animate-breathe opacity-60"
      aria-hidden="true"
    >
      <circle cx="150" cy="150" r="110" fill="currentColor" />
    </svg>
    <div className="container-clinical py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <div className="space-y-3 md:space-y-4 lg:space-y-6 animate-hero-up delay-100">
            <h1 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl xl:text-[2.75rem] font-sans font-semibold text-foreground leading-[1.28] tracking-tight">
              Where Families Can
              <br />
              <span className="relative inline-block text-primary">
                {' '}Smile Confidently
                <ScribbleUnderline className="text-primary" />
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Providing quality dental care for patients of all ages in Austin, TX
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 animate-hero-up delay-200">
            <Link href="/contact#request-appointment">
              <Button size="lg" className="btn-primary w-full sm:w-auto text-xs sm:text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full border border-primary/20 bg-white/60 hover:bg-primary/5 transition-colors shadow-none sm:w-auto text-xs sm:text-sm"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Phone className="w-4 h-4 mr-2" />
              512.467.9955
            </Button>
          </div>

          <div className="grid gap-4 pt-4 md:pt-6 border-t border-border sm:grid-cols-3 sm:gap-4 lg:gap-6 animate-hero-up delay-300">
            <div className="text-center sm:text-left">
              <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary">20+</div>
              <div className="text-xs lg:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary">5000+</div>
              <div className="text-xs lg:text-sm text-muted-foreground">Happy Patients</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-xs lg:text-sm text-muted-foreground">4.9-Star Reviews</div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 md:mt-0 animate-hero-right delay-200">
          <div className="aspect-[4/3] rounded-bento overflow-hidden shadow-clinical animate-hero-zoom delay-100">
            <img
              src="/assets/dental-office-hero.webp"
              alt="Modern dental office with comfortable patient chair and advanced equipment in Austin, TX"
              className="w-full h-full object-cover"
            />
          </div>
          <Card className="max-w-xs mx-auto mt-3 md:mt-0 md:max-w-none md:mx-0 md:absolute md:-bottom-5 md:-left-6 bg-card/95 backdrop-blur-sm border-clinical animate-hero-up delay-400">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0">
                  <img
                    src={drDivyaImage.src ?? drDivyaImage}
                    alt="Dr. Divya Shetty - Lead Dentist at Dental Smiles Austin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm">Dr. Divya Shetty</div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground">Lead Dentist</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default function HomeContent() {
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<string, boolean>>({});

  const toggleTestimonial = (key: string) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderTestimonialCard = (
    prefix: (typeof testimonialLoops)[number],
    index: number,
    { link, rating, review, name }: Testimonial
  ) => {
    const cardKey = `${prefix}-${index}`;
    const isExpanded = expandedTestimonials[cardKey];
    const isLongReview = review.length > TESTIMONIAL_PREVIEW_LENGTH;
    const displayReview = isExpanded || !isLongReview ? review : truncateReview(review);

    return (
      <a
        key={cardKey}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 w-80 border-clinical hover-scale"
        style={{ textDecoration: 'none' }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex mb-4">
              {Array.from({ length: rating }).map((_, starIndex) => (
                <Star key={starIndex} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/85 text-sm sm:text-[15px] leading-relaxed mb-2 min-h-[96px] font-normal">
              “{displayReview}”
            </p>
            {isLongReview && (
              <button
                type="button"
                className="mb-4 text-xs sm:text-sm font-semibold text-primary hover:underline focus:outline-none"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  toggleTestimonial(cardKey);
                }}
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            )}
            <div className="border-t border-border pt-4">
              <div className="font-bold text-foreground text-sm sm:text-base">{name}</div>
            </div>
          </CardContent>
        </Card>
      </a>
    );
  };

  return (
    <div className="min-h-screen">
      <MobileHero />
      <DesktopHero />

      <section className="relative overflow-hidden py-12 md:py-16 bg-clinical-grey">
        <style>{`
          @keyframes float-3 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-14px); }
          }
          .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
        `}</style>
        <svg
          viewBox="0 0 180 180"
          className="pointer-events-none absolute -left-10 bottom-8 h-28 w-28 text-primary/30 animate-float-3"
          aria-hidden="true"
        >
          <circle cx="90" cy="90" r="72" fill="currentColor" />
        </svg>
        <div className="container-clinical">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-foreground mb-4">
                  Why Choose <span className="relative inline-block">Dental Smiles?<ScribbleUnderline className="text-primary" /></span>
                </h2>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  We&apos;re proud to be a local, female-owned dental practice providing personalized, patient-centered care in Austin, TX.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map(({ name, description }, index) => (
                  <div key={index} className="p-4 bg-card rounded-bento border-clinical">
                    <h3 className="text-base font-bold text-foreground tracking-tight mb-1.5">{name}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>

              <Link href="/services">
                <Button className="btn-primary mt-2">
                  View All Services
                </Button>
              </Link>
            </div>

            <div className="aspect-[4/3] rounded-bento overflow-hidden shadow-clinical">
              <img
                src="/assets/dental-team.webp"
                alt="Dental Smiles team providing gentle, professional care in Austin, TX"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-y border-border" style={{ backgroundColor: '#741234' }}>
        <div className="container-clinical">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight text-white mb-2">
              Insurance Plans We Accept
            </h2>
            <p className="text-sm sm:text-base text-white/90">We work with most major insurance providers</p>
          </div>

          <InsuranceMarquee theme="maroon" speed={28} />
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-clinical">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real reviews from real patients who trust us with their smiles
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-card to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-card to-transparent z-10" />
            <DraggableCarousel trackClassName="flex w-max space-x-6 px-1">
              {testimonialLoops.map((loopKey) =>
                testimonials.map((testimonial, index) =>
                  renderTestimonialCard(loopKey, index, testimonial)
                )
              )}
            </DraggableCarousel>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="container-clinical">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-primary text-primary-foreground shadow-lg">
            <div className="absolute -left-24 top-0 h-[140%] w-72 rotate-12 bg-white/10 blur-3xl pointer-events-none" />
            <div className="relative grid gap-4 p-6 sm:p-8 lg:p-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight">
                Ready for Your Best Smile?
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
                Schedule your appointment today and experience the difference of personalized, compassionate dental care in Austin, TX.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row pt-1">
                <Link href="/contact#request-appointment" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xs sm:text-sm font-semibold px-5 py-2.5">
                    <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                  </Button>
                </Link>
                <Link href="tel:5124679955" className="w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    className="w-full sm:w-auto border border-primary-foreground/30 bg-white/10 text-primary-foreground hover:bg-white/20 text-xs sm:text-sm font-semibold px-5 py-2.5"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call 512.467.9955
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
