import React from 'react'
import team from '../assets/Team.png'

export const Team = () => {
  return (
    <>
    <section id="team" className="w-full h-auto mt-14">
    <div className=" w-full h-[10vh] flex justify-center items-center pt-5 ">
              <h2 className='font-inter-tight font-normal  text-white text-[52px] leading-10'>Team</h2>
          </div>
          <div className="flex w-full h-full justify-center">
          <div className="w-[1300px] h-auto ">
            <img width={1300} src={team} className='w-full h-full object-cover'  />
          </div>
          </div>
       
        
    </section>
  </>
  )
}
