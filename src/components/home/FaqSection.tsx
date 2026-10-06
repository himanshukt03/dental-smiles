'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqSchema } from '@/components/seo/JsonLd';

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const defaultFaqs: FaqItem[] = [
  {
    id: 'faq-location',
    question: 'Where is Dental Smiles located in Mueller, Austin, TX?',
    answer:
      'Dental Smiles is conveniently located at 1201 Barbara Jordan Blvd, Suite #1435, Austin, TX 78723 in the Mueller Town Center district. We are easily accessible from Central Austin, Hyde Park, Windsor Park, and Cherrywood, with ample dedicated parking for our patients.',
  },
  {
    id: 'faq-new-patients',
    question: 'Are you accepting new patients at your Mueller dental practice?',
    answer:
      'Yes! Dr. Divya Shetty and our team warmly welcome new patients of all ages—from children and teens to adults and seniors. Whether you need a routine cleaning, cosmetic enhancement, or restorative work, we would love to care for your smile.',
  },
  {
    id: 'faq-services',
    question: 'What dental services do you provide in Mueller Austin?',
    answer:
      'We offer comprehensive family and cosmetic dental services, including general preventive cleanings, CEREC single-visit same-day crowns, professional teeth whitening, porcelain veneers, dental implants, tooth-colored fillings, and anxiety-free sedation dentistry.',
  },
  {
    id: 'faq-emergency',
    question: 'Do you offer same-day emergency dental appointments in Mueller?',
    answer:
      'Yes. If you suffer from severe toothaches, a chipped or broken tooth, a knocked-out tooth, or swollen gums, please call us at (512) 467-9955 right away. We reserve dedicated time in our schedule for urgent same-day emergency dental visits.',
  },
  {
    id: 'faq-insurance',
    question: 'What dental insurance plans and financing options do you accept?',
    answer:
      'We accept most major PPO dental insurance providers, including Delta Dental, Aetna, MetLife, Cigna, Blue Cross Blue Shield, Principal, and Sun Life. For out-of-pocket treatments or patients without insurance, we offer flexible payment solutions through CareCredit and Sunbit.',
  },
  {
    id: 'faq-why-choose',
    question: 'What sets Dr. Divya Shetty and Dental Smiles apart in Mueller?',
    answer:
      'Dental Smiles is a locally and female-owned private dental practice built on trust, clinical excellence, and patient comfort. Dr. Divya Shetty brings over 20 years of expertise and utilizes advanced technologies like CEREC 3D imaging and digital impressions to deliver precise, gentle care without high-pressure sales.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-location');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const schemaFaqs = defaultFaqs.map((item) => ({
    q: item.question,
    a: item.answer,
  }));

  return (
    <section className="py-12 md:py-16 bg-slate-100/70 border-t border-slate-200/80">
      {/* Schema Markup for Google Rich Results */}
      <FaqSchema faqs={schemaFaqs} />

      <div className="container-clinical">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about our Mueller, Austin dental office, insurance plans, emergency care, and treatment options.
          </p>
        </div>

        {/* Accordion FAQ Container with Darker Outlines & Subtle Grey Box Contrast */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {defaultFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-primary/60 bg-white shadow-md ring-1 ring-primary/20'
                    : 'border-slate-300 bg-slate-50/90 hover:border-slate-400 hover:bg-white shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-content`}
                  id={`${faq.id}-button`}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
                >
                  <span className={`font-heading font-bold text-base sm:text-lg pr-4 leading-snug transition-colors ${
                    isOpen ? 'text-primary' : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-primary text-primary-foreground rotate-180 shadow-sm'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`${faq.id}-content`}
                    role="region"
                    aria-labelledby={`${faq.id}-button`}
                    className="px-5 pb-5 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/80 font-normal animate-in fade-in-50 duration-200 bg-white"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
