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
          {/* TODO: Replace with final studio statement */}
          <div className="space-y-4 text-sm md:text-base text-neutral-700 leading-relaxed">
            <p>
              Placeholder studio statement paragraph 1. Elxsis works at the
              intersection of science, mathematics, and computational
              image-making.
            </p>
            <p>
              Placeholder studio statement paragraph 2. The studio develops both
              self-initiated and commissioned projects.
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
          {/* TODO: Replace with actual related practices and links */}
          <div className="space-y-4 text-sm md:text-base text-neutral-700 leading-relaxed">
            <p>
              Placeholder paragraph about related practices, affiliated studios,
              or parallel work streams.
            </p>
            <ul className="space-y-2">
              {/* TODO: Add actual links */}
              <li className="flex items-start gap-2">
                <span className="text-neutral-400 mt-0.5">–</span>
                <span>Placeholder related practice 1</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-400 mt-0.5">–</span>
                <span>Placeholder related practice 2</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-400 mt-0.5">–</span>
                <span>Placeholder related practice 3</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}