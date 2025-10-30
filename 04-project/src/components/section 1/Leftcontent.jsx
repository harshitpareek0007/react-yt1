import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Leftcontent = () => {
  return (
    <div className= '  flex justify-between flex-col h-full w-1/3'>
      <div className='p-4'><h1 className=' leading-tight text-6xl tracking-tighter font-bold '>Prospective<br></br>
      <span className=' bg-gray-400  rounded-full px-3 align-middle '>customer</span><br></br>
      segmentation
      </h1>
      <p className=' px-2 py-5 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem, facilis quam neque sapiente itaque libero reprehenderit expedita, assumenda repudiandae asperiores voluptas. Placeat vel aliquam laboriosam. </p>
      </div>
      <div><ArrowUpRight size={70} /></div>
     
    </div>
  )
}

export default Leftcontent