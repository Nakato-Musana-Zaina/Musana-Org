import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
// import InitiativesList from "@/components/InitiativesList";
import type { Metadata } from "next";
import InitiativesList from "@/components/IntiativesList";

export const metadata: Metadata = {
  title: "Our Work | Musana",
  description:
    "Orphan care and Islamic education, women's skills empowerment, and community development, clean water, food and shelter, across Eastern Uganda.",
};

const PROGRAMMES = [
  {
    id: "orphans",
    label: "01",
    title: "Orphan Care & Education",
    image: "/images/mho education.jpeg",
    imageAlt: "Children supported through Musana's orphan care and education programme",
    description:
      "We give orphaned children a safe home, daily meals, healthcare, and a future through Qur'an memorisation and full formal schooling.",
    features: [
      "Residential and day care",
      "Daily Qur'an and Islamic studies",
      "Primary & secondary sponsorship",
      "Three meals a day and healthcare",
    ],
    cta: {
      href: "/contact#sponsor",
      label: "Sponsor a Child",
    },
    theme: "light",
  },
  {
    id: "women",
    label: "02",
    title: "Women's Empowerment",
    image: "/images/mho empowerment2.jpeg",
    imageAlt: "A Musana graduate tailoring on a Singer sewing machine, surrounded by fellow trainees",
    description:
      "Widows and vulnerable mothers train in tailoring and trades, graduating with a certified skill, a starter kit, and a savings group.",
    features: [
      "Vocational skills training",
      "Sewing machines on graduation",
      "Savings group formation",
      "Ongoing mentorship",
    ],
    cta: {
      href: "/contact#donate",
      label: "Fund a Woman's Training",
    },
    theme: "dark",
  },
  {
    id: "community",
    label: "03",
    title: "Community Development",
    image: "/images/mho bores.jpeg",
    imageAlt: "A child drinking clean water from a Musana-built water point in a village in Eastern Uganda",
    description:
      "We drill boreholes, run feeding programmes, and rebuild shelter, laying the foundation everything else stands on.",
    features: [
      "Borehole drilling and repair",
      "Community feeding programmes",
      "Emergency shelter construction",
      "Ramadan & disaster relief",
    ],
    cta: {
      href: "/contact#donate",
      label: "Fund Clean Water",
    },
    theme: "light",
  },
];

const IMPACT_STATS = [
  { value: "180,000", label: "Children Supported" },
  { value: "860+", label: "Women Trained" },
  { value: "4680", label: "Boreholes Drilled" },
  { value: "28+", label: "Villages Served" },
];

export default function Programs() {
  return (
    <>
      {/* HERO SECTION - FITS ONE SCREEN */}
      <section className="relative isolate overflow-hidden bg-ink text-cream min-h-screen flex flex-col">
        {/* Background Image & Gradients */}
        <div className="absolute inset-0">
          <Image
            src="/images/mho education.jpeg"
            alt="A child drinking clean water from a Musana-built water point, a direct result of Musana's programmes"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_25%] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-ink/20 to-transparent" />
       
        </div>

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-sun/10 blur-3xl" />

        {/* Main Content - Vertically Centered */}
        <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-5 py-16 lg:px-8 lg:py-20">
          {/* <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-sun backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-sun" />
              Our Work
            </span>
          </Reveal> */}

          <Reveal delay={100}>
            <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Three programmes.
              <br />
              <span className="text-sun">One purpose.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-cream/80 sm:text-lg">
              Every programme we run exists because a family in Eastern
              Uganda needed it first. Here is exactly what your support
              funds, and the lives it changes.
            </p>
          </Reveal>

          {/* Dual CTAs */}
          <Reveal delay={300}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#donate"
                data-cta="programs-hero-donate"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-sun px-7 py-3 text-center font-body text-sm font-semibold text-ink transition hover:bg-cream hover:shadow-xl sm:px-8 sm:py-3.5"
              >
                Donate Now
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                href="#programmes"
                data-cta="programs-hero-see"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-7 py-3 text-center font-body text-sm font-semibold text-cream backdrop-blur-sm transition hover:border-cream/60 hover:bg-cream/10 sm:px-8 sm:py-3.5"
              >
                See Our Programmes
              </Link>
            </div>
          </Reveal>

          {/* Impact Stats Strip */}
          <Reveal delay={400}>
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-cream/15 bg-cream/5 p-4 backdrop-blur-md sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-cream/15 sm:p-5 lg:mt-10">
              {IMPACT_STATS.map((stat) => (
                <div key={stat.label} className="text-center sm:px-3">
                  <div className="font-display text-2xl font-bold text-sun sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-cream/70 sm:text-[10px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 lg:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-cream/60 to-transparent" />
          <svg
            className="h-4 w-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

   

      {/* CORE PROGRAMMES - STACKED LAYOUT */}
      <section id="programmes" className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Section Heading */}
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-leaf/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-leaf-deep">
              Our Core Programmes
            </span>
            <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
              The three pillars of <span className="text-leaf-deep">everything we do.</span>
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-charcoal/75 sm:text-lg">
              Every initiative we run falls under one of these three programmes.
              Together, they cover a child's upbringing, a mother's independence,
              and a community's basic needs.
            </p>
          </Reveal>

          {/* Stacked Cards Container */}
          <div className="mt-14 flex flex-col gap-8 lg:gap-12">
            {PROGRAMMES.map((programme, i) => {
              const isDark = programme.theme === "dark";
              const isImageLeft = i % 2 === 0;

              return (
                <Reveal key={programme.id} delay={i * 100}>
                  <div
                    id={programme.id}
                    className={`group flex flex-col overflow-hidden rounded-3xl shadow-sm transition hover:shadow-xl ${
                      isDark
                        ? "bg-ink text-cream"
                        : "border border-charcoal/10 bg-white text-charcoal"
                    }`}
                  >
                    <div
                      className={`flex flex-col ${
                        isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Image Side */}
                      <div className="relative md:w-1/2 w-full overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[420px]">
                        <Image
                          src={programme.image}
                          alt={programme.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {isDark && (
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-ink/40" />
                        )}
                        <span
                          className={`absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-bold shadow-lg ${
                            isDark ? "bg-sun text-ink" : "bg-leaf text-cream"
                          }`}
                        >
                          {programme.label}
                        </span>
                      </div>

                      {/* Content Side */}
                      <div className="flex flex-1 flex-col justify-center p-8 md:p-10 lg:p-12">
                        <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                          {programme.title}
                        </h3>
                        <p
                          className={`mt-4 font-body text-base leading-relaxed ${
                            isDark ? "text-cream/80" : "text-charcoal/75"
                          }`}
                        >
                          {programme.description}
                        </p>

                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                          {programme.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5 font-body text-sm"
                            >
                              <span
                                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                                  isDark ? "bg-sun" : "bg-leaf"
                                }`}
                              />
                              <span
                                className={
                                  isDark ? "text-cream/85" : "text-charcoal/80"
                                }
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8">
                          <Link
                            href={programme.cta.href}
                            className={`inline-flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-semibold transition hover:shadow-lg ${
                              isDark
                                ? "bg-sun text-ink hover:bg-cream"
                                : "bg-leaf text-cream hover:bg-leaf-deep"
                            }`}
                          >
                            {programme.cta.label}
                            <span aria-hidden>&rarr;</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


         {/* OTHER INITIATIVES */}
      <InitiativesList />
    </>
  );
}