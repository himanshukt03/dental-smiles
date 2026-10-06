import type { Metadata } from 'next';
import RestorativeDentistryContent, { RESTORATIVE_FAQS } from '@/components/services/RestorativeDentistryContent';
import { BreadcrumbSchema, FaqSchema, ServiceSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Restorative Dentistry Mueller, Austin TX | CEREC Same-Day Crowns & Implants',
  description:
    'Restore damaged or missing teeth in Mueller, Austin, TX (78723) with CEREC 1-visit same-day crowns, permanent dental implants, composite fillings & bridges.',
  keywords: [
    'restorative dentistry Mueller Austin',
    'CEREC same day crowns Mueller Austin',
    'dental implants Mueller 78723',
    'tooth colored fillings Mueller',
    'dental bridges Mueller Austin TX',
    'root canal therapy Mueller',
    'dentures Mueller Austin',
  ],
  alternates: {
    canonical: 'https://dental-smiles.vercel.app/services/restorative-dentistry',
  },
  openGraph: {
    title: 'Restorative Dentistry in Mueller, Austin TX | Dental Smiles',
    description:
      'CEREC single-visit crowns, permanent dental implants, tooth-colored fillings, and restorative care in Mueller, Austin, TX.',
    url: 'https://dental-smiles.vercel.app/services/restorative-dentistry',
    type: 'website',
    images: [
      {
        url: '/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png',
        width: 1200,
        height: 630,
        alt: 'Restorative Dental Procedures at Dental Smiles Mueller Austin',
      },
    ],
  },
};

export default function RestorativeDentistryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Restorative Dentistry', url: '/services/restorative-dentistry' },
        ]}
      />
      <ServiceSchema
        name="Restorative Dentistry & CEREC Same-Day Crowns"
        description="Single-visit CEREC dental crowns, titanium dental implants, aesthetic fillings, bridges, dentures, and gentle root canals in Mueller, Austin, TX (78723)."
        url="/services/restorative-dentistry"
        image="/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png"
      />
      <FaqSchema faqs={RESTORATIVE_FAQS} />
      <RestorativeDentistryContent />
    </>
  );
}
