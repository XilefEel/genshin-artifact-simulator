import { useMemo } from "react";
import "../App.css";

export default function BackgroundEffects() {
  const particles = useMemo(
    () =>
      Array.from({ length: 120 }, (_, id) => ({
        id,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
        size: 1 + Math.random() * 4,
      })),
    [],
  );

  return (
    <>
      {/* Dark clouds */}
      <svg className="absolute inset-0 h-full w-full opacity-30">
        <defs>
          <filter id="darkClouds">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.006"
              numOctaves="3"
              seed="7"
            />
            <feColorMatrix
              type="matrix"
              values="0.6 0 0 0 0
                      0.4 0 0 0 0
                      0.2 0 0 0 0
                        0 0 0 1 0"
            />
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#darkClouds)" />
      </svg>

      {/* Light clouds */}
      <svg className="absolute inset-0 h-full w-full opacity-35">
        <defs>
          <filter id="cloudTexture">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008"
              numOctaves="5"
              seed="2"
            />
            <feColorMatrix
              type="matrix"
              values="  1 0 0 0 0
                      0.8 0 0 0 0
                      0.4 0 0 0 0
                        0 0 0 1 0"
            />
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#cloudTexture)" />
      </svg>

      {/* Star particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="animate-twinkle absolute rounded-full bg-amber-200"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </>
  );
}
