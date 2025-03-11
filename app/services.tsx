'use client'

import LampDemo from "@/components/ui/lamp";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { Tabs } from "@/components/ui/tabs";

const Services = () => {
    return ( <div className="max-w-5xl mx-auto py-20">
   
        <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
          Streamline your business with our services
        </div>
        <p className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto">
          From website design to social media management, We offer a wide range of services to help you grow your business. 
        </p>

        <CardHoverEffectDemo />
        
        
      

        

    </div> 
    
    );
}
 
export default Services;