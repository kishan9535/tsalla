"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, Plus, ArrowRight } from "lucide-react"

const megaMenuData = {
  "/about": {
    title: "ABOUT",
    description:
      "Learn about Tsalla Aerospace's mission to revolutionize autonomous systems and create unfair advantages in modern warfare and exploration.",
    links: [
      { name: "Our Mission", href: "/about#mission", description: "Building the future of autonomous systems" },
      { name: "Leadership", href: "/leadership", description: "Meet our visionary team" },
      { name: "Company Culture", href: "/about#culture", description: "Innovation without compromise" },
      { name: "History", href: "/about#history", description: "Our journey to excellence" },
    ],
  },
  "/roadrunner": {
    title: "AI PILOT",
    description:
      "Revolutionary Roadrunner AI system that thinks, adapts, and executes missions with unprecedented autonomy. Real-time decision making where delay means defeat.",
    links: [
      { name: "Roadrunner Core", href: "/roadrunner", description: "Advanced AI pilot system" },
      {
        name: "Autonomous Decision Making",
        href: "/roadrunner#decisions",
        description: "Real-time tactical intelligence",
      },
      { name: "Adaptive Learning", href: "/roadrunner#learning", description: "Continuous mission improvement" },
      { name: "Mission Execution", href: "/roadrunner#execution", description: "Flawless operation coordination" },
    ],
  },
  "/hardware": {
    title: "SPACE SYSTEMS",
    description:
      "Advanced unmanned systems engineered for superiority in the field. Every component designed for reliability, performance, and tactical advantage.",
    links: [
      { name: "Phantom X1", href: "/hardware#phantom", description: "Advanced reconnaissance drone" },
      { name: "Sentinel Pro", href: "/hardware#sentinel", description: "Long-range surveillance system" },
      { name: "Hardware Overview", href: "/hardware", description: "Complete systems catalog" },
      { name: "Technical Specs", href: "/hardware#specs", description: "Detailed specifications" },
    ],
  },
  "/mission": {
    title: "UNMANNED SYSTEMS",
    description:
      "Comprehensive mission planning and execution systems for complex autonomous operations. Seamless coordination of multiple systems for mission-critical operations.",
    links: [
      { name: "Mission Planning", href: "/mission#planning", description: "Advanced operation design" },
      { name: "Execution Systems", href: "/mission#execution", description: "Real-time mission control" },
      { name: "Analysis Tools", href: "/mission#analysis", description: "Post-mission intelligence" },
      { name: "Integration", href: "/mission#integration", description: "Multi-system coordination" },
    ],
  },
  "/contact": {
    title: "CONTACT US",
    description:
      "Ready to discuss the future of autonomous systems? Connect with our team to explore partnerships, demonstrations, and custom solutions.",
    links: [
      { name: "General Inquiries", href: "/contact", description: "Get in touch with our team" },
      { name: "Partnership", href: "/contact#partnership", description: "Strategic collaborations" },
      { name: "Demo Request", href: "/contact#demo", description: "See our systems in action" },
      { name: "Support", href: "/contact#support", description: "Technical assistance" },
    ],
  },
  "/careers": {
    title: "JOIN THE MISSION",
    description:
      "Join a team of innovators, engineers, and visionaries pushing the boundaries of what's possible in autonomous systems and aerospace technology.",
    links: [
      { name: "Open Positions", href: "/careers", description: "Current opportunities" },
      { name: "Engineering", href: "/careers#engineering", description: "Build the future" },
      { name: "Research", href: "/careers#research", description: "Advance the science" },
      { name: "Culture", href: "/careers#culture", description: "Our work environment" },
    ],
  },
}

const navigationItems = [
  { name: "ABOUT", href: "/about" },
  { name: "AI PILOT", href: "/roadrunner" },
  { name: "SPACE SYSTEMS", href: "/hardware" },
  { name: "UNMANNED SYSTEMS", href: "/mission" },
  { name: "CONTACT US", href: "/contact" },
  { name: "JOIN THE MISSION", href: "/careers" },
]

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [megaMenuTimeout, setMegaMenuTimeout] = useState<NodeJS.Timeout | null>(null)
  const lastScrollY = useRef(0)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
        setActiveMegaMenu(null) // Close mega menu when scrolling
      } else {
        setIsVisible(true)
      }
      setIsScrolled(currentScrollY > 50)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveMegaMenu(null)
  }, [pathname])

  const handleMouseEnter = (href: string) => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout)
      setMegaMenuTimeout(null)
    }
    setActiveMegaMenu(href)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 150) // Small delay to prevent flickering
    setMegaMenuTimeout(timeout)
  }

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout)
      setMegaMenuTimeout(null)
    }
  }

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null)
  }

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          ${isScrolled || !isHomePage ? "bg-black/95 backdrop-blur-sm border-b border-white/20" : "bg-transparent"}
        `}
      >
        <div className="w-full">
         <div className="flex items-center justify-between h-20 border-b border-white/100 px-4 sm:px-6">

            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <Image
                src="/tsalla_web.svg"
                alt="Tsalla Aerospace"
                width={260}
                height={70}
                className="h-12 sm:h-14 md:h-16 w-auto brightness-150 contrast-125"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center h-full border-l border-white/30">
              {navigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative h-full"
                  onMouseEnter={() => handleMouseEnter(item.href)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`
                      px-6 text-sm font-medium tracking-wider transition-colors h-full flex items-center
                      ${index < navigationItems.length - 1 ? "border-r border-white/30" : ""}
                      ${activeMegaMenu === item.href ? "bg-white/10" : ""}
                    `}
                  >
                    <span
                      className={`animated-underline font-mono font-normal ${
                        pathname === item.href ? "text-blue-400" : "text-white hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        {activeMegaMenu && megaMenuData[activeMegaMenu as keyof typeof megaMenuData] && (
          <div
            className="absolute top-full left-0 right-0 bg-black border-b border-white/20 shadow-2xl z-40 animate-slideDown"
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-2 gap-12">
                {/* Left Half - Links */}
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-gray-400 mb-6 tracking-wider">
                    {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].title}
                  </h3>
                  {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="group block p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium text-lg group-hover:text-blue-400 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-gray-400 text-sm mt-1">{link.description}</div>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Right Half - Description */}
                <div className="flex flex-col justify-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white leading-tight">
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].description}
                    </p>
                    <div className="pt-4">
                      <Link
                        href={activeMegaMenu}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                      >
                        Explore More
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

          {/* Menu Content */}
          <div className="absolute top-20 left-0 right-0 bg-black/95 border-t border-white/20">
            <div className="flex flex-col">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-4 text-base font-medium border-b border-white/10 transition-colors flex justify-between items-center
                    ${
                      pathname === item.href
                        ? "text-blue-400 bg-white/5"
                        : "text-white hover:text-blue-400 hover:bg-white/5"
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="animated-underline">{item.name}</span>
                  <Plus size={16} className="transform rotate-45" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
