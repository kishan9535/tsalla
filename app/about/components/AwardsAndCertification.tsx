"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Star, Trophy, CheckCircle, Calendar, ExternalLink } from "lucide-react"

export default function AwardsAndCertification() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const categories = ["All", "Awards", "Certifications", "Recognition"]

  const achievements = [
    {
      type: "Awards",
      title: "Defense Innovation Award 2024",
      organization: "Department of Defense",
      year: "2024",
      description: "Recognized for breakthrough innovations in autonomous defense systems.",
      image: "/placeholder.jpg",
      category: "Awards",
      link: "#",
    },
    {
      type: "Certification",
      title: "ISO 9001:2015 Quality Management",
      organization: "International Organization for Standardization",
      year: "2023",
      description: "Certified quality management system for aerospace manufacturing.",
      image: "/placeholder.jpg",
      category: "Certifications",
      link: "#",
    },
    {
      type: "Awards",
      title: "AI Excellence Award",
      organization: "IEEE Aerospace Society",
      year: "2024",
      description: "Outstanding achievement in AI-powered autonomous navigation systems.",
      image: "/placeholder.jpg",
      category: "Awards",
      link: "#",
    },
    {
      type: "Certification",
      title: "AS9100D Aerospace Standard",
      organization: "SAE International",
      year: "2023",
      description: "Quality management system for aerospace design and manufacturing.",
      image: "/placeholder.jpg",
      category: "Certifications",
      link: "#",
    },
    {
      type: "Recognition",
      title: "Top 50 Most Innovative Companies",
      organization: "Fast Company",
      year: "2024",
      description: "Listed among the most innovative companies in aerospace technology.",
      image: "/placeholder.jpg",
      category: "Recognition",
      link: "#",
    },
    {
      type: "Certification",
      title: "ITAR Registration",
      organization: "U.S. State Department",
      year: "2022",
      description: "International Traffic in Arms Regulations compliance certification.",
      image: "/placeholder.jpg",
      category: "Certifications",
      link: "#",
    },
    {
      type: "Awards",
      title: "Innovation in Robotics Award",
      organization: "Robotics Industries Association",
      year: "2023",
      description: "Excellence in autonomous robotics and AI integration.",
      image: "/placeholder.jpg",
      category: "Awards",
      link: "#",
    },
    {
      type: "Recognition",
      title: "Best Places to Work in Tech",
      organization: "Built In",
      year: "2024",
      description: "Recognized for outstanding workplace culture and employee satisfaction.",
      image: "/placeholder.jpg",
      category: "Recognition",
      link: "#",
    },
  ]

  const filteredAchievements =
    selectedCategory === "All"
      ? achievements
      : achievements.filter((achievement) => achievement.category === selectedCategory)

  const stats = [
    { icon: Trophy, label: "Industry Awards", value: "15+", description: "Major recognitions" },
    { icon: Shield, label: "Certifications", value: "8", description: "Quality & compliance" },
    { icon: Star, label: "Recognition", value: "25+", description: "Media mentions" },
    { icon: CheckCircle, label: "Standards Met", value: "100%", description: "Compliance rate" },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Awards & Certifications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders, regulatory bodies, and prestigious
            organizations worldwide. These achievements reflect our dedication to quality and innovation.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 text-center group"
            >
              <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover:text-blue-300 transition-colors" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 6) * 100}ms` }}
            >
              {/* Achievement Image/Logo */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  {achievement.type === "Awards" && <Trophy className="w-16 h-16 text-white opacity-50" />}
                  {achievement.type === "Certification" && <Shield className="w-16 h-16 text-white opacity-50" />}
                  {achievement.type === "Recognition" && <Star className="w-16 h-16 text-white opacity-50" />}
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {achievement.type}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {achievement.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {achievement.title}
                </h3>

                <p className="text-blue-400 font-semibold mb-3 text-sm">{achievement.organization}</p>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{achievement.description}</p>

                {/* Link */}
                <a
                  href={achievement.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-semibold"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Statement */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-white mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Commitment to Excellence</h3>
            </div>

            <p className="text-lg text-green-100 text-center max-w-4xl mx-auto mb-6">
              Our certifications and awards represent more than recognition—they demonstrate our unwavering commitment
              to quality, safety, and innovation. Every project we undertake meets or exceeds the highest industry
              standards.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">Quality Assurance</h4>
                <p className="text-green-100 text-sm">ISO 9001:2015 certified quality management systems</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">Aerospace Standards</h4>
                <p className="text-green-100 text-sm">AS9100D compliant aerospace manufacturing processes</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">Security Compliance</h4>
                <p className="text-green-100 text-sm">ITAR registered for defense technology development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
