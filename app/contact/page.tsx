import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact - Tsalla Aerospace",
  description: "Get in touch with Tsalla Aerospace for partnerships, inquiries, and more.",
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to discuss the future of autonomous systems? Get in touch with our team.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    className="bg-gray-900 border-gray-800 text-white focus:border-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    className="bg-gray-900 border-gray-800 text-white focus:border-white transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-gray-900 border-gray-800 text-white focus:border-white transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  type="text"
                  className="bg-gray-900 border-gray-800 text-white focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  className="bg-gray-900 border-gray-800 text-white focus:border-white transition-colors"
                  required
                />
              </div>

              <Button type="submit" className="button-link w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                Send Message
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Or explore our other pages:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about" className="text-link text-blue-400 hover:text-white">
                  About Us
                </Link>
                <Link href="/careers" className="text-link text-blue-400 hover:text-white">
                  Careers
                </Link>
                <Link href="/hardware" className="text-link text-blue-400 hover:text-white">
                  Our Technology
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
