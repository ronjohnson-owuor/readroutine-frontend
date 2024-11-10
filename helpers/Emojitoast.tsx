import { emoji } from '@/interfaces/toastinterface'
import React from 'react'

function Emojitoast({emoji,message}:emoji) {
  return (
    <div className='flex flex-wrap items-center z-10 gap-2'>
        <div>{emoji}</div>
        <span>{message}</span>
    </div>
  )
}

export default Emojitoast