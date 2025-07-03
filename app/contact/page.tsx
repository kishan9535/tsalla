"use client"

import { useState } from "react"
import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact - Tsalla Aerospace",
  description: "Get in touch with Tsalla Aerospace for partnerships, inquiries, and more.",
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [errorFields, setErrorFields] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const missing: string[] = []

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        const formatted = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())
        missing.push(formatted)
      }
    })

    if (missing.length > 0) {
      setErrorFields(missing)
      setSubmitted(false)
      return
    }

    // Success
    setErrorFields([])
    setSubmitted(true)

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      enquiryType: "",
      message: "",
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <PageWrapper>
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">Reach Out to Us</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Got a question, idea, or collaboration in mind? Reach out using the form below — our team will be in touch soon.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-xs mb-1 uppercase tracking-wider">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-[#D8D8D8] text-black border-none rounded-md"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs mb-1 uppercase tracking-wider">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#D8D8D8] text-black border-none rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs mb-1 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#D8D8D8] text-black border-none rounded-md"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enquiryType" className="block text-xs mb-1 uppercase tracking-wider">
                  Enquiry Type
                </label>
                <Input
                  id="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="bg-[#D8D8D8] text-black border-none rounded-md"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs mb-1 uppercase tracking-wider">
                Message
              </label>
              <Textarea
                id="message"
                rows={10}
                value={formData.message}
                onChange={handleChange}
                className="bg-[#D8D8D8] text-black border-none w-full rounded-md"
              />
            </div>
          </form>

          {/* Feedback */}
          <div className="text-center mt-6">
            {errorFields.length > 0 && (
              <div className="text-red-500 text-sm animate-shake mb-2">
                Please fill out the following fields:{" "}
                <span className="font-semibold">{errorFields.join(", ")}</span>
              </div>
            )}

            {submitted && (
              <p className="text-green-400 text-sm animate-pulse mb-2">
                ✅ Message sent successfully!
              </p>
            )}

            <Button
              type="submit"
              onClick={handleSubmit}
              className="bg-[#D8D8D8] text-black font-normal text-base px-10 py-2 hover:bg-gray-400 rounded-md"
            >
              Send
            </Button>
          </div>

          {/* Contact Info Section */}
          <div className="grid md:grid-cols-2 gap-6 mt-16 text-sm">
            <div className="bg-zinc-900 p-6 md:p-10 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <p className="mb-2">
                <span className="font-semibold">Phone Number</span> - 095357 20540
              </p>
              <p>
                <span className="font-semibold">Email Address</span> - info@tsallaaerospace.com
              </p>
            </div>
            <div className="bg-zinc-900 p-6 md:p-10 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Headquarters</h2>
              <p>
                2nd Floor, Indian Institute of Science (Bengaluru), Society for Innovation and Development,
                Entrepreneurship Centre Rd, IISc, Malleswaram, Bengaluru, Karnataka 560012
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
