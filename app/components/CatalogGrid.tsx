"use client";

import { useState } from "react";
import { products, type ProductCategory } from "../data/products";
import ProductCard from "./ProductCard";

const categories: (ProductCategory | "Semua")[] = [
  "Semua",
  "Hasil Tani",
  "Peternakan",
];

export default function CatalogGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");

  const filtered =
    active === "Semua"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === category
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-surface text-foreground/70 hover:bg-muted"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
