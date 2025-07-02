"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const dummyImages = [
  "https://placehold.co/600x400/333333/FFFFFF?text=Innovation+1",
  "https://placehold.co/400x300/444444/FFFFFF?text=Innovation+2",
  "https://placehold.co/500x350/555555/FFFFFF?text=Innovation+3",
  "https://placehold.co/700x500/666666/FFFFFF?text=Innovation+4",
  "https://placehold.co/450x250/777777/FFFFFF?text=Innovation+5",
  "https://placehold.co/550x380/888888/FFFFFF?text=Innovation+6",
  "https://placehold.co/650x420/999999/FFFFFF?text=Innovation+7",
  "https://placehold.co/350x250/AAAAAA/FFFFFF?text=Innovation+8",
];

export default function CareersPage() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes sliding {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-100%)); }
      }
      @keyframes slidingReverse {
        0% { transform: translateX(calc(-100%)); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <main className="bg-black text-white font-[Farro]">
      <section className="pt-24 pb-12 text-center px-4">
  <h1 className="text-4xl md:text-6xl mb-4 font-normal font-farro">
    Launch Ideas That Really Take Off.
  </h1>
  <p className="text-gray-400 text-lg mb-6">
    Design, build, and launch the next generation of autonomous flight
  </p>
  <Link
    href="#open-roles"
    className="inline-flex items-center text-sm font-medium uppercase tracking-wide text-gray-300 hover:text-white group"
  >
    <span className="relative z-10">View Open Roles</span>
    <span className="ml-2 w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
      &rarr;
    </span>
  </Link>
</section>

{/* Auto-Scrolling Image Section - shifted slightly higher */}
<section className="overflow-hidden relative w-full pt-0 pb-8 -mt-4">
  <div
    className="flex gap-2 animate-[sliding_40s_linear_infinite]"
    style={{ width: `${dummyImages.length * 300}px` }}
  >
    {[...dummyImages, ...dummyImages].map((src, index) => (
      <div key={index} className="relative w-[300px] h-[200px] flex-shrink-0">
        <Image src={src} alt={`Innovation ${index + 1}`} fill className="object-cover" />
      </div>
    ))}
  </div>
</section>

      {/* Reverse Auto-Scrolling Image Section */}
      <section className="overflow-hidden relative w-full pb-16">
        <div
          className="flex gap-2 animate-[slidingReverse_40s_linear_infinite]"
          style={{ width: `${dummyImages.length * 300}px` }}
        >
          {[...dummyImages, ...dummyImages].map((src, index) => (
            <div key={index} className="relative w-[300px] h-[200px] flex-shrink-0">
              <Image src={src} alt={`Innovation Reverse ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Minds & Makers Section */}
      <section className="grid md:grid-cols-2 gap-8 items-start px-4 pb-24 max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">The Minds & Makers</h2>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-6">
            Tsalla Aerospace is where visionaries and veterans converge to reimagine what’s possible in flight and
            defense. We prototype by sunrise, refine by midnight, and never settle for ordinary. Shaped by lived
            experience and fearless innovation, our team transforms challenges into breakthroughs.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center text-sm text-gray-300 underline underline-offset-4 hover:text-white group"
          >
            <span className="relative z-10">Discover the minds and makers turning tomorrow’s ideas into today’s capabilities.</span>
            <span className="ml-2 w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
