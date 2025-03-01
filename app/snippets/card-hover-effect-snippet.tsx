import { HoverEffect } from "@/components/ui/card-hover-effect";
import { MonitorSmartphone, ShoppingCart, Palette, Megaphone, Smartphone, Headphones } from "lucide-react";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    icon: (
      <div className="bg-gradient-to-br from-indigo-500 to-blue-500 p-5 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
        <MonitorSmartphone className="w-12 h-12 text-white stroke-2" />
      </div>
    ),
    title: "Website Design",
    description:
      "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
  },
  {
    icon: (
      <div className="bg-gradient-to-br from-green-500 to-teal-500 p-5 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
        <ShoppingCart className="w-12 h-12 text-white stroke-2" />
      </div>
    ),
    title: "E-commerce Store",
    description:
      "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",
  },
  {
    icon: (
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-5 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
        <Palette className="w-12 h-12 text-white stroke-2" />
      </div>
    ),
    title: "UI / UX",
    description:
      "We design intuitive, user-friendly interfaces that grow with your business and delight your customers.",
  },
  {
    icon: (
      <div className="bg-gradient-to-br from-red-500 to-orange-500 p-5 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
        <Megaphone className="w-12 h-12 text-white stroke-2" />
      </div>
    ),
    title: "Social Media",
    description:
      "We offer social media management and ad creation services. We can help you grow your social media presence and reach new customers.",
  },
  {
    icon: (
      <div className="bg-gradient-to-br from-yellow-500 to-amber-500 p-5 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
        <Smartphone className="w-12 h-12 text-white stroke-2" />
      </div>
    ),
    title: "App Development",
    description:
      "We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.",
  },
  {
    icon: (
      <div className="bg-gradient-to-br from-gray-500 to-gray-700 p-5 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
        <Headphones className="w-12 h-12 text-white stroke-2" />
      </div>
    ),
    title: "Support",
    description:
      "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
  },
];
