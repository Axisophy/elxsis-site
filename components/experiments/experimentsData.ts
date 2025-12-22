// components/experiments/experimentsData.ts

export type BehindTheWork = {
  note?: string;
  related?: { href: string; label: string }[];
  images?: string[];
  nextSteps?: string[];
};

/*
 * Experiment label system (controlled vocabulary)
 *
 * Slug policy:
 *   - slug is a permanent identifier; do not change without providing redirects
 *   - titles and summaries may change freely
 *   - use aliases to map old slugs to the canonical one if a slug must change
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
export type Experiment = {
  slug: string;
  aliases?: string[];
  title: string;
  tags: string[];
  stage?: "Shipping" | "Seeding" | "Future";
  type?: string;
  format?: "Screen" | "Print" | "Installation";
  featuredRank?: number;
  summary: string;
  behind?: BehindTheWork;
};

/*
 * TODO: If individual experiment pages are added later (/experiments/[slug]),
 * implement redirects for any aliases using one of:
 *   - next.config.js redirects (static)
 *   - route handler with redirect() (dynamic)
 *   - middleware (flexible)
 * Use aliases to map old slugs to the canonical slug.
 */
export const experiments: Experiment[] = [
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
      note: "This study is part of Motion Studies for Invisible Systems.",
      images: [
        "/experiments/lorenz-loop/FinalLorenz1.png",
        "/experiments/lorenz-loop/FinalLorenz200.png",
        "/experiments/lorenz-loop/FinalLorenz400.png",
      ],
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
      note: "This thread feeds into Stellar Cartographies.",
      images: [
        "/experiments/gaia-hr-maps/gaia_hr_setF_magmaW_full_density_square_2000.webp",
        "/experiments/gaia-hr-maps/gaia_hr_setF_magmaW_turnoff_knee_density_square_2000.webp",
        "/experiments/gaia-hr-maps/gaia_hr_setF_cividisW_full_density_square_2000.webp",
        "/experiments/gaia-hr-maps/gaia_hr_setF_cividisW_turnoff_knee_density_square_2000.webp",
        "/experiments/gaia-hr-maps/gaia_hr_setF_fullHex_full_hex_square_2000.webp",
        "/experiments/gaia-hr-maps/gaia_points_full_square_2000x2000.png",
      ],
      nextSteps: [
        "Produce three final stills with consistent tone and margins (square, wide, portrait)",
        "Test density transforms (log vs asinh) to preserve faint structures",
        "Build one short animated HR drift study as a loop test",
        "Pair HR density with a companion sky distribution map",
      ],
    },
  },
  {
    slug: "weyl-symmetries-grid",
    title: "Weyl Symmetries series",
    tags: ["algebraic structures", "print series"],
    stage: "Seeding",
    type: "Still study",
    format: "Print",
    featuredRank: 3,
    summary:
      "High-resolution studies built from projections of the E8 Weyl symmetry structure. Each image begins with a fixed configuration and a chosen projection seed, then resolves as a dense field of edges where colour encodes angular change across the projection. The goal is a repeatable series of distinct works rather than a single definitive view.",
    behind: {
      images: [
        "/experiments/weyl-symmetries/WeylSymmetries-001p1-coxeter_plot_18_50inch_1mm__E8_rnd_s596_d_anti_all_ec-ang_g0.55_tw0_rings0_keep1_762x762mm_300dpi.webp",
        "/experiments/weyl-symmetries/WeylSymmetries-002p2-coxeter_plot_16_white_50inch_1mm__E8_rnd_s0_d_anti_all_ec-ang_g0.2_tw0_rings0_keep1_762x762mm_300dpi.webp",
        "/experiments/weyl-symmetries/Weyl-coxeter_plot_9__E8_pca_s0_d_full_all_ec-ang_g1_tw0_rings0_keep1_762x762mm_300dpi.webp",
        "/experiments/weyl-symmetries/weyl-coxeter_plot_14__E8_rnd_s3377_d_anti_all_ec-ang_g1.3_tw0_rings31_keep1_762x762mm_300dpi.webp",
        "/experiments/weyl-symmetries/weyl-coxeter_plot_15__E7_rnd_s0_d_full_all_ec-ang_g1.25_tw0_rings0_keep1_762x762mm_300dpi.webp",
      ],
      note: "The series is controlled through a small set of parameters that affect structure and tone, including projection choice, edge selection, line weight, opacity, and response curves. Outputs are designed as square large-format works suitable for print and editioning. Typical output uses 240 points and 7,140 edges, rendered as a square large-format vector file.",
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
    featuredRank: 5,
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
    featuredRank: 4,
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
    featuredRank: 6,
    summary:
      "Early visual sketches of three-flavour neutrino oscillation probabilities, mapping parameter spaces and path-dependent transitions into layered visual structures.",
  },
];

// Build a slug map for validation (includes aliases)
export function buildSlugMap(): Map<string, string> {
  const slugMap = new Map<string, string>();
  for (const e of experiments) {
    slugMap.set(e.slug, e.slug);
    (e.aliases ?? []).forEach((a) => slugMap.set(a, e.slug));
  }
  return slugMap;
}
