export default function AboutPage() {
  return (
    <main className="mx-auto  px-4 lg:px-8 py-10 lg:py-16">
      <h1 className="text-sm md:text-base tracking-[0.18em] uppercase text-neutral-500 font-[600]">
        About
      </h1>
      <div className="mt-4 max-w-3xl space-y-4 text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
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
      </div>
    </main>
  );
}