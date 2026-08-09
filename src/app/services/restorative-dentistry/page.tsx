'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  CalendarCheck,
  Phone,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Zap,
  ShieldCheck,
  Activity,
  Layers,
  Clock,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type TreatmentCategory = 'all' | 'same-day' | 'replacements' | 'surgery';

type TreatmentItem = {
  id: string;
  category: 'same-day' | 'replacements' | 'surgery';
  title: string;
  badge: string;
  image: string;
  imageAlt: string;
  summary: string;
  highlights: string[];
  details: {
    candidacy: string;
    procedure: string;
    benefits: string[];
  };
};

const TREATMENTS: TreatmentItem[] = [
  {
    id: 'cerec-crowns',
    category: 'same-day',
    title: 'CEREC Same-Day Crowns',
    badge: '⚡ 1-Visit Technology',
    image: '/assets/services/Restorative-Dentistry/cosmetic-2.jpg',
    imageAlt: 'CEREC same day crowns technology',
    summary: 'Custom ceramic dental crowns scanned, milled, and permanently placed in just one single appointment.',
    highlights: [
      'Completed in 1 visit (no follow-up appointments)',
      'High-strength, color-matched ceramic material',
      'No temporary crowns or messy impression trays',
    ],
    details: {
      candidacy: 'Ideal for severely decayed, cracked, broken, or root-canal treated teeth needing full structural restoration.',
      procedure: 'Dr. Shetty takes a 3D digital optical scan, designs your crown on-screen, mills it in our in-office machine, and permanently bonds it in under two hours.',
      benefits: [
        'Saves time with single-appointment completion',
        'Natural look and feel matching adjacent tooth enamel',
        'High durability engineered for long-term chewing strength',
      ],
    },
  },
  {
    id: 'composite-fillings',
    category: 'same-day',
    title: 'Tooth-Colored Composite Fillings',
    badge: '💎 Natural Aesthetic',
    image: '/assets/services/Restorative-Dentistry/cosmetic-3.jpg',
    imageAlt: 'Tooth colored composite dental fillings',
    summary: 'Durable, metal-free fillings color-matched to your natural teeth to repair cavities and minor fractures.',
    highlights: [
      'Seamless tooth-colored composite resin',
      'Direct bonding strengthens natural tooth',
      'Stops cavity progression immediately',
    ],
    details: {
      candidacy: 'Best for patients with small-to-medium cavities, minor chipped enamel, or failing amalgam fillings.',
      procedure: 'The decayed portion of the tooth is gently cleaned, filled with custom-shaded composite resin, and hardened with a curing light.',
      benefits: [
        'Invisible restoration matching your exact tooth shade',
        'Preserves maximum natural tooth structure',
        '100% free of mercury and metal alloys',
      ],
    },
  },
  {
    id: 'dental-implants',
    category: 'replacements',
    title: 'Permanent Dental Implants',
    badge: '🛡️ Lifetime Root Solution',
    image: '/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png',
    imageAlt: 'Dental implant procedure model',
    summary: 'Surgically placed titanium posts that act as artificial tooth roots for permanent single or multi-tooth replacement.',
    highlights: [
      'Prevents jawbone loss & facial collapse',
      'Functions like natural teeth with full bite strength',
      'Supports single crowns, bridges, or full dentures',
    ],
    details: {
      candidacy: 'Patients missing one or more teeth who have adequate jawbone density and healthy gums.',
      procedure: 'A bio-compatible titanium post is placed in the jawbone, fuses with the bone, and is topped with a custom ceramic crown.',
      benefits: [
        'Permanent solution that can last a lifetime with proper care',
        'Does not alter or damage neighboring healthy teeth',
        'Restores 100% natural chewing and speaking ability',
      ],
    },
  },
  {
    id: 'dental-bridges',
    category: 'replacements',
    title: 'Custom Dental Bridges',
    badge: '🔗 Fixed Restoration',
    image: '/assets/services/Restorative-Dentistry/cosmetic-2.jpg',
    imageAlt: 'Dental bridge illustration',
    summary: 'Fixed dental appliances anchored to neighboring teeth to replace one or more missing adjacent teeth.',
    highlights: [
      'Restores bite alignment & facial aesthetics',
      'Fixed securely in place (non-removable)',
      'Prevents remaining teeth from shifting out of line',
    ],
    details: {
      candidacy: 'Great for patients missing 1 to 3 consecutive teeth who prefer a non-surgical replacement alternative to implants.',
      procedure: 'Supporting teeth on either side of the gap are prepared for crowns, and a custom multi-unit bridge is bonded securely.',
      benefits: [
        'Quick turn-around for complete gap restoration',
        'Restores natural chewing balance and smile alignment',
        'High structural stability and aesthetic shade match',
      ],
    },
  },
  {
    id: 'dentures',
    category: 'replacements',
    title: 'Full & Partial Dentures',
    badge: '✨ Custom Removable Fit',
    image: '/assets/services/Restorative-Dentistry/cosmetic-3.jpg',
    imageAlt: 'Full and partial dentures',
    summary: 'Custom-crafted removable dental appliances designed to replace multiple missing teeth or complete arches.',
    highlights: [
      'Custom-contoured for lightweight comfort',
      'Full arch or partial tooth gap coverage',
      'Restores speech clarity and facial structure',
    ],
    details: {
      candidacy: 'Ideal for patients missing significant numbers of teeth in the upper or lower arch seeking an economical replacement.',
      procedure: 'Precise impressions and wax try-ins ensure custom gum contours and tooth shading prior to final fabrication.',
      benefits: [
        'Restores confident smiling and speaking ability',
        'Supports lip and cheek structures to prevent sunken appearance',
        'Easy to clean and maintain daily',
      ],
    },
  },
  {
    id: 'root-canals',
    category: 'surgery',
    title: 'Gentle Root Canal Therapy',
    badge: '🩺 In-House Pain Relief',
    image: '/assets/services/Restorative-Dentistry/teeth-whiting.jpg',
    imageAlt: 'Root canal therapy treatment setup',
    summary: 'Pain-relieving treatment to remove infected nerve tissue, disinfect internal canals, and save infected teeth.',
    highlights: [
      'Relieves acute toothache pain immediately',
      'Saves natural tooth from extraction',
      'Sealed & reinforced with a protective crown',
    ],
    details: {
      candidacy: 'Patients experiencing severe tooth pain, thermal sensitivity, lingering swelling, or deep pulp infection.',
      procedure: 'Under local anesthesia, the infected pulp is removed, canals are disinfected and sealed, and the tooth is capped for protection.',
      benefits: [
        'Eliminates infection and throbbing pain',
        'Preserves your natural tooth root and jaw socket',
        'High long-term success rate with proper crown placement',
      ],
    },
  },
  {
    id: 'extractions',
    category: 'surgery',
    title: 'Protective Dental Extractions',
    badge: '🩹 Safe & Gentle Removal',
    image: '/assets/services/Restorative-Dentistry/teeth-whiting.jpg',
    imageAlt: 'Dental extraction instruments',
    summary: 'Gentle simple or surgical tooth removal for teeth damaged beyond repair due to trauma, decay, or impaction.',
    highlights: [
      'Gentle technique with full local anesthesia',
      'Stops infection from spreading to jawbone',
      'Prepares site for immediate or future implants',
    ],
    details: {
      candidacy: 'Indicated when teeth are fractured below the gumline, severely decayed, overcrowded, or causing severe pain.',
      procedure: 'The area is fully numbed, the tooth is gently loosened and extracted, and detailed post-care guidance is provided.',
      benefits: [
        'Prevents painful dental emergencies and bone damage',
        'Creates space for necessary orthodontic or implant treatment',
        'Quick recovery with modern surgical protocols',
      ],
    },
  },
  {
    id: 'oral-surgery',
    category: 'surgery',
    title: 'Oral Surgery & Bone Grafting',
    badge: '🔬 Advanced Surgical Care',
    image: '/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png',
    imageAlt: 'Oral surgery and bone graft procedure model',
    summary: 'Specialized surgical care including bone density grafting for implants and third molar (wisdom teeth) removals.',
    highlights: [
      'In-house bone volume augmentation',
      'Impacted wisdom teeth extractions',
      'Surgical precision with local & sedation options',
    ],
    details: {
      candidacy: 'Patients needing jawbone rebuilding prior to implant surgery or experiencing problematic wisdom teeth.',
      procedure: 'Bone graft materials are placed to stimulate natural jaw growth, or third molars are surgically removed with care.',
      benefits: [
        'Establishes solid foundation for long-term implant success',
        'Prevents crowding, cysts, and damage from wisdom teeth',
        'Done conveniently in our familiar Austin office',
      ],
    },
  },
];

const FAQS = [
  {
    q: 'How long do CEREC same-day crowns take?',
    a: 'A typical CEREC same-day crown appointment takes about 90 to 120 minutes total. Dr. Shetty scans your tooth, designs the crown digitally, mills it in our in-office CAD/CAM machine, and permanently bonds it—all in a single visit.',
  },
  {
    q: 'Are dental implants better than bridges or dentures?',
    a: 'Dental implants are considered the gold standard for tooth replacement because they act as artificial roots, preserving jawbone density and functioning like natural teeth without altering adjacent healthy teeth. Bridges and dentures are also great alternatives depending on your budget and clinical needs.',
  },
  {
    q: 'Is root canal therapy painful?',
    a: 'With modern local anesthesia and gentle techniques, root canal therapy feels similar to receiving a standard dental filling. The procedure actually relieves the intense pain caused by an infected tooth pulp.',
  },
  {
    q: 'Will my insurance cover restorative dental treatments?',
    a: 'Most dental insurance plans provide coverage for restorative services such as fillings, crowns, root canals, and dentures. Our office team works directly with your insurance provider to maximize your benefits and provide clear upfront estimates.',
  },
];

export default function RestorativeDentistryPage() {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>('all');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredTreatments =
    activeCategory === 'all'
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20 text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-primary/10 bg-gradient-to-br from-primary/5 via-white to-clinical-creme/30">
        <style>{`
          @keyframes heroFadeUp {
            0% { opacity: 0; transform: translateY(28px) scale(0.97); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes heroZoomIn {
            0% { opacity: 0; transform: scale(0.94); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-hero-up { animation: heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
          .animate-hero-zoom { animation: heroZoomIn 0.95s cubic-bezier(0.16, 1, 0.3, 1) both; }
          .delay-100 { animation-delay: 0.12s; }
          .delay-200 { animation-delay: 0.24s; }
          .delay-300 { animation-delay: 0.36s; }
        `}</style>
        <div className="absolute top-0 right-0 -mt-12 -mr-12 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="container-clinical relative z-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center">
            <div className="space-y-4 text-center sm:text-left animate-hero-up delay-100">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading text-foreground leading-tight font-bold tracking-tight">
                Restore Your Smile's Strength, Function & Natural Beauty
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto sm:mx-0">
                From single-visit CEREC crowns and tooth-colored fillings to permanent implants, dentures, and oral surgery—get gentle, technology-driven restorative dental care in Central Austin.
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
            <div className="relative mx-auto w-full max-w-md lg:max-w-none animate-hero-zoom delay-200">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-primary/15 bg-white shadow-2xl">
                <div className="relative aspect-[4/3] lg:aspect-[16/11]">
                  <Image
                    src="/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png"
                    alt="Restorative dental care at Dental Smiles Austin"
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
              Comprehensive Restorative Dental Services
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore our full range of tooth-saving procedures, tooth replacements, and surgical options tailored to your oral health.
            </p>
          </div>

          {/* Treatments Bento Cards Grid - 3 cards in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            {filteredTreatments.map((item) => {
              const isExpanded = !!expandedCards[item.id];

              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 flex flex-col justify-between"
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



      {/* Patient Journey Timeline */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container-clinical space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Clock className="h-3.5 w-3.5" /> What to Expect
            </span>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Your 3-Step Restorative Care Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="relative rounded-2xl border border-primary/15 bg-white p-6 space-y-3 shadow-sm">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">Comprehensive Exam & 3D Scan</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Dr. Shetty evaluates your tooth structure with digital 3D scans to diagnose decay or damage accurately.
              </p>
            </div>

            <div className="relative rounded-2xl border border-primary/15 bg-white p-6 space-y-3 shadow-sm">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">Custom Treatment & Fabrication</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We craft your custom crown, filling, bridge, or implant plan with precision ceramic shading.
              </p>
            </div>

            <div className="relative rounded-2xl border border-primary/15 bg-white p-6 space-y-3 shadow-sm">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">Placement & Confident Smile</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your restoration is bonded, bite fit is verified, and you leave with full chewing strength and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-primary/10">
        <div className="container-clinical max-w-3xl space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <HelpCircle className="h-3.5 w-3.5" /> Common Questions
            </span>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="rounded-2xl border border-primary/10 bg-clinical-creme/30 px-6 py-2 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:no-underline text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 lg:py-20">
        <div className="container-clinical">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/15 bg-primary text-primary-foreground shadow-2xl p-10 lg:p-14">
            <div className="absolute -left-24 top-0 h-[140%] w-72 rotate-12 bg-white/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-6 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                <CalendarCheck className="h-3.5 w-3.5" /> Book Your Visit
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                Ready to Restore Your Smile in Austin, TX?
              </h2>
              <p className="text-base sm:text-lg opacity-90 leading-relaxed">
                Contact Dental Smiles today to schedule your consultation with Dr. Divya Shetty. Conveniently serving Mueller, Hyde Park, North Loop, and Central Austin.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row pt-2">
                <Link href="/contact#request-appointment" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-bold px-6 py-3 shadow-md text-sm">
                    Request Appointment
                  </Button>
                </Link>
                <Link href="tel:5124679955" className="w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto border border-white/30 bg-white/10 text-white hover:bg-white/20 font-bold px-6 py-3 text-sm"
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

