# Musana — The Humanitarian Organisation Website

Built with Next.js 14 (App Router), TypeScript and Tailwind CSS v4.

## Pages
- `/` — Home (hero, why we're needed, three programme pillars, expansion teaser, final CTA)
- `/about` — Mission, values, story
- `/programs` — Deep dive on Orphan Care, Women's Empowerment, Community Development
- `/impact` — Reach in Eastern Uganda, stats, testimonial, Northern/Western expansion plan
- `/contact` — Donate info, sponsor/volunteer/partner, contact form

## Getting started
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Before launch, please update
- Real bank / mobile money details in `src/app/contact/page.tsx`
- Real email, phone, address in `src/components/Footer.tsx` and `src/app/contact/page.tsx`
- Verify/replace the illustrative impact numbers in `src/app/page.tsx` and `src/app/impact/page.tsx` with your real figures
- Wire the contact form (`src/components/ContactForm.tsx`) to an email service or backend — it currently only shows a success state
- Add your real social links in `src/components/Footer.tsx`
- Swap in more photos as you gather them (currently 4 images in `public/images`)

## Design notes
- Brand colours: ink black, sun gold, leaf green (secondary CTA), warm cream background
- Display font: Fraunces (warm serif) · Body: Work Sans · Stats/labels: IBM Plex Mono
- Signature motif: a radiating sunburst (`src/components/Sunburst.tsx`) echoing "Musana — light from the sun" and the crescent in your logo
