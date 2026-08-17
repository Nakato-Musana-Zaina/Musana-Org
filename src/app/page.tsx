'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Sunburst from "@/components/Sunburst";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";

const HERO_STATS = [
  { value: "180,000+", label: "Orphans cared for" },
  { value: "860+", label: "Women trained in skills" },
  { value: "4,680", label: "Boreholes built" },
  { value: "28", label: "Districts reached" },
];

const NEED_STATS = [
  {
    value: "1 in 3",
    label: "children locally affected by orphanhood or abandonment",
  },
  {
    value: "5km+",
    label: "average walk to clean water in underserved villages",
  },
  {
    value: "70%",
    label: "of widowed mothers we meet have no stable income",
  },
];

const PILLARS = [
  {
    tag: "01",
    title: "Orphan Care & Education",
    body: "Every child who walks through our gate loses the weight of raising themselves. We give orphaned and abandoned children a home, Quran memorisation and Islamic studies, formal schooling, meals, and the steady presence of adults who show up for them every single day.",
    points: [
      "Boarding & day care for orphans",
      "Qur'an and Islamic studies",
      "Formal school sponsorship",
      "Daily meals and healthcare",
    ],
    image: "/images/mho education.jpeg",
    imageAlt: "Children supported through Musana's orphan care and education programme",
  },
  {
    tag: "02",
    title: "Women's Empowerment",
    body: "A widow with a skill does not beg. We put sewing machines, tailoring training, and small business support into the hands of vulnerable women and mothers, so they can earn a dignified income and provide for their own children.",
    points: [
      "Tailoring & vocational training",
      "Startup kits and machines",
      "Savings groups",
      "Post-training mentorship",
    ],
    image: "/images/women-sewing.jpg",
    imageAlt: "A woman taking part in Musana's skills training programme",
  },
  {
    tag: "03",
    title: "Community Development",
    body: "Clean water, food and shelter are not luxuries, they are the floor everything else stands on. We drill boreholes, run feeding programmes, and rebuild homes for families who have lost everything, across Eastern Uganda's hardest hit communities.",
    points: [
      "Borehole drilling & repair",
      "Community feeding programmes",
      "Emergency shelter",
      "Ramadan and relief food drives",
    ],
    image: "/images/mho zakah.jpeg",
    imageAlt: "Community members benefiting from Musana's community development programme",
  },
];

// Centralised button styles
const BTN_PRIMARY =
  "rounded-full bg-sun px-8 py-3.5 text-center font-body text-sm font-semibold text-ink transition hover:bg-leaf hover:text-cream sm:text-base";
const BTN_SECONDARY_DARK =
  "rounded-full border border-cream/30 px-8 py-3.5 text-center font-body text-sm font-semibold text-cream transition hover:border-sun hover:text-sun sm:text-base";
const BTN_SECONDARY_LIGHT =
  "rounded-full border border-charcoal/20 px-9 py-4 font-body text-base font-semibold text-charcoal transition hover:border-leaf hover:text-leaf-deep";
const BTN_LEAF =
  "rounded-full bg-leaf px-9 py-4 font-body text-base font-semibold text-cream transition hover:bg-leaf-deep";

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Musana, The Humanitarian Organisation",
  description:
    "Musana provides orphan care and education, women's empowerment, and community development (clean water, food, shelter) across Eastern Uganda.",
  areaServed: {
    "@type": "Place",
    name: "Eastern Uganda",
  },
  knowsAbout: [
    "Orphan care",
    "Ramadhan help",
    "Women's vocational training",
    "Borehole drilling",
    "Community feeding programmes",
    "Moslem Charities",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
      />

      {/* =========================================================
          HERO - LIGHTER & MORE VIBRANT
      ========================================================== */}
      <section
        id="hero"
        aria-label="Introduction"
        className="relative isolate flex min-h-screen items-center overflow-hidden bg-ink text-cream"
      >
        {/* Background Image with slow zoom animation */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/mho disability.jpeg"
            alt="Children from Musana's feeding programme sharing a meal together in Eastern Uganda"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_35%] opacity-90 animate-[kenBurns_25s_ease-in-out_infinite_alternate]"
          />
          
          {/* Much lighter gradient overlays to let the beautiful image shine through */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-transparent" />
          
          {/* Warm vignette to draw focus */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(253,224,71,0.15)_0%,transparent_60%)]" />
        </div>

        {/* Decorative Sunburst */}
        <Sunburst
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-20 h-80 w-80 text-sun/10 md:h-[30rem] md:w-[30rem] animate-[spin_60s_linear_infinite]"
        />

        {/* Main Grid Layout */}
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-0">
          
          {/* LEFT COLUMN: Text & CTAs */}
          <div className="flex flex-col justify-center">
            <h1
              className="motion-safe:animate-rise mt-5 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "160ms" }}
            >
              Illuminating{" "}
              <span className="relative inline-block text-sun drop-shadow-md">
                lives
                <svg className="absolute -bottom-1 left-0 w-full text-sun/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
              <br className="hidden sm:block" /> through care and community.
            </h1>

            <p
              className="motion-safe:animate-rise mt-5 max-w-lg text-balance font-body text-base leading-relaxed text-cream/90 drop-shadow sm:text-lg"
              style={{ animationDelay: "240ms" }}
            >
              We put our faith into motion by providing orphaned children with a safe home and education, empowering widowed mothers with trade skills, and giving entire villages access to clean, life-saving water.
            </p>

            <div
              className="motion-safe:animate-rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/contact#donate"
                data-cta="hero-donate"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-sun px-7 py-3.5 text-center font-body text-sm font-bold text-ink shadow-lg shadow-sun/20 transition-all duration-300 hover:scale-[1.03] hover:bg-cream hover:shadow-xl sm:text-base"
              >
                Donate Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/programs"
                data-cta="hero-programs"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-7 py-3.5 text-center font-body text-sm font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:border-sun/60 hover:bg-cream/15 hover:text-sun sm:text-base"
              >
                See Our Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Statistics Card */}
          <div 
            className="motion-safe:animate-rise hidden lg:block" 
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative rounded-3xl border border-cream/10 bg-ink/40 p-8 backdrop-blur-md shadow-2xl shadow-black/20">
              {/* Decorative glow behind stats */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sun/10 blur-3xl" />
              
              <dl className="relative grid grid-cols-2 gap-x-8 gap-y-8">
                {HERO_STATS.map((s, i) => (
                  <div key={s.label} className="relative">
                    {/* Vertical divider for right column items */}
                    {i % 2 === 0 && i < HERO_STATS.length - 1 && (
                      <div className="absolute right-0 top-1/2 h-12 w-px -translate-y-1/2 bg-cream/10" />
                    )}
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-3xl font-bold text-sun lg:text-4xl drop-shadow-sm">
                      {s.value}
                    </dd>
                    <p className="mt-2 font-body text-sm leading-snug text-cream/80">
                      {s.label}
                    </p>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Mobile Stats (Visible only on small screens, stacked below text) */}
          <div className="lg:hidden">
            <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-cream/10 bg-ink/40 p-5 backdrop-blur-md">
              {HERO_STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-bold text-sun drop-shadow-sm">
                    {s.value}
                  </dd>
                  <p className="mt-1 font-body text-xs text-cream/80">
                    {s.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

        </div>

        {/* Scroll Cue - Modern Mouse Wheel Style */}
        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/50 drop-shadow-sm">
            Discover More
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/30 p-1.5">
            <div className="h-1.5 w-1.5 animate-[bounce_1.5s_infinite] rounded-full bg-sun" />
          </div>
        </div>

        {/* Custom Keyframes for Ken Burns Effect */}
        <style jsx>{`
          @keyframes kenBurns {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
        `}</style>
      </section>

      {/* =========================================================
          WHY IT'S NEEDED
      ========================================================== */}
      <section id="why" aria-label="Why we exist" className="bg-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/child-water.jpg"
                alt="A young boy drinking clean water from a Musana-built water point"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">
              Why We Exist
            </p>

            <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
              In Eastern Uganda, need is not an idea. It is the walk a child
              makes for water every morning.
            </h2>

            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
              <p>
                Across districts like Mbale, Budaka, Butaleja, Bugiri, Jinja,
                Iganga, Luuka and Mayuge, thousands of children have lost one
                or both parents and have no one to feed, teach or protect them.
                Widows and single mothers are left with no income and no path
                to one. Whole villages walk kilometres to fetch water that
                still makes their children sick.
              </p>

              <p>
                Musana was founded to close that distance: between a child and
                a home, a widow and a wage, a village and a well. Not as a one
                time act of charity, but as a standing commitment we keep every
                day.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-charcoal/10 pt-6">
              {NEED_STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-leaf-deep">
                    {s.value}
                  </dd>
                  <p className="mt-1 font-body text-xs text-charcoal/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CAROUSEL (OUR PROGRAMS IN ACTION) - REDUCED PADDING
      ========================================================== */}
      <section id="gallery" aria-label="Our work in pictures" className="bg-cream py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Carousel
            title="Look at our initiatives and Work"
            subtitle="A look at the programmes changing lives across Eastern Uganda, one child, one woman, one village at a time."
          />
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================== */}
      <section id="what-we-do" aria-label="What we do" className="bg-ink py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-sun">
              What We Do
            </p>

            <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Three commitments, held every day
            </h2>
          </Reveal>

          <div className="mt-14 space-y-20">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="grid gap-8 border-t border-cream/10 pt-10 lg:grid-cols-12 lg:items-center lg:gap-12">
                  <div className="lg:col-span-1" aria-hidden="true">
                    <span className="font-mono text-sm text-sun/70">
                      {p.tag}
                    </span>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition duration-500 motion-safe:hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
                      {p.title}
                    </h3>

                    <p className="mt-4 font-body leading-relaxed text-cream/75">
                      {p.body}
                    </p>

                    <ul className="mt-5 grid grid-cols-1 gap-y-2 font-body text-sm text-cream/60 sm:grid-cols-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sun"
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPANSION TEASER
      ========================================================== */}
      <section id="expansion-teaser" aria-label="Where we're headed" className="relative overflow-hidden bg-leaf-pale py-20 lg:py-28">
        <Sunburst
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 text-leaf/10"
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">
                Where We&apos;re Headed
              </p>

              <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
                Eastern Uganda is where Musana was born. It is not where we
                stop.
              </h2>

              <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-charcoal/75 sm:text-lg">
                Northern Uganda carries some of the country&apos;s deepest
                scars from displacement and conflict. The west holds refugee
                settlements and rural communities with the same unmet needs we
                found here. We are preparing to carry the same model north and
                west: care for orphans, skills for women, water and food for
                communities.
              </p>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-5">
              <div className="rounded-3xl bg-ink p-8 text-cream shadow-xl">
                <p className="font-display text-xl font-semibold text-sun">
                  Help us reach further
                </p>

                <p className="mt-3 font-body text-sm leading-relaxed text-cream/75">
                  Expansion into Northern and Western Uganda is funded, not
                  assumed. Every partner who joins now helps us open our next
                  region sooner.
                </p>

                <Link
                  href="/impact#expansion"
                  data-cta="expansion-plan"
                  className="mt-6 inline-block rounded-full bg-sun px-6 py-3 font-body text-sm font-semibold text-ink transition hover:bg-cream"
                >
                  See The Expansion Plan
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section id="final-cta" aria-label="Give today" className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <Reveal>
            <blockquote className="font-display text-3xl italic leading-snug text-charcoal sm:text-4xl">
              &ldquo;Think of giving not as a duty, but as a privilege.&rdquo;
            </blockquote>

            <p className="mt-3 font-body text-sm uppercase tracking-[0.2em] text-charcoal/50">
              Musana, The Humanitarian Organisation
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact#donate"
                data-cta="final-donate"
                className={BTN_LEAF}
              >
                Give Today
              </Link>

              <Link
                href="/contact#sponsor"
                data-cta="final-sponsor"
                className={BTN_SECONDARY_LIGHT}
              >
                Sponsor a Child
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}