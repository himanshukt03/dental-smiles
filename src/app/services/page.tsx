 'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    imageAlt: 'General dentistry care at Dental Smiles.',
  },
  {
    title: 'Cosmetic Dentistry',
    href: '/services/cosmetic-dentistry',
    description:
      'Customized smile enhancements including whitening and veneer options.',
    image: '/assets/services/Cosmetic-Dentistry/Cosmetic-Dentist.jpg',
    imageAlt: 'Cosmetic dentistry consultation.',
  },
  {
    title: 'Restorative Dentistry',
    href: '/services/restorative-dentistry',
    description:
      'Solutions to repair missing, damaged, or infected teeth with long-term function in mind.',
    image: '/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png',
    imageAlt: 'Restorative dental procedures at Dental Smiles.',
  },
  {
    title: 'Emergency Dentistry',
    href: '/services/emergency-dentistry',
    description:
      'Same-day emergency appointments for urgent dental pain and injuries.',
    image: '/assets/services/Emergency-Dentistry/emergency-dentistry.jpg',
    imageAlt: 'Emergency dentistry care.',
  },
  {
    title: 'Dental Sedation',
    href: '/services/dental-sedation',
    description:
      'Comfort-focused sedation options to help anxious patients feel at ease.',
    image: '/assets/services/Dental-Sedation/sedation-dentistry.jpg',
    imageAlt: 'Sedation dentistry visit.',
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20">
      <section className="section-padding pt-12">
        <div className="container-clinical space-y-8">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <h1 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Explore Our Dental Services
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Select a service below to view its dedicated page and details.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {serviceTabs.map((tab) => (
              <article
                key={tab.href}
                role="link"
                tabIndex={0}
                aria-label={`Open ${tab.title}`}
                className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-primary/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/35 w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
                onClick={() => router.push(tab.href)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    router.push(tab.href);
                  }
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={tab.image}
                    alt={tab.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 420px, (min-width: 768px) 45vw, 100vw"
                    className="object-cover object-center scale-[1.02] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>

                <div className="space-y-3 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight leading-tight text-foreground group-hover:text-primary transition-colors">
                      {tab.title}
                    </h2>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-foreground/85 font-normal">
                    {tab.description}
                  </p>
                </div>
                <Link href={tab.href} className="sr-only">
                  {tab.title}
                </Link>
              </article>
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
