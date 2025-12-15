// app/projects/page.tsx
import Link from "next/link";
import { PageTitle } from "@/components/typography";
import { projects } from "./projectsData";

export default function ProjectsPage() {
  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4 mb-8 lg:mb-12">
        <PageTitle>Projects</PageTitle>
        {/* TODO: Replace with final intro copy */}
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          Placeholder intro paragraph. Current and upcoming research projects
          from the studio.
        </p>
      </header>

      <section className="border border-neutral-200 overflow-hidden">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={[
              "block w-full text-left px-4 md:px-6 py-4 md:py-5",
              "transition-colors duration-150",
              "bg-white hover:bg-neutral-50",
              index !== projects.length - 1
                ? "border-b border-neutral-200"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <h2 className="text-lg md:text-4xl lg:text-5xl font-[700] tracking-[-0.025em] text-neutral-900">
              {project.title}
            </h2>
            <p className="mt-2 text-xs md:text-sm text-neutral-700 leading-relaxed max-w-2xl">
              {project.cardSummary}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
