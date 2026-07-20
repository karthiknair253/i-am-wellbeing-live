import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";
import textBorder from "../imgs/program-images/text-border.png";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
// import video from "../imgs/Home/vd.mov"

const boxVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,

    },
  },
};

const lastBox = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

const people = `${import.meta.env.VITE_PUBLIC_URL}/Home/peopleNewGreen.png`
const design = `${import.meta.env.VITE_PUBLIC_URL}/Home/design.png`;
// const video = `${import.meta.env.VITE_PUBLIC_URL}/Home/vd.mp4`;

const intro = `${import.meta.env.VITE_PUBLIC_URL}/Home/intro.png`;


import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";
import AboutUsCarousel from "../components/AboutUsCarousel";
import ClientCarousel from "../components/ClientCarousel";

import home1 from "../imgs/Home/home1.png";
import home2 from "../imgs/Home/home2.jpg";
import home3 from "../imgs/Home/home3.jpg";
import home4 from "../imgs/Home/home4.jpg";
import home5 from "../imgs/Home/home5.jpg";
import home6 from "../imgs/Home/home6.jpg";
import home7 from "../imgs/Home/home7.jpg";
import home8 from "../imgs/Home/home8.png";
import home9 from "../imgs/Home/home9.jpg";
import home10 from "../imgs/Home/home10.png";
import home11 from "../imgs/Home/home11.png";
import home12 from "../imgs/Home/home12.png";
import home13 from "../imgs/Home/home13.png";
import home14 from "../imgs/Home/home14.png";
import home15 from "../imgs/Home/home15.png";
import home16 from "../imgs/Home/home16.png";
import home17 from "../imgs/Home/home17.png";

import { ImageAutoFit } from "../components/ImageAutoFit";
import { Heading } from "../components/heading";



const Home = () => {
  const playerRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
          },
        },
      });
    };
  }, []);

  const toggleSound = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }
    setIsMuted(!isMuted);
  };

  const redirectToYoutube = () => {
    window.open("https://www.youtube.com/watch?v=t5jTHNB4rBc", "_blank");
  };
  const [isMuted, setIsMuted] = useState(true);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const counterOne = useRef(null);
  const counterTwo = useRef(null);
  const hasScrolledToSectionOne = useRef(false);
  const hasScrolledToSectionTwo = useRef(false);

  const scrollRefs = useRef([]);

  useEffect(() => {
    scrollRefs.current.forEach((ref) => {
      if (ref) {
        let scrollAmount = 0;
        const scrollSpeed = 0.3;

        const step = () => {
          scrollAmount += scrollSpeed;
          if (scrollAmount >= ref.scrollWidth / 2) {
            scrollAmount = 0;
          }
          ref.scrollLeft = scrollAmount;
          requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      }
    });
  }, []);


  const animateCounter = (target, setNum, ref, hasScrolled) => {
    if (ref.current && !hasScrolled.current) {
      const rect = ref.current.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        hasScrolled.current = true;

        const startTime = performance.now();
        const duration = 2000; // Duration of the animation in milliseconds
        const initialValue = 0;

        const incrementCounter = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1); // Ensure it doesn't exceed 1

          const currentValue = Math.floor(
            initialValue + (target - initialValue) * progress
          );
          setNum(currentValue);

          if (progress < 1) {
            requestAnimationFrame(incrementCounter);
          }
        };

        requestAnimationFrame(incrementCounter); // Start the animation
      }
    }
  };

  const handleScroll = () => {
    animateCounter(3346, setNum1, counterOne, hasScrolledToSectionOne);
    animateCounter(100844, setNum2, counterTwo, hasScrolledToSectionTwo);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const programs = [
    {
      title: "Anubhoo",
      description: "Trauma-Informed Care Training ",
      section: "anubho",
      url: '/anuboo'
    },
    {
      title: "Udaan",
      description: "Individual counselling and therapy  ",
      section: "udaan",
      url: '/udaan'
    },
    {
      title: "Project Arya",
      description: "Trauma-Informed Care Training ",
      section: "arya",
      url: '/aryan'
    },
  ];



  const imagesRows = [
    [
      home1,
      home2,
      home3,
      home4,
      home5,
      home6,
      home7,
      home8,
      home9,
      home10,
      home11,
      home12, home13, home14, home15, home15, home16, home17
    ],


  ];

  const sizesMapRow0 = {
    4: { width: "25rem", height: "10rem" }, // home5
    8: { width: "25rem", height: "10rem" }, // home9
  };

  return (
    <section className="w-full pt-[80px] md:pt-0">

      <Carousel />

      <section className="section about-us py-8">
        <div className="max-w-6xl 2xl:max-w-7xl  mx-auto">
          <div className="w-full">
            <div className="flex jus p-4 tab:px-16 ">
              <div className=" flex flex-col gap-9 lg:gap-12 w-[140%] ">
                <div className=" flex flex-col gap-9">
                  <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                    Trauma is a silent epidemic disrupting lives across socio-economic strata,
                    particularly of those on the margins. The six-letter word is weighing down
                    millions of Indians as a majority remains unaware of its prevalence and consequences.


                  </p>
                  <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                    At <strong>I Am Wellbeing | Nairatmya Foundation,</strong> we are lifting that weight off individuals one
                    intervention at a time by empowering an army of changemakers on the ground. We are a
                    mental health not-for-profit organisation dedicated to breaking cycles of intergenerational
                    trauma and building an ecosystem of trusted, available, and trained adults.
                  </p>

                  <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                    We work with underserved, high-risk communities and have <strong>supported over one lakh survivors</strong> of violence,
                    discrimination, abuse, and systemic oppression. With a multidisciplinary team of experts, our holistic
                    approach to mental health care includes individual therapy, group interventions, and skill-building.
                  </p>
                  <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                    We are <strong>democratising access to mental health</strong> by making high-quality, low-cost support accessible
                    to all as we believe healing is not a privilege, it is a right!
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


      <div className="w-full bg-white">
        {imagesRows.map((row, rowIndex) => (
          <div key={rowIndex} className="my-6">
            <div className="my-6 flex flex-col gap-[6px]">
              <div className="border-t-4 border-[#a8d940] w-full"></div>
              <div className="border-t-4 border-[#a8d940] w-full"></div>
            </div>

            <div
              ref={(el) => (scrollRefs.current[rowIndex] = el)}
              className="flex overflow-hidden relative space-x-4 px-4"
            >
              {row.map((img, i) => (
                <ImageAutoFit key={i} src={img} index={i} sizesMap={sizesMapRow0} />
              ))}
            </div>

            <div className="my-6 flex flex-col gap-[6px]">
              <div className="border-t-4 border-[#a8d940] w-full"></div>
              <div className="border-t-4 border-[#a8d940] w-full"></div>
            </div>
          </div>
        ))}
      </div>




      {/* Programs */}
      <section className=" mx-auto max-md:m-0  ">


        <Heading Text={'Our Programs'} />
        <div className="-mt-10  flex gap-7 flex-wrap lg:flex-nowrap py-10">
          <div className="flex flex-wrap justify-center gap-16 m-auto mt-20">
            {programs?.map((card, index) => (
              <HashLink
                smooth
                key={card?.title}
                to={card?.url}
                className="flex flex-col justify-center items-center  group hover:cursor-pointer "
              >
                <div className="relative   border-2  border-[#a8d940] rounded-3xl p-3 ">
                  <div className="absolute inset-0 m-2 border-2  border-[#a8d940] rounded-3xl pointer-events-none -top-6 -left-6 "></div>

                  <div className="flex flex-col justify-center items-center text-center py-10 ">
                    <h2 className="lg:text-5xl text-2xl font-bold mb-2 sm:text-2xl font-alegreya">{card?.title}</h2>
                    <p className="text-black font-medium text-lg sm:text-sm md:text-base lg:text-2xl px-2 font-alegreya">
                      {card?.description}
                    </p>
                  </div>
                </div>
                <div href={card?.url} className="py-2 lg:text-2xl sm:text-xl text-md mt-6 border border-black px-8 rounded-full group-hover:bg-neutral-700/15 transition-colors font-alegreya">
                  Read More
                </div>
              </HashLink>
            ))}
          </div>
        </div>

      </section>
      <section className="section about-us">
        <div className="mx-auto">
          <Heading Text={" Our essence, at a glance..."} />

          <div className="flex flex-col xl:flex-row items-center justify-around gap-10 md:gap-16 px-4 md:px-12 lg:px-20 py-5 bg-white">
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 rounded-3xl border-[3px] border-[#a8d940] translate-x-2 translate-y-2"></div>
              <div className="absolute inset-0 rounded-3xl border-[2px] border-[#a8d940]"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-lg border-[3px] border-[#a8d940]">

                {/* YouTube iframe */}
                <iframe
                  ref={iframeRef}
                  className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-[250px] sm:h-[330px] md:h-[390px] lg:h-[450px]"
                  src="https://www.youtube.com/embed/t5jTHNB4rBc?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=t5jTHNB4rBc&controls=0&modestbranding=1"
                  title="YouTube video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                />

                {/* Click overlay → Redirect */}
                <div
                  onClick={redirectToYoutube}
                  className="absolute inset-0 cursor-pointer"
                />

                {/* Sound toggle button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSound();
                  }}
                  className="absolute bottom-4 right-4 bg-black/70 text-white p-3 rounded-full hover:bg-black transition"
                >
                  {isMuted ? "🔇" : "🔊"}
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col items-center justify-center text-center gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-7xl font-semibold font-alegreya">
                  7000+
                </h2>
                <p className="text-lg sm:text-xl lg:text-3xl mt-2 font-alegreya">
                  Professionals Trained
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-7xl font-semibold font-alegreya">
                  1,15,000+
                </h2>
                <p className="text-lg sm:text-xl lg:text-3xl mt-2 font-alegreya">
                  Lives Impacted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section about-us py-5 ">


        <Heading Text={' Why we do what we do...'} />
      </section>

      <AboutUsCarousel className="max-w-xl border" />

      <section className="section about-us py-5 ">

        <Heading Text={' Clients and Partners'} />
      </section>

      <ClientCarousel />
      {/* <Testimonials /> */}
    </section>
  );
};

export default Home;

const DownRightSvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 2048 1783"
  >
    <path
      fill="#BDE152"
      d="M1094 90h10l1 2v9l-5 4-11 4-47 12-44 13-38 14-27 12-21 10-22 13-21 13-20 14-12 9-10 8-13 12-17 16-19 19-7 8-13 15-9 12-13 18-12 19-11 17-9 16-8 16-10 22-12 28-9 24-10 35-1 6 12 2 3-10 10-25 23-47 10-19 15-25 14-22 22-33 14-18 13-17 11-12 7-8 8-7 14-12 19-14 17-11 27-14 23-11 48-18 27-9 20-5 6-1h23l11 4 4 4 2 7v12l-2 2-5-1-17-11-13 1-28 7-36 12-20 8-18 8-25 12-22 12-19 13-21 16-14 12-17 17-13 17-11 15-11 17-13 21-14 23-14 24-15 29-19 38-13 30-11 31-9 34-4 19-3 22-2 25-1 20v58l4 48 5 36 7 40 9 40 12 45 11 36 7 20 7 13 12 1 4 4 12 31 8 24 19 74 10 35 10 30 10 24 12 24 14 24 13 19 16 24 6 11v2l8-7 10-11 8-11 10-13 11-13 11-14 10-11 7-8 31-31 1-2h2l2-4 10-10 8-7 13-11 11-7 2 1 3 17 7 49 9 61 10 60 11 54 11 44 19 63 14 41 8 19 12 26 8 16 12 22 10 17 16 30 4 11v5l-2 1-13-3-38-14-20-9-29-12-28-13-20-9-33-13-28-10-50-17-32-10-26-7-22-4-32-4-20-1h-68l-38 6-13 2h-8l-4-5-4-11-2-12v-6l6-9 16-16 2-7-16-6-13-5-2-2 1-5 7-6 21-14 15-8 25-7 19-4 21-2 9-3 16-11 37-25 10-8 7-7 4-8 3-8v-9l-7-16-16-33-14-33-32-80-13-36-21-61-14-43-17-52-12-39-14-48-11-42-12-53-9-49-6-39-4-42-1-16v-61l2-37 3-32 5-35 8-37 8-31 8-27 11-26 18-38 10-20 12-21 25-37 14-20 12-16 12-14 7-8 21-21 8-7 15-13 26-20 21-14 22-14 22-12 16-8 34-14 29-10 40-12 44-11z"
    ></path>
    <path
      fill="#BCD519"
      d="M1094 90h10l1 2v9l-5 4-11 4-47 12-44 13-38 14-27 12-21 10-22 13-21 13-20 14-12 9-10 8-13 12-17 16-19 19-7 8-13 15-9 12-13 18-12 19-11 17-9 16-8 16-10 22-12 28-9 24-4 13h-2l-2 9-6 20-2 1-7 20-3 12-2 6-3 10-4 10h-2l-1 25-2 16-3 41h-1v-26l2-18 1-28 5-35 8-37 8-31 8-27 11-26 18-38 10-20 12-21 25-37 14-20 12-16 12-14 7-8 21-21 8-7 15-13 26-20 21-14 22-14 22-12 16-8 34-14 29-10 40-12 44-11z"
    ></path>
    <path
      fill="#BCD51B"
      d="M1017 174h23l11 4 4 4 2 7v12l-2 2-5-1-17-11-13 1-28 7-36 12-20 8-18 8-25 12-22 12-19 13-21 16-14 12-17 17-13 17-11 15-11 17-13 21-14 23-14 24-15 29-19 38-13 30-11 31-6 20-2-3 1-8 2-9 5-12 3-10v-5l-3 1v2h-2v-7l5-15 3-2 2-3 5-4h3l3-9 14-29 6-14 8-14 7-13 9-14 13-20 2-4h2l1-4 11-19 10-15v-4l3-1-1-1-7-3 4-7 3-3 3-7 14-18 9-11 8-8 4-5 8-7 14-12 19-14 17-11 27-14 23-11 48-18 27-9 20-5z"
    ></path>
    <path
      fill="#FEFFFF"
      d="M994 1203h2l5 24 5 39 7 50 8 48 10 50 9 39 10 34 10 32 5 12 3 15 1 2v7l-5-1-7-11-11-23-7-16-11-21-10-13-3-7-2-14-8-49-5-31-10-82-3-33-1-16v-24l6-9z"
    ></path>
    <path
      fill="#BCD519"
      d="m784 1576 24 3 6 2 3 4 14 4 13 1v2l14 3 7 1 3 2 13 4 5 1 16 4 9 3 4 2 8 2 2 1 6 1v3l6 1 17 6 3 3 6 1 1 2h6l3 3 24 9 10 4 1-6 7-1 6 1 4-1v-6l-1-7-4-2-6-7-4-8v-3l4 2 11 13 10 9 3 2-1 4 3 5h-2l-1 4 2 1v3h2l5 6 7 6v2l5 2v3l6 2 4 4h-6l-28-13-20-9-33-13-28-10-50-17-32-10-26-7-22-4-7-1-5-2-27-3-25-1 3-3h21l2-2z"
    ></path>
    <path
      fill="#BCD51A"
      d="m1008 1180 2 3v4h2l5 37 12 81 5 31v12l-2-1-3-16-3-13-6-18-2-2v-8l-2 2v7l1 5-1 17-2-3-5-30-4-32v-8h-2l-2-13-1-15-2-12h7l2-7-1-8-3-9 1-3z"
    ></path>
    <path
      fill="#FEFFFF"
      d="m949 1254 5 1 1 6v15l-9 7-16 9-12 10-9 11-9 12-6 10-11 28-5 7-10 5-1 1h-6l-2-4 7-16 9-12 8-9 9-14 10-13 12-14 9-10 11-14 10-13zM999 1586l6 2 11 8 7 4 15 14 9 8 2 7 3 1 4 7-1 5 12-2 14 7 9 10 4 6-1 3-4 2-5 1-18-8-10-6-5-8-5-6-13-10-13-12-11-14-8-12z"
    ></path>
    <path
      fill="#BCD519"
      d="m1132 1651 4 2 24 44 4 11v5l-2 1-13-3-38-14-18-8-3-3-4-2 2-3 6 1 7 2h5v2l6-3h12l8 2 4 4h2l2-3 5-1-4-7-3 3-2-3-6 1-7-14v-3h3l7-2-2-8z"
    ></path>
    <path
      fill="#FEFFFF"
      d="m911 1442 8 5 2 3v3l4 2 4 11 6 21 5 16 3 19 11 13 12 16 6 7v2h2l3 4v2l-4-1-11-14-11-13-7-8-16-14-11-9-1-2 4-18-1-13-5-21zM842 1442l3 1 10 15 7 12 3 12-10-1-21-5-20-3-2-1 3-9 12-12 11-7z"
    ></path>
    <path
      fill="#BCD51A"
      d="M714 1012h9l5 10 14 38 8 29 14 55 7 25v5l-2-3-4-11-4-14-13-39-6-15-9-26-4-10v-6h-2l-8-24-3-10-2-1z"
    ></path>
    <path
      fill="#FDFEFE"
      d="m824 1535 1 2 8 1 16 8 19 10 9 5 3 2v8l-1 1-14-1-22-4-12-4-5-5-2-13v-7h-2v-2z"
    ></path>
    <path
      fill="#BCD519"
      d="m1010 1608 4 2 11 13 10 9 3 2-1 4 3 5h-2l-1 4 2 1v3h2l5 6 7 6v2l5 2v3l6 2 4 4h-6l-28-13-20-9-24-10v-2l9 3 8 3 1-6 7-1 6 1 4-1v-6l-1-7-4-2-6-7-4-8z"
    ></path>
    <path
      fill="#FEFFFF"
      d="M728 1551h13l14 3 12 5 13 5 8 3 10 4 2 4h-13l-29-5-34-4-7-2 4-7z"
    ></path>
    <path
      fill="#BDE152"
      d="m719 323 2 3-4 9-2 2-2 4-1 3h-2l-2 6h-2l1 3-3 6h-2v3h-2l-1 5-3 1-2 6-3 8-3 5h-2v3l-3 3-2 5-1 10-2 5-3 15-5 8-4 7-5 1-4 7-2 2-15 51h-1l1-8 10-36 6-18 15-33 17-35 14-26z"
    ></path>
    <path
      fill="#FEFFFF"
      d="M873 1424h11l4 9 3 7 5 21 1 3v11l-1 2h-2v5h-4l-8-14-7-19-3-14v-10zM758 1493h12l19 2 5 2 7 6 1 4-1 1-10 1h-40l-5-2v-7l3-5zM925 1387l6 1 7 5 3 7 2 9v9l-4 7-5 1-8-7-6-10-2-4v-11l5-6z"
    ></path>
    <path
      fill="#BCD415"
      d="m902 1567 13 4 12 7 10 3 5 5-2 3 5-2 4 6 23 11 8 6v3l-11-1-7-4v-3h-2l-5-5-12-6-10-2-11-5 1-3 2-1-17 1-6-2 1-4 7-1-5-7-3 1z"
    ></path>
    <path
      fill="#FEFFFF"
      d="m1104 1652 6 2 8 6 6 8 3 5 2 9h-12l-11-4-7-8 1-6 3-11zM897 1553h11l8 3 3 1v4l9 2 7 10 5 4-4 2-5-1-9-4-8-4-10-4-5-5-2-4z"
    ></path>
    <path
      fill="#BCD61F"
      d="m812 1270 4 4 10 16 14 20 10 16 3 10-4-2-5-6-1-4h2l-5-9-5-7v-2l-4-2-2-4h-2l-3-5-3-8-9-15z"
    ></path>
    <path
      fill="#BEE253"
      d="M777 247v3l-6 7-7 8-8 10-9 12-14 19-5 8-4 7-4 2 2-5 14-20 10-14 9-12 12-14 7-8z"
    ></path>
    <path fill="#FEFFFF" d="M899 1585h7l16 4 4 3v3h-14l-13-6-1-3z"></path>
    <path
      fill="#BDE150"
      d="m1127 1673 2 1 1 4 6-1 2 3 4-3 4 8-4 2h-2l-2 3-5-2-1-3-8-1v-2h5l-2-5z"
    ></path>
    <path
      fill="#BCD415"
      d="m1042 1643 5 1 6 6 2 7 6 2 8 5v3h-4l-1-2-6-2-9-5-6-12-2-2z"
    ></path>
    <path
      fill="#FEFFFF"
      d="M690 1542h9l2 1-1 6-8 8-4 1-1-3 2-4-1-7zM829 1342h5l8 10 4 6v2l-5 1-7-8-5-8z"
    ></path>
    <path fill="#BCD725" d="m832 1564 7 1 20 4 19 3 1 2h-12l-25-5-10-4z"></path>
    <path
      fill="#BEE253"
      d="M1007 111h3v2l-7 3-4 3h-9l-21 7-7 2v-2l26-9zM655 448l2 1-2 4-15 51h-1l1-8 10-36 3-10z"
    ></path>
    <path
      fill="#BCD621"
      d="m915 1288 2 1-2 5-10 11-4 5-3 1v-4l4-6h3l1-3 2-1 1-4 3-3h3z"
    ></path>
    <path fill="#BCD723" d="M667 542h1l-1 9-7 23-2-3 1-8 2-9 4-10z"></path>
    <path fill="#BCD620" d="m629 786 2 4 2 7 1 12 1 1-1 11-2-2-4-24v-7z"></path>
    <path fill="#BCD415" d="M645 751h2l3 26 2 25-3-6-1-14-2-4-1-14z"></path>
    <path fill="#BCD621" d="M622 732h1l4 37 2 10-1 6-2-3-4-32z"></path>
    <path fill="#BDDE43" d="m819 266 2 1-26 26-6 7v-3l12-13 7-8 8-7z"></path>
    <path fill="#BCD722" d="m990 1642 27 9 1 2-2 2-26-11z"></path>
    <path fill="#BCD620" d="m845 1321 3 1 5 12v2l-4-2-5-6-1-4h2z"></path>
    <path fill="#BEE253" d="M777 247v3l-6 7-7 8-5 6-2-1 9-11 9-10z"></path>
    <path fill="#BCD51D" d="m967 1632 4 1 4 3 14 5v3l-24-9v-2z"></path>
    <path fill="#BDDB38" d="m1019 1619 4 2 12 11-2 2-11-9-3-4z"></path>
    <path fill="#BDE150" d="M736 299v3l-6 8-5 10-5 3 2-5 12-17z"></path>
    <path fill="#BDE04B" d="M1007 111h3v2l-7 3-4 3-5-1v-3z"></path>
    <path fill="#BCD829" d="m915 1288 2 1-2 5-7 8-2-2 2-1v-5l4-4h3z"></path>
    <path fill="#BCD724" d="M624 761h2l3 18-1 6-2-3-2-14z"></path>
    <path fill="#BCD415" d="m1098 1653 3 1-1 10-3 1-1-7 1-4z"></path>
    <path fill="#BCD51B" d="M862 1571h11l6 2v1h-12l-5-1z"></path>
    <path fill="#BCDA31" d="m834 1303 4 4 8 12v2l-3-1-8-12z"></path>
    <path fill="#BDE14F" d="m1036 1652 3 1-5 4-4 1-5-1 4-4z"></path>
    <path fill="#BCD82A" d="m812 1270 4 4 8 13h-3l-9-15z"></path>
    <path fill="#BCD415" d="M644 730h1l1 7v13h-1l-2-8v-7z"></path>
    <path fill="#BEE253" d="M1016 1277h2v8h-2v2h-2l-1-6z"></path>
    <path fill="#BCD621" d="M1031 1336h3v12l-2-1-1-3z"></path>
    <path fill="#BDDF48" d="m1008 1177 2 1 1 9-3-6-7 2v-2z"></path>
  </svg>
);

const DownLeftSvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 2048 1885"
  >
    <path
      fill="#BADF51"
      d="M720 98h13l40 6 37 7 48 12 36 12 25 11 27 13 22 12 23 14 16 11 13 10 14 12 10 9 16 15 15 16 9 11 33 42 12 17 8 13 14 26 13 26 11 25 9 24 11 33 7 26 11 51 6 40 2 22 1 19v62l-2 37-4 42-6 45-11 60-16 73-9 38-25 101-12 47-15 51-15 49-8 23-7 18-6 17v11l6 12 6 7 11 7 24 13 19 10 13 5 14 3 24 2 18 4 28 10 19 9 9 6 1 4-5 4-12 5-14 3 5 10 10 10 8 7 4 5 1 7-1 14-2 7-2 2-5 1h-71l-40 4-36 6-28 7-36 12-29 11-30 12-27 12-25 12-24 12-28 17-24 13-32 17-32 14-12 4h-3l3-13 11-24 15-33 12-30 13-36 8-26 8-32 8-43 6-40 8-62 3-39 5-80 2-57 7 1 16 10 12 9 11 9 9 9 8 7 13 11 12 11 15 15 2 1v2h2l4 5 8 7 7 7 7 8 15 16 9 8 4-4 15-31 12-22 12-23 11-28 7-22 6-24 7-39 8-49 8-37 6-21 8-16 2-2h5l1 3 4-2 6-18 10-44 8-43 4-26 3-28 2-31 1-25v-42l-2-38-3-32-5-32-7-31-12-36-10-23-11-22-12-20-12-19-13-21-16-23-12-17-10-13-11-15-11-14-10-11-7-8-18-20-8-7-10-9-17-12-21-12-19-10-24-10-30-11-26-8-28-7-20-4-7-1h-12l-15 7h-8l-2-2v-8l3-6 9-6 10-3h18l34 7 30 8 33 10 30 12 27 13 27 16 13 9 12 11 8 7 16 16 7 8 12 13 9 11 8 9 15 20 13 18 11 15 12 19 15 24 13 23 10 20 2 1v-8l-2-13v-10l-6-14-5-11-13-25-16-27-12-19-11-15-10-13-14-17-8-10-11-12-7-8-10-10-8-7-16-13-11-9-15-12-20-12-10-7-27-15-17-9-34-14-43-14-26-6-41-7-43-8-11-3-1-1v-9z"
    ></path>
    <path
      fill="#FEFEFE"
      d="m910 1140 6 3 2 5 1 9v58l-2 51-3 50-3 42-3 24-4 10-8 8-5 10-9 26-5 11-1-2-5 1 1-9 9-35 4-21 10-73 4-38 5-67 4-50zm18 355 4 1-10 21-11 16-12 14-7 6-7 8-8 7-16 8-19 10-16 8-5 2h-3l-1-5 7-13 7-6 2 1 4-1 5-1 7-3 12-8 10-7 8-4h12l2-10 8-15 13-17 5-6zm25-313 6 1 5 4v2l4 2 8 8 7 8 13 12 9 11 3 2 3 5 8 9 11 8 5 5 6 7 7 11v10l-8-2-12-6-6-10-10-18-12-14-12-13-11-11-9-6-16-8z"
    ></path>
    <path
      fill="#FDFDFD"
      d="m1100 1421 2 1-1 7-9 26-4 6-20 4-8 2-17 1 2-4 27-18 13-11 13-12z"
    ></path>
    <path
      fill="#FEFEFE"
      d="m1067 1348 6 2 16 10 11 9-3 3-34 11-11 1 2-9 10-23zm112 91h8l5 5 3 7-1 4-6 2-35 4h-17l1-4 8-5 28-10zm-179-86 1 3-4 23v27l3 1v9l-11 11-9 6-6 8-1-2 7-14 6-32 5-16 8-22zm146 34h11l6 3 1 4-3 5-4 3-3 1h-8l-7-1-10 2-2 2h-8l-3-4 3-5 15-6zm-113-54h5l2 3 1 11-4 16-4 9-5 6-4 3v-19l3-22 3-5zm-48-30h7l4 5v9l-7 14-4 3-5 1-5-3-1-1v-12l6-12zm93-62 1 2-9 21-5 8-3-1v-13l5-14 4-1 1 2 4-2zm138 191 5 1 4 3v4h-3v2l-4 1-5-5 1-5z"
    ></path>
  </svg>
);

const LeftDownSvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 2048 1862"
  >
    <path
      fill="#B1DD15"
      d="M1250 689h57l53 4 28 3 50 8 30 6 35 9 33 11 29 12 28 12 23 12 23 13 18 11 15 10 17 12 21 16 13 10 13 12 8 7 14 14 7 8 13 15 11 13 15 20 12 17 13 21 8 14 13 24 15 31 8 20 11 29 13 41 9 34 4 21v8l-5 2-8-1-3-4-12-36-14-46-12-35-6-15-11-24-12-26-14-24-18-27-8-11-13-17-11-14-11-13-7-8-22-22-8-7-11-10-32-24-14-10-20-12-15-10-21-12-23-12-24-10-38-15-24-9-28-9-21-5h-6l2 4 5 5-2 5 12 5 19 7 15 6 15 7 29 13 17 8 19 10 28 16 27 16 21 13 14 10 28 22 10 9 15 15 11 14 8 10 10 14 9 14 12 19 11 20 12 26 11 28 14 36 4 13 4 19 1 7v8l-3 10-6 8-8 4h-10l-1-1 1-9 5-8 3-4v-9l-6-24-14-38-10-24-9-20-12-25-14-24-10-15-13-18-13-16-9-11-7-7-2-1v-2l-4-2-13-10-17-12-10-7-18-11-26-15-28-16-23-13-34-18-26-13-33-14-27-10-33-11-25-6-27-4-23-2-22-1h-76l-30 2-34 4-35 6-30 7-44 11-40 12-76 24-15 5h-2l2 9-1 9-6 9-14 7-33 14-19 6-59 16-40 12-21 7-26 11-24 12-17 10-22 14-16 12-18 13-20 13-11 6h-2v2l5 2 10 8 16 10 18 14 15 13 14 11 14 12 11 9 5 4 5 5 11 10 11 9 29 29 7 8 4 5-1 4-11 4-31 7-24 5-43 7-80 16-41 9-36 10-28 7-37 12-36 13-19 8-25 11-26 12-27 14-21 12-22 13-25 14-14 9-7 4-9 3h-3l1-10 6-21 10-28 12-31 14-37 16-41 14-39 16-47 9-30 11-45 5-27 4-32 2-28v-29l-3-45-4-31-7-35-1-10 33-10 7 1 10 8 13 12 9 6h4v-2l3-2 2-29 6 1 9 6 8 8 9 15 8 18 6 16 12 41 8 21 9 16 12 17 13 18 9 10 23 13 7 4 9-2 29-16 32-16 63-27 34-15 60-24 69-26 26-10 40-15 30-11 31-11 41-14 37-12 47-14 42-11 43-10 32-6 41-6 33-3z"
    ></path>
    <path
      fill="#FEFEFE"
      d="M682 1106h19l8 7 1 3-8 3-35 6-71 13-43 9-37 8-34 8-51 14-34 12-29 12-19 7-15 4-4-1 5-5 7-6 14-8 31-15 24-15 13-8 14-5 36-9 42-9 42-8 41-7 35-5zM524 978h10l9 3 17 13 15 10 11 7 12 9 10 9 9 7 11 9 14 10 12 10 5 7-1 3-2 1h-18l-9-5-4-9-8-11-12-11-20-13-18-11-15-8-17-7-5-5-7-14zm-228 161h2l-3 9-5 9-18 22-5 4-12 7-7 4-3 21-3 6-10 14-6 8-1 5 2 7 5 6-1 5-9 6-12 6h-4v-12l3-12 8-17 9-22 6-14 5-4 10-5 7-7 7-13 9-12 6-7 10-8zm127-212 4 2 9 10 10 16 2 5v8l-9 6-10 6-2 2-8 3-9 4 1-9 9-47zm12 115 6 1-3 3-14 9-20 9-32 9-10 6-7 5-2-1 9-9h2l2-4 8-14 13-13 4 1 20 1 15-1zm-85-104 4 1-2 10-8 16-6 10-6 17-3 8-6 3h-6l1-28 4-13 6-10 9-7zm252-24h5l1 4-4 4-6 5-5 5-11 7-9 6-20 14-4 2h-9l-4-3 1-6 7-6 26-15 14-8zm-291-87 4 2 14 14v18l-2 10-9 14-4 2-2-5-1-13zm150 166 8 1 2 5v8l-5 3-25 6-13 2-16 1 2-4 11-7 23-11 7-3zm-74-132 3 1 4 13 1 8v16l-3 11-7 5h-6l-1-3v-22l2-22 2-5zm112 178h7l8 5v8l-4 6-11 7-7 3h-10l-5-4 1-9 7-8zm-166-12 1 2-4 15-7 13-8 6h-2l1-6 8-19 5-5zm-11-235 12 6 1 1v13l-8-1-4-5-2-13zm-34 246h2l1 6 2-1v13l-4 7-3 3h-2l1-8 1-6-2-1 2-10z"
    ></path>
  </svg>
);

const HowSvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={250}
    height={250}
    viewBox="0 0 252.75 244.5"
    {...props}
  >
    <path
      fill="#f48480"
      d="m52.297 226.793 14.832-56.797c1.328 1.973 3.18 3.461 5.469 4.012 2.343.61 4.672.254 6.808-.84l-14.832 56.805c-1.476 5.75-13.761 2.574-12.277-3.172Zm0 0"
    />
    <path
      fill="#006095"
      d="m53.527 221.992 13.602-51.996c1.328 1.973 3.18 3.461 5.469 4.012 2.343.61 4.672.254 6.808-.84l-13.558 52.055c-3.098 2.578-10.918.55-12.328-3.23Zm0 0"
    />
    <path
      fill="#0094d9"
      d="m55.004 216.246 12.125-46.25c1.328 1.973 3.18 3.461 5.469 4.012 2.343.61 4.672.254 6.808-.84l-12.07 46.309c-3.102 2.574-10.856.554-12.332-3.23m0 0"
    />
    <path
      fill="#d1ab66"
      d="M67.129 169.996c2.531-3.73 5-7.394 7.527-11.133 1.801-2.574 3.309-2.172 3.567 1 .375 4.414.804 8.89 1.183 13.305-2.136 1.094-4.465 1.457-6.808.84-2.29-.551-4.141-2.04-5.47-4.012m0 0"
    />

    <path
      fill="#81b219"
      d="M75.293 158.441c11.75-25.453 54.621-20.125 89.75-15.808 11.621 1.394 22.336 2.754 30.793 2.836l.105.004c12.016.058 22.871-3.137 30.7-9.47 7.828-6.327 12.687-15.815 12.828-28.335l.004-.113c.027-7.274 1.105-15.356 2.191-23.602 3.758-28.613 7.848-59.742-29.875-66.765-3.809-.672-6.937-1.254-9.738-1.825-17.235-3.273-21.043-3.945-45.48-4.984-3.212-.137-11.083-.754-21.262-1.469-23.286-1.672-58.72-4.195-78.903-4.437C50.04 4.37 42.25 4.379 34.98 5.59c-7.16 1.219-13.8 3.523-18.054 8.035-5.848 6.18-6.7 32.715-7.149 47.137-.054 2.59-.148 4.789-.218 6.422-.641 12.441-.68 25.3 1.136 35.59 1.774 10.003 5.29 17.542 11.864 19.515 21.437 6.61 85.757 7.602 133.734 8.348 11.105.191 21.254.343 29.934.543l.394.015c8.399.133 18.063-1.597 25.691-5.843 7.508-4.137 13.04-10.782 13.286-20.473l.004-.172c.007-1.465.289-4.098.52-6.918.292-2.809.585-5.73.675-7.867l1.86.078c-.09 2.086-.391 5.121-.622 7.93-.289 2.808-.57 5.445-.574 6.8l-.008.223c-.277 10.469-6.164 17.563-14.195 22.07-7.91 4.407-17.969 6.176-26.653 6.036l-.449-.02c-8.566-.2-18.773-.348-29.875-.539-48.094-.695-112.586-1.695-134.3-8.375-7.352-2.29-11.239-10.344-13.153-21.04-1.867-10.456-1.765-23.429-1.117-35.98.07-1.64.105-3.832.219-6.421.453-14.649 1.32-41.633 7.644-48.36C20.18 7.5 27.168 4.977 34.668 3.774c7.453-1.262 15.285-1.266 21.77-1.215 20.238.296 55.671 2.82 79.011 4.492 10.012.71 17.828 1.27 21.207 1.414 24.551 1.043 28.356 1.77 45.762 5.05 2.91.575 6.156 1.165 9.738 1.825 39.457 7.324 35.215 39.41 31.364 68.863-1.083 8.246-2.16 16.266-2.18 23.375l-.004.113c-.11 13.137-5.219 23.133-13.512 29.774-8.183 6.59-19.426 9.95-31.898 9.867l-.113-.004c-8.57-.082-19.344-1.39-31.016-2.844-34.516-4.234-76.66-9.418-87.781 14.758Zm0 0"
    />
    <path d="M62.455 52.527q1.358-.188 1.86-.656.497-.482.578-1.719l.765-12.265q.059-.937-.14-1.266-.205-.329-.844-.375h-1l-.047-.125.281-1.266q.388.017.594.063 1.717.157 2.625.203c.82.055 1.875.031 3.156-.063l-.203 1.313q-.879.093-1.266.281-.376.176-.546.656-.16.47-.266 1.579l-.469 4.718 4.922.328c1.219.075 2.664.063 4.344-.03l.328-5.313q.059-.937-.14-1.266-.206-.339-.844-.375a9 9 0 0 0-1 0l-.032-.125.282-1.281q.311.065 1.156.14.844.066 1.687.125 1.406.08 3.532-.062l-.188 1.328q-1.095.064-1.5.39c-.262.212-.418.594-.469 1.157a288 288 0 0 0-.718 7.078q-.345 3.784-.47 5.688-.063 1.096.173 1.484.233.374 1 .422.358.019 1.312-.016l.063.11-.344 1.343a4.4 4.4 0 0 1-.64-.062 85 85 0 0 0-2.954-.25l-3.375-.14.344-1.313q.968.047 1.437-.157.468-.216.688-.843.216-.639.297-1.969l.265-4.422-4.437-.297q-.738-.013-2.063-.031a47 47 0 0 0-2.812.062l-.438 5.204q-.08 1.204.157 1.625c.164.273.504.421 1.015.453q.34.033 1.313-.016l.062.125-.343 1.344q-.269-.047-1-.125a31 31 0 0 0-1.485-.125 41 41 0 0 0-2.89-.063q-1.534.03-1.563.141Zm26.798 2.98q-1.676-.094-2.906-.985-1.237-.89-1.875-2.406-.628-1.528-.5-3.438.123-2.044 1.125-3.703.998-1.652 2.594-2.53c1.07-.595 2.242-.852 3.515-.782q1.639.11 2.891 1 1.248.892 1.875 2.422.621 1.535.516 3.422-.129 2.064-1.125 3.718-1.004 1.641-2.61 2.532-1.594.873-3.5.75m.89-1.375q1.642.11 2.688-1.172 1.06-1.278 1.188-3.547.104-1.732-.328-3.125-.44-1.389-1.344-2.203a3.44 3.44 0 0 0-2.11-.89c-1.093-.063-1.992.335-2.687 1.187q-1.049 1.284-1.187 3.593-.112 1.737.328 3.11c.3.906.75 1.633 1.343 2.172a3.27 3.27 0 0 0 2.11.875m12.239 2.337q-.314-1.435-1.343-5.625-1.02-4.185-1.407-5.797-.422-1.466-1.859-1.578l-.031-.11.218-.953 2.344.172q1.107.082 2.11.047a65 65 0 0 1 1.312-.031l.063.14-.25.876q-.956-.029-1.313.125-.345.141-.375.546-.033.563.766 4.266.795 3.69 1.093 5l.125.016 1.97-4.235q1.076-2.184 1.562-3.343-.253-1.014-.688-1.5-.423-.499-1.281-.563l-.031-.11.218-.937 2.344.172c.719.043 1.414.063 2.094.063h1.328l.047.156-.219.875q-.986-.03-1.328.094a.54.54 0 0 0-.375.5q-.033.531.766 4.234.795 3.688 1.093 5.047h.125q1.467-3.218 1.938-4.125a122 122 0 0 0 1.406-3.031c.375-.844.57-1.383.594-1.625q.013-.404-.25-.579c-.18-.113-.484-.18-.922-.203l-1.078-.062-.11-.203.22-.875q.262.017 1.046.093.78.083 1.828.141l2.407.11-.266 1.046q-.596.035-.969.438-.376.409-.969 1.656l-4.718 9.719-1.61.406-2.078-8.781-.187-.016-3.719 7.938Zm26.387 1.603q-.315-1.435-1.344-5.625-1.02-4.184-1.406-5.797-.424-1.465-1.86-1.578l-.03-.11.218-.952 2.344.172q1.107.081 2.109.046a65 65 0 0 1 1.312-.03l.063.14-.25.875q-.955-.029-1.313.125-.345.142-.375.547c-.023.375.235 1.797.766 4.265q.796 3.69 1.094 5l.125.016 1.969-4.234q1.077-2.184 1.562-3.344-.253-1.014-.687-1.5-.424-.498-1.282-.563l-.03-.11.218-.937 2.344.172q1.076.064 2.093.063h1.328l.047.156-.218.875q-.987-.03-1.329.094a.54.54 0 0 0-.375.5c-.023.355.235 1.765.766 4.234.531 2.461.895 4.14 1.094 5.047h.125c.976-2.144 1.625-3.52 1.937-4.125a122 122 0 0 0 1.407-3.031c.375-.844.57-1.383.593-1.625q.013-.404-.25-.578c-.18-.114-.484-.18-.922-.203l-1.078-.063-.109-.203.219-.875q.262.018 1.047.094.78.081 1.828.14l2.406.11-.266 1.047q-.595.034-.968.437-.376.409-.97 1.656l-4.718 9.719-1.61.406-2.077-8.781-.188-.016-3.719 7.938Zm22.491 1.205q-1.814-.11-3.172-1a5.56 5.56 0 0 1-2.031-2.406q-.675-1.53-.547-3.422a7.8 7.8 0 0 1 1.11-3.625q1.013-1.669 2.562-2.594 1.546-.937 3.25-.844 2.122.128 3.172 1.282 1.044 1.143.922 3.218-.05.861-.25 1.422l-.422.344-8.063-.484q-.204 2.814.844 4.422 1.06 1.593 3.14 1.734 1.639.093 3.641-.703l.172.078.266.86a15 15 0 0 1-2.422 1.234c-.867.351-1.59.515-2.172.484m2.031-9.14q.436-.028.594-.157.153-.14.188-.578.06-1.171-.532-1.828-.595-.655-1.765-.734-1.377-.077-2.407.796-1.032.88-1.375 2.438Zm22.798 10.646q-2.265-.141-2.452-2.234l-.22-.094q-3.173 1.889-3.78 1.86-1.676-.094-2.907-.938c-.824-.57-1.445-1.344-1.859-2.312-.406-.97-.574-2.055-.5-3.266q.123-2.076 1.219-3.766a7.66 7.66 0 0 1 2.828-2.625 6.9 6.9 0 0 1 3.703-.828q.936.063 2 .25l.297-4.86q.093-1.575-.984-1.64a2.4 2.4 0 0 0-.438.016 1 1 0 0 0-.297.047l.188-1.063q1.264-.092 2.625-.297 1.371-.215 1.734-.297l.156.407q-.345.469-.937 6.125-.581 5.66-.969 12.047c-.031.43.05.765.25 1.015q.294.361.86.406.404.019.796-.109.405-.14.657-.297.262-.17.343-.219l.375.5q-.095.14-.484.61c-.25.305-.578.613-.984.937q-.598.498-1.22.625m-5.874-2.343c.406.023.851-.067 1.344-.266q.75-.312 1.265-.64.53-.342.672-.454l.5-8.015q-.082-.048-.422-.235a5.4 5.4 0 0 0-.969-.375 6.2 6.2 0 0 0-1.406-.234c-1.312-.07-2.37.312-3.172 1.156-.793.844-1.234 2.04-1.328 3.578q-.093 1.455.328 2.688c.29.812.72 1.476 1.282 1.984.57.5 1.207.774 1.906.813m15.144 2.906q-1.675-.093-2.906-.984-1.236-.89-1.875-2.406-.628-1.53-.5-3.438.123-2.045 1.125-3.703c.664-1.102 1.532-1.945 2.594-2.531q1.605-.889 3.516-.782 1.638.111 2.89 1 1.248.892 1.875 2.422.621 1.536.516 3.422-.129 2.064-1.125 3.719-1.004 1.64-2.61 2.531-1.594.873-3.5.75m.891-1.375q1.64.111 2.688-1.172 1.06-1.278 1.187-3.547.105-1.732-.328-3.125-.44-1.388-1.344-2.203a3.44 3.44 0 0 0-2.11-.89c-1.093-.063-1.991.336-2.687 1.187q-1.047 1.285-1.187 3.594-.111 1.736.328 3.11.452 1.36 1.344 2.171a3.27 3.27 0 0 0 2.11.875M56.918 94.707q-.314-1.435-1.343-5.625-1.02-4.184-1.407-5.797-.422-1.465-1.859-1.578l-.031-.11.219-.952 2.343.172q1.108.081 2.11.046a65 65 0 0 1 1.312-.03l.063.14-.25.875q-.956-.029-1.313.125-.345.142-.375.547-.033.563.766 4.265.795 3.69 1.094 5l.125.016 1.968-4.234q1.078-2.184 1.563-3.344-.253-1.014-.688-1.5-.423-.498-1.281-.563l-.031-.109.219-.938 2.343.172c.719.043 1.414.063 2.094.063h1.328l.047.156-.219.875q-.986-.03-1.328.094a.54.54 0 0 0-.375.5q-.033.532.766 4.234c.531 2.461.894 4.14 1.094 5.047h.125c.976-2.144 1.625-3.52 1.937-4.125a122 122 0 0 0 1.406-3.031c.375-.844.57-1.383.594-1.625q.013-.404-.25-.578c-.18-.114-.484-.18-.922-.203l-1.078-.063-.11-.203.22-.875q.262.018 1.046.094.78.081 1.828.14l2.407.11-.266 1.047q-.595.034-.969.437-.376.41-.968 1.656l-4.72 9.72-1.609.405-2.078-8.78-.187-.017-3.719 7.938Zm16.414-.654q.855-.048 1.218-.375.359-.328.407-1.14l.937-15.548q.045-.797-.203-1.172-.235-.386-.781-.422l-.625-.046-.11-.079.172-.937q.998-.06 2.266-.219a26 26 0 0 0 2.11-.36l.155.407q-.22.283-.593 3.078c-.243 1.867-.48 4.164-.72 6.89q3.483-2.073 4.532-2.015 1.906.127 2.89 1.188c.657.699.946 1.64.876 2.828-.024.398-.14 1.293-.36 2.687q-.468 3.394-.515 4.203-.047.862.156 1.266.2.409.75.438l1.031.015.063.11-.313 1.25a86 86 0 0 0-2.593-.25c-.782-.055-1.793 0-3.032.156l.172-1.172q.903-.187 1.313-.61.406-.434.453-1.203l.531-5.765q.093-1.465-.5-2.297-.58-.825-1.75-.906-.737-.03-1.844.375a8 8 0 0 0-1.968 1.015 244 244 0 0 0-.532 7.094q-.047.907.157 1.281.216.375.812.422l1.031.016.047.11-.344 1.25c-1.343-.15-2.226-.231-2.64-.25a82 82 0 0 0-2.906-.126Zm25.369 3.026c-1.586-.094-2.406-.934-2.469-2.516l-.109-.031c-.75.656-1.43 1.172-2.031 1.547-.594.375-1.04.55-1.328.531q-1.629-.093-2.625-1.172-.985-1.09-.891-2.672c.031-.562.195-1.046.5-1.453q.467-.621 1.187-.781l5.641-1.203.11-1.281q.091-1.466-.532-2.328-.628-.855-1.86-.938-.813-.046-1.734.281a7.5 7.5 0 0 0-1.843.985l-.14-.11-.282-1.265a30 30 0 0 1 2.86-1.25q1.42-.545 2.03-.516 1.904.127 2.922 1.188 1.013 1.047.907 2.828c-.024.43-.141 1.304-.36 2.625q-.516 3.188-.562 4.062c-.032.43.05.766.25 1.016q.31.376.86.406.466.033.968-.156.5-.2.828-.453l.375.484a8 8 0 0 1-1.203 1.328q-.72.657-1.469.844m-5.312-2.422q.544.034 1.312-.312a5.6 5.6 0 0 0 1.422-.938l.328-2.969-4.047.969q-.862.206-.922 1.156-.046.844.485 1.453c.351.399.828.61 1.422.641m14.07 2.953q-1.97-.113-2.75-.97c-.512-.57-.73-1.5-.657-2.78l.438-7.188q.046-.797-.281-1.125-.33-.342-1.297-.438l-.11-.187.204-.844a11 11 0 0 0 1.703-.922q.843-.562 1.375-.984.545-.42.687-.547l.594.266a6 6 0 0 0-.14.703q-.094.563-.235 1.484l4.297.172.094.094-.36 1.515-4.25-.343a120 120 0 0 0-.64 7.312q-.094 1.47.375 2.125.48.644 1.734.719.434.033.875-.063.45-.092.75-.203a3 3 0 0 1 .406-.14l.235.78a21 21 0 0 1-.766.517q-.597.374-1.281.718-.674.358-1 .328m14.709 1.063q-.314-1.435-1.343-5.625-1.02-4.185-1.407-5.797-.422-1.466-1.859-1.578l-.031-.11.219-.953 2.343.172q1.108.082 2.11.047a65 65 0 0 1 1.312-.031l.063.14-.25.876q-.956-.029-1.313.125-.345.141-.375.546-.033.563.766 4.266.795 3.69 1.094 5l.125.016 1.968-4.235q1.078-2.184 1.563-3.343-.253-1.014-.688-1.5c-.28-.333-.71-.52-1.28-.563l-.032-.11.219-.937 2.343.172c.72.043 1.414.063 2.094.063h1.328l.047.156-.219.875q-.986-.03-1.328.094a.54.54 0 0 0-.375.5c-.023.355.235 1.765.766 4.234q.795 3.688 1.094 5.047h.125c.976-2.145 1.625-3.52 1.937-4.125a122 122 0 0 0 1.406-3.031c.375-.844.57-1.383.594-1.625q.013-.403-.25-.579c-.18-.113-.484-.18-.922-.203l-1.078-.062-.11-.203.22-.875q.262.017 1.046.093.78.082 1.828.141l2.407.11-.266 1.046q-.596.035-.969.438-.376.409-.968 1.656l-4.72 9.719-1.609.406-2.078-8.781-.187-.016-3.719 7.938Zm22.492 1.205q-1.815-.11-3.172-1a5.56 5.56 0 0 1-2.031-2.407q-.675-1.529-.547-3.421a7.8 7.8 0 0 1 1.11-3.625q1.013-1.67 2.562-2.594 1.545-.937 3.25-.844 2.121.128 3.172 1.281 1.043 1.143.921 3.22c-.03.573-.117 1.046-.25 1.421l-.421.344-8.063-.485c-.137 1.875.145 3.352.844 4.422q1.06 1.593 3.14 1.735 1.639.093 3.641-.704l.172.079.266.859a15 15 0 0 1-2.422 1.234q-1.3.53-2.172.485m2.031-9.14q.435-.029.594-.157.152-.14.187-.578.06-1.172-.531-1.828c-.398-.438-.984-.68-1.766-.735q-1.375-.075-2.406.797-1.032.88-1.375 2.438Zm22.799 10.646q-2.267-.142-2.454-2.234l-.218-.094c-2.118 1.258-3.375 1.879-3.782 1.86q-1.676-.095-2.906-.938c-.824-.57-1.445-1.344-1.86-2.313q-.608-1.45-.5-3.265.125-2.076 1.22-3.766a7.66 7.66 0 0 1 2.828-2.625 6.9 6.9 0 0 1 3.703-.828c.625.043 1.289.125 2 .25l.297-4.86q.093-1.575-.985-1.64a2.4 2.4 0 0 0-.437.016 1 1 0 0 0-.297.046l.187-1.062q1.267-.093 2.625-.297 1.371-.215 1.735-.297l.156.406q-.346.47-.937 6.125-.581 5.661-.97 12.047-.046.643.25 1.016.296.361.86.406.405.02.797-.11.405-.138.656-.296.263-.171.344-.219l.375.5c-.062.094-.227.297-.484.61-.25.304-.578.613-.985.937q-.597.498-1.218.625m-5.875-2.344c.406.024.851-.066 1.343-.265q.75-.312 1.266-.64c.351-.227.578-.38.672-.454l.5-8.016-.422-.234a5.4 5.4 0 0 0-.969-.375 6.2 6.2 0 0 0-1.406-.234c-1.313-.07-2.371.312-3.172 1.156q-1.188 1.268-1.328 3.578-.094 1.455.328 2.687.436 1.221 1.281 1.985.856.752 1.907.812m15.145 2.907q-1.677-.094-2.907-.984-1.237-.89-1.875-2.407-.628-1.529-.5-3.437.123-2.045 1.125-3.703.998-1.653 2.594-2.532 1.605-.888 3.515-.78 1.639.108 2.891 1 1.248.891 1.875 2.421.621 1.535.516 3.422-.129 2.064-1.125 3.719-1.003 1.64-2.61 2.53-1.594.874-3.5.75m.89-1.375q1.64.112 2.687-1.172 1.06-1.278 1.188-3.547c.07-1.156-.04-2.195-.328-3.125q-.44-1.389-1.344-2.203a3.44 3.44 0 0 0-2.11-.89c-1.093-.063-1.992.335-2.687 1.187q-1.049 1.284-1.187 3.594-.112 1.736.328 3.109c.3.906.75 1.633 1.343 2.172a3.27 3.27 0 0 0 2.11.875m10.475-4.224-.485-3.547.11-.422 3.61-2.016q1.733-1.013 1.827-2.39c.063-1.157-.418-2.07-1.437-2.75q-1.517-1.013-4.282-1.328l-.03-.329 1.062-1.5.422-.093q1.763.174 3.234.922c.977.492 1.738 1.109 2.281 1.859q.81 1.127.735 2.453-.08 1.253-.641 2.125a5.3 5.3 0 0 1-1.297 1.438q-.751.55-2.047 1.265-.844.487-1.25.735l-.094.265.438 2.828-.078.22-1.813.39Zm.656 6.328q-.798-.048-1.203-.547-.392-.499-.344-1.203a1.83 1.83 0 0 1 .578-1.266q.53-.499 1.328-.453c.532.031.93.219 1.203.563.27.336.395.734.375 1.203q-.047.768-.593 1.25-.549.499-1.344.453m0 0" />
  </svg>
);
