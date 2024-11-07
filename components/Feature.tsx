import Image from 'next/image'
import React from 'react'
import how from "@/public/how.svg";

function Feature() {
  return (
    <div className='my-10 mt-[150px] w-[90%] min-h-[200px] mx-[5%]'>
        <span className='flex items-center justify-center'><Image src={how} alt='how'/> &nbsp;<h1 className='text-4xl font-bold'> How will I make reading my habit?</h1></span>

        <div className='grid grid-cols-3 gap-4 mt-20 w-[90%] mx-[5%]'>
            <div className='bg-lightFg p-4 rounded-md'>
                <center><span className='text-[60px] p-2'>🎯</span></center>
                <h3 className='font-bold my-2 text-xl '>set goals</h3>
                <span className='text-sm mb-2'>set Dailly,weekly and monthly goals to keep you focused</span>
                <br />
                <p className='text-[12px] italic mt-4 '>"read 100 pages today"</p>
                <p className='text-[12px] italic '>"finish atomic habit by the end of next week"</p>
            </div>

            <div className='bg-lightFg p-4 rounded-md'>
                <center><span className='text-[60px] p-2'>🧠</span></center>
                <h3 className='font-bold my-2 text-xl '>Continous reading</h3>
                <span className='text-sm mb-2'>When you note down key takeaways, you'll receive spaced reminders to help you reinforce and master the insights from each book you've read. </span>
                <br />
                <p className='text-[12px] italic mt-4 '>"showing genuine interest in others and listening attentively can greatly enhance your relationships.
                    
                    "<br /> &nbsp; --jotted on: 2/11/2024</p>
                
            </div>
            <div className='bg-lightFg p-4 rounded-md'>
                <center><span className='text-[60px] p-2'>📊</span></center>
                <h3 className='font-bold my-2 text-xl '>Data board and analytics</h3>
                <span className='text-sm mb-2'>As you learn, we gather and display your data in a clean, intuitive interface, helping you track your progress,become motivated(streaks) and enhance your reading experience.</span>
            </div>
        </div>
    </div>
  )
}

export default Feature