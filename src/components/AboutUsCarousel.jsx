// import Slider from "react-slick";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import {motion} from "framer-motion"

// import PropTypes from "prop-types";
// import { useEffect, useState } from "react";

// const circle1 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_1.png`;
// const circle2 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_2.png`;
// const circle3 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_3.png`;
// const circle4 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_4.png`;
// const circle5 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_5.png`;
// const circle6 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_6.png`;

// const AboutUsCarousel = () => {
//   const [screenSize, setScreenSize] = useState(window.innerWidth);

//   const getScreenSize = () => {
//     setScreenSize(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", getScreenSize);
//     return () => {
//       window.removeEventListener("resize", getScreenSize);
//     };
//   }, [screenSize]);

//   const data = [
//     {
//       img: circle1,
//       text: "To break the cycle of intergenerational trauma",
//     },
//     {
//       img: circle2,
//       text: "To achieve UN SDG Goal 3.4, to reduce the rate of early death caused by suicide, heart diseases & lung diseases ",
//     },
//     {
//       img: circle3,
//       text: "To work through the challenges of addiction and other high-risk coping mechanisms adopted by survivors.",
//     },
//     {
//       img: circle4,
//       text: "To reduce the instances of crime and violence in vulnerable communities",
//     },
//     {
//       img: circle5,
//       text: "To create a Community of Mental Healthcare workers across the globe",
//     },
//     {
//       img: circle6,
//       text: "To reduce the gap between survivors and available support by training mental health professionals ",
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

//   return (
//     <div className="py-16">
//       <Slider {...settings}>
//         {data.map((card) => (
//           <div key={card.text} className="">
//           <div className="grid grid-cols-[auto_auto_auto] items-center justify-center w-fit mx-auto px-4">
//             {/* 1. Circular Image */}
//             <div className="flex-shrink-0">
//               <div className="rounded-full overflow-hidden w-44 h-44 tab:w-72 tab:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
//                   <img
//                     loading="eager"
//                     src={card.img}
//                   className="min-w-full min-h-full object-cover"


//                 />
//               </div>
//             </div>

//             {/* 2. SVG Connector */}
//             <div className="flex-shrink-0 ">
//               <SvgIcon className="h-20 tab:h-60 lg:h-72" />
//             </div>

//             {/* 3. Text Box */}
//             <div className="border-2 border-black rounded-3xl p-4  min-h-36 max-w-48 tab:max-w-80 tab:min-h-56 lg:max-w-96 flex items-center justify-center">
//               <p className="text-center text-sm tab:text-xl lg:text-2xl font-semibold">
//                 {card.text}
//               </p>
//             </div>
//           </div>
//         </div>))}
//       </Slider>
//     </div>
//   );
// };

// const SvgIcon = ({ className, ...props }) => (
//   <svg
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
//     viewBox="0 0 197 477"
//     className={className}
//     {...props}
// >
//   <motion.path
//     stroke="#000"
//       strokeWidth="4"
//       initial={{pathLength:0}}
//       whileInView={{ pathLength: 1 }}
//       transition={{duration:1,delay:0.4}}
//     d="M0 247.317h44.29c13.254 0 24 10.745 24 24v181.187c0 12.413 10.062 22.476 22.475 22.476s22.476-10.063 22.476-22.476V19.766a17.766 17.766 0 0 1 35.532 0v201.551c0 13.255 10.746 24 24 24H206"
//   ></motion.path>
// </svg>
// );

// SvgIcon.propTypes = {
//   className: PropTypes.string,
// };

// export default AboutUsCarousel;
"use client";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import circle5 from "../imgs/Home/circle6.jpeg"
import circle6 from "../imgs/Home/circle6.png"


const circle1 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_1.png`;
const circle2 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_2.png`;
const circle3 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_3.png`;
const circle4 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_4.png`;
// const circle5 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_5.png`;
// const circle6 = `${import.meta.env.VITE_PUBLIC_URL}/Home/circle_6.png`;


const AboutUsGrid = () => {
  const data = [
    { img: circle1, text: "To break the cycle of intergenerational trauma" },
    { img: circle2, text: "To achieve UN SDG Goal 3.4 - reduce the rate of early death caused by suicide, heart diseases & lung diseases" },
    { img: circle3, text: "To work through the challenges of addiction and other high-risk coping mechanisms." },
    { img: circle4, text: "To reduce the instances of crime and violence in vulnerable communities" },
    { img: circle5, text: "To create a Community of Mental Healthcare workers across the globe" },
    { img: circle6, text: "To reduce the gap between trauma and healing by training mental health professionals" },
  ];

  const loopData = [...data, ...data];

  return (
    <div className="relative overflow-hidden py-5 px-4 lg:px-16">
      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 100,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopData.map((card, i) => (
          <div key={i} className="flex flex-row items-center flex-shrink-0">
            <div className="rounded-full overflow-hidden w-44 h-44 sm:w-52 sm:h-52 lg:w-54 lg:h-54 flex items-center justify-center mb-4 border-[#a8d940] border-2">
              <img
                src={card.img}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <SvgIcon className="h-[12rem] sm:h-[15rem] lg:h-[17rem] mb-4" />

            <div className="border-2 border-[#a8d940] rounded-3xl min-h-[6rem] sm:min-h-[8rem] lg:min-h-[10rem] max-w-xs sm:max-w-sm flex items-center justify-center text-center p-4">
              <p className="text-xs sm:text-sm lg:text-lg font-semibold font-alegreya">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SvgIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 197 477"
    className={className}
    {...props}
  >
    <motion.path
      stroke="#a8d940"
      strokeWidth="4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      d="M0 247.317h44.29c13.254 0 24 10.745 24 24v181.187c0 12.413 10.062 22.476 22.475 22.476s22.476-10.063 22.476-22.476V19.766a17.766 17.766 0 0 1 35.532 0v201.551c0 13.255 10.746 24 24 24H206"
    ></motion.path>
  </svg>
);

SvgIcon.propTypes = {
  className: PropTypes.string,
};

export default AboutUsGrid;


