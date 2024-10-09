"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

type CarouselItem = {
  id: number;
  name:string;
  img: string;
  desc: string;
  repo: string;
  liveDemo:string;
};

type CarouselProps = {
  items: CarouselItem[];
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    
    
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
      <Link href={items[currentIndex].liveDemo}>
      <div className="relative w-full">
        <img
          src={items[currentIndex].img}
          alt={items[currentIndex].name}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg">
          <h2 className="text-white text-xl font-semibold">{items[currentIndex].name}</h2>
          <p className="text-white">{items[currentIndex].desc}</p>
        </div>

        {/* <div className='flex justify-end'>
          <img src='/github.svg' alt='github' width={10}/>
          <img src='/external-link.svg' alt='external'/>
        </div> */}
      </div>
      </Link>

      <div className="flex justify-between w-full mt-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
   
  );
};

export default Carousel;
