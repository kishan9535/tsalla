"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const navigationItems = [
  { name: "ABOUT", href: "/about" },
  { name: "AI PILOT", href: "/roadrunner" },
  { name: "SPACE SYSTEMS", href: "/hardware" },
  { name: "UNMANNED SYSTEMS", href: "/mission" },
  { name: "CONTACT US", href: "/contact" },
]

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Change navbar background after scrolling past hero
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-black/95 backdrop-blur-sm border-b border-gray-800" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-sm">T</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-wider">TSALLA AEROSPACE</span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wider transition-colors hover:text-blue-400 ${
                  pathname === item.href ? "text-blue-400" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-medium tracking-wider"
          >
            <Link href="/careers">Join the Mission</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
