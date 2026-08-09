'use client';

import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export default function RestorativeDentistryPage() {
  return (
    <ServicePageTemplate
      badge="Restorative Dentistry in Austin, TX"
      title="Restorative Dental Care in Austin, TX"
      heroImage="/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png"
      heroImageAlt="Restorative dental care at Dental Smiles in Austin."
      heroImageClassName="object-top scale-[1.14]"
      sectionImageClassName="object-top scale-[1.08]"
      intro={[
        'Scheduling restorative services as needed is an important part of maintaining a healthy and beautiful smile.',
        'Dental Smiles offers a wide range of restorative treatments—from same-day crowns and simple fillings to implants, dentures, and surgical care—for patients in Mueller, Hyde Park, North Loop, and surrounding Austin neighborhoods.',
        'To learn more about our service options or schedule your next visit, please give us a call, and we would be happy to assist you.',
      ]}
      sections={[
        {
          title: 'Same-Day Restorations & Dental Fillings',
          body: [
            'Advanced technology and tooth-colored materials allow us to restore damaged or decayed teeth quickly, comfortably, and seamlessly.',
          ],
          image: '/assets/services/Restorative-Dentistry/cosmetic-2.jpg',
          imageAlt: 'CEREC same-day crown and restorative treatment.',
          subItems: [
            {
              id: 'cerec-details',
              title: 'CEREC Same-Day Crowns',
              badge: 'Popular • Single Visit',
              body: [
                'CEREC dental crowns offer a fast, highly durable, and convenient solution for repairing damaged, cracked, or root-canal treated teeth in just one single appointment.',
                'Using advanced digital CAD/CAM technology, Dr. Shetty scans, designs, mills, and places custom ceramic crowns in our office—eliminating messy impressions, temporary crowns, and multiple visits.',
              ],
              expandable: {
                triggerLabel: 'View CEREC Details & Process',
                closeLabel: 'Hide CEREC Details',
                details: [
                  {
                    title: 'Do I Need a CEREC Dental Crown?',
                    body: [
                      'Patients with recently broken or cracked teeth, severe decay, large failing fillings, or teeth recently treated with root canal therapy benefit greatly from a dental crown.',
                      'Before proceeding, Dr. Shetty performs a thorough evaluation to confirm candidacy for same-day placement.',
                    ],
                  },
                  {
                    title: 'Key Benefits of CEREC Crowns',
                    bullets: [
                      'Single-Visit Convenience: Designed, milled, and permanently placed in just one visit.',
                      'High-Strength Ceramic: Long-lasting, durable, and functions like your natural enamel.',
                      'Custom Color Match: Precisely shaded to blend seamlessly with surrounding natural teeth.',
                      'No Temporary Crowns: Saves time and eliminates uncomfortable temporary restorations.',
                    ],
                  },
                  {
                    title: '3-Step Same-Day Procedure',
                    bullets: [
                      '1. Digital Scanning: We take highly accurate 3D optical scans of your tooth—no messy impression materials required.',
                      '2. In-House Milling: Our computerized CAD/CAM machine fabricates your custom ceramic crown right in our office while you relax.',
                      '3. Permanent Placement: Dr. Shetty securely bonds the crown, verifies exact bite fit and alignment, and you walk out with a fully restored tooth.',
                    ],
                  },
                ],
              },
            },
            {
              title: 'Dental Fillings',
              body: [
                'Dental fillings repair teeth damaged by cavities or minor fractures, restoring full function and stopping further decay.',
                'We use durable, color-matched composite resin materials that bond directly to your natural tooth for an invisible, long-lasting restoration.',
              ],
            },
          ],
        },
        {
          title: 'Tooth Replacement Solutions & Prosthetics',
          body: [
            'Missing teeth can affect your ability to chew, speak, and smile with confidence. We offer permanent and removable solutions tailored to your needs.',
          ],
          image: '/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png',
          imageAlt: 'Restorative dental implant and prosthetic options.',
          subItems: [
            {
              title: 'Dental Implants',
              body: [
                'Dental implants provide a permanent replacement for missing teeth. A titanium post is surgically placed in the jawbone to act as an artificial root, topped with a custom crown, bridge, or denture.',
                'Implants preserve jawbone density, prevent adjacent teeth from shifting, and function just like natural teeth.',
              ],
            },
            {
              title: 'Dental Bridges',
              body: [
                'Dental bridges replace one or more missing teeth by anchoring a strong artificial tooth between adjacent natural teeth or implants.',
                'Bridges restore bite function, preserve facial structure, and keep remaining teeth properly aligned.',
              ],
            },
            {
              title: 'Full & Partial Dentures',
              body: [
                'Custom full and partial dentures restore aesthetics and oral function for patients missing multiple or all teeth in an arch.',
                'Modern dentures are lightweight, comfortable, custom-fitted, and designed for a natural appearance.',
              ],
            },
          ],
        },
        {
          title: 'Endodontics & Oral Surgery',
          body: [
            'From preserving infected teeth with root canals to performing specialized extractions and bone grafting, our team handles complex restorative procedures in-house.',
          ],
          image: '/assets/services/Restorative-Dentistry/teeth-whiting.jpg',
          imageAlt: 'Surgical and endodontic dental procedure equipment.',
          subItems: [
            {
              title: 'Root Canal Therapy',
              body: [
                'Root canal therapy saves severely decayed or infected teeth that would otherwise require extraction. We remove infected nerve pulp, disinfect the canals, and seal the tooth securely.',
                'Root canals relieve tooth pain instantly and preserve your natural tooth structure for years to come.',
              ],
            },
            {
              title: 'Dental Extractions',
              body: [
                'When a tooth is damaged beyond repair due to trauma or deep decay, gentle simple or surgical extractions prevent infection from spreading to surrounding teeth.',
              ],
            },
            {
              title: 'Oral Surgery & Bone Grafting',
              body: [
                'We offer specialized in-house oral surgery options, including bone graft procedures to restore jawbone volume for implants and third molar (wisdom teeth) extractions.',
              ],
            },
          ],
        },
      ]}
      bottomTitle="Have a question about our restorative services?"
      bottomBody="Have a question about our restorative services? Ready to schedule your next visit? Please contact us."
    />
  );
}
