// components/CommitmentSection.tsx
"use client"; // This directive is necessary for client-side functionality

import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Import the ArrowRight icon
import { useState, useEffect, useRef } from "react"; // Import necessary hooks

export default function CommitmentSection() {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility/animation
  const sectionRef = useRef<HTMLElement>(null); // Ref to attach to the section element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is intersecting (in view)
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optional: disconnect after animation to prevent re-triggering
            // If you want the animation to play every time it comes into view, remove this line.
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    // If the ref exists, observe the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section
      ref={sectionRef} // Attach the ref to the section
      className="py-40 px-4 max-w-7xl mx-auto bg-black text-white overflow-hidden" // overflow-hidden is good for clipping elements before they animate up
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Headline */}
        <div className="flex flex-col">
          <h2
            className={`
              text-sm font-semibold text-gray-400 mb-4 tracking-wider uppercase
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: '0ms' }} // Start immediately
          >
            OUR COMMITMENT
          </h2>
          <h3
            className={`
              text-4xl md:text-5xl font-bold mb-6 leading-tight text-white
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: '150ms' }} // Slightly delayed
          >
            Creating intelligent systems to elevate autonomy and empower<br />
            unmatched performance on every front.
          </h3>
        </div>

        {/* Right Column: Body Text and Link */}
        <div className="space-y-6 text-gray-300 flex flex-col">
          <p
            className={`
              text-lg leading-relaxed
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: '300ms' }} // Further delayed
          >
            Security no longer waits for strategy. Our systems act in real time, where delay means defeat.
          </p>
          <p
            className={`
              text-lg leading-relaxed
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: '450ms' }} // Even further delayed
          >
            The future won't be won with legacy systems or slow thinking. We're creating platforms that operate beyond human limits that are autonomous, adaptive, and purpose-built for environments where others can't keep up. We don't follow tradition. We build what's necessary.
          </p>

          {/* "Understand What Drives Us Forward" Link with white initial colors */}
          <Link
            href="/about/commitment" // Example href, adjust as needed
            // Changed text-blue-400 to text-white. Hover effect for text remains on 'animated-underline'
            className={`
              inline-flex items-center group text-white hover:text-gray-200 transition-colors duration-200 mt-6
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: '600ms' }} // Last to animate
          >
            <span className="font-medium mr-2 text-lg animated-underline">Understand What Drives Us Forward</span>
            {/* Arrow with circular background - changed initial border and text color to white */}
            <span
              className="
                flex items-center justify-center w-8 h-8 rounded-full border border-white text-white
                group-hover:bg-white group-hover:border-white group-hover:text-black
                transition-all duration-200 ease-in-out ml-2
              "
            >
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
