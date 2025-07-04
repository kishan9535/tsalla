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
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    // Clear errors when user starts typing
    if (errorFields.length > 0) {
      setErrorFields([])
    }
    if (apiError) {
      setApiError("")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const missing: string[] = []

    // Validate required fields
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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorFields(["Please enter a valid email address"])
      return
    }

    setIsLoading(true)
    setErrorFields([])
    setApiError("")

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      // Success
      setSubmitted(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        enquiryType: "",
        message: "",
      })

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)

    } catch (error) {
      console.error('Error sending message:', error)
      setApiError(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
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
              <div className="text-red-500 text-sm animate-bounce mb-2">
                {errorFields.length === 1 && errorFields[0] === "Please enter a valid email address" 
                  ? errorFields[0]
                  : `Please fill out the following fields: ${errorFields.join(", ")}`
                }
              </div>
            )}

            {apiError && (
              <div className="text-red-500 text-sm mb-2 bg-red-50 border border-red-200 rounded-md p-3 max-w-md mx-auto">
                ⚠️ {apiError}
              </div>
            )}

            {submitted && (
              <p className="text-green-400 text-sm animate-pulse mb-2 bg-green-50 border border-green-200 rounded-md p-3 max-w-md mx-auto">
                ✅ Message sent successfully! Check your email for confirmation.
              </p>
            )}

            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-[#D8D8D8] text-black font-normal text-base px-10 py-2 hover:bg-gray-400 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send"
              )}
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
