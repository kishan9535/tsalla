import Link from "next/link";
import Image from "next/image"; // Import the Image component

export default function Footer() {
  return (
    <footer className="relative pt-20 lg:pt-48 bg-[#eaeaea] text-[#292E3A] z-[3]">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1440px] block lg:flex justify-between">
        {/* Left Hand Side: Brand Info, Mission, Buttons, Copyright */}
        <div className="lhs flex flex-wrap lg:block lg:w-96 mb-10 lg:mb-0">
          <Link href="/" className="flex items-center z-50 mb-10">
            <Image
              src="/tsalla_web.svg"
              alt="Tsalla Aerospace"
              width={260}
              height={70}
              className="h-12 sm:h-14 md:h-16 w-auto brightness-150 contrast-125"
              priority
            />
          </Link>
          <p className="mt-0 font-mono opacity-100 text-base leading-relaxed">
            Leading the future of unmanned systems and AI technology. We build unfair advantages.
          </p>

          {/* Contact and Open Roles buttons as per the original design */}
          <div className="flex flex-wrap gap-6 mt-8">
            <Link
              className="
                button button--white
                border border-black/[0.15] bg-black/[0.024] text-black
                py-5 px-4 flex items-center justify-center
                font-mono text-xs uppercase tracking-wider leading-none relative
                transition-colors duration-100 ease-in-out
                hover:bg-black hover:text-white hover:border-black
              "
              href="/contact" // Link changed to your /contact page
            >
              CONTACT US
              <div className="button__top absolute inset-0 pointer-events-none transition-transform duration-100 ease-in-out"></div>
              <div className="button__bottom absolute inset-0 pointer-events-none transition-transform duration-100 ease-in-out"></div>
            </Link>
            <Link
              className="
                button button--white
                border border-black/[0.15] bg-black/[0.024] text-black
                py-5 px-4 flex items-center justify-center
                font-mono text-xs uppercase tracking-wider leading-none relative
                transition-colors duration-100 ease-in-out
                hover:bg-black hover:text-white hover:border-black
              "
              href="/careers" // Link changed to your /careers page
            >
              OPEN ROLES
              <div className="button__top absolute inset-0 pointer-events-none transition-transform duration-100 ease-in-out"></div>
              <div className="button__bottom absolute inset-0 pointer-events-none transition-transform duration-100 ease-in-out"></div>
            </Link>
          </div>
          <small className="sub-title text-xs font-mono uppercase opacity-50 mt-10 block lg:static">
            &copy; {new Date().getFullYear()} Tsalla Aerospace. All rights reserved.
          </small>
        </div>

        {/* Right Hand Side: Link Columns - Adapted for 4 distinct columns */}
        <div className="middle grid grid-cols-2 md:grid-cols-4 gap-y-10 lg:gap-y-0 lg:gap-x-10 xl:gap-x-20 sub-title text-xs mt-10 lg:mt-0">

          {/* Column 1: Company */}
          <div>
            <p className="font-mono text-black uppercase opacity-100 mb-4">Company</p>
            <ul className="flex flex-col gap-y-3 lg:gap-y-4 list-none p-0 m-0">
              <li>
                <Link href="/about" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-black no-underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-black no-underline">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/careers" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-black no-underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-black no-underline">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div>
            <p className="font-mono text-black uppercase opacity-100 mb-4">Products</p>
            <ul className="flex flex-col gap-y-3 lg:gap-y-4 list-none p-0 m-0">
              <li>
                <Link href="/roadrunner" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-black no-underline">
                  Roadrunner
                </Link>
              </li>
              <li>
                <Link href="/hardware" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-black no-underline">
                  Hardware
                </Link>
              </li>
              <li>
                <Link href="/mission" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-black no-underline">
                  Mission Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <p className="font-mono text-black uppercase opacity-100 mb-4">Resources</p>
            <ul className="flex flex-col gap-y-3 lg:gap-y-4 list-none p-0 m-0">
              <li>
                <Link href="/blog" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-black no-underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/media" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-black no-underline">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/documents" className="font-mono opacity-50 hover:opacity-100 transition-opacity text-black no-underline">
                  Documents
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <p className="font-mono text-black uppercase opacity-100 mb-4">Contact</p>
            <p className="font-mono opacity-100 text-base leading-relaxed mb-4">
              Building the future of autonomous systems
            </p>
            <Link
              href="/contact"
              className="
                button button--white
                border border-black/[0.15] bg-black/[0.024] text-black
                py-5 px-4 flex items-center justify-center
                font-mono text-xs uppercase tracking-wider leading-none relative
                transition-colors duration-100 ease-in-out
                hover:bg-black hover:text-white hover:border-black
                inline-block
              "
            >
              Get in Touch
              <div className="button__top absolute inset-0 pointer-events-none transition-transform duration-100 ease-in-out"></div>
              <div className="button__bottom absolute inset-0 pointer-events-none transition-transform duration-100 ease-in-out"></div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
