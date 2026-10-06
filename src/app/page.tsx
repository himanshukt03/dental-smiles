import type { Metadata } from 'next';
import HomeContent from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title: 'Dentist in Mueller, Austin TX | Family & Cosmetic Dentistry | Dental Smiles',
  description:
    'Dental Smiles is a premier dental practice in Mueller, Austin TX (78723) led by Dr. Divya Shetty. We offer gentle family dentistry, CEREC same-day crowns, cosmetic whitening, implants & sedation.',
  keywords: [
    'Mueller dentist Austin',
    'dentist in Mueller Austin TX',
    "dental clinic in Mueller",
    'dentist near me Mueller Austin',
    'family dentistry Mueller 78723',
    'cosmetic dentistry Mueller Austin TX',
    'CEREC same day crowns Mueller Austin',
    'dental implants Mueller 78723',
    'emergency dentist Mueller Austin',
    'Dr. Divya Shetty',
    'Dental Smiles Mueller Austin',
    'Hyde Park dental Austin',
  ],
  alternates: {
    canonical: 'https://dental-smiles.vercel.app',
  },
  openGraph: {
    title: 'Dentist in Mueller, Austin TX | Family & Cosmetic Dentistry | Dental Smiles',
    description:
      'Compassionate, technology-driven family and cosmetic dental care in Mueller, Austin TX. Book your appointment today with Dr. Divya Shetty.',
    url: 'https://dental-smiles.vercel.app',
    siteName: 'Dental Smiles Mueller Austin',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/dental-team.webp',
        width: 1200,
        height: 630,
        alt: 'Dental Smiles - Compassionate Mueller Austin Dentistry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentist in Mueller, Austin TX | Family & Cosmetic Dentistry | Dental Smiles',
    description:
      'Compassionate, technology-driven family and cosmetic dental care in Mueller, Austin, TX. Book your appointment today.',
    images: ['/assets/dental-team.webp'],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
