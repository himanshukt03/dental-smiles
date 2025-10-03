import Link from "next/link";
import Script from "next/script";
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";

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
    <footer className="bg-clinical-creme border-t border-border">
      <div className="container-clinical">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-bento flex items-center justify-center text-primary-foreground font-bold text-lg">
                DS
              </div>
              <div className="font-heading font-semibold text-xl text-foreground">
                Dental Smiles
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Providing exceptional dental care with a gentle touch. Our experienced team is committed to helping you achieve optimal oral health and a beautiful smile.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-card rounded-bento flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card rounded-bento flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card rounded-bento flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg text-foreground">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg text-foreground">Our Services</h3>
            <nav className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.path}
                  href={service.path}
                  className="block text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg text-foreground">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  1201 Barbara Jordan Blvd Suite 1435, Austin, TX 78723<br />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+15124679955" 
                  className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                >
                  512-467-9955
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>Monday: 8 am–5 pm</div>
                  <div>Tuesday: 7 am–3 pm</div>
                  <div>Wednesday: 8 am–5 pm</div>
                  <div>Thursday: 7 am–3 pm</div>
                  <div>Friday: 7 am–1 pm</div>
                  <div>Saturday: Closed</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Dental Smiles. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link 
              href="/privacy-policy" 
              className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-service" 
              className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              Terms of Service
            </Link>
            <Link 
              href="/accessibility" 
              className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>

      {/* Structured Data for Local Business */}
      <Script id="schema-dentist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dental Smiles",
          "image": "https://dentalsmiles.com/dental-team.jpg",
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
            "Mo 08:00-17:00",
            "Tu 07:00-15:00",
            "We 08:00-17:00",
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