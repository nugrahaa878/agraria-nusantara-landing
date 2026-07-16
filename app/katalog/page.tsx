import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ContactFooter from "../components/ContactFooter";
import CatalogGrid from "../components/CatalogGrid";

export const metadata: Metadata = {
  title: "Katalog Produk — Agratara",
  description:
    "Jelajahi produk segar hasil tani dan peternakan dari mitra petani dan peternak Agratara di seluruh Indonesia.",
};

export default function KatalogPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
              Katalog Produk
            </p>
            <h1 className="font-heading mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:mt-3 sm:text-3xl md:text-4xl">
              Semua produk dari mitra petani &amp; peternak
            </h1>
            <p className="mt-3 text-base leading-7 text-foreground/80 sm:mt-4 sm:text-lg sm:leading-8">
              Pilih kategori untuk melihat produk, lalu hubungi kami lewat
              WhatsApp untuk mulai memesan.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <CatalogGrid />
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
