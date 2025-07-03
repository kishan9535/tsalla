import Link from "next/link"

export default function MissionSection() {
  return (
    <section className="px-4 pb-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-400 text-lg mb-6">
            At Tsalla Aerospace, we're not just building aircraft – we're pioneering the future of autonomous flight.
            Our mission is to create intelligent systems that push the boundaries of what's possible in aerospace
            technology.
          </p>
          <p className="text-gray-400 text-base mb-8">
            Every day, our team works to solve complex challenges in autonomous navigation, AI-driven decision making,
            and cutting-edge aerospace engineering. We believe that the future of flight lies in systems that can think,
            adapt, and perform with unprecedented precision.
          </p>
          <Link
            href="/mission"
            className="inline-flex items-center text-sm text-gray-300 underline underline-offset-4 hover:text-white group"
          >
            <span className="relative z-10">Learn more about our mission</span>
            <span className="ml-2 w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
              &rarr;
            </span>
          </Link>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">What Drives Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Innovation in autonomous flight systems
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Advancing AI and machine learning in aerospace
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Creating safer, more efficient flight solutions
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Pushing the limits of what's possible
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
