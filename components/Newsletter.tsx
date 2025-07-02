"use client"

import type React from "react"
import NewsroomCard from "./ui/NewsroomCard"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const Newsletter: React.FC = () => {
  return (
    <section className="bg-[#eaeaea] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1440px]">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Latest News & Updates</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed about our latest innovations, partnerships, and breakthrough technologies in aerospace and
            defense.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <NewsroomCard
            imageUrl="https://framerusercontent.com/images/7ePXW4ItcJtSlhsJhBr2gUK63ic.png?scale-down-to=512"
            publicationDate="6/18/2025"
            title="Tsalla Aerospace and Rheinmetall Partner to Design and Manufacture Advanced Propulsion Systems for Next-Gen Aircraft"
            readMoreLink="/news/propulsion-partnership"
          />
          <NewsroomCard
            imageUrl="https://cdn.sanity.io/images/z5s3oquj/production/987e977c745ccff57f4f705ca6335eb3ddf0dc5f-11648x8736.jpg?auto=format&fit=max&w=1200&q=90"
            publicationDate="6/17/2025"
            title="Riverside Research and Tsalla Aerospace Collaborate to Cyber Harden Critical Defense Capabilities"
            readMoreLink="/news/cyber-defense-collaboration"
          />
          <NewsroomCard
            imageUrl="https://cdn.sanity.io/images/z5s3oquj/production/8ba9aa42b68cb9b70f07dfe1583f4d0ed4477dd1-11648x8736.jpg?auto=format&fit=max&w=1200&q=90"
            publicationDate="5/29/2025"
            title="Tsalla Aerospace Unveils Revolutionary AI Pilot System for Autonomous Flight Operations"
            readMoreLink="/news/ai-pilot-system"
          />
        </div>

        {/* More in Newsroom Link */}
        <div className="text-center mt-16">
          <Link
            href="/newsroom"
            className="inline-flex items-center text-black hover:text-blue-600 transition-colors duration-200 no-underline group text-base font-medium"
          >
            More in Newsroom
            <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
