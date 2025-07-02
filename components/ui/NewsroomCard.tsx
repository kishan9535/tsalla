"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface NewsroomCardProps {
  imageUrl: string
  publicationDate: string
  title: string
  readMoreLink: string
}

const NewsroomCard: React.FC<NewsroomCardProps> = ({ imageUrl, publicationDate, title, readMoreLink }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Publication Date */}
        <div className="text-sm text-gray-500 mb-3 font-medium">{publicationDate}</div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-3 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>

        {/* Read More Link */}
        <Link
          href={readMoreLink}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 group/link"
        >
          Read More
          <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

export default NewsroomCard
