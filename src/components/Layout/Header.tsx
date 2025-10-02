"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import DentalSmilesLogo from "@/assets/DentalSmilesLogo.webp";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "First Visit", path: "/first-visit" },
  { name: "Contact", path: "/contact" },
  { name: "Payments", path: "/payments" },
  { name: "Blog", path: "/blog" },
];

const Header = () => {
  const pathname = usePathname();
  const [hideNav, setHideNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const isPathActive = (path: string) => {
    if (!pathname) return false;
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-50 transition-transform duration-300 ${hideNav ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="bg-primary text-primary-foreground">
        <div className="container-clinical">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>512-467-9955</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <a
                  href="https://maps.app.goo.gl/mLZ45jGsw33kh3zXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>1201 Barbara Jordan Blvd, Suite #1435, Austin, TX 78723</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-border backdrop-blur-md bg-card/95">
        <div className="container-clinical">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex items-center space-x-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-bento"
            >
              <div className="w-52 h-20 rounded-bento overflow-hidden flex items-center justify-center relative">
                <Image
                  src={DentalSmilesLogo}
                  alt="Dental Smiles Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 208px, 208px"
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const active = isPathActive(item.path);
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-3 py-2 rounded-bento text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      active
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Link href="/book-appointment">
                <Button className="btn-primary">Book Appointment</Button>
              </Link>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-bento text-muted-foreground hover:text-foreground hover:bg-clinical-grey transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border bg-card">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const active = isPathActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-3 rounded-bento text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                        active
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-clinical-grey"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="justify-start text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    512-467-9955
                  </Button>
                  <Link href="/book-appointment">
                    <Button className="btn-primary justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;