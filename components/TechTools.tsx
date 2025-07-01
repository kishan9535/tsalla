"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function TechTools() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.3,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-40 px-4 max-w-7xl mx-auto bg-black text-white overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Headline */}
        <div className="flex flex-col">
          <h2
            className={`
              text-sm font-semibold text-gray-400 mb-4 tracking-wider uppercase
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: "0ms" }}
          >
            OUR TECHNOLOGY
          </h2>
          <h3
            className={`
              text-4xl md:text-5xl font-bold mb-6 leading-tight text-white
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: "150ms" }}
          >
            Empowering innovation with cutting-edge tools and platforms for unmatched performance.
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
            style={{ transitionDelay: "300ms" }}
          >
            Our pursuit of innovation is fueled by a robust ecosystem of advanced tools, proprietary software, and
            state-of-the-art hardware. We select and develop technologies that push boundaries, ensuring agility and
            precision in every project.
          </p>
          <p
            className={`
              text-lg leading-relaxed
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: "450ms" }}
          >
            We believe in building from the ground up, leveraging modern frameworks and custom solutions to tackle
            complex challenges. Our integrated approach ensures that every tool in our arsenal contributes to creating a
            decisive advantage.
          </p>

          <Link
            href="/hardware"
            className={`
              inline-flex items-center group text-white hover:text-gray-200 transition-colors duration-200 mt-6
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: "600ms" }}
          >
            <span className="font-medium mr-2 text-lg animated-underline">Explore Our Tech Stack</span>
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
  )
}
