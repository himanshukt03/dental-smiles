'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CalendarCheck,
  Phone,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type GeneralTreatmentItem = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  summary: string;
  details: {
    candidacy: string;
    procedure: string;
  };
};

const GENERAL_TREATMENTS: GeneralTreatmentItem[] = [
  {
    id: 'athletic-mouthguards',
    title: 'Athletic Mouthguards',
    image: '/assets/services/general-dentistry/mouth-guards.jpg',
    imageAlt: 'Custom athletic mouthguards for sports protection',
    summary: 'Custom-fit athletic mouthguards protect teeth, lips, and jaw from impacts during sports activities without compromising breathing.',
    details: {
      candidacy: 'Essential for children, teens, and adults participating in contact sports or high-impact athletic activities.',
      procedure: 'We take precise digital impressions to fabricate a comfortable, high-impact absorbing appliance that stays securely in place.',
    },
  },
  {
    id: 'nightguards',
    title: 'Nightguards for Bruxism',
    image: '/assets/services/general-dentistry/night-guards.jpg',
    imageAlt: 'Custom nightguards for teeth grinding relief',
    summary: 'Custom overnight oral appliances designed to prevent teeth grinding, clenching, and relieve chronic morning jaw soreness.',
    details: {
      candidacy: 'Ideal for patients with worn enamel, morning headaches, or jaw stiffness caused by involuntary nighttime grinding.',
      procedure: 'Custom-milled from durable, smooth medical-grade acrylic to cushion your bite and protect teeth from structural damage while you sleep.',
    },
  },
  {
    id: 'fluoride-treatments',
    title: 'Fluoride Treatments',
    image: '/assets/services/general-dentistry/fluoride.webp',
    imageAlt: 'Preventive fluoride varnish application',
    summary: 'Concentrated mineral varnish application that strengthens tooth enamel and dramatically increases resistance to cavities.',
    details: {
      candidacy: 'Recommended for children, teenagers, and adults prone to tooth decay or enamel demineralization.',
      procedure: 'Applied quickly and painlessly during your routine cleaning, delivering essential minerals directly to protective enamel surfaces.',
    },
  },
  {
    id: 'dental-sealants',
    title: 'Dental Sealants',
    image: '/assets/services/general-dentistry/dental-sealants.jpeg',
    imageAlt: 'Protective dental sealant application on molars',
    summary: 'Ultra-thin protective resin coating applied to the deep chewing grooves of back molars to seal out cavity-causing bacteria.',
    details: {
      candidacy: 'Excellent preventive protection for growing children, teens, and cavity-prone adults with deep molar fissures.',
      procedure: 'Painted directly onto the chewing surface of molars and hardened with a curing light in just minutes with zero drilling.',
    },
  },
  {
    id: 'oral-cancer-screenings',
    title: 'Oral Cancer Screenings',
    image: '/assets/services/general-dentistry/Oral-Cancer-Screening.webp',
    imageAlt: 'Routine oral cancer screening examination',
    summary: 'Comprehensive routine examinations to detect early, pre-cancerous soft tissue changes when treatment is most effective.',
    details: {
      candidacy: 'Included as an essential standard component of every biannual dental cleaning and preventive exam.',
      procedure: 'Dr. Shetty performs a thorough visual and tactile check of the gums, tongue, cheeks, and throat using advanced diagnostic tools.',
    },
  },
  {
    id: 'laser-gum-treatment',
    title: 'Laser Gum Therapy',
    image: '/assets/services/general-dentistry/General-Dentistry.jpg',
    imageAlt: 'Advanced laser periodontal treatment',
    summary: 'Minimally invasive periodontal laser treatment to target infection, eliminate harmful bacteria, and promote healthy gum healing.',
    details: {
      candidacy: 'Ideal for treating gingivitis, periodontitis, or inflamed gum pockets with rapid recovery and zero scalpels.',
      procedure: 'A gentle dental laser removes diseased tissue and sterilizes periodontal pockets while preserving healthy surrounding tissue.',
    },
  },
  {
    id: 'tmj-tmd-therapy',
    title: 'TMJ / TMD Therapy',
    image: '/assets/services/general-dentistry/TMJ-TMDwebp.webp',
    imageAlt: 'Dentist reviewing TMJ therapy options',
    summary: 'Personalized bite balancing, custom night splints, and joint therapy to alleviate chronic jaw popping, stiffness, and headaches.',
    details: {
      candidacy: 'For patients suffering from temporomandibular joint dysfunction, clicking, locking jaws, or facial muscle tension.',
      procedure: 'Includes comprehensive bite analysis, custom orthotic splints, and guided joint therapy to restore smooth, pain-free jaw motion.',
    },
  },
  {
    id: 'halitosis-treatment',
    title: 'Halitosis Treatment',
    image: '/assets/services/general-dentistry/Halitosis-Treatment.jpg',
    imageAlt: 'Halitosis diagnosis and breath care treatment',
    summary: 'Targeted diagnostics and specialized therapeutic protocols to identify and eliminate the underlying causes of chronic bad breath.',
    details: {
      candidacy: 'Designed for individuals experiencing persistent bad breath that does not resolve with standard brushing and mouthwashes.',
      procedure: 'We identify bacterial buildup, dry mouth factors, or deep gum issues, prescribing targeted antibacterial rinses and hygiene steps.',
    },
  },
];

const FAQS = [
  {
    q: 'How often should I visit the dentist for a routine cleaning and exam?',
    a: 'We recommend scheduling a comprehensive cleaning and preventive exam every six months. Regular visits allow Dr. Shetty and our hygienists to remove hardened tartar, monitor enamel health, and detect small issues before they require major treatment.',
  },
  {
    q: 'What is the difference between an athletic mouthguard and a nightguard?',
    a: 'Athletic mouthguards are made of thicker, shock-absorbing materials specifically designed to protect teeth and jaws against high-impact sports collisions. Nightguards are custom-milled from durable, smooth acrylic to prevent teeth grinding (bruxism) and relieve jaw joint pressure during sleep.',
  },
  {
    q: 'Are dental sealants only for children?',
    a: 'While sealants are most commonly placed on children and teens as their permanent molars emerge, adults with deep, hard-to-clean molar grooves can also benefit significantly from the cavity-preventing shield of sealants.',
  },
  {
    q: 'Does laser gum treatment hurt?',
    a: 'Laser gum treatment is gentle and minimally invasive. The laser sterilizes and seals nerve endings as it works, resulting in minimal discomfort, less bleeding, and much faster healing compared to traditional surgical techniques.',
  },
];

export default function GeneralDentistryPage() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20 text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-primary/10 bg-gradient-to-br from-primary/5 via-white to-clinical-creme/30">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="container-clinical relative z-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center">
            <div className="space-y-4 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading text-foreground leading-tight font-bold tracking-tight">
                Comprehensive Preventive & General Dentistry in Austin, TX
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto sm:mx-0">
                From athletic mouthguards and custom nightguards to fluoride varnishes, sealants, and laser gum therapy—our Austin team provides gentle, complete oral care for your entire family.
              </p>

              {/* CTAs */}
              <div className="flex flex-col gap-3 sm:flex-row pt-2 justify-center sm:justify-start">
                <Link href="/contact#request-appointment" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto px-6 py-3 font-semibold text-sm shadow-md">
                    <CalendarCheck className="mr-2 h-4 w-4" /> Request Appointment
                  </Button>
                </Link>
                <Link href="tel:5124679955" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-primary/20 bg-white/80 px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground text-sm shadow-sm"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call (512) 467-9955
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-primary/15 bg-white shadow-2xl">
                <div className="relative aspect-[4/3] lg:aspect-[16/11]">
                  <Image
                    src="/assets/services/general-dentistry/General-Dentistry.jpg"
                    alt="General dentistry care at Dental Smiles Austin"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover object-top scale-[1.05]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-10 lg:py-14">
        <div className="container-clinical space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
              General & Preventive Dental Services
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore our full range of custom appliances, preventive therapies, and specialized wellness treatments tailored to protect your smile.
            </p>
          </div>

          {/* Treatments Bento Cards Grid - Centered rows */}
          <div className="flex flex-wrap justify-center gap-5 pt-2">
            {GENERAL_TREATMENTS.map((item) => {
              const isExpanded = !!expandedCards[item.id];

              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 flex flex-col justify-between w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                >
                  <div className="space-y-3">
                    {/* Card Header Media */}
                    <div className="relative aspect-[16/9] max-h-44 sm:max-h-48 overflow-hidden rounded-xl border border-primary/10 bg-slate-50">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 380px, 100vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Title & Summary with Know More expand */}
                    <div className="space-y-1.5">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors tracking-tight">
                        {item.title}
                      </h3>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        <p className={cn(!isExpanded && 'line-clamp-2')}>
                          {isExpanded
                            ? `${item.summary} ${item.details.candidacy} ${item.details.procedure}`
                            : item.summary}
                        </p>
                        <button
                          type="button"
                          onClick={() => toggleExpand(item.id)}
                          className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-1.5 focus:outline-none"
                        >
                          {isExpanded ? 'Know Less' : 'Know More'}
                          {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-3 mt-3 border-t border-primary/10 flex items-center justify-end">
                    <Link href="/contact#request-appointment">
                      <Button size="sm" variant="ghost" className="text-xs font-semibold text-primary hover:bg-primary/10 px-2.5 h-8">
                        Book <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-primary/10">
        <div className="container-clinical max-w-3xl space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
              <HelpCircle className="h-3.5 w-3.5" /> Common Questions
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
              General Dentistry FAQs
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="rounded-2xl border border-primary/10 bg-clinical-creme/30 px-5 py-1.5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:no-underline text-sm sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="container-clinical">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-primary text-primary-foreground shadow-lg">
            <div className="absolute -left-24 top-0 h-[140%] w-72 rotate-12 bg-white/10 blur-3xl pointer-events-none" />
            <div className="relative grid gap-4 p-6 sm:p-8 lg:p-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight">Ready to schedule your preventive checkup?</h2>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">Contact Dental Smiles today to schedule your general dentistry visit and maintain your optimal oral health in Austin, TX.</p>
              <div className="flex flex-col gap-3 sm:flex-row pt-1">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xs sm:text-sm font-semibold px-5 py-2.5">
                    Contact us
                  </Button>
                </Link>
                <Link href="tel:5124679955" className="w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    className="w-full sm:w-auto border border-primary-foreground/30 bg-white/10 text-primary-foreground hover:bg-white/20 text-xs sm:text-sm font-semibold px-5 py-2.5"
                  >
                    Call 512.467.9955
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
