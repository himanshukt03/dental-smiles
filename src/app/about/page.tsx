import Image from "next/image";
import { Award, Clock, Users, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import BentoCard from "@/components/UI/BentoCard";
import { teamMembers } from "@/data/content";
import dentalTeamImage from "@/assets/dental-team.jpg";
import drDivyaShetty from "@/assets/team/dr-divya-shetty.webp";
import drMichaelJohnson from "@/assets/team/dr-michael-johnson.jpg";
import jessicaMartinez from "@/assets/team/jessica-martinez.jpg";
import amandaWilson from "@/assets/team/amanda-wilson.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We treat every patient with kindness, empathy, and respect, ensuring comfort throughout their dental journey.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description:
      "Our team stays current with the latest dental techniques and technologies to provide the highest quality care.",
  },
  {
    icon: Users,
    title: "Patient-Centered Approach",
    description:
      "We listen to your concerns and goals, creating personalized treatment plans that fit your needs and lifestyle.",
  },
  {
    icon: CheckCircle,
    title: "Integrity & Transparency",
    description:
      "We provide honest treatment recommendations and clear communication about procedures and costs.",
  },
];

const milestones = [
  {
    year: "2009",
    title: "Practice Founded",
    description:
      "Dr. Sarah Smith established Dental Smiles with a vision of providing exceptional dental care in a comfortable environment.",
  },
  {
    year: "2012",
    title: "Office Expansion",
    description:
      "Expanded to include additional treatment rooms and state-of-the-art dental technology to better serve our growing patient base.",
  },
  {
    year: "2015",
    title: "Dr. Johnson Joins",
    description:
      "Dr. Michael Johnson joined our team, bringing expertise in family dentistry and expanding our pediatric services.",
  },
  {
    year: "2018",
    title: "Digital Integration",
    description:
      "Fully integrated digital dental technology including digital X-rays, intraoral cameras, and electronic health records.",
  },
  {
    year: "2021",
    title: "Sedation Services",
    description:
      "Added comprehensive sedation options to help anxious patients receive comfortable dental care.",
  },
  {
    year: "2024",
    title: "15 Years of Service",
    description:
      "Celebrating 15 years of serving our community with over 5,000 satisfied patients and countless transformed smiles.",
  },
];

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
              <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground">
                About Dental Smiles
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 15 years, Dental Smiles has been dedicated to providing exceptional dental care that combines advanced technology with a personal touch. Our mission is to help every patient achieve optimal oral health and the confidence that comes with a beautiful smile.
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
                  src={dentalTeamImage}
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

      <section className="section-padding bg-background">
        <div className="container-clinical">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
                We Help Smiles Thrive
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Dr. Divya Shetty and our friendly team offer caring and gentle dentistry while using the latest dental materials, technology, and techniques. But we care about more than just your teeth! At Dental Smiles, we take the time to get to know all of our patients. Dr. Shetty's role as your dentist is to provide a deeper understanding of your oral health and an environment where you feel comfortable. Whether you're a returning patient or a new patient, we look forward to seeing you and providing you with the compassionate dental care you deserve.
              </p>
            </div>
            <BentoCard className="p-6 sm:p-8 element-outline-hover">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                A Personal Touch to Dental Care: Local & Female Owned
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At Dental Smiles, our personalized, patient-centered care isn't the only thing that sets us apart. We're proud to be a local, female-owned dental practice. As a locally owned and operated practice, we're deeply rooted in the community, providing consistent care from the same friendly faces that you can rely on.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-clinical">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe that everyone deserves access to quality dental care in a comfortable, welcoming environment. Our values guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value) => (
              <BentoCard key={value.title} className="p-6 sm:p-8 element-outline-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-bento flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>

          <BentoCard className="p-8 sm:p-12 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              "To provide comprehensive, compassionate dental care that exceeds expectations. We are committed to improving the oral health and overall well-being of our patients through personalized treatment, advanced technology, and a gentle approach that makes every visit comfortable and stress-free."
            </p>
          </BentoCard>
        </div>
      </section>

      <section className="section-padding bg-clinical-creme">
        <div className="container-clinical">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From a small practice to a leading dental care provider, here's how we've grown to serve our community better.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden lg:block" />

            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col gap-6 lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 w-full lg:px-8">
                    <BentoCard
                      className={`p-6 sm:p-8 ${
                        index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                      } max-w-md`}
                    >
                      <div className="text-primary font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </BentoCard>
                  </div>

                  <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-clinical">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing you with the highest quality dental care in a comfortable, welcoming environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {teamMembers.map((member) => {
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
                        <h3 className="text-xl font-heading font-semibold text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.credentials}</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{member.bio}</p>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Specialties:</h4>
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

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-clinical text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
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
