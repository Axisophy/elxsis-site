"use client";

import { useState } from "react";
import Link from "next/link";
import { ElxsisLogo } from "@/components/icons/ElxsisLogo";

const descriptor =
  "Elxsis works at the intersection of computation and scientific imagination, developing visual research across dynamical systems, astrophysical data, quantum structures, and emergent mathematical forms. Our work combines scientific modelling with high-resolution computational design to reveal new aesthetic and structural possibilities.";

const statusLine = "Running a 6-seed, 945M-step attractor test.";

const navItems = [
  { href: "/experiments", label: "Experiments." },
  { href: "/process", label: "Process." },
  { href: "/about", label: "About." },
  { href: "/available-works", label: "Available Works." },
  { href: "/contact", label: "Contact." },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* Top: 12-column grid */}
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8 py-12 lg:py-16 min-h-[220px] lg:min-h-[260px] grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8">
        {/* Logo + micro-title (cols 1–3) */}
        <div className="md:col-span-3 md:col-start-1 flex flex-col gap-2">
          <div className="flex items-start justify-between md:block">
            <Link href="/" className="inline-flex items-center gap-2">
              <ElxsisLogo className="h-7 md:h-9 w-auto text-neutral-900" />
              <span className="sr-only">Elxsis</span>
            </Link>

            {/* Mobile menu button (top-right in logo row) */}
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="md:hidden ml-4 inline-flex items-center justify-center rounded-full border border-neutral-900 px-2.5 py-2 text-neutral-900"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span className="flex flex-col gap-1">
                <span className="block h-[2px] w-4 bg-neutral-900" />
                <span className="block h-[2px] w-4 bg-neutral-900" />
              </span>
            </button>
          </div>

          <span className="text-s text-neutral-900 font-[500]">
            computational art &amp; research studio
          </span>
        </div>

        {/* Descriptor (cols 4–8) */}
        <div className="md:col-span-3 md:col-start-4 text-[15px] md:text-[19px] lg:text-[20px] leading-relaxed md:leading-snug text-neutral-800 font-normal">
        <p>{descriptor}</p>
        </div>

        {/* Nav + meta: social + contact + status (cols 9–12) */}
        <div className="md:col-span-6 md:col-start-7 flex flex-col gap-3 md:gap-4 md:items-end text-xs md:text-sm text-neutral-900">          {/* Desktop nav in top-right */}
          <nav className="hidden md:block">
            <ul className="flex flex-wrap justify-end gap-4 text-neutral-900">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group text-xs md:text-[25px] font-[700] leading-none tracking-normal md:tracking-[-0.025em]"
                  >
                    <span className="relative inline-block">
                      <span>{item.label}</span>
                      <span
                        className="block h-[2px] bg-neutral-900 mt-1
                                   origin-left scale-x-0 translate-x-0
                                   transition-transform duration-200 ease-out
                                   group-hover:scale-x-100 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Buttons row (email + instagram) */}
          <div className="flex flex-col gap-2 md:gap-2 md:items-end">
            <a
              href="mailto:studio@elxsis.com"
              className="inline-flex items-center rounded-full border border-neutral-900 px-3 py-1.5
                         text-[11px] md:text-xs font-[600] uppercase tracking-[0.08em]
                         text-neutral-900 bg-white
                         transition-colors duration-200
                         hover:bg-pink-500 hover:border-pink-600 hover:text-white"
            >
              email.{" "}
              <span className="ml-1 normal-case font-[400]">
                studio@elxsis.com
              </span>
            </a>

            <a
              href="https://instagram.com/elx_sis"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-900 px-3 py-1.5
                         text-[11px] md:text-xs font-[600] uppercase tracking-[0.08em]
                         text-neutral-900 bg-white
                         transition-colors duration-200
                         hover:bg-pink-500 hover:border-pink-600 hover:text-white"
            >
              instagram:{" "}
              <span className="ml-1 normal-case font-[400]">@elx_sis</span>
            </a>
          </div>

          {/* Status label + line */}
          <div className="flex flex-col md:items-end gap-1">
            <span className="uppercase tracking-[0.18em] text-[0.65rem] text-neutral-900 font-[600]">
              status
            </span>
            <span className="text-neutral-900 text-xs md:text-sm font-[400]">
              {statusLine}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-[1440px] px-4 lg:px-8 py-3">
            <ul className="flex flex-col gap-1 text-neutral-900">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full py-2 text-sm font-[600] uppercase tracking-[0.12em]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}