// app/projects/stellar-cartographies/page.tsx
import ProjectTemplate from "@/components/ProjectTemplate";
import { projects } from "../projectsData";

const project = projects.find((p) => p.slug === "stellar-cartographies")!;

export default function StellarCartographiesPage() {
  return <ProjectTemplate project={project} />;
}
