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
    <header className="w-full bg-white relative">
      {/* Top: 12-column grid (normal header) */}
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
              className="md:hidden ml-4 inline-flex items-center justify-center rounded-full border border-neutral-900 px-2.5 py-2 text-neutral-900 bg-white"
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

        {/* Descriptor (cols 4–6) */}
        <div className="md:col-span-3 md:col-start-4 text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed md:leading-snug text-neutral-800 font-normal">
          <p>{descriptor}</p>
        </div>

        {/* Nav + contact (cols 7–12) */}
        <div className="md:col-span-6 md:col-start-7 flex flex-col gap-3 md:gap-4 md:items-end text-xs md:text-sm text-neutral-900">
          {/* Desktop nav in top-right */}
          <nav className="hidden md:block">
            <ul className="flex flex-wrap justify-end gap-4 text-neutral-900">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group text-[14px] sm:text-[18px] md:text-[22px] lg:text-[25px] font-[700] leading-none tracking-[-0.03em]"
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

          {/* Email + Instagram as smaller text links */}
          <div className="hidden md:flex flex-col gap-1 md:gap-1 md:items-end text-right">
          <a
              href="mailto:studio@elxsis.com"
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-[600] tracking-[-0.02em] underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900"
            >
              Email:{" "}
              <span className="font-[400]">studio@elxsis.com</span>
            </a>

            <a
              href="https://instagram.com/elx_sis"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-[600] tracking-[-0.02em] underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900"
            >
              Instagram:{" "}
              <span className="font-[400]">@elx_sis</span>
            </a>
          </div>
        </div>
      </div>

      {/* Status bar: full-width row below header */}
      <div className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-[1440px] px-4 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="uppercase tracking-[0.18em] text-[0.65rem] md:text-xs font-[600]">
            status
          </span>
          <span className="text-[11px] md:text-sm font-[400]">
            {statusLine}
          </span>
        </div>
      </div>

      {/* Mobile full-width overlay menu that replaces the header area */}
      {mobileOpen && (
        <div className="absolute inset-0 bg-neutral-900 text-white md:hidden">
          <div className="mx-auto max-w-[1440px] h-full px-4 lg:px-8 py-6 relative">
            {/* Top: logo left, menu + contact right */}
            <div className="flex items-start justify-between gap-6">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <ElxsisLogo className="h-7 w-auto text-white" />
              </Link>

              <div className="flex flex-col items-end text-right gap-3">
                {/* Menu items */}
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-[16px] sm:text-[18px] font-[700] tracking-[-0.03em] leading-tight underline underline-offset-4"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Instagram + email directly under menu, smaller */}
                <div className="flex flex-col items-end gap-1">
                  <a
                    href="https://instagram.com/elx_sis"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12px] sm:text-[13px] font-[600] tracking-[-0.02em] underline underline-offset-4 decoration-neutral-500 hover:decoration-white"
                  >
                    Instagram:{" "}
                    <span className="font-[400]">@elx_sis</span>
                  </a>

                  <a
                    href="mailto:studio@elxsis.com"
                    className="text-[12px] sm:text-[13px] font-[600] tracking-[-0.02em] underline underline-offset-4 decoration-neutral-500 hover:decoration-white"
                  >
                    Email:{" "}
                    <span className="font-[400]">studio@elxsis.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Close arrow bottom-right */}
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="absolute bottom-4 right-4 inline-flex items-center justify-center"
            >
              <span className="inline-block text-2xl leading-none">↑</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}