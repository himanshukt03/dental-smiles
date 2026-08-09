'use client';

import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export default function CerecPage() {
  return (
    <ServicePageTemplate
      badge="CEREC Same-Day Crowns in Austin, TX"
      title="Get quality same-day crowns at Dental Smiles."
      heroImage="/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png"
      heroImageAlt="CEREC same-day crown technology at Dental Smiles."
      intro={[
        'Do you have a broken, damaged, or decayed tooth that is causing you pain? A CEREC same-day crown can help resolve the situation in a single appointment.',
        'Our custom-crafted crowns are made in the office, allowing Dr. Shetty to scan, design, mill, and deliver a crown much faster with our CEREC system.',
        'Life is busy enough. A tooth restoration to repair and enjoy your smile should not be stressful or time-consuming. Contact our office today to learn more about our dental crowns in Austin, TX.',
      ]}
      sections={[
        {
          title: 'Do I need a dental crown?',
          body: [
            'Patients with recently damaged teeth or an infection treated with root canal therapy may benefit from a dental crown.',
            'Dental crowns can help improve your smile appearance and restore a tooth functionality. Before recommending a dental crown, we assess your oral and overall health to confirm candidacy. If you are eligible, we can proceed with the same-day crown process.',
          ],
          image: '/assets/services/Restorative-Dentistry/cosmetic-2.jpg',
          imageAlt: 'Smiling man after restorative dental treatment.',
        },
        {
          title: 'Benefits of CEREC Crowns',
          body: ['CEREC crowns are just as effective as traditional crowns with several added benefits.'],
          bullets: [
            'Fast: designed, milled, and placed in just one visit.',
            'Strong: high quality, long-lasting, and functions like natural teeth.',
            'Custom: matched to your surrounding natural teeth.',
          ],
          image: '/assets/services/Restorative-Dentistry/cosmetic-3.jpg',
          imageAlt: 'Illustration of a dental crown.',
        },
        {
          title: 'What is the same-day crown procedure?',
          body: [
            'After an exam and consultation, we can quickly make your restoration with CEREC technology.',
            'First, a member of our team takes highly accurate digital scans of the tooth receiving the crown. With these scans, we create a model of your teeth for our in-house milling machine to fabricate a secure-fitting crown.',
            'After scanning and fabrication, our team secures your same-day crown, checks for proper bite and fit, and you are ready to use your tooth again.',
          ],
          image: '/assets/services/Restorative-Dentistry/teeth-whiting.jpg',
          imageAlt: 'Smiling woman after same-day crown procedure.',
        },
      ]}
      bottomTitle="Need a same-day crown in Austin?"
      bottomBody="Contact Dental Smiles to schedule your evaluation and get the restorative care you need in one convenient visit."
    />
  );
}
