import Link from "next/link"

export default function TeamsSection() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-start px-4 pb-16 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">The Minds & Makers</h2>
      </div>

      <div>
        <p className="text-sm text-gray-400 mb-6">
          Tsalla Aerospace is where visionaries and veterans converge to reimagine what's possible in flight and
          defense. We prototype by sunrise, refine by midnight, and never settle for ordinary. Shaped by lived
          experience and fearless innovation, our team transforms challenges into breakthroughs.
        </p>
        <Link
          href="/team"
          className="inline-flex items-center text-sm text-gray-300 underline underline-offset-4 hover:text-white group"
        >
          <span className="relative z-10">
            Discover the minds and makers turning tomorrow's ideas into today's capabilities.
          </span>
          <span className="ml-2 w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  )
}
