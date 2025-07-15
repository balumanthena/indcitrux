// components/CustomCursor.tsx
"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    // Detect touch devices
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isTouchDevice]);

  // Smooth trailing logic using requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setTrailingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1,
        };
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Inner cursor dot */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: "transform 75ms ease-out",
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>

      {/* Outer trailing ring */}
      <div
        className={`fixed top-0 left-0 z-[9998] pointer-events-none transition-all duration-150 ease-out ${
          isHoveringInteractive ? "scale-150 opacity-60" : "opacity-40"
        }`}
        style={{
          transform: `translate3d(${trailingPosition.x - 10}px, ${trailingPosition.y - 10}px, 0)`,
        }}
      >
        <div className="w-6 h-6 border border-white rounded-full" />
      </div>
    </>
  );
};

export default CustomCursor;
