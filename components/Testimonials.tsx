"use client"

import { useState, useEffect, useRef } from "react"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Chief Technology Officer",
    company: "AeroSpace Dynamics",
    content:
      "Tsalla Aerospace's innovative approach to unmanned systems has revolutionized our mission capabilities. Their AI pilot technology is truly game-changing.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Colonel James Mitchell",
    title: "Program Director",
    company: "Defense Innovation Unit",
    content:
      "The precision and reliability of Tsalla's space systems have exceeded our expectations. Their commitment to excellence is evident in every project.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    title: "Lead Engineer",
    company: "Orbital Technologies",
    content:
      "Working with Tsalla Aerospace has been exceptional. Their technical expertise and innovative solutions have helped us achieve breakthrough results.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-40 px-4 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`
              text-sm font-semibold text-gray-400 mb-4 tracking-wider uppercase
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: "0ms" }}
          >
            TESTIMONIALS
          </h2>
          <h3
            className={`
              text-4xl md:text-5xl font-bold mb-6 leading-tight text-white
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: "150ms" }}
          >
            Trusted by Industry Leaders
          </h3>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className={`
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: "300ms" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`
                  absolute inset-0 transition-all duration-500 ease-in-out
                  ${index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
                `}
                style={{
                  display: index === currentIndex ? "block" : "none",
                }}
              >
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800">
                  <Quote className="text-blue-400 mb-6" size={48} />

                  <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-100 mb-8">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
                      />
                      <div>
                        <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.title}</p>
                        <p className="text-blue-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index === currentIndex ? "bg-blue-400 scale-125" : "bg-gray-600 hover:bg-gray-500"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
