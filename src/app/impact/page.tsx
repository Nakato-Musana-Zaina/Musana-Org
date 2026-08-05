import Link from "next/link";
import Reveal from "@/components/Reveal";
import Sunburst from "@/components/Sunburst";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact & Expansion | Musana",
  description:
    "Musana's reach and impact across Eastern Uganda today, and our plan to expand orphan care, women&apos;s empowerment and community development into Northern and Western Uganda.",
};

const DISTRICTS = ["Mbale", "Budaka", "Butaleja", "Bugiri", "Tororo", "Busia", "Bukedea", "Kumi", "Soroti"];

const IMPACT_NUMBERS = [
  { value: "1,240+", label: "Orphaned children cared for since founding" },
  { value: "860+", label: "Women trained and equipped with a trade" },
  { value: "32", label: "Boreholes and water points built or repaired" },
  { value: "18,000+", label: "Meals served through feeding programmes" },
  { value: "9", label: "Districts reached across Eastern Uganda" },
  { value: "140+", label: "Families resettled into safe shelter" },
];

const EXPANSION = [
  {
    phase: "Now",
    region: "Eastern Uganda",
    status: "Active",
    body: "Full orphan care, women&apos;s empowerment and community development programmes running across nine districts, including Mbale, Budaka and Bugiri.",
  },
  {
    phase: "Next",
    region: "Northern Uganda",
    status: "Planned",
    body: "Communities here still carry the weight of decades of displacement and conflict. We are scoping partner sites in the sub-region to open our first Northern centre, prioritising orphan care and clean water.",
  },
  {
    phase: "Following",
    region: "Western Uganda",
    status: "Planned",
    body: "Home to some of Uganda's largest refugee-hosting districts, where women&apos;s economic vulnerability and water access mirror what first brought us to the East. We&apos;re building local partnerships ahead of launch.",
  },
];

export default function Impact() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-cream lg:py-28">
        <Sunburst className="pointer-events-none absolute -left-24 -top-16 h-96 w-96 text-sun/10" spin />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sun">Impact & Reach</p>
          <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-tight sm:text-6xl">
            What your support has already done
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            Every number below is a child, a woman, or a family. This is
            what has been made possible so far, across nine districts of
            Eastern Uganda.
          </p>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {IMPACT_NUMBERS.map((n) => (
              <div key={n.label} className="rounded-2xl border border-charcoal/10 bg-white/60 p-5">
                <p className="font-display text-3xl font-semibold text-leaf-deep">{n.value}</p>
                <p className="mt-2 font-body text-xs leading-snug text-charcoal/65">{n.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* DISTRICT REACH */}
      <section className="bg-leaf-pale py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">Current Reach</p>
              <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
                Nine districts across Eastern Uganda, and growing
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
                We started with one community. Word travelled, local
                leaders reached out, and our programmes followed the need.
                Today Musana runs active orphan care, women&apos;s training or
                water projects in the districts below.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {DISTRICTS.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-leaf-deep/25 bg-white px-4 py-2 font-body text-sm text-leaf-deep"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <figure className="rounded-3xl bg-ink p-8 text-cream sm:p-10">
                <blockquote className="font-display text-xl italic leading-snug text-cream sm:text-2xl">
                  &ldquo;When the well came to our village, my daughters
                  stopped missing school to fetch water. That changed
                  everything for us.&rdquo;
                </blockquote>
                <figcaption className="mt-5 font-body text-sm text-cream/60">
                  A mother in a Musana-served community, Eastern Uganda
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPANSION */}
      <section id="expansion" className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">Looking Ahead</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
              Carrying this light north and west
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
              Eastern Uganda is where Musana started, but the need it
              answers is not unique to this region. We are preparing to
              extend the same three programmes into Northern and Western
              Uganda, where displacement, poverty and water scarcity run
              just as deep.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {EXPANSION.map((e) => (
              <Reveal key={e.region} delay={100}>
                <div className="flex h-full flex-col rounded-3xl border border-charcoal/10 bg-white/70 p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-charcoal/45">
                      {e.phase}
                    </span>
                    <span
                      className={
                        e.status === "Active"
                          ? "rounded-full bg-leaf-pale px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-leaf-deep"
                          : "rounded-full bg-sun-pale px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-sun-deep"
                      }
                    >
                      {e.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-charcoal">
                    {e.region}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-charcoal/75">
                    {e.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-14 rounded-3xl bg-ink p-10 text-center text-cream sm:p-14">
            <p className="font-display text-2xl font-semibold sm:text-3xl">
              Expansion moves at the speed of funding.
            </p>
            <p className="mx-auto mt-3 max-w-xl font-body text-sm text-cream/75 sm:text-base">
              Every partner and donor who joins Musana today shortens the
              distance between a child in Northern or Western Uganda and
              the same light we&apos;ve already brought here.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact#donate"
                className="rounded-full bg-sun px-8 py-3.5 font-body text-sm font-semibold text-ink transition hover:bg-cream"
              >
                Fund The Next Region
              </Link>
              <Link
                href="/contact#partner"
                className="rounded-full border border-cream/30 px-8 py-3.5 font-body text-sm font-semibold text-cream transition hover:border-sun hover:text-sun"
              >
                Become a Partner
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
