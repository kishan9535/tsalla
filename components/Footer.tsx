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

          {/* Navigation Columns with animated underlines */}
          {[
            {
              title: "AI PILOT",
              links: [
                { href: "/ai-pilot/roadrunner", text: "Roadrunner" },
                { href: "/ai-pilot/autonomous-flight", text: "Autonomous Flight" },
                { href: "/ai-pilot/mission-planning", text: "Mission Planning" },
                { href: "/ai-pilot/flight-control", text: "Flight Control" },
              ],
            },
            {
              title: "SPACE SYSTEMS",
              links: [
                { href: "/space-systems/satellites", text: "Satellites" },
                { href: "/space-systems/launch-vehicles", text: "Launch Vehicles" },
                { href: "/space-systems/orbital-platforms", text: "Orbital Platforms" },
                { href: "/space-systems/deep-space", text: "Deep Space" },
              ],
            },
            {
              title: "UNMANNED SYSTEMS",
              links: [
                { href: "/unmanned-systems/drones", text: "Drones" },
                { href: "/unmanned-systems/ground-vehicles", text: "Ground Vehicles" },
                { href: "/unmanned-systems/marine-systems", text: "Marine Systems" },
                { href: "/unmanned-systems/surveillance", text: "Surveillance" },
              ],
            },
            {
              title: "OTHERS",
              links: [
                { href: "/about", text: "About" },
                { href: "/careers", text: "Careers" },
                { href: "/gallery", text: "Gallery" },
                { href: "/newsroom", text: "Newsletter Section" },
              ],
            },
          ].map(({ title, links }) => (
            <div key={title} className="lg:col-span-1">
              <h3 className="font-bold text-black mb-6 text-lg">{title}</h3>
              <ul className="space-y-3">
                {links.map(({ href, text }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-black relative group transition-colors duration-200"
                    >
                      <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
                        {text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-end">
            <p className="text-gray-600 text-sm">© TSALLA AEROSPACE 2025</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
