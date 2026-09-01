import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Outfit } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://libin-sneha-wedding.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Libin & Sneha | Wedding",
  description:
    "With the blessing of God and their families, Libin Benny and Sneha Johnson invite you to celebrate their marriage.",
  applicationName: "Libin & Sneha Wedding",
  authors: [{ name: "Libin Benny & Sneha Johnson" }],
  keywords: [
    "Libin Benny",
    "Sneha Johnson",
    "wedding",
    "Idukki",
    "Kannur",
    "Kerala",
  ],
  openGraph: {
    title: "Libin & Sneha | Wedding",
    description:
      "With the blessing of God and their families, Libin Benny and Sneha Johnson invite you to celebrate their marriage.",
    locale: "en_IN",
    type: "website",
    siteName: "Libin & Sneha Wedding",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Libin & Sneha — Wedding monogram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Libin & Sneha | Wedding",
    description:
      "Libin Benny and Sneha Johnson invite you to celebrate their marriage.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c2b24",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
