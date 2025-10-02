import { CreditCard, Shield, DollarSign, FileText, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import BentoCard from "@/components/UI/BentoCard";
import { insuranceProviders } from "@/data/content";

const paymentOptions = [
  {
    icon: CreditCard,
    title: "Credit & Debit Cards",
    description:
      "We accept all major credit and debit cards including Visa, MasterCard, American Express, and Discover.",
    features: ["Instant processing", "Secure transactions", "Receipt provided"],
  },
  {
    icon: DollarSign,
    title: "Cash Payments",
    description:
      "Cash payments are always welcome. We provide detailed receipts for your records.",
    features: ["Immediate payment", "No processing fees", "Full documentation"],
  },
  {
    icon: FileText,
    title: "Payment Plans",
    description:
      "Flexible financing options available through CareCredit and in-house payment plans.",
    features: ["0% interest options", "Extended terms", "Quick approval"],
  },
  {
    icon: Shield,
    title: "Insurance Benefits",
    description:
      "We work with most dental insurance plans to maximize your benefits and minimize out-of-pocket costs.",
    features: ["Direct billing", "Pre-authorization", "Benefits verification"],
  },
];

const financingFeatures = [
  "No annual fees",
  "0% interest options available",
  "Quick and easy application process",
  "Instant approval decisions",
  "Flexible payment terms",
  "No prepayment penalties",
];

export const metadata = {
  title: "Payment Options & Insurance",
  description:
    "Review Dental Smiles payment methods, accepted insurance providers, and flexible financing options.",
};

const PaymentsPage = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-clinical-creme to-clinical-grey">
        <div className="container-clinical text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
            Payment Options & Insurance
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We believe quality dental care should be accessible to everyone. That's why we offer multiple payment options and work with most insurance plans to make your treatment affordable.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-clinical">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Convenient Payment Methods
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the payment method that works best for you. All transactions are secure and processed with the highest level of protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentOptions.map((option) => (
              <BentoCard key={option.title} className="p-8 group hover:border-primary/50 transition-colors">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-bento flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground">{option.description}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-clinical-creme">
        <div className="container-clinical">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Insurance & Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're in-network with most major dental insurance plans and will help you maximize your benefits.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                We Accept Most Insurance Plans
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team will verify your insurance benefits before your appointment and work directly with your insurance company to ensure you receive maximum coverage for your treatment.
              </p>
              <div className="space-y-4">
                {[
                  'Direct insurance billing',
                  'Pre-treatment estimates',
                  'Claim processing assistance',
                  'Benefits verification',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <BentoCard className="p-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Insurance Providers We Accept
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {insuranceProviders.map((provider) => (
                  <div
                    key={provider}
                    className="text-sm text-muted-foreground p-2 bg-clinical-grey rounded-bento text-center"
                  >
                    {provider}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Don't see your insurance? Contact us to verify coverage.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-clinical">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
                Flexible Financing Options
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Don't let finances stand in the way of your oral health. We offer flexible financing through CareCredit and in-house payment plans to make treatment affordable.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {financingFeatures.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Apply for CareCredit
                </Button>
                <Button variant="ghost" className="btn-secondary">
                  <Users className="w-4 h-4 mr-2" />
                  Discuss Payment Plan
                </Button>
              </div>
            </div>

            <BentoCard className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-bento flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  CareCredit Healthcare Financing
                </h3>
                <p className="text-muted-foreground mb-6">
                  Special financing available for qualified applicants. Apply in minutes and get an instant decision.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>✓ 6, 12, 18, or 24-month financing</div>
                  <div>✓ No interest if paid in full within promotional period</div>
                  <div>✓ Use for any amount from $1 to $25,000</div>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-clinical-creme">
        <div className="container-clinical text-center">
          <BentoCard className="p-12 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/20 rounded-bento flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Secure Online Payment Portal
            </h2>
            <p className="text-muted-foreground mb-8">
              Pay your bill online safely and securely. Our payment portal uses bank-level encryption to protect your financial information.
            </p>
            <Button className="btn-primary text-lg px-8 py-4 h-auto">
              <CreditCard className="w-5 h-5 mr-2" />
              Pay Your Bill Online
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              SSL encrypted • PCI compliant • 100% secure
            </p>
          </BentoCard>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-clinical">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Payment FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'When is payment due?',
                description:
                  'Payment is due at the time of service unless other arrangements have been made. We accept cash, credit cards, and can process insurance claims directly.',
              },
              {
                title: 'Do you offer payment plans?',
                description:
                  'Yes! We offer flexible payment plans through CareCredit and our in-house financing options. Many plans offer 0% interest for qualified applicants.',
              },
              {
                title: 'How do you handle insurance?',
                description:
                  "We'll verify your benefits, submit claims directly to your insurance company, and provide estimates of your out-of-pocket costs before treatment begins.",
              },
              {
                title: 'Is my payment information secure?',
                description:
                  'Absolutely. We use bank-level encryption and are PCI compliant to ensure your financial information is always protected and secure.',
              },
            ].map((faq) => (
              <BentoCard key={faq.title} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.title}</h3>
                <p className="text-muted-foreground">{faq.description}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentsPage;
