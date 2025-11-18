// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/typography";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Hero image that the header gradient sits over */}
      <section className="relative w-full h-[70vh] md:h-[80vh]">
        <Image
          src="/elxsis-hero-02.jpg"   // <- MUST match the filename in /public
          alt="Elxsis experimental visual"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
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