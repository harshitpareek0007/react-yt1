import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
import Navbar from './Navbar'


function Center(props) {
   
  return (
    <div className='  py-11 flex   gap-10 items-center  h-[90vh] px-20'>
        <Leftcontent />
        <Rightcontent user={props.user}/>
    </div>
  )
}

export default Center