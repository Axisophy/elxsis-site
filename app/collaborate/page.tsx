// app/collaborate/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, SectionTitle } from "@/components/typography";

export const metadata: Metadata = {
  title: "Collaborate",
  description:
    "Collaborate with Elxsis — current invitations for partnerships with researchers, institutions, venues, and technical partners on computational art and visual research.",
  openGraph: {
    title: "Collaborate | Elxsis",
    description:
      "Current invitations for partnerships with researchers, institutions, and technical partners.",
  },
};

const currentInvitations = [
  {
    id: 1,
    title: "Prototype screening partner",
    description: "A small venue for a one-night prototype screening of Motion Studies for Invisible Systems, used to test presentation formats and gather feedback.",
  },
  {
    id: 2,
    title: "Mathematical adviser, light-touch",
    description: "Two or three short conversations to sense-check public-facing language and ensure the work stays rigorous without becoming didactic.",
  },
  {
    id: 3,
    title: "Sound design or composition",
    description: "Sound support for a small suite of loop-capable film studies. Minimal, precise, and designed for gallery-scale playback.",
  },
  {
    id: 4,
    title: "Astrophysical data thread partner",
    description: "A collaborator interested in the visual communication of stellar catalogues and related datasets, including HR diagram and density map studies.",
  },
  {
    id: 5,
    title: "HPC and compute partners",
    description: "Partners interested in supporting high-resolution simulation and rendering work that benefits from serious compute resources and careful public presentation.",
  },
];

const futureThreads = [
  "Gravitational wave visual studies and sonification-led experiments",
  "Animated HR diagrams and stellar evolution visualisations",
  "Neutrino event streams and detector map studies",
  "Large-scale dynamical systems at exhibition resolution",
  "Cellular automata and reaction-diffusion as moving surfaces",
  "Complex function fields, domain colouring, and transformation maps",
  "Three-body and N-body dynamics as cinematic studies",
  "Symmetry projections and group-structure visual research",
  "Climate and earth systems visualisations built from open datasets",
  "Microscopic and biological pattern formation, where the science partner leads",
  "Instrument data as image, translating measurement into form",
  "Supercomputing residencies and research-centre partnerships",
];

const proposalChecklist = [
  "What system or dataset are you thinking about, and what is the source",
  "Who is involved on your side, and what role do you want Elxsis to play",
  "What outputs you have in mind, for example film loops, installation, web, print",
  "Where the work will be presented, and who the audience is",
  "Your rough timeline, constraints, and any available budget or resources",
];

export default function CollaboratePage() {
  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      {/* Intro */}
      <header className="max-w-3xl space-y-4 mb-10 lg:mb-14">
        <PageTitle>Collaborate</PageTitle>
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          Elxsis is open to collaborations with researchers, institutions,
          venues, and technical partners. The studio works best where there is a
          specific system, dataset, or research question, plus a clear setting
          for the work to live, whether that is online, on a large screen, or in
          an exhibition context.
        </p>
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          If you are interested in publishing experiments digitally, many Elxsis
          threads also feed into{" "}
          <a
            href="https://mxwll.io"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            MXWLL
          </a>
          , but Elxsis is equally interested in screenings, installations, and
          institution-led projects.
        </p>
        <p className="text-sm text-neutral-600">
          For general enquiries, see{" "}
          <Link href="/contact" className="underline-offset-4 hover:underline">
            Contact
          </Link>
          .
        </p>
      </header>

      {/* Current invitations */}
      <section className="mb-12 lg:mb-16">
        <SectionTitle className="mb-6">Current invitations</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentInvitations.map((inv) => (
            <div
              key={inv.id}
              className="border border-neutral-200 p-4 md:p-6 hover:bg-neutral-50 transition-colors"
            >
              <h3 className="font-[700] text-neutral-900 tracking-[-0.025em]">
                {inv.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{inv.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future threads */}
      <section className="mb-12 lg:mb-16">
        <SectionTitle className="mb-6">Future threads</SectionTitle>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm text-neutral-700">
          {futureThreads.map((thread, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-neutral-400 mt-0.5">•</span>
              <span>{thread}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How to propose a collaboration */}
      <section>
        <SectionTitle className="mb-6">How to propose a collaboration</SectionTitle>
        <ul className="space-y-3 max-w-xl">
          {proposalChecklist.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
              <span className="text-neutral-400 mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-neutral-600">
          Send proposals to{" "}
          <a
            href="mailto:studio@elxsis.com"
            className="underline-offset-4 hover:underline"
          >
            studio@elxsis.com
          </a>
        </p>
      </section>
    </main>
  );
}
