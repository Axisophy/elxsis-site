import Link from "next/link";
import { ElxsisLogo } from "@/components/icons/ElxsisLogo";

const descriptor =
  "Elxsis is a computational art and research studio producing cross-disciplinary work where science and mathematics meet high-resolution visual experimentation.";

const statusLine =
  "Running a 6-seed, 945M-step attractor test.";

export default function SiteHeader() {
  return (
    <header className="w-full border-b border-white/10 bg-neutral-950">
      {/* Top: 12-column grid with logo, descriptor, meta */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8 lg:py-10 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6">
        {/* Logo + micro-title (cols 1–3) */}
        <div className="md:col-span-3 flex flex-col gap-1">
        <Link href="/" className="inline-flex items-center gap-2">
        <ElxsisLogo className="h-7 md:h-9 w-auto" />
        <span className="sr-only">Elxsis</span>
        </Link>
          <span className="text-xs text-neutral-400">
            computational art &amp; research studio
          </span>
        </div>

        {/* Descriptor (cols 4–8) */}
        <div className="md:col-span-5 text-sm md:text-base leading-relaxed text-neutral-200">
          <p>{descriptor}</p>
        </div>

        {/* Meta: instagram, email, status (cols 9–12) */}
        <div className="md:col-span-4 flex flex-col gap-3 text-xs md:text-sm text-neutral-200 md:items-end">
          <div className="flex flex-col md:items-end">
            <span className="uppercase tracking-[0.18em] text-[0.65rem] text-neutral-500">
              instagram
            </span>
            <a
              href="https://instagram.com/elxsis"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              @elxsis
            </a>
          </div>

          <div className="flex flex-col md:items-end">
            <span className="uppercase tracking-[0.18em] text-[0.65rem] text-neutral-500">
              email
            </span>
            <a
              href="mailto:hello@elxsis.studio"
              className="hover:text-pink-400 transition-colors"
            >
              hello@elxsis.studio
            </a>
          </div>

          <div className="flex flex-col md:items-end">
            <span className="uppercase tracking-[0.18em] text-[0.65rem] text-neutral-500">
              status
            </span>
            <span className="text-neutral-300">{statusLine}</span>
          </div>
        </div>
      </div>

      {/* Bottom: primary nav row */}
      <nav className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-3 text-xs md:text-sm">
          <ul className="flex flex-wrap gap-4 md:gap-8">
            <li>
              <Link href="/experiments" className="hover:text-pink-400 transition-colors">
                Experiments
              </Link>
            </li>
            <li>
              <Link href="/process" className="hover:text-pink-400 transition-colors">
                Process
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/available-works"
                className="hover:text-pink-400 transition-colors"
              >
                Available Works
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}