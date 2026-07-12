const productGroups = [
  {
    title: "Aplikasi untuk Petani & Peternak",
    items: [
      "Pendaftaran produk",
      "Informasi harga pasar",
      "Manajemen pesanan",
      "Profil produsen",
    ],
  },
  {
    title: "Aplikasi untuk Pedagang Pasar",
    items: [
      "Pencarian produk cepat",
      "Detail produk lengkap",
      "Pemesanan mudah",
      "Manajemen pengiriman",
      "Riwayat pembelian & ulasan",
    ],
  },
  {
    title: "Dukungan Logistik (Mitra)",
    items: [
      "Pengiriman terjadwal",
      "Pelacakan pengiriman",
      "Jaringan mitra logistik lokal",
    ],
  },
  {
    title: "Pendampingan & Edukasi",
    items: [
      "Standardisasi kualitas produk",
      "Manajemen panen/ternak yang lebih baik",
      "Pemasaran digital untuk produsen",
    ],
  },
];

export default function Products() {
  return (
    <section id="produk" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Produk dan Layanan
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {productGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="font-heading text-lg font-bold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
