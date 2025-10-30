import React from 'react'
import Section1 from './components/section 1/section1'


function App() {
  const professional = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/15/8b/d8/158bd8c588c74eb11365f8e9ec1e200f.jpg",
    intro:
      "A focused professional reviewing project notes in a modern office, coffee cup nearby, soft natural light.",
    tags: "professional"
  },
  {
    id: 2,
    img: "https://picsum.photos/id/101/800/600",
    intro:
      "Smiling team lead presenting quarterly results to colleagues, confident posture and engaged attentive faces.",
    tags: "leadership"
  },
  {
    id: 3,
    img: "https://picsum.photos/id/102/800/600",
    intro:
      "Portrait of a software engineer coding at a laptop, headphones on, late evening focused concentration.",
    tags: "tech"
  },
  {
    id: 4,
    img: "https://picsum.photos/id/103/800/600",
    intro:
      "Marketing specialist brainstorming campaign ideas on whiteboard, colorful sticky notes and enthusiastic energy.",
    tags: "collaborative"
  },
  {
    id: 5,
    img: "https://picsum.photos/id/104/800/600",
    intro:
      "Young entrepreneur smiling outdoors, holding tablet, skyline background, determined and optimistic expression.",
    tags: "startup"
  },
  {
    id: 6,
    img: "https://i.pinimg.com/736x/bb/df/8b/bbdf8bbb253ad7e925eb1733c5ea164d.jpg",
    intro:
      "Customer support representative assisting client with headset, warm tone and helpful attentive service.",
    tags:  "service"
   }]
  return (
    <div>
      <Section1 user={professional}/>
      
      
    </div>
  )
}

export default App
