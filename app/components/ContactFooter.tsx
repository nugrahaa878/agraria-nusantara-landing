import { WHATSAPP_NUMBER } from "../data/products";

const joinMessage = [
  "Halo Agratara,",
  "Saya tertarik untuk bergabung sebagai petani, peternak, atau pedagang pasar di platform Agratara.",
  "",
  "Mohon info lebih lanjut mengenai cara bergabung dan proses selanjutnya. Terima kasih.",
].join("\n");
const joinWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  joinMessage
)}`;

export default function ContactFooter() {
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

          <a
            href={joinWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-[#0a6459]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.99.583 3.845 1.588 5.408L2 22l4.71-1.556A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.2a8.174 8.174 0 0 1-4.168-1.14l-.299-.177-3.111 1.028 1.043-3.03-.194-.31A8.15 8.15 0 0 1 3.8 12c0-4.522 3.678-8.2 8.201-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.523-3.678 8.2-8.2 8.2z" />
            </svg>
            Gabung Sekarang via WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-surface text-muted-foreground">
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
