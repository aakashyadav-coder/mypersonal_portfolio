import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aakash Yadav | Software & Web Developer",
  description:
    "Portfolio of Aakash Yadav — a full-stack Software & Web Developer with 2+ years of real-world experience building scalable web applications with React, Next.js, Node.js, and modern cloud technologies.",
  keywords: [
    "Software Developer",
    "Web Developer",
    "Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "BScIT",
    "Aakash Yadav",
  ],
  authors: [{ name: "Aakash Yadav" }],
  creator: "Aakash Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aakashyadav.dev",
    title: "Aakash Yadav | Software & Web Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Aakash Yadav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakash Yadav | Software & Web Developer",
    description: "Full-stack developer portfolio — React, Next.js, Node.js",
    creator: "@aakashyadav",
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
};

export const viewport: Viewport = {
  themeColor: "#E11D48",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
