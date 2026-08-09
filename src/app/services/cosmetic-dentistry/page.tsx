'use client';

import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export default function CosmeticDentistryPage() {
  return (
    <ServicePageTemplate
      badge="Cosmetic Dentistry in Austin, TX"
      title="Custom cosmetic dentistry to help your smile shine."
      heroImage="/assets/services/Cosmetic-Dentistry/Cosmetic-Dentist.jpg"
      heroImageAlt="Cosmetic dentistry consultation at Dental Smiles."
      intro={[
        'Your smile is one of your most valuable features, and custom cosmetic dentistry can help it shine brighter than ever.',
        'At Dental Smiles, we offer cosmetic dental treatments designed to meet your specific cosmetic goals and help you attain a smile that you love showing off.',
        'Whether you are looking to whiten your smile, correct imperfections, or completely transform your look, our skilled Austin  team is here to provide personalized care. Contact us today.',
      ]}
      sections={[
        {
          title: 'Professional Teeth Whitening',
          body: [
            'Teeth whitening is a cosmetic procedure that whitens and brightens teeth, restoring their natural shine.',
            'Professional teeth whitening treatments offer a safe and effective way to remove stains and discoloration caused by coffee, tea, tobacco, or aging.',
            'We offer both in-office whitening for fast results and custom take-home whitening kits for your convenience. With our tailored approach, we help you achieve your desired level of brightness while protecting enamel.',
          ],
          image: '/assets/services/Cosmetic-Dentistry/professional-teeth.jpg',
          imageAlt: 'Professional teeth whitening treatment.',
        },
        {
          title: 'Porcelain Veneers',
          body: [
            'Veneers are thin, custom-made shells crafted from porcelain that adhere to the front surface of your teeth.',
            'They can restore a single front tooth that looks out of place or enhance all the teeth that show when you smile for a full cosmetic makeover.',
            'They are an excellent solution for discoloration, chips, gaps, or uneven teeth. Each veneer is designed to match your natural teeth for a seamless, beautiful smile.',
          ],
          image: '/assets/services/Cosmetic-Dentistry/restorative1.jpg',
          imageAlt: 'Woman at the dentist discussing veneers.',
        },
        {
          title: 'Should I get porcelain veneers or professional teeth whitening?',
          body: [
            'The choice depends on your goals and dental needs. Teeth whitening is ideal for removing stains and brightening your natural teeth with a quick, cost-effective approach.',
            'Porcelain veneers are better when addressing multiple cosmetic concerns like discoloration, chips, or gaps, and can completely transform your smile. Veneers are more durable and long-lasting but require a higher investment.',
            'Want to learn more about our cosmetic options? Schedule a cosmetic consultation with our Austin dental team today.',
          ],
          image: '/assets/services/Cosmetic-Dentistry/restorative2.jpg',
          imageAlt: 'Smiling man reviewing cosmetic dentistry options.',
        },
      ]}
      bottomTitle="Ready to upgrade your smile?"
      bottomBody="Contact Dental Smiles to schedule a cosmetic consultation and get a personalized treatment plan in Austin, TX."
    />
  );
}
