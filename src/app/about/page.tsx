import Image from "next/image";
import Link from "next/link";
import { Award, Clock, Users, Heart, CheckCircle, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import BentoCard from "@/components/UI/BentoCard";
import { teamMembers } from "@/data/content";
import TechnologyCarousel from '@/components/TechnologyCarousel';
import TeamShowcase from "@/components/about/TeamShowcase";

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

export const metadata = {
  title: "About Us",
  description:
    "Discover the mission, values, and experienced team that make Dental Smiles a trusted Austin dental practice. Meet Dr. Divya Shetty and our caring staff.",
  keywords: [
    "Austin dental team",
    "Dr. Divya Shetty",
    "dental technology",
    "Mueller dentist",
    "family dentist Austin",
  ],
  openGraph: {
    title: "About Dental Smiles | Meet Our Austin Dental Team",
    description:
      "Discover the mission, values, and experienced team that make Dental Smiles a trusted Austin dental practice.",
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding pt-8 sm:pt-10 lg:pt-14 pb-12 lg:pb-16 bg-gradient-to-br from-clinical-creme to-clinical-grey">
        <div className="container-clinical max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white/90 shadow-lg">
            <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
            <div className="relative grid grid-rows-[auto_auto_auto] gap-5 p-5 sm:p-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:grid-rows-[auto_auto] md:gap-8 lg:p-8">
              <div className="space-y-3 md:col-start-1 md:col-end-2 md:row-start-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  <Users className="h-3.5 w-3.5" /> Community-focused care in Austin
                </span>
                <h1 className="text-xl sm:text-2xl md:text-3.5xl lg:text-4xl font-heading font-bold text-foreground leading-tight tracking-tight text-center md:text-left">
                  Locally Owned and Operated.
                </h1>
              </div>

              <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:mx-0 md:col-start-2 md:row-start-1 md:row-end-3">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-primary/15 bg-white/70 shadow-xl">
                  <div className="relative aspect-[16/10] sm:aspect-[3/2] md:aspect-[4/3]">
                    <Image
                      src="/assets/dental-team2.webp"
                      alt="Dental Smiles team"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 90vw"
                      priority
                    />
                  </div>
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-primary shadow border border-primary/10">
                    Locally owned practice
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:col-start-1 md:row-start-2 md:row-end-3">
                <div className="space-y-3 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
                  <p>
                    Conveniently located near Central Austin and the Mueller Town Center District, our locally owned practice serves families and individuals seeking
                    <span className="text-primary font-semibold"> high-quality care</span>.
                  </p>
                  <p>
                    At Dental Smiles, we use <span className="text-primary font-semibold">advanced technology</span> and modern techniques to make dentistry safer and more comfortable.
                    We also ease patient anxiety by creating a <span className="text-primary font-semibold">welcoming experience</span>—with ample parking included.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5 sm:flex-row pt-1">
                  <Button className="btn-primary w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold">
                    <Users className="w-4 h-4 mr-2" />
                    Meet Our Team
                  </Button>
                  <Button variant="ghost" className="btn-secondary w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold">
                    <Clock className="w-4 h-4 mr-2" />
                    Schedule Visit
                  </Button>
                </div>
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
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">
                Join thousands of satisfied patients who have trusted us with their dental care. Schedule your visit today with Dr. Shetty and our caring team.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row pt-1">
                <Link href="/contact#request-appointment" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xs sm:text-sm font-semibold px-5 py-2.5">
                    <Calendar className="mr-2 h-4 w-4" /> Schedule Your Visit
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
};

export default AboutPage;
