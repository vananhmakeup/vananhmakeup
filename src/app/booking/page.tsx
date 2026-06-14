"use client";

import { useState } from "react";

const serviceTypes = [
  "Bridal",
  "Bridal party",
  "Editorial / Fashion",
  "Events & Special occasions",
  "Corporate & Headshots",
  "Other",
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    location: "",
    guests: "",
    source: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to email service (Brevo / Resend)
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[var(--color-off-white)] border border-[rgba(201,185,154,0.5)] px-4 py-3 text-[14px] text-[var(--color-charcoal-birch)] placeholder:text-[var(--color-ash)] focus:outline-none focus:border-[var(--color-nordic-sand)] transition-colors duration-200";

  const labelClass =
    "block text-[11px] tracking-[0.14em] uppercase text-[var(--color-ash)] mb-1.5";

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[var(--color-birch-white)]">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p
            className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-fjord-slate)] mb-4"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
          >
            Booking
          </p>
          <h1
            className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[var(--color-charcoal-birch)] leading-[1.1] mb-5"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Let&apos;s work together
          </h1>
          <p
            className="text-[15px] text-[var(--color-ash)] leading-[1.7]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Fill out the form below and I will get back to you within 24 hours.
            Your date is not held until a deposit is received.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 bg-[var(--color-birch-white)]">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          {submitted ? (
            <div className="border border-[var(--color-nordic-sand)] p-10 text-center flex flex-col gap-4">
              <h2
                className="text-[2rem] font-light text-[var(--color-charcoal-birch)]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Thank you, {form.name.split(" ")[0]}.
              </h2>
              <p
                className="text-[15px] text-[var(--color-ash)] leading-[1.7] max-w-md mx-auto"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                I have received your enquiry and will be in touch within 24 hours.
                Keep an eye on your inbox — and your spam folder just in case.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Full name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={inputClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  />
                </div>
              </div>

              {/* Phone + Service */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+358 ..."
                    className={inputClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Service type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date + Location */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="date"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Event date *
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Location / venue
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Helsinki / venue name"
                    className={inputClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  />
                </div>
              </div>

              {/* Guests + Source */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="guests"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Number of people (bridal)
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min={1}
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="e.g. 4"
                    className={inputClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="source"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    How did you find me?
                  </label>
                  <input
                    id="source"
                    name="source"
                    type="text"
                    value={form.source}
                    onChange={handleChange}
                    placeholder="Instagram, referral, Google..."
                    className={inputClass}
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={labelClass}
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Tell me about your vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe the look, feel, or any reference images you have in mind..."
                  className={`${inputClass} resize-none`}
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                />
              </div>

              {/* Trust note */}
              <p
                className="text-[12px] text-[var(--color-ash)] leading-[1.6]"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Your date is not held until a deposit is received. I respond to all
                enquiries within 24 hours.
              </p>

              <button
                type="submit"
                className="self-start px-8 py-3.5 rounded-full bg-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)] text-[14px] tracking-wide hover:bg-[var(--color-nordic-sand-dark)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
              >
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 bg-[var(--color-linen-mist)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap gap-8 justify-center">
          {[
            "Responds within 24 hours",
            "Cruelty-free products only",
            "Available for destination weddings",
            "Finnish · English · Swedish",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-nordic-sand)]" />
              <span
                className="text-[13px] text-[var(--color-ash)]"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
