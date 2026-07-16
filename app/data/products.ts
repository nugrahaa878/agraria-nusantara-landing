export const WHATSAPP_NUMBER = "6282284406056";

export type ProductCategory = "Hasil Tani" | "Peternakan";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  partner: string;
  location: string;
  tag: string;
  desc: string;
  longDesc: string;
  minOrder: string;
  price: string;
  unit: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    slug: "beras-premium",
    name: "Beras Premium",
    category: "Hasil Tani",
    partner: "Tani Makmur",
    location: "Kabupaten Karawang, Jawa Barat",
    tag: "Panen Baru",
    desc: "Beras pulen kualitas premium, digiling langsung dari gabah pilihan hasil panen minggu ini.",
    longDesc:
      "Beras premium ini digiling langsung dari gabah pilihan hasil panen mitra petani di Karawang. Bertekstur pulen dengan kadar air terjaga, cocok untuk kebutuhan rumah tangga, warung makan, hingga katering. Dikemas rapi dan dikirim segera setelah proses penggilingan untuk menjaga kualitas dan kesegaran beras.",
    minOrder: "10 kg",
    price: "Rp 12.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=1200&q=80",
    alt: "Beras premium hasil panen petani",
  },
  {
    slug: "sayur-segar-campur",
    name: "Sayur Segar Campur",
    category: "Hasil Tani",
    partner: "Kebun Lestari",
    location: "Kabupaten Bandung Barat, Jawa Barat",
    tag: "Dipetik Harian",
    desc: "Campuran sayur dataran tinggi — wortel, kol, dan brokoli — dipetik pagi hari untuk kesegaran maksimal.",
    longDesc:
      "Paket sayur campur berisi wortel, kol, dan brokoli dari kebun dataran tinggi Lembang. Dipetik setiap pagi dan langsung dikemas untuk menjaga kesegaran hingga sampai ke tangan pembeli. Ideal untuk pedagang pasar maupun restoran yang membutuhkan pasokan sayur segar setiap hari.",
    minOrder: "5 kg",
    price: "Rp 8.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1567306301408-9b74779a11af?auto=format&fit=crop&w=1200&q=80",
    alt: "Sayuran segar hasil panen campur",
  },
  {
    slug: "ayam-potong",
    name: "Ayam Potong",
    category: "Peternakan",
    partner: "Peternakan Berkah",
    location: "Kabupaten Sukabumi, Jawa Barat",
    tag: "Tanpa Antibiotik",
    desc: "Ayam broiler dipelihara bebas antibiotik, dipotong sesuai standar higienis siap kirim harian.",
    longDesc:
      "Ayam broiler dari Peternakan Berkah dipelihara tanpa antibiotik dengan pakan terjaga kualitasnya. Proses pemotongan mengikuti standar higienis dan halal, siap kirim setiap hari dalam kondisi segar atau dingin sesuai permintaan pembeli.",
    minOrder: "5 ekor",
    price: "Rp 35.000",
    unit: "/ekor",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80",
    alt: "Ayam potong segar dari peternak",
  },
  {
    slug: "telur-ayam",
    name: "Telur Ayam",
    category: "Peternakan",
    partner: "Peternakan Berkah",
    location: "Kabupaten Sukabumi, Jawa Barat",
    tag: "Grade A",
    desc: "Telur ayam negeri grade A, disortir manual untuk memastikan ukuran dan kualitas cangkang terbaik.",
    longDesc:
      "Telur ayam negeri grade A dari Peternakan Berkah, disortir manual satu per satu untuk memastikan ukuran seragam dan cangkang tanpa retak. Cocok untuk kebutuhan rumah tangga, toko kelontong, maupun usaha kuliner.",
    minOrder: "10 kg",
    price: "Rp 28.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Telur ayam segar hasil peternakan",
  },
  {
    slug: "singkong",
    name: "Singkong",
    category: "Hasil Tani",
    partner: "Tani Makmur",
    location: "Kabupaten Karawang, Jawa Barat",
    tag: "Panen Baru",
    desc: "Singkong lokal ukuran besar, dipanen langsung dari kebun tanpa penyimpanan lama.",
    longDesc:
      "Singkong lokal ukuran besar dipanen langsung dari kebun mitra petani tanpa melalui penyimpanan lama, menjaga kadar pati dan kesegaran umbi. Cocok untuk kebutuhan olahan pangan maupun industri tepung.",
    minOrder: "20 kg",
    price: "Rp 5.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=1200&q=80",
    alt: "Singkong segar hasil panen",
  },
  {
    slug: "gabah-kering",
    name: "Gabah Kering",
    category: "Hasil Tani",
    partner: "Sawah Subur",
    location: "Kabupaten Indramayu, Jawa Barat",
    tag: "Sesuai HPP",
    desc: "Gabah kering giling dengan kadar air sesuai standar HPP, siap diproses gudang atau penggilingan.",
    longDesc:
      "Gabah kering giling dari Sawah Subur Indramayu dengan kadar air yang telah diukur sesuai ketentuan Harga Pembelian Pemerintah (HPP). Siap diproses lebih lanjut oleh gudang penyimpanan maupun penggilingan padi.",
    minOrder: "1 ton",
    price: "Rp 6.500",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?auto=format&fit=crop&w=1200&q=80",
    alt: "Gabah kering hasil panen sawah",
  },
  {
    slug: "cabai-merah",
    name: "Cabai Merah",
    category: "Hasil Tani",
    partner: "Kebun Lestari",
    location: "Kabupaten Bandung Barat, Jawa Barat",
    tag: "Pedas Segar",
    desc: "Cabai merah keriting segar, dipetik langsung dari kebun dataran tinggi Lembang.",
    longDesc:
      "Cabai merah keriting segar dipetik langsung dari kebun dataran tinggi Lembang. Tingkat kepedasan dan warna terjaga karena proses panen dan pengiriman yang cepat, cocok untuk pedagang pasar maupun kebutuhan produksi makanan.",
    minOrder: "5 kg",
    price: "Rp 25.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=1200&q=80",
    alt: "Cabai merah segar hasil panen",
  },
  {
    slug: "jagung-manis",
    name: "Jagung Manis",
    category: "Hasil Tani",
    partner: "Tani Makmur",
    location: "Kabupaten Karawang, Jawa Barat",
    tag: "Panen Baru",
    desc: "Jagung manis lokal, dipanen dalam kondisi optimal untuk rasa manis maksimal.",
    longDesc:
      "Jagung manis lokal dipanen tepat waktu pada kondisi optimal untuk memastikan rasa manis dan tekstur renyah. Dikirim segar dari kebun tanpa penyimpanan lama, cocok untuk pedagang maupun konsumsi rumah tangga.",
    minOrder: "10 kg",
    price: "Rp 4.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=1200&q=80",
    alt: "Jagung manis segar hasil panen",
  },
  {
    slug: "susu-sapi-segar",
    name: "Susu Sapi Segar",
    category: "Peternakan",
    partner: "Peternakan Sejahtera",
    location: "Kabupaten Boyolali, Jawa Tengah",
    tag: "Perah Harian",
    desc: "Susu sapi segar hasil perah pagi hari, tanpa bahan pengawet, langsung dikirim dingin.",
    longDesc:
      "Susu sapi segar hasil perah pagi hari dari Peternakan Sejahtera Boyolali, tanpa bahan pengawet tambahan. Dikemas dan dikirim dalam kondisi dingin untuk menjaga kualitas dan kesegaran hingga sampai ke tangan pembeli.",
    minOrder: "20 liter",
    price: "Rp 15.000",
    unit: "/liter",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=80",
    alt: "Susu sapi segar hasil perah",
  },
  {
    slug: "daging-sapi",
    name: "Daging Sapi",
    category: "Peternakan",
    partner: "Peternakan Sejahtera",
    location: "Kabupaten Boyolali, Jawa Tengah",
    tag: "Potong Segar",
    desc: "Daging sapi lokal potongan segar, dipotong sesuai pesanan tanpa penyimpanan beku lama.",
    longDesc:
      "Daging sapi lokal dari Peternakan Sejahtera Boyolali, dipotong sesuai pesanan tanpa melalui penyimpanan beku dalam waktu lama. Cocok untuk kebutuhan rumah tangga, restoran, maupun usaha kuliner.",
    minOrder: "5 kg",
    price: "Rp 130.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&w=1200&q=80",
    alt: "Daging sapi segar hasil potongan",
  },
  {
    slug: "kentang",
    name: "Kentang",
    category: "Hasil Tani",
    partner: "Kebun Lestari",
    location: "Kabupaten Bandung Barat, Jawa Barat",
    tag: "Dipetik Harian",
    desc: "Kentang dataran tinggi kualitas terbaik, cocok untuk kebutuhan rumah tangga maupun industri.",
    longDesc:
      "Kentang dataran tinggi dari Kebun Lestari Lembang, dipilih dari kualitas terbaik dengan ukuran seragam. Cocok untuk kebutuhan rumah tangga, restoran, maupun industri pengolahan makanan.",
    minOrder: "10 kg",
    price: "Rp 9.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=1200&q=80",
    alt: "Kentang segar hasil panen",
  },
  {
    slug: "ikan-nila",
    name: "Ikan Nila",
    category: "Peternakan",
    partner: "Kolam Makmur",
    location: "Kabupaten Purwakarta, Jawa Barat",
    tag: "Panen Kolam",
    desc: "Ikan nila hasil budidaya kolam air tawar, dipanen segar sesuai permintaan.",
    longDesc:
      "Ikan nila hasil budidaya kolam air tawar dari Kolam Makmur Purwakarta, dipanen segar sesuai jumlah permintaan pembeli untuk menjaga kesegaran maksimal. Cocok untuk pedagang pasar maupun rumah makan.",
    minOrder: "10 kg",
    price: "Rp 22.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=1200&q=80",
    alt: "Ikan nila segar hasil budidaya",
  },
  {
    slug: "apel-malang",
    name: "Apel Malang",
    category: "Hasil Tani",
    partner: "Kebun Agro Sejahtera",
    location: "Kabupaten Malang, Jawa Timur",
    tag: "Panen Baru",
    desc: "Apel manalagi khas Malang, dipetik langsung dari kebun dataran tinggi.",
    longDesc:
      "Apel manalagi dan rome beauty khas Malang, dipetik langsung dari kebun dataran tinggi Kabupaten Malang. Rasa manis segar dan tekstur renyah terjaga karena proses panen dan pengiriman yang cepat.",
    minOrder: "10 kg",
    price: "Rp 18.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&w=1200&q=80",
    alt: "Apel segar hasil panen Malang",
  },
  {
    slug: "beras-bali",
    name: "Beras Merah Bali",
    category: "Hasil Tani",
    partner: "Subak Tani Lestari",
    location: "Kabupaten Tabanan, Bali",
    tag: "Organik",
    desc: "Beras merah organik hasil sistem subak tradisional Tabanan, kaya serat.",
    longDesc:
      "Beras merah organik ditanam menggunakan sistem irigasi subak tradisional di Kabupaten Tabanan, Bali. Ditanam tanpa pestisida kimia, kaya serat, dan cocok untuk kebutuhan pangan sehat.",
    minOrder: "10 kg",
    price: "Rp 16.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=80",
    alt: "Beras merah organik hasil panen Bali",
  },
  {
    slug: "kol-karo",
    name: "Kol Segar Karo",
    category: "Hasil Tani",
    partner: "Tani Dataran Tinggi",
    location: "Kabupaten Karo, Sumatera Utara",
    tag: "Dipetik Harian",
    desc: "Kol dataran tinggi Karo, renyah dan segar, dipetik setiap pagi.",
    longDesc:
      "Kol dataran tinggi dari Kabupaten Karo, Sumatera Utara, dipetik setiap pagi untuk menjaga kerenyahan dan kesegaran. Cocok untuk pedagang pasar maupun kebutuhan rumah makan.",
    minOrder: "20 kg",
    price: "Rp 6.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1200&q=80",
    alt: "Kol segar hasil panen Karo",
  },
  {
    slug: "kakao-bantaeng",
    name: "Biji Kakao",
    category: "Hasil Tani",
    partner: "Koperasi Kakao Bantaeng",
    location: "Kabupaten Bantaeng, Sulawesi Selatan",
    tag: "Kualitas Ekspor",
    desc: "Biji kakao fermentasi kualitas ekspor dari petani Bantaeng.",
    longDesc:
      "Biji kakao fermentasi kualitas ekspor dari Koperasi Kakao Bantaeng, Sulawesi Selatan. Diproses dengan standar fermentasi terjaga untuk menghasilkan aroma dan cita rasa cokelat terbaik.",
    minOrder: "25 kg",
    price: "Rp 32.000",
    unit: "/kg",
    image:
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80",
    alt: "Biji kakao fermentasi kualitas ekspor",
  },
];

export function buildWhatsappUrl(product: Product) {
  const message = [
    "Halo Agratara,",
    `Saya tertarik dengan produk berikut di katalog Agratara:`,
    "",
    `Produk: ${product.name}`,
    `Harga: ${product.price}${product.unit}`,
    `Mitra: ${product.partner} (${product.location})`,
    `Minimum pemesanan: ${product.minOrder}`,
    "",
    "Mohon info lebih lanjut mengenai ketersediaan dan cara pemesanannya. Terima kasih.",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildOrderWhatsappUrl(product: Product) {
  const message = [
    "Halo Agratara,",
    `Saya ingin memesan produk berikut:`,
    "",
    `Produk: ${product.name}`,
    `Harga: ${product.price}${product.unit}`,
    `Mitra: ${product.partner} (${product.location})`,
    `Minimum pemesanan: ${product.minOrder}`,
    "",
    "Mohon dibantu proses pemesanannya, termasuk informasi jumlah, pembayaran, dan pengiriman. Terima kasih.",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
