'use client'

import LampDemo from "@/components/ui/lamp";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { Tabs } from "@/components/ui/tabs";

const Services = () => {
    return ( <div className="max-w-5xl mx-auto py-20">
   
        <div className="text-4xl md:text-7xl  text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
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