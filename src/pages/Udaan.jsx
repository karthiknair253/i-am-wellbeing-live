import React, { useEffect, useRef } from 'react'
import heroimageudaan from "../imgs/program-images/udaanHero.png";

import { ImageAutoFit } from '../components/ImageAutoFit';
const peoples = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/4.svg`;
import map from "../imgs/program-images/map.png";
import { motion } from "framer-motion"; // Framer Motion for animation
import { FaMapMarkerAlt } from "react-icons/fa"; // Location icon
import TicVideo1 from "../imgs/tic/Tic.png"
import BackImage from "../imgs/tic/treeback1.png"
import { Heading } from '../components/heading';


const Udaan = () => {
    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };
    const Udaan = [
        {
            description: "Holistic, long-term and consistent therapy support",
        },
        {
            description: "Safe, supportive, and compassionate space for the clients",
        },
        {
            description: "Exploring and processing deep-rooted underlying trauma",
        },
    ];


    return (
        <>
            <section className="w-full pt-[80px] md:pt-0">
                <section
                    className="relative h-[40vh] sm:h-[45vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] 
                             flex items-center justify-center overflow-hidden bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${heroimageudaan})`,
                    }}
                >

                    <div className="relative z-10 flex flex-col items-center text-center px-4">
                        <div
                            className="border border-[#a8d940] px-4 sm:px-10 md:px-16 lg:px-20 
                                 py-1 sm:py-2 md:py-3 bg-[#545656]/70 rounded-xl"
                        >
                            <h1 className="text-white text-xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-alegreya">
                                Udaan
                            </h1>
                        </div>
                    </div>


                    <div
                        className="absolute bottom-0 left-0 w-full bg-[#545656]/50 
                               py-1 sm:py-2 border-t border-[#a8d940] flex justify-center items-center"
                    >
                        <h2 className="text-white font-semibold text-sm sm:text-lg md:text-2xl text-center px-2 font-alegreya">
                            Breaking the Cycle of Intergenerational Trauma
                        </h2>
                    </div>

                </section>



                <div className="py-5  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5  ">
                    <div className="-mt-5 lg:-mt-10 flex gap-7 flex-wrap lg:flex-nowrap">
                        <div className="flex flex-wrap justify-center gap-16 m-auto mt-28">
                            {Udaan?.map((card, index) => (
                                <div key={index} className="flex flex-col justify-center items-center group hover:cursor-pointer">
                                    <div className="relative border-2 border-[#a8d940] rounded-3xl w-[250px] h-[160px] sm:w-[200px] sm:h-[140px] md:w-[220px] md:h-[150px] lg:w-[250px] lg:h-[160px] flex items-center justify-center">
                                        <div className="absolute inset-0 m-2 border-2 border-[#a8d940] rounded-3xl pointer-events-none -top-6 -left-6"></div>

                                        <div className="relative z-10 p-4 flex items-center justify-center text-center">
                                            <p className="text-black font-medium text-sm sm:text-sm md:text-base lg:text-xl font-alegreya">
                                                {card?.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=" text-xl  mx-auto mt-10 ">
                        <div className="space-y-3 mt-5 relative flex flex-col gap-10 leading-10">
                            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                                Udaan is our Individual therapy initiative grounded in the belief that <strong>access to quality mental health care is a fundamental right.</strong> With a nuanced understanding of interdivality and marginalization,
                                our team of qualified therapists provide online sessions to individuals from multiple states across India. In an unsafe world, this initiative builds <strong>personal ecosystems of safety and compassion.</strong>

                            </p>

                        </div>
                    </div>

                </div>


                <Heading Text="Projects and Initiatives " />


                <div
                    className="w-full relative bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${BackImage})` }}

                >
                    <section className="py-5  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5  ">
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-center w-[99%] font-medium lg:text-5xl md:text-4xl sm:text-3xl text-2xl  py-4 font-alegreya">
                                Low-Cost Therapy Programme
                            </h1>
                            <h3 className="text-center w-[55%] font-medium text-xl md:text-xl lg:text-2xl font-alegreya">Making Therapy Accessible, Available, and Affordable</h3>

                        </div>

                        <div className="about-us text-xl w-full  mx-auto mt-5 ">
                            <div className="space-y-3 mt-10 relative flex flex-col gap-10 leading-10">
                                <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                                    In the beginning of 2023, we re-launched our high-quality, low-cost therapy initiative which opened doors for mental health support for survivors all over India.
                                    <strong>125 individuals reached out</strong> through our therapy request form <strong>organically</strong> within a year, reflecting a growing trust in accessible mental health support, and 82
                                    of those individuals initiated the therapy process under the Udaan program. Clients have reached out from <strong>21 states across India,</strong> showing a wide geographical spread.
                                    This includes Tier 2 cities like Dhanbad, Rourkela, and Tier 3/rural areas like Village Bhushunpur, Dumka, Koraput, Ghatsila, Noorkhah.
                                </p>


                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 mt-8">
                            <div className="relative w-full lg:w-1/2 max-md:w-2/3 max-md:m-auto max-xs:w-full">
                                <img
                                    src={map}
                                    alt="Map Illustration"
                                    className="w-full h-full "
                                />

                                {[
                                    { top: "15%", left: "24%", duration: 1 },
                                    { top: "25%", left: "35%", duration: 1.5 },
                                    { top: "37%", left: "60%", duration: 2 },
                                    { top: "45%", left: "26%", duration: 2.5 },
                                    { top: "45%", left: "55%", duration: 3 },
                                    { top: "55%", left: "45%", duration: 3.5 },
                                    { top: "60%", left: "18%", duration: 4 },
                                    { top: "65%", left: "39%", duration: 4.5 },
                                    { top: "70%", left: "30%", duration: 5 },
                                    { top: "75%", left: "24%", duration: 5.5 },
                                    { top: "80%", left: "32%", duration: 6 },
                                    { top: "85%", left: "30%", duration: 6.5 },
                                    // Additional Location Icons
                                    { top: "32%", left: "16%", duration: 1.8 },
                                    { top: "40%", left: "20%", duration: 2.2 },
                                    { top: "34%", left: "78%", duration: 2.7 },
                                    { top: "50%", left: "60%", duration: 3.3 },
                                    { top: "35%", left: "45%", duration: 3.9 },
                                    { top: "7%", left: "30%", duration: 4.5 },
                                ].map(({ top, left, duration }, index) => (
                                    <motion.div
                                        key={index}
                                        className="absolute"
                                        style={{ top, left }}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.3 }}
                                        transition={{ duration }}
                                        variants={iconVariants}
                                    >
                                        <FaMapMarkerAlt className="text-[#029390] text-xl sm:text-2xl lg:text-3xl" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Right Section with Text and Illustration */}
                            <div className="w-full lg:w-1/2">
                                <div className="about-us text-xl w-full  mx-auto ">
                                    <div className="space-y-3 mt-10 relative flex flex-col gap-10 leading-10">
                                        <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                                            We onboarded <strong>10 trauma-informed therapists</strong> as consultants from our Trauma-Informed Care Practitioners (TICP) cohorts.
                                            This represents a critical step in <strong>bridging the gap</strong> between a shortage of trained professionals and the need for affordable, high-quality therapy.
                                        </p>
                                        <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                                            The intersection of TICP (Anubhoo) and Udaan is fostering a sustainable network of practitioners committed to trauma-informed care.

                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 lg:mt-[28%]">
                                    <img
                                        src={peoples}
                                        alt="Illustration"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>


                    </section>
                    <section className="py-5  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5  ">
                        <div className="flex flex-col justify-center  w-full py-5">

                            <h1 className="text-center lg:w-[77%] w-full font-medium lg:text-3xl md:text-2xl sm:text-2xl text-3xl  py-4 font-alegreya">
                                Support for survivors of addiction and homelessness
                            </h1>

                            <h3 className="text-center lg:w-[77%] w-full font-medium text-xl md:text-xl lg:text-2xl font-alegreya">
                                In collaboration with Badlav,<br />
                                Lucknow, Uttar Pradesh
                            </h3>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">


                            <div className="flex flex-col justify-center w-full">


                                <div className="text-xl w-full  mx-auto ">
                                    <div className="space-y-3 mt-5 relative flex flex-col gap-10 leading-10">
                                        <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                                            In addition to building the team's capacity through Anubhoo, we also initiated an <strong>individual therapy program for survivors of addiction and homelessness.</strong>
                                            This leg of the program created a safe space for individuals coming from a place of deep mistrust, isolation, and societal alienation. Trauma-informed principles,
                                            in addition to various arts-based tools, enabled these survivors to rebuild trust in themselves and those around them.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="flex justify-center  rounded-5xl overflow-hidden">
                                <img
                                    src={TicVideo1}
                                    alt="Training Bharat"
                                    style={{ borderRadius: '15px' }}
                                    className=" w-[500px] h-[250px] object-cover "
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </>

    )
}

export default Udaan

