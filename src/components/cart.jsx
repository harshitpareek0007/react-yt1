function Cart(props) {
    const name=props.name;
    const img=props.img;
  return (

        <div className="child">
        <img src={img}></img>
        <h1>{name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat alias nam amet voluptates! Nesciunt neque ipsa dolore, maiores ex laboriosam sequi minima fugiat atque hic ratione voluptatibus eius quis sunt.</p> 
       <button>view profile</button>
    
    
    </div>
  )
}

export default Cart
