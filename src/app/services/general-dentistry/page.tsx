import type { Metadata } from 'next';
import GeneralDentistryContent, { GENERAL_FAQS } from '@/components/services/GeneralDentistryContent';
import { BreadcrumbSchema, FaqSchema, ServiceSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'General Dentistry in Mueller, Austin TX | Dental Cleanings & Exams',
  description:
    'Comprehensive preventive and general dentistry in Mueller, Austin, TX (78723) with Dr. Divya Shetty. Services include dental cleanings, custom nightguards, sealants & exams.',
  keywords: [
    'general dentistry Mueller Austin',
    'dental cleanings Mueller Austin TX',
    'dentist 78723 cleanings',
    'nightguards Mueller Austin',
    'athletic mouthguards Mueller',
    'preventive dental care Mueller',
    'TMJ treatment Mueller Austin',
  ],
  alternates: {
    canonical: 'https://dental-smiles.vercel.app/services/general-dentistry',
  },
  openGraph: {
    title: 'General Dentistry in Mueller, Austin TX | Dental Smiles',
    description:
      'Preventive dental cleanings, exams, nightguards, sealants & laser gum therapy in Mueller, Austin, TX.',
    url: 'https://dental-smiles.vercel.app/services/general-dentistry',
    type: 'website',
    images: [
      {
        url: '/assets/services/general-dentistry/General-Dentistry.jpg',
        width: 1200,
        height: 630,
        alt: 'General Dentistry Care at Dental Smiles Mueller Austin',
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
        description="Comprehensive dental cleanings, exams, custom mouthguards, nightguards, fluoride, sealants, and laser gum therapy in Mueller, Austin, TX (78723)."
        url="/services/general-dentistry"
        image="/assets/services/general-dentistry/General-Dentistry.jpg"
      />
      <FaqSchema faqs={GENERAL_FAQS} />
      <GeneralDentistryContent />
    </>
  );
}
