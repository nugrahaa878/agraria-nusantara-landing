const missions = [
  {
    title: "Membangun Ekosistem Digital Inovatif",
    desc: "Mengembangkan platform digital yang intuitif, transparan, dan dapat diakses oleh setiap petani, peternak, dan pedagang di seluruh pelosok Indonesia.",
  },
  {
    title: "Mengintegrasikan Ekosistem Pangan",
    desc: "Menghubungkan petani dan peternak di seluruh Nusantara dengan pedagang di pasar, menciptakan rantai nilai yang terpadu dan efisien.",
  },
  {
    title: "Memberdayakan Produsen Lokal",
    desc: "Menghubungkan petani dan peternak langsung ke pasar sehingga mendapatkan harga yang lebih adil.",
  },
  {
    title: "Mengoptimalkan Rantai Pasok Berkelanjutan",
    desc: "Mengintegrasikan solusi logistik dan teknologi terkini di setiap tahap rantai pasok.",
  },
  {
    title: "Membangun Kemitraan yang Berkelanjutan",
    desc: "Menjalin kolaborasi strategis dengan lembaga terkait, ahli pertanian, dan komunitas lokal.",
  },
];

export default function VisionMission() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Visi
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Menjadi Jembatan Digital Utama untuk Pangan Indonesia yang
            Berkelanjutan
          </h2>
        </div>

        <div className="mt-16">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-primary">
            Misi
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission) => (
              <div
                key={mission.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-heading text-base font-bold text-foreground">
                  {mission.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">
                  {mission.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
