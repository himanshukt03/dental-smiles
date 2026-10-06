import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Mail, Facebook, Linkedin, Youtube } from "lucide-react";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

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

  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/dentalsmiles78723/",
      icon: Facebook,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/divyashetty/",
      icon: Linkedin,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/user/dshettydmd",
      icon: Youtube,
    },
    {
      name: "Email",
      url: "mailto:info@mydentalsmiles.com",
      icon: Mail,
    },
    {
      name: "Phone",
      url: "tel:5124679955",
      icon: Phone,
    },
  ];

  return (
    <footer className="bg-[#741234] text-white border-t border-white/10">
      <div className="w-full px-6 md:px-10 lg:px-16 mx-auto max-w-[1920px]">
        {/* Main Footer Content */}
        <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
          {/* Practice Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
              <div className="relative w-44 h-11">
                <Image
                  src="/assets/dental-smiles logo-white.png"
                  alt="Dental Smiles Logo"
                  fill
                  className="object-contain object-left"
                  sizes="180px"
                />
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed text-xs sm:text-sm">
              Providing exceptional dental care with a gentle touch. Our experienced team is committed to helping you achieve optimal oral health and a beautiful smile.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-1">
              {socials.map((s) => {
                const IconComponent = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target={s.url.startsWith("http") ? "_blank" : undefined}
                    rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    title={s.name}
                    aria-label={s.name}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-sm"
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3.5">
            <h3 className="font-heading text-base font-bold text-white tracking-wide border-b border-white/15 pb-1.5">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-white/85 hover:text-white hover:translate-x-1 transition-all text-xs sm:text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-3.5">
            <h3 className="font-heading text-base font-bold text-white tracking-wide border-b border-white/15 pb-1.5">
              Our Services
            </h3>
            <nav className="flex flex-col space-y-2">
              {services.map((service) => (
                <Link
                  key={service.path}
                  href={service.path}
                  className="block text-white/85 hover:text-white hover:translate-x-1 transition-all text-xs sm:text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3.5">
            <h3 className="font-heading text-base font-bold text-white tracking-wide border-b border-white/15 pb-1.5">
              Contact Info
            </h3>
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start space-x-2.5 group">
                <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-white/90 text-xs sm:text-sm leading-snug">
                  1201 Barbara Jordan Blvd Suite 1435, Austin, TX 78723
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2.5 group">
                <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <a
                  href="tel:+15124679955"
                  className="text-white/90 hover:text-white font-semibold text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                >
                  512.467.9955
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2.5 group">
                <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors shrink-0">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <ObfuscatedEmail className="text-white/90 hover:text-white font-medium text-xs sm:text-sm transition-colors truncate" />
              </div>

              {/* Timings - Clean & Unboxed */}
              <div className="flex items-start space-x-2.5 pt-0.5">
                <div className="p-1.5 rounded-lg bg-white/10 shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-white/90 text-xs sm:text-sm space-y-1">
                  <div><span className="font-bold text-white">Mon / Wed:</span> 8 am – 5 pm</div>
                  <div><span className="font-bold text-white">Tue / Thur:</span> 7 am – 3 pm</div>
                  <div><span className="font-bold text-white">Friday:</span> 7 am – 1 pm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div className="space-y-3.5">
            <h3 className="font-heading text-base font-bold text-white tracking-wide border-b border-white/15 pb-1.5">
              Location
            </h3>
            <div className="w-full h-32 rounded-xl overflow-hidden border border-white/20 shadow-md relative group">
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
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Open in Google Maps"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/x23YX9GCRDdyhyr56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center py-0.5 text-xs sm:text-sm font-medium text-white hover:underline"
            >
              <MapPin className="mr-1.5 w-3.5 h-3.5" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 border-t border-white/15 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="text-white/70 text-xs sm:text-sm">
            © {currentYear} Dental Smiles. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-xs sm:text-sm text-white/75 font-medium">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30" aria-hidden="true">•</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;