// components/SiteFooter.tsx
import Link from "next/link";
import { ElxsisLogo } from "@/components/icons/ElxsisLogo";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-900 text-white mt-10 lg:mt-16">
      {/* Main footer content */}
      <div className="w-full px-4 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo + descriptor: 3 columns on desktop */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <ElxsisLogo className="block h-14 md:h-30 w-auto text-white" />
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
              Elxsis is a computational art and research studio working across
              dynamical systems, astrophysical data, quantum structures, and
              large-scale visual experiments.
            </p>
          </div>

          {/* Spacer: 1 empty column on desktop */}
          <div className="hidden md:block md:col-span-1" />

          {/* Footer nav: 4 columns */}
          <div className="md:col-span-4 flex flex-col gap-2 md:items-center">
            <nav className="mt-1">
              <ul className="space-y-1 text-sm md:text-base">
                <li>
                  <Link
                    href="/projects"
                    className="font-[700] tracking-[-0.025em] hover:underline underline-offset-4"
                  >
                    Projects.
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experiments"
                    className="font-[700] tracking-[-0.025em] hover:underline underline-offset-4"
                  >
                    Experiments.
                  </Link>
                </li>
                <li>
                  <Link
                    href="/process"
                    className="font-[700] tracking-[-0.025em] hover:underline underline-offset-4"
                  >
                    Process.
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="font-[700] tracking-[-0.025em] hover:underline underline-offset-4"
                  >
                    About.
                  </Link>
                </li>
                <li>
                  <Link
                    href="/available-works"
                    className="font-[700] tracking-[-0.025em] hover:underline underline-offset-4"
                  >
                    Works.
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collaborate"
                    className="font-[700] tracking-[-0.025em] hover:underline underline-offset-4"
                  >
                    Collaborate.
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-[700] tracking-[-0.025em] hover:underline underline-offset-4"
                  >
                    Contact.
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact + meta: 4 columns, right-aligned */}
          <div className="md:col-span-4 flex flex-col items-end gap-3 text-right">
            <div className="flex flex-col items-end gap-1">
              <a
                href="https://instagram.com/elx_sis"
                target="_blank"
                rel="noreferrer"
                className="text-sm md:text-base font-[600] tracking-[-0.02em] underline-offset-4 hover:underline"
              >
                Instagram: <span className="font-[400]">@elx_sis</span>
              </a>

              <a
                href="mailto:studio@elxsis.com"
                className="text-sm md:text-base font-[600] tracking-[-0.02em] underline-offset-4 hover:underline"
              >
                Email: <span className="font-[400]">studio@elxsis.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip: copyright + legal */}
      <div className="border-t border-neutral-900">
        <div className="w-full px-4 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-2 text-[11px] md:text-xs text-neutral-400">
          <span>© {year} Elxsis / Simon Tyler</span>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="hover:text-neutral-100 hover:underline underline-offset-4"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-neutral-100 hover:underline underline-offset-4"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}