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
          src="/home/hero-weyl.webp"
          alt="Weyl Symmetries series study (E8 projection)"
          fill
          priority
          quality={95}
          sizes="(min-width: 1024px) 1000px, 100vw"
          className="object-cover"
          unoptimized
        />
        <Link
          href="/projects/symmetry-projections"
          className="absolute bottom-4 left-4 text-[10px] tracking-[0.02em] text-white/70 hover:text-white transition-colors"
        >
          From the Weyl Symmetries series
        </Link>
      </section>

      {/* Main homepage content */}
      <section className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
        {/* Intro block with consistent page title */}
        <header className="max-w-3xl space-y-4 mb-10 lg:mb-14">
          <PageTitle>Elxsis</PageTitle>
          <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
            Elxsis works at the intersection of computation and scientific
            imagination, developing visual research across dynamical systems,
            astrophysical data, quantum structures, and emergent mathematical
            forms. The studio treats models, simulations, and datasets as raw
            material, not as content to be illustrated, but as places to look
            for structure, behaviour, and surprise.
          </p>
          <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
            Some experiments begin as a simple rule-set and end as a cinematic
            field. Others start with a scientific instrument or catalogue and
            become a new kind of map. Across all of it, the aim is the same:
            high-resolution computational design used with restraint and care,
            until the underlying system becomes legible and strange in the best
            way, and the work holds up as an object, a loop, or a room-scale
            image.
          </p>
        </header>

        {/* Current focus block */}
        <section className="mb-10 lg:mb-14">
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <h2 className="text-lg md:text-3xl text-neutral-900 font-[700] tracking-[-0.025em]">
              Current focus
            </h2>
          </div>
          <Link
            href="/projects/motion-studies-for-invisible-systems"
            className="block border border-neutral-200 px-4 md:px-6 py-4 md:py-5 hover:bg-neutral-50 transition-colors"
          >
            <h3 className="text-lg md:text-4xl lg:text-5xl font-[700] tracking-[-0.025em] text-neutral-900">
              Motion Studies for Invisible Systems
            </h3>
            <p className="mt-2 text-xs md:text-sm text-neutral-700 leading-relaxed max-w-2xl">
              Motion Studies for Invisible Systems is an ongoing set of
              animation studies drawn from dynamical systems. It brings together
              strange attractors, cellular automata, and complex fields, looking
              for images that feel precise, readable, and slightly uncanny.
            </p>
            <p className="mt-2 text-xs md:text-sm text-neutral-700 leading-relaxed max-w-2xl">
              The next phase is three finished pieces and a compact project page
              with selected frames and short notes, followed by a prototype
              screening to test presentation and gather feedback.
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              View project →
            </p>
          </Link>
        </section>

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
                Lorenz Loop
              </h3>
              <p className="mt-2 text-xs md:text-sm text-neutral-700 leading-relaxed max-w-2xl">
                A short MXWLL Originals film: a 20-second, seamless 4K loop that
                treats a Lorenz attractor as a sculptural object rather than a
                plot. Black ink on white, clean linework, no glossy CGI cues.
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                MXWLL Originals / dynamical systems
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