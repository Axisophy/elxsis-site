// app/experiments/page.tsx
import ExperimentsClient from "@/components/experiments/ExperimentsClient";
import { buildSlugMap } from "@/components/experiments/experimentsData";

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
