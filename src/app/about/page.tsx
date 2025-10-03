import Image from "next/image";
import { Award, Clock, Users, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import BentoCard from "@/components/UI/BentoCard";
import { teamMembers } from "@/data/content";
import drDivyaShetty from "@/assets/team/dr-divya-shetty.webp";
import drMichaelJohnson from "@/assets/team/dr-michael-johnson.jpg";
import jessicaMartinez from "@/assets/team/jessica-martinez.jpg";
import amandaWilson from "@/assets/team/amanda-wilson.jpg";
import TechnologyCarousel from '@/components/TechnologyCarousel';

const teamImages: Record<string, typeof drDivyaShetty> = {
  "dr-divya-shetty.webp": drDivyaShetty,
  "dr-michael-johnson.jpg": drMichaelJohnson,
  "jessica-martinez.jpg": jessicaMartinez,
  "amanda-wilson.jpg": amandaWilson,
};

export const metadata = {
  title: "About Dental Smiles",
  description:
    "Discover the mission, values, and experienced team that make Dental Smiles a trusted Austin dental practice.",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-clinical-creme to-clinical-grey">
        <div className="container-clinical">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading text-foreground">
                Locally Owned and Operated <span className="text-primary"> Dental Office</span> in Austin, TX.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conveniently located near Central Austin and the Mueller Town Center District, our locally owned practice serves families and individuals seeking high-quality care.
                <br /><br />
                At Dental Smiles, we use advanced technology and modern techniques to make dentistry safer and more comfortable. We also ease patient anxiety by creating a welcoming experience—with ample parking included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary w-full sm:w-auto">
                  <Users className="w-4 h-4 mr-2" />
                  Meet Our Team
                </Button>
                <Button variant="ghost" className="btn-secondary w-full sm:w-auto">
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule Visit
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-bento overflow-hidden shadow-hover element-outline">
                <Image
                  src="/assets/dental-team.jpg"
                  alt="Dental Smiles team"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#741234' }}>
        <div className="container-clinical">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-heading text-white mb-4">
              Meet Our Doctors
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our experienced dentists are dedicated to providing you with the highest quality dental care in a comfortable, welcoming environment.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {teamMembers.filter(member => member.role.includes('Dentist')).map((doctor) => {
              const memberImage = teamImages[doctor.image] ?? drDivyaShetty;

              return (
                <BentoCard key={doctor.id} className="p-6 sm:p-8 lg:p-10 element-outline-hover bg-white">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-48 lg:h-48 w-32 h-32 mx-auto lg:mx-0 flex-shrink-0">
                      <div className="relative w-full h-full rounded-bento overflow-hidden shadow-clinical element-outline">
                        <Image
                          src={memberImage}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                          sizes="192px"
                        />
                      </div>
                    </div>
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-2">
                          {doctor.name}
                        </h3>
                        <p className="text-primary font-semibold text-lg">{doctor.role}</p>
                        <p className="text-primary/80 font-medium">{doctor.credentials}</p>
                      </div>

                      <div className="space-y-4">
                        {doctor.bio.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-muted-foreground leading-relaxed text-base">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div>
                        <h4 className="font-heading text-foreground mb-3 text-lg">Specialties:</h4>
                        <div className="flex flex-wrap gap-3">
                          {doctor.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-bento element-outline"
                            >
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

          <div className="text-center mt-20 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading  text-white text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground  text-white  max-w-3xl mx-auto">
              Our dedicated support staff works alongside our doctors to ensure you receive exceptional care and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {teamMembers.filter(member => !member.role.includes('Dentist')).map((member) => {
              const memberImage = teamImages[member.image] ?? drDivyaShetty;

              return (
                <BentoCard key={member.id} className="p-6 sm:p-8 element-outline-hover">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-32 lg:h-32 w-24 h-24 mx-auto lg:mx-0 flex-shrink-0">
                      <div className="relative w-full h-full rounded-bento overflow-hidden shadow-clinical element-outline">
                        <Image
                          src={memberImage}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-heading text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.credentials}</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{member.bio}</p>

                      <div>
                        <h4 className="font-heading text-foreground mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-bento element-outline"
                            >
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
