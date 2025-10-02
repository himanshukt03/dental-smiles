'use client';

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
import teamImage from '@/assets/dental-team.jpg';
import drDivyaImage from '@/assets/team/dr-divya-shetty.webp';

const insuranceCompanies = [
  'Aetna',
  'Blue Cross Blue Shield',
  'Cigna',
  'Delta Dental',
  'Humana',
  'MetLife',
  'Guardian',
  'United Healthcare',
  'Anthem',
  'Assurant',
  'Principal',
  'Aflac',
  'Mutual of Omaha',
  'Lincoln Financial',
];

const testimonials = [
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

const features = [
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

const services = [
  { name: 'General Dentistry', description: 'Routine cleanings & checkups' },
  { name: 'Cosmetic Dentistry', description: 'Whitening & veneers' },
  { name: 'Restorative Care', description: 'Crowns, fillings & implants' },
  { name: 'Emergency Care', description: 'Same-day urgent treatment' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-clinical-bg via-clinical-bg to-clinical-grey">
        <div className="container-clinical">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                  Where Families Can
                  <br />
                  <span className="text-primary"> Smile Confidently</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Providing quality dental care for patients of all ages
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-appointment">
                  <Button
                    size="lg"
                    className="btn-primary flex-1 sm:flex-none"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 sm:flex-none border border-primary/20 bg-white/60 hover:bg-primary/5 transition-colors shadow-none"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  512-467-9955
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">4.9-Star Reviews</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-bento overflow-hidden shadow-clinical">
                <img
                  src={heroImage.src ?? heroImage}
                  alt="Modern dental office with comfortable patient chair and advanced equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <Card className="absolute -bottom-6 -left-4 md:-left-8 bg-card/95 backdrop-blur-sm border-clinical">
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

      <section className="py-12 md:py-16">
        <div className="container-clinical">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Why Choose Dental Smiles?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're proud to be a local, female-owned dental practice providing personalized, patient-centered care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon, title, description }, index) => (
              <Card key={index} className="text-center border-clinical">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-bento flex items-center justify-center text-primary mx-auto mb-4">
                    {icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-clinical-grey">
        <div className="container-clinical">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Comprehensive Dental Services
                </h2>
                <p className="text-muted-foreground mb-6">
                  From routine cleanings to advanced restorative treatments, we provide complete dental care for your entire family.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map(({ name, description }, index) => (
                  <div key={index} className="p-4 bg-card rounded-bento border-clinical">
                    <h3 className="font-semibold text-foreground mb-1">{name}</h3>
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
                src={teamImage.src ?? teamImage}
                alt="Dental Smiles team providing gentle, professional care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-card border-y border-border">
        <div className="container-clinical">
          <div className="text-center mb-8">
            <h2 className="text-xl font-heading font-semibold text-foreground mb-2">
              Insurance Plans We Accept
            </h2>
            <p className="text-sm text-muted-foreground">We work with most major insurance providers</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_30s_linear_infinite] space-x-8">
              {insuranceCompanies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-clinical-grey rounded-bento px-6 py-3 border-clinical min-w-[140px] text-center"
                >
                  <span className="text-sm font-medium text-muted-foreground">{company}</span>
                </div>
              ))}
              {insuranceCompanies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-clinical-grey rounded-bento px-6 py-3 border-clinical min-w-[140px] text-center"
                >
                  <span className="text-sm font-medium text-muted-foreground">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-clinical">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real patients who trust us with their smiles
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-card to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-card to-transparent z-10" />
            <div className="flex animate-[scroll-reviews_40s_linear_infinite] space-x-6">
              {testimonials.map(({ link, rating, review, name }, index) => (
                <a
                  key={`first-${index}`}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-80 border-clinical hover-scale"
                  style={{ textDecoration: 'none' }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {Array.from({ length: rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">“{review}”</p>
                      <div className="border-t border-border pt-4">
                        <div className="font-semibold text-foreground text-sm">{name}</div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
              {testimonials.map(({ link, rating, review, name }, index) => (
                <a
                  key={`second-${index}`}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-80 border-clinical hover-scale"
                  style={{ textDecoration: 'none' }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {Array.from({ length: rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">“{review}”</p>
                      <div className="border-t border-border pt-4">
                        <div className="font-semibold text-foreground text-sm">{name}</div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary-hover">
        <div className="container-clinical text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Ready for Your Best Smile?
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Schedule your appointment today and experience the difference of personalized dental care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book-appointment">
                <Button size="lg" variant="secondary" className="min-w-[200px]">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <div className="flex items-center text-primary-foreground/90">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">123 Dental Ave, Smile City, SC 12345</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
