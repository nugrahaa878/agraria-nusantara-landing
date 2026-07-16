import Link from "next/link";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function Catalog() {
  const featured = products.slice(0, 3);

  return (
    <section id="katalog" className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
          Katalog Produk
        </p>
        <h2 className="font-heading mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:mt-3 sm:text-3xl md:text-4xl">
          Produk segar dari mitra petani &amp; peternak
        </h2>
        <p className="mt-3 text-base leading-7 text-foreground/80 sm:mt-4 sm:text-lg sm:leading-8">
          Tertarik dengan salah satu produk? Hubungi kami langsung lewat
          WhatsApp untuk mulai memesan.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center sm:mt-10">
        <Link
          href="/katalog"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
        >
          Lihat Semua Produk
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
