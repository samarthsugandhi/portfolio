import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Samarth Sugandhi — Full Stack Developer",
  description:
    "Portfolio of Samarth Sugandhi — Full Stack Developer specializing in AI-powered web applications and scalable systems. Built with Next.js, TypeScript, and Framer Motion.",
  keywords: [
    "Samarth Sugandhi",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "AI developer",
    "BEC",
    "portfolio",
  ],
  authors: [{ name: "Samarth Sugandhi" }],
  openGraph: {
    title: "Samarth Sugandhi — Full Stack Developer",
    description: "Building AI-powered web applications and scalable systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samarth Sugandhi — Full Stack Developer",
    description: "Building AI-powered web applications and scalable systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0A0A0A] text-[#EDEDED] antialiased">
        <CustomCursor />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
