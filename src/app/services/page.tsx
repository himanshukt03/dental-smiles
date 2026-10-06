import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Phone, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Dental Services in Mueller, Austin TX | Family, Cosmetic & Restorative Dentistry',
  description:
    'Explore comprehensive dental services at Dental Smiles in Mueller, Austin, TX (78723). General dentistry, CEREC crowns, cosmetic whitening, implants, emergency & sedation care.',
  keywords: [
    'Mueller dental services Austin',
    'general dentistry Mueller Austin',
    'cosmetic dentistry Mueller TX',
    'restorative dentistry Mueller 78723',
    'emergency dentist Mueller Austin',
    'sedation dentistry Mueller',
    'Dental Smiles Mueller services',
  ],
  alternates: {
    canonical: 'https://dental-smiles.vercel.app/services',
  },
  openGraph: {
    title: 'Dental Services in Mueller, Austin TX | Dental Smiles',
    description:
      'Explore comprehensive dental services at Dental Smiles in Mueller, Austin, TX. Compassionate care for your entire family.',
    url: 'https://dental-smiles.vercel.app/services',
    type: 'website',
    images: [
      {
        url: '/assets/services/general-dentistry/General-Dentistry.jpg',
        width: 1200,
        height: 630,
        alt: 'Dental Smiles Services Mueller Austin',
      },
    ],
  },
};

type ServiceTab = {
  title: string;
  badge: string;
  href: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
};

const serviceTabs: ServiceTab[] = [
  {
    title: 'General Dentistry',
    badge: 'PREVENTIVE CARE',
    href: '/services/general-dentistry',
    description:
      'Routine cleanings, checkups, sealants, and custom nightguards to maintain a healthy smile year-round.',
    features: ['Preventive Cleanings & Exams', 'Custom Nightguards & Sealants', 'Laser Gum Therapy'],
    image: '/assets/services/general-dentistry/General-Dentistry.jpg',
    imageAlt: 'General dentistry care at Dental Smiles Austin.',
  },
  {
    title: 'Cosmetic Dentistry',
    badge: 'SMILE MAKEOVER',
    href: '/services/cosmetic-dentistry',
    description:
      'Professional in-office whitening and handcrafted porcelain veneers tailored to your dream smile.',
    features: ['Professional Teeth Whitening', 'Porcelain Veneers', 'Custom Smile Transformation'],
    image: '/assets/services/Cosmetic-Dentistry/Cosmetic-Dentist.jpg',
    imageAlt: 'Cosmetic dentistry consultation at Dental Smiles Austin.',
  },
  {
    title: 'Restorative Dentistry',
    badge: 'CEREC & IMPLANTS',
    href: '/services/restorative-dentistry',
    description:
      'Single-visit CEREC crowns, permanent implants, tooth-colored fillings, and aesthetic bridges.',
    features: ['CEREC 1-Day Crowns', 'Permanent Implants', 'Composite Fillings'],
    image: '/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png',
    imageAlt: 'Restorative dental procedures at Dental Smiles Austin.',
  },
  {
    title: 'Emergency Dentistry',
    badge: 'URGENT CARE',
    href: '/services/emergency-dentistry',
    description:
      'Same-day emergency dental appointments for severe toothaches, broken teeth, and dental trauma.',
    features: ['Same-Day Urgent Appointments', 'Severe Toothache Relief', 'Chipped & Broken Tooth Repair'],
    image: '/assets/services/Emergency-Dentistry/emergency-dentistry.jpg',
    imageAlt: 'Emergency dentistry care at Dental Smiles Austin.',
  },
  {
    title: 'Dental Sedation',
    badge: 'ANXIETY-FREE',
    href: '/services/dental-sedation',
    description:
      'Comfort-focused nitrous oxide gas and oral sedation options for a completely relaxed visit.',
    features: ['Nitrous Oxide Laughing Gas', 'Oral Conscious Sedation', 'Stress-Free Appointments'],
    image: '/assets/services/Dental-Sedation/sedation-dentistry.jpg',
    imageAlt: 'Dental sedation options at Dental Smiles Austin.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <BreadcrumbSchema items={[{ name: 'Services', url: '/services' }]} />

      {/* Header Banner - Section 1 */}
      <section className="pt-7 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-10 bg-[#741234] text-white shadow-md relative overflow-hidden">
        <div className="container-clinical max-w-3xl text-center space-y-2 sm:space-y-2.5 relative z-10">
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            <span className="h-[1.5px] w-5 sm:w-7 bg-white/40 rounded-full inline-block" />
            <span>OUR SERVICES</span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Dental Care
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-xl mx-auto font-normal">
            Gentle checkups, smile transformations, and same-day dental treatments tailored for your family in Mueller, Austin TX.
          </p>
        </div>
      </section>

      {/* Services Grid Section with Centered Cards, Tight Padding & Reduced Gap */}
      <section className="pt-6 pb-10 sm:pt-8 sm:pb-12 md:pt-10 md:pb-14 bg-slate-100/70 border-b border-slate-200/80">
        <div className="container-clinical">
          {/* Flexbox layout to center top 3 cards and bottom 2 cards in middle */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 max-w-5xl mx-auto">
            {serviceTabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-slate-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-14px)] max-w-[340px]"
              >
                <div className="space-y-3 text-center flex flex-col items-center">
                  {/* Top Image Container - Tight padding from card edges */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 shadow-inner">
                    <Image
                      src={tab.image}
                      alt={tab.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Centered Title & Description */}
                  <div className="space-y-1 px-1 text-center">
                    <h3 className="font-heading text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#741234] transition-colors leading-snug">
                      {tab.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                      {tab.description}
                    </p>
                  </div>
                </div>

                {/* Catchy Bottom CTA Button Bar with Grey Background & Magenta Hover */}
                <div className="mt-4 pt-2 border-t border-slate-100">
                  <div className="w-full border-2 border-slate-300 group-hover:border-[#741234] bg-slate-100 group-hover:bg-[#741234] text-slate-800 group-hover:text-white font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-300 shadow-xs">
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
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
                Not sure which dental treatment you need?
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
                Contact Dental Smiles today. Dr. Shetty and our friendly Austin care team will evaluate your oral health and guide you to the right treatment plan.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row pt-1">
                <Link href="/contact#request-appointment" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xs sm:text-sm font-semibold px-5 py-2.5">
                    <Calendar className="mr-2 h-4 w-4" /> Book Consultation
                  </Button>
                </Link>
                <Link href="tel:5124679955" className="w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    className="w-full sm:w-auto border border-primary-foreground/30 bg-white/10 text-primary-foreground hover:bg-white/20 text-xs sm:text-sm font-semibold px-5 py-2.5"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call Us
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
