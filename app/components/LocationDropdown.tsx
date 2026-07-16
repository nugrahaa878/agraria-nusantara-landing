"use client";

import { useEffect, useRef, useState } from "react";

type Region = { code: string; name: string };

type Props = {
  label: string;
  placeholder: string;
  loadingLabel: string;
  options: Region[];
  loading: boolean;
  disabled?: boolean;
  selected: Region | null;
  onSelect: (region: Region | null) => void;
  onOpen?: () => void;
};

export default function LocationDropdown({
  label,
  placeholder,
  loadingLabel,
  options,
  loading,
  disabled,
  selected,
  onSelect,
  onOpen,
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleToggle() {
    if (disabled) return;
    if (!open) onOpen?.();
    setOpen((v) => !v);
  }

  const filtered = options.filter((option) =>
    option.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="listbox"
        disabled={disabled}
        onClick={handleToggle}
        className="inline-flex min-w-36 cursor-pointer items-center justify-between gap-1.5 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/40 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="truncate">{selected ? selected.name : placeholder}</span>
        {loading ? (
          <svg
            className="h-4 w-4 shrink-0 animate-spin text-primary"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute top-full left-0 z-20 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-background shadow-md"
        >
          <div className="border-b border-border p-1.5">
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari..."
              className="w-full rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            />
          </div>

          <div className="max-h-56 overflow-y-auto py-1">
            {loading ? (
              <div className="space-y-2 p-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-4 animate-pulse rounded bg-muted"
                    style={{ width: `${70 - i * 8}%` }}
                  />
                ))}
                <p className="pt-1 text-center text-xs text-muted-foreground">
                  {loadingLabel}
                </p>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  role="option"
                  aria-selected={!selected}
                  onClick={() => {
                    onSelect(null);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`block w-full cursor-pointer px-3 py-2 text-left text-sm transition-colors hover:bg-muted ${
                    !selected ? "font-semibold text-primary" : "text-foreground/80"
                  }`}
                >
                  {placeholder}
                </button>
                {filtered.length === 0 ? (
                  <p className="px-3 py-4 text-center text-sm text-muted-foreground">
                    Tidak ditemukan.
                  </p>
                ) : (
                  filtered.map((option) => (
                    <button
                      key={option.code}
                      type="button"
                      role="option"
                      aria-selected={selected?.code === option.code}
                      onClick={() => {
                        onSelect(option);
                        setOpen(false);
                        setQuery("");
                      }}
                      className={`block w-full cursor-pointer truncate px-3 py-2 text-left text-sm transition-colors hover:bg-muted ${
                        selected?.code === option.code
                          ? "font-semibold text-primary"
                          : "text-foreground/80"
                      }`}
                    >
                      {option.name}
                    </button>
                  ))
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
