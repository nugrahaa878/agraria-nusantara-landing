import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80"
        alt="Petani memeriksa hasil panen sayuran segar di ladang"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            Kedaulatan Pangan untuk Kesejahteraan Bangsa
          </p>
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Jembatan digital antara petani, peternak, dan pasar Indonesia
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-white/90">
            Agratara menghubungkan produsen pangan langsung dengan pedagang
            pasar — tanpa tengkulak, harga lebih adil, pasokan lebih stabil.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#untuk-siapa"
              className="cursor-pointer rounded-full bg-primary px-6 py-3.5 text-center text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-[#3e6a4d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Saya Petani/Peternak
            </a>
            <a
              href="#untuk-siapa"
              className="cursor-pointer rounded-full border border-white bg-white/10 px-6 py-3.5 text-center text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Saya Pedagang Pasar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
