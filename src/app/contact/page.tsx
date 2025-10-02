import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BentoCard from '@/components/UI/BentoCard';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '512-467-9955',
    description: 'Call us for appointments or urgent questions',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@dentalsmiles.com',
    description: 'Send us a message anytime',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: '123 Main Street, Downtown, ST 12345',
    description: 'Visit us in the heart of downtown',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM',
    description: 'Extended hours for your convenience',
  },
];

export const metadata = {
  title: 'Contact Dental Smiles',
  description:
    'Reach out to Dental Smiles in Austin for appointments, consultations, or dental emergencies.',
};

const ContactPage = () => {

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-clinical-creme to-clinical-grey">
        <div className="container-clinical text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Contact Dental Smiles
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We're here to answer your questions and help you schedule your next visit. Reach out to us using any of the methods below.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-clinical">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => (
              <BentoCard
                key={info.title}
                className="text-center p-6 group hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-bento flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="font-medium text-foreground mb-2">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </BentoCard>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />

            <div className="space-y-6">
              <BentoCard className="p-8">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Visit Our Office
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">
                        123 Main Street
                        <br />
                        Downtown, ST 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div className="text-muted-foreground">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" className="btn-secondary w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </BentoCard>

              <BentoCard className="p-0 overflow-hidden">
                <div className="w-full h-64 bg-clinical-grey flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Main Street, Downtown</p>
                  </div>
                </div>
              </BentoCard>

              <BentoCard className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Dental Emergency?
                </h3>
                <p className="text-muted-foreground mb-4">
                  For urgent dental issues outside of office hours, please call our emergency line.
                </p>
                <Button className="btn-primary w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency: (555) 123-HELP
                </Button>
              </BentoCard>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-clinical text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait to start your journey to better oral health. Book your appointment today and experience the Dental Smiles difference.
          </p>
          <Link href="/book-appointment">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4 h-auto">
              <Calendar className="w-5 h-5 mr-2" />
              Book Online Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
