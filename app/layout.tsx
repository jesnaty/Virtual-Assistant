import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Natnael Ayele - Professional Virtual Assistant",
  description:
    "Professional virtual assistant services. Streamline your business operations with expert email management, calendar scheduling, content creation, and administrative support.",
  keywords:
    "virtual assistant, VA, email management, calendar scheduling, content creation, administrative support, business productivity, natnael ayele, personal assistant, remote work, productivity tools",
  authors: [{ name: "Natnael Ayele" }],
  creator: "Natnael Ayele",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Natnael Ayele - Professional Virtual Assistant",
    description: "Professional virtual assistant services to streamline your business operations",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natnael Ayele - Professional Virtual Assistant",
    description: "Professional virtual assistant services to streamline your business operations",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
