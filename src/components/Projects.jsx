import React, { useState, useEffect } from "react";
import { Cursor } from "./Cursor";
import { ProjectsView } from "./ProjectsView";
import securecampus from '../assets/securecampus.jpg';

const ProjectCard = ({ image, title, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div
      className="w-full h-full flex flex-col gap-5 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="w-full h-[700px] relative overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src={image}
          alt={title}
        />
      </div>
      <div>
        {/* <h3 className="text-center text-white">{title}</h3> */}
      </div>
    </div>
  );
};

export const Projects = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: securecampus,
      image1: "https://kevinhilgendorf.com/images/thumb2_1.avif",
      title: "Secure Campus",
      text: 'lorem',
    },
    {
      id: 2,
      image: "https://kevinhilgendorf.com/images/thumb_1.avif",
      title: "Arena",
      text: 'hell2',
    }
  ];


  const toggleSidebar = (project) => {
    setSelectedProject(project);
    setIsSidebarOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflowY = "hidden"; 
      document.body.style.overflowX = "hidden"; 
    } else {
      document.body.style.overflowY = "auto"; 
      document.body.style.overflowX = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [isSidebarOpen]);
  
  
  

  return (
    <section className="w-full h-auto" id="projects">
      {isSidebarOpen && (
        <div
          className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <div className="w-full h-[10vh] mb-10 flex justify-center items-center pt-5">
        <h2 className="font-inter-tight font-normal text-white text-[62px] leading-10">
          Projects
        </h2>
      </div>

      <Cursor isActive={isActive} />
      <ProjectsView
        isSidebarOpen={isSidebarOpen}
        selectedProject={selectedProject}
        setIsSidebarOpen={setIsSidebarOpen} 
      />

      <div className="w-full h-full flex flex-col relative">
        <div className="w-full h-full flex justify-center">
          <div className="w-[1200px] h-full relative flex gap-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                onClick={() => toggleSidebar(project)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
