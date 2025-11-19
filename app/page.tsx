// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/typography";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Hero image */}
      <section className="relative w-full h-[70vh] md:h-[80vh]">
        <Image
          src="/elxsis-hero-02.jpg" // <- must match filename in /public
          alt="Elxsis experimental visual"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Main homepage content */}
      <section className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
        {/* Intro block with consistent page title */}
        <header className="max-w-3xl space-y-4 mb-10 lg:mb-14">
          <PageTitle>Elxsis</PageTitle>
          <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
            Elxsis is a computational art and research studio working with
            dynamical systems, astrophysical data, quantum structures, and other
            scientific models. This site will gradually collect experiments,
            motion studies, and large-scale print work, alongside notes on
            process and collaborations.
          </p>
        </header>

        {/* Featured experiments */}
        <section>
          {/* Section header: match PageTitle style, just smaller */}
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg md:text-3xl text-neutral-900 font-[700] tracking-[-0.025em]">
              Featured experiments
            </h2>
            <Link
              href="/experiments"
              className="text-xs md:text-sm font-[500] underline underline-offset-4 decoration-pink-500 hover:text-pink-600"
            >
              View all experiments
            </Link>
          </div>

          {/* One experiment per line, full-width, square corners */}
          <div className="mt-6 flex flex-col">
            {/* Experiment 1 */}
            <article className="border border-neutral-200 px-4 md:px-6 py-4 md:py-5 hover:bg-neutral-50 transition-colors">
              <h3 className="text-lg md:text-4xl lg:text-5xl font-[700] tracking-[-0.025em] text-neutral-900">
                Lorenz field study 01
              </h3>
              <p className="mt-2 text-xs md:text-sm text-neutral-700 leading-relaxed max-w-2xl">
                A family of Lorenz attractor trajectories rendered as dense
                phase-space fields, exploring parameter drifts, seeding patterns,
                and multi-axis motion paths for future animation.
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                dynamical systems / motion test
              </p>
            </article>

            {/* Experiment 2 */}
            <article className="border border-t-0 border-neutral-200 px-4 md:px-6 py-4 md:py-5 hover:bg-neutral-50 transition-colors">
              <h3 className="text-lg md:text-4xl lg:text-5xl font-[700] tracking-[-0.025em] text-neutral-900">
                Weyl symmetries grid
              </h3>
              <p className="mt-2 text-xs md:text-sm text-neutral-700 leading-relaxed max-w-2xl">
                High-resolution visualisations of Weyl group symmetries arranged
                as a modular grid, designed as a bridge between pure mathematics
                and large-format print editions.
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                algebraic structures / print series
              </p>
            </article>

            {/* Experiment 3 */}
            <article className="border border-t-0 border-neutral-200 px-4 md:px-6 py-4 md:py-5 hover:bg-neutral-50 transition-colors">
              <h3 className="text-lg md:text-4xl lg:text-5xl font-[700] tracking-[-0.025em] text-neutral-900">
                Gaia stellar atlas sketches
              </h3>
              <p className="mt-2 text-xs md:text-sm text-neutral-700 leading-relaxed max-w-2xl">
                Early-phase mappings of Gaia data, testing different ways to
                encode density, temperature, and luminosity for narrative
                large-scale star-field prints and installations.
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                astrophysical data / mapping
              </p>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}