// app/collaborate/page.tsx
import Link from "next/link";
import { PageTitle, SectionTitle } from "@/components/typography";

// TODO: Replace with actual invitation data
const currentInvitations = [
  { id: 1, title: "Placeholder invitation 1", description: "TODO: Add invitation details" },
  { id: 2, title: "Placeholder invitation 2", description: "TODO: Add invitation details" },
  { id: 3, title: "Placeholder invitation 3", description: "TODO: Add invitation details" },
  { id: 4, title: "Placeholder invitation 4", description: "TODO: Add invitation details" },
  { id: 5, title: "Placeholder invitation 5", description: "TODO: Add invitation details" },
];

// TODO: Replace with actual future threads
const futureThreads = [
  "Placeholder thread 1",
  "Placeholder thread 2",
  "Placeholder thread 3",
  "Placeholder thread 4",
  "Placeholder thread 5",
  "Placeholder thread 6",
  "Placeholder thread 7",
  "Placeholder thread 8",
  "Placeholder thread 9",
  "Placeholder thread 10",
  "Placeholder thread 11",
  "Placeholder thread 12",
];

// TODO: Replace with actual checklist items
const proposalChecklist = [
  "Placeholder checklist item 1",
  "Placeholder checklist item 2",
  "Placeholder checklist item 3",
  "Placeholder checklist item 4",
  "Placeholder checklist item 5",
];

export default function CollaboratePage() {
  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      {/* Intro */}
      <header className="max-w-3xl space-y-4 mb-10 lg:mb-14">
        <PageTitle>Collaborate</PageTitle>
        {/* TODO: Replace with final intro copy */}
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          Placeholder intro paragraph. Elxsis is open to collaborations with
          scientists, mathematicians, institutions, and creative practitioners.
        </p>
        <p className="text-sm text-neutral-600">
          For general enquiries, see{" "}
          <Link href="/contact" className="underline underline-offset-4">
            Contact
          </Link>
          .
        </p>
      </header>

      {/* Current invitations */}
      <section className="mb-12 lg:mb-16">
        <SectionTitle className="mb-6">Current invitations</SectionTitle>
        {/* TODO: Replace with actual invitation cards with full details */}
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
        {/* TODO: Replace with actual future thread descriptions */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm text-neutral-700">
          {futureThreads.map((thread, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-neutral-400 mt-0.5">–</span>
              <span>{thread}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How to propose a collaboration */}
      <section>
        <SectionTitle className="mb-6">How to propose a collaboration</SectionTitle>
        {/* TODO: Replace with actual checklist/guidelines */}
        <ul className="space-y-3 max-w-xl">
          {proposalChecklist.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
              <span className="flex-shrink-0 w-5 h-5 border border-neutral-300 rounded-sm mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-neutral-600">
          {/* TODO: Update email or form link */}
          Send proposals to{" "}
          <a
            href="mailto:studio@elxsis.com"
            className="underline underline-offset-4"
          >
            studio@elxsis.com
          </a>
        </p>
      </section>
    </main>
  );
}
