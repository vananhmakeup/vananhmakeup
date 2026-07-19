"use client";

import { useState } from "react";

const faqs = [
  {
    category: "Booking & Availability",
    items: [
      {
        q: "How far in advance should I book?",
        a: "For weddings, I recommend booking 9–12 months in advance, especially for spring and autumn dates. For editorial and event work, 2–4 weeks is usually sufficient.",
      },
      {
        q: "Do you hold dates without a deposit?",
        a: "No — your date is only secured once a deposit has been received. Deposits are non-refundable but transferable to a new date if rescheduled with more than 30 days' notice.",
      },
      {
        q: "Do you offer virtual consultations?",
        a: "Yes. Initial consultations can be held via video call, which works particularly well for international clients or destination weddings.",
      },
    ],
  },
  {
    category: "Bridal Services",
    items: [
      {
        q: "Is a bridal trial included?",
        a: "Yes — all bridal packages include a full two-hour trial session. The trial is where we perfect complexion glow, eye shape balance, lash style, and lip tones so everything performs beautifully on the day.",
      },
      {
        q: "How long does the wedding day application take?",
        a: "Typically 90 minutes for the bride and 45–60 minutes per additional person. I will give you a precise schedule once I know the full party size.",
      },
      {
        q: "Do you travel to the venue?",
        a: "Yes. Travel within Helsinki is included in all packages. For locations further out, a travel surcharge applies at €0.40 per kilometre.",
      },
    ],
  },
  {
    category: "Products & Allergies",
    items: [
      {
        q: "Are all products cruelty-free?",
        a: "Yes, without exception. Every product in my kit is certified cruelty-free. Most are also vegan. I will never use a product that has been tested on animals.",
      },
      {
        q: "What if I have sensitive skin or allergies?",
        a: "Please let me know when you enquire. I will review the ingredient lists of everything I plan to use and, if needed, we can do a patch test at the consultation. Clients with known allergies should always inform me in advance.",
      },
      {
        q: "Can you recommend products for me to buy?",
        a: "Yes — after any session, I send a personalised product list so you can maintain your look at home with similar textures and tones.",
      },
    ],
  },
  {
    category: "Travel & Location",
    items: [
      {
        q: "Do you travel for destination weddings?",
        a: "Yes. I am available for destination work across Europe and Asia. Travel, accommodation, and daily rates for international bookings are discussed as part of the quotation process.",
      },
      {
        q: "Can you come to my home or venue?",
        a: "Absolutely. I work on-location as standard. A well-lit space with a chair and power access is all that is needed.",
      },
    ],
  },
  {
    category: "Payments & Cancellation",
    items: [
      {
        q: "How do I pay?",
        a: "A 30% deposit secures your date. The remaining balance is due 14 days before the event. I accept bank transfer and all major cards.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Deposits are non-refundable. Cancellations made less than 30 days before the event are charged at 50% of the full booking fee. Cancellations less than 14 days prior are charged in full.",
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen((prev) => (prev === key ? null : key));

  return (
    <>
      <section className="pt-32 pb-24 bg-[var(--color-birch-white)]">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p
            className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-fjord-slate)] mb-4"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
          >
            FAQ
          </p>
          <h1
            className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[var(--color-charcoal-birch)] leading-[1.1] mb-16"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Common questions
          </h1>

          <div className="flex flex-col gap-12">
            {faqs.map(({ category, items }) => (
              <div key={category}>
                <h2
                  className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-ash)] mb-6 pb-3 border-b border-[rgba(201,185,154,0.4)]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
                >
                  {category}
                </h2>
                <div className="flex flex-col">
                  {items.map(({ q, a }) => {
                    const key = `${category}:${q}`;
                    const isOpen = open === key;
                    return (
                      <div key={q} className="border-b border-[rgba(201,185,154,0.25)] last:border-b-0">
                        <button
                          onClick={() => toggle(key)}
                          className="w-full text-left flex items-start justify-between gap-4 py-5"
                        >
                          <span
                            className="text-[15px] text-[var(--color-charcoal-birch)] leading-[1.5]"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
                          >
                            {q}
                          </span>
                          <span
                            className={`flex-shrink-0 text-[var(--color-nordic-sand)] text-xl leading-none transition-transform duration-200 mt-0.5 ${isOpen ? "rotate-45" : ""}`}
                          >
                            +
                          </span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
                        >
                          <p
                            className="text-[14px] text-[var(--color-ash)] leading-[1.7]"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                          >
                            {a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
