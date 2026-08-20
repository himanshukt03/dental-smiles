import type { Metadata } from 'next';
import GeneralDentistryContent, { GENERAL_FAQS } from '@/components/services/GeneralDentistryContent';
import { BreadcrumbSchema, FaqSchema, ServiceSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'General Dentistry in Austin, TX | Dental Cleanings, Nightguards & Exams',
  description:
    'Comprehensive preventive and general dentistry in Austin, TX with Dr. Divya Shetty. Services include dental cleanings, custom nightguards, sealants, laser gum therapy & exams.',
  keywords: [
    'general dentistry Austin',
    'dental cleanings Austin TX',
    'nightguards Austin',
    'athletic mouthguards Austin',
    'laser gum therapy Austin',
    'preventive dental care Austin',
    'TMJ treatment Austin',
  ],
  alternates: {
    canonical: 'https://dental-smiles.vercel.app/services/general-dentistry',
  },
  openGraph: {
    title: 'General Dentistry in Austin, TX | Dental Smiles',
    description:
      'Preventive dental cleanings, exams, nightguards, sealants & laser gum therapy in Austin, TX.',
    url: 'https://dental-smiles.vercel.app/services/general-dentistry',
    type: 'website',
    images: [
      {
        url: '/assets/services/general-dentistry/General-Dentistry.jpg',
        width: 1200,
        height: 630,
        alt: 'General Dentistry Care at Dental Smiles Austin',
      },
    ],
  },
};

export default function GeneralDentistryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Services', url: '/services' },
          { name: 'General Dentistry', url: '/services/general-dentistry' },
        ]}
      />
      <ServiceSchema
        name="General & Preventive Dentistry"
        description="Comprehensive dental cleanings, exams, custom mouthguards, nightguards, fluoride, sealants, and laser gum therapy in Austin, TX."
        url="/services/general-dentistry"
        image="/assets/services/general-dentistry/General-Dentistry.jpg"
      />
      <FaqSchema faqs={GENERAL_FAQS} />
      <GeneralDentistryContent />
    </>
  );
}
