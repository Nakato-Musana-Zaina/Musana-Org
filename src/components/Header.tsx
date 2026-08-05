"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/about", label: "Who We Are" },
  { href: "/programs", label: "Our Work" },
  { href: "/impact", label: "Impact & Expansion" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative block h-11 w-11 overflow-hidden rounded-full ring-1 ring-sun/40">
            <Image
              src="/images/logo.jpg"
              alt="Musana, The Humanitarian Organisation"
              fill
              className="scale-[1.35] object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-sun">
              Musana
            </span>
            <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-cream/60 sm:block">
              The Humanitarian Organisation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm text-cream/80 transition hover:text-sun"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact#donate"
            className="rounded-full bg-sun px-5 py-2.5 font-body text-sm font-semibold text-ink transition hover:bg-leaf hover:text-cream"
          >
            Donate Now
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-sun transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-sun transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-sun transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-body text-base text-cream/85 transition hover:bg-cream/5 hover:text-sun"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact#donate"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-sun px-5 py-3 text-center font-body text-sm font-semibold text-ink"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
