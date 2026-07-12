"use client";

import { useState, type FormEvent } from "react";

export default function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section id="kontak" className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Siap bergabung dengan Agratara?
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Daftarkan diri Anda sebagai petani, peternak, atau pedagang
            pasar. Tim kami akan menghubungi Anda.
          </p>

          {submitted ? (
            <p
              role="status"
              className="mt-8 rounded-2xl border border-border bg-background px-6 py-4 text-base font-medium text-foreground"
            >
              Terima kasih! Kami akan segera menghubungi Anda.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="email" className="sr-only">
                Alamat email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="nama@email.com"
                className="h-12 flex-1 rounded-full border border-border bg-background px-5 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
              <button
                type="submit"
                className="h-12 cursor-pointer rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-[#3e6a4d]"
              >
                Gabung Sekarang
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-background text-muted-foreground">
        <div className="mx-auto max-w-6xl border-t border-border px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-heading text-lg font-bold text-foreground">
                Agratara
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Kedaulatan Pangan untuk Kesejahteraan Bangsa.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">
                Navigasi
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#solusi" className="hover:text-primary">
                    Solusi
                  </a>
                </li>
                <li>
                  <a href="#untuk-siapa" className="hover:text-primary">
                    Untuk Siapa
                  </a>
                </li>
                <li>
                  <a href="#produk" className="hover:text-primary">
                    Produk
                  </a>
                </li>
                <li>
                  <a href="#tentang" className="hover:text-primary">
                    Tentang
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">Kontak</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>halo@agratara.id</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">
                Ikuti Kami
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Agratara (Agraria Nusantara). Semua
            hak dilindungi.
          </div>
        </div>
      </footer>
    </>
  );
}
