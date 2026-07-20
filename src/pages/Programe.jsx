import React, { useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Location icon
import { motion } from "framer-motion"; // Framer Motion for animation
import WalkingPerson from "../components/WalkingPerson";
import ResponsiveCardSlider from "../components/CardCarousel";
import heroimage from "../imgs/home-images/HeroPrograme1.png"
import AryaHero from "../imgs/program-images/Aryahero.png";

import bharat from "../imgs/tic/Bharat.png"

import Aid1 from "../imgs/program-training/aid1.jpg"
import Aid2 from "../imgs/program-training/aid2.jpg"
import Aid3 from "../imgs/program-training/aid3.jpg"
import Aid4 from "../imgs/program-training/aid4.jpg"



import capacity1 from "../imgs/program-training/capacity1.jpeg"
import capacity2 from "../imgs/program-training/capacity2.jpeg"
import capacity3 from "../imgs/program-training/capacity3.jpeg"




import TicVideo1 from "../imgs/tic/ticpimg1.jpeg"
import TicVideo2 from "../imgs/tic/ticpimg2.png"
import TicVideo3 from "../imgs/tic/ticpimg3.png"
import TicVideo4 from "../imgs/tic/ticpimg4.png"

import Couns1 from "../imgs/program-images/counselling1.jpg"
import Couns2 from "../imgs/program-images/counselling2.jpg"
import Couns3 from "../imgs/program-images/counselling3.jpg"
import Couns4 from "../imgs/program-images/counselling4.jpg"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const anubho1 = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/1.svg`;
const anubho2 = `${import.meta.env.VITE_PUBLIC_URL
  }/programPageData/anubho2.png`;
const anubho3 = `${import.meta.env.VITE_PUBLIC_URL
  }/programPageData/anubho3.png`;
const anubho4 = `${import.meta.env.VITE_PUBLIC_URL
  }/programPageData/anubho4.png`;
const anubho5 = `${import.meta.env.VITE_PUBLIC_URL
  }/programPageData/anubho5.png`;
const anubho6 = `${import.meta.env.VITE_PUBLIC_URL
  }/programPageData/anubho6.png`;
const anubho7 = `${import.meta.env.VITE_PUBLIC_URL
  }/programPageData/anubho7.png`;

const udan1 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan1.png`;
const udan2 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan2.png`;
const udan3 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan3.png`;
const udan4 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan4.png`;
const udan5 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan5.png`;

const arya1 = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/5.svg`;
const arya2 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya2.png`;
const arya3 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya3.png`;
const arya4 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya4.png`;
const arya5 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya5.png`;
const arya6 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya6.png`;
const arya7 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya7.png`;

import Slider1 from "../imgs/tic/slide1.jpeg"
import Slider2 from "../imgs/tic/slide2.jpg"
import Slider3 from "../imgs/tic/slide3.jpg"
import Slider4 from "../imgs/tic/slide4.jpg"
import Slider5 from "../imgs/tic/slide5.jpg"
import Slider6 from "../imgs/tic/slide6.jpg"
import Slider7 from "../imgs/tic/slide7.jpg"
import Slider8 from "../imgs/tic/slide8.jpeg"
import Slider9 from "../imgs/tic/slide9.jpeg"
import Slider10 from "../imgs/tic/slide10.jpg"
import Slider11 from "../imgs/tic/slide11.jpeg"
import Slider12 from "../imgs/tic/slide12.jpeg"
import slide1 from "../imgs/tic/slide1.png"
import slide2 from "../imgs/tic/slide2.png"
import slide3 from "../imgs/tic/slide3.png"
import slide4 from "../imgs/tic/slide4.png"
import slide5 from "../imgs/tic/slide5.png"

import show1 from "../imgs/program-training/show1.jpg"
import show2 from "../imgs/program-training/show2.jpg"
import show3 from "../imgs/program-training/show5.png"
import show4 from "../imgs/program-training/show4.jpg"
const yelloShadow = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/bg.svg`;
import { FaRegCheckCircle } from "react-icons/fa";

//animations
import animation1 from "../imgs/program-images/gif-6.gif";

import textBorder from "../imgs/program-images/text-border.png";

import BackImage from "../imgs/tic/treeback1.png"

import CollageImage from "../components/CollageImage";
import BodyImagePart from "../components/BodyImagePart";
import yellowbgnew1 from "../imgs/program-images/yellowBgNew.png";
import greenbg from "../imgs/program-images/greenbg2.png";
import { ImageAutoFit } from "../components/ImageAutoFit";
import { Heading } from "../components/heading";

const Programe = () => {

  // const imagesRows = [
  //   [
  //     Slider1,
  //     Slider2,
  //     Slider3,
  //     Slider4,
  //     Slider5,
  //     Slider6,
  //     Slider7,
  //     Slider8,
  //     Slider9,
  //     Slider10,
  //     Slider11,
  //     Slider12,
  //   ],


  // ];
  const imagesRows = [
    [
      slide1,
      slide2,
      slide3,
      slide4,
      slide5,
      slide1,
      slide2,
      slide3,
      slide4,
      slide5,

    ],


  ];
  const imagesRowsfor = [
    [
      Slider1,
      Slider2,
      Slider3,
      Slider4,
      Slider5,
      Slider6,
      Slider7,
      Slider8,
      Slider9,
      Slider10,
      Slider11,
      Slider12,
    ],


  ];




  const programs = [
    {
      description: "Specialized curriculum for trauma-informed training",
    },
    {
      description: "Rooted in the socio-cultural context of India",
    },
    {
      description: "Identification, assessment, and working with trauma",
    },
  ];


  const milestone = [
    {
      tite: "COVID RESPONSE HELPLINE",
      description: "Trained over 800 volunteers and supported 80,000+ lives in collaboration with the Delhi Government",
    },
    {
      tite: "AANAGANWADI WORKERS",
      description: "Trained 200  Anganwadi workers from tribal communities of Jharkhand in partnership with TITLI ",
    },
    {
      tite: "DALIT COMMUNITY LEADERS",
      description: "Trained lay mental health counselors in collaboration with SASLN and Banyan Academy of Leadership across 10 states",
    },
    {
      tite: "CAREGIVER WELLBEING",
      description: "Supported and trained caregivers at various child care institutions like Udayan Care, Salaam Baalak Trust, Rainbow homes and more",
    }, {
      tite: "ACEs AWARENESS",
      description: "Introduced ACEs in several universities like OP Jindal, Amity University, Jamia Millia Islamia, and others",
    },
  ];
  const textItems = [
    "Non-judgemental and curious approach to life",
    "Stronger connection and trust with others",
    "Emotional safety and regulation ",
    "Deeper Self-Awareness and Compassion",
    "Integration of TIC Principles in daily life",
    "Stronger understanding of trauma and the body"
  ];





  const VideoCallImg = [
    [
      { img: TicVideo1, name: "Cohort: 1 (2022-2023)" },
      { img: TicVideo2, name: "Cohort: 2 (2023-2024)" },
      { img: TicVideo3, name: "Cohort: 3 (2024-2025)" },
      { img: TicVideo4, name: "Cohort: 4 (2025-2026)" },
    ],
  ];

  const AidImg = [
    [
      Aid1,
      Aid2,
      Aid3,
      Aid4,

    ],


  ];
  const CounselingImg = [
    [
      Couns1,
      Couns2,
      Couns3,
      Couns4,

    ],


  ];
  const scrollRefs = useRef([]);


  const scrollRefsfor = useRef([]);
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
  useEffect(() => {
    scrollRefsfor.current.forEach((ref) => {
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
  const sizesMapRow0 = {
    0: { width: "25rem", height: "10rem" }, // home5
    2: { width: "25rem", height: "10rem" }, // home5
    8: { width: "20rem", height: "10rem" }, // home5

  };

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
            <h1 className="text-white text-xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-alegreya">
              Anubhoo
            </h1>
          </div>
        </div>


        <div
          className="absolute bottom-0 left-0 w-full bg-[#545656]/50 
               py-1 sm:py-2 border-t border-[#a8d940] flex justify-center items-center"
        >
          <h2 className="text-white font-semibold text-sm sm:text-lg md:text-2xl text-center px-2 font-alegreya">
            #MakingIndiaTraumaInformed
          </h2>
        </div>

      </section>



      <section className="py-5  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5  ">

        <div
          className="container  relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BackImage})` }}

        >
          <div className="-mt-[5.5rem] lg:-mt-20 flex gap-7 flex-wrap lg:flex-nowrap justify-center items-center">
            <div className="flex flex-wrap justify-center gap-16 m-auto mt-28">
              {programs?.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center group hover:cursor-pointer"
                >
                  <div className="relative border-2 border-[#a8d940] rounded-3xl 
          lg:w-[250px] lg:h-[180px] 
          md:w-[200px] md:h-[150px] 
          sm:w-[190px] sm:h-[140px] 
          flex items-center justify-center text-center">

                    <div className="absolute inset-0 m-2 border-2 border-[#a8d940] rounded-3xl pointer-events-none -top-5 -left-5"></div>

                    <div className="p-4">
                      <p className="text-black font-medium sm:text-sm md:text-base lg:text-xl font-alegreya">
                        {card?.description}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-12 text-justify font-medium text-base tab:text-xl py-8">

            <div className="space-y-3 mt-10 relative flex flex-col gap-5 leading-10">
              <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                By empowering those at the frontlines of care, i.e. mental health professionals, caregivers, teachers, social workers, and community leaders, with trauma-informed tools, knowledge,
                and skills, we are creating an <strong>army of changemakers</strong> equipped to offer holistic support. In today’s time, there isn’t even one psychologist per 1,00,000 individuals in India, a staggering gap
                that leaves <strong>millions without access to timely support.</strong> Unless more people are trained and equipped, this gap will only widen, leaving communities more vulnerable and isolated.

              </p>
              <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                At the heart of our work is the <strong>Trauma-Informed Care Practices  (TICP) course </strong>, our flagship program, <strong>a first-of-its-kind in India.</strong> This training goes beyond surface-level learning,
                reaching into the nervous system and reshaping the way participants understand themselves and those they serve. Complementing this, we also deliver short trainings,
                which act as a gateway to accessibility for young professionals. These capsules introduce participants to diverse modalities of intervention, while offering a safe,
                supportive space to notice how their own nervous systems respond to different approaches. For many, this becomes the first step toward expanding their skill set and capacity for presence.

              </p>
              <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                Through all of these trainings, our intent remains the same: to bridge the gap between need and care, and to make India Trauma-Informed.
              </p>
            </div>
          </div>
          <div className=" mx-auto">
            <div className="overflow-hidden relative border-t-2 border-b-2 border-[#a8d940] py-2">
              <div className="flex whitespace-nowrap  " style={{
                animation: "marquee 20s linear infinite",
              }}>
                {[...textItems, ...textItems].map((item, index) => (
                  <span
                    key={index}
                    className="text-lg font-medium text-black mx-8 font-alegreya"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full overflow-hidden">
              {imagesRowsfor.map((row, rowIndex) => (
                <div key={rowIndex} className="my-6">

                  <div
                    ref={(el) => (scrollRefsfor.current[rowIndex] = el)}
                    className="flex overflow-hidden relative space-x-4 px-4"
                  >
                    {row.map((img, i) => (
                      <ImageAutoFit key={i} src={img} index={i} sizesMap={sizesMapRow0} />
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </section>


      <Heading Text="Projects and Initiatives" />

      <section className="  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5  ">

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-center w-[99%] font-medium lg:text-3xl md:text-2xl sm:text-2xl text-2xl  py-4 font-alegreya">
            Certificate Course on Trauma-Informed Care Practices
          </h1>
          <h3 className="text-center w-[55%] font-medium text-xl md:text-xl lg:text-2xl font-alegreya">First-of-its-kind in India</h3>

        </div>
        <div className="relative z-10 flex flex-col gap-8 text-justify font-medium text-base tab:text-xl lg:py-2 py-1">

          <div className="space-y-3 mt-5 relative flex flex-col gap-5 leading-10">
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              As the post-pandemic world transitioned into a digital mode of living and learning, we designed an <strong>online training program for mental health practitioners across the country.</strong>
              Beginning with eight participants in the first cohort, we laid the foundation for our dream of making India trauma-informed. In 2023, we <strong>introduced Supervision</strong> and revised the course structure to align with participant needs.
              The Supervision model added <strong>ongoing support and facilitated real-time integration</strong> of TIC principles and counselling skills.


            </p>

            <div className="w-full py-4">
              <div className="flex flex-col gap-6">
                {VideoCallImg.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-wrap justify-center gap-8 px-4"
                  >
                    {row.map((item, i) => (
                      <div
                        key={i}
                        className="relative w-[310px] bg-black border-2 border-black sm:w-[280px] md:w-[250px] lg:w-[240px] h-[150px] sm:h-[180px] md:h-[190px] lg:h-[160px] rounded-xl overflow-hidden shadow-md"
                      >
                        <img
                          src={item.img}
                          alt={`image-${i}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center text-sm sm:text-base py-1">
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>


            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
              With each passing year, we are moving closer to a <strong>structured, standardised, and sustainable training model,</strong> while remaining deeply responsive to the evolving needs. Designed for practitioners, by practitioners, and facilitated by professionals with
              years of field experience, this is not just an educational programme but an <strong>initiative grounded in practice and lived experiences.</strong> We are equipping young and seasoned professionals with the knowledge, skills, and sensitivity needed to work with a
              trauma-informed lens, guiding them to integrate embodied practices, reflective tools, and real-world strategies that support their personal and professional journeys.
              <a href="/ticp" className="text-blue-500 underline hover:text-blue-700">Read more...</a>
            </p>


          </div>
        </div>
      </section>



      <section className="py-5  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5   ">

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-center w-[99%] font-medium lg:text-3xl md:text-2xl sm:text-2xl text-2xl  py-4 font-alegreya">
            Psychological First-Aid for Youth Community Leaders
          </h1>
          <h3 className="text-center w-[55%] font-medium text-xl md:text-xl lg:text-2xl font-alegreya">In collaboration with Restless Development, India</h3>

        </div>
        <div className="relative z-10 flex flex-col gap-12 text-justify font-medium text-base tab:text-xl py-5">

          <div className="space-y-3 mt-5 relative flex flex-col gap-5 leading-10">
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              This initiative was born from the need <strong>to support  lived realities and create safe spaces for</strong> people from marginalised
              sections of society, especially <strong>the LGBTQIA+  community.</strong> Queer individuals often navigate multiple layers of invisibility,
              violence, discrimination, loneliness, and rejection.

            </p>

            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
              This training equipped youth leaders from the queer community in <strong>Psychological First Aid,</strong> enabling them to facilitate wellbeing
              circles and break the silence around mental health. By creating safe, healing-centred spaces, we aimed to replace ignorance with dialogue,
              invisibility with recognition, and isolation with community. Through <strong>trauma-informed and queer-affirmative approaches,</strong> the program provided LGBTQIA+
              youth leaders with tools to understand their emotions, navigate difficult experiences, strengthen relationships, and cultivate compassion for themselves and others.


            </p>

          </div>
        </div>
        <div className="w-full py-4">
          <div className="flex flex-col gap-6">
            {AidImg.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-8 px-4 "
              >
                {row.map((img, i) => (
                  <div
                    key={i}
                    className="w-[340px] sm:w-[290px] md:w-[200px] lg:w-[240px] h-[200px] sm:h-[180px] md:h-[150px] lg:h-[160px] rounded-3xl overflow-hidden shadow-md border-4 border-[#545656]"
                  >
                    <img
                      src={img}
                      alt={`image-${i}`}
                      className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-center w-[99%] font-medium lg:text-3xl md:text-2xl sm:text-2xl text-2xl  py-4 font-alegreya">
            Foundation of Trauma-Informed Counselling in Schools
          </h1>
          <h3 className="text-center w-[55%] font-medium text-xl md:text-xl lg:text-2xl font-alegreya">In collaboration with  State Council of Educational Research and Training (SCERT), Delhi</h3>

        </div>
        <div className="relative z-10 flex flex-col gap-8 text-justify font-medium text-base tab:text-xl py-5">

          <div className="space-y-3 mt-5 relative flex flex-col gap-5 leading-10">
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              Recognising that Government school teachers are often the first line of support for children navigating complex emotions and trauma,
              this initiative was designed to equip them with basic counselling skills through a trauma-informed lens. The intention was to move
              beyond theory and provide teachers with practical tools that could be used in real-life classroom situations.
            </p>

            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              The training focused on <strong>building safe connections with children,</strong> deepening understanding of trauma and its manifestations,
              and strengthening essential counselling skills such as active listening, empathy, reflection, and validation. Teachers were
              also introduced to principles of trauma-informed care: safety, trust, choice, collaboration, and empowerment, and explored
              strategies to remain grounded when managing high-risk disclosures.
            </p>
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
              This training planted the seeds for a more compassionate school ecosystem where teachers feel better equipped to hold space for children with care, curiosity, and dignity.</p>

          </div>
        </div>
        <div className="w-full py-4">
          <div className="flex flex-col gap-6">
            {CounselingImg.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-8 px-4"
              >
                {row.map((img, i) => (
                  <div
                    key={i}
                    className="w-[340px] sm:w-[300px] md:w-[290px] lg:w-[240px] h-[210px] sm:h-[200px] md:h-[190px] lg:h-[160px] rounded-3xl overflow-hidden shadow-md border-2 border-[#545656]"
                  >
                    <img
                      src={img}
                      alt={`image-${i}`}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </section>

      <div
        className="w-full relative bg-no-repeat bg-right overflow-hidden"
        style={{
          backgroundImage: `url(${BackImage})`,
          backgroundSize: "cover",     // full-size image
          backgroundPosition: "left", // only show right side
          backgroundClip: "content-box",
        }}
      >


        <section className="py-5  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5  ">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="flex flex-col justify-center lg:w-[80%]  w-full">
              <h1 className="text-center w-[99%] font-medium lg:text-3xl md:text-2xl sm:text-2xl text-2xl  py-4 font-alegreya">
                Short Trainings
              </h1>
              <h3 className="text-black font-medium text-xl sm:text-xl lg:text-2xl text-center  mt-2 font-alegreya">
                Bridging the gap from Theory to Practice
              </h3>
              <div className="relative z-10 flex flex-col gap-8 text-justify font-medium text-base tab:text-xl py-5">

                <div className="space-y-3 mt-5 relative flex flex-col gap-5 leading-10">
                  <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                    Systemic and financial barriers often make access to quality training difficult. To address this gap, we introduced high-quality,
                    low-cost training programmes across multiple modalities of care. From emotional release tools like{" "}
                    <strong>Emotional Freedom Tapping</strong>, to creative and expressive approaches like{" "}
                    <strong>Arts-Based Therapy</strong>, to reflective practices such as{" "}
                    <strong>Internal Family Systems</strong>, each session is led by experienced professionals in the field.
                    We are able to bring trauma-informed learning to communities often left out of such spaces, including professionals in remote areas of Kashmir.
                  </p>

                  <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                    This initiative has been supported by the Azim Premji Philanthropy Initiatives. With the support of more funding partners,
                    we aspire to expand such trainings further, creating accessible, inclusive spaces for mental health professionals across the country.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-5 w-[340px] sm:w-[620px] md:w-[720px] lg:w-[450px] h-[600px] sm:h-[600px] md:h-[890px] lg:h-[450px] ">
              <img
                src={show1}
                alt="Training group 1"
                className="rounded-3xl w-full max-w-md h-35 sm:h-25 lg:h-[16rem] object-cover   border-2 border-[#545656]"
              />
              <img
                src={show2}
                alt="Training group 2"
                className="rounded-3xl w-full max-w-md h-35 sm:h-25 lg:h-[16rem] object-cover border-2 border-[#545656]"
              />
              <img
                src={show3}
                alt="Training group 3"
                className="rounded-3xl w-full max-w-md h-35 sm:h-25 lg:h-[16rem] object-cover border-2 border-[#545656]"
              />
              {/* <img
              src={show4}
              alt="Training group 4"
              className="rounded-3xl w-full max-w-md h-35 sm:h-25 lg:h-[16rem] object-cover border-2 border-[#545656]"
            /> */}
            </div>
          </div>
        </section>

        <section className="py-5  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5  ">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start justify-center items-center gap-3">
            <div className="flex justify-center lg:w-1/2 ">
              <img
                src={bharat}
                alt="Training Bharat"
                className=" w-full object-contain object-center"
              />
            </div>

            <div className="flex flex-col justify-center lg:w-1/2 w-full">
              <h1 className="text-center w-[99%] font-medium lg:text-3xl md:text-2xl sm:text-2xl text-2xl  py-4 font-alegreya">
                Trauma-Informed Team Training
              </h1>
              <h3 className="text-center  font-medium text-xl sm:text-xl lg:text-2xl font-alegreya">
                In Collaboration with Vartamaan Care Network, Tinsukia, Assam
              </h3>

              <div className="relative z-10 flex flex-col gap-5 text-justify font-medium text-base tab:text-xl ">

                <div className="space-y-3 mt-10 relative flex flex-col gap-5 leading-10">
                  <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                    In 2024, I Am Wellbeing partnered with Vartamaan Care Network, a Section 8 Mental Health Organisation in Tinsukia,
                    Assam, to provide <strong>Trauma-Informed Mental Health Training</strong> to their team of counsellors. While rooted in the core
                    principles of our Trauma-Informed Care Practices, this programme was built from scratch, carefully adapted to
                    meet participants where they were in their learning journey and professional practice.
                  </p>

                  <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                    This collaboration marked an important step for I Am Wellbeing: entering into a new community in the Northeast, and <strong>contributing to a network
                      of care for survivors from culturally and ethnically marginalised backgrounds.</strong> By equipping professionals with trauma-informed tools, we not
                    only strengthened the capacity of the Vartamaan team but also expanded the circle of support available to the wider community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-5  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5  ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="flex flex-col justify-center lg:w-[80%]  w-full">
            <h1 className="text-center w-[99%] font-medium lg:text-3xl md:text-2xl sm:text-2xl text-2xl  py-4 font-alegreya">
              Capacity Building and Supervision
            </h1>
            <h3 className="text-black font-medium text-xl sm:text-xl lg:text-2xl text-center mt-4 font-alegreya">
              In Collaboration with Badlav,
              Lucknow, Uttar Pradesh
            </h3>

            <div className="relative z-10 flex flex-col gap-5 text-justify font-medium text-base tab:text-xl py-2">

              <div className="space-y-3 mt-10 relative flex flex-col gap-10 leading-10">
                <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                  I Am Wellbeing partnered with Badlav in 2022, an organisation dedicated to empowering, rehabilitating, and linking <strong>survivors of
                    homelessness and addiction</strong> to employment opportunities and mainstream society. Recognising the complex challenges faced by this
                  historically deprived community, our collaboration <strong>aimed to strengthen the capacity of Badlav’s care providers and mental health
                    counsellors while also creating a trauma-informed module for group sessions</strong> with individuals navigating addiction and adverse life circumstances.

                </p>

                <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                  This initiative has been supported by the Azim Premji Philanthropy Initiatives. With the support of more funding partners,
                  we aspire to expand such trainings further, creating accessible, inclusive spaces for mental health professionals across the country.
                  This module introduced the team to the brain biology of trauma and addiction, as well as techniques like EFT, somatic work, and arts-based tools.
                  Through this collaboration, we were able to bring a new lens and awareness into a space where survivors have long faced systemic neglect, stigma, and social exclusion.

                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="flex flex-col items-center lg:items-end gap-5 w-[340px] sm:w-[620px] md:w-[720px] lg:w-[450px] h-[300px] sm:h-[600px] md:h-[890px] lg:h-[450px] ">
            <img
              src={capacity1}
              alt="Training group 1"
              className="rounded-2xl w-full h-full object-cover object-center border-2 border-[#545656]"
            />
            <img
              src={capacity2}
              alt="Training group 2"
              className="rounded-2xl w-full h-full object-cover object-center border-2 border-[#545656]"
            />
            {/* <img
              src={capacity3}
              alt="Training group 3"
              className="rounded-2xl w-full max-w-md h-35 sm:h-25  lg:h-[16rem]  object-cover object-center  border-2 border-[#545656] "
            /> */}

          </div>
        </div>
      </section>

      <section className="py-5  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5   ">

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-center w-[99%] font-medium lg:text-3xl md:text-2xl sm:text-2xl text-3xl  py-4 font-alegreya">
            Corporate Trainings
          </h1>
          <h3 className="text-center lg:w-[55%] w-[80%] font-medium text-xl md:text-xl lg:text-2xl font-alegreya">In Collaboration with multiple organisations like Azure Power and JIST Media</h3>

        </div>
        <div className="relative z-10 flex flex-col gap-5 text-justify font-medium text-base tab:text-xl ">

          <div className="space-y-3  lg:mt-10 mt-5 relative flex flex-col gap-5 leading-10">
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              In addition to training mental health professionals in the field, we are dedicated to creating a holistic system of support for anyone engaging in meaningful
              interactions with other human beings. Our efforts extend beyond traditional mental health settings to include the facilitation of <strong>diverse corporate and
                institutional training programs</strong> aimed at enhancing individual and collective well-being. We provide various specialised trainings such as <strong>POSH (Prevention of Sexual Harassment)</strong>
              to ensure safe and inclusive workplaces, <strong>Team Building and Communication</strong> to strengthen interpersonal dynamics, and Developing a Healthy Work Environment to boost productivity and team satisfaction.



            </p>
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
              Our comprehensive approach acknowledges that mental and emotional health are integral to every aspect of human interaction. By addressing these areas, we aim to cultivate environments where individuals
              and teams can feel a sense of safety and security and thrive both personally and professionally.
            </p>

            <div className="w-full ">
              <div className="my-6 flex flex-col gap-[6px]">
                <div className="border-t-4 border-[#a8d940] w-full"></div>
                <div className="border-t-4 border-[#a8d940] w-full"></div>
              </div>

              {imagesRows.map((row, rowIndex) => (
                <div key={rowIndex} className="my-6">

                  <div
                    ref={(el) => (scrollRefs.current[rowIndex] = el)}
                    className="flex overflow-hidden relative space-x-4 px-4"
                  >
                    {row.map((img, i) => (
                      <ImageAutoFit key={i} src={img} index={i} sizesMap={sizesMapRow0} />
                    ))}
                  </div>


                </div>
              ))}
              <div className="my-6 flex flex-col gap-[6px]">
                <div className="border-t-4 border-[#a8d940] w-full"></div>
                <div className="border-t-4 border-[#a8d940] w-full"></div>
              </div>

            </div>


          </div>
        </div>
        <div className="flex flex-col justify-center items-center  px-4 lg:px-11 md:px-6 sm:px-5 xs:px-4">
          <h1 className="text-center w-[99%] font-bold text-xl max-md:text-3xl max-md:text-center lg:text-4xl py-4 font-alegreya">
            Other Milestones over the years...
          </h1>

        </div>
        <div className=" lg:py-16 py-8 px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {milestone?.map((card, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center group hover:cursor-pointer  "
              >
                <div className="relative border-2 border-[#a8d940] rounded-3xl w-[280px] sm:w-[250px] md:w-[260px] lg:w-[270px] xl:w-[300px] h-[190px] sm:h-[180px] md:h-[190px] lg:h-[200px] xl:h-[210px]  shadow-md hover:shadow-lg transition-all duration-300 mx-10 my-5">
                  <div className="absolute inset-0 m-2 border-2 border-[#a8d940] rounded-3xl pointer-events-none -top-6 -left-6"></div>

                  <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
                    <p className="text-black font-bold text-base sm:text-base md:text-lg mb-2 break-words font-alegreya">
                      {card?.tite}
                    </p>
                    <p className="text-black font-medium text-sm sm:text-sm md:text-base leading-snug break-words font-alegreya">
                      {card?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      <div className="bg-[#545656] py-4 flex justify-center items-center my-5">
        <h1 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-alegreya">
          7000+ professionals trained and counting...
        </h1>
      </div>

    </section>
  );
};

export default Programe;
