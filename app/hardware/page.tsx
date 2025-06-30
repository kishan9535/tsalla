import type { Metadata } from "next"
import type { HardwareItem } from "@/lib/types"
import PageWrapper from "@/components/PageWrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Hardware Systems - Tsalla Aerospace",
  description: "Advanced unmanned systems and hardware solutions for defense and aerospace applications.",
}

async function getHardware(): Promise<HardwareItem[]> {
  // In a real app, this would fetch from your API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hardware`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  })

  if (!res.ok) {
    throw new Error("Failed to fetch hardware data")
  }

  return res.json()
}

export default async function HardwarePage() {
  const hardware = await getHardware()

  return (
    <PageWrapper>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hardware Systems</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced unmanned systems engineered for superiority in the field. Every component designed for
              reliability, performance, and tactical advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardware.map((item) => (
              <Card key={item.id} className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={item.status === "active" ? "default" : "secondary"}>{item.status}</Badge>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <CardTitle className="text-white">{item.name}</CardTitle>
                  <CardDescription className="text-gray-400">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Weight:</span>
                      <span className="text-white">{item.specifications.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Range:</span>
                      <span className="text-white">{item.specifications.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Payload:</span>
                      <span className="text-white">{item.specifications.payload}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
