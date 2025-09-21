import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Software Developer Portfolio | Cloud Architecture & Automation Expert",
  description:
    "Expert software developer specializing in cloud architecture, microservices, Python, Java, AWS, and process automation. Available for freelance projects and full-time opportunities.",
  generator: "v0.app",
  keywords: [
    "software developer",
    "cloud architecture",
    "microservices",
    "AWS",
    "Python",
    "Java",
    "automation",
    "freelance",
  ],
  authors: [{ name: "Software Developer Portfolio" }],
  openGraph: {
    title: "Software Developer Portfolio | Cloud Architecture Expert",
    description: "Expert in cloud architecture, microservices, and automation solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
