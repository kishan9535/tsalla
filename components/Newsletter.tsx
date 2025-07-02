"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, CheckCircle, ArrowRight, Shield, Zap, Users, Globe } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Exclusive Updates",
    description: "First access to new technology releases and mission reports",
  },
  {
    icon: Zap,
    title: "Industry Insights",
    description: "Expert analysis on autonomous systems and defense technology",
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Connect with aerospace professionals and industry leaders",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International defense trends and emerging technologies",
  },
]

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [error, setError] = useState("")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")
  }

  if (isSubmitted) {
    return (
      <section
        ref={sectionRef}
        className="py-24 bg-gradient-to-br from-blue-900 via-black to-purple-900 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-12">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to the Mission!</h2>
            <p className="text-xl text-gray-300 mb-8">
              You've successfully joined our exclusive community. Check your inbox for a welcome message with your first
              insider update.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Subscribe another email →
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-900 via-black to-purple-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.3),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="mb-8">
              <Mail className="w-12 h-12 text-blue-400 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Ahead of the <span className="text-blue-400">Mission</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join our exclusive community of defense professionals and aerospace innovators. Get insider access to
                cutting-edge technology updates, mission reports, and industry insights.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex-shrink-0 p-2 bg-blue-600/20 rounded-lg">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                  {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Joining Mission...
                    </>
                  ) : (
                    <>
                      Join the Mission
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By subscribing, you agree to receive updates about Tsalla Aerospace technologies and missions.
                  Unsubscribe anytime. We respect your privacy and never share your information.
                </p>
              </form>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="flex items-center justify-center space-x-8 text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs">Secure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs">No Spam</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span className="text-xs">5K+ Members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
