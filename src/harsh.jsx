import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const names=["ram","sham","kam","mama"];
  const [name,setName]=useState(names[0]);

  function changeName() {
    const change=Math.floor(Math.random()*names.length);
    setName(names[change]);
    
  }

  return (
    <>
    
      <Welcome name={name}/>
      <button onClick={changeName}
        
 
      >change name</button>
      
    </>
  )
}
function Welcome({name}){
  return <h1>hello {name}</h1>
}

export default App

