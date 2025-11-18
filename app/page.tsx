export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 lg:px-8 py-10 lg:py-16">
      <section className="max-w-3xl space-y-4">
        <h1 className="text-base md:text-lg tracking-[0.18em] uppercase text-neutral-500 font-[600]">
          Elxsis — current work
        </h1>
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          Elxsis is a computational art and research studio exploring how
          scientific and mathematical systems can be transformed into
          high-resolution visual experiments. This site collects ongoing
          studies, larger projects, and prototype ideas in various states of
          completion.
        </p>
        <p className="text-[14px] md:text-[16px] leading-relaxed text-neutral-700">
          Below is a small selection of current experiments. Some are static
          large-format prints, others are motion tests, interactive prototypes,
          or speculative studies intended for future collaborations.
        </p>
      </section>

      <section className="mt-10 lg:mt-14">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-sm md:text-base tracking-[0.18em] uppercase text-neutral-500 font-[600]">
            Featured experiments
          </h2>
          <a
            href="/experiments"
            className="text-xs md:text-sm font-[500] underline underline-offset-4 decoration-pink-500 hover:text-pink-600"
          >
            View all experiments
          </a>
        </div>

        <div className="mt-6 grid gap-6 md:gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <article className="border border-neutral-200 rounded-xl p-4 md:p-5 hover:border-neutral-900 transition-colors">
            <h3 className="text-sm md:text-base font-[600] text-neutral-900">
              Lorenz field study 01
            </h3>
            <p className="mt-2 text-xs md:text-sm text-neutral-700 leading-relaxed">
              A family of Lorenz attractor trajectories rendered as dense
              phase-space fields, exploring parameter drifts, seeding patterns,
              and multi-axis motion paths for future animation.
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              dynamical systems / motion test
            </p>
          </article>

          {/* Card 2 */}
          <article className="border border-neutral-200 rounded-xl p-4 md:p-5 hover:border-neutral-900 transition-colors">
            <h3 className="text-sm md:text-base font-[600] text-neutral-900">
              Weyl symmetries grid
            </h3>
            <p className="mt-2 text-xs md:text-sm text-neutral-700 leading-relaxed">
              High-resolution visualisations of Weyl group symmetries arranged
              as a modular grid, designed as a bridge between pure mathematics
              and large-format print editions.
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              algebraic structures / print series
            </p>
          </article>

          {/* Card 3 */}
          <article className="border border-neutral-200 rounded-xl p-4 md:p-5 hover:border-neutral-900 transition-colors">
            <h3 className="text-sm md:text-base font-[600] text-neutral-900">
              Gaia stellar atlas sketches
            </h3>
            <p className="mt-2 text-xs md:text-sm text-neutral-700 leading-relaxed">
              Early-phase mappings of Gaia data, testing different ways to
              encode density, temperature, and luminosity for narrative
              large-scale star-field prints and installations.
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              astrophysical data / mapping
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}