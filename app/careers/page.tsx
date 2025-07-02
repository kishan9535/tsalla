"use client"

import Image from "next/image"
import { useEffect } from "react"
import HomeCareersSection from "./components/HomeCareersSection"
import MissionSection from "./components/MissionSection"
import ValuesSection from "./components/ValuesSection"
import TeamsSection from "./components/TeamsSection"
import HiringProcess from "./components/HiringProcess"

const dummyImages = [
  "https://placehold.co/600x400/333333/FFFFFF?text=Innovation+1",
  "https://placehold.co/400x300/444444/FFFFFF?text=Innovation+2",
  "https://placehold.co/500x350/555555/FFFFFF?text=Innovation+3",
  "https://placehold.co/700x500/666666/FFFFFF?text=Innovation+4",
  "https://placehold.co/450x250/777777/FFFFFF?text=Innovation+5",
  "https://placehold.co/550x380/888888/FFFFFF?text=Innovation+6",
  "https://placehold.co/650x420/999999/FFFFFF?text=Innovation+7",
  "https://placehold.co/350x250/AAAAAA/FFFFFF?text=Innovation+8",
]

export default function CareersPage() {
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes sliding {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-100%)); }
      }
      @keyframes slidingReverse {
        0% { transform: translateX(calc(-100%)); }
        100% { transform: translateX(0); }
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <main className="bg-black text-white font-[Farro]">
      <HomeCareersSection />
      <ValuesSection />
      <MissionSection />
      <TeamsSection />
      <HiringProcess />

      {/* Auto-Scrolling Image Section - shifted slightly higher */}
      <section className="overflow-hidden relative w-full pt-0 pb-8 -mt-4">
        <div
          className="flex gap-2 animate-[sliding_40s_linear_infinite]"
          style={{ width: `${dummyImages.length * 300}px` }}
        >
          {[...dummyImages, ...dummyImages].map((src, index) => (
            <div key={index} className="relative w-[300px] h-[200px] flex-shrink-0">
              <Image src={src || "/placeholder.svg"} alt={`Innovation ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Reverse Auto-Scrolling Image Section */}
      <section className="overflow-hidden relative w-full pb-16">
        <div
          className="flex gap-2 animate-[slidingReverse_40s_linear_infinite]"
          style={{ width: `${dummyImages.length * 300}px` }}
        >
          {[...dummyImages, ...dummyImages].map((src, index) => (
            <div key={index} className="relative w-[300px] h-[200px] flex-shrink-0">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Innovation Reverse ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
