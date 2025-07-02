"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TestimonialBlockProps {
  backgroundImage: string;
  hoverImage: string;
  logoImage: string;
  title: string;
  description: string;
  readMoreLink: string;
  isLast?: boolean;
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

  const initialImageStyle = {
    transform: isHovered ? "translateY(-10%)" : "translateY(0%)",
    opacity: isHovered ? 0 : 1,
    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease-out",
  };

  const hoverImageStyle = {
    transform: isHovered ? "translateY(0%)" : "translateY(100%)",
    opacity: isHovered ? 1 : 0,
    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease-out",
  };

  const contentContainerStyle = {
    transform: isHovered ? "translateY(-100%)" : "translateY(0%)",
    opacity: isHovered ? 0 : 1,
    visibility: isHovered ? "hidden" : "visible",
    transition:
      "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease-out, visibility 0.5s ease-out",
    backgroundColor: "#eaeaea",
  };

  return (
    <li
      className={`peek-block relative w-full overflow-hidden 
        lg:w-1/3 
        ${!isLast ? "lg:border-r border-r-[#505051]" : ""} 
        border-t border-t-[#505051] lg:border-t-0`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={readMoreLink} className="block text-black no-underline h-full">
        {/* Background image */}
        <Image
          className="w-full h-auto object-cover lg:absolute lg:h-full top-0 left-0 pt-4 px-4 lg:p-0 z-0"
          src={backgroundImage}
          alt={title}
          width={800}
          height={600}
          style={initialImageStyle}
          priority
        />

        {/* Hover image */}
        <Image
          className="w-full h-auto object-cover lg:absolute lg:h-full top-0 left-0 pt-4 px-4 lg:p-0 z-[1]"
          src={hoverImage}
          alt={`${title} Hover`}
          width={800}
          height={600}
          style={hoverImageStyle}
        />

        {/* Content */}
        <div
          className="peek-block__container flex flex-col justify-start items-center text-center lg:text-left lg:items-start relative z-[2] 
            pt-10 pb-14 lg:py-28 px-6 lg:px-16 lg:min-h-[31rem]"
          style={contentContainerStyle}
        >
          {/* Logo */}
          <Image
            className="mb-6 lg:mb-4 lg:min-h-[80px] lg:object-scale-down lg:object-left"
            src={logoImage}
            alt={`${title} Logo`}
            width={200}
            height={80}
          />

          {/* Description */}
          <p className="text-base leading-relaxed">
            {description}
          </p>

          {/* Read More */}
          <span
            className="arrow-link arrow-link--black block mt-10 text-xs uppercase tracking-wider leading-none relative transition-colors duration-250 ease-in-out hover:text-blue-600"
          >
            Read More
          </span>
        </div>
      </Link>
    </li>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#eaeaea] border-t border-b border-black pt-12 pb-12">
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
        <TestimonialBlock
          backgroundImage="https://placehold.co/800x600/D0D0D0/000000?text=Autonomous+Flight"
          hoverImage="https://shield.ai/wp-content/uploads/2025/03/company-1b.jpg"
          logoImage="https://shield.ai/wp-content/uploads/2025/03/darpa.svg"
          title="DARPA Partnership"
          description="Shield AI enabled the X-62 VISTA to autonomously fly and perform tactical maneuvers against human pilots."
          readMoreLink="https://shield.ai/inside-the-ai-enabled-pilot-that-flew-air-force-secretary-kendall-through-a-dogfight/"
        />
        <TestimonialBlock
          backgroundImage="https://placehold.co/800x600/C0C0C0/000000?text=Hivemind+Autonomy"
          hoverImage="https://shield.ai/wp-content/uploads/2025/03/company-2.jpg"
          logoImage="https://shield.ai/wp-content/uploads/2025/03/general-atomics-2.svg"
          title="General Atomics Partnership"
          description="Hivemind successfully flew a MQ-20 Avenger, leveraging some Autonomy Government Reference Architecture (A-GRA)-compliant interfaces."
          readMoreLink="https://shield.ai/shield-ais-hivemind-flies-mq-20-avenger-autonomously-at-orange-flag/"
        />
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
