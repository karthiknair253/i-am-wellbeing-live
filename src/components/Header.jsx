import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/iamwellbeingservices/?_rdr" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/iamwellbeing_" },
  { icon: <FaXTwitter />, url: "https://x.com/iamwellbeing_?s=08" },
  { icon: <FaYoutube />, url: "https://youtube.com/@iamwellbeing.2015?si=46bI4JQ7_icR1gT9" },
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/i-am-3b17b8104" },
];

const logo = `${import.meta.env.VITE_PUBLIC_URL}/Home/logonew.png`;

const Header = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const [isAnubhooOpen, setIsAnubhooOpen] = useState(false);

  let aboutTimeout;
  let programTimeout;
  let anubhooTimeout;

  const handleAboutEnter = () => {
    clearTimeout(aboutTimeout);
    setIsAboutOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeout = setTimeout(() => {
      setIsAboutOpen(false);
    }, 200);
  };

  const handleProgramsEnter = () => {
    clearTimeout(programTimeout);
    setIsProgramsOpen(true);
  };

  const handleProgramsLeave = () => {
    programTimeout = setTimeout(() => {
      setIsProgramsOpen(false);
    }, 200);
  };

  const handleAnubhooEnter = () => {
    clearTimeout(anubhooTimeout);
    setIsAnubhooOpen(true);
  };

  const handleAnubhooLeave = () => {
    anubhooTimeout = setTimeout(() => {
      setIsAnubhooOpen(false);
    }, 200);
  };

  return (
    <>
      <header className="  w-full shadow-md  border-b ">
        <div className="top-bar bg-[#A7D841] text-sm md:flex hidden justify-end p-2 pr-8 gap-10">
          {SocialMedia.map((social, index) => (
            <div
              key={index}
              className="w-8 h-8 bg-black text-white text-base rounded-full flex justify-center scale-100 items-center hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <a target="_blank" href={social.url}>{social.icon}</a>
            </div>
          ))}
        </div>

        <div className="w-[100%] m-auto shadow-lg   items-center justify-between p-8  hidden md:flex">
          <div className="logo z-50 w-[120px] absolute top-4 left-5 hidden md:block">
            <Link to="/">
              <LazyLoadImage
                src={logo}
                alt=""
                className=""
                effect="blur"
                placeholder={<BlurryImages imgUrl="Home/logonew-small.png" />}
              />
            </Link>
          </div>

          <div className="absolute right-0">
            <ul className="flex sm:gap-4 lg:gap-6 gap-10 pr-2 relative flex-end ">
              <Link to="/">
                <li className="border border-black py-1 px-4 rounded-full text-center cursor-pointer">
                  Home
                </li>
              </Link>

              <li
                className="border border-black py-1 px-4 relative rounded-full text-center cursor-pointer"
                onMouseEnter={handleAboutEnter}
                onMouseLeave={handleAboutLeave}
              >
                About us
                <ul
                  className={`absolute w-[160px] text-center transition-all duration-300 right-[-60px] top-[3rem] bg-[#adeada] rounded-lg z-50
  ${isAboutOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                >
                  <Link to="/about-us">
                    <li className="text-black hover:text-gray-400 text-xl mt-3">
                      Our Team
                    </li>
                  </Link>

                  <li
                    className="relative"
                    onMouseEnter={handleProgramsEnter}
                    onMouseLeave={handleProgramsLeave}
                  >
                    <div className="text-black hover:text-black hover:font-bold text-xl mt-2 cursor-pointer flex justify-center items-center">
                      Our Programs
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    <div
                      className={`absolute left-full top-0 z-50 transition-all duration-300 ${isProgramsOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    >
                      <ul className="w-[140px] text-center text-[#bff0cf] bg-[#adeada] rounded-lg">
                        <li
                          className="relative"
                          onMouseEnter={handleAnubhooEnter}
                          onMouseLeave={handleAnubhooLeave}
                        >
                          <Link to="/anuboo">
                            <div className="text-black hover:text-gray-400 text-xl mt-3 flex justify-center items-center">
                              Anubhoo
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </Link>

                          <div
                            className={`absolute left-full top-0 z-50 transition-all duration-300 ${isAnubhooOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                          >
                            <ul className="w-[160px] text-center text-[#bff0cf] bg-[#adeada] rounded-lg">
                              <Link to="/ticp">
                                <li className="text-black hover:text-gray-400 text-xl pt-2">
                                  TICP
                                </li>
                              </Link>
                              <Link to="/short-training">
                                <li className="text-black hover:text-gray-400 text-xl pt-2 ">
                                  Other Trainings
                                </li>
                              </Link>
                            </ul>
                          </div>
                        </li>

                        <Link to="/udaan">
                          <li className="text-black hover:text-gray-400 text-xl mt-2">
                            Udaan
                          </li>
                        </Link>
                        <Link to="/aryan">
                          <li className="text-black hover:text-gray-400 text-xl mt-2 mb-2">
                            Project Arya
                          </li>
                        </Link>
                      </ul>

                    </div>
                  </li>
                </ul>
              </li>

              <Link to="/tic">
                <li className="border border-black py-1 px-4 rounded-full text-center cursor-pointer">
                  Trauma-Informed Care
                </li>
              </Link>

              <Link to="/media">
                <li className="border border-black py-1 px-4 rounded-full text-center cursor-pointer">
                  Resources
                </li>
              </Link>
              <Link to="/contact-us">
                <li className="border border-black py-1 px-4 rounded-full text-center">
                  Contact Us
                </li>
              </Link>
              <Link to="https://pages.razorpay.com/iamwellbeing#">
                <li className="border border-black py-1 px-4 rounded-full text-center">
                  Donate
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div
          className={`sub-menu group h-[150px] bg-[#029390] w-[250px] absolute right-[22%] z-10 transition-opacity duration-300 ease-in-out group-hover:block hidden`}
        ></div>
      </header>

      <div className="flex md:hidden   items-center justify-between px-4 mobile-header z-20 bg-white fixed top-0 w-full">
        <img loading="lazy" src={logo} alt="" className="w-[80px]" />
        <HiMenuAlt3
          className="text-3xl font-[300] cursor-pointer"
          onClick={() => setToggle(true)}
        />
      </div>

      <div
        onClick={(e) => {
          e.stopPropagation();
          setToggle(false);
        }}
        className={`fixed top-0 left-0 z-50 w-full h-screen bg-[rgba(0,0,0,0.6)] transition-all duration-300 ${toggle ? "translate-x-0" : "translate-x-[-1000px]"
          }`}
      ></div>

      <div
        className={`fixed top-0 md:hidden bg-[#F9F7F6] z-50 inset-0 w-full sm:w-[80%] transition-transform duration-300 ease-in-out transform ${toggle ? "translate-x-0" : "translate-x-[-1000px]"
          }`}
      >
        <div className="flex items-center justify-end w-[80%] m-auto bg-[#F9F7F6]">
          <button className="md:hidden pt-2" onClick={() => setToggle(false)}>
            <i className="fa-solid fa-close text-xl"></i>
          </button>
        </div>

        <div className="w-full h-full flex flex-col items-start pl-14 bg-[#F9F7F6] pt-20 text-sm gap-3">
          <Link
            to="/"
            className="font-[300] text-[#282A43] p-2 transition-all duration-300 hover:bg-gray-100 rounded-md"
            onClick={() => setToggle(false)}
          >
            HOME
          </Link>

          <button
            className="font-[300] text-[#282A43] p-2 rounded-md w-full text-left flex items-center justify-between pr-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>ABOUT US</span>
            {isOpen ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96" : "max-h-0"}`}
          >
            <ul className="ml-6 mt-4 flex flex-col gap-4">
              <Link to="/about-us" onClick={() => setToggle(false)}>
                <li className="text-gray-500">Our Team</li>
              </Link>

              <button
                className="text-gray-500 flex items-center justify-between pr-5 w-full text-left"
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
              >
                <span>Our Programs</span>
                {isProgramsOpen ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ml-4 ${isProgramsOpen ? "max-h-96" : "max-h-0"
                  }`}
              >
                <ul className="flex flex-col gap-4 mt-3">
                  <Link to="/anuboo" onClick={() => setToggle(false)}>
                    <li className="text-gray-500">Anubhoo</li>
                  </Link>
                  <Link to="/udaan" onClick={() => setToggle(false)}>
                    <li className="text-gray-500">Udaan</li>
                  </Link>
                  <Link to="/aryan" onClick={() => setToggle(false)}>
                    <li className="text-gray-500">Project Arya</li>
                  </Link>
                  <button
                    className="text-gray-500 flex items-center justify-between pr-5 w-full text-left"
                    onClick={() => setIsAnubhooOpen(!isAnubhooOpen)}
                  >
                    <span>About Anuboo</span>
                    {isAnubhooOpen ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
                  </button>
                </ul>

                <div
                  className={`overflow-hidden transition-all duration-500 gap-4 ${isAnubhooOpen ? "max-h-96" : "max-h-0"
                    }`}
                >
                  <ul className="flex flex-col gap-4 mt-3">

                    <Link to="/ticp" onClick={() => setToggle(false)}>
                      <li className="text-gray-500 ">TICP</li>
                    </Link>
                    <Link to="/short-training" onClick={() => setToggle(false)}>
                      <li className="text-gray-500">Other Training</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </ul>
          </div>

          <Link
            to="/tic"
            className="font-[300] text-[#282A43] p-2 transition-all duration-300 hover:bg-gray-100 rounded-md uppercase"
            onClick={() => setToggle(false)}
          >
            Trauma-Informed Care
          </Link>

          <Link
            to="/media"
            className="font-[300] text-[#282A43] p-2 transition-all duration-300 hover:bg-gray-100 rounded-md"
            onClick={() => setToggle(false)}
          >
            RESOURCES
          </Link>

          <Link
            to="/contact-us"
            className="font-[300] text-[#282A43] p-2 transition-all duration-300 hover:bg-gray-100 rounded-md"
            onClick={() => setToggle(false)}
          >
            CONTACT
          </Link>
          <Link
            to="https://pages.razorpay.com/iamwellbeing#"
            className="font-[300] text-[#282A43] p-2 transition-all duration-300 hover:bg-gray-100 rounded-md"
            onClick={() => setToggle(false)}
          >
            DONATE
          </Link>

         
        </div>
      </div>
    </>
  );
};

export default Header;