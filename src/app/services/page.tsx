 'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';

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
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-4 w-4" /> Services
            </span>
            <h1 className="font-heading text-3xl text-foreground md:text-4xl">
              Explore Our Dental Services
            </h1>
            <p className="text-muted-foreground">
              Select a service below to view its dedicated page and details.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceTabs.map((tab) => (
              <article
                key={tab.href}
                role="link"
                tabIndex={0}
                aria-label={`Open ${tab.title}`}
                className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-primary/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/35"
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

                <div className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-heading text-2xl leading-tight text-foreground">
                      {tab.title}
                    </h2>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
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
    </div>
  );
}
