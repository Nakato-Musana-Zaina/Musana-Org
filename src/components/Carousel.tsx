// components/Carousel.tsx
"use client";

import { useState, useEffect } from "react";
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
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export default function Carousel({
  slides = DUMMY_SLIDES,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get visible slides (3 at a time)
  const getVisibleSlides = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = slides.length + index;
      if (index >= slides.length) index = index - slides.length;
      visible.push(index);
    }
    return visible;
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  if (slides.length === 0) {
    return null;
  }

  const visibleSlides = getVisibleSlides();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Slides Container */}
      <div className="flex items-center justify-center gap-4 px-4 md:gap-6">
        {visibleSlides.map((slideIndex, position) => {
          const slide = slides[slideIndex];
          const isMiddle = position === 1;
          
          return (
            <div
              key={`${slideIndex}-${position}`}
              className={`relative transition-all duration-500 ease-in-out ${
                isMiddle 
                  ? "w-[60%] md:w-[50%] aspect-[16/9]" 
                  : "w-[30%] md:w-[25%] aspect-[16/11] opacity-70"
              } flex-shrink-0 overflow-hidden rounded-2xl shadow-xl`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes={isMiddle ? "50vw" : "25vw"}
                className="object-cover"
              />
              
              {/* Overlay with title/description for middle slide only */}
              {isMiddle && (slide.title || slide.description) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                    {slide.title && (
                      <h3 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
                        {slide.title}
                      </h3>
                    )}
                    {slide.description && (
                      <p className="mt-1 text-xs text-white/90 md:text-sm lg:text-base">
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
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/75 md:left-4 md:p-3"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/75 md:right-4 md:p-3"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 md:h-2.5 md:w-2.5 ${
                index === currentIndex
                  ? "w-8 bg-white md:w-10"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}