"use client";

import { useState } from "react";
import { PageTitle } from "@/components/typography";

type Experiment = {
  slug: string;
  title: string;
  tags: string[];
  status: "in-progress" | "prototype" | "ready" | "speculative";
  summary: string;
};

const experiments: Experiment[] = [
  {
    slug: "lorenz-field-study-01",
    title: "Lorenz field study 01",
    tags: ["dynamical systems", "motion", "chaos"],
    status: "in-progress",
    summary:
      "Layered Lorenz trajectories rendered as dense vector fields, exploring seeding strategies, camera paths, and colour systems for future motion pieces and prints.",
  },
  {
    slug: "aizawa-motion-planes",
    title: "Aizawa motion planes",
    tags: ["dynamical systems", "attractors"],
    status: "prototype",
    summary:
      "Aizawa attractor cross-sections and orbit bundles, designed as a series of motion planes that can be recombined into longer sequences or interactive views.",
  },
  {
    slug: "n-body-orbit-sketches",
    title: "N-body orbit sketches",
    tags: ["n-body", "simulation", "gravity"],
    status: "speculative",
    summary:
      "Low-resolution gravitational n-body tests focusing on orbit pattern aesthetics rather than strict physical realism, intended as a foundation for future collaborations.",
  },
  {
    slug: "gaia-hr-maps",
    title: "Gaia HR maps",
    tags: ["astrophysics", "data", "mapping"],
    status: "ready",
    summary:
      "Variations on Hertzsprung–Russell diagrams and related Gaia-derived maps, tuned for large-format print with emphasis on density, gradients, and legibility.",
  },
  {
    slug: "quantum-hydrogen-fields",
    title: "Quantum hydrogen fields",
    tags: ["quantum", "wavefunctions"],
    status: "prototype",
    summary:
      "Scalar fields and isosurfaces derived from hydrogenic wavefunctions, designed as both static depth fields and potential 3D animation material.",
  },
  {
    slug: "neutrino-oscillation-maps",
    title: "Neutrino oscillation maps",
    tags: ["neutrinos", "oscillations"],
    status: "speculative",
    summary:
      "Early visual sketches of three-flavour neutrino oscillation probabilities, mapping parameter spaces and path-dependent transitions into layered visual structures.",
  },
];

const statusLabel: Record<Experiment["status"], string> = {
  "in-progress": "In progress",
  prototype: "Prototype",
  ready: "Ready for commissions",
  speculative: "Speculative study",
};

export default function ExperimentsPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-[1440px] px-4 lg:px-8 py-10 lg:py-16">
     <header className="max-w-3xl space-y-4 mb-8 lg:mb-12">
  <PageTitle>Experiments</PageTitle>
  <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          A working catalogue of ongoing and completed experiments – from
          dynamical systems and attractors to astrophysical data and quantum
          structures. Some of these studies are already available as large-scale
          prints; others are prototypes or speculative sketches intended for
          future commissions and collaborations.
        </p>
      </header>

      <section className="border border-neutral-200 overflow-hidden">
        {experiments.map((exp, index) => {
          const isOpen = openSlug === exp.slug;

          return (
            <button
              key={exp.slug}
              type="button"
              onClick={() =>
                setOpenSlug(isOpen ? null : exp.slug)
              }
              className={[
                "w-full text-left px-4 md:px-6 py-4 md:py-5",
                "transition-colors duration-150",
                "bg-white hover:bg-neutral-50",
                index !== experiments.length - 1
                  ? "border-b border-neutral-200"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Top row: title + status */}
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-sm md:text-8xl font-[700] text-neutral-900 tracking-[-0.025em]">
                  {exp.title}
                </h2>
                <span className="text-[10px] uppercase tracking-[0.16em] px-2 py-1 rounded-full border border-neutral-300 text-neutral-600">
                  {statusLabel[exp.status]}
                </span>
              </div>

              {/* Tags row */}
              <div className="mt-2 flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expandable summary */}
              {isOpen && (
                <div className="mt-3 text-xs md:text-sm text-neutral-700 leading-relaxed">
                  {exp.summary}
                </div>
              )}
            </button>
          );
        })}
      </section>
    </main>
  );
}