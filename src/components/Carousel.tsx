"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const INITIATIVES = [
  {
    image: "/images/mho food-pack.jpeg",
    alt: "A family receiving a Musana emergency food pack",
    title: "Food Pack Distribution",
    description: "A food pack gets a family through the weeks between one harvest and the next, so no one goes hungry while they wait.",
  },
  {
    image: "/images/mho bores.jpeg",
    alt: "A newly drilled Musana borehole serving a village",
    title: "Borehole Drilling",
    description: "Every borehole we sink turns a multi-kilometre walk into a short one, and turns sickness into clean water for a whole village.",
  },
  {
    image: "/images/mho meal-distribution.jpeg",
    alt: "Children sharing a hot meal at a Musana community feeding event",
    title: "Hot Meal Programme",
    description: "A hot, shared meal on a hard day tells a child they are seen, not just fed.",
  },
  {
    image: "/images/mho masjid.jpeg",
    alt: "A masjid supported by Musana in Eastern Uganda",
    title: "Masjid Support",
    description: "We help build and maintain masjids that anchor prayer, learning and community life in the villages we serve.",
  },
  {
    image: "/images/mho cataract.jpeg",
    alt: "An elder receiving cataract care through a Musana medical outreach",
    title: "Cataract Surgery",
    description: "A short cataract procedure can restore an elder's sight, and their independence along with it.",
  },
  {
    image: "/images/mho tree-planting.jpeg",
    alt: "Community members planting trees with Musana",
    title: "Tree Planting",
    description: "We plant trees for shade, soil and a small climate legacy in the communities we serve, one seedling at a time.",
  },
  {
    image: "/images/mho quaran.jpeg",
    alt: "Children receiving copies of the Qur'an from Musana",
    title: "Qur'an Distribution",
    description: "A personal copy of the Qur'an turns memorisation from something borrowed into something owned.",
  },
  {
    image: "/images/mho zakah-distribution.jpeg",
    alt: "A Musana Zakat distribution event",
    title: "Zakat Distribution",
    description: "We channel Zakat directly to families who qualify, verified and delivered with the dignity the obligation deserves.",
  },
  {
    image: "/images/mho wheelchairs.jpeg",
    alt: "A child receiving a wheelchair through Musana's disability support programme",
    title: "Wheelchair Distribution",
    description: "A wheelchair can be the difference between a child staying home and a child going to school.",
  },
  {
    image: "/images/mho-kid-gifts.jpeg",
    alt: "Children receiving gifts from Musana during a celebration",
    title: "Children's Gift Distribution",
    description: "During Eid and other celebrations, we make sure every child in our care unwraps something that is simply, joyfully theirs.",
  },
  {
    image: "/images/mho qurbani.jpeg",
    alt: "Meat from Musana's Qurbani distribution being prepared for families",
    title: "Qurbani Distribution",
    description: "Every Eid al-Adha, we carry out Qurbani on behalf of our donors and distribute the meat to families who otherwise wouldn't taste it that season.",
  },
  {
    image: "/images/mho education.jpeg",
    alt: "Musana volunteers distributing prepared support to children in need",
    title: "Education Support",
    description: "Beyond our regular education programme, we run targeted education support to children during Ramadan, disasters and other moments when a community or child needs it.",
  },
];

interface CarouselSlide {
  image: string;
  alt: string;
  title?: string;
  description?: string;
}

interface CarouselProps {
  slides?: CarouselSlide[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export default function Carousel({
  slides = INITIATIVES,
  title,
  subtitle,
  autoPlay = true,
  interval = 4000,
  showControls = true,
  showIndicators = true,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1); // Safe default
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Safely detect window size only on the client
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1024) setSlidesToShow(3);
        else if (window.innerWidth >= 640) setSlidesToShow(2);
        else setSlidesToShow(1);
      }
    };
    
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    window.setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevious = () => {
    goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  // Auto-play logic
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const timer = setInterval(() => {
      goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, isPaused, slides.length]);

  if (slides.length === 0) return null;

  const getVisibleSlides = () => {
    const visible: number[] = [];
    const offset = Math.floor(slidesToShow / 2);
    
    for (let i = -offset; i <= offset; i++) {
      let index = currentIndex + i;
      if (index < 0) index = slides.length + index;
      if (index >= slides.length) index = index - slides.length;
      visible.push(index);
    }
    return visible;
  };

  const visibleSlides = getVisibleSlides();

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goToNext();
      else goToPrevious();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Header Section */}
      {(title || subtitle) && (
        <div className="mx-auto mb-8 max-w-3xl px-4 text-center sm:mb-12 lg:mb-16">
          {title && (
            <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-charcoal/70 sm:text-lg lg:text-xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Track */}
        <div className="flex items-center justify-center gap-4 px-4 sm:gap-6 lg:gap-8">
          {visibleSlides.map((slideIndex, position) => {
            const slide = slides[slideIndex];
            const offset = Math.floor(slidesToShow / 2);
            const isCenter = position === offset;

            return (
              <div
                key={`${slideIndex}-${position}`}
                className={`relative flex-shrink-0 overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-out ${
                  isCenter
                    ? "w-full sm:w-[75%] lg:w-[45%] scale-100 opacity-100 z-10"
                    : "hidden sm:block sm:w-[35%] lg:w-[25%] scale-95 opacity-60 z-0"
                }`}
                style={{
                  transform: isCenter ? 'scale(1)' : 'scale(0.95)',
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes={isCenter ? "(min-width: 1024px) 45vw, (min-width: 640px) 75vw, 100vw" : "25vw"}
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority={isCenter}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-90" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 lg:p-6">
                    {slide.title && (
                      <h3 className="font-display text-lg font-bold text-cream sm:text-xl lg:text-2xl">
                        {slide.title}
                      </h3>
                    )}
                    {slide.description && (
                      <p className="mt-2 line-clamp-2 text-sm text-cream/85 sm:text-base lg:text-lg">
                        {slide.description}
                      </p>
                    )}
                    
                    {/* Decorative Element */}
                    <div className="mt-3 h-0.5 w-12 bg-sun sm:w-16" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        {showControls && slides.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-charcoal shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-leaf hover:text-cream hover:scale-110 sm:left-4 sm:p-3 lg:p-4"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-charcoal shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-leaf hover:text-cream hover:scale-110 sm:right-4 sm:p-3 lg:p-4"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="mt-6 flex justify-center gap-2 sm:mt-8 lg:mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-leaf sm:w-10"
                  : "w-2 bg-charcoal/20 hover:bg-charcoal/40 sm:bg-charcoal/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && (
        <div className="mx-auto mt-6 h-0.5 w-full max-w-3xl overflow-hidden rounded-full bg-charcoal/10 sm:mt-8">
          <div
            key={currentIndex}
            className="h-full bg-leaf"
            style={{
              width: '100%',
              animation: `progress ${interval}ms linear`,
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}