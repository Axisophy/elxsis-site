import { PageTitle, SectionTitle } from "@/components/typography";

const processSections = [
  {
    title: "Research and sourcing",
    content: "Each thread begins with a question and a source. Sometimes that source is a paper, a mathematical system, or a piece of scientific history. Sometimes it is a dataset from a mission, instrument, or catalogue. The aim at this stage is to understand what the system can actually do, and what it refuses to do, before deciding what form the work should take.",
  },
  {
    title: "Modelling and iteration",
    content: "Most work develops through controlled iteration. Parameters are tested in small changes, variations are compared, and failures are kept when they point to a better direction. This is where the visual language starts to emerge, often long before anything looks \"finished\".",
  },
  {
    title: "Rendering pipeline",
    content: "Elxsis uses a staged pipeline: quick local tests to explore behaviour and composition, followed by more intensive renders once a direction has proved itself. Where necessary, cloud GPU compute is used as studio infrastructure for time-intensive simulation and rendering, with capped runs and clear sign-off points to keep the work focused and efficient.",
  },
  {
    title: "Finishing",
    content: "Final pieces are treated with the same care as print. That can include tone control, colour decisions, pacing, and sound where motion work calls for it. The goal is not maximal spectacle, but a sense of resolution, where the underlying system is still present and readable.",
  },
  {
    title: "Output formats",
    content: "Work is developed for multiple contexts. Some studies are designed for MXWLL and online viewing. Others are built as loops for large screens, projection, or event presentation. Some threads also resolve as print editions through Axisophy. The format affects everything, from contrast and scale to captioning and the amount of context offered.",
  },
  {
    title: "Collaboration workflow",
    content: "Elxsis works well with researchers, institutions, and venues who want high-quality visual outcomes without flattening the science. Collaborations usually start with a pilot study, then move into a defined set of outputs and a clear public context, whether that is a screening, an exhibition, a workshop, or a published experiment. Documentation and crediting are treated as part of the work, not an afterthought.",
  },
];

export default function ProcessPage() {
  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      <header className="max-w-3xl mb-10 lg:mb-14">
        <PageTitle>Process</PageTitle>
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