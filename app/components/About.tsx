import Image from "next/image";

export default function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
      <div className="grid items-center gap-8 sm:gap-12 md:grid-cols-2">
        <div className="relative order-2 aspect-[16/9] w-full overflow-hidden rounded-3xl sm:aspect-[4/3]">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80"
            alt="Lanskap sawah dan lahan pertanian subur di Indonesia"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="order-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent sm:text-sm">
            Tentang Kami
          </p>
          <h2 className="font-heading mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:mt-3 sm:text-3xl md:text-4xl">
            Agraria Nusantara
          </h2>
          <p className="mt-4 text-base leading-7 text-foreground/80 sm:mt-6 sm:text-lg sm:leading-8">
            Agratara merupakan sebuah startup inovatif yang berdedikasi
            untuk merevolusi sektor pertanian dan peternakan di Indonesia —
            berakar kuat pada budaya dan sejarah bangsa, menumbuhkan rasa
            kebersamaan dan tanggung jawab atas kekayaan alam Nusantara.
          </p>
          <p className="mt-3 text-sm leading-6 text-foreground/70 sm:mt-4 sm:text-base sm:leading-7">
            Dengan menghilangkan perantara yang tidak efisien, Agratara
            memberdayakan produsen untuk mendapatkan keuntungan lebih,
            membantu pedagang memperoleh pasokan yang lebih baik, dan pada
            akhirnya memberi dampak positif bagi konsumen dengan harga yang
            lebih stabil.
          </p>
        </div>
      </div>
    </section>
  );
}
