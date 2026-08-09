'use client';

import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export default function EmergencyDentistryPage() {
  return (
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
          imageAlt: 'Woman with mouth pain requiring emergency dental care.',
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
  );
}
