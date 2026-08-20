import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import RevenueWellChatbot from "@/components/RevenueWellChatbot";
import ScrollToTop from "@/components/ScrollToTop";
import { DentistSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://dental-smiles.vercel.app"),
  title: {
    default: "Dentist in Austin, TX | Dental Smiles Family & Cosmetic Dentistry",
    template: "%s | Dental Smiles Austin",
  },
  description:
    "Dental Smiles provides compassionate, technology-driven family and cosmetic dental care in Austin, TX. Led by Dr. Divya Shetty. Services include CEREC same-day crowns, cleanings, implants & sedation.",
  keywords: [
    "Austin dentist",
    "dentist Austin TX",
    "family dentistry Austin",
    "cosmetic dentistry Austin TX",
    "emergency dentist Austin",
    "CEREC same-day crowns Austin",
    "dental implants Austin",
    "Dr. Divya Shetty",
    "Dental Smiles Austin",
    "Mueller dental Austin",
    "Hyde Park dentist",
    "North Loop dentist",
    "78723 dentist",
  ],
  authors: [{ name: "Dental Smiles", url: "https://dental-smiles.vercel.app" }],
  creator: "Dental Smiles",
  publisher: "Dental Smiles",
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dental-smiles.vercel.app",
    siteName: "Dental Smiles",
    title: "Dentist in Austin, TX | Dental Smiles Family & Cosmetic Dentistry",
    description:
      "Compassionate, gentle dental care in Austin, TX. Comprehensive general, cosmetic, restorative, and sedation dentistry for your entire family.",
    images: [
      {
        url: "/assets/dental-team.webp",
        width: 1200,
        height: 630,
        alt: "Dental Smiles - Austin Family and Cosmetic Dentistry Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentist in Austin, TX | Dental Smiles Family & Cosmetic Dentistry",
    description:
      "Compassionate, technology-driven family and cosmetic dental care in Austin, TX. Book your appointment today.",
    images: ["/assets/dental-team.webp"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  appleWebApp: {
    title: "Dental Smiles",
    capable: true,
    statusBarStyle: "default",
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Austin",
    "geo.position": "30.2988;-97.7058",
    "ICBM": "30.2988, -97.7058",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-background text-foreground" suppressHydrationWarning>
        <DentistSchema />
        <Providers>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>

        {/* RevenueWell Chatbot */}
        <RevenueWellChatbot />
      </body>
    </html>
  );
}

