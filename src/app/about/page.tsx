import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Sunburst from "@/components/Sunburst";
import type { Metadata } from "next";
import { Sparkles, HeartHandshake, ShieldCheck, Users2, ArrowRight } from "lucide-react";

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
    image: "/images/mho zakah.jpeg",
    imageAlt: "Women and children gathered together at a Musana skills training session",
  },
];

export default function About() {
  return (
    <>
      {/* =========================================================
          HERO - CINEMATIC & INVITING
      ========================================================== */}
      <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-ink text-cream lg:min-h-screen">
        {/* Background Image with Ken Burns effect */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/mho mosque.jpeg"
            alt="A community gathering at a Musana-supported masjid in Eastern Uganda"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70 animate-ken-burns"
          />
          {/* Warm, inviting gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-ink/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(253,224,71,0.08)_0%,transparent_50%)]" />
        </div>

        {/* Decorative Sunburst */}
        {/* <Sunburst 
          className="pointer-events-none absolute -right-20 top-20 h-80 w-80 text-sun/10 md:h-[30rem] md:w-[30rem] animate-[spin_60s_linear_infinite]" 
        /> */}

        {/* Hero Content */}
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-16 lg:px-8 lg:py-0">
          <div className="max-w-3xl">
            {/* <Reveal>
              <span className="inline-flex items-center gap-3 rounded-full border border-sun/20 bg-sun/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sun backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sun opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sun"></span>
                </span>
                Who We Are
              </span>
            </Reveal> */}

            <Reveal delay={100}>
              <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Where support meets{" "}
                <span className="relative inline-block text-sun">
                  self-reliance.
                  <svg className="absolute -bottom-2 left-0 w-full text-sun/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-balance font-body text-lg leading-relaxed text-cream/85 sm:text-xl">
                Musana means <em>sunlight</em>. Across Eastern Uganda, we turn compassion into permanent change—building sustainable water systems, equipping mothers with trade skills, and giving vulnerable children a place to thrive.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/programs"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-sun px-8 py-4 text-center font-body text-base font-bold text-ink shadow-lg shadow-sun/20 transition-all duration-300 hover:scale-[1.03] hover:bg-cream hover:shadow-xl"
                >
                  See Our Programmes
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact#donate"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-8 py-4 text-center font-body text-base font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:border-sun/50 hover:bg-cream/10 hover:text-sun"
                >
                  Support Our Mission
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & APPROACH
      ========================================================== */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Mission */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">Our Mission</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                To restore dignity, <br className="hidden sm:block" />
                <span className="text-leaf-deep">one family at a time.</span>
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
                To restore dignity to orphaned children, vulnerable women
                and underserved communities across Uganda through direct
                care, education, skills training and essential
                infrastructure, delivered with sincerity and without
                condition.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/feeding-children.jpg"
                  alt="Children seated together at a Musana community feeding event, living out the mission day to day"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

          {/* Approach */}
          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal delay={100} className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/women-sewing.jpg"
                  alt="A local Musana trainer working alongside a woman learning to sew"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">Our Approach</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                Close to the ground, <br className="hidden sm:block" />
                <span className="text-leaf-deep">close to the people.</span>
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
                We work through local staff and community relationships
                built over years, not one-off visits. Every child we take
                in, every woman we train, and every well we drill is chosen
                because someone in that community told us it mattered most.
              </p>
              <Link
                href="/programs"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-leaf px-8 py-4 font-body text-base font-semibold text-cream transition hover:bg-leaf-deep hover:shadow-lg"
              >
                Explore Our Programmes <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES - CARD GRID LAYOUT
      ========================================================== */}
      <section className="bg-ink py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-sun">What Drives Us</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
              The values that guide <span className="text-sun">every decision.</span>
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-cream/70 sm:text-lg">
              These aren't just words on a wall. They are the daily practices that shape how we hire, how we build, and how we care for the communities we serve.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 100}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cream/10 bg-cream/5 transition-all duration-300 hover:border-sun/30 hover:bg-cream/10">
                    {/* Card Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={v.image}
                        alt={v.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-80" />
                      
                      {/* Floating Icon Badge */}
                      <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sun text-ink shadow-lg">
                        <Icon size={24} strokeWidth={2} aria-hidden="true" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col p-6 lg:p-8">
                      <h3 className="font-display text-2xl font-semibold text-cream">
                        {v.title}
                      </h3>
                      <p className="mt-3 font-body text-base leading-relaxed text-cream/70">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          STORY
      ========================================================== */}
      <section className="bg-leaf-pale py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/child-water.jpg"
                alt="A child drinking clean water, a direct result of Musana's community development work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">
              Our Story
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              Started by neighbours, <br className="hidden sm:block" />
              <span className="text-leaf-deep">for neighbours.</span>
            </h2>
            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
              <p>
                Musana began the way most lasting things do: with people who
                could not walk past a need they had the ability to meet. What
                started as informal support for a handful of orphaned
                children in Eastern Uganda grew, family by family and village
                by village, into a structured organisation running orphan
                care, women&apos;s skills training and community development
                programmes across multiple districts.
              </p>
              <p>
                We remain, deliberately, a community organisation first. Our
                staff live in the districts we serve. Our board includes
                local leaders. And every programme we run answers to one
                question: does this genuinely make a family&apos;s life better?
              </p>
            </div>
            <Link
              href="/contact#donate"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-leaf px-8 py-4 font-body text-base font-semibold text-cream transition hover:bg-leaf-deep hover:shadow-lg"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}