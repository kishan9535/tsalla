"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, Plus } from "lucide-react"

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
  const lastScrollY = useRef(0)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
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
  }, [pathname])

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
          <div className="flex items-center justify-between h-20 border-t border-b border-white/100 px-4 sm:px-6">
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
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    px-6 text-sm font-medium tracking-wider transition-colors h-full flex items-center
                    ${index < navigationItems.length - 1 ? "border-r border-white/30" : ""}
                  `}
                >
                  <span
                    className={`animated-underline ${
                      pathname === item.href
                        ? "text-blue-400"
                        : "text-white hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
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
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

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
