import type { Metadata } from "next"
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import ClientProviders from "./components/ClientProviders"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Ahsan Bashir | Full-Stack & Shopify Developer",
  description:
    "Professional Full-Stack & Shopify Developer with 2+ years of experience in MERN Stack, Next.js, Shopify, and Canva Design.",
  keywords: [
    "Full Stack Developer",
    "Shopify Developer",
    "MERN Stack",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Supabase",
  ],
  authors: [{ name: "Ahsan Bashir" }],
  creator: "Ahsan Bashir",
  publisher: "Ahsan Bashir",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      
      <head>
        <meta name="theme-color" content="#6366f1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>

      <body
        className={`${dmSans.className} antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>

        {/* CHATBOT SCRIPT */}
        <Script
          src="https://fetchply.com/widget.js?v=0.1.0"
          data-chatbot-id="5478a359-663b-44ff-b7f3-396124110b84"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}