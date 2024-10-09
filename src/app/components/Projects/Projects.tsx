import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import Slider,{Settings} from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from '../Carousel/Carousel';

const Projects = () => {
  
  const projectData =[
    { 
      id:1,
      img:"/dev-link.svg",
      name:"dev-Links",
      desc:"A Link sharing app for developers where developers",
      repo:"https://github.com/Sbtech24/dev-links",
      liveDemo:""
    },

    { 
      id:2,
      img:"/dictionary-web-app.jpg",
      name:"dictionary web-app",
      desc:"A dictionary web application where users can search words and get the meaning ",
      repo:"https://github.com/Sbtech24/Dictionary-web-app-",
      liveDemo:"https://dictionary-web-app-liart.vercel.app/"
    },

    { 
      id:3,
      img:"/countries.jpg",
      name:"Countries app",
      desc:"A web app that displays set of countries and important facts gotten from a rest api ",
      repo:"https://github.com/Sbtech24/Countries",
      liveDemo:"https://loreys-countries-info-app.vercel.app/"
    }

  ]
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Carousel items={projectData}/>
     </div>
   
  )
}

export default Projects