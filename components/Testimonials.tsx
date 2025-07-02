"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TestimonialBlock is the individual component for each of the three blocks
interface TestimonialBlockProps {
  backgroundImage: string; // URL for the initial background image
  hoverImage: string;      // URL for the image that appears on hover (the "back" side of the flip)
  logoImage: string;      // URL for the logo image
  title: string;          // Main title/text for the block (e.g., "DARPA Partnership")
  description: string;    // Detailed description
  readMoreLink: string;   // Link for the "Read More" button
  isLast?: boolean;       // To control the right border for the last item in the row
}

const TestimonialBlock: React.FC<TestimonialBlockProps> = ({
  backgroundImage,
  hoverImage,
  logoImage,
  title,
  description,
  readMoreLink,
  isLast = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Styles for the initial background image (front face of the flip)
  const initialImageStyle = {
    transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotates 180deg on Y-axis to reveal back
    opacity: isHovered ? 0 : 1, // Fades out as it rotates
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease-out',
    backfaceVisibility: 'hidden' as 'hidden', // Hides the backface during rotation
    WebkitBackfaceVisibility: 'hidden' as 'hidden', // For Safari compatibility
  };

  // Styles for the hover image (back face of the flip)
  const hoverImageStyle = {
    transform: isHovered ? 'rotateY(0deg)' : 'rotateY(-180deg)', // Rotates from -180deg to 0deg to appear
    opacity: isHovered ? 1 : 0, // Fades in as it rotates
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease-out',
    backfaceVisibility: 'hidden' as 'hidden', // Hides the backface during rotation
    WebkitBackfaceVisibility: 'hidden' as 'hidden', // For Safari compatibility
  };

  // The content container (logo, description, link) remains static and visible on top.
  // No animation styles applied directly to this element for hover.
  const contentContainerStyle = {
    backgroundColor: '#eaeaea', // Consistent background color
  };

  return (
    <li
      className={`
        peek-block relative w-full overflow-hidden
        lg:w-1/3
        border-t border-b border-t-[#505051] border-b-[#505051] /* Always apply top and bottom borders for mobile/tablet */
        ${!isLast ? 'lg:border-r border-r-[#505051]' : ''} /* Apply right border only if not last on desktop */
        lg:border-t-0 lg:border-b-0 /* Remove top/bottom borders on large screens (handled by parent section) */
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={readMoreLink} className="block text-black no-underline h-full">
        {/* Mobile/Tablet Image (always visible, no hover animation, appears above text) */}
        <div className="block lg:hidden pt-4 px-4"> {/* Added padding for mobile */}
          <Image
            src={backgroundImage} // Use backgroundImage for mobile/tablet
            alt={title}
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-lg" // Added rounded corners for mobile image
          />
        </div>

        {/* Desktop Image Flip Container - hidden on mobile */}
        {/* This container enables the 3D flip effect */}
        <div className="hidden lg:block relative w-full h-full [perspective:1000px] [transform-style:preserve-3d]">
          {/* Initial Background Image (Front Face) */}
          <Image
            className="absolute w-full h-full object-cover top-0 left-0 p-0"
            src={backgroundImage}
            alt={title}
            width={800}
            height={600}
            style={initialImageStyle}
            priority
          />
          {/* Hover Image (Back Face) */}
          <Image
            className="absolute w-full h-full object-cover top-0 left-0 p-0"
            src={hoverImage}
            alt={`${title} Hover`}
            width={800}
            height={600}
            style={hoverImageStyle}
          />
        </div>

        {/* Content Container - positioned relatively above the images, remains static */}
        {/* Z-index 2 ensures it's always on top of both images, regardless of flip */}
        <div
          className="peek-block__container flex flex-col justify-start items-center text-center lg:text-left lg:items-start relative z-[2]
            pt-10 pb-14 lg:py-28 px-6 lg:px-16 lg:min-h-[31rem]"
          style={contentContainerStyle} // No hover animation on this content
        >
          {/* Logo Image */}
          <Image
            className="mb-6 lg:mb-4 lg:min-h-[80px] lg:object-scale-down lg:object-left mx-auto lg:mx-0" // mx-auto for mobile centering, lg:mx-0 for desktop alignment
            src={logoImage}
            alt={`${title} Logo`}
            width={200}
            height={80}
          />
          {/* Description Text */}
          <p className="text-base leading-relaxed text-black">{description}</p>
          {/* Read More Link */}
          <span
            className="arrow-link arrow-link--black block mt-10 text-xs uppercase tracking-wider leading-none relative transition-colors duration-250 ease-in-out hover:text-blue-600 mx-auto lg:mx-0" // mx-auto for mobile centering, lg:mx-0 for desktop alignment
          >
            Read More
          </span>
        </div>
      </Link>
    </li>
  );
};

// Testimonials is the main component that renders three TestimonialBlock instances
const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#eaeaea] text-black border-t border-b border-black py-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-lg md:text-xl tracking-widest text-black mb-2">
          TECH. TOOLS. SOLUTIONS.
        </h2>
        <p className="text-2xl md:text-3xl font-medium text-black leading-snug max-w-3xl">
          Our integrated suite of software, hardware, and services empowers businesses to operate
          smarter and grow faster.
        </p>
      </div>

      {/* Testimonials */}
      <ul
        className="flex flex-wrap lg:container mx-auto"
        style={{
          listStyle: "none",
          padding: "0",
          margin: "0",
          maxWidth: "1440px",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          color: "rgb(0, 0, 0)",
        }}
      >
        {/* First Testimonial Block with specific hover image */}
        <TestimonialBlock
          backgroundImage="https://placehold.co/800x600/D0D0D0/000000?text=Autonomous+Flight"
          hoverImage="https://shield.ai/wp-content/uploads/2025/03/company-1b.jpg" // Specific hover image for the first box
          logoImage="https://shield.ai/wp-content/uploads/2025/03/darpa.svg"
          title="DARPA Partnership"
          description="Shield AI enabled the X-62 VISTA to autonomously fly and perform tactical maneuvers against human pilots."
          readMoreLink="https://shield.ai/inside-the-ai-enabled-pilot-that-flew-air-force-secretary-kendall-through-a-dogfight/"
        />

        {/* Second Testimonial Block */}
        <TestimonialBlock
          backgroundImage="https://placehold.co/800x600/C0C0C0/000000?text=Hivemind+Autonomy"
          hoverImage="https://shield.ai/wp-content/uploads/2025/03/company-2.jpg" // Updated hover image
          logoImage="https://shield.ai/wp-content/uploads/2025/03/general-atomics-2.svg"
          title="General Atomics Partnership"
          description="Hivemind successfully flew a MQ-20 Avenger, leveraging some Autonomy Government Reference Architecture (A-GRA)-compliant interfaces."
          readMoreLink="https://shield.ai/shield-ais-hivemind-flies-mq-20-avenger-autonomously-at-orange-flag/"
        />

        {/* Third Testimonial Block (Last one, so isLast is true to remove right border) */}
        <TestimonialBlock
          backgroundImage="https://placehold.co/800x600/B0B0B0/000000?text=Dual-Ship+Autonomy"
          hoverImage="https://shield.ai/wp-content/uploads/2025/03/company-3b.jpg"
          logoImage="https://shield.ai/wp-content/uploads/2025/03/kratos.svg"
          title="Kratos Partnership"
          description="Shield AI conducted dual-ship autonomy tests using Kratos’ MQM-178 Firejet drones."
          readMoreLink="https://shield.ai/autonomy-for-the-world-mqm-178-firejet/"
          isLast={true}
        />
      </ul>
    </section>
  );
};

export default Testimonials;
