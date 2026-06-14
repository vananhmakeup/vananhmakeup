import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Bridal, editorial, events, and personal makeup services in Helsinki. Transparent pricing, cruelty-free products, and a seamless booking experience.",
};

const services = [
  {
    name: "Bridal & Bridesmaid",
    tag: "Most popular",
    duration: "2–3 hours on the day",
    description:
      "Your wedding day look, perfected. From the initial consultation through to your trial and the morning itself, I am with you every step of the way.",
    includes: [
      "Complimentary initial consultation",
      "Full bridal trial session (2 hrs)",
      "Wedding day application",
      "Airbrush finish available",
      "Touch-up kit to keep",
      "Travel within Helsinki included",
    ],
    price: "From €280",
    addons: ["Additional bridesmaid: from €80", "Mother of bride/groom: from €100"],
    href: "/bridal",
    cta: "View bridal packages",
  },
  {
    name: "Editorial & Fashion",
    tag: "Best for creative work",
    duration: "Flexible",
    description:
      "Whether you need avant-garde runway looks or clean commercial beauty, I collaborate directly with your creative team to bring the vision to life.",
    includes: [
      "Concept brief review",
      "Studio and on-location",
      "Avant-garde, commercial & beauty editorial",
      "Multiple looks per day available",
      "Rush bookings considered",
    ],
    price: "From €200",
    addons: ["Full-day rate: from €550", "Half-day rate: from €300"],
    href: "/portfolio",
    cta: "View editorial work",
  },
  {
    name: "Events & Personal",
    tag: null,
    duration: "45–90 minutes",
    description:
      "Special occasions, corporate headshots, film and television, and personal styling sessions for anyone who wants to feel exceptional.",
    includes: [
      "Special occasions & galas",
      "Corporate headshots",
      "Film & TV",
      "Virtual consultations available",
      "Product recommendations included",
    ],
    price: "From €120",
    addons: ["Group bookings: contact for quote", "Virtual consultation: €45"],
    href: "/booking",
    cta: "Book a session",
  },
];

const addons = [
  { name: "Individual lash application", price: "+€20" },
  { name: "Airbrush foundation upgrade", price: "+€30" },
  { name: "On-location travel surcharge (outside Helsinki)", price: "€0.40/km" },
  { name: "Early morning surcharge (before 7am)", price: "+€40" },
  { name: "Destination wedding (international)", price: "Contact for quote" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[var(--color-birch-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p
            className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-fjord-slate)] mb-4"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
          >
            Services
          </p>
          <h1
            className="text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-[var(--color-charcoal-birch)] max-w-xl"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            What I offer
          </h1>
          <p
            className="mt-5 text-[15px] text-[var(--color-ash)] max-w-lg leading-[1.7]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            All prices include a complimentary consultation. Travel within Helsinki
            is included. International and destination enquiries are welcome.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20 bg-[var(--color-birch-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-8">
          {services.map(({ name, tag, duration, description, includes, price, addons, href, cta }) => (
            <div key={name} className="border border-[rgba(201,185,154,0.5)] p-8 md:p-10 grid md:grid-cols-[1fr_1px_1fr] gap-8 md:gap-10">
              {/* Left */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h2
                    className="text-[clamp(1.5rem,2.5vw,2rem)] font-light text-[var(--color-charcoal-birch)]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {name}
                  </h2>
                  {tag && (
                    <span
                      className="text-[11px] tracking-[0.12em] uppercase text-[var(--color-fjord-slate)] border border-[var(--color-fjord-slate)] px-3 py-1 rounded-full"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      {tag}
                    </span>
                  )}
                </div>
                <p
                  className="text-[13px] text-[var(--color-ash)] leading-[1.6]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Duration: {duration}
                </p>
                <p
                  className="text-[15px] text-[var(--color-ash)] leading-[1.7]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {description}
                </p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span
                    className="text-[22px] font-light text-[var(--color-charcoal-birch)]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {price}
                  </span>
                  <Link
                    href={href}
                    className="text-[13px] text-[var(--color-fjord-slate)] hover:text-[var(--color-nordic-sand)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {cta} →
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block bg-[rgba(201,185,154,0.3)]" />

              {/* Right */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-[11px] tracking-[0.16em] uppercase text-[var(--color-ash)]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
                >
                  Includes
                </p>
                <ul className="flex flex-col gap-2">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] text-[var(--color-charcoal-birch)]"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-nordic-sand)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  className="text-[11px] tracking-[0.16em] uppercase text-[var(--color-ash)] mt-4"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
                >
                  Optional add-ons
                </p>
                {addons.map((a) => (
                  <p key={a} className="text-[13px] text-[var(--color-ash)]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    {a}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons table */}
      <section className="py-16 bg-[var(--color-linen-mist)]">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2
            className="text-[1.8rem] font-light text-[var(--color-charcoal-birch)] mb-8"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Add-ons & extras
          </h2>
          <div className="flex flex-col">
            {addons.map(({ name, price }, i) => (
              <div
                key={name}
                className={`flex items-center justify-between py-4 ${i < addons.length - 1 ? "border-b border-[rgba(201,185,154,0.3)]" : ""}`}
              >
                <span className="text-[14px] text-[var(--color-charcoal-birch)]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {name}
                </span>
                <span className="text-[14px] text-[var(--color-ash)]" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}>
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-[var(--color-birch-white)] text-center">
        <h2
          className="text-[1.8rem] font-light text-[var(--color-charcoal-birch)] mb-6"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Ready to book?
        </h2>
        <Link
          href="/booking"
          className="inline-block px-8 py-3.5 rounded-full bg-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)] text-[14px] tracking-wide hover:bg-[var(--color-nordic-sand-dark)] transition-colors duration-200"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
        >
          Send an Enquiry
        </Link>
      </section>
    </>
  );
}
