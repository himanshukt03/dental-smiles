'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BentoCard from '@/components/UI/BentoCard';
import { services as serviceContent } from '@/data/content';

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = serviceContent.map((service) => service.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (!element) continue;
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(sectionId);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-clinical-creme to-clinical-grey">
        <div className="container-clinical text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive Dental Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            From routine cleanings to complex restorative procedures, we provide a full range of dental services using the latest technology and techniques to ensure optimal outcomes and patient comfort.
          </p>
          <Button className="btn-primary text-lg px-8 py-4 h-auto">
            <Clock className="w-5 h-5 mr-2" />
            Schedule Consultation
          </Button>
        </div>
      </section>

      <div className="container-clinical">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <BentoCard className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Services Menu
                </h3>
                <nav className="space-y-2">
                  {serviceContent.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => scrollToSection(service.id)}
                      className={`w-full text-left px-3 py-2 rounded-bento transition-colors text-sm ${
                        activeSection === service.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-clinical-grey'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{service.title}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </button>
                  ))}
                </nav>
              </BentoCard>
            </div>
          </aside>

          <main className="flex-1 py-16 space-y-16">
            {serviceContent.map((service) => (
              <section key={service.id} id={service.id} className="scroll-mt-24">
                <BentoCard className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <Button className="btn-primary">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                        Available Treatments
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.treatments.map((treatment) => (
                          <div
                            key={treatment}
                            className="flex items-start space-x-3 p-4 bg-clinical-creme rounded-bento"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{treatment}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-bento flex items-center justify-center">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">Flexible Scheduling</div>
                          <div className="text-sm text-muted-foreground">Same-day appointments available</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-bento flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">Insurance Accepted</div>
                          <div className="text-sm text-muted-foreground">Most plans welcome</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-bento flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">Expert Care</div>
                          <div className="text-sm text-muted-foreground">Experienced specialists</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BentoCard>
              </section>
            ))}
          </main>
        </div>
      </div>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-clinical text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a consultation with our dental experts. We'll assess your needs and recommend the best treatment plan for your oral health goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4 h-auto">
                <Clock className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4 h-auto"
            >
              <Users className="w-5 h-5 mr-2" />
              Call Us: 512-467-9955
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
