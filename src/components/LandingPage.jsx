import React from "react";
import { Canvas } from "@react-three/fiber";
import Threed from "./Threed";

export const LandingPage = () => {
  return (
    <main className="w-screen h-screen bg-[#0D0D0D] flex">
      <div className="left w-1/2 h-full pt-[15rem] flex flex-col gap-11 px-10">
        <div className="w-full">
          <h2 className="font-inter-tight font-normal text-white text-[62px]">
            Kristu Jayanti Software Development Centre
          </h2>
        </div>
        <div className="w-full h-full">
          <p className="hero-left-text text-white text-clip font-inter-tight tracking-normal text-[20px]">
            Kristu Jayanti Software Development Centre is aimed at in-house
            software development for various needs within Kristu Jayanti College
            Autonomous. Established on 3rd Jan, 2024, we aim at
            conceptualising, designing, and developing software solutions
            tailored to the specific requirements of the college.
          </p>
        </div>
      </div>
      <div className="right w-1/2 h-full flex items-center justify-center">
  
      <Threed />
   

   
      </div>
    </main>
  );
};

export default LandingPage;