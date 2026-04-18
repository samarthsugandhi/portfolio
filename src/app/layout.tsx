import type { Metadata } from "next";
import "./globals.css";

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
    description:
      "Building AI-powered web applications and scalable systems.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0B0F19] text-slate-200 antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
