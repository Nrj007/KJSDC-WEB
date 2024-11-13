import React from 'react'
import react from '../assets/react.png'
import angular from '../assets/angular.png'
import java from '../assets/java.png'
export const Technologies = () => {
  return (
    <section className='w-full mb-5 '>
     <div className="w-full h-[10vh] mb-10 flex justify-center items-center pt-5">
        <h2 className="font-inter-tight font-normal text-white text-[52px] leading-10">
        Our Techstack
        </h2>
      </div>
      <div className=" w-full  gap-6 flex justify-center flex-col items-center h-auto">
      <div className="design w-[650px] flex flex-col border-[#ffffff0a] border-[1px] h-auto bg-[#101010] rounded-xl">
        <div className="">
          <p className='py-5 px-9 font-inter-tight font-medium text-[#d6d6d6]'>Design and Prototyping:</p>
        </div>
        <div className="cardborder flex items-center gap-3   ">
         <div className="img px-5 py-9 ">
          <img width={80} height={100} src={react} alt="" srcset="" />
         </div>
         <div className="w-full py-8  flex flex-col gap-4 justify-start items-start ">
          <div className="font-inter-tight font-bold text-white">
            <h3 className='text-[19px]'>Figma</h3>
          </div>
          <div className="font-inter-tight font-bold text-white">
            <p className='text-[#d6d6d6] text-sm'>It is collaborative and integrates well with development workflows.</p>
          </div>
         </div>
        </div>
      </div>

      <div className="frontend w-[650px] flex flex-col border-[#ffffff0a] border-[1px] h-auto bg-[#101010] rounded-xl">
        <div className="borderdown">
          <p className='py-5 px-9 font-inter-tight font-medium text-[#d6d6d6]'>Frontend Development:</p>
        </div>
        <div className="flex w-full flex-col h-auto p-8 gap-5">
        <div className="cardborder w-full  flex  items-center gap-3   ">
         <div className="img w-1/2 flex justify-center px-10 rounded-xl border-[#ffffff0a] border-[1px] py-10 bg-[#ffffff03] ">
          <img width={80} height={100} src={angular} alt="" srcset="" />
         </div>
         <div className="img w-1/2 px-10 flex justify-center rounded-xl border-[#ffffff0a] border-[1px] py-10 bg-[#ffffff03] ">
          <img width={80} height={100} src={react} alt="" srcset="" />
         </div>
         
        </div>
        <div className="font-inter-tight font-bold text-white">
            <p className='text-[#d6d6d6] text-sm'>The addition of <b className='font-bold'>Tailwind</b>  provides a customizable and accessible component library, enabling the creation of flexible and intuitive UI designs</p>
          </div>
        </div>
       
       
      </div>

      <div className="frontend w-[650px] flex flex-col border-[#ffffff0a] border-[1px] h-auto bg-[#101010] rounded-xl">
        <div className="borderdown">
          <p className='py-5 px-9 font-inter-tight font-medium text-[#d6d6d6]'>Backend Development:</p>
        </div>
        <div className="flex w-full flex-col h-auto p-8 gap-5">
        <div className="cardborder w-full  flex  items-center gap-3   ">
         <div className="img w-1/2 flex justify-center px-10 rounded-xl border-[#ffffff0a] border-[1px] py-10 bg-[#ffffff03] ">
          <img width={80} height={100} src={java} alt="" srcset="" />
         </div>
         <div className="img w-1/2 px-10 flex justify-center rounded-xl border-[#ffffff0a] border-[1px] py-10 bg-[#ffffff03] ">
          <img width={80} height={100} src={react} alt="" srcset="" />
         </div>
         
        </div>
        <div className="font-inter-tight font-bold text-white">
            <p className='text-[#d6d6d6] text-sm'>The addition of <b className='font-bold'>Tailwind</b>  provides a customizable and accessible component library, enabling the creation of flexible and intuitive UI designs</p>
          </div>
        </div>
       
       
      </div>
      </div>
      
    </section>
  )
}
