import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const GA_MEASUREMENT_ID = "G-4RG1ML4YX1";

// Structured data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elxsis",
  alternateName: "Elxsis Studio",
  url: "https://elxsis.com",
  logo: "https://elxsis.com/elxsis-logo.png",
  description:
    "Computational art and research studio developing visual work across dynamical systems, astrophysical data, quantum structures, and mathematical forms.",
  email: "studio@elxsis.com",
  sameAs: ["https://instagram.com/elx_sis"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Elxsis",
  url: "https://elxsis.com",
  description:
    "Computational art and research studio developing visual work across dynamical systems, astrophysical data, quantum structures, and mathematical forms.",
  publisher: {
    "@type": "Organization",
    name: "Elxsis",
  },
};

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
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="bg-white text-neutral-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}