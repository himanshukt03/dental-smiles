'use client';

import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  Shield,
  DollarSign,
  FileText,
  CheckCircle2,
  Phone,
  CalendarCheck,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { insuranceProviders } from "@/data/content";

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Credit & Debit Cards",
    description:
      "All major credit and debit cards accepted including Visa, MasterCard, American Express, and Discover.",
    features: ["Instant processing", "Secure transactions", "Itemized receipt provided"],
  },
  {
    icon: DollarSign,
    title: "Cash & Personal Checks",
    description:
      "Cash and personal check payments are welcome. We provide full documentation for your records or FSA.",
    features: ["Immediate account credit", "No processing fees", "Complete documentation"],
  },
  {
    icon: FileText,
    title: "CareCredit Financing",
    description:
      "Flexible monthly financing options with 0% promotional interest rates for qualifying treatments.",
    features: ["0% promotional interest", "6 to 24-month terms", "Instant online approval"],
  },
  {
    icon: Shield,
    title: "Dental PPO Insurance",
    description:
      "In-network with most major PPO dental plans to maximize your benefits and submit direct claims.",
    features: ["Direct insurance claims", "Pre-treatment estimates", "Instant verification"],
  },
];

const careCreditHighlights = [
  "6, 12, 18, or 24-month promotional payment terms",
  "0% interest if paid in full within promotional period",
  "Covers all dental treatments from $1 to $25,000",
  "No annual membership fees or prepayment penalties",
  "Quick 2-minute online application with instant decision",
];

const paymentFaqs = [
  {
    q: "When is payment due for my dental treatment?",
    a: "Payment or your estimated insurance co-pay is due at the time of service unless prior CareCredit financing or payment arrangements have been established.",
  },
  {
    q: "How does dental insurance billing work at Dental Smiles?",
    a: "We verify your insurance coverage prior to your appointment, calculate your estimated out-of-pocket portion, and file claims directly with your insurance provider.",
  },
  {
    q: "What is CareCredit and how do I apply?",
    a: "CareCredit is a healthcare credit card designed to pay for out-of-pocket dental expenses. You can apply online in minutes or our team can assist you at checkout.",
  },
  {
    q: "Can I use my HSA (Health Savings Account) or FSA (Flexible Spending Account)?",
    a: "Yes! HSA and FSA debit cards are fully accepted for all qualifying dental treatments including cleanings, fillings, crowns, and orthodontics.",
  },
];

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20 text-foreground">
      {/* Header Banner */}
      <section className="py-10 lg:py-14 border-b border-primary/10 bg-gradient-to-br from-primary/5 via-white to-clinical-creme/40">
        <div className="container-clinical max-w-5xl text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/15">
            <Sparkles className="h-3.5 w-3.5" /> Financial Wellness
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight leading-tight">
            Payment Options & Insurance
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We believe quality dental care should be transparent, accessible, and stress-free. We work with most major PPO insurance plans and offer flexible CareCredit financing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground border border-primary/10 shadow-sm">
              💳 All Major Cards Accepted
            </span>
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground border border-primary/10 shadow-sm">
              🛡️ Direct PPO Insurance Billing
            </span>
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground border border-primary/10 shadow-sm">
              ✨ 0% CareCredit Financing
            </span>
          </div>
        </div>
      </section>

      {/* Payment Methods 4-Card Grid */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container-clinical max-w-6xl space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
              Accepted Payment Methods
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Choose the payment method that works best for your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.title}
                className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <method.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground tracking-tight">
                    {method.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-3 mt-3 border-t border-primary/10">
                  {method.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Benefits Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-clinical-creme border-t border-primary/10">
        <div className="container-clinical max-w-6xl space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
              Dental Insurance & Benefits
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We are in-network with most major PPO dental insurance providers and handle all claim submissions for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-center">
            {/* Image Showcase */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-md">
              <div className="relative aspect-[4/3] lg:aspect-[16/11]">
                <Image
                  src="/assets/Paying_With_Insurance.jpg"
                  alt="Patient reviewing dental insurance benefits at Dental Smiles"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                  <ShieldCheck className="h-4 w-4" /> In-Network PPO Claims Assistance
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our front desk team verifies your insurance benefits before your visit so you receive full coverage with no unexpected fees.
                </p>
              </div>
            </div>

            {/* Insurance Providers Grid */}
            <div className="rounded-2xl border border-primary/15 bg-white p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground tracking-tight">
                  Accepted PPO Providers
                </h3>
                <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/15">
                  Major Insurers Accepted
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {insuranceProviders.map((provider) => (
                  <div
                    key={provider}
                    className="rounded-xl border border-primary/10 bg-clinical-creme/60 p-2.5 text-center text-xs font-semibold text-foreground hover:bg-primary hover:text-white transition-all duration-200 shadow-sm"
                  >
                    {provider}
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-primary/10 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
                <span>Don&apos;t see your insurance listed?</span>
                <Link href="/contact" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                  Verify Coverage With Us <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship CareCredit Financing Showcase */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white border-t border-primary/10">
        <div className="container-clinical max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-center">
            {/* CareCredit Card Image Showcase Frame */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-slate-50 shadow-md group">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/assets/care-credit-card-1.jpg"
                  alt="CareCredit Healthcare Credit Card accepted at Dental Smiles"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="absolute top-3.5 left-3.5 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                ✨ 0% Promotional Interest
              </div>
            </div>

            {/* CareCredit Details & Call To Action */}
            <div className="space-y-5 text-left">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  <CreditCard className="h-3 w-3" /> Healthcare Financing
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight leading-tight">
                  CareCredit Healthcare Financing
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  CareCredit functions as a dedicated healthcare credit card for dental implants, crowns, cosmetic smile makeovers, and family dentistry. Apply in just 2 minutes with instant approval.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {careCreditHighlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-xs font-medium text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <Link
                  href="https://www.carecredit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="btn-primary w-full sm:w-auto text-xs sm:text-sm font-semibold px-6 py-3 shadow-md">
                    <ExternalLink className="mr-2 h-4 w-4" /> Apply for CareCredit Online
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-primary/20 text-primary hover:bg-primary hover:text-white text-xs sm:text-sm font-semibold px-6 py-3">
                    <Phone className="mr-2 h-4 w-4" /> Ask Our Team About Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment FAQs Accordion */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-primary/10">
        <div className="container-clinical max-w-3xl space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
              <HelpCircle className="h-3.5 w-3.5" /> Financial FAQs
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
              Payment & Insurance Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {paymentFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="rounded-2xl border border-primary/10 bg-clinical-creme/30 px-5 py-1.5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:no-underline text-sm sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="container-clinical">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-primary text-primary-foreground shadow-lg">
            <div className="absolute -left-24 top-0 h-[140%] w-72 rotate-12 bg-white/10 blur-3xl pointer-events-none" />
            <div className="relative grid gap-4 p-6 sm:p-8 lg:p-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight">Have questions about your payment or insurance?</h2>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">Contact Dental Smiles today. Our friendly care coordinators are happy to verify your benefits and guide you through transparent payment options.</p>
              <div className="flex flex-col gap-3 sm:flex-row pt-1">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xs sm:text-sm font-semibold px-5 py-2.5">
                    Contact Us
                  </Button>
                </Link>
                <Link href="tel:5124679955" className="w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    className="w-full sm:w-auto border border-primary-foreground/30 bg-white/10 text-primary-foreground hover:bg-white/20 text-xs sm:text-sm font-semibold px-5 py-2.5"
                  >
                    Call 512.467.9955
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
