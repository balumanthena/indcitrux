
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
  title: "Ind Citrux Pvt Ltd",
  description: "At Citrux, we build innovative digital solutions—ranging from full-stack apps to AI tools—designed to boost efficiency and user experience. We also offer expert healthcare services, including medical coding, RCM, and workflow optimization for providers.",
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
