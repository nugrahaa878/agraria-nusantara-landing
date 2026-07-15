const painPoints = [
  {
    stat: "Rp 4.000 → Rp 600",
    title: "Harga anjlok tiba-tiba",
    desc: "Petani tomat pernah membuang hasil panen karena harga jatuh drastis dalam semalam.",
  },
  {
    stat: "Berlapis-lapis",
    title: "Akses pasar sulit",
    desc: "Produsen tak punya jalur langsung ke pedagang — hasil panen berpindah tangan berkali-kali sebelum sampai pasar.",
  },
  {
    stat: "Di bawah HPP",
    title: "Praktik tengkulak",
    desc: "Tanpa kepastian serap, banyak petani terpaksa jual ke tengkulak dengan harga di bawah harga pokok produksi.",
  },
  {
    stat: "Tak konsisten",
    title: "Pasokan pedagang tak stabil",
    desc: "Pedagang pasar kesulitan menjaga stok berkualitas karena rantai pasok yang panjang dan tak menentu.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Kenapa Agratara hadir?
        </p>
        <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Rantai distribusi pangan yang merugikan semua pihak
        </h2>
        <p className="mt-4 text-lg leading-8 text-foreground/80">
          Ini bukan kasus terisolasi — pola yang sama terus berulang di
          berbagai daerah di Indonesia setiap musim panen.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {painPoints.map((point) => (
          <div
            key={point.title}
            className="group rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-md"
          >
            <span className="font-heading text-sm font-bold text-primary">
              {point.stat}
            </span>
            <h3 className="font-heading mt-3 text-lg font-bold text-foreground">
              {point.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-foreground/70">
              {point.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Berdasarkan liputan Kompas, BBC News Indonesia, detikFinance, dan
        Kementerian Pertanian sepanjang 2023–2025 tentang harga gabah,
        sayur, dan singkong yang jatuh di tingkat petani.
      </p>
    </section>
  );
}
