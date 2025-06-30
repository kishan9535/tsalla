import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Careers - Join the Mission | Tsalla Aerospace",
  description: "Join our team of innovators building the future of autonomous systems and aerospace technology.",
}

const openPositions = [
  {
    id: "1",
    title: "Senior Aerospace Engineer",
    department: "Engineering",
    location: "Remote / Austin, TX",
    type: "Full-time",
    level: "Senior",
  },
  {
    id: "2",
    title: "AI/ML Research Scientist",
    department: "Research",
    location: "Remote / San Francisco, CA",
    type: "Full-time",
    level: "Senior",
  },
  {
    id: "3",
    title: "Flight Test Engineer",
    department: "Operations",
    location: "Nevada Test Site",
    type: "Full-time",
    level: "Mid-level",
  },
]

export default function CareersPage() {
  return (
    <PageWrapper>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the Mission</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're building the future of autonomous systems. Join a team of innovators, engineers, and visionaries
              pushing the boundaries of what's possible.
            </p>
          </div>

          <div className="grid gap-6 mb-16">
            {openPositions.map((position) => (
              <Card key={position.id} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">{position.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {position.department} • {position.location}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline">{position.type}</Badge>
                      <Badge variant="secondary">{position.level}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Don't see the right role?</h2>
            <p className="text-gray-400 mb-6">We're always looking for exceptional talent. Send us your resume.</p>
            <Button variant="outline" size="lg">
              Send Resume
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
