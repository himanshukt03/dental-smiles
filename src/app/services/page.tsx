'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  CalendarCheck,
  Moon,
  Droplet,
  Phone,
  RefreshCw,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Wind,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ServiceShowcaseItem = {
  title: string;
  summary: string;
  details: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  palette: {
    light: string;
    glow: string;
  };
};

const services: ServiceShowcaseItem[] = [
  {
    title: 'Athletic Mouthguards',
    summary:
      'Athletic mouthguards are protective devices worn over the teeth during sports activities to prevent dental injuries.',
    details:
      'They are custom-made to fit comfortably and provide maximum protection against impacts to the mouth and jaw. Wearing a mouthguard can significantly reduce the risk of injuries during games and practices.',
    highlights: [
      'Precise impressions for a tailored fit',
      'Impact diffusion to protect teeth and jaw',
      'Breathable design that stays put during play',
    ],
  image: '/assets/services/mouth-guards.jpg',
    imageAlt: 'Woman at the dentist being fitted for an athletic mouthguard.',
    icon: ShieldCheck,
    palette: {
      light: 'from-[#fff9f0] via-white to-[#fdf2f8]',
      glow: 'from-primary/50 via-transparent to-transparent',
    },
  },
  {
    title: 'Nightguards (For Bruxism)',
    summary:
      'Nightguards are custom-made devices worn over the teeth at night to prevent teeth grinding and clenching, known as bruxism.',
    details:
      'They help protect the teeth from dental trauma and reduce jaw pain and discomfort associated with the condition, offering restorative relief while you sleep.',
    highlights: [
      'Durable materials engineered for nightly use',
      'Relieves tension in jaw joints and muscles',
      'Protects against enamel wear and fractures',
    ],
  image: '/assets/services/night-guards.jpg',
    imageAlt: 'Patient receiving a custom nightguard fitting at the dental office.',
    icon: Moon,
    palette: {
      light: 'from-[#f3f7ff] via-white to-[#fdf2f8]',
      glow: 'from-[#741234]/40 via-transparent to-transparent',
    },
  },
  {
    title: 'Fluoride Treatments',
    summary:
      'Fluoride treatments help strengthen tooth enamel and prevent cavities.',
    details:
      'During the treatment, a concentrated fluoride solution is applied to the teeth, making them more resistant to decay. These treatments are especially beneficial for children, but adults can also benefit from the added protection.',
    highlights: [
      'Concentrated varnishes that remineralize enamel',
      'Quick, comfortable chairside application',
      'Ideal preventive boost for all ages',
    ],
  image: '/assets/services/fluoride.webp',
    imageAlt: 'Dental hygienist applying fluoride varnish during a preventive visit.',
    icon: Droplet,
    palette: {
      light: 'from-[#f0fdfa] via-white to-[#f5f3ff]',
      glow: 'from-[#0ea5e9]/30 via-transparent to-transparent',
    },
  },
  {
    title: 'Dental Sealants',
    summary:
      'Dental sealants are thin, protective coatings applied to the chewing surfaces of the back teeth to prevent cavities.',
    details:
      'They act as a barrier, sealing out food and bacteria, and are particularly effective for children and teenagers who are at higher risk for tooth decay.',
    highlights: [
      'Shields hard-to-reach grooves from decay',
      'Seamless application with zero drilling',
      'Perfect for growing smiles and adult molars alike',
    ],
  image: '/assets/services/dental-sealants.jpeg',
    imageAlt: 'Close-up of dental sealant application on molars.',
    icon: Shield,
    palette: {
      light: 'from-[#fdf4ff] via-white to-[#ecfdf5]',
      glow: 'from-[#14b8a6]/30 via-transparent to-transparent',
    },
  },
  {
    title: 'Oral Cancer Screenings',
    summary:
      'Oral cancer screenings are routine examinations to detect early signs of oral cancer.',
    details:
      'The screening includes a visual and physical examination of the mouth, throat, and surrounding tissues to identify any abnormal areas that may require further investigation.',
    highlights: [
      'Thorough evaluation of soft tissues and lymph nodes',
      'Uses enhanced visualization technology for accuracy',
      'Early detection guidance with compassionate follow-up',
    ],
    image: '/assets/technology/cone-beam.jpg',
    imageAlt: 'Oral cancer screening in progress using advanced imaging.',
    icon: Search,
    palette: {
      light: 'from-[#f3f4ff] via-white to-[#f0fdfa]',
      glow: 'from-[#6366f1]/30 via-transparent to-transparent',
    },
  },
  {
    title: 'Laser Gum Treatment',
    summary:
      'Laser gum treatment uses advanced laser technology to treat gum disease and other periodontal issues.',
    details:
      'The laser helps remove infected tissue, reduce bacteria, and promote healing with minimal discomfort and faster recovery times compared to traditional methods.',
    highlights: [
      'Minimally invasive periodontal therapy',
      'Targets bacteria while preserving healthy tissue',
      'Accelerated healing with little-to-no downtime',
    ],
    image: '/assets/technology/laser.jpg',
    imageAlt: 'Laser therapy addressing periodontal tissue in a modern operatory.',
    icon: Zap,
    palette: {
      light: 'from-[#fff7ed] via-white to-[#f3f4ff]',
      glow: 'from-[#f59e0b]/30 via-transparent to-transparent',
    },
  },
  {
    title: 'TMJ/TMD Therapy',
    summary:
      'TMJ/TMD therapy addresses issues related to the temporomandibular joint (TMJ), which can cause pain and dysfunction in the jaw.',
    details:
      'Treatment may include exercises, medications, or custom-made appliances to relieve symptoms and improve jaw function.',
    highlights: [
      'Personalized splints and bite balancing',
      'Guided exercises to restore comfortable movement',
      'Multidisciplinary support for long-term relief',
    ],
  image: '/assets/services/TMJ-TMDwebp.webp',
    imageAlt: 'Dentist reviewing TMJ therapy options with a patient.',
    icon: RefreshCw,
    palette: {
      light: 'from-[#fdf2f8] via-white to-[#e0f2fe]',
      glow: 'from-[#8b5cf6]/30 via-transparent to-transparent',
    },
  },
  {
    title: 'Halitosis Treatment',
    summary:
      'Halitosis, or bad breath, can be caused by various factors, including poor oral hygiene, gum disease, or certain foods.',
    details:
      'Treatment involves identifying and addressing the underlying cause, improving oral hygiene, and using specialized mouthwashes or treatments to freshen breath.',
    highlights: [
      'Comprehensive diagnostics to uncover root causes',
      'Personalized hygiene and nutrition coaching',
      'Professional therapies for lasting freshness',
    ],
  image: '/assets/services/Halitosis-Treatment.jpg',
    imageAlt: 'Dental hygienist guiding a patient through halitosis treatment steps.',
    icon: Wind,
    palette: {
      light: 'from-[#ecfdf5] via-white to-[#f3f4ff]',
      glow: 'from-[#34d399]/30 via-transparent to-transparent',
    },
  },
];

const ServicesSpotlight = () => (
  <div className="space-y-16 lg:space-y-20">
    {services.map((service, index) => {
      const isReversed = index % 2 === 1;

      return (
        <article
          key={service.title}
          className={cn(
            'relative overflow-hidden rounded-[2.5rem] border border-primary/10 shadow-lg transition-all duration-500',
            'bg-gradient-to-br',
            service.palette.light,
            'hover:shadow-xl hover:-translate-y-1'
          )}
        >
          <div className="pointer-events-none absolute inset-0">
            <div
              className={cn(
                'absolute -inset-16 opacity-25 blur-3xl',
                'bg-gradient-to-br',
                service.palette.glow
              )}
            />
          </div>

          <div
            className={cn(
              'relative flex flex-col gap-10 p-8 md:p-12 lg:p-16',
              'md:flex-row md:items-center',
              isReversed && 'md:flex-row-reverse'
            )}
          >
            <div className="md:w-1/2 lg:w-[55%] space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                <service.icon className="h-4 w-4" />
                Preventive spotlight
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-heading text-foreground">
                  {service.title}
                </h3>
                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/70 shadow-inner md:hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.summary}
                </p>
                <p className="text-base text-muted-foreground/90 leading-relaxed">
                  {service.details}
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="group flex items-center gap-3 rounded-bento bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm transition hover:bg-white"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground/90">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:block md:w-1/2 lg:w-[45%]">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-white/40 bg-white/40 shadow-inner">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                  priority={index < 2}
                />
                <div className="absolute inset-x-6 bottom-5 flex items-center gap-3 rounded-full bg-primary/90 px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg">
                  <service.icon className="h-4 w-4" />
                  {service.highlights[0]}
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    })}
  </div>
);

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20">

      <section className="section-padding pt-10 pb-4">
        <div className="container-clinical">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-gradient-to-br from-primary/5 via-white to-white shadow-xl">
            <div className="absolute -top-16 right-4 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid items-center gap-6 p-6 sm:p-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.7fr)] lg:p-10">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> General dentistry in Austin, TX
                </span>
                <div className="space-y-3">
                  <h1 className="text-[1.9rem] font-heading text-foreground sm:text-4xl">
                    Comprehensive care for confident smiles
                  </h1>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Dental Smiles is proud to offer a variety of both general and specialty dental services. From routine cleanings to laser gum therapy, we’ve got your family covered.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Want to explore a specific treatment or schedule a consultation? Connect with our team and we’ll guide you every step of the way.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="/book-appointment" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto px-4 py-3 text-xs font-semibold sm:text-sm">
                      <CalendarCheck className="mr-2 h-4 w-4" /> Book a consultation
                    </Button>
                  </Link>
                  <Link href="tel:5124679955" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-primary/20 bg-white/80 px-4 py-3 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground sm:text-sm"
                    >
                      <Phone className="mr-2 h-4 w-4" /> Speak with our team
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white/70 shadow-lg sm:max-w-sm md:mx-0">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/assets/dental-team.jpg"
                    alt="Team providing general dentistry care at Dental Smiles."
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 75vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-primary shadow">
                  Trusted Austin dentistry
                </div>
                <div className="absolute bottom-4 right-4 rounded-2xl bg-primary px-3.5 py-2 text-[11px] font-semibold text-primary-foreground shadow-lg">
                  From cleanings to complete smile plans
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-16">
        <div className="container-clinical space-y-12">
          <div className="max-w-3xl space-y-4 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Advanced services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground">
              Advanced services we offer
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the specialized treatments that keep your smile resilient—from custom mouthguards and laser therapies to comprehensive TMJ solutions. Each spotlight below highlights how we elevate preventive and wellness dentistry in Austin.
            </p>
          </div>

          <ServicesSpotlight />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-clinical">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-primary text-primary-foreground shadow-xl">
            <div className="absolute -left-24 top-0 h-[140%] w-72 rotate-12 bg-white/10 blur-3xl" />
            <div className="relative grid gap-10 p-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-14">
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-heading">
                  Have a question about our services?
                </h2>
                <p className="text-lg opacity-90">
                  Interested in learning more about athletic mouthguards, TMJ support, or preventive wellness? Our care coordinators are ready to personalize recommendations for you.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                      Contact us
                    </Button>
                  </Link>
                  <Link href="tel:5124679955" className="w-full sm:w-auto">
                    <Button
                      variant="ghost"
                      className="w-full sm:w-auto border border-primary-foreground/30 bg-white/10 text-primary-foreground hover:bg-white/20"
                    >
                      Call 512-467-9955
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 text-sm">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-widest opacity-80">
                    Same-day answers
                  </p>
                  <p className="text-base font-semibold">Message us before 3 PM for a response today.</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-widest opacity-80">
                    Personalized guidance
                  </p>
                  <p className="text-base font-semibold">We map out your ideal wellness plan in under 30 minutes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
