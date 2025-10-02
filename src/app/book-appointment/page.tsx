import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BentoCard from '@/components/UI/BentoCard';
import BookAppointmentForm from './BookAppointmentForm';

export const metadata = {
  title: 'Book Appointment - Dental Smiles',
  description:
    'Schedule your dental appointment online with Dental Smiles in Austin. Choose your preferred date and time for consultations, cleanings, and treatments.',
};

const BookAppointmentPage = () => {
  return (
    <div className="min-h-screen pt-8">
      <section className="bg-gradient-to-br from-clinical-creme to-clinical-grey py-12">
        <div className="container-clinical text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
            Book Your Appointment
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Schedule your visit with Dental Smiles today. Our team is ready to provide you with exceptional dental care in a comfortable environment.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container-clinical">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            <BookAppointmentForm />

            <div className="space-y-6">
              <BentoCard className="p-6 sm:p-8 bg-white shadow-lg border-t-4 border-maroon-400 sm:border-t-0 sm:border-l-4">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Appointment Duration</p>
                      <p className="text-sm text-muted-foreground">Most appointments last 30-60 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Confirmation</p>
                      <p className="text-sm text-muted-foreground">We'll call to confirm your appointment</p>
                    </div>
                  </div>
                </div>
              </BentoCard>

              <BentoCard className="p-6 sm:p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-md">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  New Patient?
                </h3>
                <p className="text-muted-foreground mb-4">
                  First-time visitors should arrive 15 minutes early to complete paperwork.
                </p>
                <Button variant="outline" className="w-full sm:w-auto border-maroon-400 text-maroon-700 hover:bg-maroon-50">
                  Learn More About Your First Visit
                </Button>
              </BentoCard>

              <BentoCard className="p-6 sm:p-8 border-t-4 border-maroon-400 bg-white shadow-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Office Hours
                </h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </BentoCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointmentPage;