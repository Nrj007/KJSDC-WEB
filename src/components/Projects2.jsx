import React, { useLayoutEffect } from "react";
import gsap from "gsap";

export const Projects2 = () => {
  useLayoutEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorText = document.querySelector(".cursor-text");
    const container = document.querySelector(".projects_wrapper");

    let scale = 0.8; // Initial cursor scale state based on the CSS

    // Handle cursor movement
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      // Calculate offset based on current scale
      const offsetX = cursor.offsetWidth / 2 * scale;
      const offsetY = cursor.offsetHeight / 2 * scale;
      
      // Update cursor position
      gsap.to(cursor, {
        x: clientX - offsetX,
        y: clientY - offsetY,
        duration: 0.1, // Smooth movement
      });
    };

    // Handle mouse entering an image
    const onMouseEnterImg = ({ target }) => {
      if (target.tagName === "IMG") {
        // Scale up the cursor and show the text
        scale = 5; // Scale to 2 when hovering over an image
        gsap.to(cursor, { 
          scale: scale, 
          backgroundColor: "white", 
          ease: "power2.out" 
        });
        cursorText.style.display = "block";
        cursor.style.cursor = "pointer";
      }
    };

    // Handle mouse leaving an image
    const onMouseLeaveImg = ({ target }) => {
      if (target.tagName === "IMG") {
        // Reset cursor scale and hide text
        scale = 0.8; // Reset to original scale
        gsap.to(cursor, { 
          scale: scale, 
          backgroundColor: "transparent", 
          ease: "power2.out" 
        });
        cursorText.style.display = "none";
      }
    };

    // Adjust cursor position to account for scale change
    const updateCursorPosition = (event) => {
      const { clientX, clientY } = event;
      // Calculate offset based on current scale
      const offsetX = cursor.offsetWidth / 2 * scale;
      const offsetY = cursor.offsetHeight / 2 * scale;
      
      // Update cursor position with offset and scale
      gsap.to(cursor, {
        x: clientX - offsetX,
        y: clientY - offsetY,
        duration: 0.1, // Smooth movement
      });
    };

    window.addEventListener("mousemove", updateCursorPosition);
    container.addEventListener("mouseenter", onMouseEnterImg, true);
    container.addEventListener("mouseleave", onMouseLeaveImg, true);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      container.removeEventListener("mouseenter", onMouseEnterImg, true);
      container.removeEventListener("mouseleave", onMouseLeaveImg, true);
    };
  }, []);

  return (
    <section className="projects_wrapper w-full h-auto" id="projects">
      <div id="cursor" className="cursor">
        <span className="cursor-text font-bold font-inter-tight text-black">View</span>
      </div>

      <div className="w-full h-[10vh] mb-10 flex justify-center items-center pt-5">
        <h2 className="font-inter-tight font-normal text-white text-[62px] leading-10">
          Projects
        </h2>
      </div>

      <div className="w-full h-full flex flex-col relative">
        {/* First row of images */}
        <div className="w-full h-full flex justify-center">
          <div className="wrapper w-[1200px] h-full relative flex gap-10">
            <div className="portfolio-item w-full h-full flex flex-col gap-5">
              <div className="portfolio-thumb w-full h-[700px] relative">
                <img
                  className="w-full h-full object-cover object-top rounded-md"
                  src="https://kevinhilgendorf.com/images/thumb2_1.avif"
                  alt="Project Thumbnail"
                />
              </div>
              <div className="text">
                <p className="font-inter-tight text-[38px] font-medium text-white">Arena</p>
              </div>
            </div>

            <div className="w-full h-full flex flex-col gap-5">
              <div className="w-full h-[700px]">
                <img
                  className="w-full h-full object-cover object-top rounded-md"
                  src="https://kevinhilgendorf.com/images/thumb_1.avif"
                  alt="Project Thumbnail"
                />
              </div>
              <div className="text">
                <p className="font-inter-tight text-[38px] font-medium text-white">Arena</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second row of images */}
        
      </div>
    </section>
  );
};

export default Projects2;