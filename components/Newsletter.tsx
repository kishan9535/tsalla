"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"

export default function Newsletter() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section
      ref={sectionRef}
      className="py-40 px-4 bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white overflow-hidden relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div
            className={`
              inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-75"}
            `}
            style={{ transitionDelay: "0ms" }}
          >
            <Mail className="text-blue-400" size={32} />
          </div>

          <h2
            className={`
              text-sm font-semibold text-gray-400 mb-4 tracking-wider uppercase
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: "150ms" }}
          >
            STAY CONNECTED
          </h2>

          <h3
            className={`
              text-4xl md:text-5xl font-bold mb-6 leading-tight text-white
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: "300ms" }}
          >
            Join the Mission
          </h3>

          <p
            className={`
              text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto
              transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
            style={{ transitionDelay: "450ms" }}
          >
            Get exclusive updates on our latest innovations, mission launches, and breakthrough technologies. Be the
            first to know about Tsalla Aerospace's journey to the future.
          </p>
        </div>

        {/* Newsletter Form */}
        <div
          className={`
            transition-all duration-700 ease-out transform
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
          style={{ transitionDelay: "600ms" }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="
                      w-full px-6 py-4 bg-black/50 backdrop-blur-sm border border-gray-700 
                      rounded-lg text-white placeholder-gray-400 focus:outline-none 
                      focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 
                      transition-all duration-200
                    "
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="
                    px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 
                    text-white font-semibold rounded-lg transition-all duration-200 
                    flex items-center justify-center space-x-2 group
                    disabled:cursor-not-allowed
                  "
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight
                        size={16}
                        className="transform group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="flex items-center justify-center space-x-3 text-green-400">
              <CheckCircle size={24} />
              <span className="text-lg font-semibold">Successfully subscribed!</span>
            </div>
          )}

          <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>

        {/* Features */}
        <div
          className={`
            grid md:grid-cols-3 gap-8 mt-16 text-left
            transition-all duration-700 ease-out transform
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
          style={{ transitionDelay: "750ms" }}
        >
          <div className="text-center">
            <h4 className="font-semibold text-white mb-2">Mission Updates</h4>
            <p className="text-gray-400 text-sm">Latest news on our space missions and achievements</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-white mb-2">Tech Insights</h4>
            <p className="text-gray-400 text-sm">Deep dives into our cutting-edge technologies</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-white mb-2">Career Opportunities</h4>
            <p className="text-gray-400 text-sm">Be first to know about new positions and internships</p>
          </div>
        </div>
      </div>
    </section>
  )
}
