import type React from "react"
interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return <div className={`min-h-screen bg-black text-white ${className}`}>{children}</div>
}
