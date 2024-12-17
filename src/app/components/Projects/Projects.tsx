import React from 'react'

import Link from "next/link"
import { ExternalLinkIcon } from '@radix-ui/react-icons'

const Projects = () => {
  
  const projectData =[
    { 
      id:1,
      img:"/dev-link.svg",
      name:"dev-Links",
      desc:"A Link sharing app for developers where developers",
      repo:"https://github.com/Sbtech24/dev-links",
      liveDemo:"",
      skills:["Typescript","React","Next js","Firbase"]
    },

    { 
      id:2,
      img:"/dictionary-web-app.jpg",
      name:"dictionary web-app",
      desc:"A dictionary web application where users can search words and get the meaning ",
      repo:"https://github.com/Sbtech24/Dictionary-web-app-",
      liveDemo:"https://dictionary-web-app-liart.vercel.app/",
      skills:["Javascript","React","Dictionary API","Tailwind css"]
    },

    { 
      id:3,
      img:"/countries.jpg",
      name:"Countries app",
      desc:"A web app that displays set of countries and important facts gotten from a rest api ",
      repo:"https://github.com/Sbtech24/Countries",
      liveDemo:"https://loreys-countries-info-app.vercel.app/",
      skills:["Javascript","React","Country API","Tailwind css","Vite"]
    }

  ]
 
  return (
    <div className='mt-3'>
      <h3 className='font-bold' id='projects'>Projects</h3>
     {projectData.map((data)=>(
      <>
      <div key={data.id} className='bg-neutral-800 my-2 p-4'>
        <div className='flex justify-between'>
          <h5 className='capitalize'>{data.name}</h5>
          <Link href={data.liveDemo} className='flex items-center gap-2'>
            <ExternalLinkIcon/>
          <p className='text-sm text-neutral-300'>External Link</p>
          </Link>
          
        </div>
        <div className='py-2'>
        <p className='text-sm text-neutral-300 my-1'>{data.desc}</p>

        <p className='text-sm text-neutral-300 my-1'>Skills I picked up</p>
        </div>
        <div className='flex flex-wrap gap-2'>
         {data.skills.map((element)=>(
          <p className='text-xs mx-1 text-neutral-500 bg-neutral-900 p-2'>{element}</p>

         ))}
         
        </div>
        {/* github logo  */}
      </div>
      </>
     ))}
     </div>
   
  )
}

export default Projects