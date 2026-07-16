import Image from "next/image";

const headlines = [
  {
    source: "BBC News Indonesia",
    date: "23 Jul 2024",
    quote:
      "Ramai-ramai borong panen sayur karena harga anjlok — 'Mendingan dibuang daripada capek'",
    image:
      "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=200&q=80",
    alt: "Sayuran segar yang tak terjual di ladang",
  },
  {
    source: "detikFinance",
    date: "28 Jan 2025",
    quote:
      "Kondisi pahit petani singkong: produksi turun, hasil panen tak laku",
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=200&q=80",
    alt: "Hasil panen menumpuk tanpa pembeli",
  },
  {
    source: "Kontan.co.id",
    date: "26 Jan 2025",
    quote:
      "Hasil panen tak sesuai ketentuan HPP bikin harga gabah di tingkat petani anjlok",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=200&q=80",
    alt: "Petani memeriksa hasil panen gabah",
  },
  {
    source: "Tempo.co",
    date: "25 Jan 2023",
    quote:
      "Petani tomat buang hasil panen karena harga jeblok dari Rp 4.000 jadi Rp 600 per kg",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?auto=format&fit=crop&w=200&q=80",
    alt: "Tomat segar hasil panen yang terbuang",
  },
  {
    source: "Metro TV",
    date: "9 Apr 2025",
    quote: "Petani terpaksa buang hasil panen buntut harga sayur anjlok",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=200&q=80",
    alt: "Hasil panen sayur yang dibuang petani",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
          Kenapa Agratara hadir?
        </p>
        <h2 className="font-heading mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:mt-3 sm:text-3xl md:text-4xl">
          Rantai distribusi yang merugikan semua pihak
        </h2>
        <p className="mt-3 text-base leading-7 text-foreground/80 sm:mt-4 sm:text-lg sm:leading-8">
          Ini bukan kasus terisolasi — pola yang sama terus berulang di
          berbagai daerah di Indonesia setiap musim panen.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-5">
        <div className="relative overflow-hidden rounded-3xl md:col-span-2">
          <div className="relative aspect-[16/9] w-full sm:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80"
              alt="Hasil panen sayuran yang terbuang percuma karena harga jatuh"
              fill
              sizes="(min-width: 768px) 35vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
            <span className="font-heading block text-2xl font-extrabold text-white sm:text-4xl">
              Rp 4.000 → Rp 600
            </span>
            <p className="mt-1 text-sm text-white/80 sm:text-base">
              Jatuhnya harga tomat per kilogram dalam semalam — pola yang
              terus berulang.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <ul className="divide-y divide-border">
            {headlines.map((item) => (
              <li key={item.quote} className="flex gap-3 py-4 first:pt-0 sm:gap-4 sm:py-5">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl sm:h-14 sm:w-14">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm leading-6 font-medium text-foreground sm:text-base">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                    {item.source} · {item.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
