"use client";

import Image from "next/image";
// Removed unused imports: useEffect, useRef, useState, Target, Eye, Heart, Compass

export default function OurMission() {
  // Removed all state and useEffect related to visibility and missionElements,
  // as the new design is static and simpler.

  return (
    <section className="bg-black text-white py-24 px-4 md:px-8"> {/* Adjusted padding */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Text Content with Background Image */}
        <div className="w-full md:w-1/2 text-left flex flex-col justify-center relative p-6 rounded-md"> {/* Added padding and relative positioning */}
          <Image
            src="https://www.wiringo.com/wp-content/uploads/2024/01/3.jpg" // Assuming this is the path to your circuit board background image
            alt="Circuit board background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-30 rounded-md" // Adjust opacity as needed
            priority
          />
          <div className="relative z-10"> {/* Content needs to be above the background image */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6">OUR MISSION</h2>
            <p className="text-gray-300 leading-relaxed text-lg md:text-xl max-w-lg">
              Our Mission Is To Transform The Sky Into A Force For Good, Supporting Humanitarian Efforts During Crises And Equipping Modern Defense With Next-Generation Aerial Systems For Strategic Dominance.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-md overflow-hidden"> {/* Consistent image container styling */}
            <Image
              src="https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?b=1&s=612x612&w=0&k=20&c=6CGz0oF0bra0Yiyn0PR2Sy31cA3CidlbsZlYZJx1nxg=" // Placeholder image, replace with your actual drone image
              alt="Drone in flight over landscape"
              fill
              className="object-cover"
              priority // Prioritize loading for this image
            />
          </div>
        </div>
      </div>
    </section>
  );
}
