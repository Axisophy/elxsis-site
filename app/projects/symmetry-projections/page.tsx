// app/projects/symmetry-projections/page.tsx
import type { Metadata } from "next";
import ProjectTemplate from "@/components/ProjectTemplate";
import { projects } from "../projectsData";

export const metadata: Metadata = {
  title: "Symmetry Projections",
  description:
    "High-resolution works from algebraic and geometric structures — including Weyl Symmetries and E8 projections — using projection to turn abstract relationships into images.",
  openGraph: {
    title: "Symmetry Projections | Elxsis",
    description:
      "High-resolution works from algebraic structures, including Weyl Symmetries and E8 projections.",
    images: ["/experiments/weyl-symmetries/Weyl-coxeter_plot_17_30inch_0p2mm__E8_rnd_s0_d_anti_all_ec-ang_g2.3_tw0_rings0_keep1_762x762mm_300dpi.webp"],
  },
};

const project = projects.find((p) => p.slug === "symmetry-projections")!;

export default function SymmetryProjectionsPage() {
  return <ProjectTemplate project={project} />;
}
