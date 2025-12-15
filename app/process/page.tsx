import { PageTitle, SectionTitle } from "@/components/typography";

const processSections = [
  {
    title: "Research",
    // TODO: Replace with final copy
    content: "Placeholder paragraph about the research phase – sourcing scientific data, literature review, identifying visual and structural possibilities.",
  },
  {
    title: "Modelling",
    // TODO: Replace with final copy
    content: "Placeholder paragraph about mathematical and computational modelling – simulation approaches, parameter exploration, algorithmic design.",
  },
  {
    title: "Rendering pipeline",
    // TODO: Replace with final copy
    content: "Placeholder paragraph about rendering workflows – resolution considerations, colour systems, compositing, and technical infrastructure.",
  },
  {
    title: "Finishing",
    // TODO: Replace with final copy
    content: "Placeholder paragraph about finishing work – post-processing, grading, proofing, and preparing files for final output.",
  },
  {
    title: "Outputs",
    // TODO: Replace with final copy
    content: "Placeholder paragraph about output formats – large-format prints, motion pieces, interactive installations, digital editions.",
  },
  {
    title: "Collaboration",
    // TODO: Replace with final copy
    content: "Placeholder paragraph about collaboration workflows – working with scientists, institutions, and creative partners.",
  },
];

export default function ProcessPage() {
  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4 mb-10 lg:mb-14">
        <PageTitle>Process</PageTitle>
        {/* TODO: Replace with final intro copy */}
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          Placeholder intro paragraph. Process notes and methods for Elxsis
          work, from research through to final outputs.
        </p>
      </header>

      <div className="space-y-10 lg:space-y-14 max-w-3xl">
        {processSections.map((section) => (
          <section key={section.title}>
            <SectionTitle className="mb-4">{section.title}</SectionTitle>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}