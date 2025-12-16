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
    // TODO: Add actual image paths
    images: [],
  },
  {
    slug: "stellar-cartographies",
    title: "Stellar Cartographies",
    // TODO: Replace with final copy
    cardSummary: "Placeholder summary for project card – astrophysical data mapping and visualisation.",
    summary: "Placeholder summary paragraph. TODO: Write full project description covering the scope, goals, and approach of this stellar mapping project.",
    inScope: [
      // TODO: Replace with actual scope items
      "Placeholder scope item 1",
      "Placeholder scope item 2",
      "Placeholder scope item 3",
    ],
    outputs: [
      // TODO: Replace with actual outputs
      "Placeholder output 1",
      "Placeholder output 2",
      "Placeholder output 3",
    ],
    // TODO: Replace with actual status
    status: "Placeholder status – research phase",
    // TODO: Replace with actual seeking items
    seeking: [
      "Placeholder seeking item 1",
      "Placeholder seeking item 2",
    ],
    // TODO: Add actual image paths
    images: [],
  },
  {
    slug: "symmetry-projections",
    title: "Symmetry Projections",
    // TODO: Replace with final copy
    cardSummary: "Placeholder summary for project card – mathematical symmetry structures visualised.",
    summary: "Placeholder summary paragraph. TODO: Write full project description covering the scope, goals, and approach of this symmetry project.",
    inScope: [
      // TODO: Replace with actual scope items
      "Placeholder scope item 1",
      "Placeholder scope item 2",
      "Placeholder scope item 3",
    ],
    outputs: [
      // TODO: Replace with actual outputs
      "Placeholder output 1",
      "Placeholder output 2",
      "Placeholder output 3",
    ],
    // TODO: Replace with actual status
    status: "Placeholder status – prototyping",
    // TODO: Replace with actual seeking items
    seeking: [
      "Placeholder seeking item 1",
      "Placeholder seeking item 2",
    ],
    // TODO: Add actual image paths
    images: [],
  },
];
