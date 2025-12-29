import Link from "next/link";
import { PageTitle } from "@/components/typography";

export default function ContactPage() {
  return (
    <main className="mx-auto px-4 lg:px-8 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4 mb-10 lg:mb-14">
        <PageTitle>Contact</PageTitle>
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          For collaboration opportunities, current invitations, and how to
          propose a project, see the{" "}
          <Link href="/collaborate" className="underline-offset-4 hover:underline">
            Collaborate
          </Link>{" "}
          page.
        </p>
        <p className="text-[15px] md:text-[18px] leading-relaxed text-neutral-900">
          For commissions, institutional projects, or general enquiries about
          existing work, please email{" "}
          <a
            href="mailto:studio@elxsis.com"
            className="underline-offset-4 hover:underline"
          >
            studio@elxsis.com
          </a>{" "}
          with as much context as you like – including timelines, formats, and
          any relevant technical or spatial constraints. You can also follow
          in-progress experiments and studio notes via{" "}
          <a
            href="https://instagram.com/elx_sis"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            @elx_sis
          </a>{" "}
          on Instagram.
        </p>
      </header>
    </main>
  );
}