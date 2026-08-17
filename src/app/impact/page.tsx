import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Sunburst from "@/components/Sunburst";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact & Expansion | Musana",
  description:
    "Musana's reach and impact across Eastern Uganda today, and our plan to expand orphan care, women's empowerment and community development into Northern and Western Uganda.",
};

const DISTRICTS = [
  "Jinja",
  "Iganga",
  "Luuka",
  "Mayuge",
  "Bugiri",
];

const IMPACT_NUMBERS = [
  { value: "180,000+", label: "Orphaned children cared for" },
  { value: "860+", label: "Women trained in trades" },
  { value: "4,680", label: "Boreholes built or repaired" },
  { value: "18,000+", label: "Meals served" },
  { value: "28", label: "Districts reached" },
  { value: "140+", label: "Families given safe shelter" },
];

const EXPANSION = [
  {
    phase: "Phase 1",
    region: "Eastern Uganda",
    status: "Active",
    body: "Full orphan care, women's empowerment and community development programmes running across 28 districts.",
  },
  {
    phase: "Phase 2",
    region: "Northern Uganda",
    status: "Planned",
    body: "Scoping partner sites to open our first Northern centre, prioritising orphan care and clean water in post-conflict areas.",
  },
  {
    phase: "Phase 3",
    region: "Western Uganda",
    status: "Planned",
    body: "Building local partnerships to serve refugee-hosting districts, addressing economic vulnerability and water access.",
  },
];

export default function Impact() {
  return (
    <>
      {/* =========================================================
          HERO - RESPONSIVE & LIGHTER
      ========================================================== */}
      <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-ink text-cream lg:min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/mho zakah.jpeg"
            alt="Children served through Musana's community feeding programme across Eastern Uganda"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(253,224,71,0.12)_0%,transparent_60%)]" />
        </div>

        <Sunburst 
          className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 text-sun/15 md:h-96 md:w-96 animate-[spin_60s_linear_infinite]" 
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-16 sm:px-6 lg:px-8 lg:py-0">
          <div className="max-w-3xl">
            <Reveal delay={100}>
              <h1 className="mt-2 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-7xl">
                What your support has{" "}
                <span className="relative inline-block text-sun drop-shadow-md">
                  already built.
                  <svg className="absolute -bottom-1 left-0 w-full text-sun/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 max-w-2xl text-balance font-body text-base leading-relaxed text-cream/90 drop-shadow sm:text-lg lg:text-xl">
                Every number below represents a child fed, a woman empowered, or a family given a second chance. This is the tangible impact of your faith in action across 28 districts of Eastern Uganda.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact#donate"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-sun px-6 py-3.5 text-center font-body text-sm font-bold text-ink shadow-lg shadow-sun/20 transition-all duration-300 hover:scale-[1.03] hover:bg-cream hover:shadow-xl sm:w-auto sm:px-8 sm:text-base"
                >
                  Multiply This Impact
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="#expansion"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-6 py-3.5 text-center font-body text-sm font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:border-sun/60 hover:bg-cream/15 hover:text-sun sm:w-auto sm:px-8 sm:text-base"
                >
                  See Our Expansion
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT NUMBERS - RESPONSIVE GRID
      ========================================================== */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">By The Numbers</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Measurable change, <span className="text-leaf-deep">lives transformed.</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-6">
              {IMPACT_NUMBERS.map((n) => (
                <div 
                  key={n.label} 
                  className="group relative overflow-hidden rounded-2xl border border-charcoal/10 bg-white p-4 transition-all duration-300 hover:border-leaf/30 hover:shadow-lg sm:p-5"
                >
                  <div className="absolute left-0 top-0 h-1 w-6 bg-leaf-deep transition-all duration-300 group-hover:w-full sm:w-8" />
                  <p className="mt-3 font-display text-xl font-bold text-charcoal sm:text-2xl lg:text-3xl">
                    {n.value}
                  </p>
                  <p className="mt-2 font-body text-[11px] leading-snug text-charcoal/65 sm:text-xs">
                    {n.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          DISTRICT REACH & TESTIMONIAL
      ========================================================== */}
      <section className="bg-leaf-pale py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">Current Reach</p>
              <h2 className="mt-3 text-balance font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                28 Districts across Eastern Uganda, <span className="text-leaf-deep">and growing.</span>
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
                We started with one community. Word travelled, local leaders reached out, and our programmes followed the need. Today Musana runs active care, training, and water projects in the districts below.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {DISTRICTS.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-leaf-deep/20 bg-white/80 px-3.5 py-1.5 font-body text-xs font-medium text-leaf-deep shadow-sm transition-all hover:bg-white hover:shadow-md sm:px-5 sm:py-2 sm:text-sm"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <figure className="relative rounded-2xl bg-ink p-6 text-cream shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">
                <svg className="absolute -top-4 left-6 h-10 w-10 text-sun/30 sm:-top-5 sm:left-8 sm:h-14 sm:w-14" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 2 11.712 2 16.5c0 4.592 3.144 7.5 7 7.5 3.576 0 6.5-2.924 6.5-6.5 0-3.576-2.924-6.5-6.5-6.5-.712 0-1.4.104-2.04.296C8.136 8.76 10.328 6.24 13.5 4.5L9.352 4zm16 0c-4.896 3.456-7.352 7.712-7.352 12.5 0 4.592 3.144 7.5 7 7.5 3.576 0 6.5-2.924 6.5-6.5 0-3.576-2.924-6.5-6.5-6.5-.712 0-1.4.104-2.04.296C24.136 8.76 26.328 6.24 29.5 4.5L25.352 4z" />
                </svg>
                
                <blockquote className="relative z-10 font-display text-lg italic leading-snug text-cream sm:text-xl lg:text-2xl">
                  &ldquo;When the well came to our village, my daughters stopped missing school to fetch water. That changed everything for us.&rdquo;
                </blockquote>
                
                <figcaption className="mt-6 flex items-center gap-3 font-body text-xs text-cream/60 sm:mt-8 sm:text-sm">
                  <div className="h-px flex-1 bg-cream/20" />
                  <span className="whitespace-nowrap">A mother in Mayuge District</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPANSION ROADMAP
      ========================================================== */}
      <section id="expansion" className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">Looking Ahead</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              Carrying this light <span className="text-leaf-deep">north and west.</span>
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
              Eastern Uganda is where Musana started, but the need it answers is not unique to this region. We are preparing to extend our programmes into Northern and Western Uganda.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:gap-8 lg:grid-cols-3">
            {EXPANSION.map((e, index) => {
              const borderColor = e.status === "Active" ? "border-leaf" : "border-sun";
              const badgeBg = e.status === "Active" ? "bg-leaf/15 text-leaf-deep" : "bg-sun/15 text-yellow-700";
              
              return (
                <Reveal key={e.region} delay={index * 100}>
                  <div className={`group flex h-full flex-col rounded-2xl border-l-4 ${borderColor} bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:rounded-3xl sm:p-8`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal/40 sm:text-xs">
                        {e.phase}
                      </span>
                      <span className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide ${badgeBg} sm:px-3`}>
                        {e.status}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-charcoal sm:text-2xl">
                      {e.region}
                    </h3>
                    <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-charcoal/70">
                      {e.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Final Expansion CTA */}
          <Reveal delay={300} className="relative mt-12 overflow-hidden rounded-2xl bg-ink p-8 text-center text-cream shadow-2xl sm:mt-16 sm:rounded-3xl sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sun/10 blur-3xl sm:h-64 sm:w-64" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-leaf/10 blur-3xl sm:h-64 sm:w-64" />
            
            <div className="relative z-10 mx-auto max-w-2xl">
              <h3 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Expansion moves at the speed of <span className="text-sun">funding.</span>
              </h3>
              <p className="mt-4 font-body text-sm text-cream/80 sm:text-base lg:text-lg">
                Every partner and donor who joins Musana today shortens the distance between a child in Northern or Western Uganda and the same light we&apos;ve already brought to the East.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact#donate"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-sun px-6 py-3.5 font-body text-sm font-bold text-ink transition-all duration-300 hover:scale-[1.03] hover:bg-cream hover:shadow-xl sm:w-auto sm:px-8 sm:text-base"
                >
                  Fund The Next Region
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="/contact#partner"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-6 py-3.5 font-body text-sm font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:border-sun/50 hover:bg-cream/10 hover:text-sun sm:w-auto sm:px-8 sm:text-base"
                >
                  Become a Partner
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}