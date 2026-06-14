import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/bridal", label: "Bridal" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
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
              Vananhh
            </span>
            <span
              className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-ash)] mt-1"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Makeup Artist · Helsinki
            </span>
          </Link>
          <p
            className="text-[14px] text-[var(--color-ash)] leading-relaxed max-w-xs"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Nordic clean beauty, high-end bridal styling, and editorial fashion
            makeup — crafted with intention.
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
                href="mailto:hello@vananhh.fi"
                className="hover:text-[var(--color-nordic-sand)] transition-colors duration-200"
              >
                hello@vananhh.fi
              </a>
            </li>
            <li>Helsinki, Finland</li>
            <li className="text-[var(--color-ash)]">Available for destination work worldwide</li>
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
            © {new Date().getFullYear()} Vananhh. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <LeafIcon />
            <span
              className="text-[12px] text-[var(--color-ash)]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Cruelty-free &amp; sustainably minded
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

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
