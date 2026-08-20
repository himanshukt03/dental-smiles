import Script from 'next/script';

export const SITE_URL = 'https://dental-smiles.vercel.app';
export const PRACTICE_NAME = 'Dental Smiles';
export const PHONE_NUMBER = '+15124679955';
export const FORMATTED_PHONE = '(512) 467-9955';

/**
 * Main Dentist & LocalBusiness JSON-LD Schema
 */
export function DentistSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalBusiness', 'LocalBusiness'],
    '@id': `${SITE_URL}/#dentist`,
    name: PRACTICE_NAME,
    legalName: 'Dental Smiles Family and Cosmetic Dentistry',
    alternateName: 'Dental Smiles Austin',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/DentalSmilesLogo.webp`,
    image: `${SITE_URL}/assets/dental-team.webp`,
    description:
      'Dental Smiles is a trusted family and cosmetic dental practice in Austin, TX led by Dr. Divya Shetty. Providing gentle, technology-driven general, cosmetic, restorative, and sedation dentistry.',
    telephone: PHONE_NUMBER,
    email: 'info@dentalsmiles.com',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Visa, MasterCard, Discover, American Express, CareCredit, Sunbit, PPO Dental Insurance',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1201 Barbara Jordan Blvd Suite 1435',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78723',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.2988,
      longitude: -97.7058,
    },
    hasMap: 'https://maps.google.com/?q=1201+Barbara+Jordan+Blvd+Suite+1435+Austin+TX+78723',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday'],
        opens: '08:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday'],
        opens: '07:00',
        closes: '15:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday'],
        opens: '08:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Thursday'],
        opens: '07:00',
        closes: '15:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday'],
        opens: '07:00',
        closes: '13:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Austin',
        sameAs: 'https://en.wikipedia.org/wiki/Austin,_Texas',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Mueller, Austin, TX',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Hyde Park, Austin, TX',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'North Loop, Austin, TX',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Central Austin, TX',
      },
    ],
    founder: {
      '@type': 'Person',
      name: 'Dr. Divya Shetty',
      jobTitle: 'Lead Dentist & Practice Owner',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'DDS',
      image: `${SITE_URL}/assets/team/dr-divya-shetty.webp`,
    },
    employee: [
      {
        '@type': 'Person',
        name: 'Dr. Divya Shetty',
        jobTitle: 'Lead Dentist',
        honorificPrefix: 'Dr.',
        honorificSuffix: 'DDS',
      },
      {
        '@type': 'Person',
        name: 'Dr. Anna Okulist',
        jobTitle: 'Associate Dentist',
        honorificPrefix: 'Dr.',
        honorificSuffix: 'DDS',
      },
    ],
    medicalSpecialty: [
      'Dentistry',
      'Cosmetic Dentistry',
      'Restorative Dentistry',
      'Pediatric Dentistry',
      'Sedation Dentistry',
      'Preventive Dentistry',
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Preventive & General Dentistry',
        description: 'Comprehensive dental exams, cleanings, nightguards, sealants, and digital X-rays.',
        url: `${SITE_URL}/services/general-dentistry`,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Restorative Dentistry & CEREC Same-Day Crowns',
        description: 'Single-visit CEREC dental crowns, tooth-colored fillings, bridges, and implant restorations.',
        url: `${SITE_URL}/services/restorative-dentistry`,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Cosmetic Dentistry',
        description: 'Professional in-office teeth whitening and custom porcelain veneers.',
        url: `${SITE_URL}/services/cosmetic-dentistry`,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Emergency Dentistry',
        description: 'Same-day emergency dental appointments for tooth pain, broken teeth, and dental trauma.',
        url: `${SITE_URL}/services/emergency-dentistry`,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Sedation Dentistry',
        description: 'Safe nitrous oxide and oral conscious sedation for relaxed, anxiety-free dental visits.',
        url: `${SITE_URL}/services/dental-sedation`,
      },
    ],
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com',
      'https://www.yelp.com',
    ],
  };

  return (
    <Script
      id="schema-dentist-main"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQPage Schema for Google Rich Results
 */
export function FaqSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <Script
      id={`schema-faq-${faqs[0].q.slice(0, 15).replace(/\s+/g, '-').toLowerCase()}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList Schema for Google Search Breadcrumbs
 */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
      })),
    ],
  };

  return (
    <Script
      id="schema-breadcrumbs"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * MedicalProcedure / Service Schema for Individual Service Pages
 */
export function ServiceSchema({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    ...(image && { image: image.startsWith('http') ? image : `${SITE_URL}${image}` }),
    provider: {
      '@type': 'Dentist',
      name: PRACTICE_NAME,
      url: SITE_URL,
      telephone: PHONE_NUMBER,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1201 Barbara Jordan Blvd Suite 1435',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        postalCode: '78723',
        addressCountry: 'US',
      },
    },
  };

  return (
    <Script
      id={`schema-service-${name.replace(/\s+/g, '-').toLowerCase()}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Blog Article Schema for Rich Articles / News Search
 */
export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  author,
  image,
  category,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  author: string;
  image: string;
  category?: string;
}) {
  const fullUrl = `${SITE_URL}/blog/${slug}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    headline: title,
    description,
    image: [fullImageUrl],
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Dentist',
      name: PRACTICE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/DentalSmilesLogo.webp`,
      },
    },
    ...(category && { articleSection: category }),
  };

  return (
    <Script
      id={`schema-article-${slug}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
