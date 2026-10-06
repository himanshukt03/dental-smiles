import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Clock, Users, Heart, CheckCircle, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import BentoCard from "@/components/UI/BentoCard";
import { teamMembers } from "@/data/content";
import TechnologyCarousel from '@/components/TechnologyCarousel';
import TeamShowcase from "@/components/about/TeamShowcase";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

const teamImages: Record<string, string> = {
  "dr-divya-shetty.webp": "/assets/team/dr-divya-shetty.webp",
  "anna-okulist.webp": "/assets/team/anna-okulist.webp",
  "Angie-Madore.webp": "/assets/team/Angie-Madore.webp",
  "Natalie-Beauchamps.webp": "/assets/team/Natalie-Beauchamps.webp",
  "Ashley-Smith.webp": "/assets/team/Ashley-Smith.webp",
  "Gina-Lumampao.webp": "/assets/team/Gina-Lumampao.webp",
  "Brittany-Figueroa.webp": "/assets/team/Brittany-Figueroa.webp",
  "Paula-Roe.webp": "/assets/team/Paula-Roe.webp",
};
const defaultTeamImage = "/assets/team/dr-divya-shetty.webp";

export const metadata: Metadata = {
  title: "About Our Practice & Team | Dentist in Mueller, Austin TX | Dental Smiles",
  description:
    "Meet Dr. Divya Shetty and the compassionate team at Dental Smiles in Mueller, Austin, TX (78723). Learn about our patient-first mission, CEREC technology, and cozy clinic.",
  keywords: [
    "Mueller dental team",
    "Dr. Divya Shetty dentist",
    "dentist Mueller Austin",
    "family dentist Mueller 78723",
    "female dentist Mueller Austin TX",
  ],
  alternates: {
    canonical: "https://dental-smiles.vercel.app/about",
  },
  openGraph: {
    title: "About Dental Smiles | Meet Our Mueller Austin Dental Team",
    description:
      "Discover the mission, values, and experienced team that make Dental Smiles a trusted Mueller Austin dental practice.",
    url: "https://dental-smiles.vercel.app/about",
    type: "website",
    images: [
      {
        url: "/assets/team/dr-divya-shetty.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Divya Shetty - Dental Smiles Mueller Austin",
      },
    ],
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[{ name: 'About Us', url: '/about' }]} />
      {/* Header Banner - Section 1 */}
      <section className="pt-7 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-10 bg-[#741234] text-white shadow-md relative overflow-hidden">

        <div className="container-clinical max-w-3xl text-center space-y-2 sm:space-y-2.5 relative z-10">
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            <span className="h-[1.5px] w-5 sm:w-7 bg-white/40 rounded-full inline-block" />
            <span>ABOUT US</span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Locally Owned Dental Practice
          </h1>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-md mx-auto font-normal">
            Meet Dr. Divya Shetty and our compassionate team dedicated to gentle, modern dental care in Austin, TX.
          </p>
        </div>
      </section>

      {/* Main Practice Overview Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-b from-primary/5 via-white to-transparent border-b border-primary/10">
        <div className="container-clinical">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight tracking-tight">
                Proudly Serving the Mueller Community in Austin, TX
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-foreground/85 leading-relaxed font-normal">
                <p>
                  Conveniently located near Central Austin and the Mueller Town Center District, our locally owned practice serves families and individuals seeking high-quality, personalized care.
                </p>
                <p>
                  At Dental Smiles, we use advanced dental technology and modern techniques to make every visit safe, gentle, and comfortable with ample on-site parking.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link href="#team-showcase" className="w-full sm:w-auto">
                  <Button size="lg" className="btn-primary w-full sm:w-auto px-6 py-3 font-semibold">
                    <Users className="mr-2 h-4 w-4" /> Meet Our Team
                  </Button>
                </Link>
                <Link href="tel:5124679955" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-primary/20 bg-white/80 px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full overflow-hidden rounded-[2rem] border border-primary/10 shadow-xl bg-white">
              <div className="relative aspect-[4/3] lg:aspect-[16/11]">
                <Image
                  src="/assets/dental-team2.webp"
                  alt="Dental Smiles team"
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Doctors & Team Showcase with Bio Pop-up Modals */}
      <TeamShowcase
        doctors={teamMembers.filter((m) => m.role.includes('Dentist'))}
        staff={teamMembers.filter((m) => !m.role.includes('Dentist'))}
      />

      <section className="section-padding bg-background">
        <div className="container-clinical px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight text-foreground mb-3">Technology</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">Our technology, services, and techniques are chosen with extra care to provide the most benefits to our patients.</p>
          </div>

          <div>
            {/* Carousel shows 3 large cards at a time; navigation via arrows */}
            <TechnologyCarousel />
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
                Ready to Experience the Dental Smiles Difference?
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
                Join thousands of satisfied patients who have trusted us with their dental care. Reserve your visit today with Dr. Shetty and our caring team.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row pt-1">
                <Link href="/contact#request-appointment" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xs sm:text-sm font-semibold px-5 py-2.5">
                    <Calendar className="mr-2 h-4 w-4" /> Reserve Your Visit
                  </Button>
                </Link>
                <Link href="tel:5124679955" className="w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    className="w-full sm:w-auto border border-primary-foreground/30 bg-white/10 text-primary-foreground hover:bg-white/20 text-xs sm:text-sm font-semibold px-5 py-2.5"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
