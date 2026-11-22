import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://next-persian-starter.vercel.app"
  ),
  title: {
    default: "Next.js 15 Persian Starter | قالب مدرن و سئو-محور فارسی",
    template: "%s | Next.js 15 Persian Starter",
  },
  description:
    "قالب آماده و پروداکشن Next.js 15 با App Router، TypeScript، Tailwind CSS، پشتیبانی کامل RTL و فونت وزیرمتن، به همراه موتور سئو و ابزارهای وب فارسی.",
  keywords: [
    "Next.js 15",
    "نکست جی اس",
    "قالب نکست فارسی",
    "Next.js RTL",
    "فونت وزیرمتن",
    "Tailwind CSS فارسی",
    "TypeScript starter",
    "سئو در نکست جی اس",
    "Persian Starter Kit",
  ],
  authors: [{ name: "Aria Esmaeilzadeh", url: "https://github.com/ariaesm" }],
  creator: "Aria Esmaeilzadeh",
  publisher: "Aria Esmaeilzadeh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Next.js 15 Persian Starter | قالب مدرن و سئو-محور فارسی",
    description:
      "قالب آماده و پروداکشن Next.js 15 با پشتیبانی کامل RTL و فونت وزیرمتن و موتور سئوی استاندارد.",
    url: "https://next-persian-starter.vercel.app",
    siteName: "Next.js 15 Persian Starter",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js 15 Persian Starter | قالب مدرن و سئو-محور فارسی",
    description:
      "شروع سریع پروژه‌های فارسی با Next.js 15، TypeScript و Tailwind CSS به همراه ابزارهای کاربردی وب فارسی.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark" suppressHydrationWarning>
      <body className={`${vazirmatn.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
