import Image from "next/image";

const advantages = [
  {
    stat: "1 hari",
    title: "Efisiensi Rantai Pasok",
    desc: "Distribusi langsung dari produsen ke pedagang memangkas waktu dan biaya logistik.",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=900&q=80",
    alt: "Rantai pasok hasil panen dari ladang ke pasar",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    title: "Transparansi & Harga Adil",
    desc: "Harga terbuka bagi kedua belah pihak, tanpa potongan tersembunyi dari perantara.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80",
    alt: "Petani menghitung dan mencatat hasil panen",
    span: "sm:col-span-2",
  },
  {
    title: "Kualitas & Kesegaran",
    desc: "Produk sampai lebih cepat ke pedagang, menjaga kesegaran hasil panen.",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=700&q=80",
    alt: "Sayuran segar hasil panen yang baru dipetik",
    span: "sm:col-span-2",
  },
  {
    title: "Pemberdayaan Komunitas",
    desc: "Mendorong kesejahteraan petani, peternak, dan komunitas lokal di seluruh Indonesia.",
    image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?auto=format&fit=crop&w=700&q=80",
    alt: "Petani dan pedagang berjabat tangan menyepakati kerja sama",
    span: "sm:col-span-2",
  },
  {
    title: "Inovasi Teknologi",
    desc: "Platform digital yang terus berkembang mengikuti kebutuhan produsen dan pedagang.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80",
    alt: "Petani menggunakan aplikasi digital di ladang",
    span: "sm:col-span-2",
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Kelebihan Agratara
        </p>
        <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Dibangun untuk kepercayaan, bukan sekadar transaksi
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:grid-rows-3">
        {advantages.map((item) => (
          <div
            key={item.title}
            className={`relative min-h-56 overflow-hidden rounded-3xl ${item.span}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-6">
              {item.stat && (
                <span className="font-heading text-4xl font-extrabold text-white">
                  {item.stat}
                </span>
              )}
              <p className="mt-1 text-sm font-semibold text-white/90">
                {item.title}
              </p>
              <p className="mt-2 text-base leading-6 text-white/75">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
