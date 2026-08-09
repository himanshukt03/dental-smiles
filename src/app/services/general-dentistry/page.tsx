'use client';

import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export default function GeneralDentistryPage() {
  return (
    <ServicePageTemplate
      badge="General Dentistry in Austin, TX"
      title="Comprehensive preventive care for your family's smile."
      heroImage="/assets/services/general-dentistry/General-Dentistry.jpg"
      heroImageAlt="General dentistry care at Dental Smiles Austin."
      intro={[
        'Preventive dentistry is the foundation of a healthy, lifelong smile. At Dental Smiles, we provide gentle cleanings, thorough exams, and custom protective therapies.',
        'From athletic mouthguards and custom nightguards to fluoride varnishes, sealants, and oral cancer screenings, our team ensures every member of your family receives personalized, compassionate care.',
      ]}
      sections={[
        {
          title: 'Athletic Mouthguards & Nightguards for Bruxism',
          body: [
            'Custom-fit athletic mouthguards protect your teeth, lips, and jaw from impacts during sports activities without compromising breathing or speech.',
            'Nightguards offer comfortable overnight protection against clenching and teeth grinding (bruxism), preventing enamel wear, tooth fractures, and morning jaw soreness.',
            'Each appliance is custom-crafted from impressions taken in our office for precise comfort and durability.',
          ],
          image: '/assets/services/general-dentistry/night-guards.jpg',
          imageAlt: 'Custom nightguards for bruxism protection.',
        },
        {
          title: 'Fluoride Treatments & Dental Sealants',
          body: [
            'Concentrated fluoride varnish applications remineralize tooth enamel, making teeth significantly more resistant to acid erosion and decay.',
            'Dental sealants provide a thin, invisible protective barrier over deep molar grooves, sealing out food particles and cavity-causing bacteria for children and adults.',
            'Both treatments are quick, completely painless, and offer long-lasting preventive protection.',
          ],
          image: '/assets/services/general-dentistry/fluoride.webp',
          imageAlt: 'Preventive fluoride and sealant application.',
        },
        {
          title: 'Oral Cancer Screenings & TMJ Therapy',
          body: [
            'Routine oral cancer screenings utilize enhanced visual and tactile examinations to detect early soft tissue changes when treatment is most effective.',
            'TMJ/TMD therapy offers targeted bite balancing, custom splints, and guided joint exercises to relieve chronic jaw pain, tension headaches, and clicking.',
            'We also provide specialized laser gum treatments and halitosis care to maintain healthy gum tissue and fresh breath.',
          ],
          image: '/assets/services/general-dentistry/Oral-Cancer-Screening.webp',
          imageAlt: 'Oral cancer screening and TMJ evaluation.',
        },
      ]}
      bottomTitle="Ready to schedule your preventive checkup?"
      bottomBody="Contact Dental Smiles today to schedule your general dentistry visit and maintain your optimal oral health in Austin, TX."
    />
  );
}
