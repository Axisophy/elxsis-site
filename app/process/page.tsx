import { PageTitle } from "@/components/typography";

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 lg:px-8 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4 mb-8 lg:mb-12">
        <PageTitle>Process</PageTitle>
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          Process notes and methods for Elxsis – from data sourcing and modelling
          to rendering pipelines, physical output considerations, and
          collaboration workflows. This section will grow as individual projects
          move from experiment to finished work.
        </p>
      </header>
    </main>
  );
}