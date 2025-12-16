"use client";

import { useState } from "react";
import { PageTitle } from "@/components/typography";

type BehindTheWork = {
  related?: { href: string; label: string }[];
  // TODO: Add actual image paths when available
  images?: string[];
  nextSteps?: string[];
};

/*
 * Experiment label system (controlled vocabulary)
 *
 * Stage (fixed): "Shipping" | "Seeding" | "Future"
 *   - Shipping: actively being delivered
 *   - Seeding: in development or prototype
 *   - Future: planned or speculative
 *
 * Type (controlled):
 *   - Film loop
 *   - Still study
 *   - Dataset map
 *   - System sketch
 *   - Prototype tool
 *   - Installation test
 *
 * Format (controlled):
 *   - Screen
 *   - Print
 *   - Installation
 *
 * featuredRank: lower numbers appear first in Featured; unranked go to Archive
 */
type Experiment = {
  slug: string;
  title: string;
  tags: string[];
  stage?: "Shipping" | "Seeding" | "Future";
  type?: string;
  format?: "Screen" | "Print" | "Installation";
  featuredRank?: number;
  summary: string;
  behind?: BehindTheWork;
};

const experiments: Experiment[] = [
  {
    slug: "lorenz-loop-mxwll",
    title: "Lorenz Loop",
    tags: ["MXWLL Originals", "dynamical systems", "motion"],
    stage: "Shipping",
    type: "Film loop",
    format: "Screen",
    featuredRank: 1,
    summary:
      "We are building a short MXWLL Originals film: a 20-second, seamless 4K loop that treats a Lorenz attractor as a sculptural object rather than a plot. The aesthetic is black ink on white, with clean, deliberate linework and no glossy CGI cues. The Lorenz system is not periodic, so the loop is created by making the presentation periodic. Camera motion and the portion of the trajectory that is revealed return to the same state at the loop point. To reduce shimmer in thin animated linework, we render a 6K master sequence and downsample to 4K. The workflow is staged: seam-check stills, then a 60-frame micro-loop, then the full 600-frame render once framing and tone are locked.",
    behind: {
      related: [
        {
          href: "https://axisophy.com/products/phase-portrait-005-1",
          label: "Related work: Phase Portrait 005",
        },
      ],
      nextSteps: [
        "Final line weight and tone adjustments",
        "Full 4K delivery render",
      ],
    },
  },
  {
    slug: "gaia-hr-maps",
    title: "Gaia HR maps",
    tags: ["astrophysics", "data", "mapping"],
    stage: "Shipping",
    type: "Dataset map",
    format: "Screen",
    featuredRank: 2,
    summary:
      "Variations on Hertzsprung-Russell diagrams and related Gaia-derived maps, tuned for large-format print with emphasis on density, gradients, and legibility.",
    behind: {
      // TODO: Add actual image paths when available
      images: [
        "placeholder-1.jpg",
        "placeholder-2.jpg",
        "placeholder-3.jpg",
        "placeholder-4.jpg",
        "placeholder-5.jpg",
        "placeholder-6.jpg",
      ],
      // TODO: Replace with actual next steps
      nextSteps: [
        "Placeholder next step 1",
        "Placeholder next step 2",
        "Placeholder next step 3",
      ],
    },
  },
  {
    slug: "weyl-symmetries-grid",
    title: "Weyl symmetries grid",
    tags: ["algebraic structures", "print series"],
    stage: "Seeding",
    type: "Still study",
    format: "Print",
    featuredRank: 3,
    summary:
      "High-resolution visualisations of Weyl group symmetries arranged as a modular grid, designed as a bridge between pure mathematics and large-format print editions.",
    behind: {
      related: [
        {
          href: "https://axisophy.com/products/weyl-symmetries-002-2",
          label: "Related work: Weyl Symmetries 002",
        },
      ],
    },
  },
  {
    slug: "aizawa-motion-planes",
    title: "Aizawa motion planes",
    tags: ["dynamical systems", "attractors"],
    stage: "Seeding",
    type: "Still study",
    format: "Print",
    summary:
      "Aizawa attractor cross-sections and orbit bundles, designed as a series of motion planes that can be recombined into longer sequences or interactive views.",
    behind: {
      related: [
        {
          href: "https://axisophy.com/products/phase-portrait-005-1",
          label: "Related work: Phase Portrait 005",
        },
      ],
    },
  },
  {
    slug: "n-body-orbit-sketches",
    title: "N-body orbit sketches",
    tags: ["n-body", "simulation", "gravity"],
    stage: "Seeding",
    type: "System sketch",
    format: "Screen",
    summary:
      "Low-resolution gravitational n-body tests focusing on orbit pattern aesthetics rather than strict physical realism, intended as a foundation for future collaborations.",
  },
  {
    slug: "quantum-hydrogen-fields",
    title: "Quantum hydrogen fields",
    tags: ["quantum", "wavefunctions"],
    stage: "Seeding",
    type: "Still study",
    format: "Print",
    summary:
      "Scalar fields and isosurfaces derived from hydrogenic wavefunctions, designed as both static depth fields and potential 3D animation material.",
  },
  {
    slug: "neutrino-oscillation-maps",
    title: "Neutrino oscillation maps",
    tags: ["neutrinos", "oscillations"],
    stage: "Future",
    type: "Dataset map",
    format: "Screen",
    summary:
      "Early visual sketches of three-flavour neutrino oscillation probabilities, mapping parameter spaces and path-dependent transitions into layered visual structures.",
  },
];

// Helper to build the stage label string
function buildStageLabel(exp: Experiment): string {
  const parts: string[] = [];
  if (exp.stage) parts.push(exp.stage);
  if (exp.type) parts.push(exp.type);
  if (exp.format) parts.push(exp.format);
  return parts.join(" · ");
}

// Sort and split experiments: featured (ranked, top 12) vs archive (unranked)
const sortedExperiments = [...experiments].sort((a, b) => {
  if (a.featuredRank !== undefined && b.featuredRank !== undefined) {
    return a.featuredRank - b.featuredRank;
  }
  if (a.featuredRank !== undefined) return -1;
  if (b.featuredRank !== undefined) return 1;
  return 0;
});

const featuredExperiments = sortedExperiments
  .filter((e) => e.featuredRank !== undefined)
  .slice(0, 12);
const archiveExperiments = sortedExperiments.filter(
  (e) => e.featuredRank === undefined
);

function ExperimentCard({
  exp,
  isOpen,
  onToggle,
  isLast,
}: {
  exp: Experiment;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`exp-${exp.slug}`}
      className={[
        "w-full text-left px-4 md:px-6 py-4 md:py-5",
        "transition-colors duration-150",
        "bg-white hover:bg-neutral-50",
        !isLast ? "border-b border-neutral-200" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Title */}
      <h3 className="text-sm md:text-4xl font-[700] text-neutral-900 tracking-[-0.025em]">
        {exp.title}
      </h3>

      {/* Stage label */}
      {(exp.stage || exp.type || exp.format) && (
        <p className="mt-1 text-[11px] tracking-[0.02em] text-neutral-500">
          {buildStageLabel(exp)}
        </p>
      )}

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

      {/* Expandable summary + behind the work */}
      {isOpen && (
        <div id={`exp-${exp.slug}`} className="mt-3 space-y-4">
          <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
            {exp.summary}
          </p>

          {/* Behind the work section */}
          {exp.behind && (
            <div className="pt-3 border-t border-neutral-100 space-y-3">
              {/* Related work links */}
              {exp.behind.related && exp.behind.related.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {exp.behind.related.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block text-xs md:text-sm text-neutral-600 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Image gallery placeholder */}
              {exp.behind.images && exp.behind.images.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                    Gallery
                  </p>
                  {/* TODO: Replace with actual images */}
                  <div className="grid grid-cols-3 gap-2">
                    {exp.behind.images.map((img, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-neutral-100 flex items-center justify-center text-neutral-400 text-[10px]"
                      >
                        {/* TODO: Add real image */}
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Next steps */}
              {exp.behind.nextSteps && exp.behind.nextSteps.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                    Next steps
                  </p>
                  <ul className="space-y-1 text-xs text-neutral-600">
                    {exp.behind.nextSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neutral-400">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </button>
  );
}

export default function ExperimentsPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4 mb-8 lg:mb-12">
        <PageTitle>Experiments</PageTitle>
        <p className="text-[14px] md:text-[16px] leading-relaxed text-neutral-900">
          A working catalogue of ongoing and completed experiments, from
          dynamical systems and attractors to astrophysical data and quantum
          structures.
        </p>
      </header>

      {/* Featured experiments */}
      {featuredExperiments.length > 0 && (
        <section className="mb-12 lg:mb-16">
          <h2 className="text-lg md:text-2xl font-[700] text-neutral-900 tracking-[-0.025em] mb-4">
            Featured experiments
          </h2>
          <div className="border border-neutral-200 overflow-hidden">
            {featuredExperiments.map((exp, index) => (
              <ExperimentCard
                key={exp.slug}
                exp={exp}
                isOpen={openSlug === exp.slug}
                onToggle={() =>
                  setOpenSlug(openSlug === exp.slug ? null : exp.slug)
                }
                isLast={index === featuredExperiments.length - 1}
              />
            ))}
          </div>
        </section>
      )}

      {/* Archive */}
      {archiveExperiments.length > 0 && (
        <section>
          <h2 className="text-lg md:text-2xl font-[700] text-neutral-900 tracking-[-0.025em] mb-4">
            Archive
          </h2>
          <div className="border border-neutral-200 overflow-hidden">
            {archiveExperiments.map((exp, index) => (
              <ExperimentCard
                key={exp.slug}
                exp={exp}
                isOpen={openSlug === exp.slug}
                onToggle={() =>
                  setOpenSlug(openSlug === exp.slug ? null : exp.slug)
                }
                isLast={index === archiveExperiments.length - 1}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
