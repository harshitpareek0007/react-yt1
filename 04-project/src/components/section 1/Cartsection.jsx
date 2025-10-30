import React from 'react'
import { ArrowBigRight } from 'lucide-react';

const Cartsection = (props) => {
  return (
    <div className='h-full w-80  shrink-0 rounded-3xl overflow-hidden relative'>
            <img className=' h-full w-full object-cover' src={props.img}></img>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className=' absolute top-0 left-0 pt-7 pl-5 pr-5 flex flex-col h-full justify-between'>
              <h1 className=' rounded-full bg-black text-white px-3 py-1 w-fit text-2xl'>{props.id}</h1>
              <div >
                <p className='text-white leading-relaxed font-bold pb-5'>{props.text}</p>
                <div className=' flex justify-between text-white py-6'>
                <button className='px-10 py-3 rounded-3xl text-[15px] font-bold bg-blue-900'>{props.tag}</button>
                <button className=' py-5  px-5 rounded-full font-bold bg-blue-900'><ArrowBigRight  color='white'/></button>
                </div>
                
              </div>
            </div>
          </div>
  )
}

export default Cartsection