import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center bg-[var(--color-birch-white)] pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-[55%_45%] gap-0 items-center">
          {/* Image placeholder */}
          <div className="relative h-[60vh] md:h-screen md:-mt-16 bg-[var(--color-linen-mist)] overflow-hidden">
            <Image
              src="/images/ngocha1.JPG"
              alt="Bridal makeup portfolio look"
              fill
              priority
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-16 md:pl-16 flex flex-col gap-6">
            <p
              className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-fjord-slate)]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
            >
              Asian-inspired artistry · Est. 2017
            </p>
            <h1
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] text-[var(--color-charcoal-birch)]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Asian beauty,
              <br />
              crafted with
              <br />
              intention.
            </h1>
            <p
              className="text-[16px] text-[var(--color-ash)] leading-[1.7] max-w-sm"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Freelance makeup artist specialising in bridal, editorial, and soft
              glam looks inspired by Vietnamese elegance, Chinese refinement,
              Thai radiance, and Korean skin-first beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href="/portfolio"
                className="px-7 py-3 rounded-full bg-[var(--color-charcoal-birch)] text-[var(--color-off-white)] text-[13px] tracking-wide hover:bg-[#3e3d3a] transition-colors duration-200 text-center"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
              >
                View Portfolio
              </Link>
              <Link
                href="/booking"
                className="px-7 py-3 rounded-full border border-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)] text-[13px] tracking-wide hover:bg-[var(--color-nordic-sand)] transition-colors duration-200 text-center"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy Strip ── */}
      <section className="bg-[var(--color-linen-mist)] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Asian Soft Glam",
              body: "Fresh skin, airy layers, and thoughtfully placed definition for a polished look that still feels light.",
              icon: <MinimalismIcon />,
            },
            {
              title: "Skin-first Ritual",
              body: "Hydration prep and lightweight formulas help makeup wear beautifully while keeping skin comfortable all day.",
              icon: <LeafIcon />,
            },
            {
              title: "Camera-ready Finish",
              body: "Looks that read softly in person, photograph cleanly, and stay refined from ceremony to after-party.",
              icon: <DiamondIcon />,
            },
          ].map(({ title, body, icon }) => (
            <div key={title} className="flex flex-col gap-4">
              <div className="text-[var(--color-nordic-sand)]">{icon}</div>
              <h3
                className="text-xl font-light text-[var(--color-charcoal-birch)]"
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
      </section>

      {/* ── Portfolio Preview ── */}
      <section className="py-24 bg-[var(--color-birch-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {([
              { label: "Bridal", src: "/images/NAM_1084.JPG" },
              { label: "Concepts", src: "/images/0C8A4515.JPG" },
              { label: "Asian Soft Glam", src: "/images/IMG_8316.jpg" },
              { label: "Tea Ceremony", src: "/images/IMG_7324.JPG" },
            ] as { label: string; src: string }[]).map(({ label, src }) => (
              <div key={label} className="bg-[var(--color-linen-mist)] relative overflow-hidden group aspect-[3/4]">
                <Image
                  src={src}
                  alt={`${label} portfolio image`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[rgba(44,43,41,0.14)]" />
                <span
                  className="absolute bottom-3 left-3 text-[10px] tracking-[0.18em] uppercase text-[var(--color-off-white)]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/portfolio"
              className="text-[var(--color-charcoal-birch)] hover:text-[var(--color-nordic-sand)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "20px" }}
            >
              Explore the full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="py-24 bg-[var(--color-birch-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-light text-[var(--color-charcoal-birch)] mb-16 text-center"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Bridal & Bridesmaid",
                description: [
                  "Complimentary initial consultation",
                  "Wedding day application",
                  "K-beauty inspired skin prep and glow layering",
                  "Touch-up kit to keep",
                ],
                price: "From €250",
                href: "/booking",
              },
              {
                name: "Personal Makeup Course",
                description: [
                  "5 structured lessons",
                  "Skin prep, base, contour and blush",
                  "Eye, brow and lip detail training",
                  "Personalised product guidance",
                ],
                price: "€250 for 5 lessons",
                href: "/booking",
              },
              {
                name: "Events & Personal",
                description: [
                  "Special occasions",
                  "Corporate & headshots",
                  "Film & TV",
                  "Product recommendations included",
                ],
                price: "From €120",
                href: "/booking",
              },
            ].map(({ name, description, price, href }) => (
              <div
                key={name}
                className="border border-[var(--color-nordic-sand)] p-8 flex flex-col gap-5 hover:shadow-[0_4px_24px_rgba(201,185,154,0.2)] transition-shadow duration-300"
              >
                <h3
                  className="text-2xl font-light text-[var(--color-charcoal-birch)]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {name}
                </h3>
                <ul className="flex flex-col gap-2">
                  {description.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[13px] text-[var(--color-ash)]"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--color-nordic-sand)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span
                    className="text-[var(--color-charcoal-birch)] text-[15px]"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
                  >
                    {price}
                  </span>
                  <Link
                    href={href}
                    className="text-[13px] text-[var(--color-fjord-slate)] hover:text-[var(--color-nordic-sand)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-[var(--color-linen-mist)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-16">
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-light text-[var(--color-charcoal-birch)] text-center"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            What clients say
          </h2>
          {[
            {
              quote:
                "She created exactly the Asian soft-glam look I wanted: luminous skin, delicate eyes, and a lip tone that looked effortless in every photo.",
              author: "Emilia K.",
              location: "Helsinki",
              date: "June 2024",
            },
            {
              quote:
                "Our editorial concept blended modern couture with East Asian beauty references, and she translated it perfectly on set. Clean, elevated, and incredibly photogenic.",
              author: "Markus V.",
              location: "Creative Director",
              date: "March 2024",
            },
          ].map(({ quote, author, location, date }, i) => (
            <div
              key={author}
              className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Monogram */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[var(--color-nordic-sand)] flex items-center justify-center">
                <span
                  className="text-xl font-light text-[var(--color-charcoal-birch)]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {author[0]}
                </span>
              </div>
              <div className="flex flex-col gap-3 max-w-2xl">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} />
                  ))}
                </div>
                <blockquote
                  className="text-[clamp(1.1rem,2.5vw,1.4rem)] font-light leading-[1.6] text-[var(--color-charcoal-birch)]"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic" }}
                >
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <cite
                  className="text-[13px] text-[var(--color-ash)] not-italic"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  — {author}, {location} · {date}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Booking CTA Banner ── */}
      <section className="relative py-28 bg-[var(--color-charcoal-birch)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[var(--color-linen-mist)]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center flex flex-col items-center gap-6">
          <h2
            className="text-[clamp(1.8rem,4vw,3rem)] font-light text-[var(--color-off-white)] leading-[1.2]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Your wedding day deserves
            <br />
            your signature glow.
          </h2>
          <p
            className="text-[var(--color-ash)] text-[15px] max-w-md leading-[1.7]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Dates fill quickly for spring wedding season and festival weekends.
            Reach out early to reserve your date.
          </p>
          <Link
            href="/booking"
            className="mt-2 px-8 py-3.5 rounded-full bg-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)] text-[14px] tracking-wide hover:bg-[var(--color-nordic-sand-dark)] transition-colors duration-200"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
          >
            Check Availability
          </Link>
        </div>
      </section>
    </>
  );
}

/* ── Icons ── */

function MinimalismIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="7" x2="14" y2="7" />
      <line x1="4" y1="17" x2="10" y2="17" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M2 8.5l10 7 10-7" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-nordic-sand)" stroke="var(--color-nordic-sand)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
