import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parth Rainchwar | Microservices Architect & Behavioral AI Researcher",
  description:
    "Portfolio of Parth Rainchwar - Software Engineer, Systems Architect, and Behavioral AI Researcher. Explore work experience, research projects, and technical expertise.",
  metadataBase: new URL("https://parthrainchwar.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parthrainchwar.vercel.app",
    siteName: "Parth Rainchwar",
    title: "Parth Rainchwar | Microservices Architect & Behavioral AI Researcher",
    description:
      "Portfolio featuring microservices architecture, behavioral AI research, and full-stack engineering work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parth Rainchwar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Rainchwar | Microservices Architect & Behavioral AI Researcher",
    description: "Explore my work in microservices, behavioral AI, and systems design.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://parthrainchwar.vercel.app" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
