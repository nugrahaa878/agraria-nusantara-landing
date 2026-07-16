import Image from "next/image";
import Link from "next/link";
import { buildWhatsappUrl, type Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-border bg-surface">
      <Link href={`/katalog/${product.slug}`} className="block">
        <div className="relative h-32 w-full sm:h-44">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 50vw"
            className="object-cover"
          />
          <span className="absolute top-2.5 left-2.5 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-bold tracking-wide text-primary uppercase backdrop-blur sm:text-xs">
            {product.tag}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <Link href={`/katalog/${product.slug}`}>
          <h3 className="font-heading text-sm font-bold text-foreground hover:text-primary sm:text-base">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          {product.partner}
        </p>
        <p className="mt-2 text-xs leading-5 text-foreground/70 sm:text-sm sm:leading-6">
          {product.desc}
        </p>
        <div className="mt-auto pt-3 sm:pt-4">
          <p className="text-base font-bold text-primary sm:text-lg">
            {product.price}
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">
              {product.unit}
            </span>
          </p>
          <div className="mt-3 flex gap-2">
            <Link
              href={`/katalog/${product.slug}`}
              className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-full border border-primary px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Detail
            </Link>
            <a
              href={buildWhatsappUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#0a6459]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.99.583 3.845 1.588 5.408L2 22l4.71-1.556A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.2a8.174 8.174 0 0 1-4.168-1.14l-.299-.177-3.111 1.028 1.043-3.03-.194-.31A8.15 8.15 0 0 1 3.8 12c0-4.522 3.678-8.2 8.201-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.523-3.678 8.2-8.2 8.2z" />
              </svg>
              Pesan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
