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
        "Restore your smile's strength, function, and natural beauty in one convenient office.",
        'Dental Smiles provides comprehensive restorative treatments—from same-day crowns and tooth-colored fillings to implants, dentures, and surgical care—for patients in Mueller, Hyde Park, North Loop, and Central Austin.',
      ]}
      sections={[
        {
          title: 'Same-Day Restorations & Fillings',
          body: [
            'Quickly repair damaged or decayed teeth using advanced digital tech and tooth-colored materials.',
          ],
          image: '/assets/services/Restorative-Dentistry/cosmetic-2.jpg',
          imageAlt: 'CEREC same-day crown and restorative treatment.',
          subItems: [
            {
              id: 'cerec-details',
              title: 'CEREC Same-Day Crowns',
              badge: 'Single Visit • In-House',
              body: [
                'Get custom ceramic crowns scanned, designed, milled, and placed in a single appointment—no temporary crowns or follow-up visits needed.',
              ],
              expandable: {
                triggerLabel: 'View CEREC Details & 3-Step Process',
                closeLabel: 'Hide CEREC Details',
                details: [
                  {
                    title: 'When Do You Need a CEREC Crown?',
                    body: [
                      'Ideal for cracked or broken teeth, deep decay, large failing fillings, or teeth recently treated with root canal therapy.',
                    ],
                  },
                  {
                    title: 'Key Patient Benefits',
                    bullets: [
                      '1-Visit Convenience: Completed in just one appointment.',
                      'High-Strength Ceramic: Natural look, feel, and durability.',
                      'Custom Color Match: Blends seamlessly with your smile.',
                      'No Temporary Crowns or Goopy Impression Trays',
                    ],
                  },
                  {
                    title: 'Quick 3-Step Same-Day Process',
                    bullets: [
                      '1. 3D Digital Scan: Fast, clean optical scanning of your tooth.',
                      '2. In-House Milling: Custom ceramic crown crafted while you wait.',
                      '3. Permanent Placement: Precise bonding and instant bite check.',
                    ],
                  },
                ],
              },
            },
            {
              title: 'Dental Fillings',
              body: [
                'Color-matched composite resin fillings that repair cavities and minor fractures while preserving natural tooth structure.',
              ],
            },
          ],
        },
        {
          title: 'Tooth Replacement Solutions',
          body: [
            'Replace missing teeth with comfortable, natural-looking permanent or removable options.',
          ],
          image: '/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png',
          imageAlt: 'Restorative dental implant and prosthetic options.',
          subItems: [
            {
              title: 'Dental Implants',
              body: [
                'Permanent titanium posts acting as artificial roots to restore full bite strength and preserve jawbone density.',
              ],
            },
            {
              title: 'Dental Bridges',
              body: [
                'Fixed restorations anchored to adjacent teeth to bridge gaps, restore chewing, and keep surrounding teeth aligned.',
              ],
            },
            {
              title: 'Full & Partial Dentures',
              body: [
                'Custom, lightweight removable dentures engineered for optimal fit, speech clarity, and a natural appearance.',
              ],
            },
          ],
        },
        {
          title: 'Endodontics & Oral Surgery',
          body: [
            'In-house specialty care to relieve pain, save infected teeth, and perform safe extractions.',
          ],
          image: '/assets/services/Restorative-Dentistry/teeth-whiting.jpg',
          imageAlt: 'Surgical and endodontic dental procedure equipment.',
          subItems: [
            {
              title: 'Root Canal Therapy',
              body: [
                'Relieves severe tooth pain and saves infected teeth by disinfecting and sealing root canals, avoiding extraction.',
              ],
            },
            {
              title: 'Dental Extractions',
              body: [
                'Gentle removal of damaged, severely decayed, or overcrowded teeth to protect overall oral health.',
              ],
            },
            {
              title: 'Oral Surgery & Bone Grafting',
              body: [
                'Specialized procedures including wisdom teeth removals and bone grafting to build jaw volume for implants.',
              ],
            },
          ],
        },
      ]}
      bottomTitle="Ready to restore your smile?"
      bottomBody="Contact Dental Smiles today to schedule your consultation and get personalized restorative care in Austin, TX."
    />
  );
}
