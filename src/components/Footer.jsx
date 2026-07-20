import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from '../components/BlurryImages';


const logo = `${import.meta.env.VITE_PUBLIC_URL}/Home/logonew.png`;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer bg-black text-white lg:pt-5 pb-5 '>
      {/* <div className='max-w-5xl m-auto flex lg:flex-row flex-col lg:gap-10 items-start  p-10 lg:p-0'> */}
       
        <div className='pl-6 py-4 row align-items-baseline sm:flex sm:justify-around w-full '>
          <div className='col-md-6 text-left'>
          <p className='footer-copyright text-white mt-1 text-xl max-md:text-lg '>
              ©2025 Nairatmya Foundation. All rights reserved.
            </p>
            <p className="text-white text-base py-4">
              Registration No. CIN-U85310UP2019NPL120957
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 text-center lg:text-center">
            <p className="text-xl text-white pr-6">
             Website developed by The Barabari Collective
            </p>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
