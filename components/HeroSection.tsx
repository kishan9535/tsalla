"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <div className="mb-2">UNMANNED.</div>
          <div className="mb-2">UNMATCHED.</div>
          <div>UNCOMPROMISED.</div>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          We Don't Build Drones. We Build Unfair Advantages.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg"
        >
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
    </section>
  )
}
