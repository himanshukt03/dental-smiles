'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Phone,
  Star,
  Award,
  Users,
  Clock,
  MapPin,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/dental-office-hero.webp';
import drDivyaImage from '@/assets/team/dr-divya-shetty.webp';

type InsuranceCompany = {
  name: string;
  logo?: string;
};

type Testimonial = {
  name: string;
  review: string;
  rating: number;
  link: string;
};

import type { ReactElement } from 'react';

type Feature = {
  icon: ReactElement;
  title: string;
  description: string;
};

type Service = {
  name: string;
  description: string;
};

const insuranceCompanies: InsuranceCompany[] = [
  { name: 'Aetna', logo: '/assets/logos/aetna.svg' },
  { name: 'Delta Dental', logo: '/assets/logos/delta-dental.svg' },
  { name: 'MetLife', logo: '/assets/logos/metlife.svg' },
  { name: 'Principal', logo: '/assets/logos/principal.svg' },
  { name: 'Sun Life', logo: '/assets/logos/sunlife.png' },
  { name: 'Blue Cross Blue Shield', logo: '/assets/logos/blue-cross.svg' },
  { name: 'Cigna', logo: '/assets/logos/cigna.svg' },
  // { name: 'Connection Dental', logo: '/assets/logos/Connection-Dental.jpg' },
  // { name: 'Guardian' },
  // { name: 'United Healthcare' },
];

const testimonials: Testimonial[] = [
  {
    name: 'Bob Rubel',
    review:
      "Wonderful dental office. Great dentist and superb staff. Been going there for years. I'm an 80-year-old male. Highly recommend. I have my teeth cleaned quarterly because I have delicate dentures. Outstanding dental policy, also. Extremely pleased.",
    rating: 5,
    link: 'https://maps.app.goo.gl/1C47AjJTLLSWnNLx6',
  },
  {
    name: 'Gabriel Fine',
    review:
      'Very kind staff and a well-run office. I always felt like they had my best interests in mind, never money, and the team are super nice! Would definitely recommend for reliable, transparent, and friendly dental care',
    rating: 5,
    link: 'https://maps.app.goo.gl/sj6mn4PdJ7Kiz3X38',
  },
  {
    name: 'Felice Trirogoff',
    review:
      "I will always recommend Dr. Shetty and her team as a dentist. All of them truly prioritize their patients comfort and dental care. Dr. Shetty takes the time to explain your diagnosis and plan next steps if it’s needed. If you’re looking for a dentist that listens and has your best interest in mind, visit Dental Smiles.",
    rating: 5,
    link: 'https://maps.app.goo.gl/5R13vBhTp3uJ4hAC6',
  },
  {
    name: 'Luke Hebert',
    review:
      "My wife & have been using Dental Smiles for a while now after having some pretty 'meh' dentist experiences elsewhere. Dental Smiles is the best. The dentist is calm, knowledgeable, efficient, and doesn't try to push unnecessary dental procedures like aesthetics-only invisiline. Their hygienists have all been super friendly & competent. Hiiiighly recommend Dental Smiles",
    rating: 5,
    link: 'https://maps.app.goo.gl/FhfXBjtVZ5BWnzm18',
  },
  {
    name: 'Abhra Biswas',
    review:
      'Great office, was able to get great service quickly, they were thorough and offered helpful tips to further optimize flossing. Thanks!',
    rating: 5,
    link: 'https://maps.app.goo.gl/nkBFHXaYvjsWzuXp6',
  },
  {
    name: 'Dan Matthews',
    review:
      "I've been very impressed all around with Dental Smiles. Dr. Okulist has a great chair-side manner and is very knowledgeable and friendly. The staff is absolutely incredible: helpful, cheerful and were very patient while I worked out some insurance shenanigans. I've already recommended them to my friends. Thanks y'all!",
    rating: 5,
    link: 'https://maps.app.goo.gl/LhD1y4Wx8VoY2HwB8',
  },
];

const testimonialLoops = ['first', 'second'] as const;

const TESTIMONIAL_PREVIEW_LENGTH = 170;

const truncateReview = (text: string) =>
  text.length > TESTIMONIAL_PREVIEW_LENGTH
    ? `${text.slice(0, TESTIMONIAL_PREVIEW_LENGTH).trimEnd()}…`
    : text;

const features: Feature[] = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Expert Care',
    description: '20+ years of experience in comprehensive dental care',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Modern Technology',
    description: 'Latest equipment for comfortable, precise treatments',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Family Friendly',
    description: 'Gentle care for patients of all ages',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Flexible Hours',
    description: 'Convenient scheduling to fit your busy lifestyle',
  },
];

const services: Service[] = [
  { name: 'General Dentistry', description: 'Routine cleanings & checkups' },
  { name: 'Cosmetic Dentistry', description: 'Whitening & veneers' },
  { name: 'Restorative Care', description: 'Crowns, fillings & implants' },
  { name: 'Emergency Care', description: 'Same-day urgent treatment' },
];

const MobileHero = () => (
  <section className="md:hidden bg-gradient-to-b from-clinical-bg via-white to-clinical-grey/40 pt-6 pb-9">
    <div className="container-clinical px-4 space-y-6 sm:px-6">
      <div className="relative w-full overflow-hidden shadow-clinical rounded-bento h-[clamp(220px,62vw,340px)]">
        <img
          src={heroImage.src ?? heroImage}
          alt="Modern dental office with comfortable patient chair and advanced equipment"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="space-y-5 text-center">
        <div className="space-y-3">
          <h1 className="font-heading text-foreground leading-tight tracking-tight text-[clamp(1.25rem,5vw,1.6rem)]">
            <span className="block whitespace-nowrap">Where Families Can</span>
            <span className="block text-primary whitespace-nowrap">Smile Confidently</span>
          </h1>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Providing quality dental care for patients of all ages
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/contact#request-appointment">
            <Button size="lg" className="btn-primary w-full">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="w-full border border-primary/20 bg-white/70 hover:bg-primary/5 transition-colors shadow-none"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Phone className="w-5 h-5 mr-2" />
            512-467-9955
          </Button>
        </div>
      </div>

  <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
        <div className="text-center">
          <div className="text-lg font-semibold text-primary">20+</div>
          <div className="text-[11px] text-muted-foreground">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-primary">5000+</div>
          <div className="text-[11px] text-muted-foreground">Happy Patients</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
          </div>
          <div className="text-[11px] text-muted-foreground">4.9-Star Reviews</div>
        </div>
      </div>
    </div>
  </section>
);

const DesktopHero = () => (
  <section className="relative hidden md:block md:py-20 bg-gradient-to-br from-clinical-bg via-clinical-bg to-clinical-grey">
    <div className="container-clinical">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground leading-tight">
              Where Families Can
              <br />
              <span className="text-primary"> Smile Confidently</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Providing quality dental care for patients of all ages
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact#request-appointment">
              <Button size="lg" className="btn-primary w-full sm:w-auto">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full border border-primary/20 bg-white/60 hover:bg-primary/5 transition-colors shadow-none sm:w-auto"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Phone className="w-5 h-5 mr-2" />
              512-467-9955
            </Button>
          </div>

          <div className="grid gap-6 pt-6 border-t border-border sm:grid-cols-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Patients</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">4.9-Star Reviews</div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 md:mt-0">
          <div className="aspect-[4/3] rounded-bento overflow-hidden shadow-clinical">
            <img
              src={heroImage.src ?? heroImage}
              alt="Modern dental office with comfortable patient chair and advanced equipment"
              className="w-full h-full object-cover"
            />
          </div>
          <Card className="max-w-xs mx-auto mt-4 md:mt-0 md:max-w-none md:mx-0 md:absolute md:-bottom-6 md:-left-8 bg-card/95 backdrop-blur-sm border-clinical">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={drDivyaImage.src ?? drDivyaImage}
                    alt="Dr. Divya Shetty"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm">Dr. Divya Shetty</div>
                  <div className="text-xs text-muted-foreground">Lead Dentist</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default function LandingPage() {
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<string, boolean>>({});

  const toggleTestimonial = (key: string) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderTestimonialCard = (
    prefix: (typeof testimonialLoops)[number],
    index: number,
    { link, rating, review, name }: Testimonial
  ) => {
    const cardKey = `${prefix}-${index}`;
    const isExpanded = expandedTestimonials[cardKey];
    const isLongReview = review.length > TESTIMONIAL_PREVIEW_LENGTH;
    const displayReview = isExpanded || !isLongReview ? review : truncateReview(review);

    return (
      <a
        key={cardKey}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 w-80 border-clinical hover-scale"
        style={{ textDecoration: 'none' }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex mb-4">
              {Array.from({ length: rating }).map((_, starIndex) => (
                <Star key={starIndex} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2 min-h-[96px]">
              “{displayReview}”
            </p>
            {isLongReview && (
              <button
                type="button"
                className="mb-4 text-xs font-semibold text-primary hover:underline focus:outline-none"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  toggleTestimonial(cardKey);
                }}
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            )}
            <div className="border-t border-border pt-4">
              <div className="font-semibold text-foreground text-sm">{name}</div>
            </div>
          </CardContent>
        </Card>
      </a>
    );
  };

  return (
    <div className="min-h-screen">
      <MobileHero />
      <DesktopHero />

      {/* <section className="py-12 md:py-16">
        <div className="container-clinical">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">
              Why Choose Dental Smiles?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're proud to be a local, female-owned dental practice providing personalized, patient-centered care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon, title, description }, index) => (
              <Card key={index} className="text-center border-clinical">
                <CardContent className="p-5 sm:p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-bento flex items-center justify-center text-primary mx-auto mb-4">
                    {icon}
                  </div>
                  <h3 className="text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-12 md:py-16 bg-clinical-grey">
        <div className="container-clinical">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading text-bold mb-4">
                  Why Choose Dental Smiles?
                </h2>
                <p className="text-muted-foreground mb-6">
                  We're proud to be a local, female-owned dental practice providing personalized, patient-centered care.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map(({ name, description }, index) => (
                  <div key={index} className="p-4 bg-card rounded-bento border-clinical">
                    <h3 className="text-foreground ">{name}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                ))}
              </div>

              <Button className="btn-primary" onClick={() => window.scrollTo(0, 0)}>
                View All Services
              </Button>
            </div>

            <div className="aspect-[4/3] rounded-bento overflow-hidden shadow-clinical">
              <img
                src="/assets/dental-team.jpg"
                alt="Dental Smiles team providing gentle, professional care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-y border-border" style={{ backgroundColor: '#741234' }}>
        <div className="container-clinical">
          <div className="text-center mb-8">
            <h2 className="text-xl font-heading text-white mb-2">
              Insurance Plans We Accept
            </h2>
            <p className="text-sm text-white/80">We work with most major insurance providers</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {insuranceCompanies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-clinical-grey rounded-bento px-6 py-3 border-clinical min-w-[140px] h-12 text-center flex items-center justify-center"
                >
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground">{company.name}</span>
                  )}
                </div>
              ))}
              {insuranceCompanies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-clinical-grey rounded-bento px-6 py-3 border-clinical min-w-[140px] h-12 text-center flex items-center justify-center"
                >
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground">{company.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-clinical">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real patients who trust us with their smiles
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-card to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-card to-transparent z-10" />
            <div className="flex animate-scroll-reviews space-x-6">
              {testimonialLoops.map((loopKey) =>
                testimonials.map((testimonial, index) =>
                  renderTestimonialCard(loopKey, index, testimonial)
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary-hover">
        <div className="container-clinical text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading text-primary-foreground mb-4">
              Ready for Your Best Smile?
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Schedule your appointment today and experience the difference of personalized dental care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact#request-appointment">
                <Button size="lg" variant="secondary" className="w-full sm:min-w-[200px]">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <div className="flex flex-col sm:flex-row items-center text-primary-foreground/90 gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm text-center sm:text-left">123 Dental Ave, Smile City, SC 12345</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
