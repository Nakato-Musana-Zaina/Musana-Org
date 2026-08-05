import Image from "next/image";
import Link from "next/link";
import Sunburst from "./Sunburst";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <Sunburst
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 text-sun/10"
        spin
      />

      <div className="relative border-b border-cream/10">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-br from-leaf to-leaf-deep p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="font-display text-2xl font-semibold text-cream sm:text-3xl">
                Your gift is light for someone in the dark.
              </p>
              <p className="mt-2 max-w-xl font-body text-sm text-cream/85 sm:text-base">
                UGX 50,000 feeds an orphan for two weeks. UGX 350,000 trains a
                widow on a sewing machine. UGX 2,000,000 sinks a borehole a
                village will use for a generation.
              </p>
            </div>
            <Link
              href="/contact#donate"
              className="shrink-0 rounded-full bg-sun px-8 py-3.5 text-center font-body text-sm font-semibold text-ink transition hover:bg-cream"
            >
              Give Today
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-3">
              <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-sun/40">
                <Image
                  src="/images/logo.jpg"
                  alt="Musana logo"
                  fill
                  className="scale-[1.35] object-cover"
                />
              </span>
              <span className="font-display text-lg font-semibold text-sun">
                Musana
              </span>
            </div>
            <p className="mt-4 font-body text-sm leading-relaxed text-cream/60">
              Think of giving not as a duty, but as a privilege.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream/45">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-cream/75">
              <li><Link href="/about" className="transition hover:text-sun">Who We Are</Link></li>
              <li><Link href="/programs" className="transition hover:text-sun">Our Work</Link></li>
              <li><Link href="/impact" className="transition hover:text-sun">Impact & Expansion</Link></li>
              <li><Link href="/contact" className="transition hover:text-sun">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream/45">
              Get Involved
            </p>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-cream/75">
              <li><Link href="/contact#donate" className="transition hover:text-sun">Donate</Link></li>
              <li><Link href="/contact#volunteer" className="transition hover:text-sun">Volunteer</Link></li>
              <li><Link href="/contact#partner" className="transition hover:text-sun">Partner With Us</Link></li>
              <li><Link href="/contact#sponsor" className="transition hover:text-sun">Sponsor an Orphan</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream/45">
              Reach Us
            </p>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-cream/75">
              <li>Mbale, Eastern Uganda</li>
              <li>
                <a href="mailto:info@musanaorg.org" className="transition hover:text-sun">
                  info@musanaorg.org
                </a>
              </li>
              <li>
                <a href="tel:+256700000000" className="transition hover:text-sun">
                  +256 700 000 000
                </a>
              </li>
              <li className="flex gap-3 pt-1 text-cream/50">
                <a href="#" aria-label="Musana on Facebook" className="transition hover:text-sun">Facebook</a>
                <a href="#" aria-label="Musana on Instagram" className="transition hover:text-sun">Instagram</a>
                <a href="#" aria-label="Musana on X" className="transition hover:text-sun">X</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Musana, The Humanitarian Organisation. All rights reserved.</p>
          <p className="font-body italic">&ldquo;Think of giving not as a duty, but as a privilege.&rdquo;</p>
        </div>
      </div>
    </footer>
  );
}
