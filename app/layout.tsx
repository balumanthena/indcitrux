import { Analytics } from '@vercel/analytics/react';
import CustomCursor from "@/components/CustomCursor";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Citrux Technologies | AI-Powered Digital Solutions",
  description:
    "At Citrux, we build cutting-edge AI tools and digital solutions. We also offer expert healthcare services like RCM, medical coding, and workflow optimization to enhance efficiency and care.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Citrux Technologies",
    description:
      "AI-powered digital transformation and healthcare solutions from Citrux Technologies. Discover how we optimize workflows, automate operations, and enhance care.",
    url: "https://www.citrux.in",
    siteName: "Citrux Technologies",
    images: [
      {
        url: "https://www.citrux.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Citrux Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citrux Technologies",
    description:
      "Digital innovation meets healthcare automation. Citrux Technologies provides AI solutions, RCM tools, and enterprise software to scale your business.",
    images: ["https://www.citrux.in/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon fallback links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body suppressHydrationWarning={true} className={font.className}>
        <Analytics />
        <CustomCursor />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Citrux Technologies",
              url: "https://www.citrux.in",
              logo: "https://www.citrux.in/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/citruxtechnologies",
                "https://twitter.com/citruxtech",
                "https://www.instagram.com/citruxtechnologies"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9640960696",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Telugu"]
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Siddipet",
                addressRegion: "Telangana",
                postalCode: "502103",
                addressCountry: "IN"
              }
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
