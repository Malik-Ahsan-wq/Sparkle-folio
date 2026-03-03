import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "./components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahsan Bashir | Full Stack MERN Developer & Next.js Expert",
  description: "Professional Full Stack Developer specializing in MERN Stack (MongoDB, Express.js, React.js, Node.js) and Next.js. Building scalable, responsive web applications with modern technologies including Tailwind CSS, TypeScript, and RESTful APIs.",
  keywords: ["Full Stack Developer", "MERN Stack", "Next.js Developer", "React Developer", "Node.js", "MongoDB", "Web Development", "Ahsan Bashir", "JavaScript Developer", "TypeScript"],
  authors: [{ name: "Ahsan Bashir" }],
  creator: "Ahsan Bashir",
  publisher: "Ahsan Bashir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahsanbashir.com",
    title: "Ahsan Bashir | Full Stack MERN Developer",
    description: "Professional Full Stack Developer specializing in MERN Stack and Next.js. Building scalable, responsive web applications.",
    siteName: "Ahsan Bashir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Bashir | Full Stack MERN Developer",
    description: "Professional Full Stack Developer specializing in MERN Stack and Next.js",
    creator: "@ahsanbashir",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
