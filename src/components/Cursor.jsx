import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const Cursor = ({ isActive = false }) => {
  const mouse = useRef({ x: 0, y: 0 });
  const cursorRef = useRef();
  const cursorSize = isActive ? 150 : 30;
  const cursortoggle = isActive ? 'block' : 'none';

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
    moveCircle(mouse.current.x, mouse.current.y);
  };

  const moveCircle = (x, y) => {
    gsap.to(cursorRef.current, {
      x,
      y,
      xPercent: -50,
      yPercent: -50,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    
    gsap.to(cursorRef.current, {
      width: cursorSize,
      height: cursorSize,
      scale: 1,
      display: cursortoggle,
      duration: 0.3,
      ease: "power2.out"
    });

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isActive, cursorSize, cursortoggle]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div
        ref={cursorRef}
        style={{
          backgroundColor: "white",
          width: cursorSize,
          height: cursorSize,
        }}
        className="fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none transition-all duration-300 ease-out"
      >
        <div className="w-full h-full flex items-center justify-center">
          <h3 
            className="text-black font-medium text-[35px]"
            style={{
              opacity: isActive ? 1 : 0,
              transition: 'opacity 0.3s ease-out'
            }}
          >
            View
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cursor;