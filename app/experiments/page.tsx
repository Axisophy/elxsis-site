// app/experiments/page.tsx
import type { Metadata } from "next";
import ExperimentsClient from "@/components/experiments/ExperimentsClient";
import { buildSlugMap } from "@/components/experiments/experimentsData";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "A working catalogue of ongoing and completed experiments — from dynamical systems and attractors to astrophysical data, quantum structures, and black hole geodesics.",
  openGraph: {
    title: "Experiments | Elxsis",
    description:
      "Ongoing and completed experiments across dynamical systems, astrophysics, and quantum structures.",
  },
};

export default async function ExperimentsPage({
  searchParams,
}: {
  searchParams: Promise<{ open?: string }>;
}) {
  const params = await searchParams;
  const open = params.open ?? null;

  // Validate the open param against slugs and aliases
  const slugMap = buildSlugMap();
  const validatedSlug = open ? slugMap.get(open) ?? null : null;

  return <ExperimentsClient initialOpenSlug={validatedSlug} />;
}
