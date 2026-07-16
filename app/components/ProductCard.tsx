import Image from "next/image";
import Link from "next/link";
import { buildWhatsappUrl, type Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface sm:rounded-3xl">
      <Link href={`/katalog/${product.slug}`} className="block">
        <div className="relative h-28 w-full sm:h-44">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 50vw"
            className="object-cover"
          />
          <span className="absolute top-2 left-2 rounded-full bg-background/90 px-2 py-0.5 text-[9px] font-bold tracking-wide text-primary uppercase backdrop-blur sm:top-2.5 sm:left-2.5 sm:px-2.5 sm:py-1 sm:text-xs">
            {product.tag}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <Link href={`/katalog/${product.slug}`}>
          <h3 className="font-heading text-xs leading-5 font-bold text-foreground hover:text-primary sm:text-base sm:leading-normal">
            {product.name}
          </h3>
        </Link>
        <p className="mt-0.5 text-[11px] text-muted-foreground sm:mt-1 sm:text-sm">
          {product.partner}
        </p>
        <p className="mt-1.5 hidden text-xs leading-5 text-foreground/70 sm:block sm:text-sm sm:leading-6">
          {product.desc}
        </p>
        <div className="mt-auto pt-2 sm:pt-4">
          <p className="text-sm font-bold text-primary sm:text-lg">
            {product.price}
            <span className="text-[10px] font-medium text-muted-foreground sm:text-sm">
              {product.unit}
            </span>
          </p>
          <div className="mt-2 flex gap-1.5 sm:mt-3 sm:gap-2">
            <Link
              href={`/katalog/${product.slug}`}
              className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-full border border-primary py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10 sm:py-2 sm:text-sm"
            >
              Detail
            </Link>
            <a
              href={buildWhatsappUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-full bg-primary py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-[#0a6459] sm:py-2 sm:text-sm"
            >
              Pesan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
