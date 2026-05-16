'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function FAQSection() {
  const faqs = [
    {
      question: 'How do I schedule a property visit online?',
      answer: 'You can schedule a visit directly through our website or mobile app. Select your preferred property, choose a time slot, and our team will confirm your appointment.',
    },
    {
      question: 'What are your fees and charges?',
      answer: 'Our fees vary based on the service type. We offer transparent pricing with no hidden charges. Contact our team for a detailed quote based on your specific needs.',
    },
    {
      question: 'Do you help with home loans or financing options?',
      answer: 'Yes! We work with trusted financial partners to help you explore financing options. Our mortgage specialists can guide you through the entire process.',
    },
    {
      question: 'Are there any hidden charges?',
      answer: 'Absolutely not. We believe in complete transparency. All costs are clearly outlined before you commit to any service.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We&apos;ve got answers to help you make the right decision.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="border-t border-border px-6 py-4 bg-muted/30">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
