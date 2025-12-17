// app/projects/projectsData.ts
import type { ProjectData } from "@/components/ProjectTemplate";

export type ProjectMeta = ProjectData & {
  slug: string;
  cardSummary: string;
};

export const projects: ProjectMeta[] = [
  {
    slug: "motion-studies-for-invisible-systems",
    title: "Motion Studies for Invisible Systems",
    cardSummary: "Animation studies drawn from dynamical systems, looking for images that feel precise, readable, and slightly uncanny.",
    summary: "Motion Studies for Invisible Systems is a set of animation studies drawn from dynamical systems. The focus is on behaviour that becomes readable over time: structure emerging from repetition, drift, and accumulation.\n\nThe work brings together strange attractors, cellular automata, and complex function fields. Some sequences are built from dense phase-space traces, others from evolving surfaces or vector fields. The aim is a small suite of films with consistent rules for framing, pacing, and looping, designed to work on a large screen as well as online.",
    inScope: [
      "Strange attractors and phase-space density studies",
      "Cellular automata and emergent pattern systems",
      "Complex function fields, mappings, and flow lines",
      "Loop design, pacing, and presentation tests",
    ],
    outputs: [
      "Three short films, designed to loop cleanly",
      "A compact project page or microsite with selected frames and short notes",
      "A prototype screening and feedback capture",
      "Documentation of the final presentation setup",
    ],
    status: "In development",
    seeking: [
      "A venue partner for a one-night prototype screening",
      "Light-touch mathematical advice on public-facing framing",
      "Sound design or composition support for the final pieces",
    ],
    images: [],
    relatedExperiments: [
      { label: "Lorenz Loop", slug: "lorenz-loop-mxwll" },
    ],
  },
  {
    slug: "stellar-cartographies",
    title: "Stellar Cartographies",
    cardSummary: "Studies built from astrophysical catalogues, focused on how large datasets can become readable, designed images.",
    summary: "Stellar Cartographies is a set of studies built from astrophysical catalogues and derived maps, focused on how large datasets can become readable, designed images. The work is interested in density, structure, and scale, and in treating scientific plots as a kind of cartography rather than a chart.\n\nThe current anchor is a family of Gaia HR diagram maps and related views, tuned for legibility and tone, and developed with both screen presentation and print outcomes in mind. Over time, the project can expand into companion atlas views that connect stellar populations to position, motion, and selection effects.",
    inScope: [
      "HR diagram density maps and variations",
      "Companion 'atlas' views (sky distribution, motion, selection)",
      "Controlled aesthetic treatments for legibility and hierarchy",
      "Short loop studies where motion adds clarity",
    ],
    outputs: [
      "A small set of finished atlas plates (stills)",
      "A compact project page with selected frames and notes",
      "Optional short loop studies for screen presentation",
      "Documentation suitable for publication and collaboration",
    ],
    status: "In development",
    seeking: [
      "Astronomy collaborators open to light-touch consultation",
      "Data partners or institutions interested in public-facing visual work",
      "Opportunities for presentation in education or exhibition contexts",
    ],
    images: [],
    relatedExperiments: [
      { label: "Gaia HR maps", slug: "gaia-hr-maps" },
    ],
    heroImage: {
      src: "/experiments/gaia-hr-maps/gaia_hr_setC_full_hex_full_hex_wide_2400x1350.webp",
      alt: "Gaia HR diagram density map",
      caption: "Gaia HR maps study",
      aspect: "wide",
    },
  },
  {
    slug: "symmetry-projections",
    title: "Symmetry Projections",
    cardSummary: "High-resolution works from algebraic and geometric structures, using projection to turn abstract relationships into images.",
    summary: "Symmetry Projections develops a series of high-resolution works from algebraic and geometric structures, using projection as a way to turn abstract relationships into images with weight, density, and clear internal logic.\n\nThe current focus is the Weyl Symmetries series, built from projections of E8 structure into a dense field of edges where colour and tone encode the behaviour of the projection. The wider aim is a coherent family of works that can exist as screen studies, exhibition loops, and large-format prints.",
    inScope: [
      "Weyl Symmetries series (E8 projections and controlled variants)",
      "Phase portrait and phase-space structure studies",
      "Projection-driven work from higher-dimensional geometry",
      "Series logic: consistent output rules across multiple images",
    ],
    outputs: [
      "A set of finished high-resolution still works (series)",
      "Selected process notes and parameter snapshots",
      "Exhibition-ready screen studies where appropriate",
      "Print editions where a thread resolves strongly",
    ],
    status: "In development",
    seeking: [
      "Mathematical advisory input for public-facing framing (light-touch)",
      "Exhibition or screening opportunities for projection-based screen work",
      "Institutional partners interested in symmetry and visual communication",
    ],
    images: [],
    relatedExperiments: [
      { label: "Weyl Symmetries series", slug: "weyl-symmetries-grid" },
    ],
    heroImage: {
      src: "/experiments/weyl-symmetries/Weyl-coxeter_plot_17_30inch_0p2mm__E8_rnd_s0_d_anti_all_ec-ang_g2.3_tw0_rings0_keep1_762x762mm_300dpi.webp",
      alt: "Weyl Symmetries E8 projection",
      caption: "From the Weyl Symmetries series",
      aspect: "square",
    },
  },
];
