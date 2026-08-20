import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Dental Services in Austin, TX | Family, Cosmetic & Restorative Dentistry',
  description:
    'Explore comprehensive dental services at Dental Smiles in Austin, TX. General dentistry, CEREC crowns, cosmetic whitening, implants, emergency & sedation care.',
  keywords: [
    'Austin dental services',
    'general dentistry Austin',
    'cosmetic dentistry Austin',
    'restorative dentistry Austin',
    'emergency dental Austin',
    'sedation dentistry Austin',
    'Dental Smiles services',
  ],
  alternates: {
    canonical: 'https://dental-smiles.vercel.app/services',
  },
  openGraph: {
    title: 'Dental Services in Austin, TX | Dental Smiles',
    description:
      'Explore comprehensive dental services at Dental Smiles in Austin, TX. Compassionate care for your entire family.',
    url: 'https://dental-smiles.vercel.app/services',
    type: 'website',
    images: [
      {
        url: '/assets/services/general-dentistry/General-Dentistry.jpg',
        width: 1200,
        height: 630,
        alt: 'Dental Smiles Services Austin',
      },
    ],
  },
};

type ServiceTab = {
  title: string;
  href: string;
  description: string;
  image: string;
  imageAlt: string;
};

const serviceTabs: ServiceTab[] = [
  {
    title: 'General Dentistry',
    href: '/services/general-dentistry',
    description:
      'Preventive and routine care designed to keep your smile healthy year-round.',
    image: '/assets/services/general-dentistry/General-Dentistry.jpg',
    imageAlt: 'General dentistry care at Dental Smiles Austin.',
  },
  {
    title: 'Cosmetic Dentistry',
    href: '/services/cosmetic-dentistry',
    description:
      'Customized smile enhancements including whitening and veneer options.',
    image: '/assets/services/Cosmetic-Dentistry/Cosmetic-Dentist.jpg',
    imageAlt: 'Cosmetic dentistry consultation at Dental Smiles Austin.',
  },
  {
    title: 'Restorative Dentistry',
    href: '/services/restorative-dentistry',
    description:
      'Solutions to repair missing, damaged, or infected teeth with long-term function in mind.',
    image: '/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png',
    imageAlt: 'Restorative dental procedures at Dental Smiles Austin.',
  },
  {
    title: 'Emergency Dentistry',
    href: '/services/emergency-dentistry',
    description:
      'Same-day emergency appointments for urgent dental pain and injuries.',
    image: '/assets/services/Emergency-Dentistry/emergency-dentistry.jpg',
    imageAlt: 'Emergency dentistry care at Dental Smiles Austin.',
  },
  {
    title: 'Dental Sedation',
    href: '/services/dental-sedation',
    description:
      'Relaxation options to help you feel calm and confident during any procedure.',
    image: '/assets/services/Dental-Sedation/sedation-dentistry.jpg',
    imageAlt: 'Dental sedation options at Dental Smiles Austin.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20">
      <BreadcrumbSchema items={[{ name: 'Services', url: '/services' }]} />

      {/* Header Banner */}
      <section className="py-10 lg:py-14 border-b border-primary/10 bg-gradient-to-br from-primary/5 via-white to-clinical-creme/40">
        <div className="container-clinical max-w-5xl text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/15">
            <Sparkles className="h-3.5 w-3.5" /> Full-Spectrum Oral Care
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight leading-tight">
            Comprehensive Dental Care for Every Smile in Austin
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From routine checkups to smile transformations and same-day restorations, we deliver gentle, modern dental treatments tailored to your comfort and health.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-12">
        <div className="container-clinical space-y-8">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Explore Our Dental Services
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Select a service below to view its dedicated page and details.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {serviceTabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-white p-2.5 sm:p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/35 w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)] flex flex-col justify-between"
              >
                <div className="space-y-3 flex-1 flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={tab.image}
                      alt={tab.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 420px, (min-width: 768px) 45vw, 100vw"
                      className="object-cover object-center scale-[1.02] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="px-1.5 pt-0.5 space-y-1.5 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight leading-tight text-foreground group-hover:text-primary transition-colors">
                        {tab.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base leading-relaxed text-foreground/85 font-normal">
                      {tab.description}
                    </p>
                  </div>
                </div>

                <div className="px-1.5 pt-3 mt-3 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary group-hover:underline inline-flex items-center gap-1">
                    View Service <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[10px] font-medium text-muted-foreground bg-clinical-creme px-1.5 py-0.5 rounded-md">
                    Explore care
                  </span>
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
