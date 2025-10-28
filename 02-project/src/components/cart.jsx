import React from "react"
import {Bookmark} from 'lucide-react'
function Cart( props){
    return(
    <>
    
      <div className="cart">
        <div>
        <div className="top">
          <img src={props.logo}></img>
          <button>save <Bookmark size={13}/></button>
        </div>
        <div className='mid'>
          <div>
          <h3>{props.name}<span>{props.time}</span></h3>
          <h2>{props.role}</h2>
          </div>
          <div>
            <button>{props.tag1}</button>
            <button>{props.tag2}</button>
          </div>

        </div>
        </div>
        <div className="bottom">
          <div>
            <h1>{props.price}</h1>
            <h4>{props.location}</h4>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>

    </>
    )
}
export default Cart;