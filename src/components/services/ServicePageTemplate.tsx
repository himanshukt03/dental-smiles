'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, Phone, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type ExpandableDetail = {
  title: string;
  body?: string | string[];
  bullets?: string[];
};

export type SubItem = {
  id?: string;
  title: string;
  badge?: string;
  body: string | string[];
  bullets?: string[];
  cta?: {
    label: string;
    href: string;
  };
  expandable?: {
    triggerLabel: string;
    closeLabel?: string;
    details: ExpandableDetail[];
  };
};

export type ServiceSection = {
  title: string;
  subtitle?: string;
  body: string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  cta?: {
    label: string;
    href: string;
  };
  subItems?: SubItem[];
  expandable?: {
    triggerLabel: string;
    closeLabel?: string;
    details: ExpandableDetail[];
  };
};

type ServicePageTemplateProps = {
  badge: string;
  title: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageClassName?: string;
  intro: string[];
  sections: ServiceSection[];
  sectionImageClassName?: string;
  bottomTitle: string;
  bottomBody: string;
};

function ExpandableCardContent({
  expandable,
}: {
  expandable: { triggerLabel: string; closeLabel?: string; details: ExpandableDetail[] };
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-3">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="px-0 text-primary hover:bg-transparent hover:text-primary/80 font-semibold text-sm transition-all duration-200 flex items-center gap-2 underline-offset-4 hover:underline"
      >
        <Sparkles className="h-4 w-4 text-primary shrink-0" />
        <span>{isOpen ? expandable.closeLabel || 'Hide Details' : expandable.triggerLabel}</span>
        {isOpen ? <ChevronUp className="h-4 w-4 shrink-0 transition-transform" /> : <ChevronDown className="h-4 w-4 shrink-0 transition-transform" />}
      </Button>

      {isOpen && (
        <div className="mt-4 space-y-5 border-l-2 border-primary/30 pl-5 py-2 animate-in fade-in-50 duration-300">
          {expandable.details.map((detail, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-base font-heading font-semibold text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                {detail.title}
              </h4>
              {detail.body && (
                <div className="space-y-1.5 text-sm text-muted-foreground leading-relaxed pl-6">
                  {Array.isArray(detail.body) ? (
                    detail.body.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <p>{detail.body}</p>
                  )}
                </div>
              )}
              {detail.bullets && detail.bullets.length > 0 && (
                <ul className="grid gap-2 pl-6 pt-1 text-sm text-foreground/90">
                  {detail.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ServicePageTemplate({
  badge,
  title,
  heroImage,
  heroImageAlt,
  heroImageClassName,
  intro,
  sections,
  sectionImageClassName,
  bottomTitle,
  bottomBody,
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/10">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 via-white to-transparent border-b border-primary/10">
        <div className="container-clinical">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-foreground leading-tight">
                {title}
              </h1>
              <div className="space-y-3 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link href="/contact#request-appointment" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto px-6 py-3 font-semibold">
                    <CalendarCheck className="mr-2 h-4 w-4" /> Contact Us
                  </Button>
                </Link>
                <Link href="tel:5124679955" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-primary/20 bg-white/80 px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Phone className="mr-2 h-4 w-4" /> 512.467.9955
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full overflow-hidden rounded-[2rem] border border-primary/10 shadow-xl bg-white">
              <div className="relative aspect-[4/3] lg:aspect-[16/11]">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className={cn('object-cover object-center', heroImageClassName)}
                  priority
                />
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm border border-primary/10">
                Trusted Austin dentistry
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <div className="space-y-16 lg:space-y-24 py-12 lg:py-16">
        {sections.map((section, index) => {
          const reverse = index % 2 === 1;

          return (
            <section
              key={section.title}
              id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="relative border-b border-primary/10 last:border-0 pb-16 lg:pb-24"
            >
              <div className="container-clinical">
                <div
                  className={cn(
                    'flex flex-col gap-10 md:gap-14 lg:gap-16',
                    'md:flex-row md:items-start',
                    reverse && 'md:flex-row-reverse'
                  )}
                >
                  <div className="space-y-5 md:w-1/2 lg:w-[55%]">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground leading-tight">
                      {section.title}
                    </h2>
                    <div className="space-y-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="grid gap-3 sm:grid-cols-2 pt-2">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="group flex items-center gap-3 rounded-xl bg-white/80 p-3 shadow-sm border border-primary/10"
                          >
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-sm font-medium text-foreground/90">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.subItems && section.subItems.length > 0 && (
                      <div className="mt-8 space-y-8 divide-y divide-primary/15 pt-2">
                        {section.subItems.map((subItem, sIdx) => (
                          <div
                            key={subItem.title}
                            id={subItem.id || subItem.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                            className={cn('space-y-3', sIdx > 0 && 'pt-8')}
                          >
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <h3 className="text-xl sm:text-2xl font-heading text-foreground font-semibold flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                                {subItem.title}
                              </h3>
                              {subItem.badge && (
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                                  {subItem.badge}
                                </span>
                              )}
                            </div>

                            <div className="space-y-2 text-base text-muted-foreground leading-relaxed pl-4">
                              {Array.isArray(subItem.body) ? (
                                subItem.body.map((p, i) => <p key={i}>{p}</p>)
                              ) : (
                                <p>{subItem.body}</p>
                              )}
                            </div>

                            {subItem.bullets && subItem.bullets.length > 0 && (
                              <ul className="mt-3 grid gap-2 sm:grid-cols-2 pl-4">
                                {subItem.bullets.map((bullet) => (
                                  <li key={bullet} className="flex items-center gap-2 text-sm text-foreground/90">
                                    <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {subItem.cta && (
                              <div className="mt-3 pl-4">
                                <Link href={subItem.cta.href} className="inline-flex">
                                  <Button variant="outline" size="sm">{subItem.cta.label}</Button>
                                </Link>
                              </div>
                            )}

                            {subItem.expandable && (
                              <div className="pl-4">
                                <ExpandableCardContent expandable={subItem.expandable} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.cta && (
                      <Link href={section.cta.href} className="inline-flex pt-2">
                        <Button className="mt-2">{section.cta.label}</Button>
                      </Link>
                    )}

                    {section.expandable && (
                      <ExpandableCardContent expandable={section.expandable} />
                    )}
                  </div>

                  <div className="md:w-1/2 lg:w-[45%] md:sticky md:top-24">
                    <div className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-xl">
                      {section.image ? (
                        <Image
                          src={section.image}
                          alt={section.imageAlt ?? section.title}
                          fill
                          sizes="(min-width: 1024px) 540px, 100vw"
                          className={cn('object-cover object-center', sectionImageClassName)}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-clinical-creme to-primary/5 p-8 text-center">
                          <p className="text-lg font-heading text-primary">{section.title}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <section className="section-padding py-12 lg:py-16">
        <div className="container-clinical">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-primary text-primary-foreground shadow-xl">
            <div className="absolute -left-24 top-0 h-[140%] w-72 rotate-12 bg-white/10 blur-3xl" />
            <div className="relative grid gap-8 p-10 md:p-14">
              <h2 className="text-3xl md:text-4xl font-heading">{bottomTitle}</h2>
              <p className="text-lg opacity-90 max-w-3xl">{bottomBody}</p>
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


