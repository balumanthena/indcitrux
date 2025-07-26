'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import { EvervaultCardSnippet } from "./snippets/evervault-card-snippet";
import DotBackgroundDemo from "@/components/ui/dot-background-demo";

const DesignShowcase = () => {
    return (
        <div className="text-white">
            {/* UI/UX Visual Design Section */}
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <h1 className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
                    UI/UX <br /> Product Design
                </h1>
                <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                    Creating, designing and developing websites that work for your business.
                </p>
            </div>

            {/* UI/UX Image Gallery (No Changes) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
                <div className="grid gap-4">
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                </div>
                <div className="grid gap-4">
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                </div>
                <div className="grid gap-4">
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                </div>
                <div className="grid gap-4">
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                    <Image width={500} height={500} priority className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                </div>
            </div>
            
           
            {/* Graphic Design Section */}
            <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
                {/*<h1 className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
                    Graphic Design <br /> 
                </h1> */}
                <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
                    We create stunning visuals for your brand. From logos to social media posts, we&apos;ve got you covered.
                </p>

                {/* Graphic Design Cards (No Changes) */}
                <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="px-10 md:px-0"
                    >
                        <ThreeDCardExample />
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="px-10 md:px-0"
                    >
                        <EvervaultCardSnippet />
                    </motion.div>
                </div>
            </div>
            
        </div>
    );
};

export default DesignShowcase;
