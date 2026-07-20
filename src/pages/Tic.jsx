import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";
import { useState } from "react";
import heroimage from "../imgs/home-images/HeroTic2.png"
import Circle1 from "../imgs/tic/Circle1.jpg"
import Circle2 from "../imgs/tic/Circle2.jpg"
import Circle3 from "../imgs/tic/Circle3.jpg"
import Circle4 from "../imgs/tic/Circle4.jpg"
import Point1 from "../imgs/tic/point1.png"
import Point2 from "../imgs/tic/point2.png"
import Point3 from "../imgs/tic/point3.png"
import Point4 from "../imgs/tic/point4.png"
import Point5 from "../imgs/tic/point5.png"
import { Heading } from "../components/heading";
const miniMagic = `${import.meta.env.VITE_PUBLIC_URL
  }/Home/mini_magick20190427-2009-ff1osr.png`;
const tic2 = `${import.meta.env.VITE_PUBLIC_URL}/Home/tic2.png`;
const test1 = `${import.meta.env.VITE_PUBLIC_URL
  }/ticp-images/quote-bg-green.png`;
const resistImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/resist.png`;
const realiseImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/realise.png`;
const recogniseImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/recognise.png`;
const respondImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/respond.png`;

const tic_1 = `${import.meta.env.VITE_PUBLIC_URL}/ticp-images/tic_1.png`
const tic_2 = `${import.meta.env.VITE_PUBLIC_URL}/ticp-images/tic_2.png`


const Tic = () => {
  const cards = [
    {
      id: 1,
      src: Point1,
    },
    {
      id: 2,
      src: Point2
    },
    {
      id: 3,
      src: Point3,
    },
    {
      id: 4,
      src: Point4
    },
    {
      id: 5,
      src: Point5
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const values = [
    {
      title: "Safety",
      img: Circle1,
    },
    {
      title: "Collaboration",
      img: Circle2,
    },
    {
      title: "Choice",
      img: Circle3,
    },
    {
      title: "Empowerment",
      img: Circle4,
    },
    {
      title: "Trust",
      img: Circle1,
    },
  ];

  const cardsShow = [
    {
      title: "Realise",
      text: "the widespread impact of trauma & understand the potential paths of recovery",
    },
    {
      title: "Recognise",
      text: "the signs and symptoms of trauma in clients, families, staff, & others involved in the system",
    },
    {
      title: "Respond",
      text: "by fully integrating knowledge about trauma into policies, procedures, & practices",
    },
    {
      title: "Resist",
      text: "by actively resisting Re-traumatization",
    },
  ];

  return (
    <section className="w-full pt-[80px] md:pt-0">
      <section
        className="relative h-[40vh] sm:h-[45vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] 
                   flex items-center justify-center overflow-hidden bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroimage})`,
        }}
      >

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div
            className="border border-[#a8d940] px-4 sm:px-10 md:px-16 lg:px-20 
                       py-1 sm:py-2 md:py-3 bg-[#545656]/70 rounded-xl"
          >
            <h1 className="text-white text-md sm:text-3xl md:text-4xl lg:text-5xl font-bold font-alegreya">
              Understanding Trauma-Informed Care

            </h1>
          </div>
        </div>
      </section>


      {/* Intro Text Section */}
      <section className="py-5  lg:px-10 sm:px-2 md:px-5 p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">

        <div className="space-y-3 mt-10 relative flex flex-col gap-5 leading-10">
          <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

            Trauma is like <strong>invisible smoke,</strong> unseen but ever-present. Your body feels its weight,
            constantly working overtime to keep you safe, always on high alert for the next
            threat. It forces your organs into overdrive, disrupting normal functions while on
            the surface, everything appears fine.
          </p>

          <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
            Until one day, it’s not...</p>
          <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
            Your body falters, and instead of recognizing the toll trauma has taken, you end up blaming yourself. This is how deeply ingrained it gets in our system,
            eventually making our own selves accountable for what was never our fault, unknowingly perpetuating the cycle of intergenerational trauma.</p>

          <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

            <strong>
              Trauma-Informed Care (TIC) is about recognizing this invisible burden and reshaping
              the way we offer support.
            </strong>{" "}
            It is a human-centered approach that prioritizes safety, empowerment, and healing.
            Grounded in an understanding of trauma’s profound impact, TIC fosters physical,
            psychological, and emotional safety. Not just for survivors, but for caregivers,
            professionals, and communities as well.
          </p>

          <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

            It seeks to restore control, rebuild trust, and create spaces where survivors can
            reclaim their power, breaking cycles of trauma, rather than unknowingly reinforcing
            them.
          </p>
        </div>
      </section>


      <Heading Text="Principles of TIC" />

      <div className=" mx-auto pt-6 px-4 sm:px-8 lg:px-8 overflow-visible">
        <div className=" mx-auto mt-5 p-4 space-y-14 sm:space-y-20">
          <section className="w-full flex flex-col items-center py-8 ">

            <div className="relative w-full  mx-auto">

              {/* Desktop connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[#545656] -translate-y-1/2 z-0"></div>

              <div className="md:hidden marquee-container">
                <div className="marquee-track">
                  {[...cards, ...cards].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center mx-4 sm:mx-6"
                    >
                      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#545656] bg-white shadow-md flex items-center justify-center">
                        <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center relative">
                {cards.map((item, index) => (
                  <div
                    key={index}
                    className="relative z-10 flex flex-col items-center text-center mx-6"
                  >
                    <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-[#545656] bg-white shadow-md flex items-center justify-center">
                      <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full mx-auto">

              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[#545656] -translate-y-1/2 z-0"></div>

              <div className="md:hidden marquee-container">
                <div className="marquee-track">
                  {[...values, ...values].map((item, index) => (
                    <div key={index} className="text-center mx-4">
                      <h3 className="text-base font-semibold py-3">{item.title}</h3>
                      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#545656] bg-white shadow-md flex items-center justify-center">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center">
                {values.map((item, index) => (
                  <div
                    key={index}
                    className="relative z-10 flex flex-col items-center text-center mx-6"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold py-5">{item.title}</h3>
                    <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-[#545656] bg-white shadow-md flex items-center justify-center">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>




            {/* 4 R's Section */}
            <div className="container px-4 text-center overflow-hidden my-10">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 flex justify-center items-center ">
                <span className="text-6xl sm:text-7xl lg:text-8xl text-[#545656] mr-2">"</span>
                <span className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-[#545656]  font-alegreya">4 R's</span>
              </h1> <p className="text-4xl sm:text-6xl lg:text-7xl text-gray-600  mt-2  font-alegreya"> of Trauma-informed care <span className="text-6xl sm:text-7xl lg:text-8xl text-[#545656]">"</span> </p>

            </div>

            <div className=" px-4 sm:px-8 lg:px-8 py-5">
              {/* Mobile/Tablet Infinite Scroll Container */}
              <div className="block lg:hidden overflow-x-hidden">
                <div className="inline-flex gap-8 animate-scroll">
                  {[...cardsShow, ...cardsShow].map((item, i) => (
                    <div
                      key={i}
                      className="relative bg-[#B8E04A] rounded-3xl p-6 min-h-[200px] shadow-md w-[280px] flex-shrink-0 inline-block"
                    >
                      {/* Title Tab */}
                      <div className="absolute top-[1rem] left-[74%] -translate-x-1/2 items-center">
                        <div className="bg-[#545656] text-white px-2 py-2 rounded-full shadow pr-28">
                          <h3 className="text-lg font-semibold ml-2">{item.title}</h3>
                        </div>
                      </div>

                      {/* Box Content */}
                      <p className="mt-10 text-gray-800 leading-relaxed italic">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>


              {/* Desktop Grid Layout */}
              <div className="hidden lg:grid  xl:grid-cols-4 lg:grid-cols-4 gap-5 w-full  px-4 mx-8">
                {cardsShow.map((item, i) => (
                  <div
                    key={i}
                    className="relative bg-[#B8E04A] rounded-3xl p-6 h-[200px] w-[250px] shadow-md"
                  >
                    {/* Title Tab */}
                    <div className="absolute top-[1rem] left-[73%] -translate-x-1/2 items-center">
                      <div className="bg-[#545656] text-white px-2 py-2 rounded-full shadow pr-28">
                        <h3 className="text-lg font-semibold ml-2">{item.title}</h3>
                      </div>
                    </div>

                    <p className="mt-10 text-gray-800 leading-relaxed italic">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>


  );
};

export default Tic;
