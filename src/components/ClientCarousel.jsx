import Slider from "react-slick";
import clientOneImg from "../imgs/Home/1.png";
import clientTwoImg from "../imgs/Home/2.png";
import clientThreeImg from "../imgs/Home/3.png";
import clientFourImg from "../imgs/Home/4.png";
import clientFiveImg from "../imgs/Home/5.png";
import clientSixImg from "../imgs/Home/6.jpeg";
import clientSevenImg from "../imgs/Home/7.png";
import clientEightImg from "../imgs/logos/IMG_3929.GIF";
import clientNineImg from "../imgs/logos/IMG_3930.JPG";
import clientTenImg from "../imgs/logos/IMG_3931.PNG";
import clientElevenImg from "../imgs/logos/IMG_3932.png";
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

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // continuous scrolling
    speed: 10000, // slower and smoother
    cssEase: "linear", // smooth continuous motion
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
          <div key={i} className="h-32 sm:h-36 md:h-40 px-1"> {/* Less spacing */}
            <div className="h-full flex justify-center items-center bg-white rounded-lg overflow-hidden">
              <img
                className={`object-contain max-h-full ${
                  i < 7
                    ? "scale-110"
                    : i === 15 || i === 17
                    ? "scale-125"
                    : "scale-100"
                }`}
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
