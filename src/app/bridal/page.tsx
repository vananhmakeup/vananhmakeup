import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bridal Makeup Helsinki",
  description:
    "High-end bridal makeup artist in Helsinki. Cruelty-free, tailored to your vision. Covering brides, bridesmaid parties, and destination weddings.",
};

const packages = [
  {
    name: "Essentials",
    highlight: false,
    includes: ["Bridal trial (2 hrs)", "Wedding day application", "Travel in Helsinki"],
    price: "€280",
    note: "Bride only",
  },
  {
    name: "Signature",
    highlight: true,
    includes: [
      "Bridal trial (2 hrs)",
      "Wedding day application",
      "Up to 2 bridesmaids",
      "Touch-up kit",
      "Travel in Helsinki",
    ],
    price: "€480",
    note: "Most popular",
  },
  {
    name: "Atelier",
    highlight: false,
    includes: [
      "Bridal trial (2 hrs)",
      "Wedding day application",
      "Full bridal party (up to 5)",
      "Mother of bride/groom",
      "Touch-up kit",
      "Travel within 60km",
    ],
    price: "From €780",
    note: "Full party",
  },
];

const timeline = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "We meet — in person or via video — to discuss your wedding vision, skincare, any sensitivities, and the overall aesthetic you are going for.",
  },
  {
    step: "02",
    title: "Trial Session",
    body: "A full two-hour session to create and refine your look. We test everything from product performance to how the makeup holds through light, cameras, and emotions.",
  },
  {
    step: "03",
    title: "Wedding Day",
    body: "I arrive early, work calmly, and ensure every person in the chair feels wonderful. You keep a touch-up kit to carry with you.",
  },
  {
    step: "04",
    title: "After Care",
    body: "I send through a personalised product list for maintaining your look and skin routine post-wedding.",
  },
];

export default function BridalPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-end bg-[var(--color-linen-mist)] pt-16">
        <div className="relative w-full">
          {/* Image placeholder */}
          <div className="w-full h-[70vh] bg-[var(--color-linen-mist)] flex items-end p-8">
            <span className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-ash)]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Replace with full-bleed bridal hero photo
            </span>
          </div>
          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-xl">
            <h1
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[var(--color-charcoal-birch)] leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Your most beautiful
              <br />
              day begins here.
            </h1>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[var(--color-birch-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="text-[clamp(1.8rem,3vw,2.5rem)] font-light text-[var(--color-charcoal-birch)] mb-16"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            The experience
          </h2>
          <div className="flex flex-col gap-0">
            {timeline.map(({ step, title, body }, i) => (
              <div
                key={step}
                className={`grid md:grid-cols-[1fr_1px_1fr] gap-8 py-12 ${i < timeline.length - 1 ? "border-b border-[rgba(201,185,154,0.3)]" : ""}`}
              >
                <div className="flex items-start gap-6">
                  <span
                    className="text-[5rem] font-light leading-none text-[var(--color-linen-mist)] select-none flex-shrink-0"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {step}
                  </span>
                  <h3
                    className="text-[1.6rem] font-light text-[var(--color-charcoal-birch)] mt-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {title}
                  </h3>
                </div>
                <div className="hidden md:block bg-[rgba(201,185,154,0.3)]" />
                <p
                  className="text-[15px] text-[var(--color-ash)] leading-[1.7] self-center"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-[var(--color-linen-mist)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="text-[clamp(1.8rem,3vw,2.5rem)] font-light text-[var(--color-charcoal-birch)] mb-4"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Packages
          </h2>
          <p
            className="text-[14px] text-[var(--color-ash)] mb-12 max-w-lg"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            All packages include a complimentary initial consultation and use only
            cruelty-free, sustainably sourced products.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map(({ name, highlight, includes, price, note }) => (
              <div
                key={name}
                className={`p-8 flex flex-col gap-5 ${
                  highlight
                    ? "border-2 border-[var(--color-nordic-sand)] shadow-[0_4px_32px_rgba(201,185,154,0.25)]"
                    : "border border-[rgba(201,185,154,0.4)]"
                } bg-[var(--color-off-white)]`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className="text-[1.5rem] font-light text-[var(--color-charcoal-birch)]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {name}
                  </h3>
                  <span
                    className="text-[11px] tracking-[0.12em] uppercase text-[var(--color-fjord-slate)]"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {note}
                  </span>
                </div>
                <ul className="flex flex-col gap-2.5 flex-1">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13px] text-[var(--color-ash)]"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-[var(--color-nordic-sand)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[rgba(201,185,154,0.3)] flex items-center justify-between">
                  <span
                    className="text-[1.6rem] font-light text-[var(--color-charcoal-birch)]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {price}
                  </span>
                  <Link
                    href="/booking"
                    className="px-5 py-2 rounded-full bg-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)] text-[12px] tracking-wide hover:bg-[var(--color-nordic-sand-dark)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="py-16 bg-[var(--color-charcoal-birch)] text-center">
        <h2
          className="text-[1.8rem] font-light text-[var(--color-off-white)] mb-3"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Dates fill fast — check yours now
        </h2>
        <p
          className="text-[14px] text-[var(--color-ash)] mb-8"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Summer and autumn weekends book up to a year in advance.
        </p>
        <Link
          href="/booking"
          className="inline-block px-8 py-3.5 rounded-full bg-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)] text-[14px] tracking-wide hover:bg-[var(--color-nordic-sand-dark)] transition-colors duration-200"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
        >
          Check Availability
        </Link>
      </section>
    </>
  );
}
