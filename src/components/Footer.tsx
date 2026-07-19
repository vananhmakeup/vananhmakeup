import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com/vananhmakeupyouglow", label: "Instagram", icon: InstagramIcon },
  { href: "https://www.tiktok.com/@van.anh.do68", label: "Tiktok", icon: TiktokIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal-birch)] text-[var(--color-linen-mist)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex flex-col leading-none">
            <span
              className="text-3xl font-light tracking-tight text-[var(--color-off-white)]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Anh Do
            </span>
            <span
              className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-ash)] mt-1"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Makeup Artist · Asian-inspired Looks
            </span>
          </Link>
          <p
            className="text-[14px] text-[var(--color-ash)] leading-relaxed max-w-xs"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Asian-inspired soft glam, refined bridal styling, and editorial
            beauty direction — crafted with intention.
          </p>
          <div className="flex gap-4 mt-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--color-ash)] hover:text-[var(--color-nordic-sand)] transition-colors duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p
            className="text-[11px] tracking-[0.16em] uppercase text-[var(--color-ash)] mb-5"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
          >
            Navigation
          </p>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[14px] text-[var(--color-linen-mist)] hover:text-[var(--color-nordic-sand)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p
            className="text-[11px] tracking-[0.16em] uppercase text-[var(--color-ash)] mb-5"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
          >
            Get in Touch
          </p>
          <ul className="flex flex-col gap-3 text-[14px] text-[var(--color-linen-mist)]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
            <li>
              <a
                href="mailto:vananhdo2703@gmail.com"
                className="hover:text-[var(--color-nordic-sand)] transition-colors duration-200"
              >
                vananhdo2703@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+358413253986"
                className="hover:text-[var(--color-nordic-sand)] transition-colors duration-200"
              >
                +358 41 325 3986
              </a>
            </li>
            <li>Espoo, Finland</li>
            <li className="text-[var(--color-ash)]">Available for destination work across Europe & Asia</li>
          </ul>
          <Link
            href="/booking"
            className="inline-block mt-6 px-6 py-2.5 rounded-full border border-[var(--color-nordic-sand)] text-[var(--color-nordic-sand)] text-[13px] tracking-wide hover:bg-[var(--color-nordic-sand)] hover:text-[var(--color-charcoal-birch)] transition-all duration-200"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
          >
            Book a Consultation
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(122,118,112,0.25)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[12px] text-[var(--color-ash)]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            © {new Date().getFullYear()} Anh Do. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <LeafIcon />
            <span
              className="text-[12px] text-[var(--color-ash)]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Skin-first, cruelty-free, and sustainably minded
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-[12px] text-[var(--color-ash)] hover:text-[var(--color-nordic-sand)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-nordic-sand)]">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
