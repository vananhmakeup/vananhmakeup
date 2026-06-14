"use client";

import { useState } from "react";

const categories = ["All", "Bridal", "Editorial", "Events", "Clean Beauty"] as const;
type Category = (typeof categories)[number];

const items: { id: number; category: Exclude<Category, "All">; label: string }[] = [
  { id: 1, category: "Bridal", label: "Bridal — Natural glow" },
  { id: 2, category: "Editorial", label: "Editorial — High fashion" },
  { id: 3, category: "Clean Beauty", label: "Clean Beauty — Skinimalism" },
  { id: 4, category: "Bridal", label: "Bridal — Classic romance" },
  { id: 5, category: "Events", label: "Events — Evening glam" },
  { id: 6, category: "Editorial", label: "Editorial — Monochrome" },
  { id: 7, category: "Clean Beauty", label: "Clean Beauty — Dewy skin" },
  { id: 8, category: "Bridal", label: "Bridal — Minimalist vows" },
  { id: 9, category: "Events", label: "Events — Corporate" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-10 bg-[var(--color-birch-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p
            className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-fjord-slate)] mb-4"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
          >
            Portfolio
          </p>
          <h1
            className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[var(--color-charcoal-birch)]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            The work
          </h1>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-[rgba(247,245,242,0.92)] backdrop-blur-md border-b border-[rgba(201,185,154,0.25)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-[12px] tracking-wide transition-colors duration-200 ${
                active === cat
                  ? "bg-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)]"
                  : "text-[var(--color-ash)] hover:text-[var(--color-charcoal-birch)] border border-transparent hover:border-[rgba(201,185,154,0.4)]"
              }`}
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 bg-[var(--color-birch-white)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-3 space-y-3">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="break-inside-avoid bg-[var(--color-linen-mist)] relative overflow-hidden group cursor-pointer"
                style={{ height: i % 3 === 0 ? "380px" : "280px" }}
              >
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03] bg-[var(--color-linen-mist)]" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[rgba(44,43,41,0)] group-hover:bg-[rgba(44,43,41,0.18)] transition-colors duration-300" />
                <span
                  className="absolute bottom-3 left-3 text-[10px] tracking-[0.18em] uppercase text-[var(--color-ash)] group-hover:text-[var(--color-off-white)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-[var(--color-ash)] py-20" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              No items in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
