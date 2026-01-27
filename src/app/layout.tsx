import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import RevenueWellChatbot from "@/components/RevenueWellChatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://mydentalsmiles.com"),
  title: {
    default: "Dental Smiles | Compassionate Austin Dentistry",
    template: "%s | Dental Smiles",
  },
  description:
    "Dental Smiles provides compassionate, technology-driven dental care in Austin, Texas. Experience personalized treatments for the whole family.",
  keywords: [
    "Austin dentist",
    "family dentistry Austin",
    "dental care Austin TX",
    "cosmetic dentistry Austin",
    "dental implants Austin",
    "teeth cleaning Austin",
    "emergency dentist Austin",
    "Dental Smiles",
    "Dr. Divya Shetty",
    "Mueller dental",
  ],
  authors: [{ name: "Dental Smiles" }],
  creator: "Dental Smiles",
  publisher: "Dental Smiles",
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
    url: "https://mydentalsmiles.com",
    siteName: "Dental Smiles",
    title: "Dental Smiles | Compassionate Austin Dentistry",
    description:
      "Dental Smiles provides compassionate, technology-driven dental care in Austin, Texas. Experience personalized treatments for the whole family.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dental Smiles - Compassionate Austin Dentistry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Smiles | Compassionate Austin Dentistry",
    description:
      "Dental Smiles provides compassionate, technology-driven dental care in Austin, Texas. Experience personalized treatments for the whole family.",
    images: ["/og-image.png"],
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <Providers>
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

