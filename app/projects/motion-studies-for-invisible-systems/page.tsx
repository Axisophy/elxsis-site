// app/projects/motion-studies-for-invisible-systems/page.tsx
import ProjectTemplate from "@/components/ProjectTemplate";
import { projects } from "../projectsData";

const project = projects.find(
  (p) => p.slug === "motion-studies-for-invisible-systems"
)!;

export default function MotionStudiesPage() {
  return <ProjectTemplate project={project} />;
}
