import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden sm:min-h-[85vh]">
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

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm">
            Kedaulatan Pangan untuk Kesejahteraan Bangsa
          </p>
          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Jembatan digital antara petani, peternak, dan pasar Indonesia
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-8">
            Agratara menghubungkan produsen pangan langsung dengan pedagang
            pasar — tanpa tengkulak, harga lebih adil, pasokan lebih stabil.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <a
              href="#untuk-siapa"
              className="cursor-pointer rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-[#0a6459] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:py-3.5 sm:text-base"
            >
              Saya Petani/Peternak
            </a>
            <a
              href="#untuk-siapa"
              className="cursor-pointer rounded-full border border-white bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:py-3.5 sm:text-base"
            >
              Saya Pedagang Pasar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
