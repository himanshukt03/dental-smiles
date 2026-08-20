import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Emergency Dentist Austin, TX | Same-Day Urgent Dental Care',
  description:
    'Need an emergency dentist in Austin, TX? Dental Smiles offers same-day emergency dental appointments for toothaches, broken teeth, knocked-out teeth, and abscesses. Call 512-467-9955.',
  keywords: [
    'emergency dentist Austin',
    'same day dental Austin',
    'urgent dental care Austin TX',
    'toothache relief Austin',
    'broken tooth repair Austin',
    'dental emergency 78723',
  ],
  alternates: {
    canonical: 'https://dental-smiles.vercel.app/services/emergency-dentistry',
  },
  openGraph: {
    title: 'Emergency Dentist in Austin, TX | Dental Smiles',
    description:
      'Same-day urgent dental care for tooth pain, dental trauma, and broken restorations in Austin, TX.',
    url: 'https://dental-smiles.vercel.app/services/emergency-dentistry',
    type: 'website',
    images: [
      {
        url: '/assets/services/Emergency-Dentistry/emergency-dentistry.jpg',
        width: 1200,
        height: 630,
        alt: 'Emergency Dentist in Austin TX - Dental Smiles',
      },
    ],
  },
};

export default function EmergencyDentistryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Emergency Dentistry', url: '/services/emergency-dentistry' },
        ]}
      />
      <ServiceSchema
        name="Emergency Dentistry & Same-Day Urgent Care"
        description="Same-day emergency dental appointments for unbearable dental pain, broken teeth, knocked-out teeth, and acute oral infections in Austin, TX."
        url="/services/emergency-dentistry"
        image="/assets/services/Emergency-Dentistry/emergency-dentistry.jpg"
      />
      <ServicePageTemplate
        badge="Emergency Dentistry in Austin, TX"
        title="Your trusted emergency dentist in Austin, TX"
        heroImage="/assets/services/Emergency-Dentistry/emergency-dentistry.jpg"
        heroImageAlt="Emergency dental care consultation at Dental Smiles."
        intro={[
          'In need of emergency dental care in Austin? Dental Smiles offers same-day dental appointments, and we are glad to assist your family when a dental emergency occurs.',
          'To schedule an emergency visit, please call 512-467-9955 so Dr. Shetty and our team can learn more and begin preparing a treatment room for you.',
        ]}
        sections={[
          {
            title: 'What are some common dental emergencies?',
            body: [
              'A dental emergency is any situation where a patient needs an immediate or same-day appointment to resolve a dental issue as soon as possible.',
            ],
            bullets: [
              'Unbearable dental pain',
              'Cracked or broken teeth',
              'Knocked-out tooth',
              'Dental abscess',
              'Loose teeth',
              'Lost dental restorations',
            ],
            image: '/assets/services/Emergency-Dentistry/emergency-1.jpg',
            imageAlt: 'Woman with mouth pain requiring emergency dental care in Austin.',
          },
          {
            title: 'Should I visit the ER or a local dental office?',
            body: [
              'We recommend visiting an emergency dentist for dental emergencies whenever possible. Dental offices provide specialized care and focused treatment tailored to dental issues.',
              'Unlike emergency rooms, our practice prioritizes dental emergencies and provides comprehensive solutions to address your family needs promptly and effectively.',
              'If you also have urgent injuries that require immediate medical attention, visiting the ER first may be best. If you are not sure what to do, call us and we can guide you.',
            ],
            image: '/assets/services/Emergency-Dentistry/emergency-2.jpg',
            imageAlt: 'Smiling patient at emergency dentist after treatment.',
          },
          {
            title: 'Are emergency dental visits expensive?',
            body: [
              'Patients are sometimes hesitant to seek emergency dental care due to cost concerns. Prompt treatment is important because earlier visits often mean more treatment options.',
              'Our office is insurance-friendly, and we also accept CareCredit payment plans, which can divide costs into manageable monthly payments.',
              'For questions and additional information about financing your care, please get in touch with our friendly front office team.',
            ],
            image: '/assets/services/Emergency-Dentistry/emergency-3.jpg',
            imageAlt: 'Patient with mouth pain receiving emergency care guidance.',
          },
        ]}
        bottomTitle="Need urgent dental care right now?"
        bottomBody="Call Dental Smiles at 512.467.9955 and our team will help you get same-day emergency support."
      />
    </>
  );
}
