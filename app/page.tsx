"use client"
import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.svg";
import { IoMoonOutline } from 'react-icons/io5';
import Feature from '@/components/Feature';
import Extras from '@/components/Extras';
import Quotes from '@/components/Quotes';
import PricingCard from '@/components/Pricing';
import Footer from '@/components/Footer';

function Page() {
  return (
    <div className='min-h-screen bg-lightBg'>

      <div className='w-[20%] mx-[40%] bg-lightFg h-[60px] rounded-md mt-10 flex gap-4 items-center justify-evenly'>
        <Image className='cursor-pointer' src={logo} width={30} height={30} alt='logo'/>
        <h1 className='font-bold text-xl'>read routine</h1>
        <span onClick={()=>alert("dark mode")}  className='p-2 bg-lightBg rounded-md cursor-pointer transition-all '><IoMoonOutline /></span>
      </div>
      <div className='to-blue-300 my-10 mt-20 w-[80%] mx-[10%] min-h-[300px]  grid place-items-center grid-cols-2 gap-4'>

        <div className='p-2  h-full flex flex-col items-start justify-center '>
          <h1 className='text-6xl leading-11  text-mainColor font-bold'>Cultivate Your reading habit</h1>
          <span className='mt-4'>Cultivate your reading habit with simple goals and daily milestones.</span>
          <button className=' my-10 hover:text-white p-4 bg-mainColor rounded-xl transition-all duration-500 hover:-translate-y-1 mb-4 '>start my journey</button>
          <a href="#" className='underline text-sm mx-4'>already a user</a>
        </div>

        {/* demos */}
        <div className='w-full h-full bg-lightFg rounded-md'>
          
        </div>
        
      </div>
      <Feature/>
      <Extras/>
      <Quotes/>
      <PricingCard/>
      <Footer/>

    </div>
  )
}

export default Page