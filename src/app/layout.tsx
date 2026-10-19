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
  metadataBase: new URL("https://ayesha-islam.vercel.app"),
  title: "Ayesha Islam | Full Stack Developer",
  description:
    "Portfolio of Ayesha Islam - Full Stack Web Developer specializing in building clean, type-safe, and highly scalable web applications using Next.js, React, TypeScript, Tailwind CSS, and MongoDB Atlas.",
  keywords: [
    "Ayesha Islam",
    "Full Stack Developer",
    "Frontend Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB Atlas",
    "Node.js",
  ],
  authors: [{ name: "Ayesha Islam", url: "https://github.com/anie3008" }],
  creator: "Ayesha Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayeshaislam.dev",
    title: "Ayesha Islam | Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in building clean, type-safe, and highly scalable web applications.",
    siteName: "Ayesha Islam Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Ayesha Islam - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayesha Islam | Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in building clean, type-safe, and highly scalable web applications.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#090d16] text-neutral-100 selection:bg-indigo-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
