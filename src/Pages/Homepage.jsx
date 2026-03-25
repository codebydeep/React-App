import React from 'react'
import Navbar from './Navbar'
import { Button } from "@/components/ui/button"
import User from './User'

const Homepage = () => {
  return (
    <>
      <div className='bg-black'>
      <Navbar/>

      <div className='h-screen w-full'>

        <div className="bg-black text-white w-full flex flex-col items-center justify-center gap-4 px-6 py-10 md:py-20">
          <span className="text-sm text-neutral-400">Frequent Authentication</span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-extrabold pt-6 [word-spacing:4px] relative inline-block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-white/60 via-white to-white/50 animate-shimmer">
            Build products that <br className='hidden md:block' /> users will really love
          </h1>

          <p className="max-w-xl text-justify break-words text-[12px] md:text-base font-medium leading-relaxed text-neutral-400 [word-spacing:4px] sm:py-4">
            Transform your workflows with our platform designed for high
            performing teams. Ship faster, collaborate better, and boost scales.
         </p>

         <div className='flex gap-6 sm:gap-8 mt-4 md:mt-4'>
            <Button className="bg-white text-black rounded-3xl hover:bg-transparent hover:border-[0.5px] hover:text-white sm:px-8 sm:py-5 text-[12px] sm:text-base px-6 cursor-pointer">Get Started</Button>
            <Button className="rounded-3xl bg-transparent border-[0.5px] border-neutral-400 sm:px-8 sm:py-5 text-[12px] sm:text-base px-6 cursor-pointer">Watch Demo</Button>
         </div>

           <div className='p-2 mt-8 border-[1px] border-neutral-400 rounded-2xl'>
            <User/>
           </div>
        </div>

      </div>


      

      </div>
    </>
  )
}

export default Homepage
