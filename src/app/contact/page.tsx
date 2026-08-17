import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Sunburst from "@/components/Sunburst";
import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Give | Musana",
  description:
    "Donate, sponsor a child, volunteer or partner with Musana, The Humanitarian Organisation, serving Eastern Uganda.",
};

const GIVING_TIERS = [
  { amount: "$15", impact: "Feeds an orphan for two weeks" },
  { amount: "$40", impact: "Covers a child's full month of care and schooling" },
  { amount: "$95", impact: "Trains and equips one woman with a sewing machine" },
  { amount: "$550", impact: "Sinks a borehole a whole village will use for years" },
];

const REACH_US = [
  { icon: MapPin, label: "Office", value: "Jinja, Eastern Uganda" },
  { icon: Mail, label: "Email", value: "nakatozainamusana@gmail.com", href: "mailto:musanahumanitarianorganization@gmail.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+256 753 605 417", href: "tel:+256753605417" },
  { icon: Clock, label: "Office Hours", value: "Monday – Saturday, 8am – 6pm EAT" },
];

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0">
          <Image
            src="/images/child-water.jpg"
            alt="A woman trained through Musana's skills programme, one of many people you can help through your gift"
            fill
            priority
            sizes="100vw"
className="object-cover object-[50%_25%] opacity-70"
          />

<div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
<div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent" />
        </div>

        <Sunburst className="pointer-events-none absolute -right-24 -top-16 h-80 w-80 text-sun/10" spin />

        <div className="relative mx-auto max-w-4xl px-5 py-20 lg:px-8 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sun">Get Involved</p>
          <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-tight sm:text-6xl">
            There is a place for you in this work
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            Whether you can give once, give monthly, volunteer your time, or
            partner your organisation with ours, every form of help moves a
            real family forward.
          </p>
        </div>
      </section>

      {/* CONTACT US — message form, now first */}
      <section id="message" className="scroll-mt-20 bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">Contact Us</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
                Send us a message
              </h2>
              <p className="mt-4 font-body text-base text-charcoal/75">
                Questions about giving, sponsorship, volunteering or
                partnership, we read every message personally.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-ink p-8 text-cream sm:p-10">
                <h3 className="font-display text-xl font-semibold text-sun">
                  Reach Us Directly
                </h3>
                <dl className="mt-6 space-y-5 font-body text-sm">
                  {REACH_US.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <>
                        <dt className="flex items-center gap-2 text-cream/50">
                          <Icon size={16} strokeWidth={2} aria-hidden="true" />
                          {item.label}
                        </dt>
                        <dd className="mt-1 pl-6">{item.value}</dd>
                      </>
                    );
                    return (
                      <div key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="block transition hover:text-sun [&_dd]:hover:underline [&_dd]:hover:decoration-cream/30 [&_dd]:hover:underline-offset-4"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="scroll-mt-20 bg-leaf-pale py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="font-mono text-sm text-leaf-deep">Donate</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
                Give what you can. It goes where it&apos;s needed most.
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-charcoal/80">
                One-time or monthly gifts of any size go directly into
                orphan care, women&apos;s training and community water and
                food programmes. Here&apos;s what different gifts make
                possible.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {GIVING_TIERS.map((t) => (
                  <div key={t.amount} className="rounded-2xl border border-charcoal/10 bg-white/70 p-5">
                    <p className="font-display text-xl font-semibold text-leaf-deep">{t.amount}</p>
                    <p className="mt-1.5 font-body text-sm text-charcoal/70">{t.impact}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-ink p-6 text-cream sm:p-7">
                <p className="font-body text-sm text-cream/70">Bank Transfer & Mobile Money (USD)</p>
                <dl className="mt-3 space-y-1.5 font-mono text-sm text-cream">
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/60">Account Name</dt>
                    <dd>Musana Humanitarian Organisation</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/60">Currency</dt>
                    <dd>USD ($) or EUR (&euro;)</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/60">Mobile Money / WhatsApp</dt>
                    <dd>+256 753 605 417</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/60">Reference</dt>
                    <dd>Your name + &ldquo;Donation&rdquo;</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-24 rounded-3xl border border-charcoal/10 bg-white/70 p-8">
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  Ready to give?
                </h3>
                <p className="mt-2 font-body text-sm text-charcoal/70">
                  Send us a message above and our team will reach out within
                  one business day to arrange your gift or answer any
                  questions first.
                </p>
                <a
                  href="#message"
                  className="mt-6 block rounded-full bg-leaf px-6 py-3.5 text-center font-body text-sm font-semibold text-cream transition hover:bg-leaf-deep"
                >
                  Back to Message Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSOR / VOLUNTEER / PARTNER */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-3 lg:px-8">
          <div id="sponsor" className="scroll-mt-20 rounded-3xl bg-white/70 p-8">
            <h3 className="font-display text-xl font-semibold text-charcoal">Sponsor a Child</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/75">
              Commit $30 a month to fund one orphan&apos;s housing,
              food, schooling and Islamic studies, and receive regular
              updates on their progress.
            </p>
          </div>
          <div id="volunteer" className="scroll-mt-20 rounded-3xl bg-white/70 p-8">
            <h3 className="font-display text-xl font-semibold text-charcoal">Volunteer</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/75">
              Teachers, healthcare workers, tailors and tradespeople are
              welcome to volunteer time on the ground in Eastern Uganda or
              remotely.
            </p>
          </div>
          <div id="partner" className="scroll-mt-20 rounded-3xl bg-white/70 p-8">
            <h3 className="font-display text-xl font-semibold text-charcoal">Partner With Us</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/75">
              NGOs, mosques, businesses and institutions can partner with
              Musana on funding, in-kind support, or joint programming as we
              expand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
