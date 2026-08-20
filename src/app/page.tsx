import type { Metadata } from 'next';
import HomeContent from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title: 'Dentist in Austin, TX | Family & Cosmetic Dentistry | Dental Smiles',
  description:
    'Dental Smiles is a premier dental practice in Austin, TX led by Dr. Divya Shetty. We offer gentle family dentistry, CEREC same-day crowns, cosmetic whitening, implants & sedation.',
  keywords: [
    'Austin dentist',
    'dentist Austin TX',
    'family dentistry Austin',
    'cosmetic dentistry Austin TX',
    'CEREC same day crowns Austin',
    'dental implants Austin',
    'emergency dentist Austin',
    'Dr. Divya Shetty',
    'Dental Smiles Austin',
    'Mueller dentist Austin',
    'Hyde Park dental Austin',
  ],
  alternates: {
    canonical: 'https://dental-smiles.vercel.app',
  },
  openGraph: {
    title: 'Dentist in Austin, TX | Family & Cosmetic Dentistry | Dental Smiles',
    description:
      'Compassionate, technology-driven family and cosmetic dental care in Austin, TX. Book your appointment today with Dr. Divya Shetty.',
    url: 'https://dental-smiles.vercel.app',
    siteName: 'Dental Smiles',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/dental-team.webp',
        width: 1200,
        height: 630,
        alt: 'Dental Smiles - Compassionate Austin Dentistry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentist in Austin, TX | Family & Cosmetic Dentistry | Dental Smiles',
    description:
      'Compassionate, technology-driven family and cosmetic dental care in Austin, TX. Book your appointment today.',
    images: ['/assets/dental-team.webp'],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
