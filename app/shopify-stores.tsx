"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stores = [
  {
    image: "/images/image2.png",
    quote: "Citrux showed us to get started, what to do, and how to do it.",
    name: "Jason Scer",
  },
  {
    image: "/images/shop-2.jpeg",
    quote:
      "We had no idea how to get started, but Citrux showed us the way. And we were able to create something amazing.",
    name: "John Prency",
  },
  {
    image: "/images/s-2.webp",
    quote:
      "The team at Citrux is amazing. They helped us create a stunning store that we are proud of.",
    name: "Miguel Martinez",
  },
];

const ShopifyStores = () => {
  return (
    <section className="mt-16 py-20 bg-[#f6f5f4] rounded-3xl">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-6xl font-bold bg-gradient-to-b from-neutral-800 to-neutral-500 bg-clip-text text-transparent"
        >
          Quick Commerce Stores
        </motion.h2>

        {/* Subtext */}
        <p className="mt-6 text-lg text-neutral-700 text-center max-w-xl mx-auto">
          We create stunning e-commerce stores that are designed to convert.
        </p>

        {/* Cards */}
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={store.image}
                alt={`Store by ${store.name}`}
                width={360}
                height={240}
                className="rounded-md object-cover shadow-md mb-4"
              />
              <p className="italic text-neutral-600 mb-3 text-sm">
                “{store.quote}”
              </p>
              <p className="font-semibold text-neutral-900">— {store.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
