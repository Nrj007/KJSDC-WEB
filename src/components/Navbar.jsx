import React from 'react'

export const Navbar = () => {
  return (
    <>
    <div className="Navbar w-screen h-auto flex justify-center items-center fixed top-4 z-10">
    <div className="Navbar w-[300px] h-[45px] bg-nav-gradient rounded-3xl flex justify-center ">
        <ul className='flex items-center justify-evenly w-full'>
            <li className='text-li-bg font-montserrat font-medium text-[14px] cursor-pointer'>About</li>
            <li className='text-li-bg font-montserrat font-medium text-[14px] cursor-pointer'>About</li>
            <li className='text-li-bg font-montserrat font-medium text-[14px] cursor-pointer'>About</li>
        </ul>
    </div>
    </div>
 
    </>
  )
}
