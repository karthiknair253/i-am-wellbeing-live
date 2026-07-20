import React, { useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import body from "../imgs/program-images/body.png";
import nerves from "../imgs/program-images/nertb.png";

const BodyImagePart = () => {
  const [isInView, setIsInView] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the parent is in view
    );

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        observer.unobserve(parentRef.current);
      }
    };
  }, []);

  return (
    <div className="flex-[50%] h-screen">
      <div
        ref={parentRef}
        className="relative h-screen flex justify-center items-center max-md:mx-10 max-sm:mx-0"
      >
        {/* Body Background */}
        <div
          style={{ backgroundImage: `url(${body})` }}
          className="absolute inset-0 bg-contain bg-no-repeat bg-center xl:w-full xl:h-full xl:bg-positionSmall max-sm:bg-positionSmaller"
        />

        {/* Nerves Image */}
        <img
          src={nerves}
          alt="nerves"
          className={`relative z-5 -left-3 max-md:-left-3 max-sm:left-[-7px] -top-16 sm:w-10/12 lg:w-[95%] md:w-full xl:w-[65%] h-auto object-contain w-full transition-all duration-[2000ms] ease-in-out ${
            isInView ? "scale-105" : "scale-75"
          }`}
        />
      </div>
    </div>
  );
};

export default BodyImagePart;
