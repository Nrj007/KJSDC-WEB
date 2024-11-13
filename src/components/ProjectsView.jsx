import React, { useEffect, useRef } from "react";
import gsap, { Power2 } from "gsap";

export const ProjectsView = ({ isSidebarOpen, selectedProject, setIsSidebarOpen }) => {
  const sidebar = useRef();

  useEffect(() => {
    if (isSidebarOpen) {
      gsap.to(sidebar.current, {
        x: 0,
        duration: 0.4,
        ease: Power2.easeInOut,
      });
    } else {
      gsap.to(sidebar.current, {
        x: 600,
        duration: 0.4,
        ease: Power2.easeInOut,
      });
    }
  }, [isSidebarOpen]);

  return (
    <div
      ref={sidebar}
      className="w-[600px] h-full overflow-y-auto bg-[#101010] fixed right-0 top-0 z-50 translate-x-full p-5"
    >
      <button onClick={() => setIsSidebarOpen(false)}>
    <div className="w-auto h-auto bg-[#131313]  rounded-full border-[#ffffff0a] border-[1px]">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#999999" d="M16.95 8.464a1 1 0 0 0-1.414-1.414L12 10.586L8.464 7.05A1 1 0 1 0 7.05 8.464L10.586 12L7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 1 0 1.414-1.414L13.414 12z"/></svg>
    </div>
      </button>

      {selectedProject && (
        <div className="mt-5 text-white">
          <h2 className="text-2xl text-center font-bold">{selectedProject.title}</h2>
          <div className="w-full h-full bg-[#131313] p-6 rounded-2xl mt-4 border-[#ffffff0a] border-[1px]">
            <img className="rounded-2xl" src={selectedProject.image} alt="" />
          </div>
          <div className="w-full h-full bg-[#131313] p-6 rounded-2xl mt-4 border-[#ffffff0a] border-[1px]">
            <img className="rounded-2xl" src={selectedProject.image1} alt="" />
          </div>
          {/* <p>{selectedProject.text}</p> */}
        </div>
      )}
    </div>
  );
};
