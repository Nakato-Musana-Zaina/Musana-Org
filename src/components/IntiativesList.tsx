"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const OTHER_INITIATIVES = [
  {
    title: "Food Pack Distribution",
    image: "/images/mho food-pack.jpeg",
    imageAlt: "A family receiving a Musana emergency food pack",
    comment: "A food pack gets a family through the weeks between one harvest and the next, so no one goes hungry while they wait.",
  },
  {
    title: "Borehole Drilling",
    image: "/images/mho bores.jpeg",
    imageAlt: "A newly drilled Musana borehole serving a village",
    comment: "Every borehole we sink turns a multi-kilometre walk into a short one, and turns sickness into clean water for a whole village.",
  },
  {
    title: "Hot Meal Programme",
    image: "/images/mho meal-distribution.jpeg",
    imageAlt: "Children sharing a hot meal at a Musana community feeding event",
    comment: "A hot, shared meal on a hard day tells a child they are seen, not just fed.",
  },
  {
    title: "Masjid Support",
    image: "/images/mho masjid.jpeg",
    imageAlt: "A masjid supported by Musana in Eastern Uganda",
    comment: "We help build and maintain masjids that anchor prayer, learning and community life in the villages we serve.",
  },
  {
    title: "Cataract Surgery",
    image: "/images/mho cataract.jpeg",
    imageAlt: "An elder receiving cataract care through a Musana medical outreach",
    comment: "A short cataract procedure can restore an elder's sight, and their independence along with it.",
  },
  {
    title: "Tree Planting",
    image: "/images/mho tree-planting.jpeg",
    imageAlt: "Community members planting trees with Musana",
    comment: "We plant trees for shade, soil and a small climate legacy in the communities we serve, one seedling at a time.",
  },
  {
    title: "Qur'an Distribution",
    image: "/images/mho quaran.jpeg",
    imageAlt: "Children receiving copies of the Qur'an from Musana",
    comment: "A personal copy of the Qur'an turns memorisation from something borrowed into something owned.",
  },
  {
    title: "Zakat Distribution",
    image: "/images/mho zakah-distribution.jpeg",
    imageAlt: "A Musana Zakat distribution event",
    comment: "We channel Zakat directly to families who qualify, verified and delivered with the dignity the obligation deserves.",
  },
  {
    title: "Wheelchair Distribution",
    image: "/images/mho wheelchairs.jpeg",
    imageAlt: "A child receiving a wheelchair through Musana's disability support programme",
    comment: "A wheelchair can be the difference between a child staying home and a child going to school.",
  },
  {
    title: "Children's Gift Distribution",
    image: "/images/mho-kid-gifts.jpeg",
    imageAlt: "Children receiving gifts from Musana during a celebration",
    comment: "During Eid and other celebrations, we make sure every child in our care unwraps something that is simply, joyfully theirs.",
  },
  {
    title: "Qurbani (Kurban) Distribution",
    image: "/images/mho qurbani.jpeg",
    imageAlt: "Meat from Musana's Qurbani distribution being prepared for families",
    comment: "Every Eid al-Adha, we carry out Qurbani on behalf of our donors and distribute the meat to families who otherwise wouldn't taste it that season.",
  },
  {
    title: "Education Support",
    image: "/images/mho education.jpeg",
    imageAlt: "Musana volunteers distributing prepared support to children in need",
    comment: "Beyond our regular education programme, we run targeted education support to children during Ramadan, disasters and other moments when a community or child needs it.",
  },
];

const ITEMS_PER_PAGE = 6;

export default function InitiativesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(OTHER_INITIATIVES.length / ITEMS_PER_PAGE);

  const paginatedInitiatives = OTHER_INITIATIVES.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("initiatives");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="initiatives" className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-leaf-deep">
            More Ways We Show Up
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
            Our Initiatives
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-charcoal/80">
            Alongside our three core programmes, these are the smaller,
            steady projects that fill in the gaps our communities tell
            us matter most.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedInitiatives.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="overflow-hidden rounded-3xl border border-charcoal/10 bg-white/80 shadow-sm transition hover:shadow-md">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">
                    {item.comment}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-3">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-full border border-charcoal/20 bg-white px-5 py-2.5 font-body text-sm font-semibold text-charcoal transition hover:bg-leaf-pale disabled:cursor-not-allowed disabled:opacity-40"
            >
              &larr; Previous
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-body text-sm font-semibold transition ${
                    currentPage === page
                      ? "bg-leaf text-cream"
                      : "border border-charcoal/20 bg-white text-charcoal hover:bg-leaf-pale"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-full border border-charcoal/20 bg-white px-5 py-2.5 font-body text-sm font-semibold text-charcoal transition hover:bg-leaf-pale disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}