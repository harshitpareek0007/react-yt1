import React from 'react'
import Navbar from './Navbar'
import Center from './Center'

function page1(props) {
  
  return (
    <div className='h-screen w-full bg-amber-100'>
      <Navbar />
      <Center user={props.user}/>
    </div>
  )
}

export default page1
