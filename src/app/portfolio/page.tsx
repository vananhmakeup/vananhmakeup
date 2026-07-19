"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "All",
  "Bridal",
  "Concepts",
  "Events",
  "Asian Soft Glam",
  "Tea Ceremony",
  "Signature",
] as const;
type Category = (typeof categories)[number];

type PortfolioItem = {
  id: number;
  src: string;
  title: string;
  tags: Exclude<Category, "All">[];
};

const imageSrc = (fileName: string) => `/images/${encodeURIComponent(fileName)}`;

const items: PortfolioItem[] = [
  { id: 1, src: imageSrc("0C8A2330.JPG"), title: "Bridal glow portrait", tags: ["Bridal", "Signature", "Asian Soft Glam"] },
  { id: 2, src: imageSrc("0C8A2369.JPG"), title: "Classic bridal portrait", tags: ["Bridal", "Signature", "Asian Soft Glam"] },
  { id: 3, src: imageSrc("0C8A2453.JPG"), title: "Pearl gown bridal look", tags: ["Bridal", "Signature"] },
  { id: 4, src: imageSrc("0C8A4444.JPG"), title: "Fantasy crystal concept", tags: ["Concepts", "Signature"] },
  { id: 5, src: imageSrc("0C8A4509.JPG"), title: "Crystal flower close-up", tags: ["Concepts", "Signature"] },
  { id: 6, src: imageSrc("0C8A4515.JPG"), title: "Butterfly glam portrait", tags: ["Concepts", "Signature"] },
  { id: 7, src: imageSrc("0C8A4519.JPG"), title: "Butterfly glam close-up", tags: ["Concepts", "Signature"] },
  { id: 8, src: imageSrc("0C8A7210.JPG"), title: "Modern black-tie glam", tags: ["Concepts", "Events"] },
  { id: 9, src: imageSrc("0C8A7219.JPG"), title: "Bronze sculpt glam", tags: ["Concepts", "Signature"] },
  { id: 10, src: imageSrc("DSC04731.JPG"), title: "Evening event portrait", tags: ["Events", "Asian Soft Glam"] },
  { id: 11, src: imageSrc("IMG_5473.JPG"), title: "Bridal fitting glow", tags: ["Bridal", "Asian Soft Glam"] },
  { id: 12, src: imageSrc("IMG_6915.JPG"), title: "Romantic event glam", tags: ["Events", "Asian Soft Glam"] },
  { id: 13, src: imageSrc("IMG_6918.JPG"), title: "Dewy close-up beauty", tags: ["Asian Soft Glam", "Signature"] },
  { id: 14, src: imageSrc("IMG_7324.JPG"), title: "Red ao dai bridal", tags: ["Bridal", "Tea Ceremony"] },
  { id: 15, src: imageSrc("IMG_7329 2.JPG"), title: "Tea ceremony portrait", tags: ["Bridal", "Tea Ceremony"] },
  { id: 16, src: imageSrc("IMG_7541.JPG"), title: "Modern black dress concept", tags: ["Concepts"] },
  { id: 17, src: imageSrc("IMG_7547.JPG"), title: "Black dress beauty close-up", tags: ["Concepts", "Signature"] },
  { id: 18, src: imageSrc("IMG_8311.jpg"), title: "Natural skin editorial", tags: ["Concepts", "Asian Soft Glam"] },
  { id: 19, src: imageSrc("IMG_8313.jpg"), title: "Freckled soft glam", tags: ["Concepts", "Asian Soft Glam"] },
  { id: 20, src: imageSrc("IMG_8316.jpg"), title: "Elegant side profile bride", tags: ["Bridal", "Signature"] },
  { id: 21, src: imageSrc("IMG_8666.JPG"), title: "Textured hair concept", tags: ["Concepts", "Signature"] },
  { id: 22, src: imageSrc("IMG_8715.JPG"), title: "Moody curls editorial", tags: ["Concepts", "Signature"] },
  { id: 23, src: imageSrc("IMG_9704.JPG"), title: "Blue lens glam close-up", tags: ["Concepts", "Signature"] },
  { id: 24, src: imageSrc("IMG_9745.JPG"), title: "Glamour wave portrait", tags: ["Concepts", "Signature"] },
  { id: 25, src: imageSrc("IMG_9769.JPG"), title: "Copper wave beauty", tags: ["Concepts", "Signature"] },
  { id: 26, src: imageSrc("NAM_1019.JPG"), title: "Pearl bridal portrait", tags: ["Bridal", "Signature"] },
  { id: 27, src: imageSrc("NAM_1033 2.JPG"), title: "Bridal seated portrait", tags: ["Bridal", "Signature"] },
  { id: 28, src: imageSrc("NAM_1050.JPG"), title: "Pearled bridal close-up", tags: ["Bridal", "Signature", "Asian Soft Glam"] },
  { id: 29, src: imageSrc("NAM_1084.JPG"), title: "Luminous bridal close-up", tags: ["Bridal", "Signature"] },
  { id: 30, src: imageSrc("bridal.JPG"), title: "Sparkle bridal portrait", tags: ["Bridal", "Signature"] },
  { id: 31, src: imageSrc("ngocha1.JPG"), title: "Soft bridal glam", tags: ["Bridal", "Signature", "Asian Soft Glam"] },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? items : items.filter((item) => item.tags.includes(active));

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
            {filtered.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid bg-[var(--color-linen-mist)] relative overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1200}
                  height={1600}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[rgba(44,43,41,0.08)] group-hover:bg-[rgba(44,43,41,0.18)] transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  <span
                    className="inline-flex items-center rounded-full bg-[rgba(247,245,242,0.9)] px-3 py-1 text-[10px] tracking-[0.16em] uppercase text-[var(--color-charcoal-birch)] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {item.title}
                  </span>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-[rgba(247,245,242,0.6)] bg-[rgba(44,43,41,0.28)] px-3 py-1 text-[9px] tracking-[0.18em] uppercase text-[var(--color-off-white)] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
