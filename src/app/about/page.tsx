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
      {/* Clean Modern Hero Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-b from-primary/5 via-white to-transparent border-b border-primary/10">
        <div className="container-clinical">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight tracking-tight">
                Locally Owned and Operated in Austin, TX
              </h1>
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
                    <Phone className="mr-2 h-4 w-4" /> Call (512) 467-9955
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
