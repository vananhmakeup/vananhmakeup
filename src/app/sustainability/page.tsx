import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability & Ethics",
  description:
    "Vananhh's commitment to cruelty-free, vegan, and sustainably sourced beauty products. A transparent look at the eco-conscious standards behind every look.",
};

const standards = [
  { title: "Cruelty-free certified", body: "Every brand must hold a recognised cruelty-free certification (Leaping Bunny, PETA, or equivalent). No exceptions." },
  { title: "Vegan where possible", body: "The majority of my kit is fully vegan. Where a product is not vegan, I flag it and offer an alternative on request." },
  { title: "Sustainable packaging", body: "I prioritise brands that use recyclable, refillable, or minimal packaging — starting with Kjaer Weis refillables." },
  { title: "No harmful ingredients", body: "I avoid parabens, sulphates, synthetic fragrances, and known skin irritants. Especially important for bridal clients." },
];

const kitPractices = [
  "Single-use spatulas and disposable applicators for all shared products",
  "Hospital-grade brush cleaner used between every client",
  "Products decanted rather than applied directly from packaging",
  "Latex-free options available on request",
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-linen-mist)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p
            className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-fjord-slate)] mb-4"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
          >
            Ethics & Sustainability
          </p>
          <h1
            className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[var(--color-charcoal-birch)] leading-[1.1] max-w-2xl"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Beauty should not cost the earth.
          </h1>
          <p
            className="mt-6 text-[16px] text-[var(--color-ash)] leading-[1.7] max-w-2xl"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            This is not a marketing claim — it is a working standard I apply to
            every product decision, every brand relationship, and every kit
            I build. My clients deserve to know exactly what is touching their skin,
            and why I chose it.
          </p>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-[var(--color-birch-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="text-[1.8rem] font-light text-[var(--color-charcoal-birch)] mb-10"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Product standards
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {standards.map(({ title, body }) => (
              <div key={title} className="p-8 border border-[rgba(201,185,154,0.4)]">
                <h3
                  className="text-[1.2rem] font-light text-[var(--color-charcoal-birch)] mb-3"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {title}
                </h3>
                <p
                  className="text-[14px] text-[var(--color-ash)] leading-[1.7]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit hygiene */}
      <section className="py-20 bg-[var(--color-linen-mist)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14">
          <div>
            <h2
              className="text-[1.8rem] font-light text-[var(--color-charcoal-birch)] mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Kit hygiene & waste
            </h2>
            <ul className="flex flex-col gap-3">
              {kitPractices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] text-[var(--color-ash)] leading-[1.6]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  <span className="mt-[8px] w-1 h-1 rounded-full bg-[var(--color-nordic-sand)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className="text-[1.8rem] font-light text-[var(--color-charcoal-birch)] mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Travel & carbon
            </h2>
            <p
              className="text-[14px] text-[var(--color-ash)] leading-[1.7]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              For local Helsinki bookings, I travel by public transit where possible.
              Initial consultations are offered via video call to reduce unnecessary
              journeys. For destination work, I consolidate travel to minimise
              individual trips.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
