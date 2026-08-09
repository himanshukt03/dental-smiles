import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import DentalSmilesLogo from "@/assets/DentalSmilesLogo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "First Visit", path: "/first-visit" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "General Dentistry", path: "/services#general" },
    { name: "Cosmetic Dentistry", path: "/services#cosmetic" },
    { name: "Restorative Dentistry", path: "/services#restorative" },
    { name: "Emergency Care", path: "/services#emergency" },
  ];

  return (
    <footer className="bg-[#741234] text-white border-t border-white/10">
      <div className="w-full px-8 md:px-12 lg:px-24 mx-auto max-w-[1920px]">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12">
          {/* Practice Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-40 h-14 rounded-xl bg-white/95 p-2 flex items-center justify-center relative shadow-md">
                <Image
                  src={DentalSmilesLogo}
                  alt="Dental Smiles Logo"
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed text-sm">
              Providing exceptional dental care with a gentle touch. Our experienced team is committed to helping you achieve optimal oral health and a beautiful smile.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg font-bold text-white">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-white/80 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg font-bold text-white">Our Services</h3>
            <nav className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.path}
                  href={service.path}
                  className="block text-white/80 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg font-bold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/90 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  1201 Barbara Jordan Blvd Suite 1435, Austin, TX 78723<br />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/90 flex-shrink-0" />
                <a
                  href="tel:+15124679955"
                  className="text-white/80 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm"
                >
                  512.467.9955
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/90 flex-shrink-0" />
                <a
                  href="mailto:info@mydentalsmiles.com"
                  className="text-white/80 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm"
                >
                  info@mydentalsmiles.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-white/90 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <div>Mon/Wed: 8 am - 1 pm</div>
                  <div>Tue/Thur: 7 am - 3 pm</div>
                  <div>Friday: 7 am - 1 pm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map (New Column) */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg font-bold text-white">Location</h3>
            <div className="w-full h-36 rounded-xl overflow-hidden border border-white/20 shadow-md relative group">
              <iframe
                title="Dental Smiles Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.604617627467!2d-97.7082495!3d30.305315600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca061ab0364d%3A0xa1253d5b85da5cd3!2sDental%20Smiles!5e0!3m2!1sen!2sin!4v1774423801934!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <Link
                href="https://maps.app.goo.gl/x23YX9GCRDdyhyr56"
                target="_blank"
                className="absolute inset-0 z-10"
                aria-label="Open in Google Maps"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/x23YX9GCRDdyhyr56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-white hover:underline"
            >
              <MapPin className="mr-1.5 w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/15 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/70 text-sm">
            © {currentYear} Dental Smiles. All rights reserved.
          </div>
        </div>
      </div>

      {/* Structured Data for Local Business */}
      <Script id="schema-dentist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dental Smiles",
          "image": "https://dentalsmiles.com/dental-team.webp",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1201 Barbara Jordan Blvd Suite 1435",
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "postalCode": "78723",
            "addressCountry": "US"
          },
          "telephone": "+15124679955",
          "email": "info@dentalsmiles.com",
          "url": "https://dentalsmiles.com",
          "openingHours": [
            "Mo 08:00-13:00",
            "Tu 07:00-15:00",
            "We 08:00-13:00",
            "Th 07:00-15:00",
            "Fr 07:00-13:00"
          ],
          "priceRange": "$$"
        })}
      </Script>
    </footer>
  );
};

export default Footer;