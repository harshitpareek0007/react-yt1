import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/cart.jsx'


 
 
 function App() {
   return (
     <div className='perent'>
      <Cart name="harhsit" img="https://plus.unsplash.com/premium_photo-1761297666287-134798741b2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715"/>
      <Cart name="ram " img="https://images.unsplash.com/photo-1761538087574-41254b89f252?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600"/>
      <Cart name="karna"img="https://images.unsplash.com/photo-1761538087574-41254b89f252?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600"/>
      <Cart name="harh"/>
      <Cart name="ram"/>
     
       
     </div>
   )
 }
 
  
export default App

