import { PageTitle } from "@/components/typography";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 lg:px-8 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4 mb-8 lg:mb-12">
        <PageTitle>About</PageTitle>
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          Elxsis is the experimental studio of Simon Tyler, exploring the visual
          potential of scientific and mathematical systems. The work sits
          between computational research and visual practice – drawing on
          dynamical systems, astrophysical data, quantum structures, and other
          complex models to develop images, motion pieces, and large-scale
          prints. Elxsis uses high-resolution rendering and carefully controlled
          pipelines to translate these systems into precise, physical outcomes
          for galleries, collectors, and institutional collaborations.
        </p>
      </header>
    </main>
  );
}