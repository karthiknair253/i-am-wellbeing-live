import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import textBorder from "../imgs/program-images/text-border.png";

const ResponsiveCardSlider = ({ cards, cardClass = '', imgClass = '', textClass = '' }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, // Pause autoplay when hovering over the slider
  };

  return (
    <div className='w-full max-md:py-6'>
      {/* Desktop View */}
      <div className='hidden md:flex flex-wrap justify-center gap-10 m-auto mb-10'>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center xs:h-auto xs:w-[70%] sm:w-[28%] md:w-[26%] lg:w-[26%] relative ${cardClass}`}
          >
            <img
              loading='lazy'
              src={textBorder}
              alt={`Card ${index + 1}`}
              className={`sm:w-full ${imgClass}`}
            />
            <p className={`absolute inset-0 flex justify-center items-center text-center text-black font-medium text-2xl p-8 sm:text-sm sm:p-2 md:text-[18px] md:p-4 lg:text-2xl lg:p-6 ${textClass}`}>
              {card.text}
            </p>
          </div>
        ))}
      </div>
      {/* Mobile View */}
      <div className='flex md:hidden w-full outline-none'>
        <Slider {...settings} className='m-auto w-[90%] overflow-hidden'>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col items-center relative xs:w-[70%] sm:w-[90%] pb-4 outline-none ${cardClass}`}
            >
              <img
                loading='lazy'
                src={textBorder}
                alt={`Card ${index + 1}`}
                className={`w-full ${imgClass}`}
              />
              <p className={`absolute inset-0 flex justify-center items-center text-center text-black font-medium text-2xl p-8 sm:text-2xl  sm:p-12 md:text-[18px] md:p-4 lg:text-2xl lg:p-6 ${textClass} text-gray-700 font-semibold max-xs:text-xl`}>
                {card.text}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResponsiveCardSlider;
