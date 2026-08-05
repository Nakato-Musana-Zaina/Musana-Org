import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Sunburst from "@/components/Sunburst";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | Musana",
  description:
    "Musana's mission, values and story: caring for orphans, empowering women and rebuilding communities across Eastern Uganda.",
};

const VALUES = [
  {
    title: "Empowerment",
    body: "We don&apos;t hand out dependence. We hand people the tools, training and confidence to stand on their own.",
  },
  {
    title: "Compassion",
    body: "Every family we meet is carrying something heavy. We move toward that weight, not away from it.",
  },
  {
    title: "Sincerity",
    body: "What we say we will do, we do. Donors and communities alike can trust our word matches our work.",
  },
  {
    title: "Brotherhood",
    body: "No one in our care is a case number. They are family, and family shows up for each other.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-cream lg:py-28">
        <Sunburst className="pointer-events-none absolute -right-24 top-0 h-80 w-80 text-sun/10" spin />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sun">Who We Are</p>
          <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-tight sm:text-6xl">
            A name that means light, and a promise to be it
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            Musana is the local word for light from the sun. We chose it
            because our work is simple to describe: we go to the darkest,
            most overlooked corners of Eastern Uganda, orphaned children,
            widowed mothers, villages without water, and we try to be
            warmth and light there.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
                To restore dignity to orphaned children, vulnerable women
                and underserved communities across Uganda through direct
                care, education, skills training and essential
                infrastructure, delivered with sincerity and without
                condition.
              </p>
              <h2 className="mt-10 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
                Our Approach
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
                We work close to the ground, through local staff and
                community relationships built over years, not one off
                visits. Every child we take in, every woman we train, and
                every well we drill is chosen because someone in that
                community told us it mattered most.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-3xl bg-sun-pale p-8 sm:p-10">
                <h3 className="font-display text-2xl font-semibold text-charcoal">
                  Our Values
                </h3>
                <dl className="mt-6 space-y-6">
                  {VALUES.map((v) => (
                    <div key={v.title} className="border-t border-charcoal/10 pt-5 first:border-t-0 first:pt-0">
                      <dt className="font-display text-lg font-semibold text-leaf-deep">
                        {v.title}
                      </dt>
                      <dd className="mt-1.5 font-body text-sm leading-relaxed text-charcoal/75">
                        {v.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-leaf-pale py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/feeding-children.jpg"
                alt="Children seated together at a Musana community feeding event"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">
              Our Story
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
              Started by neighbours, for neighbours
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-charcoal/80">
              Musana began the way most lasting things do: with people who
              could not walk past a need they had the ability to meet. What
              started as informal support for a handful of orphaned
              children in Eastern Uganda grew, family by family and village
              by village, into a structured organisation running orphan
              care, women&apos;s skills training and community development
              programmes across multiple districts.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-charcoal/80">
              We remain, deliberately, a community organisation first. Our
              staff live in the districts we serve. Our board includes
              local leaders. And every programme we run answers to one
              question: does this genuinely make a family&apos;s life better.
            </p>
            <Link
              href="/programs"
              className="mt-7 inline-block rounded-full bg-leaf px-7 py-3.5 font-body text-sm font-semibold text-cream transition hover:bg-leaf-deep"
            >
              Explore Our Programmes &rarr;
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
