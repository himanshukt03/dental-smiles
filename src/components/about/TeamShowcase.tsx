'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export type TeamMemberData = {
  id: number;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  specialties: string[];
  image: string;
};

const teamImages: Record<string, string> = {
  'dr-divya-shetty.webp': '/assets/team/dr-divya-shetty.webp',
  'anna-okulist.webp': '/assets/team/anna-okulist.webp',
  'Angie-Madore.webp': '/assets/team/Angie-Madore.webp',
  'Natalie-Beauchamps.webp': '/assets/team/Natalie-Beauchamps.webp',
  'Ashley-Smith.webp': '/assets/team/Ashley-Smith.webp',
  'Gina-Lumampao.webp': '/assets/team/Gina-Lumampao.webp',
  'Brittany-Figueroa.webp': '/assets/team/Brittany-Figueroa.webp',
  'Paula-Roe.webp': '/assets/team/Paula-Roe.webp',
};

const defaultTeamImage = '/assets/team/dr-divya-shetty.webp';

// Clean curated brief summaries for the cards preview
const memberSummaries: Record<number, string> = {
  1: 'Graduated from Boston University Henry M. Goldman School of Dental Medicine in 2003. Passionate about personalized cosmetic, implant, and family care.',
  2: 'Completed dental education in Iowa and hospital residency training in Los Angeles. Providing gentle, high-quality family dentistry for Austin patients.',
  3: 'Brings over two decades of dental experience to our practice. Ensuring every patient receives a warm welcome and seamless appointment coordination.',
  4: 'Dedicated to helping patients feel at home and ensuring high quality administrative support and care coordination since joining our team.',
  5: 'Over a decade of experience focused on patient comfort, thorough preventive cleanings, and supportive oral health guidance.',
  6: 'Over twenty years of dental hygiene experience with a strong passion for patient education and promoting long-term preventive health.',
  7: 'Proud Austinite ensuring every visit is a positive, gentle experience while assisting chairside with comprehensive family care.',
  8: 'Over a decade of clinical dental assisting experience, providing friendly patient support throughout dental procedures.',
};

interface TeamShowcaseProps {
  doctors: TeamMemberData[];
  staff: TeamMemberData[];
}

export default function TeamShowcase({ doctors, staff }: TeamShowcaseProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);

  const getMemberImage = (imgName: string) => teamImages[imgName] ?? defaultTeamImage;

  return (
    <>
      {/* Doctors Section */}
      <section className="py-10 md:py-14" style={{ backgroundColor: '#741234' }}>
        <div className="container-clinical">
          <div className="text-center mb-10 max-w-3xl mx-auto space-y-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-white/90 border border-white/15">
              <Award className="h-3 w-3" /> Experienced Clinicians
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Meet Our Doctors
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
              Our experienced dentists are dedicated to providing you with gentle, personalized dental care in a welcoming Austin practice.
            </p>
          </div>

          {/* Compact Doctor Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto">
            {doctors.map((doctor) => {
              const imageSrc = getMemberImage(doctor.image);
              const summaryText = memberSummaries[doctor.id] || doctor.bio.slice(0, 140);

              return (
                <div
                  key={doctor.id}
                  onClick={() => setSelectedMember(doctor)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedMember(doctor);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View bio for ${doctor.name}`}
                  className="group relative overflow-hidden rounded-2xl bg-white p-3.5 sm:p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white flex flex-col justify-between cursor-pointer text-left"
                >
                  <div className="space-y-3">
                    {/* Square-ish Photo Frame */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm">
                      <Image
                        src={imageSrc}
                        alt={doctor.name}
                        fill
                        sizes="(min-width: 768px) 280px, 100vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 rounded-full bg-white/95 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-primary shadow-sm border border-primary/10">
                        {doctor.credentials || 'Dentist'}
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="space-y-0.5">
                      <h3 className="text-base sm:text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                        {doctor.name}
                      </h3>
                      <p className="text-xs font-bold text-primary">
                        {doctor.role}
                      </p>

                      {/* Readable description text */}
                      <p className="text-sm sm:text-base text-foreground/85 font-normal leading-relaxed pt-1">
                        {summaryText}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {doctor.specialties.slice(0, 3).map((specialty) => (
                        <span
                          key={specialty}
                          className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
                        >
                          <CheckCircle className="h-2.5 w-2.5" />
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-3 mt-3 border-t border-primary/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary group-hover:underline inline-flex items-center gap-1">
                      Read Full Bio <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground bg-clinical-creme px-1.5 py-0.5 rounded-md">
                      Click for details
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Team Staff Section Header */}
          <div className="text-center mt-14 mb-8 max-w-3xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-white/90 border border-white/15">
              <Users className="h-3 w-3" /> Caring Support Staff
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
              Our dedicated dental hygienists, assistants, and coordinators work seamlessly to make every appointment comfortable and welcoming.
            </p>
          </div>

          {/* Team Staff Profile Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {staff.map((member) => {
              const imageSrc = getMemberImage(member.image);
              const summaryText = memberSummaries[member.id] || member.bio.slice(0, 120);

              return (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedMember(member);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View bio for ${member.name}`}
                  className="group relative overflow-hidden rounded-2xl bg-white p-4 sm:p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white flex flex-col justify-between cursor-pointer text-left"
                >
                  <div className="space-y-3">
                    {/* Square-ish Photo Frame */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm">
                      <Image
                        src={imageSrc}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Name & Role */}
                    <div className="space-y-0.5">
                      <h3 className="text-base sm:text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-primary">
                        {member.role}
                      </p>

                      {/* Readable description text */}
                      <p className="text-sm sm:text-base text-foreground/85 font-normal leading-relaxed pt-1">
                        {summaryText}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {member.specialties.slice(0, 2).map((specialty) => (
                        <span
                          key={specialty}
                          className="inline-flex items-center gap-1 rounded-full bg-clinical-creme px-2 py-0.5 text-[10px] font-medium text-foreground/85 border border-primary/10"
                        >
                          <CheckCircle className="h-2.5 w-2.5 text-primary" />
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="pt-3 mt-3 border-t border-primary/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary group-hover:underline inline-flex items-center gap-1">
                      View Bio <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground bg-clinical-creme px-2 py-0.5 rounded-md">
                      Click for details
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pop-up Profile Dialog Modal */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        {selectedMember && (
          <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl bg-white border border-primary/20 shadow-2xl">
            <div className="relative">
              {/* Modal Top Banner & Portrait Showcase */}
              <div className="bg-gradient-to-br from-primary/10 via-clinical-creme to-white p-5 sm:p-7 border-b border-primary/10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl overflow-hidden shadow-md ring-2 ring-primary/20">
                    <Image
                      src={getMemberImage(selectedMember.image)}
                      alt={selectedMember.name}
                      fill
                      sizes="(min-width: 640px) 112px, 96px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="space-y-1 text-center sm:text-left flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <DialogTitle className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                        {selectedMember.name}
                      </DialogTitle>
                      {selectedMember.credentials && (
                        <span className="self-center sm:self-start inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary border border-primary/15">
                          {selectedMember.credentials}
                        </span>
                      )}
                    </div>
                    <DialogDescription className="text-xs sm:text-sm font-semibold text-primary">
                      {selectedMember.role}
                    </DialogDescription>

                    {/* Specialties */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 pt-1.5">
                      {selectedMember.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-foreground border border-primary/15 shadow-sm"
                        >
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Bio Content */}
              <div className="p-5 sm:p-7 space-y-3 max-h-[50vh] overflow-y-auto">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Biography & Background
                </h4>
                <div className="space-y-3 text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                  {selectedMember.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="bg-clinical-creme/60 p-4 sm:p-5 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground text-center sm:text-left">
                  Questions for our team? We&apos;re here to help.
                </p>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Link href="/contact#request-appointment" className="w-full sm:w-auto" onClick={() => setSelectedMember(null)}>
                    <Button size="sm" className="btn-primary w-full sm:w-auto px-4 text-xs font-semibold">
                      <Calendar className="mr-1.5 h-3.5 w-3.5" /> Book Appointment
                    </Button>
                  </Link>
                  <Link href="tel:5124679955" className="w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs font-semibold border-primary/20 bg-white text-primary hover:bg-primary/5">
                      <Phone className="mr-1.5 h-3.5 w-3.5" /> Call Office
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
