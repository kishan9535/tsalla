"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Cpu, Zap, Shield, Target, Satellite, Brain } from "lucide-react"

const techTools = [
  {
    icon: Brain,
    title: "AI Neural Networks",
    description: "Advanced machine learning algorithms that adapt and evolve in real-time battlefield conditions.",
    features: ["Real-time Learning", "Pattern Recognition", "Predictive Analysis"],
  },
  {
    icon: Satellite,
    title: "Quantum Communications",
    description: "Unhackable communication systems using quantum entanglement for secure data transmission.",
    features: ["Quantum Encryption", "Instant Transmission", "Zero Latency"],
  },
  {
    icon: Shield,
    title: "Adaptive Defense Systems",
    description: "Self-modifying protection protocols that counter emerging threats automatically.",
    features: ["Threat Detection", "Auto-Response", "System Hardening"],
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Multi-spectrum targeting systems with sub-millimeter accuracy across vast distances.",
    features: ["Multi-Spectrum Analysis", "Weather Compensation", "Moving Target Tracking"],
  },
  {
    icon: Zap,
    title: "Energy Management",
    description: "Revolutionary power systems that optimize energy distribution across all mission components.",
    features: ["Dynamic Load Balancing", "Emergency Reserves", "Solar Integration"],
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Distributed processing power that brings computation directly to the point of action.",
    features: ["Local Processing", "Reduced Latency", "Offline Capability"],
  },
]

export default function TechTools() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced <span className="text-blue-400">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge tools and technologies that power our autonomous systems, delivering unprecedented capabilities
            in the field.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techTools.map((tool, index) => (
            <div
              key={index}
              className={`group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <tool.icon className="w-8 h-8 text-blue-400" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {tool.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">{tool.description}</p>

              <div className="space-y-2">
                {tool.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how our advanced technology stack can revolutionize your operations and provide the tactical
              advantage you need.
            </p>
            <Link
              href="/hardware"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold group"
            >
              Explore Our Systems
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
