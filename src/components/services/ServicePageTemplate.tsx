'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ServiceSection = {
  title: string;
  body: string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  cta?: {
    label: string;
    href: string;
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
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20">
      <section className="section-padding pt-10 pb-4">
        <div className="container-clinical">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-gradient-to-br from-primary/5 via-white to-white shadow-xl">
            <div className="absolute -top-16 right-4 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid grid-rows-[auto_auto_auto] gap-6 p-6 sm:p-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:grid-rows-[auto_auto] md:gap-10 lg:p-10">
              <div className="space-y-3 md:col-start-1 md:row-start-1">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {badge}
                </span>
                <h1 className="text-[1.05rem] font-heading text-foreground sm:text-3xl lg:text-4xl leading-tight sm:text-left text-center">
                  {title}
                </h1>
              </div>

              <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white/70 shadow-lg sm:max-w-md md:mx-0 md:col-start-2 md:row-start-1 md:row-end-3 md:max-w-lg">
                <div className="relative aspect-[16/9] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/11]">
                  <Image
                    src={heroImage}
                    alt={heroImageAlt}
                    fill
                    sizes="(min-width: 1024px) 420px, (min-width: 768px) 45vw, 75vw"
                    className={cn('object-cover object-center scale-[1.02]', heroImageClassName)}
                    priority
                  />
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-primary shadow">
                  Trusted Austin dentistry
                </div>
              </div>

              <div className="space-y-5 md:col-start-1 md:row-start-2">
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="/contact#request-appointment" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto px-4 py-3 text-xs font-semibold sm:text-sm">
                      <CalendarCheck className="mr-2 h-4 w-4" /> Contact Us
                    </Button>
                  </Link>
                  <Link href="tel:5124679955" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-primary/20 bg-white/80 px-4 py-3 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground sm:text-sm"
                    >
                      <Phone className="mr-2 h-4 w-4" /> 512.467.9955
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-16">
        <div className="container-clinical space-y-10">
          {sections.map((section, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={section.title}
                id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className={cn(
                  'relative overflow-hidden rounded-[2.5rem] border border-primary/10 shadow-lg',
                  'bg-gradient-to-br from-[#fff9f0] via-white to-[#fdf2f8]'
                )}
              >
                <div
                  className={cn(
                    'relative flex flex-col gap-10 p-8 md:p-12 lg:p-16',
                    'md:flex-row md:items-center',
                    reverse && 'md:flex-row-reverse'
                  )}
                >
                  <div className="space-y-4 md:w-1/2 lg:w-[55%]">
                    <h2 className="text-[1.8rem] md:text-4xl font-heading text-foreground leading-snug">
                      {section.title}
                    </h2>
                    <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="group flex items-center gap-3 rounded-bento bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm"
                          >
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <ArrowRight className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-medium text-foreground/90">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.cta && (
                      <Link href={section.cta.href} className="inline-flex">
                        <Button className="mt-2">{section.cta.label}</Button>
                      </Link>
                    )}
                  </div>

                  <div className="md:w-1/2 lg:w-[45%]">
                    <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-white/40 bg-white/40 shadow-inner">
                      {section.image ? (
                        <Image
                          src={section.image}
                          alt={section.imageAlt ?? section.title}
                          fill
                          sizes="(min-width: 1024px) 540px, 100vw"
                          className={cn('object-cover object-center scale-[1.02]', sectionImageClassName)}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-clinical-creme to-primary/5 p-8 text-center">
                          <p className="text-lg font-heading text-primary">{section.title}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-padding">
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
