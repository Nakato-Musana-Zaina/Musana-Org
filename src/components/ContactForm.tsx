"use client";

import { useState } from "react";

const REASONS = ["General inquiry", "Donate", "Sponsor a child", "Volunteer", "Partner with us"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-leaf/30 bg-leaf-pale p-8">
        <p className="font-display text-xl font-semibold text-leaf-deep">
          Message received, thank you.
        </p>
        <p className="mt-2 font-body text-sm text-charcoal/75">
          Our team will get back to you within one business day. If it&apos;s
          urgent, call or WhatsApp us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="font-body text-sm font-medium text-charcoal/80">Full name</span>
          <input
            required
            type="text"
            name="name"
            className="mt-1.5 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 font-body text-sm text-charcoal outline-none transition focus:border-leaf"
            placeholder="Jane Nakato"
          />
        </label>
        <label className="block">
          <span className="font-body text-sm font-medium text-charcoal/80">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-1.5 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 font-body text-sm text-charcoal outline-none transition focus:border-leaf"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="font-body text-sm font-medium text-charcoal/80">
          I&apos;m reaching out about
        </span>
        <select
          name="reason"
          defaultValue={REASONS[0]}
          className="mt-1.5 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 font-body text-sm text-charcoal outline-none transition focus:border-leaf"
        >
          {REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="font-body text-sm font-medium text-charcoal/80">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 font-body text-sm text-charcoal outline-none transition focus:border-leaf"
          placeholder="Tell us how you'd like to help, or ask us anything."
        />
      </label>

      <button
        type="submit"
        className="rounded-full bg-leaf px-8 py-3.5 font-body text-sm font-semibold text-cream transition hover:bg-leaf-deep"
      >
        Send Message
      </button>
    </form>
  );
}
