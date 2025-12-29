"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PageTitle } from "@/components/typography";
import { experiments, type Experiment } from "./experimentsData";

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
      id={`card-${exp.slug}`}
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
              {/* Behind the work note */}
              {exp.behind.note && (
                <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                  {exp.behind.note}
                </p>
              )}

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
                      className="inline-block text-xs md:text-sm text-neutral-600 underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Image gallery
                 * unoptimized: preserves crisp linework and avoids unwanted
                 * recompression on artwork-heavy assets (Weyl projections,
                 * HR density maps, Lorenz renders). Consider converting large
                 * PNGs to WebP manually if file sizes become an issue.
                 */}
              {exp.behind.images && exp.behind.images.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                    Gallery
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {exp.behind.images.map((img, i) => (
                      <div key={i} className="relative aspect-square">
                        <Image
                          src={img}
                          alt={`${exp.title} gallery image ${i + 1}`}
                          fill
                          className="object-cover"
                          quality={95}
                          sizes="(min-width: 1024px) 240px, (min-width: 768px) 200px, 33vw"
                          unoptimized
                        />
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

type ExperimentsClientProps = {
  initialOpenSlug?: string | null;
};

export default function ExperimentsClient({
  initialOpenSlug,
}: ExperimentsClientProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(
    initialOpenSlug ?? null
  );

  useEffect(() => {
    if (!initialOpenSlug) return;
    requestAnimationFrame(() => {
      document
        .getElementById(`card-${initialOpenSlug}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [initialOpenSlug]);

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
