import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";
import heroimage from "../imgs/home-images/traininghero.png"
import { Heading } from "../components/heading";
const stp3 = `${import.meta.env.VITE_PUBLIC_URL}/stp%20data/stp3.png`;

const stp0 = `${import.meta.env.VITE_PUBLIC_URL}/stp%20data/stp0.png`;
const videoposter = `${import.meta.env.VITE_PUBLIC_URL
  }/stp%20data/stpvideo1.png`;

const stpnew = `${import.meta.env.VITE_PUBLIC_URL}/stp%20data2/stp1.png`;
const stp5 = `${import.meta.env.VITE_PUBLIC_URL}/stp%20data2/stp5.png`;
const stp7 = `${import.meta.env.VITE_PUBLIC_URL}/stp%20data2/stp6.png`;
const stpnew3 = `${import.meta.env.VITE_PUBLIC_URL}/stp%20data2/stpnew.png`;
const stpnew2 = `${import.meta.env.VITE_PUBLIC_URL}/stp%20data2/stpnew2.png`;

const ShortTraining = () => {
  return (
    <>
      <section className="w-full pt-[80px] md:pt-0">

        <section
          className="relative h-[40vh] sm:h-[45vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] 
             flex items-center justify-center overflow-hidden bg-center bg-cover"
          style={{
            backgroundImage: `url(${heroimage})`,
          }}
        >

          <div className="relative z-10 flex flex-col items-center text-center  ">
            <div
              className="border border-[#a8d940] px-4 sm:px-10 md:px-16 lg:px-20 
                 py-1 sm:py-2 md:py-3 bg-[#545656]/70 rounded-xl"
            >
              <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-alegreya">
                Other Short Trainings
              </h1>
            </div>
          </div>


          <div
            className="absolute bottom-0 left-0 w-full bg-[#545656]/50 
               py-1 sm:py-2 border-t border-[#a8d940] flex justify-center items-center"
          >
            <h2 className="text-white font-semibold text-sm sm:text-lg md:text-2xl text-center px-2 font-alegreya">
              Bridging the gap from theory to practice
            </h2>
          </div>

        </section>

        <Heading Text="Rationale" />

        <section className="mt-5 px-4 sm:px-8 lg:px-20">

          <div className="lg:py-8 py-5  lg:px-10 sm:px-2 md:px-5 p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">

            <div className="space-y-3  relative flex flex-col gap-10 leading-10">

              <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                With the intention of <strong>building the capacity</strong> of young mental health professionals and students towards trauma-informed practices and holistic healing, I Am Wellbeing conducts various one / two-day trainings facilitated by experts from the field. The rationale behind these trainings stems from the recognition that while academic curricula provide theoretical foundations, a <strong>significant gap often exists between knowledge gained at institutions and the realities of practice.</strong> These trainings are designed to bridge that gap, equipping participants with hands-on skills, reflective practices, and a deeper understanding of trauma-informed care that goes beyond textbook definitions. The trainings are intentionally kept low-cost so that financial constraints do not become a barrier for students or early-career professionals who wish to upskill. In doing so, we intend to open up pathways to high-quality learning that would otherwise remain out of reach.
              </p>
              <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                The contribution for these trainings is kept between Rs. 500 and Rs. 1000 so as to keep them affordable and accessible. All contributions are used for Nairatmya Foundation's work with under-resourced communities. These trainings are open to all students and working professionals in the field of psychology.
              </p>
            </div>
          </div>
        </section>
        <Heading Text="Key Intentions for the Trainings:" />
        <section className="mt-5 px-4 sm:px-8 lg:px-20">

          <div className="lg:py-8 py-5  lg:px-10 sm:px-2 md:px-5 p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">
            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya ">
              <ul className="list-disc list-outside space-y-3  text-black text-lg tab:text-2xl leading-10 font-alegreya">
                <li>
                  Awareness of Healing Modalities: To facilitate a deeper understanding of various approaches and techniques for trauma healing.
                </li>
                <li>
                  Practical Tools for Practice: To support participants in building strategies and resources to navigate the challenges of starting and sustaining your professional journey.
                </li>
                <li>
                  Cultural Competence: To impart sensitivity and skills to provide inclusive, diverse, and culturally relevant mental health care.
                </li>
                <li>
                  Experiential Learning: To help build a strong foundation as a therapist through hands-on, practice-oriented training guided by experts.
                </li>
                <li>
                  Accessible Quality Training: To create access for high-quality, research-backed trainings that are affordable and designed to meet the needs of young professionals and students.
                </li>
              </ul>
            </p>

            <div className="space-y-3  relative flex flex-col gap-10 leading-10 mt-10">
              <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya ">

                If you would like these trainings to be conducted at your institution, be it for students or practicing individuals, then reach out to us at info@iamwellbeing.in
              </p>
              <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya ">

                And if you would like to support this initiative and help us create more such spaces that facilitate high-quality low-cost trainings, then donate here:
              </p>
            </div>

            <div className="lg:py-10 md:py-8 sm:py-5 py-5 flex justify-center">
              <a
                href="https://pages.razorpay.com/iamwellbeing#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-black lg:px-30 md:px-20 sm:px-10 px-10  py-3 rounded-full lg:text-5xl md:text-2xl text-xl font-semibold shadow-md hover:bg-[#fff8f3] border-2 border-[#f57c00] transition-all duration-300  font-alegreya"
              >
                Donate
              </a>
            </div>
          </div>
        </section>
      </section>


    </>
  );
};

export default ShortTraining;
