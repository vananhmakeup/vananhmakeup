import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vananhh collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-birch-white)]">
      <div className="max-w-3xl mx-auto px-6 md:px-10 flex flex-col gap-8">
        <h1
          className="text-[3rem] font-light text-[var(--color-charcoal-birch)]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Privacy Policy
        </h1>
        <p
          className="text-[13px] text-[var(--color-ash)]"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Last updated: June 2026
        </p>
        {[
          {
            title: "Data collected",
            body: "When you submit a booking enquiry, I collect your name, email address, phone number (optional), and the details you provide about your event. This data is used solely to respond to your enquiry and manage your booking.",
          },
          {
            title: "Data storage",
            body: "Enquiry data is stored securely and is not shared with third parties except where required to fulfil your booking (e.g. payment processing). Data is retained for up to 3 years for accounting purposes, then securely deleted.",
          },
          {
            title: "Your rights",
            body: "Under GDPR, you have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact hello@vananhh.fi.",
          },
          {
            title: "Cookies",
            body: "This website uses minimal cookies for analytics purposes. No personal data is shared with advertising networks. You can manage cookie preferences via the banner shown on first visit.",
          },
          {
            title: "Contact",
            body: "For any data-related enquiries, contact: hello@vananhh.fi",
          },
        ].map(({ title, body }) => (
          <div key={title} className="flex flex-col gap-2">
            <h2
              className="text-[1.3rem] font-light text-[var(--color-charcoal-birch)]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {title}
            </h2>
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
  );
}
