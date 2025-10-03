'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import BentoCard from '@/components/UI/BentoCard';
import { useToast } from '@/hooks/use-toast';

const services = [
  'General Consultation',
  'Routine Cleaning',
  'Cosmetic Dentistry',
  'Restorative Treatment',
  'Emergency Care',
  'Sedation Dentistry',
  'Other',
];

const timeSlots = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM'
];

const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: 'Appointment request submitted!',
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Error submitting request',
        description: 'Please try again or call us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BentoCard className="p-6 sm:p-8 bg-white shadow-lg border-t-4 border-maroon-400 md:border-t-0 md:border-r-4">
  <h2 className="text-2xl font-heading text-foreground mb-6">
        Schedule Your Visit
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="rounded-bento border-maroon-200 focus:border-maroon-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="rounded-bento border-maroon-200 focus:border-maroon-400"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="rounded-bento border-maroon-200 focus:border-maroon-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Service *</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full h-10 px-3 rounded-bento border border-maroon-200 bg-background text-foreground focus:border-maroon-400"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="date">Select Date *</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="rounded-bento border-maroon-200 focus:border-maroon-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time *</Label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="w-full h-10 px-3 rounded-bento border border-maroon-200 bg-background text-foreground focus:border-maroon-400"
            >
              <option value="">Select a time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Notes</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            className="rounded-bento border-maroon-200 focus:border-maroon-400"
            placeholder="Any special requests or concerns..."
          />
        </div>

        <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            'Submitting...'
          ) : (
            <>
              <Calendar className="w-4 h-4 mr-2" />
              Request Appointment
            </>
          )}
        </Button>
      </form>
    </BentoCard>
  );
};

export default BookAppointmentForm;