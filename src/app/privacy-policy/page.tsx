import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dental Smiles Austin, TX',
  description:
    'Read the official Privacy Policy for Dental Smiles Family & Cosmetic Dentistry in Austin, TX. Learn how we protect your personal health information.',
  alternates: {
    canonical: 'https://dental-smiles.vercel.app/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20 text-foreground py-10 lg:py-14">
      <BreadcrumbSchema items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />
      <div className="container-clinical max-w-4xl space-y-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center text-xs sm:text-sm font-semibold text-primary hover:underline mb-3"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Last Updated: January 2026
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-primary/15 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-foreground/85">
          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              1. Introduction & Overview
            </h2>
            <p>
              At Dental Smiles Family & Cosmetic Dentistry (“Dental Smiles,” “we,” “our,” or “us”), we are dedicated to protecting your privacy and treating your personal health information with the highest standards of confidentiality. This Privacy Policy describes how we collect, use, and protect your information when you visit our website or interact with our Austin dental practice.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              2. Information We Collect
            </h2>
            <p>We may collect personal information that you voluntarily provide to us when requesting an appointment, contacting our office, or subscribing to practice updates:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and physical mailing address.</li>
              <li><strong>Appointment Requests:</strong> Preferred dates, times, and reason for your visit.</li>
              <li><strong>Website Usage Data:</strong> IP address, browser type, pages visited, and interaction data collected through cookies and analytical tools to improve user experience.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              3. Protection of Health Information (HIPAA)
            </h2>
            <p>
              Protected Health Information (PHI) provided during patient registration or treatment is strictly guarded under the Health Insurance Portability and Accountability Act (HIPAA). Physical and electronic safeguards are maintained to protect your clinical records from unauthorized access.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              4. How We Use Your Information
            </h2>
            <p>The information collected is used solely to provide quality dental care services, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Scheduling and confirming your dental appointments.</li>
              <li>Responding to patient inquiries and customer support messages.</li>
              <li>Verifying dental insurance benefits and processing claims.</li>
              <li>Improving website performance, security, and accessibility.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              5. Third-Party Sharing
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share necessary information with trusted service partners (such as dental laboratories or secure billing clearinghouses) solely to provide your requested dental treatments.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-foreground border-b border-primary/10 pb-2">
              6. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request updates to your information, please contact us at:
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
