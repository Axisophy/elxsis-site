// app/projects/symmetry-projections/page.tsx
import ProjectTemplate from "@/components/ProjectTemplate";
import { projects } from "../projectsData";

const project = projects.find((p) => p.slug === "symmetry-projections")!;

export default function SymmetryProjectionsPage() {
  return <ProjectTemplate project={project} />;
}
