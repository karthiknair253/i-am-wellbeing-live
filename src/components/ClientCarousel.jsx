import Slider from "react-slick";
import clientOneImg from "../imgs/Home/1.png";
import clientTwoImg from "../imgs/Home/2.png";
import clientThreeImg from "../imgs/Home/3.png";
import clientFourImg from "../imgs/Home/4.png";
import clientFiveImg from "../imgs/Home/5.png";
import clientSixImg from "../imgs/Home/6.jpeg";
import clientSevenImg from "../imgs/Home/7.png";
import clientEightImg from "../imgs/logos/government-of-punjab.svg";
import clientNineImg from "../imgs/logos/IMG_3930.JPG";
import clientTenImg from "../imgs/logos/IMG_3931.PNG";
import clientElevenImg from "../imgs/logos/vartamaan.jpeg";
import clientTwelveImg from "../imgs/logos/IMG_5236.PNG";
import clientThirteenImg from "../imgs/logos/IMG_5237.JPG";
import clientFourteenImg from "../imgs/logos/IMG_5238.PNG";
import clientFifteenImg from "../imgs/logos/IMG_5239.PNG";
import clientSixteenImg from "../imgs/logos/IMG_5240.PNG";
import clientSeventeenImg from "../imgs/logos/IMG_5241.PNG";
import clientEighteenImg from "../imgs/logos/IMG_5242.jpg";
import clientNineteenImg from "../imgs/logos/IMG_5243.PNG";
import clientTwentyImg from "../imgs/logos/IMG_5244.JPG";
import clientTwentyOneImg from "../imgs/logos/IMG_5245.JPG";

const clientImg = [
  clientOneImg, clientTwoImg, clientThreeImg, clientFourImg, clientFiveImg,
  clientSixImg, clientSevenImg, clientEightImg, clientNineImg, clientTenImg,
  clientElevenImg, clientTwelveImg, clientThirteenImg, clientFourteenImg,
  clientFifteenImg, clientSixteenImg, clientSeventeenImg, clientEighteenImg,
  clientNineteenImg, clientTwentyImg, clientTwentyOneImg,
];

// Compensate for whitespace baked into individual source files so every
// organisation mark has a similar visual weight without being cropped.
const clientLogoScale = [
  0.92, 1.08, 1, 0.9, 0.92, 0.92, 0.9,
  0.95, 1, 0.96, 1.2, 1.04, 1.06, 0.92,
  0.9, 1.04, 0.9, 1.06, 1.04, 0.88, 0.88,
];

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2500, // show the complete 21-logo set in under a minute
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-5 px-4">
      <Slider {...settings} className="py-6">
        {clientImg.map((img, i) => (
          <div key={i} className="h-32 sm:h-36 md:h-40 px-3">
            <div className="h-full flex justify-center items-center bg-white rounded-lg overflow-hidden p-3">
              <img
                className="block object-contain transition-transform duration-300"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: `scale(${clientLogoScale[i]})`,
                }}
                src={img}
                alt={`Client logo ${i + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
