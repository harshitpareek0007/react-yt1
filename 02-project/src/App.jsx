import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Cart from './components/cart'

function App() {
  const jobs = [
  {
    id: 1,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    timeline: "5 days ago",
    role: "Senior UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    price: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    timeline: "3 days ago",
    role: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Software Engineer",
    price: "$150/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    companyName: "Google",
    timeline: "1 day ago",
    role: "Product Designer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    price: "$200/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Facebook_icon_2013.svg",
    companyName: "Meta",
    timeline: "2 weeks ago",
    role: "React Developer",
    tag1: "Remote",
    tag2: "Frontend Developer",
    price: "$130/hr",
    location: "Delhi, India",
  },
  {
    id: 5,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Tesla_logo.png",
    companyName: "Tesla",
    timeline: "4 days ago",
    role: "Backend Developer",
    tag1: "Full-Time",
    tag2: "Node.js Engineer",
    price: "$180/hr",
    location: "Pune, India",
  },
  {
    id: 6,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Netflix_2015_logo.svg",
    companyName: "Netflix",
    timeline: "6 days ago",
    role: "Data Analyst",
    tag1: "Internship",
    tag2: "Data Science",
    price: "$60/hr",
    location: "Remote",
  },
  {
    id: 7,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Apple_logo_black.svg",
    companyName: "Apple",
    timeline: "1 week ago",
    role: "iOS Developer",
    tag1: "Full-Time",
    tag2: "Mobile Developer",
    price: "$190/hr",
    location: "Chennai, India",
  },
  {
    id: 8,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Adobe_Corporate_Logo.png",
    companyName: "Adobe",
    timeline: "2 days ago",
    role: "Graphic Designer",
    tag1: "Part-Time",
    tag2: "Creative Team",
    price: "$100/hr",
    location: "Jaipur, India",
  },
  {
    id: 9,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Intel-logo.svg",
    companyName: "Intel",
    timeline: "3 weeks ago",
    role: "Embedded Engineer",
    tag1: "Full-Time",
    tag2: "Hardware Developer",
    price: "$160/hr",
    location: "Noida, India",
  },
  {
    id: 10,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/IBM_logo.svg",
    companyName: "IBM",
    timeline: "2 days ago",
    role: "Cloud Engineer",
    tag1: "Contract",
    tag2: "AWS Specialist",
    price: "$140/hr",
    location: "Gurgaon, India",
  },
];


  return (
    <>
    <div className='perent'>
     {jobs.map(function (job,idx) {
       return <div key={idx}><Cart logo={job.companyLogo}
          name={job.companyName}
          timeline={job.timeline}
          role={job.role}
          tag1={job.tag1}
          tag2={job.tag2}
          price={job.price}
          location={job.location} /></div>
     }
      
     )}
      
    </div>
     
    </>
  )
}

export default App
