import React from "react";
import heroimage from "../imgs/home-images/resourceshero.png"

// const angerImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/anger.png`;
const backpainImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/backpain.png`;
const beathingImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/beathing.png`;
const helplessnessImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/helplessness.png`;
const safeImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/safe.png`;
const selfImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/self.png`;

import greenbg from "../imgs/program-images/greenbg2.png";
const calendarBg = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/calender%20bg.svg`;

import calendar from "../imgs/program-images/calendar.png";
import support from "../imgs/program-images/support.webp";
import Poster1 from "../imgs/program-images/poster1.png";
import Poster2 from "../imgs/program-images/poster2.png";
import Poster3 from "../imgs/program-images/poster3.png";


import textAboveImg from "../imgs/program-images/supportImg.png";

const Media = () => {
  const data = [
    {
      video: "https://www.youtube.com/watch?v=1mAtRJVRg2w",
      img: backpainImg,
      name: "EFT  for Anger (Hindi)",
    },
    {
      video: "https://youtu.be/nBV3jKW8cGI",
      img: helplessnessImg,
      name: "EFT  for Anger (English)",
    },
    {
      video: "https://www.youtube.com/watch?v=37iA_yEnNBM",
      img: beathingImg,
      name: "EFT  for Hopelessness (Hindi)",
    },
    {
      video: "https://youtu.be/yJR_jpwlU_M",
      img: safeImg,
      name: "EFT for Hopelessness (English)",
    },
    {
      video: "https://www.youtube.com/watch?v=ApAHrurhXno",
      img: selfImg,
      name: "Breathing Exercises (Hindi)",
    },
    {
      video: "https://www.youtube.com/watch?v=PtmJzGHdXOs",
      img: selfImg,
      name: "EFT  for Back Pain (Hindi)",
    },
    {
      video: "https://www.youtube.com/watch?v=VFoZk6Cn4lc",
      img: selfImg,
      name: "Safe Space Visualisation (Hindi)",
    },
    {
      video: "https://youtu.be/P98MzJBjwpE",
      img: selfImg,
      name: "Safe Space Visualisation (English)",
    },
    {
      video: "https://youtu.be/pWrNo1-h0fw",
      img: selfImg,
      name: "EFT for Anxiety (Hindi)",
    },
    {
      video: "https://youtu.be/MNqUjwYrVeA",
      img: selfImg,
      name: "EFT for Anxiety (English)",
    },
    {
      video: "https://youtu.be/EBv35ZVZ5Pg",
      img: selfImg,
      name: "EFT for Grief (English)",
    },
    {
      video: "https://youtu.be/sjitY6X65nA",
      img: selfImg,
      name: "EFT for Grief (Hindi)",
    },
    {
      video: "https://www.youtube.com/watch?v=7uGY76z5mZ4",
      img: selfImg,
      name: "EFT for Self Worth (Hindi)",
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
            <h1 className="text-white text-xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-alegreya">
              Resources

            </h1>
          </div>
        </div>
      </section>



      {/* Grief Support Booklet */}
      <section className="py-10  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">
        <section className="mt-10 px-4 sm:px-10 md:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6  font-alegreya">
            Grief Support Booklet
          </h1>

          <div className="text-justify font-medium text-sm sm:text-base md:text-lg lg:text-xl space-y-5 p-2 sm:p-4 md:p-8">
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              Grief is an ocean—ever-consuming, ever-flowing. It cannot simply be “gotten over,” nor is there one right way to move through it. Grief is unpredictable, deeply personal, and often overwhelming. What we can do is hold space for it, approach it with gentleness, and allow it to move at its own pace.
            </p>

            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              Recognizing how isolating grief can feel, we created a booklet as a small offering—a drop of support in the vast ocean of the unknown. This resource is designed for anyone accompanying a loved one through their journey with loss. It acknowledges the silence, confusion, and helplessness that often surround grief, and offers compassionate guidance on how to be present without judgment or pressure.
            </p>
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              Our hope is that this booklet becomes a gentle companion—helping people feel less alone in their pain, and reminding caregivers and loved ones that while grief cannot be fixed, it can be witnessed, honored, and held with care.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-20 mt-6">
            <a
              href="https://drive.google.com/file/d/1LqXt0rwzBi2iUEH5mLJyL8TraP0mJueZ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[65%] sm:w-[40%] md:w-[28%] lg:w-[28%] cursor-pointer"

            >
              <img
                src={Poster1}
                alt="Grief Support Booklet"
                loading="lazy"
              />
            </a>

            <a href="https://drive.google.com/file/d/1iquxMUR9Gwv1ufmr3eqVUWM52L3x8Nah/view" target="_blank" className="w-[65%] sm:w-[40%] md:w-[28%] lg:w-[28%] cursor-pointer"
              rel="noopener noreferrer">
              <img
                src={Poster2}
                alt="Grief Support Booklet"
                loading="lazy"
              />
            </a>

            <a href="http://drive.google.com/file/d/1UqAB0_tA-WZ-xAnBIc79dGwz8hcKtjmX/view" target="_blank" rel="noopener noreferrer" className="w-[65%] sm:w-[40%] md:w-[28%] lg:w-[28%] cursor-pointer"
            >
              <img
                src={Poster3}
                alt="Grief Support Booklet"
                loading="lazy"
              />
            </a>
          </div>

        </section>

        {/* Emotional Freedom Technique */}
        <section className="mt-16 px-4 sm:px-10 md:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6  font-alegreya">
            Emotional Freedom Technique
          </h1>

          <div className="text-justify font-medium text-sm sm:text-base md:text-lg lg:text-xl space-y-5 p-2 sm:p-4 md:p-8">
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              Just like physical energy is stored in the body, emotional energy is also stored in the body. Think about how anger feels in the body, temperature rises, fists might curl up, heartbeat might increase or completely slow down. Any number of reactions might take place, proving the premise that emotions are felt and stored in the body.
            </p>
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              However, for many reasons like invalidation from others, unavailability of means or space for expression, or simply lack of awareness, the process of experiencing an emotion might not be completed, creating stagnation. This unprocessed emotional energy then gets stuck in the body.
            </p>
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              EFT or Emotional Freedom Technique is a brief novel intervention combining elements of exposure and cognitive therapy and somatic stimulation. This self-help modality can release emotions that are stored within our bodies. It is often referred to as “tapping” as it uses a two-finger tapping process on known acupuncture points, leading to a gradual release.
            </p>
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              Try it for yourself. Make sure to sit in a comfortable place and have some water next to you.
              Take breaks and enter this space with curiosity! </p>
          </div>
          <div className="lg:flex py-[3%] px-[3%] pt-[100px] md:pt-[4.5%] max-md:p-0 lg:gap-3 m-auto w-[99%] 2xl:px-[10%]">


            {/* Right side */}
            <div className="sm:flex sm:flex-wrap sm:flex-row sm:flex-1">
              {data.map((item, index) => {
                const videoId =
                  item.video.split("v=")[1]?.split("&")[0] ||
                  item.video.split("/").pop();
                return (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <iframe
                      width="100%"
                      height="250"
                      src={`${item.video
                        .replace("watch?v=", "embed/")
                        .replace(
                          "youtu.be/",
                          "www.youtube.com/embed/"
                        )}?loop=1&playlist=${videoId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <h2 className="text-center font-bold text-lg p-2">
                      {item.name}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        {/* Self-Care Calendar */}
        <section className="mt-16 px-4 sm:px-10 md:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6  font-alegreya">
            Self-Care Calendar
          </h1>

          <div className="text-justify font-medium text-sm sm:text-base md:text-lg lg:text-xl space-y-5 p-2 sm:p-4 md:p-8">
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              Self-Care Calendar, as the name suggests, is a thoughtfully designed tool that can be used by anyone to support them in their healing journey. It incorporates the mind-body-spirit triad and focuses on regulation and slow integration. Whether you are looking for some grounding exercises or just simple ways of connecting with yourself, this self-care calendar takes you on a journey that slowly enhances your ability to support yourself.
            </p>
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              Taking care of ourselves is the truest form of self-acknowledgement and acceptance. It is a step we take not to change anything about ourselves but to allow our body to receive rest, compassion, and nurturance.
            </p>
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

              Build in this 30-day Self-Care routine and allow yourself to soak in rest and slowness. If you find this helpful, write to us at info@iamwellbeing.in with your feedback and suggestions.
            </p>
          </div>

          <div
            // style={{
            //   backgroundImage: `url(${calendarBg})`,
            //   backgroundSize: "88%",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            // }}
            className="flex items-center justify-center py-2 w-full"
          >
            <a
              href="https://drive.google.com/file/d/1hZKTmrJrd7DCYk2e0tTH6nni1foR4jfR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[95%] sm:max-w-[80%] md:max-w-[60%]"
            >
              <img
                loading="lazy"
                src={calendar}
                alt="selfcare"
                className="w-full h-auto object-contain"
              />
            </a>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Media;
