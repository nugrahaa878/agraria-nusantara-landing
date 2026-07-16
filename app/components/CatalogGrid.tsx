"use client";

import { useState } from "react";
import { products, type ProductCategory } from "../data/products";
import ProductCard from "./ProductCard";

const categories: (ProductCategory | "Semua")[] = [
  "Semua",
  "Hasil Tani",
  "Peternakan",
];

type Region = { code: string; name: string };

export default function CatalogGrid() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Semua");

  const [provinces, setProvinces] = useState<Region[]>([]);
  const [provincesLoading, setProvincesLoading] = useState(false);
  const [provincesLoaded, setProvincesLoaded] = useState(false);

  const [cities, setCities] = useState<Region[]>([]);
  const [citiesLoading, setCitiesLoading] = useState(false);

  const [selectedProvince, setSelectedProvince] = useState<Region | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState<Region | null>(null);

  async function loadProvinces() {
    if (provincesLoaded || provincesLoading) return;
    setProvincesLoading(true);
    try {
      const res = await fetch("https://wilayah.id/api/provinces.json");
      const json = await res.json();
      setProvinces(json.data ?? []);
      setProvincesLoaded(true);
    } catch {
      setProvinces([]);
    } finally {
      setProvincesLoading(false);
    }
  }

  async function handleSelectProvince(province: Region) {
    setSelectedProvince(province);
    setSelectedCity(null);
    setCities([]);
    setCitiesLoading(true);
    try {
      const res = await fetch(
        `https://wilayah.id/api/regencies/${province.code}.json`
      );
      const json = await res.json();
      setCities(json.data ?? []);
    } catch {
      setCities([]);
    } finally {
      setCitiesLoading(false);
    }
  }

  function clearLocationFilter() {
    setSelectedProvince(null);
    setSelectedCity(null);
    setCities([]);
  }

  const filtered = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Semua" || product.category === activeCategory;

    const matchesProvince =
      !selectedProvince || product.location.includes(selectedProvince.name);

    const matchesCity =
      !selectedCity ||
      product.location.includes(selectedCity.name.replace(/^Kabupaten |^Kota /, ""));

    return matchesCategory && matchesProvince && matchesCity;
  });

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-surface text-foreground/70 hover:bg-muted"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <select
          value={selectedProvince?.code ?? ""}
          onClick={loadProvinces}
          onFocus={loadProvinces}
          onChange={(e) => {
            const province = provinces.find((p) => p.code === e.target.value);
            if (province) handleSelectProvince(province);
            else clearLocationFilter();
          }}
          className="cursor-pointer rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground/80"
        >
          <option value="">
            {provincesLoading ? "Memuat provinsi..." : "Semua Provinsi"}
          </option>
          {provinces.map((province) => (
            <option key={province.code} value={province.code}>
              {province.name}
            </option>
          ))}
        </select>

        <select
          value={selectedCity?.code ?? ""}
          disabled={!selectedProvince}
          onChange={(e) => {
            const city = cities.find((c) => c.code === e.target.value);
            setSelectedCity(city ?? null);
          }}
          className="cursor-pointer rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground/80 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">
            {citiesLoading ? "Memuat kota/kabupaten..." : "Semua Kota/Kabupaten"}
          </option>
          {cities.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>

        {(selectedProvince || selectedCity) && (
          <button
            type="button"
            onClick={clearLocationFilter}
            className="cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10"
          >
            Reset Lokasi
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Belum ada produk di wilayah ini.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
