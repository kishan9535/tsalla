import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About - Tsalla Aerospace",
  description: "Learn about Tsalla Aerospace's mission to build the future of autonomous systems.",
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Tsalla Aerospace</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We don't build drones. We build unfair advantages. Leading the future of autonomous systems with
              cutting-edge AI and aerospace technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                At Tsalla Aerospace, we're redefining what's possible in autonomous systems. Our mission is to create
                intelligent, adaptive technologies that don't just keep up with the pace of modern warfare and
                exploration—they set it.
              </p>
              <p className="text-gray-300 mb-6">
                We believe that security no longer waits for strategy. Our systems act in real time, where delay means
                defeat. We're not just thinking—we're creating autonomous, adaptive, intelligent systems that keep up.
              </p>
              <Link href="/roadrunner" className="text-link text-blue-400 hover:text-white">
                Learn about our AI Pilot technology →
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Core Values</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Innovation without compromise</li>
                <li>• Real-time adaptive intelligence</li>
                <li>• Autonomous system superiority</li>
                <li>• Mission-critical reliability</li>
              </ul>
              <div className="mt-6">
                <Link href="/careers" className="text-link text-blue-400 hover:text-white">
                  Join our mission →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/hardware"
                className="animated-link bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Explore Our Hardware
              </Link>
              <Link
                href="/contact"
                className="animated-link border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
