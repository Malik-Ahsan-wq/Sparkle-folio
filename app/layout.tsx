import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import ClientProviders from "./components/ClientProviders"

// ✅ FONTS
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Ahsan Bashir | Full Stack MERN Developer & Next.js Expert",
  description:
    "Professional Full Stack Developer specializing in MERN Stack (MongoDB, Express.js, React.js, Node.js) and Next.js.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
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
    <html lang="en" className={inter.variable}>
      
      <head>
        <meta name="theme-color" content="#6366f1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>

      <body
        className={`${inter.className} ${geistMono.variable} antialiased pt-12 sm:pt-14`}
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