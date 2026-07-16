import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const title = "Agratara — Kedaulatan Pangan untuk Kesejahteraan Bangsa";
const description =
  "Agratara menghubungkan petani, peternak, dan pedagang pasar secara langsung — harga adil, pasokan stabil, tanpa tengkulak.";

export const metadata: Metadata = {
  metadataBase: new URL("https://agratara.netlify.app"),
  title: {
    default: title,
    template: "%s | Agratara",
  },
  description,
  authors: [{ name: "Agratara" }],
  creator: "Agratara",
  publisher: "Agratara",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://agratara.netlify.app",
    title,
    description,
    siteName: "Agratara",
    images: [
      {
        url: "/og-image-agratara.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image-agratara.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
