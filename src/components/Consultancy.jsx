import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import secure from "../assets/1.png";

gsap.registerPlugin(ScrollTrigger);

export const Consultancy = () => {
  const containerRef = useRef(null);
  const overlayRef = useRef([]);
  const textRef = useRef([]);

  useEffect(() => {
    const images = overlayRef.current;
    const textElements = textRef.current;

    gsap.set(images.slice(1), { opacity: 0 });
    gsap.set(textElements, { opacity: 0 });

    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=3000",
        pin: true,
        pinSpacing: true,
        scrub: 1,
      }
    });

    images.forEach((_, index) => {
      if (index < images.length - 1) {
        mainTimeline.to(images[index], {
          opacity: 0,
          duration: 1,
          ease: "none",
        })
        .to(images[index + 1], {
          opacity: 1,
          duration: 1,
          ease: "none",
        }, "<");
      }
    });

    textElements.forEach((_, index) => {
      mainTimeline.to(textElements[index], {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }, `<+${index * 0.5}`);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="consultancy" className="gradient-wrapper w-full h-auto mt-14">
      <div className="w-full h-[10vh] mb-10 flex justify-center items-center pt-5">
        <h2 className="font-inter-tight font-normal text-white text-[52px] leading-10">
          Consultancy
        </h2>
      </div>
      <div
        ref={containerRef}
        className="relative w-full h-[800px] flex justify-center items-center"
      >
        {/* Base Laptop Image */}
        <div className="relative w-fit h-[650px]">
          <img
            className="w-fit h-[650px] object-cover"
            src={secure}
            alt="Secure Campus"
          />

          {/* Styled Picture Element (Moved Down 20px) */}
          <picture
            className="absolute w-[870px] h-[565px] left-[50.9] -translate-x-1/2 top-4"
            style={{
              margin: 0,
            }}
          >
            <img
              ref={(el) => (overlayRef.current[0] = el)}
              src="https://www.apple.com/in/macbook-pro/images/overview/themes/macos/pro_apps_software_development__eg0phbvwffwy_large.jpg"
              alt="Software Development"
              className="w-full h-full object-cover rounded-t-lg"
            />
            <img
              ref={(el) => (overlayRef.current[1] = el)}
              src="https://www.apple.com/v/macbook-pro/al/images/overview/themes/macos/pro_apps_photo_editing__bfgp9i8sgqtu_large.jpg"
              alt="Graphic Design"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
            />
            <img
              ref={(el) => (overlayRef.current[2] = el)}
              src="https://www.apple.com/in/macbook-pro/images/overview/themes/macos/pro_apps_productivity__b7cfsz7yaf1e_large.jpg"
              alt="Video Editing"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
            />
            <img
              ref={(el) => (overlayRef.current[3] = el)}
              src="https://www.apple.com/in/macbook-pro/images/overview/themes/macos/pro_apps_graphic_design__bg26xcyau2oi_large.jpg"
              alt="3D Rendering"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
            />
          </picture>
        </div>

        {/* Text Content */}
        <div ref={(el) => (textRef.current[1] = el)} className=" animation-container w-[400px] h-fit p-[1em] top-[20%] left-[2%] absolute rounded-lg">
          <div className="text w-[400px]" >
            <p className="font-inter-tight text-[55px] w-auto text-white">
              Secure Campus
            </p>
          </div>
          <div className="text_para mt-2" >
            <p className="text-slate-300 font-inter-tight text-[15px] text-justify w-[auto]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              dignissimos, incidunt quisquam deserunt, saepe neque vitae
              molestiae culpa reiciendis error corrupti. Eius doloribus
              doloremque autem, nulla nihil qui neque magni.
            </p>
          </div>
        </div>
        <div ref={(el) => (textRef.current[1] = el)} className="animation-container w-[400px] h-fit p-[1em] top-[20%] left-[2%] absolute rounded-lg">
          <div className="text w-[400px]" >
            <p className="font-inter-tight text-[55px] w-auto text-white">
              Secure Campus
            </p>
          </div>
          <div className="text_para mt-2">
            <p className="text-slate-300 font-inter-tight text-[15px] text-justify w-[auto]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              dignissimos, incidunt quisquam deserunt, saepe neque vitae
              molestiae culpa reiciendis error corrupti. Eius doloribus
              doloremque autem, nulla nihil qui neque magni.
            </p>
          </div>
        </div>
      
      
     
      </div>
    </section>
  );
};

export default Consultancy;