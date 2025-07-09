'use client';

import Spline from '@splinetool/react-spline/next';
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <div className="md:hidden">
  <Spotlight className="flex -top-40 left-20" fill="white" />

  <div className="p-4 mx-auto relative z-10 w-full pt-32 px-2">
    <div className="text-4xl pb-5 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
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
  </div>
</div>


      {/* Spline scene */}
      {/* Spline scene - visible only on md and up */}
<div className="hidden md:block relative z-0 w-full h-[700px] overflow-hidden">
  <div className="transform translate-y-16">
    <Spline scene="https://prod.spline.design/bNNhKUHPwsBjyiUR/scene.splinecode" />
  </div>
</div>


      {/* Slider overlapping spline (hiding watermark) */}
      <div className="w-full pt-20">
        <SliderOne />
      </div>

      {/* Static Sections */}
      <WebsiteDesign />
      <GraphicDesign />
      <ShopifyStores />
      <Brands />
      <Services />
      <InfiniteMovingCardsDemo />
      <FAQS />
      <Footer />
    </div>
  );
}
