"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import NewsroomCard from "./ui/NewsroomCard"
import Link from "next/link"
import { ArrowRight, Mail, CheckCircle, Shield, Users, Bell } from "lucide-react"

const Newsletter: React.FC = () => {
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

  return (
    <section ref={sectionRef} className="bg-[#eaeaea] py-16 lg:py-24">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
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

        {/* Newsletter Subscription Section */}
        <div className="bg-gradient-to-br from-blue-900 via-black to-purple-900 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.3),transparent_50%)]" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="mb-8">
                <Mail className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Ahead of the <span className="text-blue-400">Mission</span>
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Join our exclusive community of defense professionals and aerospace innovators. Get insider access to
                  cutting-edge technology updates, mission reports, and industry insights.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  className={`flex items-start space-x-4 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <div className="flex-shrink-0 p-2 bg-blue-600/20 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Exclusive Updates</h4>
                    <p className="text-gray-400 text-sm">First access to new technology releases and mission reports</p>
                  </div>
                </div>

                <div
                  className={`flex items-start space-x-4 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <div className="flex-shrink-0 p-2 bg-blue-600/20 rounded-lg">
                    <Bell className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Industry Insights</h4>
                    <p className="text-gray-400 text-sm">
                      Expert analysis on autonomous systems and defense technology
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start space-x-4 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <div className="flex-shrink-0 p-2 bg-blue-600/20 rounded-lg">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Community Access</h4>
                    <p className="text-gray-400 text-sm">Connect with aerospace professionals and industry leaders</p>
                  </div>
                </div>

                <div
                  className={`flex items-start space-x-4 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <div className="flex-shrink-0 p-2 bg-blue-600/20 rounded-lg">
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Early Access</h4>
                    <p className="text-gray-400 text-sm">Be first to know about product launches and partnerships</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {isSubmitted ? (
                <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-white mb-4">Welcome to the Mission!</h4>
                  <p className="text-gray-300 mb-6">
                    You've successfully joined our exclusive community. Check your inbox for a welcome message with your
                    first insider update.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Subscribe another email →
                  </button>
                </div>
              ) : (
                <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-300 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="newsletter-email"
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
              )}
            </div>
          </div>
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
