import type { Metadata } from "next";
import { PageTitle } from "@/components/typography";

export const metadata: Metadata = {
  title: "Available Works",
  description:
    "Large-format prints, editioned series, and bespoke commissions from Elxsis — works emerging from research in dynamical systems, astrophysics, and quantum structures.",
  openGraph: {
    title: "Available Works | Elxsis",
    description:
      "Large-format prints, editioned series, and bespoke commissions from Elxsis.",
  },
};

export default function AvailableWorksPage() {
  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4 mb-8 lg:mb-12">
        <PageTitle>Available works</PageTitle>
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          A small, evolving selection of Elxsis pieces is available for
          acquisition – typically as large-format prints, editioned series, or
          bespoke commissions. Many works emerge from longer-running research
          threads in dynamical systems, astrophysics, and quantum structures,
          and can be adapted in scale, format, or colour system for specific
          spaces. Please get in touch to discuss current availability, pricing,
          or commissioning new work based on ongoing experiments.
        </p>
      </header>
    </main>
  );
}