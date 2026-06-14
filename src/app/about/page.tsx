import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the artist behind Anh Do — a Helsinki-based freelance makeup artist committed to Nordic clean beauty, cruelty-free products, and timeless results.",
};

const brands = [
  { name: "Kjaer Weis", reason: "Refillable packaging, luxurious pigment" },
  { name: "RMS Beauty", reason: "Raw, food-grade ingredients" },
  { name: "Ilia Beauty", reason: "Skin care + makeup hybrids" },
  { name: "Westman Atelier", reason: "Clean luxury, editorial performance" },
  { name: "Ere Perez", reason: "Plant-based, vegan certified" },
  { name: "Antonym", reason: "ECOCERT organic certified" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--color-birch-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-7">
            <p
              className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-fjord-slate)]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
            >
              About
            </p>
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-[var(--color-charcoal-birch)]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Beauty that feels
              <br />
              entirely like you.
            </h1>
            <p
              className="text-[16px] text-[var(--color-ash)] leading-[1.7] max-w-lg"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              I believe the best makeup disappears into the skin — it simply
              makes you look like the most radiant, rested version of yourself.
              That conviction has shaped every creative decision I have made
              since picking up a brush in Helsinki over a decade ago.
            </p>
            <p
              className="text-[16px] text-[var(--color-ash)] leading-[1.7] max-w-lg"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              My work spans bridal, editorial, and personal occasions — and the
              thread running through all of it is Nordic restraint: clean lines,
              considered colour, and skin that glows rather than covers.
            </p>
          </div>
          {/* Photo placeholder */}
          <div className="bg-[var(--color-linen-mist)] h-[520px] flex items-end p-6">
            <span
              className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-ash)]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Artist portrait · Replace with photo
            </span>
          </div>
        </div>
      </section>

      {/* Languages / availability */}
      <section className="py-6 bg-[var(--color-nordic-sand)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap gap-8 items-center justify-between">
          {[
            { label: "Languages", value: "Finnish · English · Swedish" },
            { label: "Based in", value: "Helsinki, Finland" },
            { label: "Available for", value: "Destination work worldwide" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span
                className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-charcoal-birch)] opacity-60"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
              >
                {label}
              </span>
              <span
                className="text-[15px] text-[var(--color-charcoal-birch)]"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Products I trust */}
      <section className="py-24 bg-[var(--color-birch-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="text-[clamp(1.8rem,3vw,2.5rem)] font-light text-[var(--color-charcoal-birch)] mb-3"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Products I trust
          </h2>
          <p
            className="text-[14px] text-[var(--color-ash)] mb-12 max-w-xl leading-[1.7]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Every brand in my kit meets the same standard: cruelty-free
            certified, free of harmful ingredients, and genuinely high-performing.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {brands.map(({ name, reason }) => (
              <div key={name} className="border border-[rgba(201,185,154,0.4)] p-6 flex flex-col gap-2">
                <h3
                  className="text-[18px] font-light text-[var(--color-charcoal-birch)]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {name}
                </h3>
                <p
                  className="text-[13px] text-[var(--color-ash)] leading-[1.6]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-[var(--color-linen-mist)]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <blockquote
            className="text-[clamp(1.4rem,3vw,2rem)] font-light leading-[1.5] text-[var(--color-charcoal-birch)]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic" }}
          >
            &ldquo;I want every client to leave my chair feeling more like
            themselves — just on their very best day.&rdquo;
          </blockquote>
          <p
            className="mt-5 text-[13px] text-[var(--color-ash)]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            — Anh Do
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-birch-white)] text-center">
        <Link
          href="/booking"
          className="inline-block px-8 py-3.5 rounded-full bg-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)] text-[14px] tracking-wide hover:bg-[var(--color-nordic-sand-dark)] transition-colors duration-200"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
        >
          Work with me
        </Link>
      </section>
    </>
  );
}
