import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Terms of Service | Dental Smiles Austin, TX',
  description:
    'Read the official Terms of Service for Dental Smiles Family & Cosmetic Dentistry website and practice policies in Austin, TX.',
  alternates: {
    canonical: 'https://dental-smiles.vercel.app/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20 text-foreground py-10 lg:py-14">
      <BreadcrumbSchema items={[{ name: 'Terms of Service', url: '/terms-of-service' }]} />
      <div className="container-clinical max-w-4xl space-y-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center text-xs sm:text-sm font-semibold text-primary hover:underline mb-3"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Last Updated: January 2026
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-primary/15 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-foreground/85">
          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              Welcome to Dental Smiles Family & Cosmetic Dentistry (“Dental Smiles”). By accessing or using our website, online scheduling tools, or patient portal, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our online services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              2. Medical Disclaimer
            </h2>
            <p>
              The content provided on this website—including text, graphics, blog articles, and treatment descriptions—is for informational purposes only and does not constitute formal medical or dental advice. Website content is not a substitute for professional dental diagnosis, examination, or emergency treatment. Always consult a qualified dentist for diagnosis regarding any dental condition.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              3. Appointment Requests & Cancellations
            </h2>
            <p>
              Online appointment requests submitted through our website are subject to availability and confirmation by our office staff. We ask that patients provide at least 24 to 48 hours notice if they need to reschedule or cancel an appointment so we may accommodate other patients needing care.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              4. Intellectual Property
            </h2>
            <p>
              All branding, logos, website layout, text, graphics, and custom media on this site are the property of Dental Smiles Family & Cosmetic Dentistry and protected by applicable copyright and trademark laws.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              5. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the State of Texas, without giving effect to any conflict of law principles.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              6. Contact Information
            </h2>
            <p>
              For questions regarding our practice policies or terms of service, please contact our office directly:
            </p>
            <p className="font-semibold text-foreground">
              Dental Smiles Family & Cosmetic Dentistry<br />
              1201 Barbara Jordan Blvd Suite #1435, Austin, TX 78723<br />
              Phone: (512) 467-9955 | Email: <ObfuscatedEmail />
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
