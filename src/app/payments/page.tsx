import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  PiggyBank,
  CreditCard,
  Banknote,
  HeartPulse,
  Clock,
} from "lucide-react";
import FinancingImageRotator from "@/components/payments/FinancingImageRotator";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import InsuranceMarquee from "@/components/InsuranceMarquee";
import { BreadcrumbSchema, FaqSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Dental Insurance & Financing Options Mueller, Austin TX | CareCredit & PPO",
  description:
    "Explore dental payment and insurance options at Dental Smiles in Mueller, Austin, TX (78723). In-network with major PPO dental insurance, CareCredit & Sunbit financing.",
  keywords: [
    "dental insurance Mueller Austin",
    "PPO dentist Mueller 78723",
    "CareCredit dentist Mueller Austin",
    "Sunbit dental financing Austin",
    "0% interest dental financing Austin",
    "affordable dentist Mueller",
    "dental financing Mueller Austin",
  ],
  alternates: {
    canonical: "https://dental-smiles.vercel.app/payments",
  },
  openGraph: {
    title: "Dental Insurance & Payment Options | Dental Smiles Mueller Austin",
    description:
      "Affordable dental payment solutions, PPO insurance billing, CareCredit and Sunbit flexible financing in Mueller, Austin, TX.",
    url: "https://dental-smiles.vercel.app/payments",
    type: "website",
    images: [
      {
        url: "/assets/dental-team.webp",
        width: 1200,
        height: 630,
        alt: "Dental Smiles Mueller Austin Payment and Insurance Options",
      },
    ],
  },
};

const paymentMethods = [
  {
    title: "Credit & Debit Cards",
    description:
      "All major credit and debit cards accepted including Visa, MasterCard, American Express, and Discover.",
    icon: CreditCard,
    accentBg: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    title: "Cash & Personal Checks",
    description:
      "Cash and personal check payments are welcome. We provide full itemized receipts for your records.",
    icon: Banknote,
    accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    title: "HSA & FSA Accounts",
    description:
      "Use your Health Savings Account or Flexible Spending Account debit card to pay for tax-free dental care.",
    icon: HeartPulse,
    accentBg: "bg-sky-50 text-sky-800 border-sky-200",
  },
  {
    title: "Dental PPO Insurance",
    description:
      "In-network with most major PPO dental plans to maximize your benefits and submit direct claims.",
    icon: ShieldCheck,
    accentBg: "bg-primary/10 text-primary border-primary/20",
  },
];

const careCreditHighlights = [
  { text: "Flexible 6–24 month payment terms", icon: Clock },
  { text: "0% promotional interest options", icon: CheckCircle2 },
  { text: "Covers treatments from $1 to $25,000", icon: CheckCircle2 },
  { text: "No annual fees or prepayment penalties", icon: CheckCircle2 },
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
  {
    q: "Do you offer Sunbit flexible dental financing?",
    a: "Yes! We partner with Sunbit to provide lightning-fast, flexible monthly payment options with no hard credit check for all approved patients, covering preventive, restorative, and cosmetic dental treatments.",
  },
];

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BreadcrumbSchema items={[{ name: 'Payments & Insurance', url: '/payments' }]} />
      <FaqSchema faqs={paymentFaqs} />

      {/* Header Banner - Section 1 */}
      <section className="pt-7 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-10 bg-[#741234] text-white shadow-md relative overflow-hidden">
        <div className="container-clinical max-w-3xl text-center space-y-2 sm:space-y-2.5 relative z-10">
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            <span className="h-[1.5px] w-5 sm:w-7 bg-white/40 rounded-full inline-block" />
            <span>PAYMENT OPTIONS</span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Payment & Insurance
          </h1>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-md mx-auto font-normal">
            Transparent pricing, direct PPO insurance billing, and flexible CareCredit & Sunbit financing options.
          </p>
        </div>
      </section>

      {/* Section 2: Simple & Clean Payment Methods Grid with Images/Icons */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-clinical-creme/30 to-white">
        <div className="container-clinical max-w-6xl space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
              Accepted Payment Methods
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Choose the convenient payment option that fits your personal financial plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={method.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 text-center flex flex-col items-center justify-start space-y-3"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-105 ${method.accentBg}`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Insurance & PPO Benefits (Brand Magenta Background - Matching Homepage) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#741234] border-t border-b border-primary/20 text-white">
        <div className="container-clinical max-w-6xl space-y-8 sm:space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Maximizing Your Dental Insurance
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              We are in-network with most major PPO dental insurance providers. Our financial coordinators handle all direct claims, eligibility verification, and pre-treatment estimates.
            </p>
          </div>

          <div className="py-2">
            <InsuranceMarquee theme="maroon" speed={28} />
          </div>

          <div className="text-center pt-2">
            <p className="text-sm sm:text-base text-white/90">
              Don&apos;t see your insurance provider listed?{' '}
              <Link href="/contact" className="text-white font-bold hover:underline inline-flex items-center gap-1 ml-1">
                Verify Coverage With Us <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: CareCredit & Sunbit Financing Showcase (Alternating Light Gradient Background) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-primary/5 to-clinical-creme/40 border-b border-primary/10">
        <div className="container-clinical max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-center">
            {/* CareCredit & Sunbit Showcase Frame with Rotating Images */}
            <FinancingImageRotator />

            {/* CareCredit & Sunbit Details */}
            <div className="space-y-6 text-left">
              <div className="space-y-2.5">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight leading-tight">
                  Flexible CareCredit & Sunbit Financing
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  CareCredit and Sunbit function as dedicated healthcare credit options for dental implants, crowns, cosmetic makeovers, and family care—dividing treatment costs into budget-friendly monthly payments.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {careCreditHighlights.map((highlight) => (
                  <div key={highlight.text} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-foreground/90 bg-white/80 p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                    <highlight.icon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{highlight.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="https://www.carecredit.com/go/747CRM/?dtc=DS7X&sitecode=CCCAPDS7X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="btn-primary w-full sm:w-auto text-xs sm:text-sm font-semibold px-6 py-3 shadow-md">
                    <ExternalLink className="mr-2 h-4 w-4" /> Apply for CareCredit
                  </Button>
                </Link>
                <Link
                  href="https://apply.sunbit.com/DentalSmiles-Austin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" className="w-full sm:w-auto border-primary/20 bg-white text-primary hover:bg-primary/5 text-xs sm:text-sm font-semibold px-6 py-3 shadow-xs">
                    <ExternalLink className="mr-2 h-4 w-4" /> Apply for Sunbit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Payment FAQs Accordion (Clean White Background) */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white">
        <div className="container-clinical max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
              Payment & Insurance FAQs
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {paymentFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="rounded-2xl border border-primary/15 bg-clinical-creme/20 hover:bg-clinical-creme/40 transition-colors px-5 py-1.5 shadow-xs"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:no-underline text-sm sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Section 6: Bottom Call to Action Banner */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="container-clinical">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-primary text-primary-foreground shadow-lg">
            <div className="absolute -left-24 top-0 h-[140%] w-72 rotate-12 bg-white/10 blur-3xl pointer-events-none" />
            <div className="relative grid gap-4 p-6 sm:p-8 lg:p-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight">Have questions about your payment or insurance?</h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">Contact Dental Smiles today. Our friendly care coordinators are happy to verify your benefits and guide you through transparent payment options.</p>
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
                    <Phone className="mr-2 h-4 w-4" /> Call Us
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
