import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="footer-link text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="footer-link text-gray-400 hover:text-white">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/careers" className="footer-link text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="footer-link text-gray-400 hover:text-white">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/roadrunner" className="footer-link text-gray-400 hover:text-white">
                  Roadrunner
                </Link>
              </li>
              <li>
                <Link href="/hardware" className="footer-link text-gray-400 hover:text-white">
                  Hardware
                </Link>
              </li>
              <li>
                <Link href="/mission" className="footer-link text-gray-400 hover:text-white">
                  Mission Systems
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="footer-link text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/media" className="footer-link text-gray-400 hover:text-white">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/documents" className="footer-link text-gray-400 hover:text-white">
                  Documents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Building the future of autonomous systems</p>
            <Link href="/contact" className="footer-link text-gray-400 hover:text-white inline-block mt-2">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tsalla Aerospace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
