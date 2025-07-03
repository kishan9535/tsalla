import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Left Side - Logo and Buttons */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/tsalla_logo-black.svg"
                alt="Tsalla Aerospace"
                width={240}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link
                href="/contact"
                className="border-2 border-black px-6 py-3 text-black font-mono text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200 text-center"
              >
                CONTACT US
              </Link>
              <Link
                href="/careers"
                className="border-2 border-black px-6 py-3 text-black font-mono text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200 text-center"
              >
                OPEN ROLES
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="grid grid-cols-4 w-full max-w-[300px] gap-4">
              <Link
                href="https://www.instagram.com/tsallaaerospace/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center text-black hover:text-gray-600 transition-colors duration-200"
              >
                <Instagram size={22} />
              </Link>

              <Link
                href="https://www.linkedin.com/company/tsallaaerospace/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center text-black hover:text-gray-600 transition-colors duration-200"
              >
                <Linkedin size={22} />
              </Link>

              <Link
                href="https://www.youtube.com/@tsallaaerospace6378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center text-black hover:text-gray-600 transition-colors duration-200"
              >
                <Youtube size={22} />
              </Link>

              <Link
                href="https://x.com/TsallaAerospace"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src="https://img.icons8.com/?size=512&id=fJp7hepMryiw&format=png"
                  alt="Twitter X"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-black mb-6 text-lg">AI PILOT</h3>
            <ul className="space-y-3">
              <li><Link href="/ai-pilot/roadrunner" className="text-gray-600 hover:text-black">Roadrunner</Link></li>
              <li><Link href="/ai-pilot/autonomous-flight" className="text-gray-600 hover:text-black">Autonomous Flight</Link></li>
              <li><Link href="/ai-pilot/mission-planning" className="text-gray-600 hover:text-black">Mission Planning</Link></li>
              <li><Link href="/ai-pilot/flight-control" className="text-gray-600 hover:text-black">Flight Control</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-bold text-black mb-6 text-lg">SPACE SYSTEMS</h3>
            <ul className="space-y-3">
              <li><Link href="/space-systems/satellites" className="text-gray-600 hover:text-black">Satellites</Link></li>
              <li><Link href="/space-systems/launch-vehicles" className="text-gray-600 hover:text-black">Launch Vehicles</Link></li>
              <li><Link href="/space-systems/orbital-platforms" className="text-gray-600 hover:text-black">Orbital Platforms</Link></li>
              <li><Link href="/space-systems/deep-space" className="text-gray-600 hover:text-black">Deep Space</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-bold text-black mb-6 text-lg">UNMANNED SYSTEMS</h3>
            <ul className="space-y-3">
              <li><Link href="/unmanned-systems/drones" className="text-gray-600 hover:text-black">Drones</Link></li>
              <li><Link href="/unmanned-systems/ground-vehicles" className="text-gray-600 hover:text-black">Ground Vehicles</Link></li>
              <li><Link href="/unmanned-systems/marine-systems" className="text-gray-600 hover:text-black">Marine Systems</Link></li>
              <li><Link href="/unmanned-systems/surveillance" className="text-gray-600 hover:text-black">Surveillance</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-bold text-black mb-6 text-lg">OTHERS</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-black">About</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-black">Careers</Link></li>
              <li><Link href="/gallery" className="text-gray-600 hover:text-black">Gallery</Link></li>
              <li><Link href="/newsletter" className="text-gray-600 hover:text-black">Newsletter Section</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-end">
            <p className="text-gray-600 text-sm">©TSALLA AEROSPACE 2025</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
