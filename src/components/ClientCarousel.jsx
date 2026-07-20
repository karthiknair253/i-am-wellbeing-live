import Slider from "react-slick";

const clientOneImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/1.png`;
const clientTwoImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/2.png`;
const clientThreeImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/3.png`;
const clientFourImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/4.png`;
const clientFiveImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/5.png`;
const clientSixImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/6.jpeg`;
const clientSevenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/7.png`;
const clientEightImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_3929.GIF`;
const clientNineImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_3930.JPG`;
const clientTenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_3931.PNG`;
const clientElevenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_3932.WEBP`;
const clientTwelveImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5236.PNG`;
const clientThirteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5237.JPG`;
const clientFourteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5238.PNG`;
const clientFifteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5239.PNG`;
const clientSixteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5240.PNG`;
const clientSeventeenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5241.PNG`;
const clientEighteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5242.PNG`;
const clientNineteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5243.PNG`;
const clientTwentyImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5244.JPG`;
const clientTwentyOneImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5245.JPG`;

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
                loading="lazy"
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
