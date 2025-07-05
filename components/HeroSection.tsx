"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden text-white">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://cdn.sanity.io/files/z5s3oquj/production/958ffbdcaafa889bad0744af57731fae11db69a8.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content block */}
      <div
        className="absolute z-20 px-4 w-full max-w-[1182px] flex flex-col items-start justify-start"
        style={{
          top: "137px",
          left: "34px",
        }}
      >
        <h1
          className="text-white font-mono tracking-tight font-normal mb-4
          text-[50px] sm:text-[50px] md:text-[65px] lg:text-[80px]
          leading-[60px] sm:leading-[70px] md:leading-[80px] lg:leading-[100px]"
        >
          UNMANNED.<br />
          UNMATCHED.<br />
          UNCOMPROMISED.
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 font-farro text-white max-w-[90%]">
          We Don’t Build Drones. We Build Unfair Advantages.
        </p>

        {/* Animated Learn More Link with Circular Arrow */}
        <Link
          href="/about"
          className="group inline-flex items-center text-white text-base sm:text-lg md:text-xl font-medium"
        >
          <span className="relative animated-underline mr-2">Learn More</span> {/* Added mr-2 for spacing */}
          <span
            className="
              flex items-center justify-center w-8 h-8 rounded-full border border-white text-white
              group-hover:bg-white group-hover:border-white group-hover:text-black
              transition-all duration-200 ease-in-out
            "
          >
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </Link>
      </div>
    </section>
  )
}
