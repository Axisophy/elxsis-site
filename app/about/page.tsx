import { PageTitle, SectionTitle } from "@/components/typography";

export default function AboutPage() {
  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4 mb-10 lg:mb-14">
        <PageTitle>About Elxsis</PageTitle>
      </header>

      <div className="space-y-12 lg:space-y-16 max-w-3xl">
        {/* Studio statement */}
        <section>
          <SectionTitle className="mb-4">Studio statement</SectionTitle>
          <div className="space-y-4 text-sm md:text-base text-neutral-700 leading-relaxed">
            <p>
              Elxsis works at the intersection of computation and scientific
              imagination, developing visual research across dynamical systems,
              astrophysical data, quantum structures, and emergent mathematical
              forms. The studio treats models, simulations, and datasets as raw
              material, looking for structure, behaviour, and surprise.
            </p>
            <p>
              Some work is developed for MXWLL, where experiments are published
              as part of a living library of visual research. Other work is
              developed for different contexts, including public screenings,
              exhibitions, and collaborations with institutions and museums. The
              aim is to build methods and works that can live comfortably on a
              phone screen, a website, or in a room.
            </p>
          </div>
        </section>

        {/* Simon Tyler bio */}
        <section>
          <SectionTitle className="mb-4">Simon Tyler</SectionTitle>
          {/* TODO: Replace with final bio */}
          <div className="space-y-4 text-sm md:text-base text-neutral-700 leading-relaxed">
            <p>
              Placeholder bio paragraph 1. Simon Tyler is a designer and artist
              working with computational systems and scientific visualisation.
            </p>
            <p>
              Placeholder bio paragraph 2. Background, education, previous work,
              and areas of interest.
            </p>
          </div>
        </section>

        {/* Related practices */}
        <section>
          <SectionTitle className="mb-4">Related practices</SectionTitle>
          <div className="space-y-4 text-sm md:text-base text-neutral-700 leading-relaxed">
            <p>
              Elxsis is closely linked to MXWLL, a digital platform built to
              present science with the care usually reserved for the best design
              objects. In practice, Elxsis can function as a studio source for
              computational experiments that are then published and evolved
              through MXWLL.
            </p>
            <p>
              Elxsis also sits alongside Axisophy, which focuses on editioned
              works and print-led releases. These are different outputs with
              different audiences, but they share the same habits of work:
              systems thinking, iteration, and a preference for things that are
              built carefully rather than dressed up at the end.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}