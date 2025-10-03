import Image from "next/image";
import { Award, Clock, Users, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import BentoCard from "@/components/UI/BentoCard";
import { teamMembers } from "@/data/content";
import TechnologyCarousel from '@/components/TechnologyCarousel';
import { BioContent } from "@/components/about/BioContent";

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
  title: "About Dental Smiles",
  description:
    "Discover the mission, values, and experienced team that make Dental Smiles a trusted Austin dental practice.",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
  <section className="section-padding pt-12 sm:pt-14 lg:pt-20 pb-16 lg:pb-20 bg-gradient-to-br from-clinical-creme to-clinical-grey">
        <div className="container-clinical">
          <div className="relative overflow-hidden rounded-[1.9rem] border border-primary/10 bg-white/90 shadow-xl">
            <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
            <div className="relative grid grid-rows-[auto_auto_auto] gap-6 p-6 sm:p-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:grid-rows-[auto_auto] md:gap-10 lg:p-12">
              <div className="space-y-4 md:col-start-1 md:col-end-2 md:row-start-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  <Users className="h-3.5 w-3.5" /> Community-focused care in Austin
                </span>
                <h1 className="text-[1.5rem] sm:text-3xl md:text-5xl font-heading text-foreground leading-tight">
                  Locally Owned and Operated.
                </h1>
              </div>

              <div className="relative mx-auto w-full max-w-md sm:max-w-lg md:mx-0 md:col-start-2 md:row-start-1 md:row-end-3">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-primary/15 bg-white/70 shadow-2xl">
                  <div className="relative aspect-[4/3] sm:aspect-[3/2] md:aspect-[5/4] lg:aspect-[4/3]">
                    <Image
                      src="/assets/dental-team.jpg"
                      alt="Dental Smiles team"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 420px, (min-width: 768px) 60vw, 90vw"
                      priority
                    />
                  </div>
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-primary shadow">
                    Locally owned practice
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-2xl bg-primary px-3.5 py-2 text-[11px] font-semibold text-primary-foreground shadow-lg">
                    Welcoming Austin smiles
                  </div>
                </div>
              </div>

              <div className="space-y-5 md:col-start-1 md:row-start-2 md:row-end-3">
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Conveniently located near Central Austin and the Mueller Town Center District, our locally owned practice serves families and individuals seeking
                    <span className="text-primary font-semibold"> high-quality care</span>.
                  </p>
                  <p>
                    At Dental Smiles, we use <span className="text-primary font-semibold">advanced technology</span> and modern techniques to make dentistry safer and more comfortable.
                    We also ease patient anxiety by creating a <span className="text-primary font-semibold">welcoming experience</span>—with ample parking included.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button className="btn-primary w-full sm:w-auto px-5 py-3 text-sm font-semibold">
                    <Users className="w-4 h-4 mr-2" />
                    Meet Our Team
                  </Button>
                  <Button variant="ghost" className="btn-secondary w-full sm:w-auto px-5 py-3 text-sm font-semibold">
                    <Clock className="w-4 h-4 mr-2" />
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#741234' }}>
        <div className="container-clinical">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-heading text-white mb-4">
              Meet Our <span className="text-primary-foreground/80">Doctors</span>
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our experienced dentists are dedicated to providing you with the <span className="text-primary-foreground font-semibold">highest quality care</span> in a comfortable,
              <span className="text-primary-foreground font-semibold"> welcoming environment</span>.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {teamMembers.filter(member => member.role.includes('Dentist')).map((doctor) => {
              const memberImage = teamImages[doctor.image] ?? defaultTeamImage;

              return (
                <BentoCard
                  key={doctor.id}
                  className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white/90 p-6 sm:p-8 lg:p-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="absolute inset-x-8 -top-24 h-48 rounded-full bg-primary/20 blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="relative mx-auto flex-shrink-0 drop-shadow-xl lg:mx-0">
                      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-primary/20 via-transparent to-transparent" aria-hidden="true" />
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 overflow-hidden rounded-[28px] ring-4 ring-white">
                        <Image
                          src={memberImage}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 176px, 144px"
                        />
                      </div>
                    </div>

                    <div className="flex-1 space-y-5">
                      <div className="space-y-2 text-center lg:text-left">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="text-2xl md:text-3xl font-heading text-foreground">
                            {doctor.name}
                          </h3>
                          <span className="inline-flex items-center gap-2 self-center rounded-full bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary">
                            <Award className="h-4 w-4" /> Trusted Dentist
                          </span>
                        </div>
                        <p className="text-primary font-semibold text-lg">{doctor.role}</p>
                        <p className="text-primary/80 text-sm font-medium">{doctor.credentials}</p>
                      </div>

                      <BioContent id={String(doctor.id)} bio={doctor.bio} className="space-y-3 text-left" />

                      <div className="space-y-3">
                        <h4 className="font-heading text-lg text-foreground">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                            >
                              <CheckCircle className="h-4 w-4" />
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                          <div className="flex items-center gap-2">
                            <Heart className="h-4 w-4 text-primary" />
                            Compassionate, patient-first care
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            Flexible scheduling & attention
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BentoCard>
              );
            })}
          </div>

          <div className="text-center mt-20 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
              Meet Our <span className="text-primary-foreground/80">Team</span>
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our dedicated support staff works alongside our doctors to ensure you receive
              <span className="text-primary-foreground font-semibold"> exceptional care</span> and welcoming service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {teamMembers.filter(member => !member.role.includes('Dentist')).map((member) => {
              const memberImage = teamImages[member.image] ?? defaultTeamImage;

              return (
                <BentoCard
                  key={member.id}
                  className="group relative overflow-hidden rounded-3xl border border-primary/8 bg-white/85 p-6 sm:p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="absolute inset-x-6 -top-20 h-44 rounded-full bg-primary/15 blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-80" />
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
                    <div className="relative mx-auto flex-shrink-0 lg:mx-0">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-[24px] ring-4 ring-white shadow-lg">
                        <Image
                          src={memberImage}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 128px, 112px"
                        />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4 text-center lg:text-left">
                      <div className="space-y-2">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="text-xl font-heading text-foreground">{member.name}</h3>
                          <span className="inline-flex items-center gap-2 self-center rounded-full bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary">
                            <Heart className="h-4 w-4" /> Support Team
                          </span>
                        </div>
                        <p className="text-primary font-semibold">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.credentials}</p>
                      </div>

                      <BioContent id={`team-${member.id}`} bio={member.bio} className="space-y-3" />

                      <div className="space-y-2">
                        <h4 className="font-heading text-foreground">Specialties</h4>
                        <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                          {member.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs sm:text-sm text-primary"
                            >
                              <CheckCircle className="h-4 w-4" />
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </BentoCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-clinical px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-4">Technology</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Our technology, services, and techniques are chosen with extra care to provide the most benefits to our patients.</p>
          </div>

          <div>
            {/* Carousel shows 3 large cards at a time; navigation via arrows */}
            <TechnologyCarousel />
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-clinical text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Ready to Experience the Dental Smiles Difference?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have trusted us with their dental care. Schedule your consultation today.
          </p>
          <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4 h-auto">
            <Users className="w-5 h-5 mr-2" />
            Schedule Your Visit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
