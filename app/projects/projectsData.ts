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
    // TODO: Replace with final copy
    cardSummary: "Placeholder summary for project card – motion studies exploring dynamical systems.",
    summary: "Placeholder summary paragraph. TODO: Write full project description covering the scope, goals, and approach of this motion studies project.",
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
    status: "Placeholder status – in development",
    // TODO: Replace with actual seeking text
    seeking: "Placeholder seeking text – collaborators, partners, etc.",
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
    // TODO: Replace with actual seeking text
    seeking: "Placeholder seeking text – data sources, institutional partners.",
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
    // TODO: Replace with actual seeking text
    seeking: "Placeholder seeking text – exhibition opportunities, print editions.",
    // TODO: Add actual image paths
    images: [],
  },
];
