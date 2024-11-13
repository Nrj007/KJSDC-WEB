import React from 'react'


export const Workflow = () => {
  return (
    <section className='w-full mb-5 '>
    <div className="w-full h-[10vh] mb-10 flex justify-center items-center pt-5">
       <h2 className="font-inter-tight font-normal text-white text-[52px] leading-10">
      Workflow
       </h2>
     </div>
     <div className=" w-full  gap-6 flex justify-center flex-col items-center h-auto">
     <div className="design w-[800px] h-[550px] flex flex-col gap-4 ">
      <div className="flex gap-4 w-full h-full justify-center items-center">
      <div className="w-1/2 h-full border-[#ffffff0a] border-[1px] bg-[#101010] rounded-xl">
   <h3 className='font-inter-tight text-[28px] h-full items-center text-offwhite flex justify-center'>BrainStorming</h3>
      </div>
      <div className="w-1/2 h-full border-[#ffffff0a] border-[1px] bg-[#101010] rounded-xl">
      <h3 className='font-inter-tight text-[28px] h-full items-center text-offwhite  flex justify-center'>Designing</h3>
      </div>
      </div>

      <div className="flex gap-4 w-full h-full justify-center items-center">
      <div className="w-1/2 h-full border-[#ffffff0a] border-[1px] bg-[#101010] rounded-xl">
      <h3 className='font-inter-tight text-[28px] h-full items-center text-offwhite  flex justify-center'>Development</h3>
      </div>
      <div className="w-1/2 h-full border-[#ffffff0a] border-[1px] bg-[#101010] rounded-xl">
      <h3 className='font-inter-tight text-[28px] h-full items-center text-offwhite  flex justify-center'>Deployment</h3>
      </div>
      </div>
    
       
     </div>

    
     </div>
     
   </section>
  )
}
