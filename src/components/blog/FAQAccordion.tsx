'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
}

export default function FAQAccordion({ items = [] }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-12 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
        <span>❓ Frequently Asked Questions</span>
      </h2>
      <div className="divide-y divide-neutral-100">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4 first:pt-0 last:pb-0">
              <button
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                className="w-full text-left flex justify-between items-center gap-4 py-2 text-base font-semibold text-neutral-900 hover:text-indigo-600 transition-colors focus:outline-none"
              >
                <span>{item.question}</span>
                <span className="text-neutral-400 text-lg transition-transform duration-200">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="mt-2 text-sm leading-relaxed text-neutral-600 pr-4">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}