import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://elxsis.com"),
  title: {
    template: "%s | Elxsis",
    default: "Elxsis | Computational Art & Research Studio",
  },
  description:
    "Computational art and research studio developing visual work across dynamical systems, astrophysical data, quantum structures, and mathematical forms.",
  openGraph: {
    title: "Elxsis | Computational Art & Research Studio",
    description:
      "Visual research across dynamical systems, astrophysical data, quantum structures, and emergent mathematical forms.",
    images: ["/home/hero-weyl.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elxsis | Computational Art & Research Studio",
    description:
      "Visual research across dynamical systems, astrophysical data, quantum structures, and emergent mathematical forms.",
    images: ["/home/hero-weyl.webp"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/lvk7kye.css"
        />
      </head>
      <body className="bg-white text-neutral-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}