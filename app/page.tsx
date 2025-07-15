'use client';

import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
// import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />

      <Spotlight className="hidden md:flex md:-top-80 left-80" fill="white" />

      <div className="p-4 mx-auto relative z-10 w-full pt-32 md:pt-56 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Create, grow, and <br /> scale your business
        </div>

        <div>
          <TextHoverEffect text="CitrUX">{}</TextHoverEffect>
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          We offer tailored solutions, creative growth support, and training opportunities to build your skills and experience.
        </p>

        <Link
          href="/book"
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
        >
          Book a call
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
        </div>

        {/* Static Sections */}
        <WebsiteDesign />
        <GraphicDesign />
        <ShopifyStores />
        {/* <Brands /> */}
        <Services />
        <InfiniteMovingCardsDemo />
        <FAQS />
        <Footer />
      </div>
    </div>
  );
}