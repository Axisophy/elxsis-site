// components/ProjectTemplate.tsx
import Image from "next/image";
import Link from "next/link";
import { PageTitle, SectionTitle } from "@/components/typography";

export type ProjectData = {
  title: string;
  summary: string;
  inScope: string[];
  outputs: string[];
  status: string;
  seeking: string[];
  images?: string[];
  relatedExperiments?: { label: string; slug: string }[];
  heroImage?: {
    src: string;
    alt: string;
    caption: string;
    aspect?: "wide" | "square";
  };
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

      {/* Hero image */}
      {project.heroImage && (
        <div className="mb-10 lg:mb-14 max-w-4xl">
          <div
            className={`relative w-full ${
              project.heroImage.aspect === "square"
                ? "aspect-square"
                : "aspect-[16/9]"
            }`}
          >
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              className="object-cover"
              quality={95}
              sizes="(min-width: 1024px) 900px, 100vw"
              unoptimized
            />
          </div>
          <p className="mt-2 text-[11px] text-neutral-500">
            {project.heroImage.caption}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl">
        {/* In scope */}
        <section>
          <SectionTitle className="mb-4">In scope</SectionTitle>
          <ul className="space-y-2 text-sm md:text-base text-neutral-700">
            {project.inScope.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-neutral-400 mt-0.5">•</span>
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
                <span className="text-neutral-400 mt-0.5">•</span>
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
                <span className="text-neutral-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Related experiments */}
        {project.relatedExperiments && project.relatedExperiments.length > 0 && (
          <section>
            <SectionTitle className="mb-4">Related experiments</SectionTitle>
            <ul className="space-y-2 text-sm md:text-base">
              {project.relatedExperiments.map((exp, i) => (
                <li key={i}>
                  <Link
                    href={`/experiments?open=${exp.slug}`}
                    className="text-neutral-700 underline-offset-4 hover:underline transition-colors"
                  >
                    {exp.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Image gallery */}
      {project.images && project.images.length >= 2 && (
        <section className="mt-12 lg:mt-16">
          <SectionTitle className="mb-6">Gallery</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((src, i) => (
              <div key={i} className="relative aspect-square">
                <Image
                  src={src}
                  alt={`${project.title} gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                  quality={95}
                  sizes="(min-width: 1024px) 300px, (min-width: 768px) 50vw, 100vw"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
