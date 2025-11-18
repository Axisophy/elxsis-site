import Link from "next/link";
import { ElxsisLogo } from "@/components/icons/ElxsisLogo";

const descriptor =
  "Elxsis works at the intersection of computation and scientific imagination, developing visual research across dynamical systems, astrophysical data, quantum structures, and emergent mathematical forms. Our work combines scientific modelling with high-resolution computational design to reveal new aesthetic and structural possibilities.";

const statusLine = "Running a 6-seed, 945M-step attractor test.";

export default function SiteHeader() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      {/* Top: 12-column grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-16 min-h-[220px] lg:min-h-[260px] grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8">
        {/* Logo + micro-title (cols 1–3) */}
        <div className="md:col-span-3 flex flex-col gap-2 font-body">
          <Link href="/" className="inline-flex items-center gap-2">
            <ElxsisLogo className="h-7 md:h-9 w-auto text-neutral-900" />
            <span className="sr-only">Elxsis</span>
          </Link>
          <span className="text-xs text-neutral-500">
            computational art &amp; research studio
          </span>
        </div>

        {/* Descriptor (cols 4–8) */}
        <div className="md:col-span-5 text-sm md:text-base leading-relaxed text-neutral-800 font-display">
          <p>{descriptor}</p>
        </div>

        {/* Meta: instagram, email, status (cols 9–12) */}
        <div className="md:col-span-4 flex flex-col gap-3 text-xs md:text-sm text-neutral-900 md:items-end font-body">
          <div className="flex flex-col md:items-end">
            <span className="uppercase tracking-[0.18em] text-[0.65rem] text-neutral-400">
              instagram
            </span>
            <a
              href="https://instagram.com/elxsis"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              @elxsis
            </a>
          </div>

          <div className="flex flex-col md:items-end">
            <span className="uppercase tracking-[0.18em] text-[0.65rem] text-neutral-400">
              email
            </span>
            <a
              href="mailto:hello@elxsis.studio"
              className="hover:text-pink-500 transition-colors"
            >
              hello@elxsis.studio
            </a>
          </div>

          <div className="flex flex-col md:items-end">
            <span className="uppercase tracking-[0.18em] text-[0.65rem] text-neutral-400">
              status
            </span>
            <span className="text-neutral-800">{statusLine}</span>
          </div>
        </div>
      </div>

      {/* Bottom: primary nav row */}
      <nav className="border-t border-neutral-200 bg-white font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 text-xs md:text-sm">
          <ul className="flex flex-wrap gap-4 md:gap-8 text-neutral-800">
            <li>
              <Link
                href="/experiments"
                className="hover:text-pink-500 transition-colors"
              >
                Experiments
              </Link>
            </li>
            <li>
              <Link
                href="/process"
                className="hover:text-pink-500 transition-colors"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-pink-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/available-works"
                className="hover:text-pink-500 transition-colors"
              >
                Available Works
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-pink-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}