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
  Award,
  HelpCircle,
  Shield,
  HeartPulse,
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
  const [expandedTreatmentId, setExpandedTreatmentId] = useState<string | null>(null);

  const filteredTreatments =
    activeCategory === 'all'
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === activeCategory);

  const toggleDetails = (id: string) => {
    setExpandedTreatmentId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20 text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-primary/10 bg-gradient-to-br from-primary/5 via-white to-clinical-creme/30">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="container-clinical relative z-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center">
            <div className="space-y-6 text-center sm:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/15 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" /> Restorative Dentistry in Austin, TX
              </span>
              <h1 className="text-3xl font-heading text-foreground sm:text-4xl lg:text-5xl leading-tight font-bold">
                Restore Your Smile's Strength, Function & Natural Beauty
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg leading-relaxed max-w-2xl mx-auto sm:mx-0">
                From single-visit CEREC crowns and tooth-colored fillings to permanent implants, dentures, and oral surgery—get gentle, technology-driven restorative dental care in Central Austin.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 rounded-xl bg-white/90 p-3 border border-primary/10 shadow-sm backdrop-blur-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Zap className="h-4 w-4" />
                  </span>
                  <div className="text-left">
                    <p className="text-xs font-bold text-foreground">1-Visit CEREC</p>
                    <p className="text-[11px] text-muted-foreground">Same-day crowns</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl bg-white/90 p-3 border border-primary/10 shadow-sm backdrop-blur-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div className="text-left">
                    <p className="text-xs font-bold text-foreground">Dental Implants</p>
                    <p className="text-[11px] text-muted-foreground">Permanent roots</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl bg-white/90 p-3 border border-primary/10 shadow-sm backdrop-blur-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Activity className="h-4 w-4" />
                  </span>
                  <div className="text-left">
                    <p className="text-xs font-bold text-foreground">Root Canals & Surgery</p>
                    <p className="text-[11px] text-muted-foreground">In-house pain relief</p>
                  </div>
                </div>
              </div>

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
                    src="/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png"
                    alt="Restorative dental care at Dental Smiles Austin"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover object-top scale-[1.05]"
                    priority
                  />
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-primary shadow border border-primary/10">
                  ✨ Central Austin Dental Care
                </div>
                <div className="absolute bottom-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-lg border border-primary/10 max-w-[220px]">
                  <p className="text-xs font-bold text-foreground">Dr. Divya Shetty</p>
                  <p className="text-[11px] text-muted-foreground leading-snug">Serving Mueller, Hyde Park & North Loop Austin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-16 lg:py-20">
        <div className="container-clinical space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Layers className="h-3.5 w-3.5" /> Our Treatments
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Comprehensive Restorative Dental Services
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Explore our full range of tooth-saving procedures, tooth replacements, and surgical options tailored to your oral health.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              <button
                onClick={() => setActiveCategory('all')}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 border',
                  activeCategory === 'all'
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-white/80 text-foreground border-primary/10 hover:border-primary/30 hover:bg-white'
                )}
              >
                <Sparkles className="h-3.5 w-3.5" /> All Services ({TREATMENTS.length})
              </button>

              <button
                onClick={() => setActiveCategory('same-day')}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 border',
                  activeCategory === 'same-day'
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-white/80 text-foreground border-primary/10 hover:border-primary/30 hover:bg-white'
                )}
              >
                <Zap className="h-3.5 w-3.5" /> Same-Day & Fillings (2)
              </button>

              <button
                onClick={() => setActiveCategory('replacements')}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 border',
                  activeCategory === 'replacements'
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-white/80 text-foreground border-primary/10 hover:border-primary/30 hover:bg-white'
                )}
              >
                <ShieldCheck className="h-3.5 w-3.5" /> Implants & Bridges (3)
              </button>

              <button
                onClick={() => setActiveCategory('surgery')}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 border',
                  activeCategory === 'surgery'
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-white/80 text-foreground border-primary/10 hover:border-primary/30 hover:bg-white'
                )}
              >
                <Activity className="h-3.5 w-3.5" /> Root Canals & Surgery (3)
              </button>
            </div>
          </div>

          {/* Treatments Bento Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4">
            {filteredTreatments.map((item) => {
              const isExpanded = expandedTreatmentId === item.id;

              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="group relative overflow-hidden rounded-[2rem] border border-primary/15 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Card Header Media & Badge */}
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-primary/10 bg-slate-50">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 500px, 100vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute left-3 top-3">
                        <span className="rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-primary shadow border border-primary/10">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Title & Summary */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    {/* Highlights Bullet List */}
                    <ul className="space-y-2 pt-1 border-t border-primary/10">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expandable Details Panel */}
                    {isExpanded && (
                      <div className="mt-4 space-y-4 border-l-2 border-primary/30 pl-4 py-2 text-xs sm:text-sm animate-in fade-in-50 duration-300">
                        <div className="space-y-1">
                          <h4 className="font-bold text-foreground flex items-center gap-1.5">
                            <Info className="h-3.5 w-3.5 text-primary shrink-0" /> Candidate Evaluation
                          </h4>
                          <p className="text-muted-foreground leading-relaxed pl-5">
                            {item.details.candidacy}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <h4 className="font-bold text-foreground flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-primary shrink-0" /> Clinical Procedure
                          </h4>
                          <p className="text-muted-foreground leading-relaxed pl-5">
                            {item.details.procedure}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <h4 className="font-bold text-foreground flex items-center gap-1.5">
                            <Award className="h-3.5 w-3.5 text-primary shrink-0" /> Primary Benefits
                          </h4>
                          <ul className="space-y-1 pl-5 text-muted-foreground">
                            {item.details.benefits.map((b, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-6 mt-4 border-t border-primary/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => toggleDetails(item.id)}
                      className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Clinical Details'}</span>
                      {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>

                    <Link href="/contact#request-appointment">
                      <Button size="sm" variant="ghost" className="text-xs font-semibold text-primary hover:bg-primary/10">
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

      {/* Why Choose Restorative Care at Dental Smiles */}
      <section className="py-16 bg-white border-y border-primary/10">
        <div className="container-clinical space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Shield className="h-3.5 w-3.5" /> The Dental Smiles Advantage
            </span>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Why Patients Choose Us for Restorative Care
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We combine state-of-the-art dental technology with gentle, patient-centered care for long-lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-primary/10 bg-clinical-creme/40 p-6 space-y-3 shadow-sm hover:border-primary/20 transition-all">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">Single-Visit Tech</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                In-house CEREC 3D scanning and CAD/CAM milling deliver custom ceramic crowns in one visit.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-clinical-creme/40 p-6 space-y-3 shadow-sm hover:border-primary/20 transition-all">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">Natural Aesthetics</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                100% metal-free ceramic and composite resins precisely shaded to blend with surrounding teeth.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-clinical-creme/40 p-6 space-y-3 shadow-sm hover:border-primary/20 transition-all">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                <HeartPulse className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">Gentle & Pain-Free</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Local anesthesia and comforting techniques ensure every procedure is completely stress-free.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-clinical-creme/40 p-6 space-y-3 shadow-sm hover:border-primary/20 transition-all">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">In-House Surgery</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                From simple fillings to bone grafting and wisdom teeth removals, get complete care under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey Timeline */}
      <section className="py-16 lg:py-20">
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
      <section className="py-16 bg-white border-t border-primary/10">
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

