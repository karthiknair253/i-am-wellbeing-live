"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import home1 from "../imgs/home-images/Carosual1.png";
import home2 from "../imgs/home-images/Carosual2.png";
import home3 from "../imgs/home-images/Carosual3.png";
import home4 from "../imgs/home-images/Carosual4.png";
import home5 from "../imgs/home-images/Carosual5.png";

export default function Carousel() {
  const images = [home1, home2, home3, home4, home5];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[600px] xl:h-[800px] object-cover object-center bg-white transition-all duration-700 ease-in-out"
      />

      {/* Animated Text */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-start md:ml-16 lg:ml-32 px-6">
        <h1
     
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold font-alegreya text-white bg-[#545656]/50 lg:p-4 p-2"
        >
          Making India<br/> Trauma-Informed
        </h1>
      </div>

      {/* Image navigation indicators */}
      <div className="absolute bottom-8 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`lg:w-3 lg:h-3 h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/40"
            } transition-all`}
          ></button>
        ))}
      </div>
    </section>
  );
}
