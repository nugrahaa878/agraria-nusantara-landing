import Image from "next/image";

const steps = [
  {
    label: "01",
    title: "Petani/peternak unggah hasil panen",
    desc: "Jenis, jumlah, dan harga yang diinginkan diunggah langsung ke platform.",
  },
  {
    label: "02",
    title: "Pedagang temukan & pesan",
    desc: "Pedagang pasar mencari, membandingkan, dan memesan produk secara transparan.",
  },
  {
    label: "03",
    title: "Pengiriman langsung dari produsen",
    desc: "Logistik terintegrasi mengatur pengiriman langsung tanpa perantara berlapis.",
  },
];

export default function Solution() {
  return (
    <section id="solusi" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl md:order-2">
          <Image
            src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80"
            alt="Pedagang pasar memilih hasil bumi segar"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="md:order-1">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Bagaimana Agratara bekerja?
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            Sebuah ekosistem digital yang menghubungkan produsen dan
            pedagang secara langsung, transparan, dan efisien.
          </p>

          <ol className="mt-8 space-y-6">
            {steps.map((step) => (
              <li key={step.label} className="flex gap-4">
                <span className="font-heading flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step.label}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-foreground/70">
                    {step.desc}
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
