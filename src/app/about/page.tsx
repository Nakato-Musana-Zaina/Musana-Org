import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Sunburst from "@/components/Sunburst";
import type { Metadata } from "next";
import { Sparkles, HeartHandshake, ShieldCheck, Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Are | Musana",
  description:
    "Musana's mission, values and story: caring for orphans, empowering women and rebuilding communities across Eastern Uganda.",
};

const VALUES = [
  {
    icon: Sparkles,
    title: "Empowerment",
    body: "We don't hand out dependence. We hand people the tools, training and confidence to stand on their own, so the change we start keeps going after we've left the room.",
    image: "/images/women-sewing.jpg",
    imageAlt: "A woman trained through Musana's skills programme working confidently at her own sewing machine",
  },
  {
    icon: HeartHandshake,
    title: "Compassion",
    body: "Every family we meet is carrying something heavy: grief, hunger, illness, fear. We move toward that weight instead of away from it, and we stay long enough to actually lighten it.",
    image: "/images/mho disability.jpeg",
    imageAlt: "Children sharing a meal together at a Musana community feeding event",
  },
  {
    icon: ShieldCheck,
    title: "Sincerity",
    body: "What we say we will do, we do. Donors and communities alike can trust that our word matches our work, and that every gift lands exactly where we promised it would.",
    image: "/images/child-water.jpg",
    imageAlt: "A child drinking clean water from a Musana-built water point",
  },
  {
    icon: Users2,
    title: "Brotherhood",
    body: "No one in our care is a case number. They are family, and family shows up for each other, in good seasons and hard ones, without keeping score.",
    image: "/images/mho zakah.jpg",
    imageAlt: "Women and children gathered together at a Musana skills training session",
  },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0">
          <Image
            src="/images/child-water.jpg"
            alt="A child drinking clean water from a Musana-built water point in Eastern Uganda"
            fill
            priority
            className="object-cover object-[70%_30%] opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-transparent" />
        </div>
        <Sunburst className="pointer-events-none absolute -right-24 top-0 h-80 w-80 text-sun/10" spin />

        <div className="relative mx-auto max-w-4xl px-5 py-24 lg:px-8 lg:py-32">
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

      {/* MISSION */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">Our Mission</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
                To restore dignity, one family at a time
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
                To restore dignity to orphaned children, vulnerable women
                and underserved communities across Uganda through direct
                care, education, skills training and essential
                infrastructure, delivered with sincerity and without
                condition.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/images/feeding-children.jpg"
                  alt="Children seated together at a Musana community feeding event, living out the mission day to day"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal delay={100} className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/images/women-sewing.jpg"
                  alt="A local Musana trainer working alongside a woman learning to sew"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">Our Approach</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
                Close to the ground, close to the people
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
                We work through local staff and community relationships
                built over years, not one off visits. Every child we take
                in, every woman we train, and every well we drill is chosen
                because someone in that community told us it mattered most.
              </p>
              <Link
                href="/programs"
                className="mt-7 inline-block rounded-full bg-leaf px-7 py-3.5 font-body text-sm font-semibold text-cream transition hover:bg-leaf-deep"
              >
                Explore Our Programmes &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES — full-viewport panels, one per purpose */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 pt-20 lg:px-8 lg:pt-24">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-sun">What Drives Us</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Our Values
            </h2>
          </Reveal>
        </div>

        {VALUES.map((v, i) => {
          const Icon = v.icon;
          const imageFirst = i % 2 === 1;
          return (
            <div
              key={v.title}
              className="flex min-h-[85vh] items-center border-t border-cream/10 py-14 lg:min-h-screen lg:py-0"
            >
              <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
                <Reveal className={imageFirst ? "order-2 lg:order-1" : "order-2"}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                    <Image src={v.image} alt={v.imageAlt} fill className="object-cover" />
                  </div>
                </Reveal>
                <Reveal
                  delay={100}
                  className={imageFirst ? "order-1 lg:order-2" : "order-1"}
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sun/15 text-sun">
                    <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
                    {v.title}
                  </h3>
                  <p className="mt-4 max-w-md font-body text-base leading-relaxed text-cream/75 sm:text-lg">
                    {v.body}
                  </p>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* STORY */}
      <section className="bg-leaf-pale py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/child-water.jpg"
                alt="A child drinking clean water, a direct result of Musana's community development work"
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
              question: does this genuinely make a family&apos;s life
              better.
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
