import { PageTitle } from "@/components/typography";

export default function AboutPage() {
  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4 mb-8 lg:mb-12">
        <PageTitle>About Elxsis</PageTitle>
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
        <p>
          Elxsis is the experimental arm of designer and artist Simon Tyler’s
          practice – a studio for work at the intersection of science,
          mathematics, and computational image-making.
        </p>
        <p>
          The studio develops both self-initiated and commissioned projects,
          ranging from large-format prints and motion pieces to interactive
          visualisations and research-led collaborations with scientists,
          mathematicians, museums, and technology organisations.
          </p>
      </header>
    </main>
  );
}