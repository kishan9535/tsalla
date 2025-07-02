import Link from "next/link";
import Image from "next/image"; // Import the Image component

export default function Footer() {
  return (
    <footer className="relative pt-20 lg:pt-48 bg-[#eaeaea] text-[#292E3A] z-[3] pb-20"> {/* Increased pb-10 to pb-20 for more space at the bottom */}
      <div className="container mx-auto px-6 lg:px-24 max-w-[1440px] block lg:flex justify-between">
        {/* Left Hand Side: Brand Info, Mission, Buttons, Copyright */}
        <div className="lhs flex flex-col lg:w-96 mb-10 lg:mb-0"> {/* Changed to flex-col for vertical stacking */}
          <Link href="/" className="flex items-center z-50 mb-6 lg:mb-10 text-black"> {/* Adjusted margin-bottom */}
            <Image
              src="/tsalla_web.svg"
              alt="Tsalla Aerospace"
              width={260}
              height={70}
              className="h-12 sm:h-14 md:h-16 w-auto brightness-150 contrast-125"
              priority
            />
          </Link>
          <p className="mt-0 text-lg leading-relaxed text-[#292E3A] opacity-80"> {/* Increased text size to text-lg */}
            Our mission is to protect service members and civilians with Intelligent systems. {/* Adjusted text to match image */}
          </p>

          {/* Contact and Open Roles buttons */}
          <div className="flex flex-wrap gap-4 mt-8 lg:mt-10"> {/* Adjusted gap and margin-top */}
            <Link
              className="
                button button--white
                border border-black/[0.15] bg-black/[0.024] text-black
                py-4 px-5 flex items-center justify-center /* Adjusted padding for larger buttons */
                font-mono text-sm uppercase tracking-wider leading-none relative /* Increased text size to text-sm */
                transition-colors duration-100 ease-in-out
                hover:bg-black hover:text-white hover:border-black
              "
              href="/contact"
            >
              CONTACT US
              <div className="button__top absolute inset-0 pointer-events-none transition-transform duration-100 ease-in-out"></div>
              <div className="button__bottom absolute inset-0 pointer-events-none transition-transform duration-100 ease-in-out"></div>
            </Link>
            <Link
              className="
                button button--white
                border border-black/[0.15] bg-black/[0.024] text-black
                py-4 px-5 flex items-center justify-center /* Adjusted padding for larger buttons */
                font-mono text-sm uppercase tracking-wider leading-none relative /* Increased text size to text-sm */
                transition-colors duration-100 ease-in-out
                hover:bg-black hover:text-white hover:border-black
              "
              href="/careers"
            >
              OPEN ROLES
              <div className="button__top absolute inset-0 pointer-events-none transition-transform duration-100 ease-in-out"></div>
              <div className="button__bottom absolute inset-0 pointer-events-none transition-transform duration-100 ease-in-out"></div>
            </Link>
          </div>
          <small className="sub-title text-sm font-mono uppercase opacity-50 mt-10 block"> {/* Increased text size to text-sm */}
            &copy; {new Date().getFullYear()} Tsalla Aerospace. All rights reserved.
          </small>
        </div>

        {/* Right Hand Side: Link Columns - Adjusted for 4 distinct columns as per image */}
        <div className="middle grid grid-cols-2 md:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-10 xl:gap-x-20 text-sm mt-10 lg:mt-0 lg:ml-20"> {/* Increased base text size to text-sm */}

          {/* Column 1: Products (Replaces Hivemind) */}
          <div>
            <p className="font-mono text-black uppercase opacity-100 mb-4 tracking-wider text-base">PRODUCTS</p> {/* Increased text size to text-base */}
            <ul className="flex flex-col gap-y-3 list-none p-0 m-0"> {/* Adjusted gap-y */}
              <li>
                <Link href="/products/roadrunner" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Roadrunner
                </Link>
              </li>
              <li>
                <Link href="/products/hardware" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Hardware
                </Link>
              </li>
              <li>
                <Link href="/products/mission-systems" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Mission Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company (from image) */}
          <div>
            <p className="font-mono text-black uppercase opacity-100 mb-4 tracking-wider text-base">COMPANY</p> {/* Increased text size to text-base */}
            <ul className="flex flex-col gap-y-3 list-none p-0 m-0"> {/* Adjusted gap-y */}
              <li>
                <Link href="/about" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mission-autonomy" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Mission Autonomy
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/company-executives" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Company Executives
                </Link>
              </li>
              <li>
                <Link href="/careers" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/culture-book" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Culture Book
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Media (from image) */}
          <div>
            <p className="font-mono text-black uppercase opacity-100 mb-4 tracking-wider text-base">MEDIA</p> {/* Increased text size to text-base */}
            <ul className="flex flex-col gap-y-3 list-none p-0 m-0"> {/* Adjusted gap-y */}
              <li>
                <Link href="/media-coverage" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Media Coverage
                </Link>
              </li>
              <li>
                <Link href="/press-releases" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Press Releases
                </Link>
              </li>
              <li>
                <Link href="/blog" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal (from image) */}
          <div>
            <p className="font-mono text-black uppercase opacity-100 mb-4 tracking-wider text-base">LEGAL</p> {/* Increased text size to text-base */}
            <ul className="flex flex-col gap-y-3 list-none p-0 m-0"> {/* Adjusted gap-y */}
              <li>
                <Link href="/legal/security" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Security
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/suppliers" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Suppliers
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links (CONNECT) - Now a distinct column */}
          <div className="col-span-2 md:col-span-1 mt-8 md:mt-0"> {/* Adjusted col-span and margin-top for responsiveness */}
            <p className="font-mono text-black uppercase opacity-100 mb-4 tracking-wider text-base">CONNECT</p> {/* Increased text size to text-base */}
            <ul className="flex flex-col gap-y-3 list-none p-0 m-0"> {/* Adjusted gap-y */}
              <li>
                <Link href="https://twitter.com/tsalla_aerospace" target="_blank" rel="noopener noreferrer" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/company/tsalla-aerospace" target="_blank" rel="noopener noreferrer" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com/tsalla.aerospace" target="_blank" rel="noopener noreferrer" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-base no-underline"> {/* Increased text size to text-base */}
                  Facebook
                </Link>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
