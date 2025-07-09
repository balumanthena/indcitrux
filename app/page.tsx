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

      {/* Spline scene */}
      <div className="relative z-0 w-full h-[500px] md:h-[700px] overflow-hidden">
  <div className="transform translate-y-10 md:translate-y-16">
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
