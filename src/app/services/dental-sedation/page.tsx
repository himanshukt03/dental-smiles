import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Sedation Dentistry Austin, TX | Nitrous Oxide & Oral Sedation',
  description:
    'Experience stress-free, anxiety-free dental care in Austin, TX with nitrous oxide laughing gas and oral conscious sedation at Dental Smiles. Gentle dentistry for sensitive patients.',
  keywords: [
    'sedation dentistry Austin',
    'nitrous oxide Austin TX',
    'oral conscious sedation Austin',
    'anxiety free dentist Austin',
    'sleep dentistry Austin',
  ],
  alternates: {
    canonical: 'https://dental-smiles.vercel.app/services/dental-sedation',
  },
  openGraph: {
    title: 'Sedation Dentistry in Austin, TX | Dental Smiles',
    description:
      'Gentle, comfort-focused dental sedation options for relaxed, anxiety-free appointments in Austin, TX.',
    url: 'https://dental-smiles.vercel.app/services/dental-sedation',
    type: 'website',
    images: [
      {
        url: '/assets/services/Dental-Sedation/sedation-dentistry.jpg',
        width: 1200,
        height: 630,
        alt: 'Sedation Dentistry in Austin TX - Dental Smiles',
      },
    ],
  },
};

export default function DentalSedationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Dental Sedation', url: '/services/dental-sedation' },
        ]}
      />
      <ServiceSchema
        name="Sedation Dentistry"
        description="Safe nitrous oxide laughing gas and oral conscious dental sedation for relaxed, pain-free dental care in Austin, TX."
        url="/services/dental-sedation"
        image="/assets/services/Dental-Sedation/sedation-dentistry.jpg"
      />
      <ServicePageTemplate
        badge="Sedation Dentistry in Austin, TX"
        title="Comfort-focused sedation options for stress-free care."
        heroImage="/assets/services/Dental-Sedation/sedation-dentistry.jpg"
        heroImageAlt="Sedation dentistry visit at Dental Smiles."
        heroImageClassName="object-top scale-[1.12]"
        intro={[
          'At Dental Smiles, we understand that dental visits, even routine ones, can be stressful for some patients.',
          'That is why we offer safe and effective sedation dentistry options to help you feel relaxed and comfortable during your appointments.',
          'Our goal is to ensure you receive the care you need in a calm, stress-free environment. Contact us today to learn more and schedule your next visit.',
        ]}
        sections={[
          {
            title: 'What are my options for dental sedation?',
            body: [
              'Nitrous Oxide: Nitrous oxide, or laughing gas, is an odorless gas administered through a small nasal mask during treatment. It works quickly and wears off shortly after the procedure, allowing you to resume normal activities the same day.',
              'Oral Conscious Sedation: Oral conscious sedation involves taking a prescribed medication before your appointment to help you feel calm and comfortable. It provides a deeper level of relaxation than nitrous oxide while keeping you awake and responsive.',
            ],
            image: '/assets/services/Dental-Sedation/sedation-2.jpg',
            imageAlt: 'Smiling woman at the dentist under comfortable care.',
          },
          {
            title: 'Are there any side effects with nitrous oxide or oral conscious sedation?',
            body: [
              'Side effects that accompany dental sedation are typically mild and dissipate quickly.',
              'Nitrous oxide usually does not come with major side effects, though some patients may experience slight nausea, headache, or dizziness.',
              'Oral conscious sedation may cause temporary drowsiness, dry mouth, or mild amnesia of the procedure. Our team reviews your medical history to minimize risks and ensure a smooth experience.',
            ],
            image: '/assets/services/Dental-Sedation/sedation-3.jpg',
            imageAlt: 'Dentist working on patient during sedation care.',
          },
          {
            title: 'Can I drive myself home after receiving sedation?',
            body: [
              'After receiving nitrous oxide, patients can typically drive themselves home since effects wear off quickly after the mask is removed.',
              'If you receive oral conscious sedation, you will need someone to wait in our lobby and drive you home. The medication can impair coordination and decision-making for several hours after treatment.',
            ],
            image: '/assets/services/Dental-Sedation/sedation-4.jpg',
            imageAlt: 'Dentist working on patient in a calm treatment room.',
          },
        ]}
        bottomTitle="Need anxiety-friendly dental care?"
        bottomBody="Contact Dental Smiles to discuss sedation options and plan a comfortable, personalized visit."
      />
    </>
  );
}
