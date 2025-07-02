"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, Plus } from "lucide-react"

const megaMenuData = {
  "/about": {
    title: "ABOUT",
    description:
      "Tsalla Aerospace is pioneering the future of autonomous systems with cutting-edge technology that delivers unfair advantages in modern warfare and exploration. Our mission-critical solutions are designed for superiority in the field, where precision and reliability determine success.",
    links: [
      { name: "Our Mission", href: "/about#mission" },
      { name: "Leadership Team", href: "/leadership" },
      { name: "Company Values", href: "/about#values" },
      { name: "Innovation Labs", href: "/about#labs" },
      { name: "Global Presence", href: "/about#locations" },
      { name: "Partnerships", href: "/about#partners" },
    ],
  },
  "/roadrunner": {
    title: "AI PILOT",
    description:
      "Revolutionary Roadrunner AI system that thinks, adapts, and executes missions with unprecedented autonomy. Real-time decision making where delay means defeat. Advanced neural networks process battlefield data in milliseconds, ensuring tactical superiority.",
    links: [
      { name: "Roadrunner Core", href: "/roadrunner" },
      { name: "Neural Networks", href: "/roadrunner#neural" },
      { name: "Decision Engine", href: "/roadrunner#decisions" },
      { name: "Adaptive Learning", href: "/roadrunner#learning" },
      { name: "Mission Execution", href: "/roadrunner#execution" },
      { name: "Real-time Analytics", href: "/roadrunner#analytics" },
    ],
  },
  "/hardware": {
    title: "SPACE SYSTEMS",
    description:
      "Advanced unmanned systems engineered for superiority in space operations. Every component designed for reliability, performance, and tactical advantage in the harshest environments. Cutting-edge propulsion and navigation systems for mission-critical operations.",
    links: [
      { name: "Phantom X1", href: "/hardware#phantom" },
      { name: "Sentinel Pro", href: "/hardware#sentinel" },
      { name: "Orbital Platform", href: "/hardware#orbital" },
      { name: "Deep Space Probe", href: "/hardware#deepspace" },
      { name: "Satellite Network", href: "/hardware#satellite" },
      { name: "Launch Systems", href: "/hardware#launch" },
    ],
  },
  "/mission": {
    title: "UNMANNED SYSTEMS",
    description:
      "Comprehensive autonomous systems for complex mission operations. Seamless coordination of multiple platforms for intelligence, surveillance, reconnaissance, and tactical operations. Advanced swarm intelligence and distributed command systems.",
    links: [
      { name: "Swarm Intelligence", href: "/mission#swarm" },
      { name: "Mission Planning", href: "/mission#planning" },
      { name: "Execution Systems", href: "/mission#execution" },
      { name: "Command & Control", href: "/mission#command" },
      { name: "Analysis Tools", href: "/mission#analysis" },
      { name: "Integration Hub", href: "/mission#integration" },
    ],
  },
  "/contact": {
    title: "CONTACT US",
    description:
      "Ready to discuss the future of autonomous systems? Connect with our team to explore partnerships, demonstrations, and custom solutions. Our experts are available for technical consultations and strategic planning sessions.",
    links: [
      { name: "General Inquiries", href: "/contact" },
      { name: "Technical Support", href: "/contact#support" },
      { name: "Partnership", href: "/contact#partnership" },
      { name: "Demo Request", href: "/contact#demo" },
      { name: "Sales Team", href: "/contact#sales" },
      { name: "Media Relations", href: "/contact#media" },
    ],
  },
  "/careers": {
    title: "JOIN THE MISSION",
    description:
      "Join a team of innovators, engineers, and visionaries pushing the boundaries of what's possible in autonomous systems and aerospace technology. Shape the future of defense and exploration with cutting-edge research and development.",
    links: [
      { name: "Engineering Roles", href: "/careers#engineering" },
      { name: "Research Positions", href: "/careers#research" },
      { name: "AI Specialists", href: "/careers#ai" },
      { name: "Systems Integration", href: "/careers#systems" },
      { name: "Mission Operations", href: "/careers#operations" },
      { name: "Internship Program", href: "/careers#internships" },
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
        setActiveMegaMenu(null)
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
    }, 100)
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
                      className={`animated-underline font-mono ${
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

        {/* Mega Menu - Exact design from image */}
        {activeMegaMenu && megaMenuData[activeMegaMenu as keyof typeof megaMenuData] && (
          <div
            className="absolute top-full left-0 right-0 bg-black z-40 animate-slideDown shadow-2xl"
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className="flex min-h-[400px]">
              {/* Left Half - Links */}
              <div className="w-1/2 p-12 border-r border-white/20">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-gray-400 mb-8 tracking-wider">
                    {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].title}
                  </h3>
                  <div className="space-y-4">
                    {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="block text-white text-2xl font-light hover:text-blue-400 transition-colors duration-300 leading-relaxed"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Half - Description */}
              <div className="w-1/2 p-12 flex items-center">
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed font-light">
                    {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
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
