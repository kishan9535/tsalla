import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Roadrunner AI Pilot - Tsalla Aerospace",
  description: "Advanced AI pilot system for autonomous flight operations and mission execution.",
}

export default function RoadrunnerPage() {
  return (
    <PageWrapper>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Roadrunner AI Pilot</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Next-generation AI pilot system that thinks, adapts, and executes missions with unprecedented autonomy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Autonomous Decision Making</CardTitle>
                <CardDescription>Real-time tactical decisions without human intervention</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Advanced neural networks process thousands of variables per second to make optimal flight decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Adaptive Learning</CardTitle>
                <CardDescription>Continuous improvement through mission experience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Machine learning algorithms that evolve with each mission, becoming more effective over time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Mission Execution</CardTitle>
                <CardDescription>Flawless execution of complex multi-phase operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Seamless coordination of multiple systems for mission-critical operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
