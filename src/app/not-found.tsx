import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center bg-[var(--color-birch-white)] py-32">
      <div className="text-center flex flex-col items-center gap-6 px-6">
        <span
          className="text-[8rem] font-light text-[var(--color-linen-mist)] leading-none select-none"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          404
        </span>
        <h1
          className="text-[2rem] font-light text-[var(--color-charcoal-birch)]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Page not found
        </h1>
        <p
          className="text-[14px] text-[var(--color-ash)] max-w-sm leading-[1.7]"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="px-7 py-3 rounded-full bg-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)] text-[13px] tracking-wide hover:bg-[var(--color-nordic-sand-dark)] transition-colors duration-200"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
