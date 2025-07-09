import React from 'react'
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <>
      <div className='text-[#ffffff] flex justify-between items-center px-8 py-4'>
        <div className='font-semibold flex gap-2'>
            <button className='bg-white text-black px-2 rounded-[5px]'>D</button>
            DarkPro
        </div>
        <div className='flex justify-between items-center font-light gap-8 md:px-4'>
            <ul className='hidden md:hidden lg:flex gap-10 lg:text-base'>
                <li className='cursor-pointer'>Product</li>
                <li className='cursor-pointer'>Solutions</li>
                <li className='cursor-pointer'>Resources</li>
                <li className='cursor-pointer'>Company</li>
            </ul>
            <Button className="bg-white text-black font-medium rounded-[25px] cursor-pointer hover:bg-neutral-500 hover:text-neutral-200 text-[12px] sm:text-base">Get Started</Button>
        </div>
      </div>
    </>
  )
}

export default Navbar
