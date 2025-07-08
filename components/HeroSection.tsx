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
          top: "200px",
          left: "34px",
        }}
      >
        {/* MAIN LINE */}
        <h1 className="font-bold text-[36px] md:text-[56px] lg:text-[70px] leading-[1.1] mb-5 font-farro tracking-tight">
  UNMANNED.<br />
  UNMATCHED.<br />
  UNCOMPROMISED.
</h1>

        {/* SECOND LINE */}
        <p className="text-base sm:text-sm sm:text-base md:text-lg lg:text-xl mb-1 font-farro text-white max-w-[90%]">
          We Don’t Build Drones. We Build Unfair Advantages.
        </p>

        {/* THIRD LINE */}
        <Link
          href="/about"
          className="group inline-flex items-center text-white text-[10px] sm:text-xs md:text-sm font-sans opacity-100"
        >
          <span className="relative animated-underline mr-2">
            Learn More
          </span>
          <span
            className="
              flex items-center justify-center w-4 h-4 rounded-full border border-white text-white
              group-hover:bg-white group-hover:border-white group-hover:text-black
              transition-all duration-200 ease-in-out
            "
          >
            <ArrowRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform duration-200"
            />
          </span>
        </Link>
      </div>
    </section>
  )
}
