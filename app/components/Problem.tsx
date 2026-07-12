const painPoints = [
  {
    title: "Harga anjlok tiba-tiba",
    desc: "Fluktuasi harga membuat petani sering merugi saat panen raya.",
  },
  {
    title: "Akses pasar sulit",
    desc: "Produsen kesulitan menjangkau pedagang pasar secara langsung.",
  },
  {
    title: "Praktik tengkulak",
    desc: "Perantara memotong margin petani dengan harga jauh di bawah pasar.",
  },
  {
    title: "Pasokan pedagang tak stabil",
    desc: "Pedagang pasar kesulitan mendapat pasokan berkualitas secara konsisten.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Kenapa Agratara hadir?
        </h2>
        <p className="mt-4 text-lg leading-8 text-foreground/80">
          Rantai distribusi pangan tradisional yang panjang merugikan
          produsen sekaligus pedagang. Ini kondisi nyata yang terus
          berulang di berbagai daerah.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {painPoints.map((point) => (
          <div
            key={point.title}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              </svg>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">
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
