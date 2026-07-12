const advantages = [
  {
    title: "Transparansi & Harga Adil",
    desc: "Harga terbuka bagi kedua belah pihak, tanpa potongan tersembunyi dari perantara.",
  },
  {
    title: "Efisiensi Rantai Pasok",
    desc: "Distribusi langsung dari produsen ke pedagang memangkas waktu dan biaya logistik.",
  },
  {
    title: "Kualitas & Kesegaran",
    desc: "Produk sampai lebih cepat ke pedagang, menjaga kesegaran dan kualitas hasil panen.",
  },
  {
    title: "Pemberdayaan Komunitas",
    desc: "Mendorong kesejahteraan petani, peternak, dan komunitas lokal di seluruh Indonesia.",
  },
  {
    title: "Inovasi Teknologi",
    desc: "Platform digital yang terus berkembang mengikuti kebutuhan produsen dan pedagang.",
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Kelebihan Agratara
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {advantages.map((item, i) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <span className="font-heading text-sm font-bold text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading mt-3 text-base font-bold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-foreground/70">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
