"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

type CarouselItem = {
  id: number;
  name: string;
  img: string;
  desc: string;
  repo: string;
  liveDemo: string;
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
    <div className="flex flex-row items-center justify-center w-full max-w-lg mx-auto">
      <button
        title="prev"
        onClick={handlePrev}
        className="px-4 py-2 text-white font-semibold rounded-lg  transition"
      >
        <img src="/arrow-back.svg" alt="" />
      </button>
      <Link href={items[currentIndex].liveDemo}>
        <div className="relative w-full">
          <img
            src={items[currentIndex].img}
            alt={items[currentIndex].name}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg">
            <h2 className="text-white text-xl font-semibold">
              {items[currentIndex].name}
            </h2>
            <p className="text-white">{items[currentIndex].desc}</p>
          </div>
        </div>
      </Link>
      <button
          title="next"
          onClick={handleNext}
          className="px-4 py-2  text-white font-semibold rounded-lg  transition"
        >
          <img src="/arrow-next.svg" alt="" />
        </button>
     
    </div>
  );
};

export default Carousel;
