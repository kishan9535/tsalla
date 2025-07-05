"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CommitmentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-48 pb-40 px-6 md:px-12 xl:px-24 bg-black text-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row gap-20 items-start">
        {/* Left Column */}
        <div className="max-w-[600px] flex flex-col justify-start">
          <h2
            className={`text-gray-400 tracking-widest uppercase mb-6 transition-all duration-700 ease-out transform text-2xl font-light font-sans ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            OUR COMMITMENT
          </h2>

          <h3
            className={`text-[32px] md:text-[36px] lg:text-[40px] leading-[1.5] font-light text-gray-300 transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Creating intelligent systems to elevate autonomy and empower unmatched performance on every front.
          </h3>
        </div>

        {/* Right Column */}
        <div className="max-w-[600px] space-y-6 text-base text-gray-400 flex flex-col justify-start pt-[72px]">
          <p
            className={`transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Security no longer waits for strategy. Our systems act in real time, where delay means defeat.
          </p>

          <p
            className={`transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            The future won’t be won with legacy systems or slow thinking. We’re creating platforms that operate beyond human limits that are autonomous, adaptive, and purpose-built for environments where others can’t keep up. We don’t follow tradition. We build what’s necessary.
          </p>

          <Link
            href="/careers"
            className={`group inline-flex items-center font-medium text-lg text-gray-300 transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:bg-gray-300 after:transition-transform after:duration-300 text-2xl">
              Understand What Drives Us Forward
            </span>
            <span className="ml-3 w-8 h-8 flex items-center justify-center rounded-full border border-white text-white group-hover:bg-white group-hover:text-black transition-all duration-200">
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
