import Image from "next/image";

const WHATSAPP_NUMBER = "6281268529556";
const farmerWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo, saya petani/peternak dan tertarik untuk bergabung sebagai mitra produsen di Agratara."
)}`;

const farmerFeatures = [
  "Informasi harga pasar real-time",
  "Pendaftaran produk dengan mudah",
  "Manajemen pesanan terpusat",
  "Profil produsen tepercaya",
];

const traderFeatures = [
  "Pencarian produk cepat",
  "Detail produk lengkap & transparan",
  "Pemesanan mudah dalam beberapa langkah",
  "Manajemen pengiriman & riwayat pembelian",
];

export default function Audience() {
  return (
    <section id="untuk-siapa" className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Dibangun untuk dua sisi ekosistem pangan
        </h2>
        <p className="mt-3 text-base leading-7 text-foreground/80 sm:mt-4 sm:text-lg sm:leading-8">
          Baik Anda produsen di ladang maupun pedagang di pasar, Agratara
          punya alat yang Anda butuhkan.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border">
          <div className="relative h-44 w-full sm:h-56">
            <Image
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80"
              alt="Petani bekerja di sawah dengan hasil panen"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 sm:p-8">
            <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
              Untuk Petani &amp; Peternak
            </h3>
            <p className="mt-2 text-sm text-foreground/70 sm:text-base">
              Jual hasil panen langsung ke pedagang, tanpa tengkulak.
            </p>
            <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
              {farmerFeatures.map((feature) => (
                <FeatureItem key={feature} label={feature} />
              ))}
            </ul>
            <a
              href={farmerWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block cursor-pointer rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#0a6459] sm:mt-8"
            >
              Daftar sebagai Produsen
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border">
          <div className="relative h-44 w-full sm:h-56">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80"
              alt="Pedagang pasar menata hasil bumi segar untuk dijual"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 sm:p-8">
            <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
              Untuk Pedagang Pasar
            </h3>
            <p className="mt-2 text-sm text-foreground/70 sm:text-base">
              Dapatkan pasokan stabil, berkualitas, dengan harga kompetitif.
            </p>
            <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
              {traderFeatures.map((feature) => (
                <FeatureItem key={feature} label={feature} />
              ))}
            </ul>
            <a
              href="#katalog"
              className="mt-6 inline-block cursor-pointer rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 sm:mt-8"
            >
              Saya adalah pedagang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-3 text-sm text-foreground/70">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 text-secondary"
        aria-hidden="true"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      {label}
    </li>
  );
}
