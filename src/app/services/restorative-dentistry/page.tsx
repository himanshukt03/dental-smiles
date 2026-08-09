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
        'Dental Smiles offers a wide range of restorative treatments, from simple filling to surgical procedures, for patients in Mueller, Hyde Park, North Loop, and surrounding Austin neighborhoods.',
        'To learn more about our service options or schedule your next visit, please give us a call, and we would be happy to assist you.',
      ]}
      sections={[
        {
          title: 'Dental Bridges',
          body: [
            'Dental bridges are a common solution for replacing one or more missing teeth by anchoring a false tooth or teeth between two crowns placed on the adjacent natural teeth or implants.',
            'Bridges help restore the appearance and function of your smile, allowing you to chew and speak more comfortably. They also prevent remaining teeth from shifting out of place, which can lead to bite issues and further dental problems.',
          ],
          image: '/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png',
          imageAlt: 'Illustration of a dental bridge.',
        },
        {
          title: 'CEREC Same Day Crowns',
          body: [
            'CEREC dental crowns offer a convenient and efficient solution for patients needing a dental crown.',
            'Using advanced CAD/CAM technology, our office can create and place a custom crown in just one visit, eliminating the need for temporary crowns and multiple appointments. Made from high-quality ceramic, CEREC crowns are durable and designed to match the natural color of your teeth for a seamless and long-lasting restoration.',
          ],
          image: '/assets/services/Restorative-Dentistry/cosmetic-2.jpg',
          imageAlt: 'CEREC same-day crown technology in use.',
          cta: {
            label: 'More details',
            href: '/services/restorative-dentistry/cerec',
          },
        },
        {
          title: 'Full and Partial Dentures',
          body: [
            'Dentures are removable dental appliances designed to replace missing teeth and restore function and aesthetics to your smile.',
            'They come in two main types: full dentures, which replace all teeth in the upper or lower jaw, and partial dentures, which fill gaps left by missing teeth. Properly fitted dentures help with chewing and speaking and support facial structures, preventing the sunken appearance that can occur with tooth loss.',
          ],
          image: '/assets/services/Restorative-Dentistry/cosmetic-3.jpg',
          imageAlt: 'Person holding a set of dentures.',
        },
        {
          title: 'Root Canal Therapy',
          body: [
            'Root canal therapy is a dental procedure used to treat and save a tooth that is severely decayed or infected.',
            'During the procedure, the infected pulp is removed from the tooth\'s root canals, the area is cleaned and disinfected, and then the space is filled and sealed to prevent further infection. A crown is often placed over the tooth to restore its strength and function.',
            'Root canal therapy can relieve pain, preserve the natural tooth, and prevent the need for extraction.',
          ],
          image: '/assets/services/Restorative-Dentistry/teeth-whiting.jpg',
          imageAlt: 'Dental treatment light above a dental chair.',
        },
        {
          title: 'Dental Extractions',
          body: [
            'Dental extractions involve the removal of a tooth from its socket in the jawbone and are typically performed when a tooth is damaged beyond repair due to decay, trauma, or infection.',
            'Extractions can also be necessary for overcrowding, to make room for orthodontic treatment, or to remove impacted wisdom teeth. The procedure can be simple or surgical, depending on the tooth\'s condition and location.',
          ],
          image: '/assets/services/Restorative-Dentistry/Restorative-Dental-Procedures.png',
          imageAlt: 'Dental extraction treatment setup.',
        },
        {
          title: 'Dental Fillings',
          body: [
            'Dental fillings are used to repair teeth damaged by cavities or minor fractures, restoring their function and preventing further decay.',
            'The process involves removing the decayed portion of the tooth and filling the cavity with a durable material such as composite resin, amalgam, or porcelain. Composite fillings are popular for their natural appearance because they can be color-matched to the surrounding teeth.',
          ],
          image: '/assets/services/Restorative-Dentistry/cosmetic-2.jpg',
          imageAlt: 'Dental filling material and treatment tools.',
        },
        {
          title: 'Dental Implants',
          body: [
            'Dental implants are a permanent solution for replacing missing teeth, consisting of a titanium post surgically placed into the jawbone to act as an artificial tooth root.',
            'Once the implant integrates with the bone, a custom-made crown, bridge, or denture is attached, providing a natural-looking and stable replacement. Implants help preserve bone density, prevent neighboring teeth from shifting, and restore full function and aesthetics to your smile.',
          ],
          image: '/assets/services/Restorative-Dentistry/cosmetic-3.jpg',
          imageAlt: 'Dental implant model and consultation.',
        },
        {
          title: 'Oral Surgery',
          body: [
            'Oral surgery encompasses a range of procedures aimed at treating complex dental issues, and oral surgeons are specially trained to handle intricate procedures that require a high level of precision and care.',
            'Our practice offers bone graft procedures and wisdom teeth removals, which are two specialty options that not every Austin dental office provides. Whether you are repairing your jawbone health or need your third molars removed, our team is here to help.',
          ],
          image: '/assets/services/Restorative-Dentistry/teeth-whiting.jpg',
          imageAlt: 'Oral surgery consultation and treatment planning.',
        },
      ]}
      bottomTitle="Have a question about our restorative services?"
      bottomBody="Have a question about our restorative services? Ready to schedule your next visit? Please contact us."
    />
  );
}
