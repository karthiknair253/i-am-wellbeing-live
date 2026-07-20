import React, { useEffect, useRef } from 'react'
import AryaHero from "../imgs/program-images/Aryahero.png";

import Glow1 from "../imgs/tic/glow1.png"
import Glow2 from "../imgs/tic/glow2.png"
import Glow3 from "../imgs/tic/glow3.png"
import Glow4 from "../imgs/tic/glow4.png"
import Glow5 from "../imgs/tic/glow5.png"

import BackImage from "../imgs/tic/treeback1.png"
import Mother1 from "../imgs/program-training/Mother1.jpg"
import Mother2 from "../imgs/program-training/Mother2.jpg"
import Mother3 from "../imgs/program-training/Mother3.png"
import Mother4 from "../imgs/program-training/Mother4.jpg"
import Mother5 from "../imgs/program-training/Mother5.png"

import show1 from "../imgs/program-training/show1.jpg"
import show2 from "../imgs/program-training/show2.jpg"
import show3 from "../imgs/program-training/show3.jpg"
import Safety1 from "../imgs/program-images/safety1.jpg"
import Safety2 from "../imgs/program-images/safety2.jpg"
import Safety3 from "../imgs/program-images/safety3.jpg"

import { ImageAutoFit } from '../components/ImageAutoFit';
import { Heading } from '../components/heading';


const Aryan = () => {
    const scrollRefs = useRef([]);
    const scrollRefsfor = useRef([]);
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
    const MotherRows = [
        [
            Mother1,
            Mother2,
            Mother3,
            Mother4,
            Mother5
        ],


    ];
    const imagesRows = [
        [
            Glow1,
            Glow2, Glow3, Glow4, Glow5, Glow1, Glow2, Glow3, Glow4, Glow5
        ],


    ];
    const Arya = [
        {
            description: "Trauma-informed group work for holistic wellbeing ",
        },
        {
            description: "Creating a system for support and a community safety net",
        },
        {
            description: "Designed specifically for people from different marginalised communities ",
        },
    ];

    const sizesMapRow0 = {
        0: { width: "25rem", height: "10rem" }, // home5
        2: { width: "25rem", height: "10rem" }, // home5

        4: { width: "25rem", height: "10rem" }, // home5
        8: { width: "25rem", height: "10rem" }, // home9
    };
    return (
        <section className="w-full pt-[80px] md:pt-0">

            <section
                className="relative h-[40vh] sm:h-[45vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] 
             flex items-center justify-center overflow-hidden bg-center bg-cover"
                style={{
                    backgroundImage: `url(${AryaHero})`,
                }}
            >

                <div className="relative z-10 flex flex-col items-center text-center px-4">
                    <div
                        className="border border-[#a8d940] px-4 sm:px-10 md:px-16 lg:px-20 
                 py-1 sm:py-2 md:py-3 bg-[#545656]/70 rounded-xl"
                    >
                        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-alegreya">
                            Project Arya
                        </h1>
                    </div>
                </div>


                <div
                    className="absolute bottom-0 left-0 w-full bg-[#545656]/50 
               py-1 sm:py-2 border-t border-[#a8d940] flex justify-center items-center"
                >
                    <h2 className="text-white font-semibold text-sm sm:text-lg md:text-2xl text-center px-2 font-alegreya">
                        Creating ecosystems of care

                    </h2>
                </div>

            </section>

            <div
                className="w-full relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${BackImage})` }}

            >
                <div className="lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">
                    <div className="-mt-20 lg:-mt-20 flex  flex-wrap lg:flex-nowrap">
                        <div className="flex flex-wrap justify-center lg:gap-16 gap-10 m-auto mt-28">
                            {Arya?.map((card, index) => (
                                <div key={index} className="flex flex-col justify-center items-center group hover:cursor-pointer">
                                    <div className="relative border-2 border-[#a8d940] rounded-3xl w-[250px] h-[160px] sm:w-[200px] sm:h-[140px] md:w-[220px] md:h-[150px] lg:w-[250px] lg:h-[160px] flex items-center justify-center">
                                        <div className="absolute inset-0 m-2 border-2 border-[#a8d940] rounded-3xl pointer-events-none -top-6 -left-6"></div>

                                        {/* Text container */}
                                        <div className="relative z-10 p-4 flex items-center justify-center text-center">
                                            <p className="text-black font-medium text-md sm:text-base md:text-base lg:text-lg fonfont-alegreya">
                                                {card?.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-us text-xl w-full max-w-screen-xl mx-auto  ">
                        <div className="space-y-3 mt-10 relative flex flex-col gap-5 leading-10">

                            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                                It is a <strong>unique socio-emotional learning program with a trauma-informed lens.</strong> It includes <strong>contextually designed experiential modules</strong> in English and Hindi for different
                                age groups delivered online and offline. Project Arya addresses trauma at <strong>personal and systemic levels,</strong> acknowledging that healing is a shared journey and safety must be built into the structures around us.

                            </p>
                            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                                We are creating ripples of change across diverse communities and different stages of life. Each of our programs is <strong>carefully designed to meet the unique needs</strong> of the group
                                we are working with, whether it is middle school students finding their voice or individuals engaged in daily labour seeking support.  We witness remarkable shifts in self-confidence,
                                emotional awareness, and regulation, small steps that transform into life-changing growth.

                            </p>
                            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                                At the heart of our work is the belief that <strong>change begins with safety.</strong> By creating spaces of trust, we plant seeds of openness and curiosity, encouraging individuals to explore the depths of their inner selves.

                            </p>
                        </div>
                    </div>

                </div>



                <Heading Text="Projects and Initiatives" />


                <section className="lg:py-5 py-0  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-center w-[99%] font-medium lg:text-4xl md:text-3xl sm:text-2xl text-3xl  py-4 font-alegreya">
                            Long-Term Holistic Socio-Emotional Learning
                        </h1>
                        <h3 className="text-center w-[55%] font-medium text-lg md:text-xl lg:text-2xl font-alegreya">With Newgen Software Technologies</h3>

                    </div>

                    <div className="about-us text-xl w-full max-w-screen-xl mx-auto ">
                        <div className="space-y-3 mt-5 relative flex flex-col lg:gap-10 gap-2 leading-10 font-alegreya">
                            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                                From the very inception of I Am Wellbeing, this has been one of our most meaningful and enduring partnerships. Since 2015, we have worked both
                                online and offline, reaching across age groups, genders, and communities living through marginalisation, to create a space with safety and compassion.
                            </p>
                            <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                                Through a standardised Social and Emotional Learning (SEL) framework, we integrate holistic support into existing livelihood programs, nurturing self-awareness,
                                emotional growth, and compassion for self and others. <strong>Beginning with just 50 children, this initiative has now reached more than 4,000 young individuals.</strong>
                                Each session of the program is tailored to student-specific needs and capacities from grade <strong>6th to 12th</strong> and beyond, ensuring that every participant feels seen, supported, & empowered.
                            </p>

                        </div>
                    </div>
                    <div className="w-full ">
                        <div className="my-6 flex flex-col gap-[6px]">
                            <div className="border-t-4 border-[#a8d940] w-full"></div>
                            <div className="border-t-4 border-[#a8d940] w-full"></div>
                        </div>

                        {imagesRows.map((row, rowIndex) => (
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
                        <div className="my-6 flex flex-col gap-[6px]">
                            <div className="border-t-4 border-[#a8d940] w-full"></div>
                            <div className="border-t-4 border-[#a8d940] w-full"></div>
                        </div>


                    </div>
                </section>
            </div>






            <section className="lg:py-5 py-0  lg:px-10 sm:px-2 md:px-5   p-4 lg:p-4 px-4 xl:px-[14%] max-md:px-5 ">

                <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-center w-[99%] font-medium lg:text-4xl md:text-3xl sm:text-2xl text-3xl lg:py-4  py-2 font-alegreya">
                        Empowering mothers from marginalised communities
                    </h1>
                    <h3 className="text-center w-[55%] font-medium text-lg md:text-xl lg:text-2xl font-alegreya">With Newgen Software Technologies</h3>

                </div>

                <div className="about-us text-xl w-full max-w-screen-xl mx-auto ">
                    <div className="space-y-3 mt-5 relative flex flex-col gap-0 lg:gap-8 leading-10">
                        <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                            Taking a step further into the community and deepening our impact, we began working with the women, the mothers of children engaged in the SEL program,
                            creating space for their healing and growth alongside their children’s.

                        </p>
                        <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                            This program is <strong>designed for women who have long carried invisible burdens, who often place their families’ needs above their own, without recognition or care.</strong>
                            Generations of silencing emotions, associating self-care with guilt, and navigating systemic barriers have left many women isolated, exhausted, and carrying
                            cycles of trauma forward.

                        </p>
                        <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">
                            Rooted in trauma-informed care, the program creates a safe space for women to centre their own well-being, healing, and growth. Through arts-based tools,
                            embodied practices, and group dialogues, women reconnect with themselves, voice their needs, and rebuild inner strength.
                        </p>

                        <div className="w-full ">
                            <div className="my-6 flex flex-col gap-[6px]">
                                <div className="border-t-4 border-[#a8d940] w-full"></div>
                                <div className="border-t-4 border-[#a8d940] w-full"></div>
                            </div>
                            {MotherRows.map((row, rowIndex) => (
                                <div key={rowIndex} className="my-6">

                                    <div
                                        ref={(el) => (scrollRefs.current[rowIndex] = el)}
                                        className="flex overflow-hidden relative space-x-4 px-4"
                                    >
                                        {[...row, ...row].map((img, i) => (
                                            <div
                                                key={i}
                                                className="flex-shrink-0 w-60 h-40 rounded-xl overflow-hidden shadow-md"
                                            >
                                                <ImageAutoFit src={img} index={i} />

                                            </div>
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
            </section>
            <section className="lg:py-5 py-0 px-4 sm:px-6 lg:px-10  p-4 lg:p-4  xl:px-[14%] max-md:px-5 ">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
                    <div className="flex flex-col justify-center lg:w-[60%]  w-full">

                        <h1 className="text-center w-[99%] font-medium lg:text-4xl md:text-3xl sm:text-2xl text-3xl  py-4 font-alegreya">
                            Support Building Safety for Survivors
                        </h1>

                        <h3 className="text-center  font-medium text-lg sm:text-xl font-alegreya">
                            YP Foundation
                        </h3>


                        <div className="about-us text-xl w-full  mx-auto mt-5 ">
                            <div className="space-y-3 relative flex flex-col lg:gap-8 gap-0 leading-10">
                                <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                                    This collaboration was born from <strong>a simple yet powerful intention: to create a space where pain could be witnessed, emotions could be named,
                                        and healing could begin gently, collectively, and without judgment.</strong> Working with displacement survivors, we sought to honour invisible wounds
                                    shaped by loss, hardship, and silence.

                                </p>

                                <p className="text-justify text-lg tab:text-2xl leading-10 font-alegreya">

                                    It allowed participants to rebuild a relationship with themselves, reclaim their boundaries, and find expression for what had long remained unspoken.
                                    What began as individual healing gradually transformed into a shared journey, where no one carried their emotions alone, and the seeds of compassion
                                    and community care began to take root.


                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="flex flex-col items-center lg:items-end gap-5 lg:w-[50%] sm:w-[90%] w-full lg:mt-10 mt-0">
                        <img
                            src={Safety1}
                            alt="Training group 1"
                            className="rounded-2xl w-full max-w-md h-25 sm:h-[15rem] lg:h-[14rem] object-cover"
                        />
                        <img
                            src={Safety2}
                            alt="Training group 2"
                            className="rounded-2xl w-full max-w-md h-25 sm:h-[15rem] lg:h-[14rem] object-cover"
                        />
                        {/* <img
                            src={Safety3}
                            alt="Training group 3"
                            className="rounded-2xl w-full max-w-md h-35 sm:h-[20rem] lg:h-[14rem] object-cover object-center"
                        /> */}

                    </div>
                </div>
            </section>


            <div className="bg-[#545656] py-4 flex justify-center items-center my-5">
                <h1 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center  font-alegreya">
                    Over 1,15,000 lives impacted
                </h1>
            </div>
        </section>
    )
}

export default Aryan

