import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingAssistant from "@/components/FloatingAssistant";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";
import PageViewTracker from "@/components/PageViewTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "APVIA Ltd | Invest in Sierra Leone | West Africa Investment Opportunities",
    template: "%s | APVIA Ltd - Sierra Leone Investment",
  },
  description:
    "APVIA Ltd - Sierra Leone's leading investment company. Discover profitable opportunities in mining, agriculture, construction, logistics, and trade across West Africa. 30+ years of experience. Invest in Sierra Leone today.",
  keywords: [
    "invest in Sierra Leone",
    "APVIA Ltd",
    "Sierra Leone investment opportunities",
    "Sierra Leone mining investment",
    "Sierra Leone agriculture investment",
    "West Africa investment",
    "Sierra Leone construction company",
    "Sierra Leone trade",
    "Sierra Leone business",
    "invest in West Africa",
    "Sierra Leone economy",
    "Sierra Leone development",
    "African investment company",
    "Sierra Leone infrastructure",
    "Sierra Leone minerals",
    "APVIA Sierra Leone",
    "apvia-sl.com",
    "Sierra Leone logistics",
    "Freetown investment",
    "West Africa mining",
  ],
  authors: [{ name: "APVIA Ltd" }],
  creator: "APVIA Ltd",
  publisher: "APVIA Ltd",
  metadataBase: new URL("https://www.apvia-sl.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.apvia-sl.com",
    siteName: "APVIA Ltd",
    title: "APVIA Ltd | Invest in Sierra Leone | West Africa Investment Opportunities",
    description:
      "Sierra Leone's leading investment company. Discover profitable opportunities in mining, agriculture, construction, logistics, and trade across West Africa.",
    images: [
      {
        url: "https://www.apvia-sl.com/Apvia_logo.jpeg",
        width: 1200,
        height: 630,
        alt: "APVIA Ltd - Invest in Sierra Leone | West Africa Investment",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APVIA Ltd | Invest in Sierra Leone | West Africa Investment",
    description:
      "Sierra Leone's leading investment company. Mining, agriculture, construction, logistics & trade opportunities in West Africa.",
    images: ["https://www.apvia-sl.com/Apvia_logo.jpeg"],
    creator: "@apvialtd",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#1A1A1A]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingAssistant />
        <BackToTop />
        <CookieConsent />
        <PageViewTracker />
      </body>
    </html>
  );
}
