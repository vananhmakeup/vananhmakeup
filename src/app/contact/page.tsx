import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Anh Do — makeup artist Helsinki. For bookings, press enquiries, and collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-[var(--color-birch-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-7">
            <p
              className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-fjord-slate)]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
            >
              Contact
            </p>
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[var(--color-charcoal-birch)] leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Say hello.
            </h1>
            <p
              className="text-[15px] text-[var(--color-ash)] leading-[1.7] max-w-md"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              For booking enquiries, please use the{" "}
              <Link href="/booking" className="underline underline-offset-2 hover:text-[var(--color-charcoal-birch)] transition-colors duration-200">
                booking form
              </Link>
              . For press, collaborations, or general questions, reach out directly.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              {[
                { label: "Email", value: "hello@Anh Do.fi", href: "mailto:hello@Anh Do.fi" },
                { label: "Instagram", value: "@Anh Domakeup", href: "https://instagram.com" },
                { label: "Location", value: "Helsinki, Finland", href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span
                    className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-ash)]"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-[16px] text-[var(--color-charcoal-birch)] hover:text-[var(--color-nordic-sand)] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span
                      className="text-[16px] text-[var(--color-charcoal-birch)]"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Response time card */}
          <div className="border border-[rgba(201,185,154,0.5)] p-10 flex flex-col gap-4">
            <h2
              className="text-[1.8rem] font-light text-[var(--color-charcoal-birch)]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Quick note
            </h2>
            <p
              className="text-[14px] text-[var(--color-ash)] leading-[1.7]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              I read and respond to every message personally. You can expect a
              reply within 24 hours, usually sooner. If your date is urgent,
              mention it in your message and I will prioritise it.
            </p>
            <p
              className="text-[14px] text-[var(--color-ash)] leading-[1.7]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              I work in Finnish, English, and Swedish — please write in whichever
              feels most natural to you.
            </p>
            <Link
              href="/booking"
              className="mt-4 self-start px-6 py-2.5 rounded-full bg-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)] text-[13px] tracking-wide hover:bg-[var(--color-nordic-sand-dark)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
            >
              Go to booking form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
