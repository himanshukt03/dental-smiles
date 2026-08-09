'use client';

import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  Shield,
  DollarSign,
  FileText,
  CheckCircle,
  CheckCircle2,
  Users,
  Phone,
  CalendarCheck,
  ExternalLink,
  Lock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Clock,
  Heart,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import BentoCard from "@/components/UI/BentoCard";
import { insuranceProviders } from "@/data/content";

const paymentOptions = [
  {
    icon: CreditCard,
    title: "Credit & Debit Cards",
    description:
      "We accept all major credit and debit cards including Visa, MasterCard, American Express, and Discover.",
    features: ["Instant processing", "Secure transactions", "Itemized receipt provided"],
  },
  {
    icon: DollarSign,
    title: "Cash & Personal Checks",
    description:
      "Cash and personal check payments are welcome. We provide full documentation for your tax or FSA records.",
    features: ["Immediate payment credit", "No processing surcharges", "Complete documentation"],
  },
  {
    icon: FileText,
    title: "CareCredit Financing",
    description:
      "Flexible monthly financing options available through CareCredit with low or 0% promotional interest rates.",
    features: ["0% interest promotional plans", "6 to 24-month terms", "Instant online approval"],
  },
  {
    icon: Shield,
    title: "Dental Insurance Benefits",
    description:
      "We work with most major PPO dental insurance plans to maximize your coverage and handle all claim filings.",
    features: ["Direct insurance billing", "Pre-treatment estimates", "Instant benefits verification"],
  },
];

const financingFeatures = [
  "0% interest options available",
  "No annual membership fees",
  "Quick 2-minute application process",
  "Instant approval decisions",
  "Flexible 6 to 24-month payment terms",
  "No prepayment penalties",
];

const paymentFaqs = [
  {
    q: "When is payment due for my dental treatment?",
    a: "Payment or your estimated insurance co-pay is due at the time of service unless prior payment plan arrangements have been established with our front desk team.",
  },
  {
    q: "How does dental insurance billing work at Dental Smiles?",
    a: "We verify your insurance coverage prior to your visit, calculate your estimated co-pay, and submit claims directly to your provider on your behalf.",
  },
  {
    q: "What is CareCredit and how do I apply?",
    a: "CareCredit is a healthcare credit card designed to pay for out-of-pocket dental expenses. You can apply online in minutes or our team can assist you at checkout.",
  },
  {
    q: "Can I use my HSA (Health Savings Account) or FSA (Flexible Spending Account)?",
    a: "Yes! HSA and FSA debit cards are fully accepted for all qualifying dental treatments, including cleanings, fillings, crowns, and orthodontics.",
  },
];

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-creme via-white to-clinical-grey/20 text-foreground">
      {/* Hero Section */}
      <section className="section-padding pt-8 sm:pt-10 lg:pt-12 pb-10 lg:pb-14">
        <div className="container-clinical max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-gradient-to-br from-primary/5 via-white to-white shadow-lg">
            <div className="flex flex-col gap-5 p-5 sm:p-6 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-8 lg:p-8">
              <div className="order-2 space-y-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Affordable & Transparent Care
                </span>
                <h1 className="text-xl sm:text-2xl md:text-3.5xl font-heading font-bold text-foreground text-center sm:text-left tracking-tight leading-tight">
                  Payment options & insurance <span className="text-[#741234]">made simple</span>
                </h1>
              </div>

              <div className="order-3 relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white/70 shadow-md sm:max-w-md lg:order-1 lg:mx-0 lg:col-start-1 lg:row-span-2 lg:max-w-[400px]">
                <div className="relative aspect-[16/10] sm:aspect-[3/2] lg:aspect-[4/3]">
                  <Image
                    src="/assets/dental-office.jpg"
                    alt="Dental Smiles reception desk in Austin"
                    fill
                    sizes="(min-width: 1280px) 400px, (min-width: 1024px) 360px, (min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-3 right-3 rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow border border-primary/10">
                  ✨ Transparent, stress-free billing
                </div>
              </div>

              <div className="order-4 space-y-4 lg:order-2 lg:col-start-2 lg:row-start-2">
                <div className="space-y-3 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
                  <p>
                    At Dental Smiles, we believe <span className="text-[#741234] font-semibold">high-quality dental care</span> should be accessible and affordable for every patient.
                  </p>
                  <p>
                    We work with most major PPO insurance providers, accept all payment methods, and offer <span className="text-[#741234] font-semibold">0% interest financing</span> through CareCredit.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5 sm:flex-row pt-1">
                  <Link href="/contact#request-appointment" className="w-full sm:w-auto">
                    <Button className="btn-primary w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold">
                      <CalendarCheck className="mr-2 h-4 w-4" /> Schedule Your Visit
                    </Button>
                  </Link>
                  <Link href="tel:5124679955" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-primary/20 bg-white/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Phone className="mr-2 h-4 w-4" /> Call 512.467.9955
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Convenient Payment Options Grid */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-primary/10">
        <div className="container-clinical max-w-6xl space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
              Convenient Payment Methods
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Choose the payment option that best fits your lifestyle. All transactions are handled securely with bank-level encryption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {paymentOptions.map((option) => (
              <div
                key={option.title}
                className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <option.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
                      {option.title}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-primary/10">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Direct Billing Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-clinical-creme border-t border-primary/10">
        <div className="container-clinical max-w-6xl space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
              Insurance Providers & Direct Billing
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We are in-network with most major dental PPO insurance plans and handle your claims directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8 items-start">
            {/* Insurance Info Card */}
            <div className="rounded-2xl border border-primary/15 bg-white p-5 sm:p-6 shadow-sm space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                We Maximize Your Dental Insurance Benefits
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Navigating dental insurance can feel complicated. Our experienced treatment coordinators contact your insurance provider before your visit to verify benefits and give you clear, upfront cost breakdowns.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  "Direct insurance claims billing",
                  "Pre-treatment cost estimates",
                  "Instant benefits verification",
                  "Maximized annual coverage",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-xl bg-primary/5 p-2.5 border border-primary/10 text-xs font-semibold text-primary">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance Providers Grid */}
            <div className="rounded-2xl border border-primary/15 bg-white p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Accepted Insurance Plans
                </h4>
                <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                  12+ Major Providers
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {insuranceProviders.map((provider) => (
                  <div
                    key={provider}
                    className="rounded-xl border border-primary/10 bg-clinical-creme/50 p-2.5 text-center text-xs font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                  >
                    {provider}
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-primary/10 text-center sm:text-left">
                <p className="text-xs text-muted-foreground">
                  Don&apos;t see your plan listed? <Link href="/contact" className="text-primary font-semibold hover:underline">Contact our team</Link> to verify coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Financing Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-primary/10">
        <div className="container-clinical max-w-6xl space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
              CareCredit Healthcare Financing
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Don&apos;t let cost delay your oral health. Enjoy 0% interest promotional financing with manageable monthly payments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* CareCredit Card */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-clinical-creme/40 p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary border border-primary/15">
                    0% Interest Available
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground tracking-tight">
                  CareCredit Healthcare Credit Card
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  CareCredit works like a dedicated healthcare credit card for dental care, implants, crowns, and cosmetic procedures. Apply in minutes with instant approval.
                </p>

                <ul className="space-y-2 pt-2">
                  <li className="flex items-center gap-2 text-xs font-medium text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>6, 12, 18, or 24-month promotional payment terms</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs font-medium text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>No interest if paid in full within promotional period</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs font-medium text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>Usable for treatments from $1 to $25,000</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="https://www.carecredit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <Button className="btn-primary w-full text-xs sm:text-sm font-semibold px-4 py-2.5">
                    <ExternalLink className="mr-2 h-4 w-4" /> Apply for CareCredit Online
                  </Button>
                </Link>
              </div>
            </div>

            {/* In-House Plan Card */}
            <div className="rounded-2xl border border-primary/15 bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary border border-primary/15">
                    In-House Options
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground tracking-tight">
                  In-House Custom Payment Plans
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  For extensive treatments or uninsured patients, our Austin team can customize an in-house payment schedule to break down costs over time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {financingFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link href="/contact" className="w-full inline-block">
                  <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm font-semibold px-4 py-2.5">
                    <Users className="mr-2 h-4 w-4" /> Discuss Payment Plan Options
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Online Portal Banner */}
      <section className="py-6 sm:py-8 lg:py-10 bg-clinical-creme border-t border-primary/10">
        <div className="container-clinical max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/15 bg-white p-6 sm:p-8 shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  <Lock className="h-3 w-3" /> Bank-Level 256-Bit Security
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                  Pay Your Bill Online Securely
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Quickly pay your balance online using our encrypted patient portal. 100% secure, PCI-compliant, and instant.
                </p>
              </div>
              <div className="shrink-0 w-full sm:w-auto">
                <Link href="/contact#request-appointment">
                  <Button className="btn-primary w-full sm:w-auto text-xs sm:text-sm font-semibold px-5 py-2.5">
                    <CreditCard className="mr-2 h-4 w-4" /> Pay Bill Online
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
              <HelpCircle className="h-3.5 w-3.5" /> Common Questions
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
              Payment & Insurance FAQs
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
    </div>
  );
}
