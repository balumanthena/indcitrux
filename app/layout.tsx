
import { Analytics } from '@vercel/analytics/react';



import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins(
  { subsets: ["latin"],
    weight: '400'
}
  );

export const metadata: Metadata = {
  title: "Citrux Technologies ",
  description: "At Citrux, we build cutting-edge digital solutions and AI tools, plus offer expert healthcare services like RCM, medical coding, and workflow optimization to enhance efficiency and care.",
  icons: {
    icon: "/favicon.ico", // or "/favicon.png" or array of sizes
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      
      suppressHydrationWarning={true}
      className={font.className}>
        <Analytics />
        {children}
        
        </body>
    </html>
  );
}
