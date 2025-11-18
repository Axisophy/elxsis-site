import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Elxsis",
  description:
    "Elxsis is a computational art and research studio producing cross-disciplinary work where science and mathematics meet high-resolution visual experimentation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}