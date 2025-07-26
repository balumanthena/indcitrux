// components/ui/dot-background-demo.tsx
import { cn } from "@/lib/utils";
import React from "react";

export default function DotBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-black dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(circle,rgba(128,128,128,0.3)_1px,transparent_1px)] [mask-size:20px_20px]"></div>

<p className="relative z-20 bg-gradient-to-b bg-black-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
  
</p>

        
      
    </div>
  );
}
