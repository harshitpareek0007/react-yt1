import React from 'react'
import Cartsection from './cartsection'

const Rightcontent = (props) => {
  
  
  return (
    <div id="right"className= '  h-full w-3/4 p-3 rounded-4xl  gap-5 flex flex-nowrap  overflow-x-auto '>
      
      {props.user.map(function(elem){
        return <Cartsection img={elem.img}
        text={elem.intro}
        id={elem.id}
        tag={elem.tags}
        ></Cartsection>
      })}
    </div>
  )
}

export default Rightcontent