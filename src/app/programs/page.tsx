import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Musana",
  description:
    "Orphan care and Islamic education, women's skills empowerment, and community development, clean water, food and shelter, across Eastern Uganda.",
};

export default function Programs() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink py-20 text-cream lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/mho students2.jpeg"
            alt="A child drinking clean water from a Musana-built water point, a direct result of Musana's programmes"
            fill
            priority
  sizes="100vw"
            className="object-cover object-[65%_25%] opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sun">Our Work</p>
          <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-tight sm:text-6xl">
            Three programmes. One purpose.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            Every programme we run exists because a family in Eastern
            Uganda needed it first. Here is exactly what your support
            funds.
          </p>
        </div>
      </section>

  {/* PROGRAMME 1: ORPHANS */}
<section id="orphans" className="bg-cream py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">
    <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">

      {/* Image */}
      <div className="lg:col-span-6">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/mho education.jpeg"
            alt="Children supported through Musana's orphan care and education programme"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-6">
        <span className="font-mono text-sm text-leaf-deep">
          01 &mdash; Orphan Care & Education
        </span>

        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
          A home, a teacher, and someone who remembers their name
        </h2>

        <p className="mt-6 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
          Children arrive to us having lost parents to illness,
          accidents or abandonment. We give them stability first:
          shelter, food, healthcare, and consistent caregivers. Then
          we build their future through Qur&apos;an memorisation and
          Islamic studies alongside formal government-curriculum
          schooling, so they grow rooted in faith and equipped for
          life beyond it.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Residential and day care for orphaned children",
            "Daily Qur'an and Islamic studies instruction",
            "Primary and secondary school sponsorship",
            "Three meals a day and routine healthcare",
            "Counselling and emotional support",
            "Life skills and mentorship as children grow older",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl bg-white/60 p-4 font-body text-sm text-charcoal/80"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-3xl bg-sun-pale p-8">
          <p className="font-display text-xl font-semibold text-charcoal">
            Sponsor a child
          </p>

          <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/75">
            For $30 a month, you can cover one orphan&apos;s
            housing, meals, education and Islamic studies in full.
            You&apos;ll receive updates on the child you sponsor.
          </p>

          <Link
            href="/contact#sponsor"
            className="mt-6 inline-block rounded-full bg-leaf px-6 py-3 font-body text-sm font-semibold text-cream transition hover:bg-leaf-deep"
          >
            Sponsor a Child
          </Link>
        </div>
      </div>

    </Reveal>
  </div>
</section>

      {/* PROGRAMME 2: WOMEN */}
      <section id="women" className="bg-ink py-20 text-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/mho empowerment.jpeg"
                  alt="A Musana graduate tailoring on a Singer sewing machine, surrounded by fellow trainees"
                  fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
className="object-cover object-[65%_25%] opacity-65"                />


<div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
<div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <span className="font-mono text-sm text-sun">02 &mdash; Women&apos;s Empowerment</span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Skills that outlast the donation
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-cream/80 sm:text-lg">
                Widows and vulnerable mothers across our districts join
                months-long vocational training in tailoring and other
                trades. Graduates leave with a certified skill, a starter
                kit, and a savings group of fellow women who hold each
                other accountable long after training ends.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Tailoring and vocational skills training",
                  "Sewing machines and start-up kits on graduation",
                  "Small business and savings group formation",
                  "Ongoing mentorship and market linkage support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-cream/75">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact#donate"
                className="mt-8 inline-block rounded-full bg-sun px-7 py-3.5 font-body text-sm font-semibold text-ink transition hover:bg-cream"
              >
                Fund a Woman&apos;s Training
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMME 3: COMMUNITY */}
      <section id="community" className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/mho woman borehole.jpeg"
                  alt="A child drinking clean water from a Musana-built water point in a village in Eastern Uganda"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="font-mono text-sm text-leaf-deep">03 &mdash; Community Development</span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
                Water, food and shelter, the floor everything stands on
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-charcoal/80 sm:text-lg">
                No amount of education or training matters if a family is
                sick from dirty water or has nowhere to sleep. We drill and
                repair boreholes, run community-wide feeding events, and
                rebuild shelter for families displaced by disaster or
                extreme poverty.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Borehole drilling and water point repair",
                  "Community feeding programmes and food drives",
                  "Emergency and permanent shelter construction",
                  "Ramadan and disaster relief distributions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl bg-leaf-pale/60 p-4 font-body text-sm text-charcoal/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact#donate"
                className="mt-8 inline-block rounded-full bg-leaf px-7 py-3.5 font-body text-sm font-semibold text-cream transition hover:bg-leaf-deep"
              >
                Fund Clean Water
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
