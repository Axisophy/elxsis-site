// app/projects/motion-studies-for-invisible-systems/page.tsx
import Image from "next/image";
import Link from "next/link";
import { PageTitle, SectionTitle } from "@/components/typography";

type Strand = {
  heading: string;
  images: { src: string; alt: string }[];
  caption: string;
  video?: { src: string; poster: string };
};

const strands: Strand[] = [
  {
    heading: "Strange attractors as motion fields",
    images: [
      {
        src: "/projects/motion-studies/FinalLorenz1.webp",
        alt: "Lorenz attractor density study, frame 1",
      },
      {
        src: "/projects/motion-studies/FinalLorenz200.webp",
        alt: "Lorenz attractor density study, frame 200",
      },
      {
        src: "/projects/motion-studies/FinalLorenz400.webp",
        alt: "Lorenz attractor density study, frame 400",
      },
    ],
    caption:
      "Lorenz attractor rendered as density and line studies. 20-second seamless loop, 4K.",
    video: {
      src: "/home/hero-lorenz-loop.mp4",
      poster: "/home/hero-lorenz-poster.jpg",
    },
  },
  {
    heading: "Reaction-diffusion as living surfaces",
    images: [
      {
        src: "/projects/motion-studies/grayscott-001.webp",
        alt: "Gray-Scott reaction-diffusion pattern study",
      },
      {
        src: "/projects/motion-studies/grayscott-002.webp",
        alt: "Gray-Scott reaction-diffusion pattern study, variant",
      },
    ],
    caption:
      "Gray-Scott reaction-diffusion system. Parameter studies exploring organic structure and tonal control.",
  },
  {
    heading: "Complex functions as cartographies",
    images: [
      {
        src: "/projects/motion-studies/complex-001.webp",
        alt: "Complex function domain colouring study",
      },
      {
        src: "/projects/motion-studies/complex-002.webp",
        alt: "Complex function transformation study",
      },
    ],
    caption:
      "Domain colouring and transformation studies. Visualising how functions reshape the complex plane.",
  },
];

const projectData = {
  title: "Motion Studies for Invisible Systems",
  summary: `Motion Studies for Invisible Systems is a set of animation studies drawn from dynamical systems. The focus is on behaviour that becomes readable over time: structure emerging from repetition, drift, and accumulation.

The work brings together strange attractors, cellular automata, and complex function fields. Some sequences are built from dense phase-space traces, others from evolving surfaces or vector fields. The aim is a small suite of films with consistent rules for framing, pacing, and looping, designed to work on a large screen as well as online.`,
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
};

export default function MotionStudiesPage() {
  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      {/* Header */}
      <header className="max-w-3xl space-y-4 mb-12 lg:mb-16">
        <PageTitle>{projectData.title}</PageTitle>
        <div className="space-y-4">
          {projectData.summary.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900"
            >
              {para}
            </p>
          ))}
        </div>
      </header>

      {/* Three strands */}
      <div className="space-y-16 lg:space-y-24 mb-16 lg:mb-24">
        {strands.map((strand, index) => (
          <section key={index}>
            <h2 className="text-xl md:text-2xl font-[600] tracking-[-0.02em] text-neutral-900 mb-6">
              {strand.heading}
            </h2>

            {/* Video embed for attractors strand */}
            {strand.video && (
              <div className="mb-6">
                <div className="relative w-full max-w-4xl aspect-video bg-neutral-100">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={strand.video.poster}
                    className="w-full h-full object-cover"
                  >
                    <source src={strand.video.src} type="video/mp4" />
                  </video>
                </div>
              </div>
            )}

            {/* Image grid */}
            <div
              className={`grid gap-4 ${
                strand.images.length === 3
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2"
              } max-w-5xl`}
            >
              {strand.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative aspect-square bg-neutral-100"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    quality={95}
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* Caption */}
            <p className="mt-4 text-[13px] text-neutral-500 max-w-2xl">
              {strand.caption}
            </p>
          </section>
        ))}
      </div>

      {/* Project metadata grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mb-16">
        {/* In scope */}
        <section>
          <SectionTitle className="mb-4">In scope</SectionTitle>
          <ul className="space-y-2 text-sm md:text-base text-neutral-700">
            {projectData.inScope.map((item, i) => (
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
            {projectData.outputs.map((item, i) => (
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
            {projectData.status}
          </p>
        </section>

        {/* Seeking */}
        <section>
          <SectionTitle className="mb-4">Seeking</SectionTitle>
          <ul className="space-y-2 text-sm md:text-base text-neutral-700">
            {projectData.seeking.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-neutral-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Related experiments */}
        <section>
          <SectionTitle className="mb-4">Related experiments</SectionTitle>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <Link
                href="/experiments?open=lorenz-loop-mxwll"
                className="text-neutral-700 underline-offset-4 hover:underline transition-colors"
              >
                Lorenz Loop
              </Link>
            </li>
          </ul>
        </section>
      </div>

      {/* R&D status note */}
      <footer className="border-t border-neutral-200 pt-8 max-w-3xl">
        <p className="text-sm text-neutral-600 leading-relaxed">
          This project is in active development. A prototype screening and
          research sharing session is planned for 2025, with findings published
          here.
        </p>
      </footer>
    </main>
  );
}
