import Image from "next/image";

const missions = [
  {
    number: "01",
    title: "Ekosistem Digital Inovatif",
    desc: "Platform yang intuitif, transparan, dan dapat diakses oleh setiap petani, peternak, dan pedagang di seluruh pelosok Indonesia.",
  },
  {
    number: "02",
    title: "Integrasi Ekosistem Pangan",
    desc: "Menghubungkan produsen di seluruh Nusantara dengan pedagang pasar, menciptakan rantai nilai yang terpadu dan efisien.",
  },
  {
    number: "03",
    title: "Pemberdayaan Produsen Lokal",
    desc: "Menghubungkan petani dan peternak langsung ke pasar sehingga mendapatkan harga yang lebih adil.",
  },
  {
    number: "04",
    title: "Rantai Pasok Berkelanjutan",
    desc: "Solusi logistik dan teknologi terkini di setiap tahap — dari panen, pengiriman, hingga penerimaan.",
  },
  {
    number: "05",
    title: "Kemitraan Berkelanjutan",
    desc: "Kolaborasi strategis dengan lembaga terkait, ahli pertanian, dan komunitas lokal.",
  },
];

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-[#0e1a17]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-5 md:items-end">
          <div className="md:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Visi Kami
            </p>
            <h2 className="font-heading mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Menjadi jembatan digital utama untuk pangan Indonesia yang
              berkelanjutan.
            </h2>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80"
              alt="Ladang padi hijau membentang di Indonesia"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Misi
            </p>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Lima komitmen yang kami jalankan untuk membangun ekosistem
              pangan yang adil bagi produsen dan pedagang.
            </p>
            <div className="relative mt-8 hidden aspect-[3/4] w-full overflow-hidden rounded-3xl md:block">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=700&q=80"
                alt="Petani memegang hasil panen sayuran segar dengan bangga"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
          </div>

          <ol className="md:col-span-8">
            {missions.map((mission, i) => (
              <li
                key={mission.number}
                className={`flex gap-6 py-6 ${
                  i !== 0 ? "border-t border-white/10" : ""
                }`}
              >
                <span className="font-heading shrink-0 text-2xl font-extrabold text-white/25">
                  {mission.number}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {mission.title}
                  </h3>
                  <p className="mt-2 text-base leading-6 text-white/65">
                    {mission.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
