type SunburstProps = {
  className?: string;
  rays?: number;
  spin?: boolean;
};

/**
 * The signature mark of the site: a radiating sunburst that echoes the
 * crescent + dome silhouette in the Musana logo and the meaning of the
 * organisation's name — "light from the sun". Used sparingly as section
 * dividers and behind key numbers.
 */
export default function Sunburst({
  className = "",
  rays = 24,
  spin = false,
}: SunburstProps) {
  const items = Array.from({ length: rays });
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} ${spin ? "animate-rotate-slow" : ""}`}
      aria-hidden="true"
    >
      <g transform="translate(100,100)">
        {items.map((_, i) => {
          const angle = (360 / rays) * i;
          const long = i % 2 === 0;
          return (
            <line
              key={i}
              x1={0}
              y1={long ? -58 : -70}
              x2={0}
              y2={-96}
              transform={`rotate(${angle})`}
              stroke="currentColor"
              strokeWidth={long ? 3 : 1.5}
              strokeLinecap="round"
              opacity={long ? 0.9 : 0.45}
            />
          );
        })}
        <circle r="46" fill="currentColor" opacity="0.95" />
      </g>
    </svg>
  );
}
