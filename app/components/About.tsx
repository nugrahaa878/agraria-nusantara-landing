import Image from "next/image";

export default function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80"
            alt="Lanskap sawah dan lahan pertanian subur di Indonesia"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Tentang Kami
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Agraria Nusantara
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Agratara merupakan sebuah startup inovatif yang berdedikasi
            untuk merevolusi sektor pertanian dan peternakan di Indonesia —
            berakar kuat pada budaya dan sejarah bangsa, menumbuhkan rasa
            kebersamaan dan tanggung jawab atas kekayaan alam Nusantara.
          </p>
          <p className="mt-4 leading-7 text-foreground/70">
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
