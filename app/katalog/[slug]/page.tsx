import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import ContactFooter from "../../components/ContactFooter";
import ProductCard from "../../components/ProductCard";
import {
  buildOrderWhatsappUrl,
  getProductBySlug,
  products,
} from "../../data/products";

const orderSteps = [
  {
    step: "01",
    title: "Hubungi via WhatsApp",
    desc: "Klik tombol pesan, pesan otomatis terisi dengan detail produk ini.",
  },
  {
    step: "02",
    title: "Konfirmasi jumlah & pengiriman",
    desc: "Tim kami membantu konfirmasi jumlah pesanan, harga, dan tujuan pengiriman.",
  },
  {
    step: "03",
    title: "Pembayaran & pengiriman",
    desc: "Setelah pembayaran dikonfirmasi, produk dikirim langsung dari mitra produsen.",
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produk tidak ditemukan — Agratara" };
  }

  return {
    title: `${product.name} — Agratara`,
    description: product.desc,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="mx-auto max-w-6xl px-6 py-8 sm:py-12">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/katalog" className="hover:text-primary">
                  Katalog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>{product.category}</li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">{product.name}</li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-8 sm:mt-8 sm:gap-10 md:grid-cols-2">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold tracking-wide text-primary uppercase backdrop-blur">
                {product.tag}
              </span>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
                {product.category}
              </p>
              <h1 className="font-heading mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                {product.partner} · {product.location}
              </p>

              <p className="mt-4 text-2xl font-bold text-primary sm:text-3xl">
                {product.price}
                <span className="text-sm font-medium text-muted-foreground sm:text-base">
                  {product.unit}
                </span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Minimum pemesanan: {product.minOrder}
              </p>

              <p className="mt-5 text-sm leading-6 text-foreground/80 sm:text-base sm:leading-7">
                {product.longDesc}
              </p>

              <a
                href={buildOrderWhatsappUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-[#0a6459] sm:w-auto"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.99.583 3.845 1.588 5.408L2 22l4.71-1.556A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.2a8.174 8.174 0 0 1-4.168-1.14l-.299-.177-3.111 1.028 1.043-3.03-.194-.31A8.15 8.15 0 0 1 3.8 12c0-4.522 3.678-8.2 8.201-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.523-3.678 8.2-8.2 8.2z" />
                </svg>
                Pesan via WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-14 sm:mt-20">
            <h2 className="font-heading text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
              Cara memesan
            </h2>
            <ol className="mt-6 grid gap-6 sm:grid-cols-3">
              {orderSteps.map((item) => (
                <li key={item.step} className="rounded-2xl border border-border bg-surface p-5">
                  <span className="font-heading text-2xl font-extrabold text-primary">
                    {item.step}
                  </span>
                  <h3 className="font-heading mt-2 text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-foreground/70">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {related.length > 0 && (
            <div className="mt-14 sm:mt-20">
              <h2 className="font-heading text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                Produk lain dari {product.category}
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
                {related.map((item) => (
                  <ProductCard key={item.slug} product={item} />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
