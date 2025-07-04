"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin, Twitter, Mail, Award, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"

export default function Founders() {
  const [isVisible, setIsVisible] = useState(false)
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

  const founders = [
    {
      name: "Dr. Sarah Chen",
      title: "Co-Founder & CEO",
      image: "/placeholder-user.jpg",
      bio: "Former NASA engineer with 15+ years in autonomous systems. Led the development of Mars rover navigation systems and holds 12 patents in AI-driven aerospace technology.",
      education: "PhD Aerospace Engineering, MIT",
      experience: "NASA, SpaceX, Boeing",
      achievements: ["NASA Exceptional Achievement Medal", "IEEE Fellow", "Forbes 40 Under 40"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@tsallaaerospace.com",
      },
    },
    {
      name: "Marcus Rodriguez",
      title: "Co-Founder & CTO",
      image: "/placeholder-user.jpg",
      bio: "AI researcher and former DARPA program manager. Pioneer in machine learning applications for defense systems with expertise in real-time autonomous decision making.",
      education: "PhD Computer Science, Stanford",
      experience: "DARPA, Google DeepMind, Lockheed Martin",
      achievements: ["DARPA Director's Award", "ACM Fellow", "MIT Technology Review Innovator"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "marcus@tsallaaerospace.com",
      },
    },
    {
      name: "Dr. James Thompson",
      title: "Co-Founder & Chief Scientist",
      image: "/placeholder-user.jpg",
      bio: "Quantum computing expert and former Bell Labs researcher. Specializes in advanced algorithms for autonomous systems and next-generation computing architectures.",
      education: "PhD Physics, Caltech",
      experience: "Bell Labs, IBM Research, Intel",
      achievements: ["National Medal of Science", "Turing Award Nominee", "Royal Society Fellow"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@tsallaaerospace.com",
      },
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Meet Our Founders</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visionary leaders with decades of experience in aerospace, AI, and defense technology, united by a shared
            mission to revolutionize autonomous systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Profile Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {founder.name}
                </h3>
                <p className="text-blue-400 font-semibold mb-4">{founder.title}</p>

                <p className="text-gray-300 mb-6 leading-relaxed">{founder.bio}</p>

                {/* Education & Experience */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <GraduationCap className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Education</div>
                      <div className="text-gray-400 text-sm">{founder.education}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Briefcase className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Experience</div>
                      <div className="text-gray-400 text-sm">{founder.experience}</div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-white font-medium">Key Achievements</span>
                  </div>
                  <ul className="space-y-1">
                    {founder.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-400 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href={founder.social.linkedin}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
                  </a>
                  <a
                    href={founder.social.twitter}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5 text-gray-300 hover:text-white" />
                  </a>
                  <a
                    href={`mailto:${founder.social.email}`}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founders Quote */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4">
              "Our vision is simple: create autonomous systems so advanced, they don't just complete missions—they
              redefine what's possible."
            </blockquote>
            <cite className="text-blue-200 text-lg">— The Founding Team</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
