import React, { useEffect } from "react";
import gsap from "gsap";

export const Projects = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const images = document.querySelectorAll("img");
    const cursortext = document.querySelector(".cursor-text");

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
  
      gsap.set(cursor, { x: clientX , y: clientY , duration: 0.1 });
      
    };

    const onMouseEnterImg = () => {
      gsap.to(cursor, { scale: 5, backgroundColor: "white", ease: "power2.out"  });
      cursor.style.cursor = "pointer";
      cursortext.style.display = "block";
    };

    const onMouseLeaveImg = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "transparent" });
    
      cursortext.style.display = "none";
    };

    window.addEventListener("mousemove", onMouseMove);

    images.forEach((img) => {
      img.addEventListener("mouseenter", onMouseEnterImg);
      img.addEventListener("mouseleave", onMouseLeaveImg);
    });

    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      images.forEach((img) => {
        img.removeEventListener("mouseenter", onMouseEnterImg);
        img.removeEventListener("mouseleave", onMouseLeaveImg);
      });
    };
  }, []);

  return (
    <section className="projects_wrapper w-full h-auto" id="projects">
      <div id="cursor" className="cursor">
        <span className="cursor-text font-bold font-inter-tight font-normal  text-black">View</span>
      </div>
      <div className="w-full h-[10vh] mb-10 flex justify-center items-center pt-5">
        <h2 className="font-inter-tight font-normal text-white text-[62px] leading-10">
          Projects
        </h2>
      </div>
      <div className="w-full h-full flex flex-col relative">
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
                <p className="font-inter-tight text-[38px] font-medium text-white">
                  Arena
                </p>
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
                <p className="font-inter-tight text-[38px] font-medium text-white">
                  Arena
                </p>
              </div>
            </div>
          </div>
          
        </div>
      
        
        <div className="gradient-black mt-5 w-screen h-[500px] z-10 absolute bottom-0 left-0 flex justify-center items-end">
          <div className="text">
            <button className="rounded-full bg-[#141414] border border-[#2e2e2e] p-4 w-[200px] font-inter-tight text-[16px] font-medium text-white">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
