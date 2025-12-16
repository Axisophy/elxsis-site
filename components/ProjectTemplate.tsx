// components/ProjectTemplate.tsx
import { PageTitle, SectionTitle } from "@/components/typography";

export type ProjectData = {
  title: string;
  summary: string;
  inScope: string[];
  outputs: string[];
  status: string;
  seeking: string[];
  images?: string[];
};

type ProjectTemplateProps = {
  project: ProjectData;
};

export default function ProjectTemplate({ project }: ProjectTemplateProps) {
  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4 mb-8 lg:mb-12">
        <PageTitle>{project.title}</PageTitle>
        <div className="space-y-4">
          {project.summary.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900"
            >
              {para}
            </p>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl">
        {/* In scope */}
        <section>
          <SectionTitle className="mb-4">In scope</SectionTitle>
          <ul className="space-y-2 text-sm md:text-base text-neutral-700">
            {project.inScope.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-neutral-400 mt-0.5">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outputs */}
        <section>
          <SectionTitle className="mb-4">Outputs</SectionTitle>
          <ul className="space-y-2 text-sm md:text-base text-neutral-700">
            {project.outputs.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-neutral-400 mt-0.5">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Status */}
        <section>
          <SectionTitle className="mb-4">Status</SectionTitle>
          <p className="text-sm md:text-base text-neutral-700">
            {project.status}
          </p>
        </section>

        {/* Seeking */}
        <section>
          <SectionTitle className="mb-4">Seeking</SectionTitle>
          <ul className="space-y-2 text-sm md:text-base text-neutral-700">
            {project.seeking.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-neutral-400 mt-0.5">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Image gallery placeholder */}
      <section className="mt-12 lg:mt-16">
        <SectionTitle className="mb-6">Gallery</SectionTitle>
        {/* TODO: Add image gallery component with actual project images */}
        {/* TODO: Images should be placed in /public/projects/[project-slug]/ */}
        {project.images && project.images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* TODO: Render actual images here */}
            {project.images.map((src, i) => (
              <div
                key={i}
                className="aspect-square bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm"
              >
                {/* TODO: Replace with next/image */}
                Image placeholder {i + 1}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 bg-neutral-50 flex items-center justify-center text-neutral-400 text-sm">
            {/* TODO: Add project images */}
            No images yet – gallery will appear here when images are added.
          </div>
        )}
      </section>
    </main>
  );
}
