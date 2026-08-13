// components/Carousel.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images from public/images folder
const DUMMY_SLIDES = [
  {
    image: "/images/feeding-children.jpg",
    alt: "Children sharing a meal at Musana's feeding programme",
    title: "Community Feeding Programme",
    description: "Providing nutritious meals to vulnerable children and families",
  },
  {
    image: "/images/mho disability.jpeg",
    alt: "Child with disability participating in Musana's programme",
    title: "Disability Support",
    description: "Providing inclusive support and opportunities for children with disabilities",
  },
  {
    image: "/images/child-water.jpg",
    alt: "Child drinking clean water from a Musana water point",
    title: "Clean Water Access",
    description: "Drilling boreholes and providing clean water to communities",
  },
  {
    image: "/images/mho education.jpeg",
    alt: "Children in Musana's education programme",
    title: "Orphan Care & Education",
    description: "Providing education and care for orphaned children",
  },
  {
    image: "/images/women-sewing.jpg",
    alt: "Women participating in Musana's skills training",
    title: "Women's Empowerment",
    description: "Vocational training and skills development for vulnerable women",
  },
  {
    image: "/images/mho bore.jpeg",
    alt: "Community members at a Musana borehole",
    title: "Community Development",
    description: "Building sustainable infrastructure and community resources",
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
  slides = DUMMY_SLIDES,
  title,
  subtitle,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

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

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, autoPlay, interval, isPaused]);

  if (slides.length === 0) return null;

  // Get visible slides (3 at a time on md+, 1 at a time on mobile)
  const getVisibleSlides = () => {
    const visible: number[] = [];
    for (let i = -1; i <= 1; i++) {
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

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
    touchStartX.current = null;
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="flex items-center justify-center gap-3 px-4 sm:gap-4 md:gap-6">
        {visibleSlides.map((slideIndex, position) => {
          const slide = slides[slideIndex];
          const isMiddle = position === 1;

          return (
            <div
              key={`${slideIndex}-${position}`}
              className={`relative flex-shrink-0 overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ease-in-out ${
                isMiddle
                  ? "aspect-[4/3] w-[88%] sm:aspect-[16/10] sm:w-[70%] md:w-[52%]"
                  : "hidden aspect-[4/5] w-[20%] opacity-60 sm:block md:w-[22%]"
              }`}
            >

              {(title || subtitle) && (
        <div className="mx-auto mb-8 max-w-2xl px-4 text-center sm:mb-10">
          {title && (
            <h2 className="text-balance font-display text-3xl font-semibold text-charcoal sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 font-body text-base leading-relaxed text-charcoal/70 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Slides Container */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes={isMiddle ? "(min-width: 768px) 52vw, 88vw" : "22vw"}
                className="object-cover"
                priority={isMiddle && position === 1}
              />

              {/* Overlay with title/description, shown on the middle slide */}
              {isMiddle && (slide.title || slide.description) && (
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-7">
                    {slide.title && (
                      <h3 className="text-balance font-display text-base font-semibold text-cream sm:text-xl md:text-2xl">
                        {slide.title}
                      </h3>
                    )}
                    {slide.description && (
                      <p className="mt-1 line-clamp-2 max-w-md text-xs text-cream/85 sm:text-sm md:text-base">
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {showControls && slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-ink/60 p-2 text-cream backdrop-blur transition hover:bg-ink/80 sm:left-3 md:left-4 md:p-3"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-ink/60 p-2 text-cream backdrop-blur transition hover:bg-ink/80 sm:right-3 md:right-4 md:p-3"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="mt-4 flex justify-center gap-2 sm:absolute sm:bottom-4 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2 sm:gap-2 md:bottom-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-7 bg-leaf sm:w-8 sm:bg-cream md:w-10"
                  : "w-2 bg-charcoal/25 hover:bg-charcoal/40 sm:bg-cream/50 sm:hover:bg-cream/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}