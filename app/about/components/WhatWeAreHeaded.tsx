"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function WhatWeAreHeaded() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
            WHERE WE’RE HEADED
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Shaping Tomorrow Through Innovation And Intent.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-8">
            We envision a world where intelligent aerial systems transcend today’s limitations — autonomously navigating complex environments, connecting communities, supporting critical missions, and pushing the boundaries of what flight can achieve. Our journey is toward a sky that thinks, adapts, and empowers humanity in ways once thought impossible.
          </p>

          {/* CTA */}
          <a
            href="/solutions"
            className="inline-flex items-center text-gray-100 font-semibold hover:underline group"
          >
            Discover Our Range Of Cutting-Edge Solutions
            <span className="ml-2 inline-block bg-gray-600 group-hover:bg-white text-white group-hover:text-black rounded-full p-1 transition">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <Image
            src="https://st4.depositphotos.com/3141125/22094/i/600/depositphotos_220949866-stock-photo-dji-mavic-pro-flying-dark.jpg"
            alt="Drone future"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg object-contain shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
