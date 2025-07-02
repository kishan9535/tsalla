// components/HeroSection.tsx
"use client"

import { Button } from "@/components/ui/button" // Assuming this path is correct for your Button component
import Link from "next/link"

export default function HeroSection() {
  return (
    // Changed 'justify-center' to 'justify-start' to align content to the left
    <section className="relative h-screen w-full flex items-center justify-start text-white bg-black overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        // Removed opacity, brightness, and contrast classes as requested
        className="absolute inset-0 w-full h-full object-cover z-0"
        preload="auto"
      >
        <source
          src="https://cdn.sanity.io/files/z5s3oquj/production/958ffbdcaafa889bad0744af57731fae11db69a8.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support the video tag */}
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      {/* Removed 'text-center' and 'mx-auto' to allow full left alignment of the content block itself */}
      {/* Removed 'h-[163px]' to allow content to dictate its natural height */}
      <div className="relative z-20 max-w-[1182px] px-4 flex flex-col items-start justify-center">
        <h1
          className="text-white /* Changed to pure white for better contrast as per image */ /* Using Tailwind class for font weight 400 */ font-farro /* Using Tailwind class for custom font (ensure it's configured) */ text-[70px] /* Specific text size from your code */ leading-[100px] /* Specific line height from your code */ not-italic tracking-tight mb-6 text-left /* Explicitly left-align the text within the h1 container */ border-slate-50 font-normal font-mono "
        >
          {/* Using <br /> for line breaks within a single h1 is semantically appropriate for a multi-line title */}
          UNMANNED.<br />
          UNMATCHED.<br />
          UNCOMPROMISED.
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl text-left italic">
          We Don't Build Drones. We Build Unfair Advantages.
        </p>

        <Button
          asChild
          size="lg"
          className="button-link bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg"
        >
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
    </section>
  )
}
