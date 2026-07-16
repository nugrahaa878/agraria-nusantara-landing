"use client";

import { useState } from "react";
import { products, type ProductCategory } from "../data/products";
import ProductCard from "./ProductCard";
import LocationDropdown from "./LocationDropdown";

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
      const res = await fetch("/api/wilayah/provinces");
      const json = await res.json();
      setProvinces(json.data ?? []);
      setProvincesLoaded(true);
    } catch {
      setProvinces([]);
    } finally {
      setProvincesLoading(false);
    }
  }

  async function handleSelectProvince(province: Region | null) {
    setSelectedProvince(province);
    setSelectedCity(null);
    setCities([]);
    if (!province) return;

    setCitiesLoading(true);
    try {
      const res = await fetch(`/api/wilayah/regencies/${province.code}`);
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
      product.location.includes(
        selectedCity.name.replace(/^Kabupaten |^Kota /, "")
      );

    return matchesCategory && matchesProvince && matchesCity;
  });

  const activeFilterCount =
    (activeCategory !== "Semua" ? 1 : 0) +
    (selectedProvince ? 1 : 0) +
    (selectedCity ? 1 : 0);

  function resetAll() {
    setActiveCategory("Semua");
    clearLocationFilter();
  }

  return (
    <div>
      <div className="rounded-3xl border border-border bg-surface p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-1.5 rounded-full bg-background p-1.5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="hidden text-xs font-semibold tracking-wide text-muted-foreground uppercase sm:inline">
              Lokasi
            </span>
            <LocationDropdown
              label="Filter provinsi"
              placeholder="Semua Provinsi"
              loadingLabel="Memuat provinsi..."
              options={provinces}
              loading={provincesLoading}
              selected={selectedProvince}
              onOpen={loadProvinces}
              onSelect={handleSelectProvince}
            />
            <LocationDropdown
              label="Filter kota/kabupaten"
              placeholder="Semua Kota/Kabupaten"
              loadingLabel="Memuat kota/kabupaten..."
              options={cities}
              loading={citiesLoading}
              disabled={!selectedProvince}
              selected={selectedCity}
              onSelect={setSelectedCity}
            />
          </div>
        </div>

        {activeFilterCount > 0 && (
          <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <p className="text-xs text-muted-foreground">
              {activeFilterCount} filter aktif · {filtered.length} produk
              ditemukan
            </p>
            <button
              type="button"
              onClick={resetAll}
              className="cursor-pointer text-xs font-semibold text-primary hover:underline"
            >
              Hapus semua filter
            </button>
          </div>
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
