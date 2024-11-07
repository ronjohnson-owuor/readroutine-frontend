import React from 'react'

function Extras() {
  return (
    <div className='my-10 mt-[60px] w-[90%] mx-[5%]'>
        <div>
            <center><h1 className='text-mainColor font-bold text-2xl animate-bounce'>it is  even more fun when...</h1></center>
            <div className='mt-[60px]'></div>
            <div className='w-[80%] min-h-[300px] rounded-sm mx-[10%] grid grid-cols-2 gap-10 my-4'>
                <div className='w-full h-full bg-lightFg rounded-md'></div>
                <div className='flex flex-col items-start gap-4 justify-center'>
                    <p className='tracking-widest'>...you can find people who read the same genre as you and make friends or form the best  study club in the website or just follow them to know what they are reading.</p>
                    <button className='p-4 transition-all duration-500 hover:-translate-y-2 bg-mainColor rounded-lg text-sm hover:text-white'>Connect with Fellow Readers</button>
                </div>
                
            </div>

            <div className='w-[80%] min-h-[300px] rounded-sm mx-[10%] grid grid-cols-2 gap-10 my-10 mt-[100px]'>
                <div className='flex flex-col items-start gap-4 justify-center'>
                    <p className='tracking-widest'>...the whole app is a gamified adventure where friendly competition keeps you motivated to stick to your reading goals. Ready to start your streak? Rise to the top of the leaderboard as the ultimate reader, conquer exciting quests, and unlock achievements! </p>
                    <button className='p-4 transition-all duration-500 hover:-translate-y-2 bg-mainColor rounded-lg text-sm hover:text-white'>let's get reading💪</button>
                </div>
                <div className='w-full h-full bg-lightFg rounded-md'></div>
            </div>
        </div>
    </div>
  )
}

export default Extras