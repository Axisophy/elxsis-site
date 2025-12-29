// app/projects/stellar-cartographies/page.tsx
import type { Metadata } from "next";
import ProjectTemplate from "@/components/ProjectTemplate";
import { projects } from "../projectsData";

export const metadata: Metadata = {
  title: "Stellar Cartographies",
  description:
    "Studies built from astrophysical catalogues like Gaia, focused on how large datasets can become readable, designed images — treating scientific plots as cartography.",
  openGraph: {
    title: "Stellar Cartographies | Elxsis",
    description:
      "Studies built from astrophysical catalogues, treating scientific plots as cartography.",
    images: ["/experiments/gaia-hr-maps/gaia_hr_setC_full_hex_full_hex_wide_2400x1350.webp"],
  },
};

const project = projects.find((p) => p.slug === "stellar-cartographies")!;

export default function StellarCartographiesPage() {
  return <ProjectTemplate project={project} />;
}
