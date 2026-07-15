import Image from "next/image";

const productGroups = [
  {
    title: "Aplikasi Petani & Peternak",
    items: ["Pendaftaran produk", "Informasi harga pasar", "Manajemen pesanan"],
    image:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=700&q=80",
    alt: "Petani menggunakan aplikasi mobile untuk memantau hasil panen",
  },
  {
    title: "Aplikasi Pedagang Pasar",
    items: ["Pencarian produk cepat", "Pemesanan mudah", "Manajemen pengiriman"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
    alt: "Pedagang pasar memesan produk segar melalui aplikasi",
  },
  {
    title: "Dukungan Logistik",
    items: [
      "Pengiriman terjadwal",
      "Pelacakan real-time",
      "Mitra logistik lokal",
    ],
    image:
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=700&q=80",
    alt: "Armada pengiriman logistik mengangkut hasil panen",
  },
  {
    title: "Pendampingan & Edukasi",
    items: [
      "Standardisasi kualitas",
      "Manajemen panen/ternak",
      "Pemasaran digital",
    ],
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?auto=format&fit=crop&w=700&q=80",
    alt: "Pendamping lapangan memberi edukasi kepada petani",
  },
];

export default function Products() {
  return (
    <section id="produk" className="bg-[#0e1a17]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Produk &amp; Layanan
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Satu platform, dua sisi ekosistem pangan
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:items-stretch">
          {productGroups.map((group) => (
            <div
              key={group.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10"
            >
              <div className="relative h-40 w-full shrink-0">
                <Image
                  src={group.image}
                  alt={group.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col bg-white/5 p-6">
                <h3 className="font-heading text-lg font-bold text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <FeatureRow key={item} label={item} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-white/75">
      <svg
        width="16"
        height="16"
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
